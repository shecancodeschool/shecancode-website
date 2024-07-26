import React from 'react';

const JobModal = ({ show, onClose, job }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white w-[60%] h-auto rounded-lg shadow-lg p-8 overflow-y-auto transform translate-x-30">
        <h2 className="text-2xl font-bold mb-4">Add new job</h2>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Job title" defaultValue={job?.name} className="border p-2 rounded w-full" />
            <input type="text" placeholder="Location" defaultValue={job?.location} className="border p-2 rounded w-full" />
            <input type="text" placeholder="Negotiation" defaultValue={job?.negotiation} className="border p-2 rounded w-full" />
            <input type="date" placeholder="Date" defaultValue={job?.date} className="border p-2 rounded w-full" />
            <input type="text" placeholder="Job type" defaultValue={job?.type} className="border p-2 rounded w-full" />
            <input type="text" placeholder="Published" defaultValue={job?.published?.toString()} className="border p-2 rounded w-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <textarea placeholder="Job description" defaultValue={job?.description} className="border p-2 rounded w-full h-32"></textarea>
            <textarea placeholder="Requirements" defaultValue={job?.requirements} className="border p-2 rounded w-full h-32"></textarea>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <textarea placeholder="Responsibilities" defaultValue={job?.responsibilities} className="border p-2 rounded w-full h-32"></textarea>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input type="date" placeholder="Application deadline" defaultValue={job?.application_deadline} className="border p-2 rounded w-full" />
            <input type="text" placeholder="Reporting to" defaultValue={job?.reporting_to} className="border p-2 rounded w-full" />
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
