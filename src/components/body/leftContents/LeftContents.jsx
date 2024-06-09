import { useEffect } from "react";
import { useState } from "react";
import LeftContent from "./LeftContent";

const LeftContents = ({handleAddToBookmarks}) => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    
    return (
        <div className='w-2/3'>
            <h2>This is left contents</h2>
            {
                books.map(book => <LeftContent handleAddToBookmarks={handleAddToBookmarks} key={book.id} book={book}></LeftContent>)
            }
        </div>
    );
};

export default LeftContents;