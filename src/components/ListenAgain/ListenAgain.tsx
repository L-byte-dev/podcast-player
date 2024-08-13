import Card from "../Card/Card";
import styles from "./ListenAgain.module.css";

const PLAYLISTS = [
      {
        key: 'TheHits00S',
        name: "The Hits: '00s",
        subtitle: '184 songs',
        img: 'https://lh3.googleusercontent.com/FhuL-yjt6wvGt661i84UHAj6bwLN59Lyq40vRqXuFkbM3SL_GtCPn2e_AN9XbVH5LrENleDw7-9pZKw=w544-h544-l90-rj',
        type: 'playlist',
      },
      {
        key: 'Arcade_Duncan Laurence',
        name: 'Arcade',
        subtitle: 'Duncan Laurence',
        img: 'https://lh3.googleusercontent.com/5qzgdLGQBgxSE0k26ZZfW8GU54J3O0EGb31IQr3sJ63pPz75K0Bac1VyNFZkTs6p086iUdn9-S-Kh3y9=w544-h544-l90-rj',
        type: 'song',
      },
      {
        key: 'ModernRockHits',
        name: 'Modern Rock Hits',
        subtitle: '279 songs',
        img: 'https://lh3.googleusercontent.com/ND3Jmh2yGqIe9EuL113Vei3pvrqeCciqnuLGP6pSjQAszyV-dBl9qozsTNBkP5GYL3FaEegRMHXgZp8k=w544-h544-l90-rj',
        type: 'playlist',
      },
      {
        key: '90Alternative',
        name: "'90s Alternative",
        subtitle: '162 songs',
        img: 'https://lh3.googleusercontent.com/37C0445ZLc1xkm46ErFPWRUY-cfL0K9SEIRGPBnpYJCNeOLOAHDvPdH1BOgcJLy_TsXbBZ-D1y5GWtQa=w544-h544-l90-rj',
        type: 'playlist',
      },
      {
        key: 'TheHits80',
        name: "The Hits: '80s",
        subtitle: '148 songs',
        img: 'https://lh3.googleusercontent.com/d2fnwqtY8S96gce8C4rTBApWt3H-FP75C7Oih9fYSRQNT56yHC9a8WKOCdRH744Ysdr3TlKJFJENduI=w544-h544-l90-rj',
        type: 'playlist',
      },
  ];

function ListenAgain() {
    return (
      <div className={styles.listenAgainContainer}>
          {PLAYLISTS.map((playlist) => {
              return (
                  <Card key={playlist.key} title={playlist.name} subtitle= {playlist.subtitle} className={styles.listenAgainCard}>
                      <div className={
                              playlist.type === 'playlist' 
                                  ? styles.playlistPicture
                                  : styles.songPicture
                          }> 
                        <img
                            className={styles.picture}
                            src={playlist.img}
                        />
                        <img
                            className={styles.moreIcon}
                            loading="lazy"
                            src="https://d1xzdqg8s8ggsr.cloudfront.net/66b5563cec3460195ab58552/87cb8155-5f54-4ff6-b820-311a9f0a2973_1723160275477167613?Expires=-62135596800&Signature=dC4E~aQYmDUTDCt1bm8~1qihHNBLIScHVFd2I~vlNI7t6djLCmy8RxIMFDwaxd35kT1dpfJkEyFft3oAKtLgDJQ4OI-nwOI1Fg6n5gea26tQ5glIpxu6lqg-eWeu2pjdA0grEWPJnpVfgt3FmHEKxe~4MpLABlx8z8t7itdAgN4pAgrr8oSMbnjbyWHyZxYS9Ry~igq3miAst9zEer15JA6RETzf88cDEubA1NXxPnkQ8vzKHgKfMILegoKZ0S-NQNbD3MGVTQThof9QuHWRJczqRDW8x5pJgNhJyf5QbOKm2IOJHuozKNsin-OuK78iu1U6wk~PP2D-JB1JmFt6gg__&Key-Pair-Id=K1P54FZWCHCL6J"
                        />
                        <img
                            className={styles.playIcon}
                            loading="lazy"
                            src="./playIcon.svg"
                        />
                      </div>
                  </Card>                            
              );
          })}
      </div>
    )
}

export default ListenAgain;