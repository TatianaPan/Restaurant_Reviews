import styled from 'styled-components';

export const StrongButton = styled.button`
  width: 259px;
  height: 55px;
  border-radius: 28px;
  border: none;
  background-color: #e47d31;
  
  font-family: Helvetica,sans-serif;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  
  &:hover {
    text-decoration: none;
  }  
  &:focus {
    outline: none;
    text-decoration: none;
  }
  
  cursor: pointer;
`;

export const StrongButtonLeft = styled.button`
  width: 100px;
  height: 41px;
  border-radius: 28px 0 0 28px;
  border: none;
  border-right: 1px solid white;
  background-color: #e47d31;
  
  font-family: Helvetica,sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  
  &:hover {
    text-decoration: none;
  }  
  &:focus {
    outline: none;
    text-decoration: none;
  }
  
  cursor: pointer;
`;

export const StrongButtonRight = styled.button`
  width: 100px;
  height: 41px;
  border-radius: 0 28px 28px 0;
  border: none;
  background-color: #e47d31;
  
  font-family: Helvetica,sans-serif;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }  
  &:focus {
    outline: none;
    text-decoration: none;
  }
`;

export const WeakButton = styled.button`
  height: 1em;
  background:none;
  border:none; 
  padding:0;
  cursor: pointer;
     
  &:hover {
    text-decoration: underline;
  }  
  &:focus {
    outline: none;
    text-decoration: underline;
  }
`;

