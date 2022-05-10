import moviesArr from "../data/movies.json";
import Movie from "./Movie";

function Main() {


    return (
        <>
            {moviesArr.map((element) => {
                return (
                    <Movie 
                        key={element.id} 
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