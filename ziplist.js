function ziplist(listOne, listTwo) {
  if (listOne.length === listTwo.length) {
    const retArr = [];
    for (let i = 0; i < listOne.length; i++) {
      retArr.push(listOne[i]);
      retArr.push(listTwo[i]);
    }
    return retArr;
  }
  return 'bad input: not equal length arrays';
}
console.log(ziplist([1, 2, 3], ['I', 'Am', 'Groot']));

function zipListTheSimpleWay(listOne, listTwo) {
  const retArr = [];
  _.each(listOne, function (val, index) { retArr.push(val, listTwo[index]); });
  return retArr;
}
console.log(zipListTheSimpleWay([1, 2, 3], ['I', 'Am', 'Groot']));

/*
Write a function called zipList that accepts two lists of equal length and returns the result of
alternatingly taking elements. For example: given the two lists [‘a’, ‘b’, ‘c’] and [1, 2, 3], the
function should return [‘a’, 1, ‘b’, 2, ‘c’, 3]. zipList should not use Underscore. Now write a function
called zipListTheSimpleWay that does the same thing using Underscore.
 */
