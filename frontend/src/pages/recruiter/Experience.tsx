/* eslint-disable react-hooks/exhaustive-deps */
import { FiPlus } from "react-icons/fi";
import { MdOutlineEdit } from "react-icons/md";

// assets
import CompanyLogo from "@/assets/avatar/emptyLogo.png";
import { AddExperienceModal } from "./modalForms/AddExperienceModal";
import { EditExperienceModal } from "./modalForms/EditExperienceModal";
import { FetchExperienceData } from "./utils/FetchExperienceData";
import { useState } from "react";

export const Experience = () => {
    const [refresh, setRefresh] = useState(false);
    
    const handleRefresh = () => {
        setRefresh(!refresh);
    };
    
    const { experienceData, isExperienceData } = FetchExperienceData({ refresh });

	return (
		<div className="w-full pt-20 mx-auto">
			<div className="max-w-7xl mx-auto lg:ml-64">
				<div className="max-w-5xl mx-auto flex flex-col mb-3 gap-3 px-3">
					<section className="bg-white px-2 p-2 border rounded-xl shadow">
						<div className="flex justify-between items-center">
							<span className="font-semibold text-lg pl-1 text-gray-800">
								Experience
							</span>
							<div className="flex gap-2 mb-1">
								<AddExperienceModal />
							</div>
						</div>
						{/* fetch experience data */}
						{isExperienceData && experienceData.length > 0 && (
							<div className="flex flex-col gap-3">
								{experienceData.map((data, index) => (
									<div
										key={data.id}
										className="w-full flex items-start gap-3 border border-gray-50 bg-gray-100 p-3 pt-1 rounded-xl"
									>
										<div className="w-full">
											<div className="flex items-center justify-between">
												<span className="text-xl font-semibold text-gray-800">
													{data.companyName}
												</span>

												<EditExperienceModal experienceId={data.id} onSave={handleRefresh} />
											</div>
											<div className="flex items-center gap-2">
												<span className="text-sm font-medium text-gray-800">
													{data.jobTitle}
												</span>

												<div className="flex gap-2 text-xs text-gray-700">
                                                    <span className="px-1.5 py-0.5 bg-gray-300/70 rounded-full">{data.jobType}</span>
                                                    <span className="px-1.5 py-0.5 bg-gray-300/70 rounded-full">{data.locationType}</span>
													</div>
											</div>
											<div className="text-xs text-gray-600">
												{data.startMonth} {data.startYear} - {!data.isCurrentlyWorking ? `${data.endMonth} ${data.endYear}` : "Present"}
                                            </div>

											{data.locationType === "Remote" ? (
												""
											) : (
												<div className="text-xs text-gray-600">
													{data.jobLocation}
												</div>
											)}

											{data.description && (
												<div className="text-sm mt-2 text-gray-800">
													<p>{data.description}</p>
												</div>
											)}
										</div>
									</div>
								))}
							</div>
						)}
					</section>
				</div>
			</div>
		</div>
	);
};