import { Box, Card, Paper, Typography, styled } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector } from "react-redux";
const Headers = () => {
	const { meals } = useSelector((state) => state.meals);
	return (
		<BoxContainer>
			<Typography color="white" variant="h3">
				Meals
			</Typography>
			<Box component="div">
				<CardMui>
					<PaperMui elevation={0}>
						<AddShoppingCartIcon color="error" />
					</PaperMui>
					<BoxMuiStyled>
						<Typography>Корзина</Typography>
						<MuiBoxAmount>
							<Typography>{+meals}</Typography>
						</MuiBoxAmount>
					</BoxMuiStyled>
				</CardMui>
			</Box>
		</BoxContainer>
	);
};

export default Headers;

const BoxContainer = styled(Box)`
	width: 100%;
	border: 1px solid black;
	padding: 1em;
	background-color: brown;
	display: flex;
	justify-content: space-between;
`;

const CardMui = styled(Card)(() => {
	return {
		width: 255,
		height: 60,
		marginRight: 20,
		borderRadius: 50,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: 8,
	};
});

const PaperMui = styled(Paper)(() => {
	return {
		width: 50,
		height: 50,
		border: "1px solid black",
		borderRadius: 100,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};
});
const BoxMuiStyled = styled(Box)(() => {
	return {
		width: "70%",
		height: 50,
		border: "1px solid black",
		borderRadius: 50,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
	};
});
const MuiBoxAmount = styled(Box)(() => {
	return {
		width: 40,
		height: 20,
		border: "1px solid black",
		borderRadius: 10,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};
});
