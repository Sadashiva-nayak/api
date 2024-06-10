// src/QuoteCard.js
import React from 'react';

const QuoteCard = ({ quote, onSave }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-xl bg-white my-4">
            <p className="text-lg mb-4">{quote}</p>
            <button 
                className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700"
                onClick={() => onSave(quote)}
            >
                Save to List
            </button>
        </div>
    );
};

export default QuoteCard;
