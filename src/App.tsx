import "./App.css";
import { Button } from "./components/button";
import { Header } from "./components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 1001),
  );

  const customStyles = {
    color: "yellow",
    backgroundColor: "red",
    cursor: "default",
  };

  const handleOnClick = () => {
    setRandomNumber(Math.floor(Math.random() * 1001));
  };

  const handleOnIncrement = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const handleOnReset = () => {
    setCounter(0);
  };

  return (
    <>
      <Header />
      <div className="button-board">
        <div>
          <Button onClick={handleOnClick}>
            <span>Original</span>
          </Button>
          <p>Random: {randomNumber}</p>
        </div>
        <Button customStyles={customStyles}>
          <span>Button</span>
        </Button>
        <div>
          <Button onClick={handleOnIncrement}>
            <span>Have a coffee?</span>
            <FontAwesomeIcon icon={faCoffee} />
          </Button>
          <p>Cups: {counter}</p>
        </div>
        <Button onClick={handleOnReset}>
          <span>Reset</span>
          <FontAwesomeIcon icon={faCoffee} />
        </Button>
      </div>
    </>
  );
}

export default App;
