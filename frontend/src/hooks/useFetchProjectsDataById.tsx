// ?for fetching project data in the project tab

import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { toast } from "sonner";
import { ProjectData } from "@/types/userTypes";
import { useAuth } from "@clerk/clerk-react";
import { useParams } from "react-router-dom";

interface ProjectDataProps {
	projectId: number;
}

export const useFetchProjectDataById = ({ projectId }: ProjectDataProps) => {
	const [projectIdData, SetProjectIdData] = useState<ProjectData>();
	const [isProjectLoading, setIsProjectLoading] = useState<boolean>(true);
	const [error, setError] = useState<any>(null);
	const { getToken } = useAuth();
	const { username } = useParams<{ username: string }>();

	const fetchData = useCallback(async () => {
		setIsProjectLoading(true);
		try {
			const token = await getToken();
			if (!token) {
				throw new Error("User Unauthorized!");
			}
			const url = `/api/get-project/${username}/${projectId}`;
			const response = await axios.get(url, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});
			const data = response.data;
			SetProjectIdData(data);
		} catch (err: any) {
			setError(err);
			toast.error("Error fetching project details");
		} finally {
			setIsProjectLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const refetchProject = useCallback(() => {
		fetchData();
	}, [fetchData]);

	return { projectIdData, isProjectLoading, error, refetchProject };
};