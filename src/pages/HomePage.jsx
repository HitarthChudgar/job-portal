import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards.jsx";
import JobListings from "../components/JobListings.jsx";
import ViewJobs from "../components/ViewJobs.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewJobs />
    </>
  );
};

export default HomePage;
