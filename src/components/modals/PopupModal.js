import React, { useEffect } from 'react';

const PopupModal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            // Disable scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // Enable scrolling
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to reset overflow when the component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-transparent p-6 rounded-lg shadow-lg w-full max-w-md relative flex items-center justify-center">
                <button
                    className="absolute top-3 right-4 text-red-600 font-bold text-2xl"
                    onClick={onClose}
                >
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default PopupModal;