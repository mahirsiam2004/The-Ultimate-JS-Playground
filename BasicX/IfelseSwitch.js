let name = "Mahir";
let day = 2;

if (name === "Mahir") {
  console.log("Hello Mahir!");
} else if (name === "Siam") {
  console.log("Hello Siam!");
} else {
  console.log("Hello Stranger!");
}

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
