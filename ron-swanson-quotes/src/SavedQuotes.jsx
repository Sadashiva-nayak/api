// src/SavedQuotes.js
import React from 'react';

const SavedQuotes = ({ quotes }) => {
    return (
        <div className="mt-8">
            <h2 className="text-2xl mb-4">Saved Quotes</h2>
            <ul className="list-none p-0">
                {quotes.map((quote, index) => (
                    <li 
                        key={index} 
                        className="bg-gray-100 border border-gray-200 rounded p-2 mb-2"
                    >
                        {quote}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SavedQuotes;
