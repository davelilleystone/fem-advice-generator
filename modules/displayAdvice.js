import fetchAdvice from "../modules/fetchAdvice.js";

const adviceText = document.querySelector(".advice-text");
const adviceId = document.querySelector(".advice-id");

const setAdviceId = (id) => {
  adviceId.innerText = id;
};

const setAdviceText = (text) => {
  adviceText.innerText = text;
};

const displayAdvice = async () => {
  try {
    const data = await fetchAdvice();
    const { id, advice } = data;
    setAdviceId(id);
    setAdviceText(advice);
  } catch (err) {
    setAdviceId("");
    setAdviceText(err.message);
  }
};

export default displayAdvice;
