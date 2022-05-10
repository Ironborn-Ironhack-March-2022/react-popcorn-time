function Movie(props) {

    let content;

    if(props.rating > 8) {
        content = <span>RECOMMENDED</span>
    } else {
        content = "";
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <p>
                Year: {props.year} <br />
                Rating: {props.rating} <br />
                {content}
            </p>
        </div>
    );
}


export default Movie;