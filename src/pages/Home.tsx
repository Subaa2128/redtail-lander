import Header from "../components/Header";
import Hero from "../components/Hero";
import LifeInsurance from "../components/Lifeinsurance";
import Commitment from "../components/Commitment";
import Footer from "../components/Footer";
import FrequentQuestion from "../components/FrequentQuestion";
import TellUs from "../components/TellUs";
import AboutUs from "../components/AboutUs";
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <LifeInsurance />
      <AboutUs />
      <Commitment />
      <TellUs />
      <FrequentQuestion />
      <Footer />
    </div>
  );
};

export default Home;
