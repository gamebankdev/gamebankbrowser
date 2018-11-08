import React from "react";
import styled from 'styled-components'

import HeaderCompontents from '../Component/Headers'
import Home from '../Component/Home'

const MainContainer=styled.div`
   width:100%;
   min-height:100%;
  padding-bottom:30px;
`
export default () => {
  return (
      <MainContainer>
        <HeaderCompontents />
        <Home />
      </MainContainer>
      
  );
};
