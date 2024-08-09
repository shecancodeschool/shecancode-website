"use client"
import { useState } from 'react';

const JobApplicantModal = ({ isOpen, onClose, applicant }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
        <h2 className="text-xl font-semibold mb-4">View Documents for {applicant.name}</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" value={applicant.role} className="border p-2 rounded" readOnly />
            <input type="text" value={applicant.name} className="border p-2 rounded" readOnly />
            <input type="text" value={applicant.phone} className="border p-2 rounded" readOnly />
            <input type="email" value={applicant.email} className="border p-2 rounded" readOnly />
            <input type="date" value={applicant.date} className="border p-2 rounded" readOnly />
            <input type="text" value={applicant.status} className="border p-2 rounded" readOnly />
            <input type="text" value={applicant.resume} className="border p-2 rounded" readOnly />
            <input type="text" value={applicant.coverLetter} className="border p-2 rounded" readOnly />
            <input type="date" value={applicant.nextDate} className="border p-2 rounded" readOnly />
          </div>
          <div className="flex justify-end space-x-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded">In Technical interview phase</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">In Interview</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Reject</button>
            <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicantModal;
