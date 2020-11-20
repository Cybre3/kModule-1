function main(bookName, libraryCapacity, listBookNames) {
  let book = listBookNames.shift();
  let favBook = bookName;
  let bookCount = 0;

  while (book !== favBook && bookCount !== libraryCapacity) {
      book = listBookNames.shift();
      bookCount++;
  }

  if (book !== favBook) {
    console.log(`The book you searched for is not here!`);
    console.log(`You checked ${bookCount} books.`);
  } else {
    console.log(`You checked ${bookCount} books and found it.`);
  }
}

main('Troy', 8, ['Stronger', 'Life Style', 'Troy']);
main('Hunger Games', 5, [
  'Stronger',
  'Life Style',
  'Troy',
  'The Witcher',
  'Mama Sita',
]);
