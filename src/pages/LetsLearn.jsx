import { Helmet } from "react-helmet";
import LessonCard from "../components/LessonCard";
import { Link } from "react-router-dom";

const LetsLearn = () => (
    <div className="p-4 bg-gray-800">
        <Helmet>
            <title>Let's Learn - Lingo Bingo</title>
        </Helmet>
        <h2 className="text-5xl font-extrabold text-center text-white tracking-tight mt-5 mb-10">
            <span className="text-accent-1">Let's</span> Learn
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-4">
            {[...Array(10).keys()].map(i => (
                <LessonCard key={i} lesson={i + 1} />
            ))}
        </div>
        <div className="mt-4 flex justify-center items-center flex-col gap-3">
            <h3 className="text-2xl mt-4 font-bold">Tutorial</h3>
            <iframe
                width=""
                height=""
                src="https://www.youtube.com/embed/example" // Replace with actual link
                title="YouTube video"
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <Link to='/tutorial'
                className="bg-accent-2 text-white px-4 py-2 my-5">
                View More
            </Link>
        </div>
    </div>
);

export default LetsLearn;
