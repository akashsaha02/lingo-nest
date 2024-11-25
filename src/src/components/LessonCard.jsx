import { Link } from "react-router-dom";

const LessonCard = ({ lesson }) => {

    return (
        <div className="border p-4 shadow-md">
            <h3 className="text-lg font-bold">Lesson {lesson}</h3>
            <Link to={`/lesson/${lesson}`} className="text-teal-500">Start Lesson</Link>
        </div>
    );
}

export default LessonCard;
