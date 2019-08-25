import styled from 'styled-components';

export const RestaurantCardStyle = styled.div`
  width: 270px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  
  margin-right: 30px;
  
  background-color: white;
  
  border-radius: 3px;
  border: 1px solid lightgray;
  border-top: solid 8px #e47d31;
`;

export const RestaurantHeader = styled.div`
`;

export const RestaurantName = styled.h3`
  margin: 10px 15px 5px 15px;  
  font-size: 20px;
  font-weight: normal;
    color: #4c4c4c;
`;

export const RestaurantStars = styled.img`
  margin: 5px 0 15px 10px;
  width: 140px;
`;

export const RestaurantSub = styled.p`
  font-size: 16px;
  margin: 0 15px 5px 15px;  
    color: #4c4c4c;
`;

export const RestaurantImage = styled.img`

`;