const Shelf = require("./shelf")



function createLibrary(name, shelves, fantasy, fiction, nonFiction) {
  return {
  name: name,
  shelves: {fantasy: [], fiction: [], nonFiction: []}
  }
}

function addBook(bookLocation, bookTitle) {
  return bookLocation.shelves[bookTitle.genre].push(bookTitle)
  }

function checkoutBook(library, bookTitle, genre) {
  const shelf = library.shelves[genre]

  if (!Shelf.searchShelf(shelf, bookTitle)) {
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
  }

Shelf.unshelfBook(bookTitle, shelf)

return `You have now checked out ${bookTitle} from the ${library.name}`



//return string checked out

}






module.exports = {
   createLibrary,
   addBook,
   checkoutBook
};
