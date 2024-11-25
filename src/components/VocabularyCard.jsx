import { useState } from 'react';
import Modal from './Modal';

const VocabularyCard = ({ vocab }) => {
    const [showModal, setShowModal] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false); // State to track if speaking is in progress

    const difficultyColor = {
        easy: "bg-green-200",
        medium: "bg-yellow-200",
        difficult: "bg-red-200",
    };

    const pronounceWord = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'ja-JP'; // Japanese
        utterance.onstart = () => {
            setIsSpeaking(true); // Set speaking state to true when speech starts
        };
        utterance.onend = () => {
            setIsSpeaking(false); // Set speaking state to false when speech ends
        };
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className={`p-4 border ${difficultyColor[vocab.difficulty]}`} onClick={() => pronounceWord(vocab.word)}>
            <h3 className="text-xl font-bold">{vocab.word}</h3>
            <p>Meaning: {vocab.meaning}</p>
            <p>Pronunciation: {vocab.pronunciation}</p>
            <p>Part of Speech: {vocab.part_of_speech}</p>

            {/* Indication for Speaking */}
            {isSpeaking && <p className="text-teal-500 mt-2">Speaking...</p>}

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setShowModal(true);
                }}
                className="bg-teal-500 text-white px-2 py-1 mt-2"
            >
                When to Say
            </button>
            {showModal && <Modal vocab={vocab} onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default VocabularyCard;