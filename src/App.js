import React from 'react';
import './App.css';
import SideBar from './Components/Home/sidebar';
import MainBar from './Components/Home/mainBar';
import styled from 'styled-components';
import * as data from './data/data'

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    background-color: #D3D4D9;`

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: whitesmoke;
    width: 90vw;
    height: 95vh;
    align-self: center;
    justify-content: flex-start;
    border-radius: 1em;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transition: 0.3s;`

function App() {


  return (
    <MainWrapper>
      <InnerWrapper>
        <SideBar name={data.data.name}/>
        <MainBar/>
      </InnerWrapper>
    </MainWrapper>
  );
}

export default App;
