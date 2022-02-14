const numbers = [9, 6, 3, 5, 2, 1, 4, 7, 8];
const sortedNumber = numbers.sort();
// console.log(sortedNumber)
//[1, 2, 3, 4, 5, 6, 7, 8, 9]

const friends = ['zahid', 'nazmin', 'alim', 'giyas', 'jafrin', 'alamin', 'carol'];
const sortedFriends = friends.sort().reverse();
console.log(sortedFriends);


const numbers2 = [122, 342, 77, 126, 22, 33, 56, 82, 98, 75];
const sortedNumbers2 = numbers2.sort(function(a, b) {
    return a - b
});
// console.log(sortedNumbers2);
// [22, 33,  56,  75,  77, 82, 98, 122, 126, 342]