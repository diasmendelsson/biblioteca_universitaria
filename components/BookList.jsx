import BookCard from "./BookCard";


export default function BookList({ title, books, containerClassName}){
    return(
        <section className={containerClassName}>
            <h2  className="font-bebas-neue text-4xl text-light-100">{title}</h2>

            <ul className="book-list">
                {books.map((book) => (
                    <BookCard key={book.title} {... book}/>
                ))}
            </ul>
        </section> 
    )
}