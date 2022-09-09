import * as types from "../action/types";
import * as api from "../api";

export const refreshWords = async (dispatch) => {
  const words = await api.fetchWords();
  dispatch({
    type: types.REFRESH,
    payload: words,
  });
};

export const changeLang = (lang, dispatch) => {
  dispatch({
    type: types.CHANGE_LANG,
    payload: lang,
  });
};


export const start = (dispatch) => {
  dispatch({
    type: types.START,
  });
};

export const finish = (dispatch) => {
  dispatch({
    type: types.FINISH,
  });
};

export const correctWord = (dispatch) => {
  dispatch({
    type: types.CORRECT_WORD,
  });
};

export const wrongWord = (dispatch) => {
  dispatch({
    type: types.WRONG_WORD,
  });
};