import Button from "../Buttons/Buton";
import { Job } from "./JobsAdv";
import "./SingleJob.css";

type Props = {
  job: Job;
  deleteAd: (job: Job) => void
};

export function SingleJob({ job, deleteAd }: Props) {
  return (
    <div className="flex">
      <div>
        <img className="logo" src={job.logo} alt={job.position} />
      </div>
      <div className="job-details">
        <h2>{job.position}</h2>
        <span>
          {job.posted} · {job.contract} · {job.role}
        </span>
      </div>
      <div className="lang-tools">
        {job.languages
          ? job.languages.map((language) => <span>{language}</span>)
          : ""}

        {job.tools ? job.tools.map((tool) => <span>{tool}</span>) : ""}
      </div>
      <Button
        variant="delete"
        //@ts-ignore
        onClick={function () {
          deleteAd(job);
        }}
      >
        Remove
      </Button>
    </div>
  );
}
