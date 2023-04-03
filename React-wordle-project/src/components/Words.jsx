
export default async function GenerateWordSet(number) {



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

  if (number == 5) {

    wordSet = new Set(fiveWords)
    randomWord = fiveWords[Math.floor(Math.random() * fiveWords.length)]
  } else if (number == 6) {
    wordSet = new Set(sixWords)
    randomWord = sixWords[Math.floor(Math.random() * sixWords.length)]
  }
  else if (number == 7) {
    wordSet = new Set(sevenWords)
    randomWord = sevenWords[Math.floor(Math.random() * sevenWords.length)]
  }
  else if (number == 8) {
    wordSet = new Set(eightWords)
    randomWord = eightWords[Math.floor(Math.random() * eightWords.length)]
  }
  else if (number == 9) {
    wordSet = new Set(nineWords)
    randomWord = nineWords[Math.floor(Math.random() * nineWords.length)]
  }
  else if (number == 10) {
    wordSet = new Set(tenWords)
    randomWord = tenWords[Math.floor(Math.random() * tenWords.length)]
  }




  return { wordSet, randomWord }

}

