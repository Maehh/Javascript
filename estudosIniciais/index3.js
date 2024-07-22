// function createBook(title, author, pages) {

//     const book = {
//         bookTitle: title,
//         bookAuthor: author,
//         bookPage: pages,
//         bookChapters: {
//             chapt1: 1,
//             chapt2: 120,
//             chapt3: 170,
//             chapt4: 200
//         },
//         printBook: function() {
//             console.log('Printing: ', title, '.....')}
//     }
//     return book
// }

function CreateBook(title, author, pages) {

        this.bookTitle = title;
        this.bookAuthor = author;
        this.bookPage = pages;
        this.bookChapters = {
            chapt1: 1,
            chapt2: 120,
            chapt3: 170,
            chapt4: 200}
}
const book1 = new CreateBook('JEJ', 'HAAI', 1235)
console.log(book1)
book1.printBook()