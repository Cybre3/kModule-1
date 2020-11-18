function main(favBook, listBooks) {
    let book = listBooks.shift();


    while (book !== favBook && book !== undefined) {
        console.log(`Invalid Book: ${book}`);
        book = listBooks.shift();
    }
    if (book === favBook) {
        console.log(`Book Found!`);
    }
}

main('Alice in Wonderland', ['Winnie the Pooh', 'Alice in Wonderland']);