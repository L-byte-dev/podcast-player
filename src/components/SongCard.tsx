import Card from "./Card";
import CategoryTitle from "./CategoryTitle";
import AvatarIcon from "./AvatarIcon";
import Button from "./Button";
import LeftRightIcon from "./LeftRightIcon";
import styles from "./SongCard.module.css";

const CANCIONES = [
      {
        key: 'Happy_RobbieWilliams',
        name: 'Happy',
        artist: 'Robbie Williams',
        img: 'https://d1xzdqg8s8ggsr.cloudfront.net/66b5563cec3460195ab58552/c2d971b2-64c2-402c-b8b1-a8c09f4a160c_1723160281486842035?Expires=-62135596800&Signature=t6NdTJlohgyaZgDGcsZV03kq~aR4ZaMp80C~OPR7trZnEqBEokHvoeV-hWgpXw4Zt-C1mIQEJ2K0wikts2t4dIY8nkEyT4A6JsuZF8c3Fv3oYl5DGmhPznWhFIR2~f2odSHGCbqWaTGvAu4IhkL4AEpw72BUva8HigwUTOuLEZ64KcHIaHqQFR66g9rprG14z7YniIizaThmsHrOJb-2wQwvClnE~qNaifWKYvWjmtgb4w0UOKWr9bvksmTfouhCLrjxwYHET6LKPG0N8HxK~8fRgdG1OSmNsju~ZFr1KXH~d2h-r6Tq9M8tOrv9EcFO3Erhrm-c7TFC5nqFCBIMpQ__&Key-Pair-Id=K1P54FZWCHCL6J',
      },
      {
        key: 'LoveStory_JohnLennon',
        name: 'Love Story',
        artist: 'John Lennon (of The Beatles)',
        img: 'https://d1xzdqg8s8ggsr.cloudfront.net/66b5563cec3460195ab58552/30b0e5bf-5020-4c4d-aa7e-cec3fd0a463c_1723160275479746433?Expires=-62135596800&Signature=nnbun-oxJv-DWMgKPczqfyniMkzfBv0L9g4annAw40DT8Cd5~UyYXanQV8JRUZWIixk~h5ZWCSFaJDUFz728JXWpOFJWR5jr3yMmf76BJ1j5Vdde4vrnV5Pj~OspnWj-dS~1mHtnwOM0W23XN9JADopIWu0fXdQoH0nKcppX6zd3Bn1tQNXbuo5to8tLQ46p9AgCNQUx3LswKxrtuqid~tAadErh3LONW97zBFLPjbTLuduw2irAL7wdIXqp7CBtcaLZJr-leaXy9ZdbMYfYEFet7pFEt8M1p4iV7u6VZ-KU-FTcTYvrTS3f4GAslq2pfEtNw4PQsL9dk-MwKzyY4Q__&Key-Pair-Id=K1P54FZWCHCL6J',
      },
      {
        key: 'Smooth_Coldplay',
        name: 'Smooth',
        artist: 'Coldplay (fronted by Chris Martin)',
        img: 'https://d1xzdqg8s8ggsr.cloudfront.net/66b5563cec3460195ab58552/05a5b043-225d-455c-b44f-a89344b534b9_1723160281486913931?Expires=-62135596800&Signature=fMus~CCh97Jc10SZ~X0-QAV16UJZtryD6foPMRPMdotl5Q~XeOxALSJfcSXk5rKu0JJI1R-7debemz1k1NFmcXDasQriKrFtGmvRIhxDsE5H2CV0p~ASjYnoD5BVZkY-AkFcdj-lY778JJp5S4Nype6zLyAQI4Li0Z04wrcFXVjeh8esAv8IK0q2F7kUvkk~0AbAUSXtyVw-qWd7Pmr5SosyXbRIx1PlEo9OTsYgsp1FFAYWKbye-XG0Wtn3p-ED-yFldVr52rsPE8k-0u96NpD6OXRsf6fIjVMGMa8ZicNK2TzLCZHViJoT1eI~77GIUkWgIU4uLCIai349p6k1ZA__&Key-Pair-Id=K1P54FZWCHCL6J',
      },
      {
        key: 'HeySoulSister_SamSmith',
        name: 'Hey, Soul Sister',
        artist: 'Sam Smith',
        img: 'https://d1xzdqg8s8ggsr.cloudfront.net/66b5563cec3460195ab58552/ba0263a7-1cab-44d0-ac27-0f762aba7066_1723160281816723529?Expires=-62135596800&Signature=ko5~yDYuWk0t3YByXXWkiWEOHMZ~EIy5a7gUdv35Jlt~TfY80hAsBroUhvqSz3AADvTkgpTW5t1XVyDKmPil9YcQMiFuXBYupFHunTvF3hLtngiS5DQdketJdczx~NO2t7GVeF2g-zW5AGi14zUPwfG~TFqyKfeGDARmXbaqAyWcYUUNNjsVSyLkDJvpzafaLZnfOztJBYn9i5laMDVJ36uXQxDo1VGCk2vMp3CRUwd4PBPSA8Us2ew4glBK8Zrv10IjNLSVv6xQWPRxSoglzQF2CteswXM7cAUNMb6HLSnMKCJzbqKt6soA2z3XN5Uc7KWMRSJdiPCNKWEDj-S2HA__&Key-Pair-Id=K1P54FZWCHCL6J',
      },
      {
        key: 'CheapThrills_JessieJ',
        name: 'Cheap Thrills',
        artist: 'Jessie J',
        img: 'https://d1xzdqg8s8ggsr.cloudfront.net/66b5563cec3460195ab58552/ec8f0a02-03c5-4d7a-8467-2024a4037301_1723160281486991654?Expires=-62135596800&Signature=N8H9jFGLX4MJ0BIDIl0O5qYvuTwHnkxSQqMRohBoMEp3fnrGvdmAwZSKCgBpD0MgVDKLmqrJjfMJFDueyl8XAQJjQKa1e7xYLeuvGz~qPfed8PACZnBnpDy6caMRkM80edCiF-SqgYY9RAe2GgaZ9Ybwx2lnCC2ugboELj4WI7L26tSSBkRj49bRJR1gCejBpTIbjB-or8XKrBjJivykqY5SE1nPsMe6eKS41qGgNV-rSuEyA7FxC~KVSS1H-sPucbvjxPwRxLf8rqjt0pck4KsTIILQFNDn65PHsvWzGOuZnqo5k-3xTxoCETMoxiqNtuV9~qOCgXMVKRX-ZUQBzg__&Key-Pair-Id=K1P54FZWCHCL6J',
      },
      {
        key: 'IWillAlwaysLoveYou_Coldplay',
        name: 'I Will Always Love You',
        artist: 'Coldplay (fronted by Chris Martin)',
        img: 'https://d1xzdqg8s8ggsr.cloudfront.net/66b5563cec3460195ab58552/008f308e-c264-4c26-a001-9fa7ea38afa3_1723160281816803817?Expires=-62135596800&Signature=A2pN6bH~eUw8Mluc4iiyjt56rRJB462TcU0-wGsuvM9-hkDbGEXptIB8mnpihqkuLy~0iFIvMjACTlL3C2JCv5f2ESgpAoj-2cf61HcLNB8FQ7YIOaOuDZXLqmPZa-nTeIRzvC~kwSsiJqlAIXtMYWaico228zauKZkMVGkxlyDrmYMugD3k8pbmYiJyCCc9~GrXuKpP-Yk0HlmtzbqTQf-lshszfpVI9fQQNOXXoveUmu1d5odSFnD5EOKxKj9ydafYIj545xpUqr6LGARn6htQVMrma3j633TZ7aUF2OWbWe~d1lVtQWB5cghzDt4P0uW7NQocS06wtIfgtUX30g__&Key-Pair-Id=K1P54FZWCHCL6J',
      },
      {
        key: 'IGottaFeeling_GeorgeMichael',
        name: 'I Gotta Feeling',
        artist: 'George Michael (of Wham!)',
        img: 'https://d1xzdqg8s8ggsr.cloudfront.net/66b5563cec3460195ab58552/e8f9159d-5fd6-40a5-86f6-3e41ce192d40_1723160281487064854?Expires=-62135596800&Signature=IxOBOUwdMp62QH4lOVqRX6ruIVNkVcUlBrOLTq0jrZAwJYcatKeHoaGrzYjUGvUxBzYzZelVPPdYrSEKUGAhNa9uXRGT4t93RvXeeB0fVUJgI7ze~MXrGaImzafznItAqMFrnJkib~6psjIqpL7fXsBnidtUODKMD-r47bhC5DoDJf4a-lXuJBaQre7JzN7AqZ3JnnHfvr-tr~ycSAZM1fdbi5anuCK2oUR0ArSZLDpsgPJsyuG0gzrBBPFR-JpYbjlQzwkki8ViRQEXasCSk8QAs1AQHStff6p3OCi9wiIn9P1mapTJuWWNuY8ugjCctK7QAPsPVjUe84oHVkAQGQ__&Key-Pair-Id=K1P54FZWCHCL6J',
      },
      {
        key: 'SomeoneLikeYou_EltonJohn',
        name: 'Someone Like You',
        artist: 'Elton John',
        img: 'https://d1xzdqg8s8ggsr.cloudfront.net/66b5563cec3460195ab58552/05a5b043-225d-455c-b44f-a89344b534b9_1723160281486913931?Expires=-62135596800&Signature=fMus~CCh97Jc10SZ~X0-QAV16UJZtryD6foPMRPMdotl5Q~XeOxALSJfcSXk5rKu0JJI1R-7debemz1k1NFmcXDasQriKrFtGmvRIhxDsE5H2CV0p~ASjYnoD5BVZkY-AkFcdj-lY778JJp5S4Nype6zLyAQI4Li0Z04wrcFXVjeh8esAv8IK0q2F7kUvkk~0AbAUSXtyVw-qWd7Pmr5SosyXbRIx1PlEo9OTsYgsp1FFAYWKbye-XG0Wtn3p-ED-yFldVr52rsPE8k-0u96NpD6OXRsf6fIjVMGMa8ZicNK2TzLCZHViJoT1eI~77GIUkWgIU4uLCIai349p6k1ZA__&Key-Pair-Id=K1P54FZWCHCL6J',
      },
      {
        key: 'Royals_FlorenceWelch',
        name: 'Royals',
        artist: 'Florence Welch (of Florence + the Machine)',
        img: 'https://d1xzdqg8s8ggsr.cloudfront.net/66b5563cec3460195ab58552/5960040a-1226-483e-b747-7feaea7b11db_1723160281487134376?Expires=-62135596800&Signature=BeToUHHxyW1pdLe7Vs-~pLX3iYn5NCpD-11PVTDtnG~C1rEHfZnfnm3CWxvB3kO2lur15wZB9LdEYws15CjN1rAmEtDAOmEriFO7I0p1sqsPX5qDrA1de9ASxMW0JDb9EYxTL8cTRXZNOYjX0dl1YcBRJLx~ge6HBrakJZA2kWEdqHv87YGNugskm6Xp14YoArX9NZdmB5jLUbdqiNBX9gvhuSigOQ3gcU1OpY-lhVX8HO81CHbEyU5my3pXIPQsjChCkAzfKpbS7-BQMopgexeWM9Skf8aHsZYKjoccCPf~wdAYP4~kd8JdMvsEGIzLFkneB0kBUiTb7g7mZsbQiQ__&Key-Pair-Id=K1P54FZWCHCL6J',
      },
      {
        key: 'Radioactive_ListenAgain',
        name: 'Radioactive',
        artist: 'Listen Again',
        img: 'https://d1xzdqg8s8ggsr.cloudfront.net/66b5563cec3460195ab58552/9ebd0077-83ff-43aa-bbd1-55822dc1f71d_1723160281487207389?Expires=-62135596800&Signature=WWyjZL2ArAqkQPHhPFAKSVqx6TZw8YGSGRR2Mxd9YIDFJP7n9IMQkNwY77K8NUfxAIgTNC2nPBC46vwTVaodlZqhXMH52aQzPySFkBhW0zx751x581LxgJP0K2QmyPwjtsp96egg4j94YyOJJRsjmlU~3KRM~9UYhKsIUZ4u8Lmhh9JrLf7j2283TV0dqRmj8S7A0EeflKDnEkxdqszkk-7ZfBcwluxgggPkz7538UgaLOWoq7YDv18AgnwhJ2qDHHAnYOMjPS0wP8LnQpKi9ZKoMqdz2-Kg-iZjmtW0BagVRG7lJO7Fil6puepq9xnX1-y0ioCLmIy7VEkHCI3n-A__&Key-Pair-Id=K1P54FZWCHCL6J',
      },
      {
        key: 'SaySomething_ListenAgain',
        name: 'Say Something',
        artist: 'Listen Again',
        img: 'https://d1xzdqg8s8ggsr.cloudfront.net/66b5563cec3460195ab58552/4a70a3ed-36c1-43db-8f0c-203c8c1760e7_1723160281816970106?Expires=-62135596800&Signature=OktFajKwXazOlifwwJq~y0fk0EV7BqdhnIBlPPTYv7w9ZW0Eev5JS~0TC2FkzSSpL2dfZ3jfoFqTces-des5Gb57YKoqoUYfeCRxIMdysADA1iTDyNulrnGPZbJKnEpfDhwrjAQ-EG6EKr-EIGe2sRo~Q4-foCRSUraondHrhllVlMcTzQrGHXmlBjDashI9b6oVX1vqDfjMY6nsHzeDys2XXL3mtR6xpAQLdg3XkA9A6~G8teoVmTGnOHQeZLGrnxGPBC5spF2iPt3BWHqyBC6ocY7KnFBkWigWzmcpi3FWxbnYkDVmIrQNifDLJP~IXrWB6zN4Ou0KbrE85wtyJw__&Key-Pair-Id=K1P54FZWCHCL6J',
      },
      {
        key: 'Halo_EllieGoulding',
        name: 'Halo',
        artist: 'Ellie Goulding',
        img: 'https://d1xzdqg8s8ggsr.cloudfront.net/66b5563cec3460195ab58552/21f5f911-63e8-4879-9c5d-17a71292e36c_1723160281487298150?Expires=-62135596800&Signature=H-SJs9D-Wkdf9GJwWgAfhHisaD5hJ0hqfQNp6OQi1sYxBDT22MYCZi35VvqcmxAkOlFYJlnGtl~53JzqTy~P6yOvTzxEveXQc4O~mSIGJUfPCo2jjcmCzNLew~QO3Q1Nr2X3HhKnSu8JsESYVX2IOsGeE5txzSEPdN4~ptI5x3vtkbk6WrdOysL2FsgCVjXKWvqQMPQgt1SjpjbcIijILou1BeHu4bDv9KYJqKkoj1B21LB1IgreLdLlWPaLWwIrqdWY4ZmtLXqAaXWu2BSVuqPF6eP6J59~5givwL~IpzaynVJFj5Br3i5ozdLYz0tnWtup8fzkK7ahTGeU5oozrw__&Key-Pair-Id=K1P54FZWCHCL6',
      },
      {
        key: 'Havana_AnnieLennox',
        name: 'Havana',
        artist: 'Annie Lennox (of Eurythmics)',
        img: 'https://d1xzdqg8s8ggsr.cloudfront.net/66b5563cec3460195ab58552/a4b313bd-71fd-4023-a43a-275c5e6cd910_1723160281817051337?Expires=-62135596800&Signature=vukyG6KaDyHeQIIyXVmcTIhAr8-j4w6LmV5A-r9RCrTxHvFyV-dabrcAlfXijDlNyiIXLPkBO4SPJJPVoqfuZ2ShbYO2qb~Gt2BtM6h7ElWz1DJ6~l2U9qj3Fmym-810H5TROE~N~AIej8erYKPR9cv3uYydQ~yst0D3hPdC~0nisYy444A-1FZ-qZSkir79b3QoTIr4hhWTbgof2MH-Z1R~RuBlKna7UD1vn161wwH2l3MNdXMfNEpykIUtRWkPdCQurQz5Z9y6HMexY9JPqBX2t1APJqUvVlS6OHBRSxz1aruvlrUKpkTFJHHOL~6K7Nif9SgqMYRJagqW2tcL5g__&Key-Pair-Id=K1P54FZWCHCL6J',
      },
      {
        key: 'CantStopTheFeeling_CalvinHarris',
        name: "Can't Stop the Feeling!",
        artist: 'Calvin Harris (singer and producer)',
        img: 'https://d1xzdqg8s8ggsr.cloudfront.net/66b5563cec3460195ab58552/4073269d-f803-49a4-9502-4d7972ffc3aa_1723160281487368227?Expires=-62135596800&Signature=YxeQS9Myc-HC5S1AMeuPDnQv9E2LIFC-I7Q6CosEI12H9ZmwZeXWo924a3z5ch-3FsfQXgsIi1UREurar0OECgeOY77~CKAGBJalSVShgsTLI2tf7bZjepEC0sXEmRwkb5AENY9B-rb5UGHGD4rduQ0vVLGLS94w76rPdYMrmw7WftGIKvfIfJ8E6QrLle8pw1aOTkYQtuDo-WRUhaVznJuW3fuaetiOaNdHGsID8N0XlpO3RnIestcZi3MAYqfvbyotwzhynMRl2xrMrCGGEmQhIn1bWqHZBfX~HpGGLJHPML6aNpjpECkcSpZJoNVqiG-EtyWKt~9MyJfVL2T4Aw__&Key-Pair-Id=K1P54FZWCHCL6J',
      },
      {
        key: 'Stitches_PeterGabriel',
        name: 'Stitches',
        artist: 'Peter Gabriel',
        img: 'https://d1xzdqg8s8ggsr.cloudfront.net/66b5563cec3460195ab58552/388163bd-9e8a-4bc7-ade5-72eebf619f43_1723160281817146754?Expires=-62135596800&Signature=krEf7t94mrP4esrVUh6LAPqOI4LyaqczA884WX-IK1~GVAomrCT5hdt-LWSnLLmyZ3AexIEJrNM-lZbyywPHbhoVjYpwsEk~NV5FEcJtRooiLAsrd~tR280UHvCIvpPcf1ci2ZLkeAKWhGSX-scv5UJCOfPCIIjwNeQAO~RZqbiNi6YV~t6dj~MjUJztcdFFmRC3-T2Q16WWEvBjQ2AfpaMSvk0slitrqF9lwceRZLJpZ7vvUKmfAZGd~Lk3hxVaWPNgUYSR-IsQPS~yX7QytA035QEV-95WFoZiMCgOyzicKPuX46Y2GtIQDjDw2C~azjcCEovlK-63z8MK0BbGtQ__&Key-Pair-Id=K1P54FZWCHCL6J',
      },
      {
        key: 'RollingInTheDeep_Adele',
        name: 'Rolling in the Deep',
        artist: 'Adele',
        img: 'https://d1xzdqg8s8ggsr.cloudfront.net/66b5563cec3460195ab58552/05a5b043-225d-455c-b44f-a89344b534b9_1723160281486913931?Expires=-62135596800&Signature=fMus~CCh97Jc10SZ~X0-QAV16UJZtryD6foPMRPMdotl5Q~XeOxALSJfcSXk5rKu0JJI1R-7debemz1k1NFmcXDasQriKrFtGmvRIhxDsE5H2CV0p~ASjYnoD5BVZkY-AkFcdj-lY778JJp5S4Nype6zLyAQI4Li0Z04wrcFXVjeh8esAv8IK0q2F7kUvkk~0AbAUSXtyVw-qWd7Pmr5SosyXbRIx1PlEo9OTsYgsp1FFAYWKbye-XG0Wtn3p-ED-yFldVr52rsPE8k-0u96NpD6OXRsf6fIjVMGMa8ZicNK2TzLCZHViJoT1eI~77GIUkWgIU4uLCIai349p6k1ZA__&Key-Pair-Id=K1P54FZWCHCL6J',
      },
  ];

function SongCard() {
    return (
            <section className={styles.songRowItem}>
                <div className={styles.categoryTitleGroup}>
                  <div className={styles.categoryTitle}>
                    <AvatarIcon />
                    <CategoryTitle 
                      title="Quick picks" subtitle="START RADIO FROM A SONG">
                    </CategoryTitle>
                  </div>
                  <div className={styles.buttonGroup}>
                    <Button content="Play all"/>
                    <LeftRightIcon />
                  </div>
                </div>  
                <div className={styles.songPlayingParent}>
                    {CANCIONES.map((song) => {
                        return (
                            <Card key={song.key} title={song.name} subtitle= {song.artist} className={styles.songCard}>
                                <img
                                    className={styles.instanceChild}
                                    src={song.img}
                                />
                            </Card>                            
                        );
                    })}
                </div>
            </section>
    )
}

export default SongCard;