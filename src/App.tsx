import "./App.css";
import { Button } from "./components/button";
import { Header } from "./components/header";

function App() {
  const firstCustomStyles = {
    color: "#650060",
    backgroundColor: "hotpink",
  };

  const secondCustomStyles = {
    color: "yellow",
    backgroundColor: "red",
  };

  return (
    <>
      <Header />
      <div className="button-board">
        <Button>
          <span>Button 1</span>
        </Button>
        <Button customStyles={firstCustomStyles}>
          <span>Button 2</span>
        </Button>
        <Button customStyles={secondCustomStyles}>
          <span>Button 3</span>
        </Button>
      </div>
    </>
  );
}

export default App;
