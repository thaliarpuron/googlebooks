import axios from "axios";
// endpoint from googlebooks api
const BaseUrl = "https://www.googleapis.com/books/v1/volumes?q="

export default {
    // calls googlbooks api and retrieve books based on user input
    searchBooks: (query) => axios.get(BaseUrl + query),
    // get all books saved in db
    getBooks: () => axios.get("https://radiant-caverns-09253.herokuapp.com/api/books"),
    // saves a book to the db
    saveBook: (bookData) => axios.post("https://radiant-caverns-09253.herokuapp.com/api/books", bookData),
    // deletes a book with the given id
    deleteBook: (id) => axios.delete("https://radiant-caverns-09253.herokuapp.com/api/books/" + id)
};