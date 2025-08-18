import React, { useEffect } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationCircle,
  FaInfoCircle,
} from "react-icons/fa";

export default function Alert({ type, message, onClose }) {
  /* -------------------------------------------------------------------------- */
  /*                        Auto-dismiss after 3 seconds                        */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  /* -------------------------------------------------------------------------- */
  /*                          all types of alerts style                         */
  /* -------------------------------------------------------------------------- */
  const alertStyles = {
    success: "bg-green-50 text-green-600 border border-green-200 px-6 py-2 rounded-md mx-auto flex",
    error: "bg-red-50 text-red-600 border border-green-200 px-6 py-2 rounded-md mx-auto flex",
    warning: "bg-yellow-50 text-yellow-600 border border-green-200 px-6 py-2 rounded-md mx-auto flex",
    info: "bg-blue-50 text-red-600 border border-green-200 px-6 py-2 rounded-md mx-auto flex",
    default: "bg-gray-50 text-red-600 border border-green-200 px-6 py-2 rounded-md mx-auto flex",
  };

  /* -------------------------------------------------------------------------- */
  /*                              all alerts icons                              */
  /* -------------------------------------------------------------------------- */
  const icons = {
    success: <FaCheckCircle className="w-6 h-6 text-green-500" />,
    error: <FaTimesCircle className="w-6 h-6 text-red-500" />,
    warning: <FaExclamationCircle className="w-6 h-6 text-yellow-500" />,
    info: <FaInfoCircle className="w-6 h-6 text-blue-500" />,
  };

  return (
    <div
      className={`absolute top-5 left-1/2 transform -translate-x-1/2 p-4 mb-4 rounded ${alertStyles[type] || alertStyles.default} flex items-center space-x-4 animate-pulse ease-in`}
      role="alert"
    >
      <div className="flex items-center">
        <div className="md:text-2xl text-lg">{icons[type] || icons.default}</div>
        <span className="md:ml-2 ml-1.5">{message}</span>
      </div>
      <button
        onClick={onClose}
        className="ml-4 md:text-lg text-sm text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>
    </div>
  );
}
