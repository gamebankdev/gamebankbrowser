import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
    width:1200px;
    height:100px;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const UlStyles=styled.ul`
    margin:0;
    padding:0;
    display:flex;
`
const Listyle=styled.li`
    list-style:none;
    margin-right:70px;
    font-size:16px;
    font-weight:700;
`
export default ()=>{
    return(
        <Container>
            <div>
                &nbsp;
            </div>
            <UlStyles>
                    <Listyle>主页</Listyle>
                 
                </UlStyles>
            <div>
                中文
            </div>
        </Container>
    )
}