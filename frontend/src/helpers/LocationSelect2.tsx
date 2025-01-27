import { useEffect, useState } from "react";
import Select, { SingleValue, MultiValue } from "react-select";
import { Controller } from "react-hook-form";
import { useCitySearch, CityOption } from "@/hooks/misc/useCitySearch";
import { LuMapPin } from "react-icons/lu";

type SelectValue<IsMulti extends boolean> = IsMulti extends true
	? MultiValue<CityOption>
	: SingleValue<CityOption>;

interface LocationSelectProps<IsMulti extends boolean> {
	control: any;
	name: string;
	placeholder?: string;
	rules?: any;
	error?: string;
	menuPlacement?: "auto" | "bottom" | "top";
	initialValue?: IsMulti extends true ? string[] : string;
	isMulti?: IsMulti;
	styles?: any;
}

export const citySelectStyles = {
	control: (provided: any, state: any) => ({
		...provided,
		width: "100%",
		padding: "0.125rem",
		paddingLeft: "2rem",
		fontSize: "0.875rem",
		backgroundColor: "#F9FAFB",
		border: state.isFocused ? "1px solid #6B7280" : "1px solid #D1D5DB",
		borderRadius: "0.5rem",
		boxShadow: "none",
		"&:hover": {
			border: "1px solid #6B7280",
		},
		transition: "all 200ms",
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
	menu: (provided: any) => ({
		...provided,
		backgroundColor: "white",
		border: "1px solid #E5E7EB",
		borderRadius: "0.5rem",
		boxShadow:
			"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
	}),
	singleValue: (provided: any) => ({
		...provided,
		fontSize: "0.875rem",
		color: "#1F2937",
	}),
	multiValue: (provided: any) => ({
		...provided,
		backgroundColor: "#E5E7EB",
		borderRadius: "0.25rem",
	}),
	multiValueLabel: (provided: any) => ({
		...provided,
		fontSize: "0.875rem",
		paddingLeft: "1rem",
		paddingRight: "0.5rem",
		color: "#1F2937",
	}),
	multiValueRemove: (provided: any) => ({
		...provided,
		color: "#6B7280",
		"&:hover": {
			backgroundColor: "#D1D5DB",
			borderRadius: "0.25rem",
			color: "#1F2937",
		},
	}),
	indicatorSeparator: () => ({
		display: "none",
	}),
};

export function LocationSelect<IsMulti extends boolean = false>({
	control,
	name,
	placeholder = "Location",
	rules,
	error,
	menuPlacement = "auto",
	initialValue,
	isMulti,
	styles = citySelectStyles,
}: LocationSelectProps<IsMulti>) {
	const { isLoading, cityOptions, handleInputChange, formatOptionLabel } =
		useCitySearch();

	const [selectedOption, setSelectedOption] = useState<SelectValue<IsMulti>>(
		null as any
	);

	useEffect(() => {
		if (initialValue && !selectedOption) {
			if (isMulti && Array.isArray(initialValue)) {
				const multiValue = initialValue.map((value) => {
					const [cityVal, stateVal, countryVal] = value
						.split(",")
						.map((s) => s.trim());
					return {
						city: cityVal,
						state: stateVal,
						country: countryVal,
						value: value,
						label: value,
					};
				});
				setSelectedOption(
					multiValue as unknown as SelectValue<IsMulti>
				);
			} else if (!isMulti && typeof initialValue === "string") {
				const [cityVal, stateVal, countryVal] = initialValue
					.split(",")
					.map((s) => s.trim());
				setSelectedOption({
					city: cityVal,
					state: stateVal,
					country: countryVal,
					value: initialValue,
					label: initialValue,
				} as SelectValue<IsMulti>);
			}
		}
	}, [initialValue, selectedOption, isMulti]);

	return (
		<div className="w-full flex flex-col">
			<div className="relative">
				<div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none z-10">
					<LuMapPin size={20} />
				</div>
				<Controller
					name={name}
					control={control}
					rules={rules}
					render={({ field }) => (
						<div className="flex flex-col">
							<Select<CityOption, IsMulti>
								{...field}
								value={selectedOption}
								onChange={(newValue) => {
									setSelectedOption(
										newValue as SelectValue<IsMulti>
									);
									if (isMulti) {
										field.onChange(
											(
												newValue as MultiValue<CityOption>
											)?.map((item) => item.value)
										);
									} else {
										field.onChange(
											(
												newValue as SingleValue<CityOption>
											)?.value
										);
									}
								}}
								isMulti={isMulti}
								isClearable
								isSearchable
								isLoading={isLoading}
								onInputChange={handleInputChange}
								options={cityOptions}
								formatOptionLabel={formatOptionLabel}
								placeholder={placeholder}
								styles={{
									...styles,
									control: (base, state) => ({
										...styles.control?.(base, state),
										...(error && {
											border: "1px solid #EF4444", // border-red-500
											"&:hover": {
												border: "1px solid #EF4444", // border-red-500
											},
											boxShadow: "0 0 0 1px #FEE2E2", // focus:ring-red-100
											"&:focus-within": {
												border: "1px solid #EF4444", // focus:border-red-500
												boxShadow: "0 0 0 1px #FEE2E2", // focus:ring-red-100
											},
										}),
									}),
								}}
								className={error ? "select-error" : ""}
								menuPlacement={menuPlacement}
								noOptionsMessage={({ inputValue }) =>
									inputValue.length < 2
										? "Type to search"
										: "No cities found"
								}
							/>
						</div>
					)}
				/>
			</div>
			{error && (
				<span className="text-red-500 text-sm mt-1" role="alert">
					{error}
				</span>
			)}
		</div>
	);
}
