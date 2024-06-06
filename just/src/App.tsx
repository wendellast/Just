import React, {useState} from "react";

import "./app.css"
const App = () =>{
  const [showGame, setShowGame] = useState<boolean>(false)
  const [repos, setRepos ] = useState(["repos1"])

  const handleStartClick = () =>{
    setShowGame(true)
 }
  return <main>
    {!showGame && (
      <>
      <h1>Welcome to Just-Wars</h1>
      <h2>A developer-game</h2>
      {repos.length === 0 ? (<p>loading-game</p> ):(<button type="submit" onClick={handleStartClick} >Start</button>)}
      </>
    )}

    {showGame &&(
      <>
        <h1>Game</h1>
      </>
    )}
  </main>
}

export default App