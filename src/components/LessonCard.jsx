import { Link } from "react-router-dom";

const LessonCard = ({ lesson }) => {
  return (
    <div className="bg-blue-700 border border-blue-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-white mb-2">
        Lesson {lesson}
      </h3>
      <p className="text-sm text-base-200 mb-4">
        Explore interactive content and enhance your learning experience.
      </p>
      <Link
        to={`/lesson/${lesson}`}
        className="inline-block bg-accent-1 text-black font-semibold px-4 py-2 rounded-lg hover:text-gray-800 transition-colors duration-300"
      >
        Start Lesson
      </Link>
    </div>
  );
};

export default LessonCard;
