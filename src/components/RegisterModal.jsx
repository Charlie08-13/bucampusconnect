const RegisterModal = ({ link, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md text-center space-y-4">
        <h2 className="text-2xl font-bold">Register for Event</h2>
        <p className="text-gray-600">
          Click below to complete your registration.
        </p>

        <a
          href={link}
          target="_blank"
          className="block bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-bold"
        >
          Open Registration Form
        </a>

        <button
          onClick={onClose}
          className="text-gray-500 text-sm mt-3"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
