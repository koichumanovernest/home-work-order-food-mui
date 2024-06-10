import {
	Box,
	Button,
	ListItem,
	ListItemText,
	TextField,
	Typography,
	styled,
} from "@mui/material";
import { MEALS } from "../utils/constants/mealsData";
import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/slice/mealsSlice";

const ModalList = () => {
	const dispatch = useDispatch();

	return (
		<ContainerBoxMui>
			{MEALS.map((item) => (
				<MuiListItem key={item.id} button>
					<BoxTitleAndPrice>
						<ListItemText sx={{ color: "orange" }} primary={item.name} />
						<ListItemText primary={item.title} />
						<ListItemText primary={`$.${item.price}`} />
					</BoxTitleAndPrice>
					<BoxButtonTextFeild>
						<MuiTextField
							inputProps={{ max: 5, min: 0 }}
							type="number"
							variant="outlined"
						/>
						<Button onClick={() => dispatch(add())}>ADD</Button>
					</BoxButtonTextFeild>
				</MuiListItem>
			))}
		</ContainerBoxMui>
	);
};

export default ModalList;
const ContainerBoxMui = styled(Box)(() => {
	return {
		width: "40em",
		height: "25em",
		border: "1px solid black",
		position: "absolute",
		top: "30%",
		left: "26%",
		backgroundColor: "white",
		borderRadius: 10,
		border: "none",
		padding: 20,
		overflow: "hidden",
		overflow: "scroll",
	};
});
const MuiTextField = styled(TextField)(() => ({
	"& .MuiInputBase-root": {
		height: 25,
	},
}));
const MuiListItem = styled(ListItem)(() => {
	return {
		display: "flex",
		justifyContent: "space-between",
	};
});
const BoxButtonTextFeild = styled(Box)(() => {
	return {
		width: 150,
		float: "right",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
	};
});
const BoxTitleAndPrice = styled(Box)(() => {
	return {
		display: "flex",
		flexDirection: "column",
		justifyContent: "start",
		alignItems: "start",
	};
});
