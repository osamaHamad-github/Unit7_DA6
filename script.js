const number = Math.floor(Math.random() * 10) + 1
let guess

guess = parseInt(prompt('Guess a number: '))

while (guess != number) {
  if (guess > number) {
    guess = parseInt(prompt('Incorrect! Guess is too large: '))
  } else if (guess < number) {
    guess = parseInt(prompt('Incorrect! Guess is too small: '))
  }
}

alert('Well done! you guessed the number.')
