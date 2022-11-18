function beepBoop(input) {

  let numberArray = [];
  for (let index=0; index<=Number(input); index++) {
    numberArray.push(index);
  }
  
  let substitutedArray = [];
  numberArray.forEach(function(element) {
    if (element.toString().includes(3)) {
      substitutedArray.push("Won't you be my neighbor?");
    } else if (element.toString().includes(2)) {
      substitutedArray.push("Boop!");
    } else if (element.toString().includes(1)) {
      substitutedArray.push("Beep!"); 
    } else {
      substitutedArray.push(element);
    }
  });

  return substitutedArray;
}
