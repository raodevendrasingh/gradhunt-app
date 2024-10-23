import { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";

// pages
import AppLayout from "@/pages/core/AppLayout";
import LandingPage from "@/pages/common/Landing";
import SignInPage from "@/pages/core/auth/SignInPage";
import SignUpPage from "@/pages/core/auth/SignUpPage";
import StandardUserProfile from "./StandardUserProfile";
import JobSearchPage from "./JobSearchPage";
import JobsFeedPage from "./JobsFeedPage";
import JobApplicationsPage from "./JobApplicationPage";
import SavedJobsPage from "./SavedJobsPage";
import SettingsPage from "./SettingsPage";
import SpecialUserProfile from "@/pages/core/SpecialUserProfile";
import NotFound from "@/pages/common/NotFound";
import OnboardingPage from "./OnboardingPage";
import SalariesPage from "./SalariesPage";
import CompanyProfileForm from "./CompanyProfileForm";
import CompanyProfile from "./company-pages/CompanyProfile";
import RecruiterLayout from "./RecruiterLayout";
import ArchivedPostings from "./company-pages/ArchivedPostings";
import TeamsPage from "./company-pages/TeamsPage";
import Integrations from "./company-pages/Integrations";
import Settings from "./company-pages/SettingsPage";
import AnalyticsPage from "./company-pages/Analytics";
import { JobPostingForm } from "./JobPostingForm";
import { SuccessJobPage } from "./company-pages/SuccessJobPage";
import { JobDetailsPage } from "./JobDetailsPage";
import NotificationsPage from "./Notifications";
import ManageJobPost from "./company-pages/ManageJobPostings";
import ManageApplicants from "./company-pages/ManageApplicants";
import CareerPreferencePage from "./CareerPreferencePage";
import UserProfileLayout from "./UserProfileLayout";
import { ManageJobDetails } from "./ManageJobDetails";
import JobApplicantsPage from "./company-pages/JobApplicants";

export default function AppRoutes(): ReactNode {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login/*" element={<SignInPage />} />
				<Route path="/signup/*" element={<SignUpPage />} />
				<Route path="/onboarding" element={<OnboardingPage />} />
				{/* candidate routes */}
				<Route path="/*" element={<UserProfileLayout />}>
					<Route path="p/:username" element={<StandardUserProfile />} />
					<Route path="job-applications" element={<JobApplicationsPage />} />
					<Route path="career-preferences" element={<CareerPreferencePage />} />
					<Route path="job-applications" element={<JobApplicationsPage />} />
					<Route path="jobs-saved" element={<SavedJobsPage />} />
					<Route
						path="create-company-profile"
						element={<CompanyProfileForm />}
					/>
					<Route path="settings" element={<SettingsPage />} />
					<Route path="notifications" element={<NotificationsPage />} />
				</Route>
				{/* recruiter routes */}
				<Route path="/*" element={<RecruiterLayout />}>
					<Route path="company/:companyname" element={<CompanyProfile />} />
					<Route path="company/:companyname/job/:jobId" element={<JobDetailsPage />} />

					<Route
						path="company/:companyname/manage-jobs/post"
						element={<JobPostingForm />}
					/>
                    <Route
						path="company/:companyname/manage-jobs/post/success"
						element={<SuccessJobPage />}
					/>
					<Route path="company/:companyname/manage-jobs" element={<ManageJobPost/>} />
					<Route path="company/:companyname/manage-job/:jobId" element={<ManageJobDetails />} />
                    <Route
						path="company/:companyname/manage-job/:jobId/edit"
						element={<ManageJobDetails />}
					/>
					<Route path="company/:companyname/applicants" element={<ManageApplicants />} />
					<Route path="company/:companyname/applicants/:jobId" element={<JobApplicantsPage />} />
					<Route path="company/:companyname/archived" element={<ArchivedPostings />} />
					<Route path="company/:companyname/analytics" element={<AnalyticsPage />} />
					<Route path="company/:companyname/team" element={<TeamsPage />} />
					<Route path="company/:companyname/integrations" element={<Integrations />} />
					<Route path="company/:companyname/settings" element={<Settings />} />
				</Route>
                <Route path="job-search" element={<JobSearchPage />} />
				<Route path="job-search/:params" element={<JobsFeedPage />} />
				<Route path="salaries" element={<SalariesPage />} />
				<Route path="/s/:username" element={<SpecialUserProfile />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}
