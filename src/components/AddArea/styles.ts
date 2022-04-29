import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  align-item: center;

  .image { 
    margin-right: 2px;
  }

  input { 
    border: 0px;
    background: transparent;
    outline: 0;
    color: #FFF;
    font-size: 16px;
    flex: 1;
  }

  button { 
    background-color: #20212C;
    color: #FFF;
    border-radius: 10px;
    border: 1px solid #FFF;
    outline: 0;
    cursor: pointer;
    transition: all ease 0.3s
  }
  button:hover { 
    background-color: #FFF;
     color: #20212C;
  }
`;

