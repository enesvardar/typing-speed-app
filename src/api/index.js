import "axios";
import axios from "axios";

export const fetchWords = async () => {
  const reg = axios(
    `https://random-word-form.herokuapp.com/random/noun/a?count=60`
  ).then((response) => response.data);

  return reg;
};
