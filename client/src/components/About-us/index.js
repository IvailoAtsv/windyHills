import { Article, AwardImg, AwardsContainer, BgContainer, Heading, MainContainer, NavBar, Paragraph, ParagraphImg, ParagraphPair, Title } from "./AboutUsComps"
import wineLeft from '../../images/wine-left.jpg'
import wineRight from '../../images/wine-right.jpg'
import windyRest from '../../images/windy-rest.jpg'
import rose from '../../images/rose.jpg'
import cabernet from '../../images/cabernet.jpg'
import merlot from '../../images/merlot.jpg'
import mavrud from '../../images/mavrud.jpg'
import merlotawrd from '../../images/merlotawrd.jpg'
import Footer from "../Footer"
import Sidebar from "../Sidebar"
import Navbar from "../Navbar"
import { useState } from "react"
const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
    const handleClickScroll = () => {
      const element = document.getElementById('reservation')
      if(element){
        element.scrollIntoView({ behavior: "smooth"})
      }else{
        console.log('ne brat ne stava');
      }
    }
    return (
        <>
            <MainContainer>
                <NavBar >
                </NavBar>
                <BgContainer >
                    <Heading to="/">Windy Hills Chateau</Heading>
                </BgContainer>
                <Navbar toggle={toggle} />
                <Sidebar isOpen={isOpen} toggle={toggle} currentPage='about'/>
                <Article>
                    <ParagraphPair>

                        <ParagraphImg src={windyRest} />
                        <Paragraph>
                            <Title>За Windy Hills</Title>
                            Шато "Windy Hills" е разположено в центъра на  принадлежащия си лозов масив.
                            Архитектурното излъчване на сградата създава усещане за уют,
                            традиция и стил, зад коeто се крие едно модерно обзаведено винарско предприятие.
                            Винарната е ежедневно отворена за посещения. В подземната част на избата, където в дъбови бъчви
                            се формират и стареят вината е оформена зала за дегустации. В надземната част на избата
                            се намира ресторант, от който се открива чудесна панорамна
                            гледка обхващаща целия район.
                        </Paragraph>
                    </ParagraphPair>


                    <ParagraphPair>

                        <Paragraph>
                            <Title>История</Title>
                            През 2004 година шато "Windy Hills" отваря врати в непосредствена близост до сливенските минерални бани. В центъра на масива от 600 декара се намира централната сграда, която включва ресторант с вътрешен капацитет до 80 места, както и външен - до 120 места. Къщата за гости разполага с 11 уютни двойни стаи, оборудвани за едно истинско релаксиращо преживяване. Комплекса разполага с външен басейн, който работи целогодишно, а през студените сезони е снабден с минерална вода от сливенските минерални бани.
                        </Paragraph>
                        <ParagraphImg src={wineLeft} />
                    </ParagraphPair>
                    <AwardsContainer>
                        <AwardImg src={merlot} />
                        <AwardImg src={cabernet} />
                        <AwardImg src={rose} />
                        <AwardImg src={mavrud} />
                        <AwardImg src={merlotawrd} />
                    </AwardsContainer>
                    <ParagraphPair>

                        <ParagraphImg src={wineRight} />
                        <Paragraph>
                            <Title>Какво ни отличава?</Title>
                            В къщата за гости на Шато “ Windy Hills” има 11 двойни стаи,където гостите могат да прекарат истински релаксиращ уикенд. Всяка стая е снабдена с хидромасажни вани, които могат да бъдат използвани с минерална вода в студените сезони.
                            По желание на посетителите може да бъде организирано посещение на всеки отделен сектор от производствената част на винарната, съпътствано от подробно обяснение за техния начин на работа.

                            В "Windy Hills" може да намерите уют и спокойствие, акомпанирани с добра храна и дружелюбно обслужване, както и отговор на всеки въпрос свързан с винопроизводството.
                        </Paragraph>
                    </ParagraphPair>
                </Article>
            </MainContainer>
            <Footer currentPage='about-us' />
        </>
    )
}
export default About