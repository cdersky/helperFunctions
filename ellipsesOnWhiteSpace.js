/*
 adds an ellipsis on a white space in a string
 parameter 1: a string
 return value: string
*/

function ellipsesOnWhiteSpace (str){

 if(str.length > 35){
    let addMoreWords = true;
    let truncatedName = str.split(' ').reduce(function(truncatedName, val, idx){
      let addNextWord = truncatedName + ' ' + val;
      if (addNextWord.length > 32){
        addMoreWords = false;
      }
      return (addMoreWords) ?  addNextWord : truncatedName;
    });
    str = truncatedName + '...';
  }
  return str;
}
