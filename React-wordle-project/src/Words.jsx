

export const boardDefault = [
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
];

export const generateWordSet = (async () => {
  let wordSet;
  let randomWord;
  const res = await fetch("/api/words")
  const payload = await res.json();
  const fiveWords = payload.data[0].words5
  const sixWords = payload.data[1].words6
  const sevenWords = payload.data[2].words7
  const eightWords = payload.data[3].words8
  const nineWords = payload.data[4].words9
  const tenWords = payload.data[5].words10

  wordSet = new Set(fiveWords)
  randomWord = fiveWords[Math.floor(Math.random() * fiveWords.length)]
  return { wordSet, randomWord }
})

