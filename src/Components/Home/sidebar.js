import React from "react";
import styled from 'styled-components';


const Image = styled.img`
    width: 100px;
  height: 100px;
  border-radius: 50px;`

const Sidebar = styled.aside`
  width: 15%;
  height: 100%;
  display: flex;
  border-bottom-left-radius: 1em;
    border-top-left-radius: 1em;
  flex-direction: column;
  align-items: center;
  background-color: #252627;`

const SocialMediaDiv = styled.div`
  width: 80%;
  display: flex;
  height: 20%;
  justify-content: space-between;
  color: white;
  align-items: center;
  font-size: 2rem;`

const BigSection = styled.section`
    width: 90%;
    height: 35%;
    display: flex;
    flex-direction: column;
    border-bottom: solid 0.1em #FFF9FB;
    font-family: 'Play', sans-serif;
    justify-content: space-around;
    align-items: center;`

const SmallSection = styled.section`
    width: 90%;
    height: 30%;
    display: flex;
    flex-direction: column-reverse;
    margin: 0.1em;
    justify-content: space-around;
    align-items: center;`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 95%;
  height: 100%;`

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #FFF9FB;
  margin: 0.2em;
  height: 20%;
  width: 100%;
  font-family: 'Play', sans-serif;
  font-size: 1.2em;`

const H4 = styled.h4`
  font-family: 'Play', sans-serif;
  color: #FFF9FB;`

const Pgph = styled.p`
    font-family: 'Play', sans-serif;
    font-size: 0.8em;
    color: #FFF9FB;
    text-align: center;`

export default function SideBar(props) {
    const {name} = props;
  

  return (
    <Sidebar>

        <BigSection>
            <H4>{name}</H4>
            <div>
                <Image src='https://avatars1.githubusercontent.com/u/38817414?v=4' alt="user"/>
            </div>
            <Pgph>My name is Alexander Oguejiofor and I am a FullStack Web Developer. Welcome to my portfolio website!</Pgph>
        </BigSection>

        <BigSection>
          <Nav>
            <NavDiv>
            <i class="fas fa-file-contract"></i>
              Resume
            </NavDiv>
            <NavDiv>
            <i class="fas fa-laptop-code"></i>
              Projects
            </NavDiv>
            <NavDiv>
            <i class="fas fa-blog"></i>
              Medium
            </NavDiv>
            <NavDiv>
            <i class="fas fa-paper-plane"></i>
              Contact
            </NavDiv>
          </Nav>
        </BigSection>

        <SmallSection>
            <SocialMediaDiv>
              <i class="fab fa-github"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-linkedin"></i>
            </SocialMediaDiv>

            <div>
              dark mode
              <i class="fas fa-adjust"></i>
            </div>
        </SmallSection>

    </Sidebar>
  );
};
