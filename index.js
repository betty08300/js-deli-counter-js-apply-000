function takeANumber(currentLine, name){
  return `Welcome, ${name}. You are number ${currentLine} in line.`
}

function nowServing(currentLine){
  for (var i = 0; i < currentLine.length; i++) {
    var current = currentLine[i];
    return current;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine()
