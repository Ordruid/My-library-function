function sortSplice(arr) {
  arr.sort((entryA, entryB) => entryB.count - entryA.count);
  return arr.splice(0, 5);
}

let getTotalBooksCount = (books) => books.length;

let getTotalAccountsCount = (accounts) => accounts.length;

let getBooksBorrowedCount = (books) =>
  (borrowedCount = books.filter((book) => !book.borrows[0].returned).length);

let getMostCommonGenres = (books) => {
  const genreCount = {};
  books.forEach(({ genre }) => {
    genreCount[genre] = genreCount[genre] ? genreCount[genre] + 1 : 1;
  });
  return Object.keys(genreCount)
    .map((genre) => ({ name: genre, count: genreCount[genre] }))
    .sort((genreA, genreB) => genreB.count - genreA.count)
    .slice(0, 5);
};

let getMostPopularBooks = (books) =>
  books
    .map(({ borrows, title }) => ({ name: title, count: borrows.length }))
    .sort((borrowsA, borrowsB) => borrowsB.count - borrowsA.count)
    .slice(0, 5);

let getMostPopularAuthors = (books, authors) => {
  let result = [];
  authors.forEach((author) => {
    let authorName = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        authorName.count += book.borrows.length;
      }
    });
    result.push(authorName);
  });
  return sortSplice(result);
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
