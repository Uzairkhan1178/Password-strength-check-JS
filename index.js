SpecChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", '"', "<", ">", ",", ".", "/", "`", "~", "\\", "|"];
numberarr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

password = prompt("Enter your Password");
length = password.length;
individualchar = password.split('');
if (length < 5) {
  console.log("Password must contain at least 5 characters");
} else {
  let hasspecchar = SpecCharlimit(individualchar);
  if (hasspecchar) {
    if (numberlimit(individualchar)) {
      // call function for strength checker
      console.log(strengthcheck(password))
    }
    else{console.log("Password must contain at least one number")}
  } else {
    console.log("Password must contain at least one special character");
  }
}

function SpecCharlimit(individualchar) {
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < 32; j++) {
      if (individualchar[i] === SpecChar[j]) {
        return true;
      }
    }
  }
  return false;
}

function numberlimit(individualchar) {
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < 10; j++) {
      if (individualchar[i] === numberarr[j]) {
        return true;
      }
    }
  }
  return false;
}

function strengthcheck(password) {
  let individual = password.split('');
  let specStrength = 0;
  let numStrength = 0;
  let lengthStrength = 0;

  for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < 32; j++) {
      if (individual[i] === SpecChar[j]) {
        specStrength++;
      }
    }
  }

  for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < 10; j++) {
      if (individual[i] === numberarr[j]) {
        numStrength++;
      }
    }
  }

  if (password.length >= 10) {
    lengthStrength = 3;
  } else if (password.length >= 7) {
    lengthStrength = 2;
  } else if (password.length >= 5) {
    lengthStrength = 1;
  }

  console.log("Special character count: " + specStrength);
  console.log("Number count: " + numStrength);
  console.log("Password length: " + lengthStrength);

  const totalStrength = specStrength + numStrength + lengthStrength;

  if (totalStrength <= 3) {
    console.log("Password strength: Weak");
  } else if (totalStrength <= 6) {
    console.log("Password strength: Moderate");
  } else {
    console.log("Password strength: Strong");
  }
}
