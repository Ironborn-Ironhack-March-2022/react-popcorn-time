import Movie from "./Movie";

function Main(props) {

    return (
        <>
            {props.listOfMovies.map((element, index) => {
                return (
                    <Movie 
                        key={index} 
                        title={element.title} 
                        year={element.year} 
                        rating={element.rating} 
                        />
                    )
            })}
        </>
    );
}

export default Main;