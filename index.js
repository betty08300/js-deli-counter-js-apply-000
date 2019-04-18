function takeANumber(currentLine, name){
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine){
  if (currentLine.length > 0) {
    return currentLine.shift();
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return = 'The line is currently empty.';
  }
  for (var i = 0; i < line.length; i++) {
    var name = line[i];
    return `The line is currently:${i+1}. ${name}`
  }


}
