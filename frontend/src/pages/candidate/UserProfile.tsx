import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";

import { MdLocationPin } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa6";
import { HiMiniLanguage, HiShare } from "react-icons/hi2";
import { HiLockClosed } from "react-icons/hi";
import { PiConfettiFill } from "react-icons/pi";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import { Chip } from "./components/ui/Chips";

import { Overview } from "./profile/Overview";
import { AppliedJobs } from "./profile/AppliedJobs";
import { SavedJobs } from "./profile/SavedJobs";
import { Analytics } from "./profile/Analytics";
import { Posts } from "./profile/Posts";

// assets
import noUser from "@/assets/avatar/noUser.png";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CardStack } from "./components/ui/CardStack";

const tabsData = [
	{
		title: "OverView",
		content: <Overview />,
	},
	{
		title: "Jobs Applied",
		content: <AppliedJobs />,
	},
	{
		title: "Saved Jobs",
		content: <SavedJobs />,
	},
	{
		title: "Posts",
		content: <Posts />,
	},
	{
		title: "Analytics",
		content: <Analytics />,
	},
];

export default function UserProfile(): JSX.Element {
	const [selected, setSelected] = useState(0);
	const [isDisabled, setIsDisabled] = useState(true);
	const { isSignedIn, user } = useUser();

	return (
		<div className="flex lg:max-w-6xl mx-auto pt-16">
			<div className=" h-[150vh] p-2 w-full ">
				{/* header*/}
				<div className=" bg-green-100 flex flex-col sm:flex-row justify-center items-center gap-1 mb-2 mx-auto py-8 sm:px-10 rounded-t-2xl">
					{/* profile pic  */}
					<div className="w-full sm:w-[25%] flex justify-center items-center b">
						<div className="size-40 flex flex-col mx-2 mb-2 justify-center items-center rounded-full">
							<div className="relative flex justify-center items-center size-36 sm:size-[175px]">
								{/* progress bar */}
								<CircularProgressbar
									value={30}
									strokeWidth={4}
									styles={buildStyles({
										pathColor: "#2bb550",
										trailColor: "#d6d6d6",
										strokeLinecap: "round",
									})}
								/>
								{/* profile picture */}
								<img
									src={noUser}
									className="absolute size-32 sm:size-40 rounded-full object-cover"
									alt="User"
								/>
								{/* completion percentage */}
								<div className="absolute bottom-4 mb-[-20px] flex justify-center items-center w-10 h-5 bg-gray-400 text-slate-800 rounded-full">
									<span className="text-xs text-white font-semibold">30%</span>
								</div>
							</div>
						</div>
					</div>
					{/* user details */}
					<div className=" flex flex-col md:flex-row w-full sm:w-[75%] px-5">
						<div className=" flex flex-col px-5 py-5 gap-3 w-full flex-grow justify-center items-center sm:justify-center sm:items-start">
							{/* name and country */}
							<div className="leading-3">
								<div className="flex gap-2 items-center justify-center">
									<span className="text-4xl font-medium pb-1">
										Kahono Fuzushiki
									</span>
								</div>
								<div>
									<span className="text-xs">@kahono</span>
								</div>
							</div>

							{/* bio */}
							<div className="text-base">
								Recent Grad | Looking for Opportunities
							</div>
							<div className="flex gap-2 text-xs">
								<span className="flex gap-1 items-center">
									<FaUserCheck />
									Joined July 2024
								</span>
								<span className="flex gap-1 items-center">
									<MdLocationPin />
									Osaka, Osaka, Japan
								</span>
							</div>
							{/* social Links */}

							<div className="flex items-center gap-2">
								<div className="flex gap-1 items-center text-sm text-gray-800">
									<HiMiniLanguage />
									Speaks
								</div>
								<div className="flex gap-1 text-xs">
									<span className="px-2 py-1 rounded-md bg-gray-300">
										Hindi
									</span>
									<span className="px-2 py-1 rounded-md bg-gray-300">
										English
									</span>
									<span className="px-2 py-1 rounded-md bg-gray-300">
										Japanese
									</span>
								</div>
							</div>
						</div>
						{/* social icons */}
						<div className=" w-full md:w-[20%] flex-col ">
							<div className="flex w-full justify-center flex-row md:flex-col items-center gap-2">
								<span className="p-2 rounded-full border border-zinc-800 hover:text-zinc-100 hover:bg-zinc-800 transition-colors cursor-pointer ">
									<FaLinkedinIn className="size-4" />
								</span>
								<span className="p-2 rounded-full border border-zinc-800 hover:text-zinc-100 hover:bg-zinc-800 transition-colors cursor-pointer ">
									<FaGithub className="size-4" />
								</span>
								<span className="p-2 rounded-full border border-zinc-800 hover:text-zinc-100 hover:bg-zinc-800 transition-colors cursor-pointer ">
									<SiLeetcode className="size-4" />
								</span>
								<span className="p-2 rounded-full border border-zinc-800 hover:text-zinc-100 hover:bg-zinc-800 transition-colors cursor-pointer ">
									<FaXTwitter className="size-4" />
								</span>
								{/* <span className="flex justify-center items-center gap-2 px-2 py-1.5 border rounded-full hover:bg-gray-700 bg-zinc-800 text-gray-100 transition-colors cursor-pointer">
									<HiShare className="size-[14px]" />
									<span className="text-sm">Share</span>
								</span> */}
							</div>
						</div>
					</div>
				</div>
				{/* Tabs section */}
				<div className="sticky top-[64px] px-4 py-3 bg-sky-100 flex items-center flex-wrap gap-2 z-10">
					{tabsData.map((tab, idx) => (
						<Chip
							key={idx}
							index={idx}
							text={tab.title}
							selected={selected === idx}
							setSelected={setSelected}
						/>
					))}
				</div>

				{/* content */}
				<div className="flex h-full mt-2">
					<div className="w-full md:w-[75%]">
						<div>{tabsData[selected].content}</div>
					</div>
					{/* sidebar */}
					<div className="sticky top-28 ml-2 max-h-72 hidden md:block w-[25%]">
						<div className=" flex flex-col gap-2">
							{/* <div className="h-28 bg-purple-200 ">Contacts</div> */}
							{/*  container */}
							<div className="flex flex-col gap-2 bg-gray-100 p-2 rounded-b-2xl ">
								{/* recomendations */}
								<CardStack />
								{/* publish button */}
								<button
									disabled={isDisabled}
									className="w-full mt-32 px-3 py-2 rounded-md bg-zinc-800 text-white disabled:bg-zinc-800/90"
								>
									{isDisabled ? (
										<span className="flex items-center justify-center gap-2 cursor-not-allowed">
											Publish <HiLockClosed />
										</span>
									) : (
										<span className="flex items-center justify-center gap-2 cursor-pointer">
											Publish <PiConfettiFill />
										</span>
									)}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}