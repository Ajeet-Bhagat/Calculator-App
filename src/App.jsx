import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
function App() {
  const [calval, setcalval] = useState("");
  const onButtonClick = (buttonval) => {
    if (buttonval === "C") {
      setcalval("");
    } else if (buttonval === "=") {
      const result = eval(calval);
      setcalval(result);
    } else {
      const newbuttonval = calval + buttonval;
      setcalval(newbuttonval);
    }
  };
  return (
    <>
      <div className="Main">
        <Input display={calval}></Input>
        <hr />
        <Button onButtonClick={onButtonClick}></Button>
      </div>
    </>
  );
}

export default App;
