import styled from 'styled-components';

export const Container = styled.div`
  background-color: #17181F;
  color: #797A81;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 10px;

  @media (max-width:760px) { 
    max-width: 350px;
  }
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  color: #FFF;
  text-align: center;
  border-bottom: 1px solid #444;
  padding-bottom: 20px;

  @media (max-width:760px) { 
    font-size: 30px
  }
`;

 export const Footer = styled.footer`
   

   
   .dev { 
    text-align: center;
    color: gray;
   }

   a { 
    color: gray;
   }
   a:hover { 
    opacity: 70%;
   }
   

 `;