let findAuthorById = (authors, id) =>
  authors.find((author) => author.id === id);

let findBookById = (books, id) => books.find((book) => book.id === id);

let partitionBooksByBorrowedStatus = (books) => {
  let checkedOut = [];
  let returned = [];
  let result = [];
  books.forEach((book) =>
    !book.borrows[0].returned ? checkedOut.push(book) : returned.push(book)
  );
  result.push(checkedOut);
  result.push(returned);
  return result;
};

function getBorrowersForBook(book, accounts) {
  let result = [];
  let borrowed = book.borrows;
  borrowed.forEach((borrow) => {
    let account = accounts.find((acc) => acc.id === borrow.id);
    let obj = account;
    obj["returned"] = borrow.returned;
    result.push(obj);
  });
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
