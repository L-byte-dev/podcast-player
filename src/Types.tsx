export interface Playlist {
    title: string;
    description: string;
    imageUrl: string;
}

export interface AudioClip {
    id: number;
    title: string;
    description: string;
    channel: {
      id: number;
      urls: {
        logo_image: {
          original: string;
        };
      };
    };
    urls: {
      high_mp3: string;
    };
}
  
export interface Podcast {
    title: string;
    description: string;
    photo: string;
    audio: string;
}  