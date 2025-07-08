const ProgramCard = ({ primary }) => {
  const baseStyle = "w-full md:w-80 border rounded-xl p-4 shadow-sm";
  return (
    <div className={`${baseStyle} ${primary ? "border-blue-600" : ""}`}>
      <div className="mb-2">
        <div className="text-sm font-medium text-gray-500">Justice Institute of British Columbia</div>
        <div className="text-xs bg-gray-100 text-gray-700 inline-block px-2 py-1 rounded mt-1">Postgraduate Diploma</div>
      </div>
      <h2 className="font-semibold text-lg mt-2">Bachelor of Science Computer Science</h2>
      <div className="text-sm text-gray-600 mt-2">
        <p><strong>Location:</strong> British Columbia, CAN</p>
        <p><strong>Campus city:</strong> New Westminster</p>
        <p><strong>Tuition (1st year):</strong> $18,300 CAD</p>
        <p><strong>Application fee:</strong> $180 CAD</p>
        <p><strong>Duration:</strong> 24 months</p>
      </div>
      <div className="mt-4 text-sm">
        <p className="text-gray-500 mb-2">Success Prediction</p>
        <div className="flex justify-between text-xs">
          <div>
            <p className="text-gray-500">Sep 2025</p>
            <p className="text-yellow-500">Low</p>
          </div>
          <div>
            <p className="text-gray-500">Jan 2026</p>
            <p className="text-green-600">Very High</p>
          </div>
          <div>
            <p className="text-gray-500">May 2026</p>
            <p className="text-green-600">Very High</p>
          </div>
        </div>
      </div>
      <button
        className={`mt-4 w-full text-white py-2 px-4 rounded ${
          primary ? "bg-blue-600" : "bg-gray-100 text-gray-800 border"
        }`}
      >
        Create Application
      </button>
    </div>
  );
};
export default ProgramCard;
