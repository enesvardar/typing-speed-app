import React from "react";
import { useSelector } from "react-redux";

export const Result = () => {
  const correctW = useSelector((state) => state.game.correctW);
  const wrongW = useSelector((state) => state.game.wrongW);

  return (
    <div className="result">
    
      <h1 style={{textAlign:"center", color:"rgb(221, 128, 15)",fontStyle:"italic"}}>Result</h1>
       
      <hr></hr>

      <h3> Total Word: <span>{wrongW + correctW}</span></h3>  
      <h3 style={{color:"rgb(5, 168, 5)"}}> Correct Word: <span>{correctW}</span></h3>
      <h3 style={{color:"rgb(170, 66, 40)"}}> Wrong Word: <span>{wrongW}</span></h3>
    </div>
  );
};
