import { useParams } from "react-router-dom";
import VocabularyCard from "../components/VocabularyCard";
import { useData } from "../providers/DataProvider";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";


const LessonDetails = () => {


  const { languageData } = useData();
  const { lesson_no } = useParams();
  const vocabularies = languageData.filter(vocab => vocab.lesson_no === parseInt(lesson_no));
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <Helmet>
        <title>LingoNest | Lesson {lesson_no}</title>
      </Helmet>
      <h2 className="text-2xl font-bold">Lesson {lesson_no}</h2>
      <div className="grid grid-cols-1 gap-4">
        {vocabularies.map(vocab => (
          <VocabularyCard key={vocab.id} vocab={vocab} />
        ))}
      </div>
      <button
      onClick={() => navigate(-1)}
      className="bg-teal-500 text-white px-4 py-2 mt-4">Back to Lessons</button>
    </div>
  )
};

export default LessonDetails;
