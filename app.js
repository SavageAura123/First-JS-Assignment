function convertWeight(name, weight) {
    // let message = `${name}, your weight is ${weightInPound.toFixed([2])} `;
    // alert(message);
    const message = (name, weightInPounds) => {
    return `hello fellas my name is ${name}, and i weigh ${weightInPounds.toFixed([2])} at the moment`;
  };
};

  let name = prompt("Please enter your name:");
    let weightInKg = prompt("Please enter your weight in kg:");
    var weightInPounds = weightInKg * 2.20462;
    var message = name + ", your weight is approximately " + weightInPounds.toFixed(2) + " pounds.";
    alert(message);
  