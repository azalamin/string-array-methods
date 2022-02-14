const jsBookList = [
    'A Smarter Way to Learn JavaScript: The new tech-assisted approach that requires half the effort',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript & JQuery: Interactive Front-End Web Development',
    'JavaScript: The Good Parts',
    'A Modern Introduction to Programming, Marijn Haverbeke',
    'The Good Parts, Douglas Crockford',
    'Learn JavaScript VISUALLY',
    'JavaScript: The Definitive Guide',
    'Coding Boot Camps',
    'Meetups and Networking Events'
];
let uniqueBook = [];
for (const book of jsBookList) {
    const searchBook = book.toLocaleLowerCase().includes('javascript');
    if (searchBook) {
        uniqueBook.push(book)
    }
}
console.log(jsBookList)
console.log(uniqueBook)