import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as action from "../action/index";
import { Result } from "./Result";

export const Container = () => {
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);

  const dispatch = useDispatch();

  const words = useSelector((state) => state.game.words);
  const finish = useSelector((state) => state.game.finish);

  useEffect(() => {
    action.refreshWords(dispatch);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (finish == false) {
      if (index == words.length - 1) {
        setIndex(0);
        setInput("");
        action.refreshWords(dispatch);
      } else {
        setIndex(index + 1);
        setInput("");

        if (input == words[index]) {
          action.correctWord(dispatch);
        } else {
          action.wrongWord(dispatch);
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>
          {words.map((word, i) => {
            if (i === index) {
              if (word.slice(0, input.length) == input || input == "") {
                return (
                  <span
                    className="word"
                    style={{ border: "2px outset rgb(34, 121, 179)" }}
                  >
                    {word}{" "}
                  </span>
                );
              } else {
                return (
                  <span
                    className="word"
                    style={{ backgroundColor: "rgb(230, 0, 0)" }}
                  >
                    {word}{" "}
                  </span>
                );
              }
            } else {
              return <span className="word">{word} </span>;
            }
          })}
        </p>
      </div>

      <input
        value={input}
        onChange={(e) => {
          action.start(dispatch);
          setInput(e.target.value);
        }}
      ></input>

      {finish && <Result />}
    </form>
  );
};
