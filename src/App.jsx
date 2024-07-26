import './App.css'

function App() {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <h1>Answers</h1>
          <audio controls>
              <source src="https://github.com/KidKat27/musicplayer/raw/main/src/assets/KidKat_Answers_(Unfinished).mp3" type="audio/mpeg"/>
            </audio>
        </div>
        <div className="container">
          <h1>Ray of Hope</h1>
          <audio controls>
              <source src="https://github.com/KidKat27/musicplayer/raw/main/src/assets/KidKat_Ray_of_Hope.wav" type="audio/mpeg"/>
            </audio>
        </div>
        <div className="container">
          <h1>Towards Infinity</h1>
          <audio controls>
              <source src="https://github.com/KidKat27/musicplayer/raw/main/src/assets/K!dKat_Towards_infinity.mp3" type="audio/mpeg"/>
            </audio>
        </div>
        <h1 className="Suggest">*Please use earphones/ headphones</h1>
      </div>
    </>
  )
}

export default App
