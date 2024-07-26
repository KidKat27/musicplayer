import './App.css'

function App() {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <h1>Answers</h1>
          <audio controls>
              <source src="https://github.com/KidKat27/musicplayer/blob/5e1a7c3ad81477807662888d0f30e119efbdfc53/src/assets/K!dKat_Towards_infinity.mp3" type="audio/mpeg"/>
            </audio>
        </div>
        <div className="container">
          <h1>Ray of Hope</h1>
          <audio controls>
              <source src="./src/assets/KidKat_Ray_of_Hope.wav" type="audio/mpeg"/>
            </audio>
        </div>
        <div className="container">
          <h1>Towards Infinity</h1>
          <audio controls>
              <source src="./src/assets/K!dKat_Towards_infinity.mp3" type="audio/mpeg"/>
            </audio>
        </div>
      </div>
    </>
  )
}

export default App
