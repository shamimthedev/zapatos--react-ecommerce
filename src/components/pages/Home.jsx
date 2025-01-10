import Blog from "../Blog";
import Brands from "../Brands";
import Footer from "../Footer";
import HappeningNow from "../HappeningNow";
import Header from "../Header";
import Hero from "../Hero";
import Newsletter from "../Newsletter";
import PerfectPair from "../PerfectPair";
import Trending from "../Trending";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <PerfectPair />
      <HappeningNow />
      <Trending />
      <Brands />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
