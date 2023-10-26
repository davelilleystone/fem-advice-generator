const url = "https://api.adviceslip.com/advice";

const fetchAdvice = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error - something went wrong!");
  }
  const data = await response.json();
  return data.slip;
};

export default fetchAdvice;
