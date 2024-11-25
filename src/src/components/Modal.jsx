const Modal = ({ vocab, onClose }) => (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-4 rounded shadow-lg">
            <h3 className="text-lg font-bold">{vocab.word}</h3>
            <p>Meaning: {vocab.meaning}</p>
            <p>When to Say: {vocab.when_to_say}</p>
            <p>Example: {vocab.example}</p>
            <button onClick={onClose} className="bg-red-500 text-white px-2 py-1 mt-2">Close</button>
        </div>
    </div>
);

export default Modal;

