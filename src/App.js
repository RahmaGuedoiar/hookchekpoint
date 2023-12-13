
import list from './List'

import {  useRef, useState } from 'react'
import MovieList from './MovieList'
import StarRatingComponent from 'react-star-rating-component';
import AddMovies from './AddMovies';




const App = () => {
  const [Movies, setMovies] = useState(list)
  const filtext =useRef()
  const filnote =useRef()
  const [ftext, setFtext] = useState("")
  const [fnote, setFnote] = useState(0)

  return (
    <div className='con1'>

      <div className='input'>
        
        <AddMovies Movies={Movies}setMovies={setMovies}></AddMovies>

        <div className='FIL'>
          <img src='rech.png' id='rech'></img>
          <div className='txf'>
            <label>title</label>
            <input type='text'
              ref={filtext}
              onChange={() => {
                setFtext(filtext.current.value)
              }} >
            </input>
          </div>
          <div className='txf'>
            <StarRatingComponent
              name="rate3"
              starCount={10}
              value={fnote}
              onStarClick={(value) => { setFnote(value) }}
            />
          </div>
        </div>
      </div>
      <div><MovieList M={Movies.filter((a) => a.title.toLowerCase().trim().includes(ftext.toLowerCase().trim()) && a.rating >= fnote)} setMovies={setMovies} ></MovieList></div>
      {console.log(ftext)}
      {console.log("movies", Movies)}


    </div>


  )
}

export default App
