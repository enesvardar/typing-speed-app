import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../action/index";

export const Header = () => {
  const run = useSelector((state) => state.game.run);
  const finish = useSelector((state) => state.game.finish);

  const runFlag = useRef(false);
  const finishFlag = useRef(false);

  const [timeCnt, setTimeCnt] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    runFlag.current = run;
  }, [run]);

  useEffect(() => {
    finishFlag.current = finish;
  }, [finish]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeCnt((prevCount) => {
        if (runFlag.current == true && finishFlag.current == false) {
          if (prevCount == 60) {
            action.finish(dispatch);
            return 0;
          } else {
            return prevCount + 1;
          }
        } else {
          return prevCount;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSelect = (lang) => {
    action.changeLang(lang, dispatch);
  };

  return (
    <header>
      <h1> Typing Speed App </h1>

      <div>
        <h2> {timeCnt} </h2>

        <select onChange={(e) => handleSelect(e.target.value)}>
          <option value={"eng"}>English</option>
          <option value={"tr"}>Turkish</option>
        </select>
      </div>
    </header>
  );
};
