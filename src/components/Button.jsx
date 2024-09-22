import css from "./Button.module.css";

const Button = ({onButtonClick}) => {
  let btn = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="Subdiv">
      {btn.map((ob) => (
        <button key={ob} onClick={()=>onButtonClick(ob)}>{ob}</button>
      ))}
    </div>
  );
};

export default Button;

