import styled from "styled-components"

export const Container= styled.div`
    display: flex;   
    justify-content: center;
    /* gap: 120px; */
/* centralizando a div no meio da página */
    padding: 20px;
    margin: 260px auto;
    /* .. */

    border: solid 1px #D9D9D9;
    border-radius: 15px;

    width: 630px;
    height: 390px;
  
` 

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 20px;
    form{ 
      display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* gap: 55px       */
    width: 297px;
    /* border-color: red; */
    height: 300px;
    gap: 78px;

      input{
        border: ridge;
        width: 216px;
    height: 22px;
    border-radius: 5px;
      }
      button{
        outline: none;
    background-color: #1366e278;
    border-bottom-color: pink;
    width: 108px;
    height: 31px;
    border-radius: 24px;
    font-size: 17px;
}
      
    }
  
`
export const divForm =styled.div`

  display: flex;
    flex-direction: column;
    align-items: center;
    gap: 49px;

    `

export const DivInfo= styled.div`
    border: solid 1px #D9D9D9;
    width: 19vw;
    height: 428px;
    position: relative;
    top: -20px;
    left: 46px;
    border-radius: 0 15px 15px 0;
    background-color: #80808024;

`
export const DivH1=styled.div`
margin-top: 62px;
      /* display: flex;
    flex-direction: column;
    gap: 33px; */
`
export const DivValor =styled.div`
 display: flex;
    flex-direction: column;
    gap: 33px;
    margin-top: 43px;
    margin-left: -50px;
    font-family: monospace;


`
export const Ppai =styled.p`
color: var(--blue);
font-weight: 700;

`

export const Pfilho =styled.p`
color: var(--blueClear);
font-weight: 500;
`