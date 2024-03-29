import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./components/Movie.jsx"
import AddMovieForm from "./components/AddMovieForm.jsx";

function App() {
  const [movies, setMovies] = useState([]);

  function getMovies(){
    axios
      .get("/api/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function addMovie(newMovie){
    axios.post("/api/movies", newMovie)
      .then(res => {
        setMovies(prevMovies => [...prevMovies, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteMovie(movieId){
    axios.delete(`/api/movies/${movieId}`)
    .then(res => {
      setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
    })
    .catch(err => console.log(err))
  }

  function editMovie(updates, movieId){
    axios.put(`/api/movies/${movieId}`, updates)
    .then(res => {
      setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
    })
    .catch(err => console.log(err))
  }

  function handleFilter(e){
    console.log(e.target.value)
    if(e.target.value === "reset"){
      getMovies()
    } else {
    axios.get(`/api/movies/search/genre?genre=${e.target.value}`)
      .then(res => setMovies(res.data))
      .catch(err => console.log(err))
      }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
        <div>
          <AddMovieForm
          submit = {addMovie}
          btnText = "Add Movie"
          />
        <h4>Filter by Genre</h4>
        <select onChange={handleFilter}>
          <option value="reset">All Movies</option>
          <option value="action">Action</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
        </select>
        {
        movies.map(movie => 
        <Movie 
        {...movie} 
        key={movie.title}
        deleteMovie={deleteMovie}
        editMovie={editMovie}
        />)}
        </div>
    </div>
  );
}

export default App;
