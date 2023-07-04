import Hero from '../Hero';
import Products from '../Products';
import { productData } from '../Products/data';
import Feature from '../Feature';
import Footer from '../Footer';
import Reservation from '../Reservation';
import { GlobalStyle } from '../../globalStyles'

const Main = () => {
    return (
        <>
            <GlobalStyle />
            <Hero />
            <Products data={productData} />
            <Feature />
            <Reservation />
            <Footer />
        </>
    )
}
export default Main