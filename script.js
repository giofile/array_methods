//   a
  const addTheWordCool = ["nice", "awesome", "tof"]
  addTheWordCool.push('cool')

  console.log(addTheWordCool);
  

// b
  const amountOfElementsInArray = ['appels', 'peren', 'citroenen']

  console.log(amountOfElementsInArray.length);


// c

const selectBelgiumFromBenelux = [ 'Belgie', 'Nederland', 'Luxemburg']

console.log(selectBelgiumFromBenelux[0]);



// d
const lastElementInArray = ["Haas", "Cavia", "Kip", "Schildpad"]

const abc = lastElementInArray[ lastElementInArray.length -1]

console.log(abc);

// e

 const presidents = ["Trump", "Obama", "Bush", "Clinton"] 


 const impeachTrumpSlice = presidents.slice(1,4) /* strict index based, exclusief het laatste getal (in de indexering) */
console.log(impeachTrumpSlice);


 const impeachTrumpSplice = presidents.splice(1,3 ) /* index van het eerste cijfer en dan in dit geval drie items optellen  */
 console.log(impeachTrumpSplice);

 //f
 
const stringsTogether= ['Winc', 'Academy', 'is', 'leuk', ';-}']

console.log(stringsTogether.join(' '));

// g

const array1 = [1,2,3]
const array2 = [4,5,6]

const combineArrays = array1.concat(array2)
console.log(combineArrays);

