function addNewBook() {
    const bookTitle = document.getElementById('book-title').value;
    const bookAuthor = document.getElementById('book-author').value;

    const booksContainer = document.getElementById('books-container');
    const newBookEntry = document.createElement('div');
    newBookEntry.classList.add('book-entry'); 
    const bookInfo = document.createElement('p');
    bookInfo.textContent = `"${bookTitle}" by ${bookAuthor}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';

    removeButton.addEventListener('click', function () {
        booksContainer.removeChild(newBookEntry); 
    });

    newBookEntry.appendChild(bookInfo);
    newBookEntry.appendChild(removeButton);

    booksContainer.appendChild(newBookEntry);

    // Clear input fields
    document.getElementById('book-title').value = '';
    document.getElementById('book-author').value = '';
}
