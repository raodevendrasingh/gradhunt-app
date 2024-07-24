// Hooks
import { useEffect, useState } from "react";
import { useCitySearch } from "@/hooks/useCitySearch";

// Third-party libraries
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { toast } from "sonner";
import axios from "axios";

// Icons
import { HiOutlineXMark, HiOutlinePlus } from "react-icons/hi2";

// Local imports
import {
	employmentType,
	locationType,
	jobTitleOptions,
	monthOptions,
	startYearOptions,
	endYearOptions,
} from "@/utils/selectObjects";
import { selectCompanyFieldStyle } from "@/utils/styles";
import { useStore } from "@/store/userStore";

export const ExperienceModal = () => {
	const [showModal, setShowModal] = useState(false);
	const [isCurrWorking, setIsCurrWorking] = useState(false);
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const {
		isLoading,
		error,
		cityOptions,
		handleInputChange,
		formatOptionLabel,
		handleSelection,
	} = useCitySearch();
	
    // add check to validate the dates

	const { userName, setUserName } = useStore((state) => ({
		userName: state.userName,
		setUserName: state.setUserName,
	}));

	useEffect(() => {
		if (!userName) {
			const storedUserName = localStorage.getItem("userName");
			if (storedUserName) {
				setUserName(storedUserName);
			}
		}
	}, [userName, setUserName]);

	const onSubmit = async (data) => {
		const experienceData = {
			companyName: data.companyName,
			jobTitle: data.jobTitle,
			jobType: data.jobType,
			startMonth: data.startMonth,
			startYear: data.startYear,
			endMonth: data.endMonth || "N/A",
			endYear: data.endYear || "N/A",
			jobLocation: data.jobLocation || "N/A",
			locationType: data.locationType,
			about: data.about,
		};

		console.log(experienceData);

		axios({
			url: `http://localhost:8000/api/recruiter/${userName}/update-experience-data`,
			method: "POST",
			data: experienceData,
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				console.log(response.data);
				toast.success("Recruiter Experience Added");
				setShowModal(false);
			})
			.catch((error) => {
				toast.error("Error occured while adding experience. Try again!");
				if (error.response) {
					console.log("Error Status: ", error.response.status);
					console.log("Error Message: ", error.message);
					// console.log("Error Response: ", error.response.request.response);
				} else if (error.request) {
					console.log("Error Request: ", error.request);
				} else {
					console.log("Error Message: ", error.message);
				}
			});
	};

	return (
		<>
			<button type="button" onClick={() => setShowModal(true)}>
				<HiOutlinePlus className="size-9 hover:bg-gray-100 rounded-full p-2" />
			</button>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none scrollbar scrollbar-track-transparent">
						<div className="relative my-6 mx-10 sm:mx-auto  w-full min-w-[350px] sm:min-w-[500px] sm:max-w-lg md:max-w-2xl">
							{/*content*/}
							<div className="border-0 p-3 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none max-h-[90vh] overflow-hidden">
								{/*header*/}
								<div className="flex items-start justify-between ml-1 rounded-t">
									<h3 className="text-xl font-bold text-gray-800 mt-1">Add Experience</h3>
									<button
										className="pb-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent text-gray-800">
											<HiOutlineXMark className="size-10 hover:bg-gray-100 rounded-full p-2"/>
										</span>
									</button>
								</div>

								{/*body*/}
								<div className="p-6 overflow-y-auto h-[calc(90vh - 160px)] border rounded-xl">
									<div className="flex flex-col gap-3">
										<form
											id="experienceDataForm"
											onSubmit={handleSubmit(onSubmit)}
										>
											{/* section */}
											<div className="flex flex-col-reverse sm:flex-row items-center gap-3 border-b pb-6 mb-1">
												<div className="flex flex-col w-full">
													{/* company name */}
													<div className="w-full flex flex-col h-20 relative">
														<label
															htmlFor="companyName"
															className="text-sm pb-1"
														>
															Company Name
														</label>
														<input
															{...register("companyName", {
																required: "Company name is required",
																minLength: {
																	value: 2,
																	message:
																		"Company name shoud be alteast 2 characters",
																},
																maxLength: 50,
															})}
															aria-invalid={
																errors.companyName ? "true" : "false"
															}
															type="text"
															name="companyName"
															id="companyName"
															placeholder="Company Name"
															className="border-2 px-2 py-1.5 rounded-lg border-gray-400 focus:border-blue-500"
														/>
														{errors.companyName && (
															<span className="form-error" role="alert">
																{errors.companyName.message}
															</span>
														)}
													</div>
													{/* job title and type */}
													<div className="flex flex-col sm:flex-row gap-2">
														<div className="w-full sm:w-1/2 flex flex-col h-20 relative">
															<label
																htmlFor="jobTitle"
																className="text-sm pb-1 pt-2"
															>
																Title
															</label>
															<Controller
																name="jobTitle"
																id="jobTitle"
																control={control}
																rules={{
																	required: "Job Title is required",
																}}
																render={({ field }) => (
																	<Select
																		{...field}
																		options={jobTitleOptions}
																		placeholder="Job Title"
																		styles={selectCompanyFieldStyle}
																	/>
																)}
															/>
															{errors.jobTitle && (
																<span className="form-error" role="alert">
																	{errors.jobTitle.message}
																</span>
															)}
														</div>
														<div className="w-full sm:w-1/2 flex flex-col h-20 relative">
															<label
																htmlFor="jobType"
																className="text-sm pb-1 pt-2"
															>
																Employment Type
															</label>
															<Controller
																name="jobType"
																id="jobType"
																control={control}
																rules={{
																	required: "Job Type is required",
																}}
																render={({ field }) => (
																	<Select
																		{...field}
																		options={employmentType}
																		placeholder="Job Type"
																		styles={selectCompanyFieldStyle}
																	/>
																)}
															/>
															{errors.jobType && (
																<span className="form-error" role="alert">
																	{errors.jobType.message}
																</span>
															)}
														</div>
													</div>
												</div>
											</div>

											<div className="flex flex-col w-full gap-2 border-b pb-3 mb-1 mt-4">
												<div className="w-full flex items-center gap-2 relative">
													<input
														type="checkbox"
														name="currentJob"
														id="currentJob"
														className="rounded size-5 focus:ring-[1px] focus:ring-blue-700 ml-1"
														onClick={() => {
															setIsCurrWorking(!isCurrWorking);
														}}
													/>
													<label
														htmlFor="currentJob"
														className="text-sm font-light select-none"
													>
														I&apos;m Currently working on this role
													</label>
												</div>
												<div className="flex flex-col gap-1">
													<span htmlFor="startMonth" className="text-sm pt-2">
														Start Date
													</span>
													<div className="flex flex-col sm:flex-row gap-2">
														<div className="w-full sm:w-1/2 flex flex-col">
															<Controller
																name="startMonth"
																id="startMonth"
																control={control}
																rules={{
																	required: "Start Month is required",
																}}
																render={({ field }) => (
																	<Select
																		{...field}
																		options={monthOptions}
																		placeholder="Start Month"
																		styles={selectCompanyFieldStyle}
																	/>
																)}
															/>
															{errors.startMonth && (
																<span className="form-error" role="alert">
																	{errors.startMonth.message}
																</span>
															)}
														</div>
														<div className="w-full sm:w-1/2 flex flex-col">
															<Controller
																name="startYear"
																id="startYear"
																control={control}
																rules={{
																	required: "Start Year is required",
																}}
																render={({ field }) => (
																	<Select
																		{...field}
																		options={startYearOptions}
																		placeholder="Start Year"
																		styles={selectCompanyFieldStyle}
																	/>
																)}
															/>
															{errors.startYear && (
																<span className="form-error" role="alert">
																	{errors.startYear.message}
																</span>
															)}
														</div>
													</div>
												</div>
												{!isCurrWorking && (
													<div className="flex flex-col gap-1">
														<span htmlFor="startMonth" className="text-sm pt-2">
															End Date
														</span>
														<div className="flex flex-col sm:flex-row gap-2">
															<div className="w-full sm:w-1/2 flex flex-col">
																<Controller
																	name="endMonth"
																	id="endMonth"
																	control={control}
																	rules={{
																		required: "End Month is required",
																	}}
																	render={({ field }) => (
																		<Select
																			{...field}
																			options={monthOptions}
																			placeholder="End Month"
																			styles={selectCompanyFieldStyle}
																		/>
																	)}
																/>
																{errors.endMonth && (
																	<span className="form-error" role="alert">
																		{errors.endMonth.message}
																	</span>
																)}
															</div>
															<div className="w-full sm:w-1/2 flex flex-col">
																<Controller
																	name="endYear"
																	id="endYear"
																	control={control}
																	rules={{
																		required: "End Year is required",
																	}}
																	render={({ field }) => (
																		<Select
																			{...field}
																			options={endYearOptions}
																			placeholder="End Year"
																			styles={selectCompanyFieldStyle}
																		/>
																	)}
																/>
																{errors.endYear && (
																	<span className="form-error" role="alert">
																		{errors.endYear.message}
																	</span>
																)}
															</div>
														</div>
													</div>
												)}
											</div>

											{/* company location and job type */}
											<div className="flex flex-col sm:flex-row w-full gap-2 border-b pb-6 mb-1 ">
												<div className="w-full sm:w-1/2 flex flex-col h-20 relative">
													<label
														htmlFor="jobLocation"
														className="text-sm pb-1 pt-2"
													>
														Location
													</label>
													<Controller
														name="jobLocation"
														control={control}
														rules={{ required: "Job Location is required" }}
														render={({ field }) => (
															<Select
																{...field}
																isClearable
																isSearchable
																isLoading={isLoading}
																onInputChange={handleInputChange}
																onChange={(option) =>
																	handleSelection(option, field.onChange)
																}
																options={cityOptions}
																formatOptionLabel={formatOptionLabel}
																id="headquarter"
																placeholder="Job Location"
																styles={selectCompanyFieldStyle}
																classNamePrefix="select"
																noOptionsMessage={({ inputValue }) =>
																	inputValue.length < 2
																		? "Type at least 2 characters to search"
																		: error
																			? error
																			: "No cities found"
																}
															/>
														)}
													/>
													{errors.jobLocation && (
														<span className="form-error" role="alert">
															{errors.jobLocation.message}
														</span>
													)}
												</div>
												<div className="w-full sm:w-1/2 flex flex-col h-20 relative">
													<label
														htmlFor="locationType"
														className="text-sm pb-1 pt-2"
													>
														Location Type
													</label>
													<Controller
														name="locationType"
														id="locationType"
														control={control}
														rules={{
															required: "Location Type is required",
														}}
														render={({ field }) => (
															<Select
																{...field}
																options={locationType}
																placeholder="Location Type"
																styles={selectCompanyFieldStyle}
															/>
														)}
													/>
													{errors.locationType && (
														<span className="form-error" role="alert">
															{errors.locationType.message}
														</span>
													)}
												</div>
											</div>
											{/* about section */}
											<div>
												<div className="flex flex-col w-full relative">
													<label htmlFor="about" className="text-sm pb-1 pt-2">
														Description{" "}
														<span className="text-sm font-light text-gray-500">
															(Optional)
														</span>
													</label>
													<textarea
														{...register("about", {
															minLength: {
																value: 10,
																message: "Minimum 10 characters are required",
															},
															maxLength: {
																value: 200,
																message:
																	"Description should not exceed 1500 characters",
															},
														})}
														name="about"
														id="about"
														placeholder="Share your experience"
														rows="3"
														className="w-full px-2 py-1.5 border-2 rounded-lg border-gray-400 focus:border-blue-500"
													></textarea>
													{errors.about && (
														<span className="form-error" role="alert">
															{errors.about.message}
														</span>
													)}
												</div>
											</div>
										</form>
									</div>
								</div>
								{/*footer*/}
                                <div className="flex items-center justify-end mt-3 rounded-b">
									<button
										className="bg-green-600 text-white active:bg-green-700 font-semibold border rounded-[10px] text-sm px-4 py-2 shadow hover:shadow-xl outline-none focus:outline-none ease-linear transition-all duration-150"
										type="submit"
										form="experienceDataForm"
									>
										Save
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
};
