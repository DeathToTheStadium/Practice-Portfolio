
class lettersCollection {
    constructor() {
        this.words = {}
        for (let i = 97; i <= 122; i++) this.words[String.fromCharCode(i)] = [];
    }
    parseString(str) {
        this.orginalString = str;
        const words = str.split(" ").filter(word => word);
        for (const [position, word] of words.entries()) {
            this.words[word.charAt(0)].push({position, word, letters: word.split("")});
        }
        this.sortArrays();
    }
    sortArrays() {
      for (let i = 97; i <= 122; i++)
        this.words[String.fromCharCode(i)].sort((a, b) => {
          if (a.word === b.word) return a.position > b.position ? 1 : -1;
          if (a.word.includes(b.word) || b.word.includes(a.word)) return a.word.includes(b.word) ? 1 : -1;
          return a.word < b.word ? 1 : -1;
        })
    }
  }
  
  const col = new lettersCollection();
  col.parseString("allen aced the available bubble sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order");
  console.log(col.words);
  console.log(col.orginalString);
  var CoolintIsCool = 5
  console.log(true || false ? "today is a brand new try": CoolintIsCool + 4)

//PAST ATTEMPTS 

// let letterMap = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: 6,
//     g: 7,
//     h: 8,
//     i: 9,
//     j: 10,
//     k: 11,
//     l: 12,
//     m: 13,
//     n: 14,
//     o: 15,
//     p: 16,
//     q: 17,
//     r: 18,
//     s: 19,
//     t: 20,
//     u: 21,
//     v: 22,
//     w: 23,
//     x: 24,
//     y: 25,
//     z: 26,

// }
// // Takes a Sentance or a string then outputs an object in order
// function alphabeticalOrder(sentence){
//     let SplitDataSet = () =>{
//         let StringArray = sentence.split(' ')
//         for (let x in StringArray) {
//             // console.log(StringArray[x])
//             StringArray[x] = StringArray[x].split('')
//         }
//         return StringArray
//     }
//     let CreateAlphabetOrder = (Obj) =>{
//         let WordMap = {}
//         for (let x in letterMap) {
//             WordMap[x] = []
//             for (let n in Obj) {
//                 if (Obj[n][0] === x){
//                     WordMap[x].push(Obj[n])
//                 }
//             }
//         }
//         return WordMap
//     }

//     let WordList = CreateAlphabetOrder(SplitDataSet())
//     let Truth = true
//     let index = 0
//     let Loops = 0
//     let MaxLoops = 100
//     while(Truth){ 
//         if (index > WordList.a.length-1) {index = 0}
//         if (Loops > MaxLoops){Truth = false}
//         for (let int in WordList.a[index]){
//             if (WordList.a[index + 1] ) {
//                 if (WordList.a[index + 1][int] === "undefined"){return }
//                 if ( letterMap[WordList.a[index + 1][int]] > letterMap[WordList.a[index][int]]) {
//                     let ListValue = WordList.a[index +1]
//                     WordList.a[index+1] = WordList.a[index ]
//                     WordList.a[index] = ListValue
//                     console.log('_____Spacer_____\n\n')
//                     console.log(WordList.a)
//                 }
//             }
//         }
//         index++
//         Loops++
//     }
//     // console.log(WordList)
// }

// var mysentence = 'allen aced the available bubble sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.'
// alphabeticalOrder(mysentence)
