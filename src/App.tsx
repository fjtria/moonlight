import './App.css'

import heroImg from './assets/images/hero.jpg'
import moviePoster from './assets/images/poster.webp'

function App() {

  return (
    <>
      <div id='hero' className='relative h-screen'>
        <img className='object-cover h-full absolute inset-0' src={heroImg} alt='Boy looks out towards the ocean. Screencap from Moonlight (2016).'/>
        <h1 className='site-title uppercase absolute inset-0 flex justify-center items-center'>Moonlight</h1>
      </div>

      <div id='summary' className='p-8 bg-gray relative flex flex-col gap-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <h6 className='section-title uppercase'>Director</h6>
            <p>Barry Jenkins</p>
          </div>
          <div className='flex flex-col'>
            <h6 className='section-title uppercase'>Release</h6>
            <p>2016</p>
          </div>
          <div className='flex flex-col'>
            <h6 className='section-title uppercase'>Runtime</h6>
            <p>111 minutes</p>
          </div>
        </div>
        <div>
          <p>
            A young African-American man grapples with his identity and sexuality  while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.
          </p>
        </div>
      </div>

      <div className='tinted-section flex flex-col'>
        <div>
          <img className='p-6' src={moviePoster} alt='Poster for Moonlight (2016).'/>
        </div>
        <div className='p-8 grid grid-cols-2 gap-4'>
          <div className='flex flex-col '>
            <h6 className='tinted-section-title uppercase'>Distributed by</h6>
            <p>A24</p>            
          </div>
          <div className='flex flex-col'>
            <h6 className='tinted-section-title uppercase'>Production Companies</h6>
            <p>A24</p>
            <p>Plan B Entertainment</p>
            <p>Pastel Productions</p>
          </div>
        </div>
      </div>

      <div id='gallery'>

      </div>

      <div id='cast-crew' className='tinted-section p-8 flex flex-col gap-8'>
        <div>
          <h6 className='tinted-section-title uppercase'>Crew</h6>
          <p><span className='uppercase'>Screenplay</span>: Barry Jenkins</p>
          <p><span className='uppercase'>Story</span>: Tarell Alvin McCraney</p>
          <p><span className='uppercase'>Producers</span>: Adele Romanski, Dede Gardner, Jeremy Kleiner</p>
          <p><span className='uppercase'>Music</span>: Nicholas Britell</p>
          <p><span className='uppercase'>Cinematographer</span>: James Laxton</p>
          <p><span className='uppercase'>Editors</span>: Joi McMillon, Nat Sanders</p>
        </div>
        <div>
          <h6 className='tinted-section-title uppercase'>Cast</h6>
          <p>Trevante Rhodes as Adult Chiron</p>
          <p>Ashton Sanders as Teen Chiron</p>
          <p>Alex Hibbert as Child Chiron</p>
          <p>André Holland as Adult Kevin</p>
          <p>Jharrel Jerome as Teen Kevin</p>
          <p>Jaden Piner as Child Kevin</p>
          <p>Janelle Monáe as Teresa</p>
          <p>Naomie Harris as Paula</p>
          <p>Mahershala Ali as Juan</p>
        </div>
      </div>

      <div id='awards' className='p-8'>
        <h6 className='section-title uppercase'>Awards</h6>
        <div className='flex flex-col'>
          <p>2017 Academy Award Winner</p>
          <p>Best Picture</p>
        </div>
        <div className='flex flex-col'>
          <p>2017 Academy Award Winner</p>
          <p>Best Adapted Screenplay</p>
        </div>
        <div className='flex flex-col'>
          <p>2017 Academy Award Winner</p>
          <p>Best Supporting Actor, Mahershala Ali</p>
        </div>
        <div className='flex flex-col'>
          <p>2017 Golden Globe Award Winner</p>
          <p>Best Picture (Drama)</p>
        </div>
      </div>

      <footer className='m-16 flex flex-col justify-center items-center'>
        <p>Prod. 2026 by <a href='https://fjtria.github.io/' target='_blank' rel='noopener noreferrer'>FJTRIA</a></p>
        <p>All media property of <a href='https://a24films.com/films/moonlight' target='_blank' rel='noopener noreferrer'>A24</a>. Used for portfolio purposes only.</p>
      </footer>
    </>
  )
}

export default App
