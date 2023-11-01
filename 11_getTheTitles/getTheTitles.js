const getTheTitles = function(books) {
  const titles = []
  for (const book of books) {
    titles.push(book.title);
  }
  return titles;
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
// Do not edit below this line
module.exports = getTheTitles;
