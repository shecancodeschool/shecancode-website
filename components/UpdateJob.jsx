import React from 'react';
const JobModal = ({ show, onClose, job }) => {
    if (!show) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 sm:p-8">
        <div className="bg-white rounded-lg shadow-lg max-w-full sm:max-w-4xl w-full p-4 sm:p-8">
          <h2 className="text-2xl font-bold mb-4">Add new job</h2>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Front-end" className="border p-2 rounded w-full"/>
              <input type="text" placeholder="Kacyiru Impact Center" className="border p-2 rounded w-full"/>
              <input type="text" placeholder="negotiation" className="border p-2 rounded w-full"/>
              <input type="date" className="border p-2 rounded w-full"/>
              <input type="text" placeholder="Full-time" className="border p-2 rounded w-full"/>
              <input type="text" placeholder="False" className="border p-2 rounded w-full"/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <textarea placeholder="Manage and grow client YouTube channels. Develop and execute growth strategies to increase visibility and engagement. Create and edit high-quality video content for YouTube" className="border p-2 rounded w-full h-32"></textarea>
              <textarea placeholder="Manage and grow client YouTube channels. Develop and execute growth strategies to increase visibility and engagement. Create and edit high-quality video content for YouTube" className="border p-2 rounded w-full h-32"></textarea>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <textarea placeholder="Manage and grow client YouTube channels. Develop and execute growth strategies to increase visibility and engagement. Create and edit high-quality video content for YouTube" className="border p-2 rounded w-full h-32"></textarea>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input type="date" className="border p-2 rounded w-full"/>
              <input type="text" placeholder="Reporting to" className="border p-2 rounded w-full"/>
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded mr-2">Cancel</button>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default JobModal;
  