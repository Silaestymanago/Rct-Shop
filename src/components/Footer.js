import styled from "@emotion/styled"

const FooterContainer =styled.footer`
    background: #222;
    border-top: 5px solid #000;
    width: 90%;
    padding: 20px 5%;
    text-align: center;
    color: #fff;
    float: left;
`
export default function Footer(){
    return(
        <FooterContainer>All rights reserved &copy;</FooterContainer>
    )
}