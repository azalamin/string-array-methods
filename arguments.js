function add(num1, num2) {
    let result = 0;
    for (let num of arguments) {
        result += num
    }
    return result
}
const result = add(36, 14, 30, 50, 60, 910)
console.log(result)

function addFriends() {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + " ";
    }
    return fullName
}
const friends = ['zahid', 'nazmin', 'alim', 'giyas', 'jafrin', 'alamin', 'carol'];

console.log(addFriends('omuk', 'sonket', 'bin', 'hanif', 'sonket', 'bin', 'tomuk', 'sonket'));
//zahid nazmin alim giyas jafrin alamin carol