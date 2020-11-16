function main(num, inputUnit, outputUnit) {
  let meter = 0;
  let result = 0;

  if (inputUnit === "mm") {
    meter = num / 1000;
  } else if (inputUnit === "cm") {
    meter = num / 100;
  } else if (inputUnit === "mi") {
    meter = num / 0.000621371192;
  } else if (inputUnit === "in") {
    meter = num / 39.3700787;
  } else if (inputUnit === "km") {
    meter = num / 0.001;
  } else if (inputUnit === "ft") {
    meter = num / 3.2808399;
  } else if (inputUnit === "yd") {
    meter = num / 1.0936133;
  } else {
    meter = num;
  }

  if (outputUnit === "mm") {
    result = meter * 1000;
  } else if (outputUnit === "cm") {
    result = meter * 100;
  } else if (outputUnit === "mi") {
    result = meter * 0.000621371192;
  } else if (outputUnit === "in") {
    result = meter * 39.3700787;
  } else if (outputUnit === "km") {
    result = meter * 0.001;
  } else if (outputUnit === "ft") {
    result = meter * 3.2808399;
  } else if (outputUnit === "yd") {
    result = meter * 1.0936133;
  } else {
    result = meter;
  }

  console.log(result.toFixed(8));
}

main(12, "km", "ft");
main(150, "mi", "in");
main(450, "yd", "km");
