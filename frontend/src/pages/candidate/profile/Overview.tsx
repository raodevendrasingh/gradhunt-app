import { HiOutlineUser, HiOutlineBolt, HiOutlineBriefcase, HiOutlineFolderPlus  } from "react-icons/hi2";
import { PiGraduationCap } from "react-icons/pi";
import { GrCertificate } from "react-icons/gr";

export const Overview = () => {
	return (
		<div className="flex flex-col gap-2 w-full ">
			<div className=" flex flex-col pb-3 bg-zinc-100 rounded-b-lg">
				<span className="text-lg font-light pl-3 pt-2">About</span>
				<div className="flex flex-col justify-center items-center gap-3 py-5">
					<HiOutlineUser className="size-12 text-gray-300" />
					<p className="text-base font-medium text-gray-700">
						Write About Yourself
					</p>
					<span className="px-3 py-2 rounded-lg text-white bg-zinc-800 text-xs cursor-pointer">
						Add About
					</span>
				</div>
			</div>
			<div className="pb-3 bg-zinc-100 rounded-lg">
				<span className="text-lg font-light pl-3 pt-5">Skills</span>
				<div className="flex flex-col justify-center items-center gap-3 py-5">
					<HiOutlineBolt className="size-12 text-gray-300" />
					<p className="text-base font-medium text-gray-700">
						Highlight Your Skills
					</p>
					<span className="px-3 py-2 rounded-lg text-white bg-zinc-800 text-xs cursor-pointer">
						Add Skills
					</span>
				</div>
			</div>
			<div className="pb-3 bg-zinc-100 rounded-lg">
				<span className="text-lg font-light pl-3 pt-5">Projects</span>
				<div className="flex flex-col justify-center items-center gap-3 py-5">
					<HiOutlineFolderPlus className="size-12 text-gray-300" />
					<p className="text-base font-medium text-gray-700">
						Highlight Your Projects
					</p>
					<span className="px-3 py-2 rounded-lg text-white bg-zinc-800 text-xs cursor-pointer">
						Add Projects
					</span>
				</div>
			</div>
			<div className="pb-3 bg-zinc-100 rounded-lg">
				<span className="text-lg font-light pl-3 pt-5">Experience</span>
				<div className="flex flex-col justify-center items-center gap-3 py-5">
					<HiOutlineBriefcase className="size-12 text-gray-300" />
					<p className="text-base font-medium text-gray-700">
						Add Professional History
					</p>
					<span className="px-3 py-2 rounded-lg text-white bg-zinc-800 text-xs cursor-pointer">
						Add Experience
					</span>
				</div>
			</div>
			<div className="pb-3 bg-zinc-100 rounded-lg">
				<span className="text-lg font-light pl-3 pt-5">Education</span>
				<div className="flex flex-col justify-center items-center gap-3 py-5">
					<PiGraduationCap className="size-12 text-gray-300" />
					<p className="text-base font-medium text-gray-700">
						Add Education details
					</p>
					<span className="px-3 py-2 rounded-lg text-white bg-zinc-800 text-xs cursor-pointer">
						Add Education
					</span>
				</div>
			</div>
			<div className="pb-3 bg-zinc-100 rounded-lg">
				<span className="text-lg font-light pl-3 pt-5">Achievements</span>
				<div className="flex flex-col justify-center items-center gap-3 py-5">
					<GrCertificate className="size-12 text-gray-300" />
					<p className="text-base font-medium text-gray-700">
						Add your Achievements
					</p>
					<span className="px-3 py-2 rounded-lg text-white bg-zinc-800 text-xs cursor-pointer">
						Add Achievements
					</span>
				</div>
			</div>
		</div>
	);
};