function beepBoop(input) {

  if (parseInt(input)<0) {
    return "Please enter a number equal to 0 or greater"
  }

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

  return substitutedArray.join(", ");
}

function formSubmit (event) {
  event.preventDefault();
  document.getElementById("beepBooped").innerText = "";
  const input = document.getElementById("userNumber").value;
  let result = beepBoop(input);
  document.getElementById("beepBooped").append(result);
}

function refreshPage() {
  window.location.reload();
}


window.addEventListener("load", function() {
  document.querySelector("form#input").addEventListener("submit", formSubmit);
  document.getElementById("refresh").addEventListener ("click", refreshPage);
});
