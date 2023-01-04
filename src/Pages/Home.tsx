import { AdvertisementSection } from "../Components/Advertisement/AdvertisementSection";
import { Props } from "../Components/Advertisement/JobsAdv";
import { Footer } from "../Components/Footer/Footer";

export function Home({jobs, setJobs}: Props) {
  return (
    <div>
      <AdvertisementSection jobs={jobs} setJobs={setJobs}/>
      <Footer />
    </div>
  );
}
