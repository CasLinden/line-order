import Game from '/src/components/Game'
import { CurrentLineProvider } from './CurrentLineContext'
import '/src/css/App.css'
import Header from '/src/components/Header'

function App() {

  return (
    <div className="App">
      <Header/>
      <CurrentLineProvider>
        <Game/>
      </CurrentLineProvider>
    </div>
  )
}

export default App
