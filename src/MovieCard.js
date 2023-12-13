
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './App.css';
import StarRatingComponent from 'react-star-rating-component';


const MovieCard = (props) => {

  return (
    <div className='cont'>
      {/* importation du carte du bootstrap et l' affichera tous les attributs de chaque film définis dans le fichier Movielist dans un card .  */}

      <div >

        <Card id='ca'>
          <Card.Img variant="top" src={props.pr.posterURL} id='aa' />
          <Card.Body style={{ backgroundColor: 'rgb(121, 78, 27,0.2)' }} >
            <Card.Title><h2>{props.pr.title}</h2></Card.Title>
            <Card.Text id='tx'>

              <p>description: {props.pr.description}</p>

              <StarRatingComponent
                name="rate1"
                starCount={10}
                value={props.pr.rating}
               
              />

            </Card.Text>
          </Card.Body>
          <button onClick={()=>props.setMovies(props.Movies.map((el,i)=>el.title===props.pr.title?{...props.pr,title:"update"}:el))}>update</button>
        </Card>

      </div>
    </div>


  )

}


export default MovieCard;