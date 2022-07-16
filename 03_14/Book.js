class Book {
  constructor(title, noPages, year, author, isHard) {
    this.title = title;
    this.noPages = noPages;
    this.year = year;
    this.author = author;
    this.isHard = isHard;
  }
  cover(Hard) {
    this.isHard = Hard;
  }
}

export default Book;
