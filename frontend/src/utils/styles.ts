export const selectFieldStyle2 = {
	control: (provided: any) => ({
		...provided,
		width: "100%",
		minHeight: "38px",
		borderRadius: "0.375rem",
		border: "1px solid #E5E7EB",
		backgroundColor: "#FFFFFF",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		color: "#4B5563",
		outline: "none",
		boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
		"&:hover": {
			borderColor: "#E5E7EB",
		},
		"&:focus": {
			borderColor: "#E5E7EB",
			boxShadow: "none",
			outline: "none",
		},
	}),
	option: (provided: any) => ({
		...provided,
		fontSize: "0.8rem",
	}),
};

export const selectCompanyFieldStyle = {
	control: (provided: any) => ({
		...provided,
		width: "100%",
		padding: "0px 2px",
		minHeight: "38px",
		borderRadius: "0.5rem",
		backgroundColor: "#FFFFFF",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		color: "#4B5563",
		border: "1px solid #E5E7EB",
		boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.05)",
		"&:focus": {
			borderColor: "#1E293B",
			boxShadow: "none",
			outline: "none",
		},
	}),
	option: (provided: any) => ({
		...provided,
		fontSize: "0.8rem",
		boxShadow: "none",
	}),
	indicatorSeparator: () => ({
		display: "none",
	}),
};

export const selectFieldStyle = {
	control: (provided: any) => ({
		...provided,
		width: "100%",
		padding: "0.14rem",
		borderRadius: "0.375rem",
		backgroundColor: "#FFFFFF",
		fontSize: "1rem",
		lineHeight: "1.25rem",
		color: "#4B5563",
		border: "1px solid #E5E7EB",
		boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.05)",
		"&:hover": {
			border: "1px solid #E5E7EB",
		},
		"&:focus": {
			border: "1px solid #1E293B",
			boxShadow: "none",
			outline: "none",
			ring: "0",
			ringOffset: "0",
			ringColor: "transparent",
		},
	}),
	option: (
		provided: any,
		state: { isSelected: boolean; isFocused: boolean }
	) => ({
		...provided,
		width: "98%",
		alignContent: "center",
		fontSize: "0.8rem",
		boxShadow: "none",
		borderRadius: "0.225rem",
		margin: "4px auto",
		backgroundColor: state.isSelected && "#F1F5F9",
		color: state.isSelected && "#1F2937",
		"&:hover": {
			backgroundColor: "#F1F5F9",
		},
	}),
	menu: (provided: any) => ({
		...provided,
		"&::-webkit-scrollbar": {
			display: "none",
		},
		"&::-moz-scrollbar": {
			display: "none",
		},
	}),
	indicatorSeparator: () => ({
		display: "none",
	}),
};

export const inputSearchFieldStyle = {
	control: (provided: any) => ({
		...provided,
		width: "100%",
		minHeight: "38px",
		border: "none",
		boxShadow: "none",
		"&:hover": {
			border: "none",
		},
	}),
	valueContainer: (provided: any) => ({
		...provided,
		padding: "0 8px",
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
	}),
	input: (provided: any) => ({
		...provided,
		margin: "0",
		padding: "0",
	}),
	placeholder: (provided: any) => ({
		...provided,
		color: "#9CA3AF",
	}),
	singleValue: (provided: any) => ({
		...provided,
		color: "#1F2937",
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
	}),
	option: (provided: any, state: any) => ({
		...provided,
		width: "99%",
		alignContent: "center",
		borderRadius: "0.225rem",
		margin: "2px auto",
		backgroundColor: state.isSelected ? "#E5E7EB" : "white",
		color: "#1F2937",
		"&:hover": {
			backgroundColor: "#F3F4F6",
		},
		fontSize: "0.875rem",
		padding: "0.5rem",
	}),
	indicatorSeparator: () => ({
		display: "none",
	}),
	dropdownIndicator: (provided: any) => ({
		...provided,
		padding: "0 8px",
	}),
};

export const skillSearchFieldStyle = {
	control: (provided: any) => ({
		...provided,
		width: "100%",
		minHeight: "38px",
		border: "none",
		boxShadow: "none",
		"&:hover": {
			border: "none",
		},
	}),
	valueContainer: (provided: any) => ({
		...provided,
		padding: "0 8px",
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
	}),
	input: (provided: any) => ({
		...provided,
		margin: "0",
		padding: "0",
	}),
	placeholder: (provided: any) => ({
		...provided,
		color: "#9CA3AF",
	}),
	singleValue: (provided: any) => ({
		...provided,
		color: "#1F2937",
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
	}),
	option: (provided: any, state: { isSelected: any; isFocused: any }) => ({
		...provided,
		backgroundColor: state.isSelected
			? "#2563EB"
			: state.isFocused
				? "#BFDBFE"
				: "white",
		color: state.isSelected ? "white" : "#1F2937",
		"&:active": {
			backgroundColor: "#2563EB",
			color: "white",
		},
		fontSize: "12px",
	}),
	indicatorSeparator: () => ({
		display: "none",
	}),
	dropdownIndicator: (provided: any) => ({
		...provided,
		padding: "0 8px",
	}),
	menu: (provided: any) => ({
		...provided,
		zIndex: 2,
	}),
};
