import CareerPreferencePage from '@/pages/core/CareerPreferencePage';
import CompanyProfileForm from '@/pages/core/CompanyProfileForm';
import JobApplicationsPage from '@/pages/core/JobApplicationPage';
import NotFound from '@/pages/common/NotFound';
import NotificationsPage from '@/pages/core/Notifications';
import SavedJobsPage from '@/pages/core/SavedJobsPage';
import SettingsPage from '@/pages/core/SettingsPage';
import StandardUserProfile from '@/pages/core/StandardUserProfile';
import UserProfileLayout from '@/pages/core/UserProfileLayout';
import { Route, Routes } from 'react-router-dom';

export default function CandidateRoutes() {
	return (
		<Routes>
			<Route element={<UserProfileLayout />}>
				<Route path="p/:username" element={<StandardUserProfile />} />
				<Route path="job-applications" element={<JobApplicationsPage />} />
				<Route path="career-preferences" element={<CareerPreferencePage />} />
				<Route path="jobs-saved" element={<SavedJobsPage />} />
				<Route path="create-company-profile" element={<CompanyProfileForm />} />
				<Route path="settings" element={<SettingsPage />} />
				<Route path="notifications" element={<NotificationsPage />} />
                <Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}