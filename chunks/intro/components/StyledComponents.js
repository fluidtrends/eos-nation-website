import React from 'react';
import styled from 'styled-components';

export const Heading3 = styled.h3`
  font-family: "SF Pro Display";
	color: ${props => props.primary ? props.primary : "#FFFFFF"};
	font-size: 26px;
	letter-spacing: 0.38px;
	line-height: 31px;
	font-weight: normal;
`;

export const Heading4 = styled.h4`
  font-family: "SF Pro Display";
	color: ${props => props.primary ? props.primary : "#FFFFFF"};
	font-size: 36px;
	font-weight: bold;
	letter-spacing: 0.19px;
	line-height: 35px;
`;

export const Body2 = styled.p`
  display: inline;
	color: ${props => props.primary ? props.primary : "#FFFFFF"};
	font-family: "SF Pro Text";
	font-size: 16px;
	text-decoration: ${props => props.link ? "underline" : "inherit"};
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