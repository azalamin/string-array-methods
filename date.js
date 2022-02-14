const favDate = new Date('1975-12-16');
console.log(favDate)
const anotherDate = new Date(1974, 3, 16, 11, 50, 40, 80);
console.log(anotherDate)

// Compare date and time
if (favDate.getTime() > anotherDate.getTime()) {
    console.log('favDate is earlier')
} else {
    console.log('anotherDate is earlier')
}