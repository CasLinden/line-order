import Game from '/src/components/Game'
import { CurrentLineProvider } from './CurrentLineContext'
import '/src/css/App.css'

function App() {

  return (
    <div className="App">
      <CurrentLineProvider>
        <Game/>
      </CurrentLineProvider>
    </div>
  )
}

export default App
