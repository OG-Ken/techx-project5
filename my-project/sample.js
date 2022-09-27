function getInputValue() {
  // Selecting the input elements of meal 1
  var m11 = document.getElementById("m11").value;
  var m12 = document.getElementById("m12").value;
  var m13 = document.getElementById("m13").value;
  var m14 = document.getElementById("m14").value;
  var m15 = document.getElementById("m15").value;

  // Selecting the input elements of meal 2
  var m21 = document.getElementById("m21").value;
  var m22 = document.getElementById("m22").value;
  var m23 = document.getElementById("m23").value;
  var m24 = document.getElementById("m24").value;
  var m25 = document.getElementById("m25").value;

  // Displaying the value
  const inputVal = {
    Meals: {
      "Meal 1": [m11, m12, m13, m14, m15],
      "Meal 2": [m21, m22, m23, m24, m25],
    },
  };
  console.log(inputVal);
}

function f() {
  const allInBody = document.getElementById("myInput").value;

  for (const element of allInBody) {
    console.log(element);
  }
}
