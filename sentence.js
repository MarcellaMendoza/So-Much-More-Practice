//Problem 2

function makeSentence(description, array) {
  let sentence = `The ${array.length} ${description} are ` 
  const finalIndex = array.length - 1
  for (let i=0; i<array.length; i++) {
    if (i === finalIndex) {
      sentence += "and " + array[i] + "."
    } else {
      
    sentence += array[i] + " "
  }
  }
  return sentence
}

const mySentence = makeSentence("largest planets", ["Jupiter", "Saturn", "Neptune"])
console.log(mySentence)