import * as types from "../action/types";

const initialValue = {
  run: false,
  lang: "eng",
  words: [],
  finish: false,
  correctW: 0,
  wrongW: 0,
};

const gameReducer = (state = initialValue, action) => {
  switch (action.type) {
    case types.REFRESH:
      return {
        ...state,
        words: action.payload,
      };

    case types.CHANGE_LANG:
      return {
        ...state,
        words: state.words,
      };

    case types.START:
      return {
        ...state,
        run: true,
      };

    case types.FINISH:
      return {
        ...state,
        finish: true,
        run: false,
      };

    case types.CORRECT_WORD:
      return {
        ...state,
        correctW: state.correctW + 1,
      };

    case types.WRONG_WORD:
      return {
        ...state,
        wrongW: state.wrongW + 1,
      };

    default:
      return {
        ...state,
      };
  }
};

export default gameReducer;
