/* Buscando e contato dados em arrays

*/

const booksByCategory = [
        {
                category: "Riqueza",
                books: [
                        {
                                title: "Os segredos da mente milionária",
                                author: "T. Harv Eker",
                        },
                        {
                                title: "O homem mais rico da babilônia",
                                author: "George S. Clason",
                        },
                        {
                                title: "Pai rico, pai pobre",
                                author: "Robert Kiyosaky e Sharon Lechter",
                        }

                ],
        },
        {
                category: "Inteligência emocional",
                books:[
                        {
                                title: "Você é insubstituível",
                                author: "Augusto Cury",
                        },
                        {
                                title: "Ansiedade",
                                author: "Augusto Cury",
                        },
                        {
                                title: "Os 7 hábitos das pessoas altamente eficazes",
                                author: "Stephen Covey",
                        }

                ],
        },

]

// contar o número de categorias e o número de livros de cada categoria

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory) {
        console.log('Total de livros da categoria: ', category.category)
        console.log(category.books.length)
}

// contar o número de autores 

function countAuthors() {
        let authors = [];

        for(let category of booksByCategory) {
                for(let book of category.books) {
                        if(authors.indexOf(book.author) == -1) {
                                authors.push(book.author)
                        }
                }
        }

        console.log("Total de autores: ", authors.length)
}

countAuthors();

// mostrar os livros do autor augusto cury 

function booksOfAugustoCury() {
        let books = [];

        for(let category of booksByCategory) {
                for(let book of category.books) {
                        if(book.author === "Augusto Cury") {
                                books.push(book.title)
                        }
                }
        }
        console.log("Livros do autor: ", books)
}
      


booksOfAugustoCury();

// transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor

function booksOfAuthor(author) {
        let books = [];

        for(let category of booksByCategory) {
                for(let book of category.books) {
                        if(book.author === author) {
                                books.push(book.title)
                        }
                }
        }
        console.log(`Livros do autor: ${author}: ${books.join(", ")}`)
}
      
booksOfAuthor('Augusto Cury');
booksOfAuthor('George S. Clason');