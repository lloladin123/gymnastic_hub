import React from "react";

interface ConfirmModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message?: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  show,
  onClose,
  onConfirm,
  message = "Are you sure?",
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-md max-w-sm w-full space-y-4">
        <h2 className="text-lg font-semibold">{message}</h2>
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
