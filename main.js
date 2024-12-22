function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

const items = ["Mango", "Poly", "Ajax"];
logItems(items)

function calculateEngravingPrice(message, pricePerWord) {
    const word = message.split("");
    const sumPrice = word.length * pricePerWord;
    return sumPrice;
}

const message = "Гравіювання приклад";
const pricePerWord = 10; //Це ціна за 1 слово

const cost = calculateEngravingPrice(message, pricePerWord);
console.log(`Сума гравіювання: ${cost}`);


// function findLongestWord(string) {
//     const words = string.split("");
//     const longestWord = "";
//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word
//         }
//     }
//     return longestWord;
//  }

function formatString(string) {
    if (string.length <= 40) {
        return string
    } else {
        return string.slice(0, 40) + "...";
    }
}

const shortString = "Це короткий рядок.";
const longString = "Цей рядок значно довший за 40 символів і потрбує форматування.";
console.log(formatString(shortString)); 


function checkForSpam(message) { 
    const lowerCaseMessage = message.toLowerCase();
      if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
         return true;
      } else {
             return false; 
      }
 }

 console.log(checkForSpam("This is a great SALE!"));
 console.log(checkForSpam("Don't miss our sale this week."));
 console.log(checkForSpam("Hello, how are you?"));
 console.log(checkForSpam("Get rich quick with spam offers!"));