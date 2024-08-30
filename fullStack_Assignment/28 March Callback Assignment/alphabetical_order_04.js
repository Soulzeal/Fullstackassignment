function logBookTitles(bookTitles) {
	const sortedTitles = bookTitles.sort();
	console.log(sortedTitles);
  }
  
  function bookTitles(books, callback) {
	const bookTitles = books.map(book => book.title);
	callback(bookTitles);
  }
  
  const myBooksCollection = [
	{ title: "Data Scientist", author: "Krish Nair", year: 2015 },
	{ title: "Java Programming", author: "Hyder abbas", year: 2017 },
	{ title: "Full Stack", author: "Hitesh Choudhary", year: 2019 },
	{ title: "Physics Wallah", author: "Alakh Panday", year: 2021 }
  ];
  
  bookTitles(myBooksCollection, logBookTitles);
  