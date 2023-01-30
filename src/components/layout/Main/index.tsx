import { FC, ReactNode } from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"

type Props = {
    children: ReactNode
}

const Main: FC<Props> = ({children}) => {
    return (
        <>
            <Header/>
            <main className="main flex-grow-1">
                {children}
            </main>
            <Footer/>
        </>
    )
}

export { Main }