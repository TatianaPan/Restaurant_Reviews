import styled from 'styled-components';

import restBannerImage from '../assets/images/DSC_0213.png';

export const RestaurantBanner = styled.div`
  width: 100%;
  height: 400px;
 
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  align-items: start;
  
  background-image: url(${restBannerImage});
  
`;


export const RestaurantAddress = styled.div`
  width: 261px;
  height: 236px;
  border-radius: 3px;
  background-color: #f8f8f8;
  position: relative;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
 
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start; */

  
`;
