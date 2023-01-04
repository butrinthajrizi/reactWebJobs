import { useEffect, useState } from "react";
import { SingleJob } from "./SingleJob";

export type Job = {
  id: number;
  logo: string;
  position: string;
  role: string;
  level: string;
  contract: string;
  languages: string[];
  tools?: string[];
  posted: string;
};

export type Props = {
  jobs: Job[]
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>
}

export function JobsAdv({jobs, setJobs}: Props) {
  

  useEffect(() => {
    fetch("http://localhost:4000/jobs")
      .then((r) => r.json())
      .then((jobsFromDb) => setJobs(jobsFromDb));
  }, []);

  function deleteAd(job: Job) {
    fetch(`http://localhost:4000/jobs/${job.id}`, {
      method: "DELETE",
    });

    const jobsCopy = JSON.parse(JSON.stringify(jobs));
    let updatedJobs = jobsCopy.filter((target: Job) => target.id !== job.id);

    setJobs(updatedJobs);
  }

  return (
    <div>
      {jobs.length === 0 ? (
        <p>Page is loading...</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <SingleJob key={job.id} job={job} deleteAd={deleteAd} />
          ))}
        </ul>
      )}
    </div>
  );
}
