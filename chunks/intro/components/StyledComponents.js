import React from 'react';
import styled from 'styled-components';

export const Heading3 = styled.h3`
  font-family: 'Roboto', sans-serif;
	color: ${props => props.primary ? props.primary : "#FFFFFF"};
	font-size: 26px;
	letter-spacing: 0.38px;
	line-height: 31px;
	font-weight: normal;
`;

export const CalenderItemWrapper = styled.div`
  display: flex;
  border-bottom: solid gray 1px;
	@media (max-width: 780px){
	  flex-direction: column;
	 }
`;

export const CalenderItemDate = styled.div`
  width: 15%;
  display: inline-block;
  color: #fff;
  padding: 20px;
  border-right: solid gray 1px;
	@media (max-width: 780px){
    border-right: none;
	  border-bottom: solid gray 1px;
	  width: calc(100% - 40px);
	}
`;

export const CalenderItemContent = styled.div`
  width: calc(90% - 141px);
  display: inline-block; 
  padding: 40px;
  color: #fff;
	@media (max-width: 780px){
    width: calc(90% - 40px);
	}
`;

export const Heading4 = styled.h4`
  font-family: 'Roboto', sans-serif;
	color: ${props => props.primary ? props.primary : "#FFFFFF"};
	text-align: ${props => props.center ? "center" : "inherit"};;
	font-size: 36px;
	font-weight: bold;
	letter-spacing: 0.19px;
	line-height: 35px;
`;

export const Body2 = styled.p`
  display: inline;
	color: ${props => props.primary ? "#324856" : props.secondary ? "#4A746A" : props.color ? props.color : "#FFFFFF"};
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	font-weight: ${props => props.bold ? "bold" : props.light ? "300" : "inherit"};
	text-decoration: ${props => props.link ? "underline" : "inherit"};
	text-transform: ${props => props.uppercase ? "uppercase" : "inherit"};;
	letter-spacing: 0.13px;
	line-height: 19px;
`;

export const Icon = styled.i`
	color: ${props => props.primary ? props.primary : "#324856"};
	background: ${props => props.primary ? props.primary : "#fff"};
	padding: 5px 5px;
	border-radius: 50%;
	font-size: 15px;
	box-shadow: 0 2px 2px 1px rgba(0,0,0,0.5);
`;

export const FooterWrapper = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  color: ${props => props.primary ? props.primary : "#fff"};
	background: ${props => props.primary ? props.primary : "#324856"};
	padding: 20px;
	@media (min-width:480px) and (max-width: 1437px){
	  padding: 0;
	}
`;

export const UserProfileSmall = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;