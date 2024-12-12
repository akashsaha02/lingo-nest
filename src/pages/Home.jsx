import { useEffect } from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="">
      <Helmet>
        <title>LingoNest | Home</title>
      </Helmet>

      {/* Banner/Slider Section */}

      {/* About Section */}


      {/* Success Section */}


      {/* Featured Lessons Section */}


      {/* Testimonials Section */}

    </div>
  );
};

export default Home;
