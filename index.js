function hasTargetSum(array, target) {
  // Write your algorithm here
  let currArr
  for (let i = 0; i<array.length; i++) {
    currArr = array.slice(i+1)
    let currNum = array[i];
    for (let j = 0; j < currArr.length; j++) {
      if (currNum+currArr[j]===target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/*
  Add written explanation of your solution here
  Using a nested iterator, add each number in
   the array to every other number in the array 
   aside form itself, if the sum of any pair of 
   numbers equals the target return true,
   otherwise return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 5, 7, 11, 13, 17, 19], 35));
}

module.exports = hasTargetSum;
