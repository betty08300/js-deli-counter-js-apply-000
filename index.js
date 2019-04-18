function takeANumber(currentLine, name){
  for (var i = 0; i < currentLine.length; i++) {
    var currentPerson = currentLine[i];
    if (name === currentPerson) {
      return `Welcome, ${name}. You are number ${i + 1} in line.`;
    }
  }
}

function nowServing(currentLine){
  if (currentLine.length > 0) {
    return currentLine.shift();
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine() {}
