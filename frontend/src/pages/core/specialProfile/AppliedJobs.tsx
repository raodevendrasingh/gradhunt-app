import { HiOutlineDocumentDuplicate } from "react-icons/hi2";

export const AppliedJobs = () => {
	return (
		<div className="flex flex-col gap-3 w-full h-[80vh]">
			<div className="flex-grow pb-3 bg-gray-50 border rounded-lg">
				<div className="flex flex-col justify-center items-center gap-5 h-full">
					<HiOutlineDocumentDuplicate className="size-12 text-gray-400" />
					<p className="text-base font-medium text-gray-700">
						No Job Applications Yet
					</p>
					<span className="px-3 py-2 rounded-lg text-white bg-slate-800 text-xs cursor-pointer">
						Search Jobs
					</span>
				</div>
			</div>
		</div>
	);
};
