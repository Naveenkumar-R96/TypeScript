import React, { useEffect, useState } from 'react';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const fetchData = async () => {
        if (input.trim() === '') return; // Avoid fetching data for empty input
        try {
            const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}`);
            const data = await res.json();
            setBooks(data.items || []); // Handle cases where `data.items` might be undefined
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [input]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search Books"
                value={input}
                onChange={handleChange}
            />
            <div>
                {books && books.length > 0 ? (
                    books.map((book, index) => (
                        <div key={index}>
                            <h3>{book.volumeInfo?.title || 'No Title Available'}</h3>
                            <p>{book.volumeInfo?.authors?.join(', ') || 'No Authors Available'}</p>
                            <p>{book.volumeInfo.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No books found</p>
                )}
            </div>
        </div>
    );
};

export default Books;
