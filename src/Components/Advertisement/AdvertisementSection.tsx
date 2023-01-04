import { AdvForm } from "./AdvForm";
import { JobsAdv, Props } from "./JobsAdv";

export function AdvertisementSection ({jobs, setJobs}: Props) {
    return (
        <div>
            <JobsAdv jobs={jobs} setJobs={setJobs} />
            <AdvForm jobs={jobs} setJobs={setJobs} />
        </div>
    )
}