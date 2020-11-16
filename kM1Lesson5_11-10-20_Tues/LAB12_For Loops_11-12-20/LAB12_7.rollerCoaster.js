function main(capacity, minAge, numberPeople, listAges) {
  let seatsFilled = 0;

  for (let i = 1; i <= numberPeople; i++) {
    let age = listAges.shift();
    if (age >= minAge) {
      seatsFilled++;
    }
  }

  if (seatsFilled >= capacity) {
    console.log("The rollercoaster deapartures");
  } else {
    console.log("Waiting...");
  }
}

main(2, 10, 3, [15, 12, 8]);
main(5, 11, 0);
