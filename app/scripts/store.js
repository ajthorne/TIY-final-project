import User from './models/user';
import Users from './collections/users';
import Books from './collections/books';
import LibraryBooks from './collections/libraryBooks';

let store = {
  session: new User(),
  //access using store.user

  users: new Users(),
  //access using store.users

  books: new Books(),
  //access using store.books

  libraryBooks: new LibraryBooks()
  //access using store.libraryBooks
}

export default store;