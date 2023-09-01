// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function isVowel(c){
  return(c == 'a' || c == 'e' || c == 'i' ||
        c == 'o' || c == 'u' || c == 'A' ||
        c == 'I' || c == 'E' || c == 'O' ||
        c == 'U');
}
function translatePigLatin(s) {
  let len = s.length;
  let index = -1;
  if(isVowel(s[0])){
    return s+ "way";    
  }
  for(let i=1; i<len; i++){
    if(isVowel(s[i])){
      index = i;
      break;
    }
  }
  if(index == -1){
    return s + "ay";
  }
  return s.substring(index)+s.substring(0,index)+"ay";
}

translatePigLatin("consonant");
