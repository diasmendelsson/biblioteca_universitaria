

export default function BookList({ title, books, containerClasName}){
    return(
        <section className="font-bebas-neue text-4xl text-light-100 mt-16">
            <h2>{title}</h2>

            <ul className="book-list">
                {books.map((book) => (
                    <></>
                ))}
            </ul>
        </section> 
    )
}