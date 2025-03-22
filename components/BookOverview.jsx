import Image from "next/image";
import { Button } from "./ui/button";
import BookCover from "./BookCover";

export default function BookOverview({title, author, genre, rating, total_copies, available_copies, description, color, cover }){
    return(
        <section className="book-overview">
            <div className="flex flex-1 flex-col gap-5">
                <h1>{title}</h1>

                <div className="book-info">
                    <p>De <span className="font-semibold text-light-200">{author}</span></p>

                    <p>Categoria{""} <span className="font-semibold text-light-200">{genre}</span></p>

                    <div className="flex flex-row gap-1">
                        <Image src="/icons/star.svg" alt="star" width={22} height={22} />
                        <p>{rating}</p>
                    </div>
                </div>

                <div className="book-copies">

                    <p>Total de livros: <span>{total_copies}</span></p>

                    <p>Livros Disponíveis: <span>{available_copies}</span></p>
                </div>

                <p className="book-description">{description}</p>

                <Button className="book-overivew_btn">
                    <Image src="/icons/book.svg" alt="book" width={20} height={20} />
                    <p className="font-bebas-neue text-xl text-dark-100">Pegar livro emprestado</p>
                </Button>
            </div>

            <div className="relative flex flex-1 justify-center">
                <div className="relative">
                    <BookCover 
                        variant="wide"
                        className="z-10"
                        coverColor={color}
                        coverImage={cover}
                    />
                </div>
            </div>
        </section>
    )
}