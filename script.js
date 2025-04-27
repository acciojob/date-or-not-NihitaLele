var isDate = function (input) {
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }
  if (typeof input === "string" || typeof input === "number") {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate);
  }
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));



