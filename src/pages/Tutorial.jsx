import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Tutorial = () => {
  const navigate = useNavigate();

  // Sample YouTube video links
  const videos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/l9nh1l8ZIJQ",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/5NV6Rdv1a3I",
    "https://www.youtube.com/embed/ktvTqknDobU",
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <Helmet>
        <title key="title">LingoNest | Tutorial</title>
      </Helmet>

      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-teal-400 mb-8">
        Explore Language Tutorials
      </h1>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src={video}
                title={`Tutorial Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-teal-300">
                Tutorial {index + 1}
              </h3>
              <p className="text-sm text-gray-400">
                Learn and improve with engaging video content.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/start-learning")}
          className="px-6 py-3 bg-teal-500 text-white text-lg font-medium rounded-lg hover:bg-teal-400 transition duration-300"
        >
          Learn Vocabularies
        </button>
      </div>
    </div>
  );
};

export default Tutorial;
