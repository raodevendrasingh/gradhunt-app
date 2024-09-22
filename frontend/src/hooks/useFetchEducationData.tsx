// ?for fetching education data in the education tab

import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { toast } from "sonner";
import { EducationData } from "@/types/userTypes";
import { useAuth } from "@clerk/clerk-react";
import { useParams } from "react-router-dom";

export const useFetchEducationData = () => {
	const [educationData, SetEducationData] = useState<EducationData[]>([]);
	const [isEduLoading, setIsEduLoading] = useState<boolean>(true);
	const [error, setError] = useState<any>(null);
    const { getToken } = useAuth();
	const { username } = useParams<{ username: string }>();

    const fetchData = useCallback(async () => {
		setIsEduLoading(true);
		try {
            const token = await getToken();
			if (!token) {
				throw new Error("User Unauthorized!");
			}
			const url = `/api/get-education-data/${username}`;
			const response = await axios.get(url, {
				headers: {
					"Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
				},
			});
            const data = response.data;
			SetEducationData(data);
		} catch (err: any) {
			setError(err);
            toast.error("Error fetching education details");
		} finally {
			setIsEduLoading(false);
		}
	}, []);

    useEffect(() => {
		fetchData();
	}, [fetchData]);

	const refetchEdu = useCallback(() => {
		fetchData();
	}, [fetchData]);

	return { educationData, isEduLoading, error, refetchEdu };
};
