function takeANumber(currentLine, name){
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine){
  if (currentLine.length > 0) {
    return `Currently serving ${currentLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.';
  }
  var result = 'The line is currently:'
  for (var i = 0; i < line.length; i++) {
    var name = line[i];
    result += ` ${i+1}. ${name}`
  }
  return result;
}
