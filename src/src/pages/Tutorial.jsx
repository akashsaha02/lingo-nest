import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';


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
    <div className="p-6">
      <Helmet>
        <title key="title">LingoNest | Tutorial</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-6">Learn the Language - Tutorials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={video}
              title={`Tutorial Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate('/start-learning')}
          className="btn btn-primary px-6 py-3 text-lg"
        >
          Learn Vocabularies
        </button>
      </div>
    </div>
  );
};

export default Tutorial;
