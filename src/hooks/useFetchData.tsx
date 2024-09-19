import { useEffect, useState } from "react";
import { AudioClip } from "../Types";

function useFetchData(url: string, pages: number) {
    const [data, setData] = useState<AudioClip[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const allData: AudioClip[] = [];
                for (let page = 1; page <= pages; page++) {
                    const response = await fetch(`${url}?page=${page}`);
                    if (!response.ok) {
                        throw new Error(`Error fetching page ${page}`);
                    }
                    const result = await response.json();
                    allData.push(...result.body.audio_clips);
                }
                setData(allData);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, pages]);

    return { data, isLoading, error };
}

export default useFetchData;

