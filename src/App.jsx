import Game from "/src/components/Game";
import { CurrentLineProvider } from "./CurrentLineContext";
import "/src/css/App.css";
import Header from "/src/components/header/Header";
import Footer from "/src/components/Footer";

function App() {
  return (
    <div className="App">
      <CurrentLineProvider>
        <Header />
        <Game />
      </CurrentLineProvider>
      <Footer />
    </div>
  );
}

export default App;
