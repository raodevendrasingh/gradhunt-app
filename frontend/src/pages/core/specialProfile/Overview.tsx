import {
	HiOutlineUser,
	HiOutlineBolt,
	HiOutlineBriefcase,
	HiOutlineFolderPlus,
} from "react-icons/hi2";
import { PiGraduationCap } from "react-icons/pi";
import { GrCertificate } from "react-icons/gr";
import { useState } from "react";
import { AddEduModal } from "@/modalForms/AddEduModal";
import { AddExpModal } from "@/modalForms/AddExpModal";
import { UserAboutModal } from "@/modalForms/UserDescriptionModal";
import { AddProjectModal } from "@/modalForms/AddProjectModal";
import { AddCertificateModal } from "@/modalForms/AddCertificateModal";
import { AddSkillModal } from "@/modalForms/AddSkillModal";

export const Overview = () => {
	const [refresh, setRefresh] = useState(false);

	const handleRefresh = () => {
		setRefresh(!refresh);
	};

	const [showEduModal, setShowEduModal] = useState<boolean>(false);
	const [showSkillModal, setShowSkillModal] = useState<boolean>(false);
	const [showExpModal, setShowExpModal] = useState<boolean>(false);
	const [showAboutModal, setAboutModal] = useState<boolean>(false);
	const [showProjectModal, setShowProjectModal] = useState<boolean>(false);
	const [showCertifyModal, setShowCertifyModal] = useState<boolean>(false);

	return (
		<div className="flex flex-col gap-2 w-full ">
			<div className=" flex flex-col pb-3 bg-gray-50 border rounded-lg">
				<span className="text-lg font-light pl-3 pt-2">About</span>
				<div className="flex flex-col justify-center items-center gap-3 py-5">
					<HiOutlineUser className="size-12 text-gray-400" />
					<p className="text-base font-medium text-gray-700">
						Write About Yourself
					</p>
					<button
						type="button"
						onClick={() => setAboutModal(true)}
						className="px-3 py-2 rounded-lg text-white bg-slate-800 text-xs cursor-pointer"
					>
						Add About
					</button>
					{showAboutModal && (
						<UserAboutModal setAboutModal={setAboutModal} onSave={handleRefresh} />
					)}
				</div>
			</div>
			<div className="flex flex-col pb-3 bg-gray-50 border rounded-lg">
				<span className=" flex flex-col text-lg font-light pl-3 pt-2">
					Skills
				</span>
				<div className="flex flex-col justify-center items-center gap-3 py-5">
					<HiOutlineBolt className="size-12 text-gray-400" />
					<p className="text-base font-medium text-gray-700">
						Highlight Your Skills
					</p>
					<button
						type="button"
						onClick={() => setShowSkillModal(true)}
						className="px-3 py-2 rounded-lg text-white bg-slate-800 text-xs cursor-pointer"
					>
						Add Skills
					</button>
					{showSkillModal && (
						<AddSkillModal setShowSkillModal={setShowSkillModal} onSave={handleRefresh} />
					)}
				</div>
			</div>
			<div className="flex flex-col pb-3 bg-gray-50 border rounded-lg">
				<span className=" flex flex-col text-lg font-light pl-3 pt-2">
					Projects
				</span>
				<div className="flex flex-col justify-center items-center gap-3 py-5">
					<HiOutlineFolderPlus className="size-12 text-gray-400" />
					<p className="text-base font-medium text-gray-700">
						Highlight Your Projects
					</p>
                    <button
						type="button"
						onClick={() => setShowProjectModal(true)}
						className="px-3 py-2 rounded-lg text-white bg-slate-800 text-xs cursor-pointer"
					>
						Add Projects
					</button>
					{showProjectModal && (
						<AddProjectModal
							setShowProjectModal={setShowProjectModal}
							onSave={handleRefresh}
						/>
					)}
				</div>
			</div>
			<div className="flex flex-col pb-3 bg-gray-50 border rounded-lg">
				<span className=" flex flex-col text-lg font-light pl-3 pt-2">
					Experience
				</span>
				<div className="flex flex-col justify-center items-center gap-3 py-5">
					<HiOutlineBriefcase className="size-12 text-gray-400" />
					<p className="text-base font-medium text-gray-700">
						Add Professional History
					</p>
					<button
						type="button"
						onClick={() => setShowExpModal(true)}
						className="px-3 py-2 rounded-lg text-white bg-slate-800 text-xs cursor-pointer"
					>
						Add Experience
					</button>
					{showExpModal && (
						<AddExpModal
							setShowExpModal={setShowExpModal}
							onSave={handleRefresh}
						/>
					)}
				</div>
			</div>
			<div className="flex flex-col pb-3 bg-gray-50 border rounded-lg">
				<span className=" flex flex-col text-lg font-light pl-3 pt-2">
					Education
				</span>
				<div className="flex flex-col justify-center items-center gap-3 py-5">
					<PiGraduationCap className="size-12 text-gray-400" />
					<p className="text-base font-medium text-gray-700">
						Add Education details
					</p>
					<button
						type="button"
						onClick={() => setShowEduModal(true)}
						className="px-3 py-2 rounded-lg text-white bg-slate-800 text-xs cursor-pointer"
					>
						Add Education
					</button>
					{showEduModal && (
						<AddEduModal
							setShowEduModal={setShowEduModal}
							onSave={handleRefresh}
						/>
					)}
				</div>
			</div>
			<div className="flex flex-col pb-3 bg-gray-50 border rounded-lg">
				<span className=" flex flex-col text-lg fonshowAchieveModalt-light pl-3 pt-2">
					Certifications
				</span>
				<div className="flex flex-col justify-center items-center gap-3 py-5">
					<GrCertificate className="size-12 text-gray-400" />
					<p className="text-base font-medium text-gray-700">
						Add your Certifications
					</p>
					<button
						type="button"
						onClick={() => setShowCertifyModal(true)}
						className="px-3 py-2 rounded-lg text-white bg-slate-800 text-xs cursor-pointer"
					>
						Add Certifications
					</button>
					{showCertifyModal && (
						<AddCertificateModal
							setShowCertifyModal={setShowCertifyModal}
							onSave={handleRefresh}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
