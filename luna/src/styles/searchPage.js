import styled from 'styled-components';

export const SearchPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 71px;
  
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  color: #4c4c4c;
  
  margin-bottom: 25px;
  
  background-color: #eeeef1af;
`;

export const SearchPageSubHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto 0 auto;
  width: 400px;
  padding-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
`;

export const SearchPageTabs = styled.div`
  width: 200px;
  margin-right: 15px;
  text-align: center;
  
  cursor: pointer;
 
  &:focus {
    text-decoration: red;
  }
`;


export const SearchInputLight = styled.input`
  width: 100%;
  height: 50px;
  
  padding-left: 30px;
  margin-right: 25px;
  
  border: none;
  border-bottom: 1px solid lightgray;
  
  font-size: 20px;  
  font-weight: bold;
  font-family: Helvetica, sans-serif;  
  color: #d8d8d8;

  ::placeholder {
  font-size: 20px;  
  font-weight: bold;
  font-family: Helvetica, sans-serif;  
  color: #d8d8d8;
}

  &:hover {
    text-decoration: none;
  }  
  &:focus {
    outline: none;
    text-decoration: none;
  }
`;