import { SignIn } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export const SignInPage = ({ toggleView }: { toggleView: () => void }) => {
	return (
		<div className="flex flex-col items-center border max-w-md rounded-2xl py-5 shadow-xl mx-5">
			<div className="flex flex-col justify-center items-center gap-2 text-sm py-5">
				<span className="text-slate-800 text-4xl font-bold">Log In</span>
			</div>
			<SignIn
				path="/"
				appearance={{
					elements: {
						rootBox: "rounded-lg ",
						cardBox: "rounded shadow-none",
						card: "rounded p-5",
						header: "hidden",
						socialButtonsBlockButton: "py-2 rounded-lg",
						socialButtonsBlockButtonText: "text-base",
						form: "mt-0",
						dividerText: "text-lg",
						formFieldRow__name: "hidden",
						formFieldRow__username: "hidden",
						formFieldLabel: " text-base",
						formFieldInput: "rounded-lg bg-gray-50 border border-gray-300 py-4",
						formButtonPrimary: " text-base py-2 rounded-lg",
						footer: "hidden",
						otpCodeFieldInput:
							"rounded-lg bg-gray-50 border border-gray-300 py-4",
					},
				}}
				signUpUrl="/"
				forceRedirectUrl="/dashboard"
			/>
			<div className="flex justify-center items-center gap-2 text-sm max-w-md py-5 border-t-0 rounded-t-none w-[401px]">
				<span className="text-gray-500">Don&apos;t have an account?</span>
				<button onClick={toggleView}>
					<Link to="/">Sign up</Link>
				</button>
			</div>
		</div>
	);
};