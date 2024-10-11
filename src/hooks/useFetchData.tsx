import { useEffect, useState } from "react";
import { AudioClip } from "../Types";

function useFetchData(url: string) {
    const [data, setData] = useState<AudioClip[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const allData: AudioClip[] = [];
            let page = 1;

            try {
                while (allData.length < 62) {
                    const response = await fetch(`${url}?page=${page}`);
                    if (!response.ok) {
                        throw new Error(`Error fetching page ${page}`);
                    }

                    const result = await response.json();
                    const filteredClips = result.body.audio_clips.filter((clip: AudioClip) => 
                        clip.description && clip.channel.urls.logo_image.original
                    );

                    allData.push(...filteredClips);

                    if (filteredClips.length === 0) {
                        break;
                    }

                    page += 1;  
                }

                setData(allData.slice(0, 62));  
            } catch (error: any) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, isLoading, error };
}

export default useFetchData;
