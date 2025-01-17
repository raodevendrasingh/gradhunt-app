import { Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import { AdminDashboard } from "./Dashboard";
import { ManageUsers } from "@/pages/admin/ManageUsers";
import NotFound from "../common/NotFound";
import { AdminLogin } from "./AdminLogin";

export const AdminRoutes: React.FC = () => (
	<Routes>
		<Route element={<AdminLayout />}>
			<Route path="/" element={<AdminLogin />} />
			<Route path="/dashboard" element={<AdminDashboard />} />
			<Route path="/manage-users" element={<ManageUsers />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	</Routes>
);
