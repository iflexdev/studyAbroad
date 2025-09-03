import React, { useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';

export default function Alert({ type, message, onClose }) {

   // Auto-dismiss after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const alertStyles = {
    success: 'bg-green-50 text-green-600 text-xs lg:text-base px-4 py-2 lg:px-6 lg:py-4 rounded-l-md  mx-auto flex',
    error: 'bg-red-50 text-red-600 text-xs lg:text-base px-4 py-2 lg:px-6 lg:py-4 rounded-l-md  mx-auto flex',
    warning: 'bg-yellow-50 text-yellow-600 text-xs lg:text-base px-4 py-2 lg:px-6 lg:py-4 rounded-l-md  mx-auto flex',
    info: 'bg-blue-50 text-red-600 text-xs lg:text-base px-4 py-2 lg:px-6 lg:py-4 rounded-l-md  mx-auto flex',
    default: 'bg-gray-50 text-red-600 text-xs lg:text-base px-4 py-2 lg:px-6 lg:py-4 rounded-l-md  mx-auto flex',
  };

  const icons = {
    success: <FaCheckCircle className="w-4 h-4 lg:w-6 lg:h-6 text-green-500" />,
    error: <FaTimesCircle className="w-4 h-4 lg:w-6 lg:h-6 text-red-500" />,
    warning: <FaExclamationCircle className="w-4 h-4 lg:w-6 lg:h-6 text-yellow-500" />,
    info: <FaInfoCircle className="w-4 h-4 lg:w-6 lg:h-6 text-blue-500" />,
  };

  return (
    <div
      className={`fixed z-50 top-15 right-0 lg:top-20 lg:right-0 p-4 mb-4 lg:shadow-lg ${alertStyles[type] || alertStyles.default} flex items-center space-x-4 animate-fadeIn`}
      role="alert"
    >
      <div className="flex items-center">
        <div className="text-2xl">
          {icons[type] || icons.default}
        </div>
        <span className="ml-2">{message}</span>
      </div>
      <button
        onClick={onClose}
        className="ml-4 text-lg text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>
    </div>
  );
}