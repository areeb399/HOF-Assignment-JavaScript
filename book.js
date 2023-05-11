const books = [
    {
      title: "The Hunger Games",
      author: "Suzanne Collins",
      publicationYear: 2008
    },
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      publicationYear: 2005
    },
    {
      title: "The Help",
      author: "Kathryn Stockett",
      publicationYear: 2009
    },
    {
      title: "The Immortal Life of Henrietta Lacks",
      author: "Rebecca Skloot",
      publicationYear: 2010
    }
  ];
  
  const filteredBooks = books.filter((book)=> {
    return book.publicationYear >= 2010;
  }).map((book)=> {
    return {
      title: book.title,
      author: book.author.toUpperCase()
    };
  });
  
  console.log(filteredBooks);
  