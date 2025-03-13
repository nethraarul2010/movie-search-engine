import MovieCard from "../components/MovieCard";
import "./../css/Home.css";
import { useState,useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
 
    useEffect(() => {
        const loadPopularMovies = async () => {
            setLoading(true);
            try {
                const data = await getPopularMovies()
                console.log(data);
                setMovies(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
     },[]);

     const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return;
        
        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
        }catch(err){
            console.error(err);
        }
        finally{
            setLoading(false);
        }
        };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for Movies ...." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>
            {loading ? <div className="loading">Loading...</div> : (
            <div className="movies-grid">
                {movies.map(
                (movie) => 
                <MovieCard movie={movie} key={movie.id} />
                )}
            </div>
            )}

        </div> 
    );
}
export default Home;