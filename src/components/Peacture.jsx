import { Box, styled } from "@mui/material";
import React from "react";
import nature from "../assets/img/nur.jpg"; // Убедитесь, что путь правильный и изображение доступно
import ModalList from "./ModalList";

const Peacture = () => {
	return (
		<div>
			<BoxMuiNature component="img" src={nature} alt="nature" />
			<ModalList />
		</div>
	);
};

export default Peacture;

const BoxMuiNature = styled(Box)(() => ({
	width: "100vw",
	height: "65vh",
	objectFit: "cover",
	objectPosition: "center",
	position: "relative",
}));
