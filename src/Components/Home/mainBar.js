import React from "react";
import styled from 'styled-components';

const Pgph = styled.p`
    font-family: 'Play', sans-serif;`

const H2 = styled.h2`
    font-family: 'Play', sans-serif;`

const H4 = styled.h4`
    font-family: 'Play', sans-serif;`

const H3 = styled.h3`
    font-family: 'Play', sans-serif;`

const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    border-bottom-right-radius: 1em;
    border-top-right-radius: 1em;
    width: 85%;
    height: 100%;`

const TopHalf = styled.section`
    display: flex;
    width: 100%;
    height: 40%;
    background-color: #4B88A2;
    justify-content: space-around;
    align-items: center;
    color: #FFF9FB;`

const TopLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    height: 90%;
    align-items: center;
    justify-content: space-around;
    align-items: flex-start;`

const TopRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 90%;
    align-items: center;`

const BottomHalf = styled.section`
    display: flex;
    background-color: #FFF9FB;
    border-bottom-right-radius: 1em;
    flex-direction: column;
    width: 100%;
    height: 60%;
    justify-content: space-between;
    align-items: center;`

const TopBottom = styled.section`
    display: flex;
    flex-direction: column;
    height: 30%;
    width: 93%;
    justify-content: space-around;`

const TopPgph = styled.div`
    display: flex;
    font-family: 'Play', sans-serif;
    height: 55%;
    align-items: center;`

const TopH2 = styled.div`
    display: flex;
    font-family: 'Play', sans-serif;
    height: 40%;
    align-items: center;`

const BottomCards = styled.div`
    display: flex;
    background-color: #252627;
    color: #FFF9FB;
    height: 60%;
    width: 95%;
    justify-content: space-between;
    align-items: center;`

const Image = styled.img`
    width: 250px;
  height: 250px;`

const Cards = styled.div`
    width: 21%;
    /* flex-basis: 21%; */
    height: 95%;
    display: flex;
    flex-direction: column;`

const CardIconDiv = styled.div`
  width: 80%;
  display: flex;
  height: 20%;
  justify-content: space-evenly;
  color: gold;
  align-items: center;
  font-size: 2rem;`

const CardPgph = styled.div`
    font-family: 'Play', sans-serif;
    display: flex;
    flex-direction: column;
    height: 70%;
    text-align: justify;`

const CardIconTitle = styled.h4`
    margin: 0.5em;
    color: #FFF9FB;`

const ActualPgph = styled.p`
    margin: 0.5em;`


export default function MainBar(props) {
  

  return (
    <MainSection>

        <TopHalf>
            <TopLeft>
                <div>
                    <H2>Alexander Oguejiofor</H2>
                    <H3> Full Stack Web Developer | Business Analyst</H3>
                </div>

                <div>
                    <Pgph>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
                        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, 
                        accompanied by English versions from the 1914 translation by H. Rackham.</Pgph>
                </div>

                <div>
                    <button>Projects</button>
                    <button>Resume</button>
                </div>
            </TopLeft>

            <TopRight>
            <Image src='https://avatars1.githubusercontent.com/u/38817414?v=4' alt="user"/>
            </TopRight>
        </TopHalf>

        <BottomHalf>

            <TopBottom>
                <TopH2>
                <H2>What I do</H2>
                </TopH2>
                <TopPgph>
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </TopPgph>
            </TopBottom>

            <BottomCards>
                <Cards>
                    <CardIconDiv>
                    <i class="fab fa-js-square" style={{color: 'gold'}}></i>
                    <i class="fab fa-react" style={{color: 'aqua'}}></i>
                    </CardIconDiv>

                    <CardPgph>
                    <CardIconTitle>Vanilla Javascript, React</CardIconTitle>
                    <ActualPgph>
                        Nunc tempus tellus ut porttitor sodales. Maecenas malesuada vulputate turpis sit amet tempus. Sed vitae fringilla ipsum. Nulla sagittis ex at tristique fermentum. Ut sed faucibus massa, in vulputate orci. 
                        </ActualPgph>
                    </CardPgph>

                </Cards>

                <Cards>
                    <CardIconDiv>
                    <i class="fab fa-node-js" style={{color: 'lime'}}></i>
                    </CardIconDiv>
                    
                    <CardPgph>
                    <CardIconTitle>Node.js</CardIconTitle>
                    <ActualPgph>
                        Nunc tempus tellus ut porttitor sodales. Maecenas malesuada vulputate turpis sit amet tempus. Sed vitae fringilla ipsum. Nulla sagittis ex at tristique fermentum. Ut sed faucibus massa, in vulputate orci. 
                        </ActualPgph>
                    </CardPgph>
                    
                </Cards>

                <Cards>
                    <CardIconDiv>
                    <i class="fab fa-html5" style={{color: 'darkorange'}}></i>
                    <i class="fab fa-css3-alt" style={{color: 'skyblue'}}></i>
                    <i class="fab fa-less" style={{color: 'blue'}}></i>
                    </CardIconDiv>

                    <CardPgph>
                    <CardIconTitle>HTML, CSS & LESS </CardIconTitle>
                    <ActualPgph>
                        Nunc tempus tellus ut porttitor sodales. Maecenas malesuada vulputate turpis sit amet tempus. Sed vitae fringilla ipsum. Nulla sagittis ex at tristique fermentum. Ut sed faucibus massa, in vulputate orci.  
                        </ActualPgph>
                    </CardPgph>

                </Cards>

                <Cards>
                    <CardIconDiv>
                    <i class="fab fa-npm" style={{color: 'red'}}></i>
                    </CardIconDiv>

                    <CardPgph>
                    <CardIconTitle>NPM</CardIconTitle>
                        <ActualPgph>
                        Nunc tempus tellus ut porttitor sodales. Maecenas malesuada vulputate turpis sit amet tempus. Sed vitae fringilla ipsum. Nulla sagittis ex at tristique fermentum. Ut sed faucibus massa, in vulputate orci.  
                        </ActualPgph>
                    </CardPgph>

                </Cards>
            </BottomCards>
        </BottomHalf>

    </MainSection>
  );
};