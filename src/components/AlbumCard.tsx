import Card from "./Card";
import CategoryTitle from "./CategoryTitle";
import AvatarIcon from "./AvatarIcon";
import LeftRightIcon from "./LeftRightIcon";
import styles from "./AlbumCard.module.css";

const ALBUMS = [
      {
        key: 'LondonCalling_TheClash',
        name: 'London Calling',
        artist: 'The Clash',
        img: 'https://lh3.googleusercontent.com/Km3rEiyeSqdbbH1GJ7L2AnUhZK-4r_pYcfbM8lzEC7mwW99evwMbLihM_SuPJQ5sE1JkNQ4rvq9D_m1Iqw=w544-h544-l90-rj',
      },
      {
        key: 'OKComputer_Radiohead',
        name: 'OK Computer',
        artist: 'Radiohead',
        img: 'https://lh3.googleusercontent.com/SPHeXqlEhzw-pPbAx3AQU4HSD-XuSMlPtLsptfvHOjOTd6F_1ZbELaOYn1d8-jGZ5HW8O1R0pLqausuVZw=w544-h544-l90-rj',
      },
      {
        key: 'AstralWeeks_Van Morrison',
        name: 'Astral Weeks',
        artist: 'Van Morrison',
        img: 'https://lh3.googleusercontent.com/PcVcb641OpmMBPlQBWw1evm8EYJ-TC0throHyQ7MpwaUvJojSNw5l2uJMYxSxrz85bRZkoo2mS_dHMA=w544-h544-l90-rj',
      },
      {
        key: 'ToPimpAButterfly_KendrickLamar',
        name: 'To Pimp a Butterfly',
        artist: 'Kendrick Lamar',
        img: 'https://lh3.googleusercontent.com/L1iBW0CcjEQaXLP1coivJbjf7zSUncQ65_GpKHakOaRI81kS5pRV498PSg3VSmQg7LRMB0cJ6d-HzooO=w544-h544-l90-rj',
      },
      {
        key: 'Funeral_ArcadeFire',
        name: 'Funeral',
        artist: 'Arcade Fire',
        img: 'https://lh3.googleusercontent.com/GWqZ2EW2bqMolKoX43ETfrYvjbpvEKvj-BPFXpHtjs41KR-36SyJ3EjcYfmh4Snli9v8Nb20HTA0ohs=w544-h544-l90-rj',
      },
  ];

function AlbumCard() {
    return (
            <section className={styles.songRowItem}>
                <div className={styles.categoryTitleGroup}>
                  <div className={styles.categoryTitle}>
                    <AvatarIcon />
                    <CategoryTitle 
                      title="Recommended albums">
                    </CategoryTitle>
                  </div>
                  <div className={styles.buttonGroup}>
                    <LeftRightIcon />
                  </div>
                </div>  
                <div className={styles.songPlayingParent}>
                    {ALBUMS.map((album) => {
                        return (
                            <Card key={album.key} title={album.name} subtitle= {album.artist} className={styles.albumCard}>
                                <div className={styles.expandedPicture}>
                                  <img
                                      className={styles.albumPicture}
                                      src={album.img}
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
            </section>
    )
}

export default AlbumCard;