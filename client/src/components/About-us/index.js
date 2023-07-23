import { Article, BgContainer, Heading, MainContainer, NavBar, Paragraph, ParagraphImg, ParagraphPair, Title } from "./AboutUsComps"
import aboutWine from '../../images/about-wine.jpg'

const About = () => {

    return (
        <MainContainer>
            <NavBar >
                <Heading>Windy Hills Chateau</Heading>
            </NavBar>
            <BgContainer />
            <Article>
                <ParagraphPair>

                    <ParagraphImg src={aboutWine} />
                    <Paragraph>
                <Title>За Windy Hills</Title>
                        Шато "Windy Hills" е разположено в центъра на  принадлежащия си лозов масив.
                        Архитектурното излъчване на сградата създава усещане за уют,
                        традиция и стил, зад които се крие едно модерно обзаведено винарско предприятие.
                        Винарната е ежедневно отворена за посещения. В подземната част на избата, където в дъбови бъчви
                        се формират и стареят вината е оформена зала за дегустации. В надземната част на избата
                        е проектиран ресторант с 60 места, от които се открива чудесна панорамна
                        гледка обхващаща целия район.
                    </Paragraph>
                </ParagraphPair>


                <ParagraphPair>

                    <Paragraph>
                <Title>Какво ни отличава?</Title>
                        Шато "Windy Hills" е разположено в центъра на  принадлежащия си лозов масив.
                        Архитектурното излъчване на сградата създава усещане за уют,
                        традиция и стил, зад които се крие едно модерно обзаведено винарско предприятие.
                        Винарната е ежедневно отворена за посещения. В подземната част на избата, където в дъбови бъчви
                        се формират и стареят вината е оформена зала за дегустации. В надземната част на избата
                        е проектиран ресторант с 60 места, от които се открива чудесна панорамна
                        гледка обхващаща целия район.
                    </Paragraph>
                    <ParagraphImg src={aboutWine} />
                </ParagraphPair>
            </Article>
        </MainContainer>
    )
}
export default About