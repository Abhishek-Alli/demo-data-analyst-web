import React, { useState, useRef } from 'react';
import { X, Upload, Trash2, Plus, FileText, Lock } from 'lucide-react';
import { PortfolioItem } from '../types';

interface AdminProps {
  isOpen: boolean;
  onClose: () => void;
  isAuthenticated: boolean;
  onLogin: (success: boolean) => void;
  portfolioItems: PortfolioItem[];
  onAddItem: (item: PortfolioItem) => void;
  onDeleteItem: (id: string) => void;
}

const Admin: React.FC<AdminProps> = ({ 
  isOpen, 
  onClose, 
  isAuthenticated, 
  onLogin, 
  portfolioItems,
  onAddItem,
  onDeleteItem
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Dashboard Form State
  const [newItemTitle, setNewItemTitle] = useState('');
  const [newItemDesc, setNewItemDesc] = useState('');
  const [newItemType, setNewItemType] = useState<'report' | 'dashboard'>('dashboard');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock authentication
    if (email === 'abhishekalli29@gmail.com' && password === 'admin123') {
      onLogin(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemTitle || !selectedFile) return;

    // Create a Blob URL for the session to simulate upload
    const fileUrl = URL.createObjectURL(selectedFile);

    const newItem: PortfolioItem = {
      id: Date.now().toString(),
      title: newItemTitle,
      description: newItemDesc,
      type: newItemType,
      fileUrl: fileUrl,
      fileName: selectedFile.name,
      date: new Date().toLocaleDateString()
    };

    onAddItem(newItem);
    
    // Reset form
    setNewItemTitle('');
    setNewItemDesc('');
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        <div className="fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg leading-6 font-medium text-slate-900" id="modal-title">
                {isAuthenticated ? 'Admin Dashboard' : 'Owner Login'}
              </h3>
              <button onClick={onClose} className="text-slate-400 hover:text-slate-500">
                <X size={24} />
              </button>
            </div>

            {!isAuthenticated ? (
              /* Login Form */
              <div className="max-w-sm mx-auto py-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-cyan-100 p-3 rounded-full text-cyan-600">
                    <Lock size={32} />
                  </div>
                </div>
                <form onSubmit={handleLogin} className="space-y-4">
                  {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Email</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Password</label>
                    <input 
                      type="password" 
                      required
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                  <button type="submit" className="w-full bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                    Sign In
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-4">
                    Hint: Use 'abhishekalli29@gmail.com' and 'admin123'
                  </p>
                </form>
              </div>
            ) : (
              /* Dashboard */
              <div className="space-y-8">
                {/* Add Item Form */}
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <Plus size={18} /> Add New Portfolio Item
                  </h4>
                  <form onSubmit={handleAddItem} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Project Title</label>
                        <input 
                          type="text" 
                          required
                          value={newItemTitle}
                          onChange={e => setNewItemTitle(e.target.value)}
                          className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Type</label>
                        <select 
                          value={newItemType}
                          onChange={(e: any) => setNewItemType(e.target.value)}
                          className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                        >
                          <option value="dashboard">PowerBI Dashboard (.pbix)</option>
                          <option value="report">PDF Report</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Description</label>
                      <textarea 
                        required
                        value={newItemDesc}
                        onChange={e => setNewItemDesc(e.target.value)}
                        rows={2}
                        className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Upload File</label>
                      <div className="mt-1 flex items-center gap-4">
                        <input 
                          type="file" 
                          ref={fileInputRef}
                          required
                          accept=".pdf,.pbix"
                          onChange={e => setSelectedFile(e.target.files ? e.target.files[0] : null)}
                          className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button type="submit" className="bg-cyan-600 text-white py-2 px-6 rounded-md hover:bg-cyan-700 transition-colors flex items-center gap-2">
                        <Upload size={16} /> Publish Item
                      </button>
                    </div>
                  </form>
                </div>

                {/* List Items */}
                <div>
                  <h4 className="font-semibold text-slate-800 mb-4">Current Portfolio Items</h4>
                  <div className="bg-white border border-slate-200 rounded-lg divide-y divide-slate-200">
                    {portfolioItems.length === 0 ? (
                      <div className="p-4 text-center text-slate-500">No items added yet.</div>
                    ) : (
                      portfolioItems.map(item => (
                        <div key={item.id} className="p-4 flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-100 rounded text-slate-500">
                              <FileText size={20} />
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">{item.title}</p>
                              <p className="text-xs text-slate-500">{item.type} • {item.fileName}</p>
                            </div>
                          </div>
                          <button 
                            onClick={() => onDeleteItem(item.id)}
                            className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded"
                            title="Delete Item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;