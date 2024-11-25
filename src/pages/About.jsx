import { Helmet } from "react-helmet"


const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-16">
      <Helmet>
        <title>About - Lingo Bingo</title>
      </Helmet>
      {/* About Lingo Bingo Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">About Lingo Bingo</h2>
        <p className="mt-4 text-lg text-gray-600">
          Your Fun and Interactive Vocabulary Learning Application!
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="mt-12 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
        <p className="mt-4 text-lg text-gray-600">
          At Lingo Bingo, our mission is to make learning new languages simple, interactive, and fun.
          We focus on helping users expand their vocabulary and improve communication skills in various languages,
          ensuring they stay motivated and retain knowledge effectively.
        </p>
      </section>

      {/* Why Choose Lingo Bingo Section */}
      <section className="mt-12 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Why Choose Lingo Bingo?</h3>
        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-600">
          <li className="flex items-center">
            <span className="text-xl mr-3 text-yellow-500">🌟</span>
            Interactive learning with vocabulary flashcards
          </li>
          <li className="flex items-center">
            <span className="text-xl mr-3 text-yellow-500">📚</span>
            Structured lessons categorized by difficulty levels
          </li>
          <li className="flex items-center">
            <span className="text-xl mr-3 text-yellow-500">🎧</span>
            Pronunciation help with voice features
          </li>
          <li className="flex items-center">
            <span className="text-xl mr-3 text-yellow-500">📈</span>
            Progress tracking and fun gamified experience
          </li>
          <li className="flex items-center">
            <span className="text-xl mr-3 text-yellow-500">🌍</span>
            Support for multiple languages
          </li>
        </ul>
      </section>

      {/* Meet the Developers Section */}
      <section className="mt-12 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Meet the Developers</h3>
        <p className="mt-4 text-lg text-gray-600">
          Lingo Bingo was developed by an enthusiastic programmer passionate about language learning and technology.
          With expertise in React, Firebase, and responsive design, this project was crafted to deliver a seamless and enjoyable user experience.
        </p>
        <p className="mt-2 text-lg text-gray-600">
          <span className="font-semibold">Technologies Used:</span> React, JavaScript, Firebase, Responsive Design, and Animation
        </p>
      </section>

      {/* Have Feedback Section */}
      <section className="mt-12 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Have Feedback?</h3>
        <p className="mt-4 text-lg text-gray-600">
          We’d love to hear from you! Share your thoughts, suggestions, or just say hello.
        </p>
        <p className="mt-2 text-lg text-gray-600">
          Contact us at <a href="mailto:support@LingoNest.com" className="text-teal-500 hover:text-teal-700">support@LingoNest.com</a>
        </p>
      </section>
    </div>
  )
}

export default About
