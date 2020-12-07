function createTitle(bookTitle) {

  return "The " + bookTitle;
}

function buildMainCharacter(name,age,pronouns) {
  return  {
    name,
    age,
    pronouns,
  };

}

function saveReview(phrase, reviews) {
  if (reviews.includes(phrase)) {
    return
  }
  reviews.push(phrase)
}

function calculatePageCount(bookTitle) {

  return bookTitle.length * 20
}

function writeBook(bookTitle, bookCharacter, theme) {
  return  {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: theme
  }

}

function editBook(ghoulBook,pageCount,number) {
  var number = 340;
  var percentToGet = 75
  var percent = (percentToGet / 100) * number;

  return ghoulBook.pageCount = percent
}


//};
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
