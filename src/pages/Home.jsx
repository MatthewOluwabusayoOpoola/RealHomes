import About from "../components/about/AboutUs";
import More from "../components/more/More";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Find from "../components/find/Find";
import Assurance from "../components/assurance/Assurance";
import Client from "../components/client/Client";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Find />
      <More />
      <Assurance />
      <Client />
      <Footer />
    </>
  );
};

export default Home;
