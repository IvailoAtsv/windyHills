import Footer from "../Footer"
import { GalleryBack, GalleryContainer, GalleryImg, GalleryNav, GalleryTitle, ImgContainer } from "./GalleryComps"
import img1 from './gallery/img1.jpg'
import img2 from './gallery/img2.jpg'
import img3 from './gallery/img3.jpg'
import img4 from './gallery/img4.jpg'
import img5 from './gallery/img5.jpg'
import img6 from './gallery/img6.jpg'
import img7 from './gallery/img7.jpg'
import img8 from './gallery/img8.jpg'
import img9 from './gallery/img9.jpg'
import img10 from './gallery/img10.jpg'
import img11 from './gallery/img11.jpg'
import img12 from './gallery/img12.jpg'
import img13 from './gallery/img13.jpg'
import img14 from './gallery/img14.jpg'
import img15 from './gallery/img15.jpg'
import img16 from './gallery/img16.jpg'
import img17 from './gallery/img17.jpg'
import img18 from './gallery/img18.jpg'
import img19 from './gallery/img19.jpg'
import img20 from './gallery/img20.jpg'
import img21 from './gallery/img21.jpg'
import { MdArrowBack } from 'react-icons/md'
const Gallery = () => {
      const images = [img21,img2,img3,img19,img4,img5,img6,img7,img8,img9,img10,img11,img12,img17,img18,img13,img14,img15,img16,img20,img1]
    return(
        <>
        <GalleryContainer>
            <GalleryNav>
            <GalleryBack to="/"><MdArrowBack/></GalleryBack>
        <GalleryTitle>Галерия</GalleryTitle>
            </GalleryNav>
        <ImgContainer>
        {images.map((image, index) => <GalleryImg key={index} src={image} loading="lazy"/>)}
        
       
        </ImgContainer>
        </GalleryContainer>
        <Footer currentPage='gallery'/>
        </>
    )
}
export default Gallery