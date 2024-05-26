import React from "react";

import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box className="navimg"> 
	<h1 style={{ color: "black",
				textAlign: "center",
				marginTop: "-50px" ,
				marginBottom: "25px",
				  fontFamily: "Pacifico, cursive"
			}} >beatZY!!	</h1>
	<Container >
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="https://en.wikipedia.org/wiki/Uttar_Pradesh">Uttar Pradesh</FooterLink>
			<FooterLink href="https://en.wikipedia.org/wiki/Ahmedabad">Ahemdabad</FooterLink>
			<FooterLink href="https://en.wikipedia.org/wiki/Indore">Indore</FooterLink>
			<FooterLink href="https://en.wikipedia.org/wiki/Mumbai">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.facebook.com/">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.youtube.com/">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	<h3 style={{ color: "white",
				textAlign: "center",
				fontSize: "15px",
				marginTop: "" }}>
                    <a href="https://www.flipkart.com/"> helpdesk@beatZY.com.</a>
	</h3>
	</Box>
);
};
export default Footer;
