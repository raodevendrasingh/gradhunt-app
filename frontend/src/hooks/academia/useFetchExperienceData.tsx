import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useAuth } from "@clerk/clerk-react";
import { ExperienceData } from "@/types/userTypes";
import { useParams } from "react-router-dom";
import { useFetchProfileCompletion } from "../profile/useFetchCompletionPercentage";
import { apiUrl } from "@/modal-forms/profile/OnboardingModal";

export const useFetchExperienceData = (): UseQueryResult<
	ExperienceData[],
	AxiosError
> => {
	const { getToken } = useAuth();
	const { username } = useParams<{ username: string }>();
	const { refetch: refetchCompletionPercentage } =
		useFetchProfileCompletion();

	const fetchExperienceData = async (): Promise<ExperienceData[]> => {
		try {
			const token = await getToken();
			if (!token) {
				throw new Error("User Unauthorized!");
			}
			const url = `${apiUrl}/api/users/${username}/experiences`;
			const response = await axios.get(url, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});
			refetchCompletionPercentage();
			return response.data;
		} catch (error: AxiosError | any) {
			if (error.response && error.response.status === 404) {
				console.warn(
					"404 Not Found: The requested resource does not exist."
				);
				return [];
			} else {
				throw error;
			}
		}
	};

	return useQuery<ExperienceData[], AxiosError>({
		queryKey: ["experienceData", username],
		queryFn: fetchExperienceData,
		staleTime: 30000,
	});
};
