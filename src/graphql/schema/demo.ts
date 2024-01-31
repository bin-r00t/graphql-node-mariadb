export default `#graphql
    # comment
    type Book {
        title: String
        author: String 
    }

    type Query {
        books: [Book!]
    }
`