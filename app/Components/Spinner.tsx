import React, { useEffect, useState } from "react";

interface SpinnerProps {
  show: boolean;
  label?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ show, label = "Loading..." }) => {
  const [minVisible, setMinVisible] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (show) {
      setMinVisible(true);
      timer = setTimeout(() => {
        setMinVisible(false);
      }, 1000); // Minimum 1 second spinner
    } else {
      setMinVisible(false);
    }

    return () => clearTimeout(timer);
  }, [show]);

  if (!show && !minVisible) return null;

  return (
    <div className="flex justify-center items-center py-10">
      <svg
        className="animate-spin h-10 w-10 text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      <span className="ml-4 text-gray-600">{label}</span>
    </div>
  );
};

export default Spinner;
