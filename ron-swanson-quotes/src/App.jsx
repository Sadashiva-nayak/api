// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './QuoteCard';
import SavedQuotes from './SavedQuotes';

const App = () => {
    const [quote, setQuote] = useState('');
    const [savedQuotes, setSavedQuotes] = useState([]);

    const fetchQuote = async () => {
        try {
            const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
            setQuote(response.data[0]);
        } catch (error) {
            console.error('Error fetching the quote', error);
        }
    };

    const saveQuote = (quote) => {
        setSavedQuotes([...savedQuotes, quote]);
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="text-center p-8 font-sans">
            <h1 className="text-3xl mb-8">Ron Swanson Quotes</h1>
            <QuoteCard quote={quote} onSave={saveQuote} />
            <button 
                className="bg-green-500 text-white rounded px-4 py-2 mt-4 hover:bg-green-700"
                onClick={fetchQuote}
            >
                Get New Quote
            </button>
            <SavedQuotes quotes={savedQuotes} />
        </div>
    );
};

export default App;
