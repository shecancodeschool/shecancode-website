"use client"
import React, { useState } from 'react';

const AddNewJob = () => {
  const [formData, setFormData] = useState({
    jobName: '',
    jobLocation: '',
    jobType: '',
    salary: '',
    jobDuration: '',
    jobRequired: '',
    responsibility: '',
    about: '',
    requirements: '',
    enrolled: '',
    reportingTo: '',
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('');

  const validate = () => {
    const errors = {};
    if (!formData.jobName) errors.jobName = 'Job Name is required';
    if (!formData.jobLocation) errors.jobLocation = 'Job Location is required';
    if (!formData.jobType) errors.jobType = 'Job Type is required';
    if (!formData.salary) errors.salary = 'Salary is required';
    if (!formData.jobDuration) errors.jobDuration = 'Job Duration is required';
    if (!formData.jobRequired) errors.jobRequired = 'Job Required is required';
    if (!formData.responsibility) errors.responsibility = 'Responsibility is required';
    if (!formData.about) errors.about = 'About is required';
    if (!formData.requirements) errors.requirements = 'Requirements is required';
    if (!formData.enrolled) errors.enrolled = 'Enrolled is required';
    if (!formData.reportingTo) errors.reportingTo = 'Reporting to is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmissionStatus('Job has been added successfully.');
      setErrors({});
      setFormData({
        jobName: '',
        jobLocation: '',
        jobType: '',
        salary: '',
        jobDuration: '',
        jobRequired: '',
        responsibility: '',
        about: '',
        requirements: '',
        enrolled: '',
        reportingTo: '',
      });
    } else {
      setSubmissionStatus('');
      setErrors(validationErrors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-[17px] text-[#317ACC] leading-[16px] font font-semibold mb-6">Add New Job</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="md:flex md:space-x-6">
            <div className="flex-1">
              <input
                type="text"
                name="jobName"
                value={formData.jobName}
                onChange={handleInputChange}
                placeholder="Job Name"
                className="mt-1 text-[10px] text-[#222B45] block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
              {errors.jobName && <p className="text-red-500">{errors.jobName}</p>}
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="jobLocation"
                value={formData.jobLocation}
                onChange={handleInputChange}
                placeholder="Job Location"
                className="mt-1 block text-[10px] text-[#222B45]  font w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
              {errors.jobLocation && <p className="text-red-500">{errors.jobLocation}</p>}
            </div>
          </div>
          <div className="md:flex md:space-x-6">
            <div className="flex-1">
              <input
                type="text"
                name="jobType"
                value={formData.jobType}
                onChange={handleInputChange}
                placeholder="Job Type"
                className="mt-1 block text-[10px] text-[#222B45] font w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
              {errors.jobType && <p className="text-red-500">{errors.jobType}</p>}
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                placeholder="Salary"
                className="mt-1 block text-[10px] text-[#222B45]  font w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
              {errors.salary && <p className="text-red-500">{errors.salary}</p>}
            </div>
          </div>
          <div className="md:flex md:space-x-6">
            <div className="flex-1">
              <input
                type="text"
                name="jobDuration"
                value={formData.jobDuration}
                onChange={handleInputChange}
                placeholder="Job Duration"
                className="mt-1 block text-[10px] text-[#222B45]  font w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
              {errors.jobDuration && <p className="text-red-500">{errors.jobDuration}</p>}
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="jobRequired"
                value={formData.jobRequired}
                onChange={handleInputChange}
                placeholder="Job Required"
                className="mt-1 block w-full text-[10px] text-[#222B45] font  border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
              {errors.jobRequired && <p className="text-red-500">{errors.jobRequired}</p>}
            </div>
          </div>
          <div className="md:flex md:space-x-6">
            <div className="flex-1">
              <textarea
                name="responsibility"
                value={formData.responsibility}
                onChange={handleInputChange}
                placeholder="Responsibility"
                className="mt-1 block w-full text-[10px] font text-[#222B45]  border border-gray-300 rounded-md shadow-sm py-2 px-3"
                rows="3"
              ></textarea>
              {errors.responsibility && <p className="text-red-500">{errors.responsibility}</p>}
            </div>
            <div className="flex-1">
              <textarea
                name="about"
                value={formData.about}
                onChange={handleInputChange}
                placeholder="About"
                className="mt-1 block w-full font text-[10px] text-[#222B45]  border border-gray-300 rounded-md shadow-sm py-2 px-3"
                rows="3"
              ></textarea>
              {errors.about && <p className="text-red-500">{errors.about}</p>}
            </div>
          </div>
          <div>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleInputChange}
              placeholder="Requirements"
              className="mt-1 block text-[10px] text-[#222B45]  font w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              rows="3"
            ></textarea>
            {errors.requirements && <p className="text-red-500">{errors.requirements}</p>}
          </div>
          <div className="md:flex md:space-x-6">
            <div className="flex-1">
              <input
                type="text"
                name="enrolled"
                value={formData.enrolled}
                onChange={handleInputChange}
                placeholder="ExpiredAt"
                className="mt-1 block text-[10px] text-[#222B45]  font w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
              {errors.enrolled && <p className="text-red-500">{errors.enrolled}</p>}
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="reportingTo"
                value={formData.reportingTo}
                onChange={handleInputChange}
                placeholder="Reporting to"
                className="mt-1 block text-[10px] font text-[#222B45]  w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
              {errors.reportingTo && <p className="text-red-500">{errors.reportingTo}</p>}
            </div>
          </div>
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent  font text-[13px]  font-medium rounded-md text-[#FFFFFF] bg-[#317ACC] "
              >
                Add New Job
              </button>
            </div>
          </div>
        </form>
        {submissionStatus && <p className="mt-4 text-green-500">{submissionStatus}</p>}
      </div>
    </div>
  );
};

export default AddNewJob;
