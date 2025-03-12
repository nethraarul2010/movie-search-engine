import MovieCard from "../components/MovieCard";
import "./../css/Home.css";
import { useState } from "react";
function Home() {
    const handleSearch = (e) => {
        e.preventDefault();
        alert("Searching for: "+searchQuery)
    }
    const [searchQuery,setSearchQuery] = useState("");
    const movies = [
        { id: 1, title: "John Wick", release_date: "2014" },
        { id: 2, title: "Devara", release_date: "2015" },
        { id: 3, title: "Leo", release_date: "2016" },
        { id: 4, title: "Madagascar", release_date: "2017" },
    ];
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for Movies ...." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(
                (movie) => 
                <MovieCard movie={movie} key={movie.id} />
                
                )}
            </div>

        </div> 
    );
}
export default Home;