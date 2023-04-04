
export default async function GenerateWordSet(number, unique) {



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
  let regexp = new RegExp(/^(?!.*(.).*\1)[a-z]+$/);


  if (number == 5) {
    if (unique) {
      let uniqueRandomWord = fiveWords.filter(words => {
        return words.match(regexp)
      })

      randomWord = uniqueRandomWord[Math.floor(Math.random() * uniqueRandomWord.length)]
      wordSet = new Set(uniqueRandomWord)
      console.log(`${randomWord} + "unique"`)

    } else {
      randomWord = fiveWords[Math.floor(Math.random() * fiveWords.length)]
      wordSet = new Set(fiveWords)
      console.log(`${randomWord} + "NOT"`)

    }


  } else if (number == 6) {
    if (unique) {
      let uniqueRandomWord = sixWords.filter(words => {
        return words.match(regexp)
      })

      randomWord = uniqueRandomWord[Math.floor(Math.random() * uniqueRandomWord.length)]
      wordSet = new Set(uniqueRandomWord)
      console.log(`${randomWord} + "unique"`)

    } else {
      randomWord = sixWords[Math.floor(Math.random() * sixWords.length)]
      wordSet = new Set(sixWords)
      console.log(`${randomWord} + "NOT"`)

    }

  }
  else if (number == 7) {
    if (unique) {
      let uniqueRandomWord = sevenWords.filter(words => {
        return words.match(regexp)
      })

      randomWord = uniqueRandomWord[Math.floor(Math.random() * uniqueRandomWord.length)]
      wordSet = new Set(uniqueRandomWord)
      console.log(`${randomWord} + "unique"`)

    } else {
      randomWord = sevenWords[Math.floor(Math.random() * sevenWords.length)]
      wordSet = new Set(sevenWords)
      console.log(`${randomWord} + "NOT"`)

    }

  }
  else if (number == 8) {
    if (unique) {
      let uniqueRandomWord = eightWords.filter(words => {
        return words.match(regexp)
      })

      randomWord = uniqueRandomWord[Math.floor(Math.random() * uniqueRandomWord.length)]
      wordSet = new Set(uniqueRandomWord)
      console.log(`${randomWord} + "unique"`)

    } else {
      randomWord = eightWords[Math.floor(Math.random() * eightWords.length)]
      wordSet = new Set(eightWords)
      console.log(`${randomWord} + "NOT"`)

    }

  }
  else if (number == 9) {
    if (unique) {
      let uniqueRandomWord = nineWords.filter(words => {
        return words.match(regexp)
      })

      randomWord = uniqueRandomWord[Math.floor(Math.random() * uniqueRandomWord.length)]
      wordSet = new Set(uniqueRandomWord)
      console.log(`${randomWord} + "unique"`)

    } else {
      randomWord = nineWords[Math.floor(Math.random() * nineWords.length)]
      wordSet = new Set(nineWords)
      console.log(`${randomWord} + "NOT"`)

    }
  }
  else if (number == 10) {
    if (unique) {
      let uniqueRandomWord = tenWords.filter(words => {
        return words.match(regexp)
      })

      randomWord = uniqueRandomWord[Math.floor(Math.random() * uniqueRandomWord.length)]
      wordSet = new Set(uniqueRandomWord)
      console.log(`${randomWord} + "unique"`)

    } else {
      randomWord = tenWords[Math.floor(Math.random() * tenWords.length)]
      wordSet = new Set(tenWords)
      console.log(`${randomWord} + "NOT"`)

    }
  }




  return { wordSet, randomWord }

}

