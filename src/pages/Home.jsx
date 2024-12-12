import React, { useEffect } from 'react';
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
    <div className="bg-gray-900 text-white">
      <Helmet>
        <title>LingoNest | Home</title>
      </Helmet>

      {/* Banner/Slider Section */}
      <div
        className="relative h-[60vh] bg-gradient-to-r from-teal-700 to-blue-700 text-white flex items-center justify-center"
        data-aos="fade-up"
      >
        <div className="text-center max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Lingo Bingo!</h1>
          <p className="text-lg md:text-xl mb-6">
            Learn vocabulary in a fun and interactive way.
          </p>
          <Link
            to="/start-learning"
            className="bg-teal-600 text-white font-medium py-3 px-6 rounded-full hover:bg-teal-500 transition"
          >
            Start Learning
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 px-6 md:px-20 bg-gray-800" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-center mb-6">About Lingo Bingo</h2>
        <p className="text-gray-300 text-center leading-relaxed max-w-3xl mx-auto">
          Lingo Bingo is a language learning platform designed to make vocabulary
          retention simple and enjoyable. Start your journey towards mastering a new
          language today!
        </p>
      </div>

      {/* Success Section */}
      <div
        className="py-16 bg-gradient-to-r from-teal-600 to-blue-600"
        data-aos="fade-left"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-teal-200">
              <CountUp start={0} end={5000} duration={3} />
            </h3>
            <p className="text-gray-300">Users</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-teal-200">
              <CountUp start={0} end={50} duration={3} />
            </h3>
            <p className="text-gray-300">Lessons</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-teal-200">
              <CountUp start={0} end={500} duration={3} />
            </h3>
            <p className="text-gray-300">Vocabularies</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-teal-200">
              <CountUp start={0} end={20} duration={3} />
            </h3>
            <p className="text-gray-300">Tutorials</p>
          </div>
        </div>
      </div>

      {/* Featured Lessons Section */}
      <div className="py-16 px-6 md:px-20 bg-gray-800 max-w-7xl mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-6" data-aos="zoom-in">
          Featured Lessons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-xl transition"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-2">Lesson 1: Greetings</h3>
            <p className="text-gray-300">Master common greetings in your selected language.</p>
          </div>
          <div
            className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-xl transition"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold mb-2">Lesson 2: Daily Conversations</h3>
            <p className="text-gray-300">Learn vocabulary for everyday interactions.</p>
          </div>
          <div
            className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-xl transition"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-xl font-semibold mb-2">Lesson 3: Travel Essentials</h3>
            <p className="text-gray-300">Prepare for your travels with essential phrases.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-600 to-teal-600"
        data-aos="zoom-in"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-700 rounded-lg shadow" data-aos="fade-right">
              <p className="text-gray-300 italic">
                "Lingo Bingo made learning Japanese so enjoyable! The lessons are simple yet
                effective."
              </p>
              <p className="mt-4 font-semibold text-gray-100">- Sarah, Language Enthusiast</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow" data-aos="fade-left">
              <p className="text-gray-300 italic">
                "The vocabulary cards and tutorials are a game-changer for beginners like me."
              </p>
              <p className="mt-4 font-semibold text-gray-100">- John, Beginner Learner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
