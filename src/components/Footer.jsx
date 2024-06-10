import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				py: 3,
				px: 2,
				mt: "auto",
				backgroundColor: "darkblue",
				color: "white",
			}}>
			<Container maxWidth="lg">
				<Typography variant="h6" align="center" gutterBottom>
					Your Company
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="inherit"
					component="p">
					Making the web a better place to be.
				</Typography>
				
				<Typography
					variant="body2"
					color="inherit"
					align="center"
					sx={{ mt: 2 }}>
					{"© "}
					{new Date().getFullYear()}
					{" Your Company. All rights reserved."}
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;
