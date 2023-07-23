function confirmEnding(str, target) {
  
  //return str.slice(-target.length) === target
  return str.slice(str.length - target.length) === target;
  //return str.endsWith(target);
}

confirmEnding("Bastian", "n");
