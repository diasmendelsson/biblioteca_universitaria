import Image from "next/image";
import { Button } from "@/components/ui/button";
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";

export default function Home() {
  return (
    <>
     <BookOverview   {... sampleBooks[0]}/>

     <BookList 
        title="Últimos livros"
        books={sampleBooks}
        containerClassName="mt-28"
     />
    </>
  );
}

