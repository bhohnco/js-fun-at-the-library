function shelfBook(book, shelf)  {
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
}
function unshelfBook(bookTitle, shelf) {
  var book = getBookByTitle(bookTitle, shelf)
const index = shelf.indexOf(book)
  if (index !== -1) {
    shelf.splice(index, 1)
  }
}
function listTitles(shelf) {
var bookList = [];
  for( var i = 0; i < shelf.length; i++) {
    bookList.push(shelf[i]['title'])
  }
  return bookList.join(", ")
}
function searchShelf(shelf, bookTitle) {
  var book = getBookByTitle(bookTitle, shelf)
  return !!book

}
function getBookByTitle(bookTitle, shelf) {
  return shelf.find(b => {
      return (bookTitle === b.title)
    })
}



















module.exports = {
   shelfBook,
   unshelfBook,
   listTitles,
   searchShelf
};
