//Check if a value is classified as a boolean primitive. Return true or false.

function booWho(bool) {
  if(typeof(bool) === "boolean"){
    return true;
  }
  return false;

  //return typeof (bool) == "boolean";
}

console.log(booWho(true));
