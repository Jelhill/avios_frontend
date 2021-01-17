import styled from "styled-components"

export const NavWrapper = styled.nav`
    background: var(--lightRed);
    height: 100px;
    box-sizing: border-box;

`

export const ButtonWrapper = styled.button`
    width: 100px;
    background-color: var(--lightWhite);
    height: 45px;
    font-size: 25px;
    border: none;
    &:hover{
        border: 1px solid #ECF0F1;
        color: #808B96;
    }
`

export const NavbarBelowWrapper = styled.div`
    background-color: #BD2750;
    width: 100%;
    margin:auto;
    height:60px;
    text-align: center;
    font-size: 18px;
    .nav-link{
        color: var(--mainWhite);
    }
    .nav-link:hover{
        color: #D0D3D4   ;
    }
`


