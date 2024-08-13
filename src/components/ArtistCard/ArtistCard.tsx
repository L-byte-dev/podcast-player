import Card from "../Card/Card";
import styles from "./ArtistCard.module.css"

const ARTISTS = [
    {
      key: 'Drake',
      name: 'Drake',
      subs: '30.1M subscribers',
      img: 'https://lh3.googleusercontent.com/MxNjcRJ-uK4Xvx7u90IhEFLQM8x9LIGTA9VCKHq5U4Wn2jOgiWaMtg-qz329SIzqnCyhdCCB3MpdAGs=w1440-h600-p-l90-rj',
    },
    {
      key: 'KidCudi',
      name: 'Kid Cudi',
      subs: '2.55M subscribers',
      img: 'https://lh3.googleusercontent.com/ErVL4SS_eij1pQ2cEcWsZe3ffXVjeejmxjspux9X6T9DiTkOxFGbGJJKdb-NQ1Xh4cLLIewORfli2rmV=w1440-h600-p-l90-rj',
    },
    {
      key: 'BigSean',
      name: 'Big Sean',
      subs: '4.38M subscribers',
      img: 'https://lh3.googleusercontent.com/UXjmA3mpyKSN5odRKWlJzZrjACR_CFzO6RPWTjW3W8KtPFimdBkJT6jmbLezlax-L2zcaBMAowdN3A=w1440-h600-p-l90-rj',
    },
    {
      key: 'ToryLanez',
      name: 'Tory Lanez',
      subs: '4.64M subscribers',
      img: 'https://lh3.googleusercontent.com/NVdGDIvCo4BHNPVMzzFQ2phELZ47AZvuHydm9yYCVBeRq7k8m5XjDmJSLBYQqqhi_UfHN3Ox7Ro-530=w1440-h600-p-l90-rj',
    },
    {
      key: 'DJKhaled',
      name: 'DJ Khaled',
      subs: '13.5M subscribers',
      img: 'https://lh3.googleusercontent.com/V9MFx7nB16-Y5CRn2vhO9YePVFldW1HZ7mvKfNWKqDd2ltsPcJIf95UWqim1zXy_fb2gir1UTo-O1w=w1440-h600-p-l90-rj',
    },
];

function ArtistCard() {
  return (
    <div className={styles.artistCardConainter}>
      {ARTISTS.map((artist) => {
        return (
          <Card key={artist.key} title={artist.name} subtitle= {artist.subs} className={styles.artistCard} centeredText={true}>
            <div className={styles.pictureContainer}>
              <img
                  className={styles.artistPicture}
                  src={artist.img}
              />
            </div>
          </Card>                            
        );
      })}
    </div>
  )
}

export default ArtistCard;