// document.querySelector("button").addEventListener("click", oddEven);
function oddEven(n) {
  let sum = 0;
  for (let count = 1; count <= n; count++) {
    sum += count;
  }
  console.log(sum);

  if (sum % 2 == 0) {
    document.querySelector("button").innerHTML = "now, I am yellow, because sum is: " + sum;
    document.querySelector("button").style.backgroundColor = "yellow";
  } else {
    document.querySelector("button").innerHTML = "now, I am green, because sum is: " + sum;
    document.querySelector("button").style.backgroundColor = "green";
  }
}

let a = prompt("Enter number");
// function calling
oddEven(a);
