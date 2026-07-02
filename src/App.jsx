import { useState } from 'react'
import './app.scss'
import Nav from './component/Nav'
import Dock from './component/Dock.jsx'
import GitHub from './component/window/Github.jsx'
import Note from './component/window/Note.jsx'
import Resume from './component/window/Resume.jsx'
import Spotify from './component/window/Spotify.jsx'
import CLI from './component/window/CLI.jsx'
const App = () => {
  const [windowsState,setWindowsState] = useState({
    github:false,
    note:false,
    resume:false,
    spotify:false,
    cli:false
  })
  return (
    <main>
    <Nav />
    <Dock windowsState={windowsState} setWindowsState={setWindowsState}/>
    {windowsState.github && <GitHub windowName="github" setWindowsState={setWindowsState}/>}
    {windowsState.note && <Note windowName="note" setWindowsState={setWindowsState}/>}
    {windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState}/>}
    {windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState}/>}
    {windowsState.cli && <CLI windowName="cli" setWindowsState={setWindowsState}/>}
    </main>
  );
};

export default App;
