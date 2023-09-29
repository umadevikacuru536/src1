import React, { useState } from 'react';

const Hi = () => {
  const [criteria, setCriteria] = useState({
    location: '',
    jobType: '',
    keywords: '',
  });

  const [jobAlerts, setJobAlerts] = useState([]); // Store user's job alerts
  const [newJobListings, setNewJobListings] = useState([]); // Store new job listings

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCriteria({ ...criteria, [name]: value });
  };

  const createJobAlert = () => {
    // Add the criteria to the list of job alerts
    setJobAlerts([...jobAlerts, criteria]);
    setCriteria({
      location: '',
      jobType: '',
      keywords: '',
    });
  };

  const checkForNewJobListings = () => {
    // In a real application, you would fetch job listings from an API.
    // Here, we simulate fetching new job listings.
    const newJobs = [
      { title: 'Software Engineer', location: 'New York', type: 'Full-time', keywords: 'React' },
      // Add more job listings here
    ];

    setNewJobListings(newJobs);
  };

  const notifyUser = (job) => {
    // In a real application, you would use a notification library or service to display notifications.
    console.log(`New job alert: ${job.title} in ${job.location}`);
  };

  const handleAlerts = () => {
    // Check each job alert against new job listings
    jobAlerts.forEach((alert) => {
      newJobListings.forEach((job) => {
        // Check if the job listing matches the alert criteria
        if (
          job.location.toLowerCase() === alert.location.toLowerCase() &&
          job.type.toLowerCase() === alert.jobType.toLowerCase() &&
          job.title.toLowerCase().includes(alert.keywords.toLowerCase())
        ) {
          // Notify the user about the match
          notifyUser(job);
        }
      });
    });
  };

  return (
    <div>
      <h2>Job Alerts</h2>
      <div>
        <h3>Create Job Alert</h3>
        <label>
          Location:
          <input type="text" name="location" value={criteria.location} onChange={handleInputChange} />
        </label>
        <label>
          Job Type:
          <input type="text" name="jobType" value={criteria.jobType} onChange={handleInputChange} />
        </label>
        <label>
          Keywords:
          <input type="text" name="keywords" value={criteria.keywords} onChange={handleInputChange} />
        </label>
        <button onClick={createJobAlert}>Create Alert</button>
      </div>
      <div>
        <h3>Check for New Job Listings</h3>
        <button onClick={checkForNewJobListings}>Check Now</button>
      </div>
      <div>
        <h3>Manage Job Alerts</h3>
        <ul>
          {jobAlerts.map((alert, index) => (
            <li key={index}>{`Location: ${alert.location}, Job Type: ${alert.jobType}, Keywords: ${alert.keywords}`}</li>
          ))}
        </ul>
        <button onClick={handleAlerts}>Check Alerts</button>
      </div>
    </div>
  );
};

export default Hi;
