import { CardSlider, CarouselMv } from "../../components/common"
import { Layout } from "../../components/layout"

const Home = () => {
    return (
        <Layout>
            <CarouselMv/>
            <CardSlider listTitle="Peliculas Populares" search="popular"/>
        </Layout>
    )
}

export { Home }