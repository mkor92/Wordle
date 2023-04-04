
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

  function GenerateUnique(input) {
    let uniqueRandomWord = input.filter(words => {
      return words.match(regexp)
    })

    randomWord = uniqueRandomWord[Math.floor(Math.random() * uniqueRandomWord.length)]
    wordSet = new Set(uniqueRandomWord)
    console.log(`${randomWord} + "unique"`)
  }


  function GenerateNotUnique(input) {
    randomWord = input[Math.floor(Math.random() * input.length)]
    wordSet = new Set(input)
    console.log(`${randomWord} + "NOT"`)
  }


  if (number == 5) {
    if (unique) {
      GenerateUnique(fiveWords)
    } else {
      GenerateNotUnique(fiveWords)
    }
  }

  else if (number == 6) {
    if (unique) {
      GenerateUnique(sixWords)
    } else {
      GenerateNotUnique(sixWords)
    }
  }

  else if (number == 7) {
    if (unique) {
      GenerateUnique(sevenWords)
    } else {
      GenerateNotUnique(sevenWords)
    }
  }

  else if (number == 8) {
    if (unique) {
      GenerateUnique(eightWords)
    } else {
      GenerateNotUnique(eightWords)
    }
  }

  else if (number == 9) {
    if (unique) {
      GenerateUnique(nineWords)

    } else {
      GenerateNotUnique(nineWords)
    }
  }

  else if (number == 10) {
    if (unique) {
      GenerateUnique(tenWords)

    } else {
      GenerateNotUnique(tenWords)
    }
  }

  return { wordSet, randomWord }

}

