import { useParams } from "react-router";
import { useEffect, useState } from "react";

function Details() {
    const { type, id } = useParams();
    const [book, setBook] = useState(null);
    const [coverId, setCoverId] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const response = await fetch(`https://openlibrary.org/${type}/${id}.json`);
            const data = await response.json();
            setBook(data);
        };

        const fetchEditions = async () => {
            const response = await fetch(`https://openlibrary.org/works/${id}/editions.json`);
            const data = await response.json();

            const cover = data.entries?.find(e => e.covers)?.covers?.[0];
            setCoverId(cover);
        };

        fetchDetails();
        fetchEditions();
    }, [type, id]);

    if (!book) return <p>Chargement...</p>;

    const description =
        typeof book.description === "string"
            ? book.description
            : book.description?.value;

    const imageUrl = coverId
        ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
        : null;

    return (
        <div>
            <h1>{book.title}</h1>

            <h2>Couverture :</h2>
            {imageUrl ? (
                    <img
                    src={imageUrl}
                />
                ) : (
                    <p>Pas d’image disponible</p>
                )}
            <p> Description : {description || "Pas de description"}</p>

            <h3>Thèmes :</h3>
            <ul>
                {book.subjects?.map((subject, index) => (
                    <li key={index}>{subject}</li>
                ))}
            </ul>
        </div>
    );
}

export default Details;