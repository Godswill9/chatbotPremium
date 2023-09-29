var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var eight;
var nine;
var ten;

var str =
  "I can help you with that. Start by safely pulling over to the side of the road. Then, follow these steps to change your flat tire: 1. Locate the spare tire, jack, and lug wrench in your car. 2. Use the lug wrench to loosen the lug nuts, but do not remove them yet. 3. Use the jack to lift the car until the flat tire is off the ground. 4. Fully remove the lug nuts and take off the flat tire. 5. Put the spare tire onto the car, aligning the rim with the wheel bolts. 6. Hand-tighten the lug nuts as much as possible. 7. Lower the car using the jack and remove the jack from under the car. 8. Use the lug wrench to fully tighten the lug nuts. 9. Check the tire pressure on your spare tire and adjust if necessary. 10. Store the flat tire, jack, and lug wrench properly in your car. Remember, this is just a brief overview, so be sure to consult your car's manual for specific instructions.";
var arr = str.split("");

for (var i = 0; i < arr.length; i++) {
  if (arr[i] == "1") {
    // console.log(arr[i])
    let num = i;
    if (arr[num + 1] == ".") {
      //   console.log(arr[i], arr[num + 1], i);
      one = arr[i];
    }
    if (arr[num + 1] == "0") {
      //   console.log(arr[i], arr[num + 1], i);
      ten = arr[i] + arr[num + 1];
    }
  }
  if (arr[i] == "2") {
    two = i;
  }
  if (arr[i] == "3") {
    three = i;
  }
  if (arr[i] == "4") {
    four = i;
  }
  if (arr[i] == "5") {
    five = i;
  }
  if (arr[i] == "6") {
    six = i;
  }
  if (arr[i] == "7") {
    seven = i;
  }
  if (arr[i] == "8") {
    eight = i;
  }
  if (arr[i] == "9") {
    nine = i;
  }

  console.log(one, two, three, four, five, six, seven, eight, nine, ten);
}

// console.log(arr);
