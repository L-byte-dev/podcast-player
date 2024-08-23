import Card from "../Card/Card";
import styles from "./SongCard.module.css";

const SONGS = [
      {
        key: 'LikeARollingStone_BobDylan',
        name: 'Like a Rolling Stone',
        artist: 'Bob Dylan',
        img: 'https://lh3.googleusercontent.com/TL2EK5rqsv4nf2Fe3keiVfvTALiMJmPmTjhtfPH_6P511Lan2gTIBNCwGv1B0jFuC6omHpPaKtd_F2A=w544-h544-l90-rj',
      },
      {
        key: 'SmellsLikeTeenSpirit_Nirvana',
        name: 'Smells Like Teen Spirit',
        artist: 'Nirvana',
        img: 'https://lh3.googleusercontent.com/eyKiPBSqEu556sYTd_IyZhfxun5e_hatZ9tAyu8bnmVRgtbM3aW-SXUvhVX-d7s1oU0Yf3a38JOuYMZK5w=w544-h544-l90-rj',
      },
      {
        key: 'ADayInTheLife_TheBeatles',
        name: 'A Day in the Life',
        artist: 'The Beatles',
        img: 'https://lh3.googleusercontent.com/r7FUIs4CwI2tr7vFGnvIo8-EgGLBC7LOh5V3OJOIKEneTOAIhgEbUwHeAPizEa2roidqNYaAK-Su48fP1A=w544-h544-l90-rj',
      },
      {
        key: 'GoodVibrations_TheBeachBoys',
        name: 'Good Vibrations',
        artist: 'The Beach Boys',
        img: 'https://lh3.googleusercontent.com/Uimc8X0_ydWSt1OtGvWkIpm5ABnWWOIWJyhu9ObE0uuUqF3WL51O6N_84btxBeev3Wya9Wc1hIeW1Hs=w544-h544-l90-rj',
      },
      {
        key: 'JohnnyBGoode_ChuckBerry',
        name: 'Johnny B. Goode',
        artist: 'Chuck Berry',
        img: 'https://lh3.googleusercontent.com/-LEaD04lqL-zCZ6VCsaH-R2bnPty3H6IB9YltiLGGlAi40JZ669A7onhtQjkrT1UVBfii4JV289Mu4vkcQ=w544-h544-l90-rj',
      },
      {
        key: 'Respect_ArethaFranklin',
        name: 'Respect',
        artist: 'Aretha Franklin',
        img: 'https://lh3.googleusercontent.com/pGSJZsTUBpL8VP0eYhLtjl4uIxhtkuTHWRqM-J_wA55zL4WlbUWifPZsIrz582H9z7mgTIzhsPlCW_lZCA=w544-h544-l90-rj',
      },
      {
        key: 'BeMyBaby_TheRonettes',
        name: 'Be My Baby',
        artist: 'The Ronettes',
        img: 'https://lh3.googleusercontent.com/LVIs7SII2gHBYMO6eXx1WX7bXlKX2GL8aoELazp6yUhcOhZJ-ae5X6i0DbcoPUuocz3CSHmYnhvQB-FORA=w544-h544-l90-rj',
      },
      {
        key: "WhatGoingOn_MarvinGaye",
        name: "What's Going On",
        artist: 'Marvin Gaye',
        img: 'https://lh3.googleusercontent.com/wDZ9b8Tk_8QyuTurmJ9N8uZ31xF095slzLLCaEvw_XO_e7tEeKVf0BlGkbuPyIcNRhtWQtQMdkqHC-61=w544-h544-l90-rj',
      },
      {
        key: 'BillieJean_MichaelJackson',
        name: "Billie Jean",
        artist: 'Michael Jackson',
        img: 'https://lh3.googleusercontent.com/URvHCfI2iyGAlAwqqBFeaFhU9DeKk_iuX40OIIIj8Zp0wIT3BVsJ2JRMwLLbUB9EZS7t7oDlMrI2S3OvGA=w544-h544-l90-rj',
      },
      {
        key: 'HeartbreakHotel_ElvisPresley',
        name: 'Heartbreak Hotel',
        artist: 'Elvis Presley',
        img: 'https://lh3.googleusercontent.com/EoNmaLdFT4rt694UbeKIQQJTVJqxq-QsR3-BGrAUMufQ8IT86MntAQ1gN6yALaDJLxHC5H_63O_khMDI=w544-h544-l90-rj',
      },
      {
        key: 'BornToRun_BruceSpringsteen',
        name: 'Born to Run',
        artist: 'Bruce Springsteen',
        img: 'https://lh3.googleusercontent.com/8aK3INgtq69MvZFQ8wO9sFsMFkKFpFT1BJSbgBhUTYdfRuGbo57e2mNMVl_vue3BTS-TSlDn7IhTQa8=w544-h544-l90-rj',
      },
      {
        key: 'MyGeneration_TheWho',
        name: 'My Generation',
        artist: 'The Who',
        img: 'https://lh3.googleusercontent.com/rzIP-ZxIfaKNIK7F5qfkVj_fXHZBOA_kmDVJm9_WZ2Xran7ry9lLqjM0fEUimW4R3MyWSs_HW1UZ4i4=w544-h544-l90-rj',
      },
      {
        key: 'LoveWillTearUsApart_JoyDivision',
        name: 'Love Will Tear Us Apart',
        artist: 'Joy Division',
        img: 'https://lh3.googleusercontent.com/2MwsaIxohmb9EGxUx9AxdjCszBtOPP51s9TM-rLxzn97wovCUMOR1Y9gtX0fESf-kHrxxNMCC4-qePo=w544-h544-l90-rj',
      },
      {
        key: 'HeyYa_OutKast',
        name: 'Hey Ya!',
        artist: 'OutKast',
        img: 'https://lh3.googleusercontent.com/5VSkY0xRhjAISX70WozU12J_GBPx8xDhJI0yzlPW5fIBdzZd6TbbMoKtEwpu7nNjl59LhCTo32O-vHTs=w544-h544-l90-rj',
      },
      {
        key: 'AnarchyInTheUK_SexPistols',
        name: 'Anarchy in the U.K.',
        artist: 'Sex Pistols',
        img: 'https://lh3.googleusercontent.com/iXTyFZeTE17cu9HvQXe4oGXRWoftEGCL3eSxEZtfdgEg_WPoGkxxl6rZTwGPJDsxIe93JgZHN-P6gA8_=w544-h544-l90-rj',
      },
      {
        key: 'PaperPlanes_MIA.',
        name: 'Paper Planes',
        artist: 'M.I.A.',
        img: 'https://lh3.googleusercontent.com/4aTovpE4ruem7DytfD1hrGoQVv_GMLw4blUL_IgQkK4V1La514VRYo1OpO1qDttU7sDSwjHvIr_UdHV2=w544-h544-l90-rj',
      },
  ];

function SongCard() {
    return (
      <div className={styles.songCardContainer}>
          {SONGS.map((song) => {
              return (
                  <Card key={song.key} title={song.name} subtitle= {song.artist} className={styles.songCard}>
                      <img
                          className={styles.songPicture}
                          src={song.img}
                      />
                  </Card>                            
              );
          })}
      </div>
    )
}

export default SongCard;