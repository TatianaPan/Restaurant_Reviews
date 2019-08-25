import styled from 'styled-components';

import searchBannerImage from '../assets/images/searchBanner.png';

export const SearchBanner = styled.div`
  width: 100%;
  height: 350px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin-top: 71px;
  
  background-image: url(${searchBannerImage});
  
`;

export const SearchInput = styled.input`
  width: 530px;
  height: 55px;
  
  border-radius: 3px;
  padding-left: 18px;
  margin-right: 25px;
  border: none;
  
  font-size: 20px;
  font-family: Helvetica, sans-serif;
  color: #4c4c4c;

  &:hover {
    text-decoration: none;
  }  
  &:focus {
    outline: none;
    text-decoration: none;
  }
`;

export const SubHeader = styled.div`
  width: 100%;
  height: 68px;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #4c4c4c;
  
  background-color: #eeeef1af;
  
  padding-top: 30px;
  padding-bottom: 10px;
`;

export const Underline = styled.hr`
  width: 265px;
  border: 2px solid #e47d31;
`;