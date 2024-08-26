import styled from "@emotion/styled";

const HeaderContainer = styled.header`
   background: #222;
    padding: 20px 10%;
    width: 80%;
    border-radius: 5px solid #000;
    float: left;
  
.logo { 
    font-family: "Lobster", sans-serif;
    font-size: 35px;
    color: #fff;
  }
 input {
    float: right;
    border: 0;
    background: #fafafa;
    border-radius: 5px;
    padding: 5px 10px;
    width: 250px;
    margin-top: 15px;
    font-family: "Montserrat", sans-serif;
    outline: none;
}
`

export default function Header(){
    return(
        <HeaderContainer>
           <span className="logo">Internet Shop</span> 
           <input type="search" placeholder="Site search"/>
        </HeaderContainer>
    )
}