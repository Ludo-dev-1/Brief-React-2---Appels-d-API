import '../App.css'
import { Link } from "react-router";
import {useEffect, useState} from "react";
import {fetchBookMethod} from "../service/fetchBookMethod.ts";

function Books() {

    const [books, setBook] = useState({ entries: [] });

    useEffect(() => {
            const fetchBook = async () => {
                try {
                    const data = await fetchBookMethod.fetchBook();
                    setBook(data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchBook();
        },
        []);



    return (
        <>
            <h1>Liste des livres :</h1>
                <ul>
                    {books.entries?.map((book: any) => (
                    <li key={book.key}>
                         <Link to={`/details/${book.key}`}>
                            {book.title}
                         </Link>
                    </li>
                     ))}
                </ul>
        </>

    )
}

export default Books
