

export default function RootLayout({children}){
    return(
        <main className="root-container">
           <div className="mx-auto max-w-7xl">
            Header

           </div>
            {children}
        </main>
    )
}