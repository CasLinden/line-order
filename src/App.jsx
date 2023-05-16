import Game from "/src/components/Game";
import { CurrentLineProvider } from "./CurrentLineContext";
import Header from "/src/components/header/Header";

function App() {
  return (
    <div className="App">
      <CurrentLineProvider>
        <Header />
        <Game />
      </CurrentLineProvider>
    </div>
  );
}

export default App;
