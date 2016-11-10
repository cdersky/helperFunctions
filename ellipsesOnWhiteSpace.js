/*
 adds an ellipsis on a white space in a string
 parameter 1: a string
 return value: string
*/

function ellipsesOnWhiteSpace (name){
  if(name.length > 32){
    let nameArr = name.split(' ');
    let truncatedName = '';

    truncatedName = nameArr.reduce(function(truncatedName, val, idx){
      let addNextWord = truncatedName + ' ' + val
      return (addNextWord.length < 29) ?  addNextWord : truncatedName;
    });

    name = truncatedName + '...';
  }

  return name;
}
