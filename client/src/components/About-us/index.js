import { Article, AwardImg, AwardsContainer, BgContainer, Heading, MainContainer, NavBar, Paragraph, ParagraphImg, ParagraphPair, Title } from "./AboutUsComps"
import wineLeft from '../../images/wine-left.jpg'
import wineRight from '../../images/wine-right.jpg'
import windyRest from '../../images/windy-rest.jpg'
import rose from '../../images/rose.jpg'
import cabernet from '../../images/cabernet.jpg'
import merlot from '../../images/merlot.jpg'

const About = () => {

    return (
        <MainContainer>
            <NavBar >
            </NavBar>
            <BgContainer >
            <Heading to="/">Windy Hills Chateau</Heading>

            </BgContainer>
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
                        се намира ресторант с 60 места, от който се открива чудесна панорамна
                        гледка обхващаща целия район.
                    </Paragraph>
                </ParagraphPair>


                <ParagraphPair>

                    <Paragraph>
                <Title>История</Title>
                //todo<br />
                        Шато "Windy Hills" е разположено в центъра на  принадлежащия си лозов масив.
                        Архитектурното излъчване на сградата създава усещане за уют,
                        традиция и стил, зад които се крие едно модерно обзаведено винарско предприятие.
                        Винарната е ежедневно отворена за посещения. В подземната част на избата, където в дъбови бъчви
                        се формират и стареят вината е оформена зала за дегустации. В надземната част на избата
                        е проектиран ресторант с 60 места, от които се открива чудесна панорамна
                        гледка обхващаща целия район.
                    </Paragraph>
                    <ParagraphImg src={wineLeft} />
                </ParagraphPair>
                <AwardsContainer>
                    <AwardImg src={merlot}/>
                    <AwardImg src={cabernet}/>
                    <AwardImg src={rose}/>
                </AwardsContainer>
                <ParagraphPair>

                    <ParagraphImg src={wineRight} />
                    <Paragraph>
                <Title>Какво ни отличава?</Title>
                //todo<br />
                        Шато "Windy Hills" е разположено в центъра на  принадлежащия си лозов масив.
                        Архитектурното излъчване на сградата създава усещане за уют,
                        традиция и стил, зад които се крие едно модерно обзаведено винарско предприятие.
                        Винарната е ежедневно отворена за посещения. В подземната част на избата, където в дъбови бъчви
                        се формират и стареят вината е оформена зала за дегустации. В надземната част на избата
                        е проектиран ресторант с 60 места, от които се открива чудесна панорамна
                        гледка обхващаща целия район.
                    </Paragraph>
                </ParagraphPair>
            </Article>
        </MainContainer>
    )
}
export default About