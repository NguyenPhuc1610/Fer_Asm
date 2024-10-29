import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';

const Container = styled.div`
    display: flex;
    justify-content: flex-start; 
    width: 30%;
`;

const DetailsBarWrapper = styled.div`
    background-color: #F0F0F0; /* Đặt nền thành xám */
    border: 2px solid #ccc; /* Thêm viền xung quanh */
    border-radius: 7px;
    padding: 90px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    padding-bottom: 135px;
    
    @media (max-width: 768px) {
        padding-bottom: 80px;
        grid-row: 2;
        width: 100%; /* Full width on mobile */
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextOne = styled.p`
  text-align: center;
  color: #000000; /* Đặt màu chữ thành đen */
  font-size: 20px;
  font-weight: bold;
`;

const TextTwo = styled.p`
    text-align: center;
    color: #000000; /* Đặt màu chữ thành đen */
    font-size: 16px;
    line-height: 18px;
`;

const ContactsWrapper = styled.a`
    display: flex;
    align-items: center; /* Align icons and text */
    width: 200px;
    height: 40px; /* Adjusted height for better visibility */
    margin-top: 50px;
    cursor: pointer;
    text-decoration: none;
`;

const ContactText = styled.div`
    color: #000000; /* Đặt màu chữ thành đen */
    font-size: 15px;
    margin-left: 10px;
`;

const SocialsWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 50px; /* Adjusted height for social icons */
    margin-top: 20px;
    cursor: pointer;
`;

const SocialIconWrapper = styled.a`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    &:hover {
        background-color: rgb(252, 113, 137);
    }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f44336; /* Giữ nền của biểu tượng màu đỏ */
  color: #fff; /* Màu biểu tượng vẫn là trắng */
  padding: 8px; 
  border-radius: 50%;
  margin-right: 10px; // Add space between icon and text
`;

const Divider = styled.div`
    width: 100%;
    height: 1px; /* Chiều cao của đường line */
    background-color: #ccc; /* Màu sắc của đường line */
    margin: 30px 0; /* Khoảng cách trên và dưới đường line */
`;

const DetailsBar = () => {
  return (
    <Container>
      <DetailsBarWrapper>
        <TextWrapper>
          <TextOne style={{ marginTop: -80 }}>Contact Information</TextOne>
        </TextWrapper>
        
        <div>
        <Divider />
          <TextOne>Call To Us</TextOne>
          <TextTwo>We are available 24/7, 7 days a week.</TextTwo>
          <ContactsWrapper href="tel:+8801611112222">
            <IconWrapper style={{ marginTop: -80 }}>
              <Icon.Phone size={16}  /> 
            </IconWrapper>
            <ContactText style={{ marginTop: -80 }}>+8801611112222</ContactText>
          </ContactsWrapper>

        
          <Divider />

          <TextOne style={{ marginTop: 50 }}>Write To US</TextOne>
          <TextTwo>Fill out our form and we will contact you within 24 hours.</TextTwo>
          <ContactsWrapper href="mailto:customer@exclusive.com">
            <IconWrapper style={{ marginTop: -80 }}>
              <Icon.Mail size={16} />
            </IconWrapper>
            <ContactText style={{ marginTop: -80 }}>customer@exclusive.com</ContactText>
          </ContactsWrapper>
          <ContactsWrapper href="mailto:support@exclusive.com">
            <IconWrapper style={{ marginTop: -80 }}>
              <Icon.Mail size={16} />
            </IconWrapper>
            <ContactText style={{ marginTop: -80 }}>support@exclusive.com</ContactText>
          </ContactsWrapper>
        </div>
      </DetailsBarWrapper>
    </Container>
  );
};

export default DetailsBar;
