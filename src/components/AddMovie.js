import { useState } from "react";

import "./AddMovie.css";

function AddMovie(props) {

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMovie = {
            title,
            year,
            rating
        }

        props.callbackCreateMovie(newMovie);

        setTitle("");
        setYear("");
        setRating("");
    }

    return (
        <div className="AddMovie">
            <h2>Add new movie:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <input type="number" name="year"  value={year} onChange={(e) => { setYear(e.target.value) }} placeholder="2000" min="1900" max="2050" />
                <input type="number" name="rating" value={rating} onChange={(e) => { setRating(e.target.value) }} placeholder="5" min="1" max="10" />
                <button>Create</button>
            </form>
        </div>
    )
}

export default AddMovie;