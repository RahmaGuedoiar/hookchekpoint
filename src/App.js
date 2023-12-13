
import list from './List'
import { useRef, useState } from 'react'
import MovieList from './MovieList'
import AddMovies from './AddMovies';
import Fil from './FT';

const App = () => {
  const [Movies, setMovies] = useState(list)
  const [ftext, setFtext] = useState("")
  const [fnote, setFnote] = useState(0)

  return (
    <div className='con1'>



      <AddMovies Movies={Movies} setMovies={setMovies}></AddMovies>
      <Fil ftext={ftext} fnote={fnote} setFtext={setFtext} setFnote={setFnote}></Fil>

      <div><MovieList M={Movies.filter((a) => a.title.toLowerCase().trim().includes(ftext.toLowerCase().trim()) && a.rating >= fnote)} setMovies={setMovies} ></MovieList></div>

    </div>


  )
}

export default App
