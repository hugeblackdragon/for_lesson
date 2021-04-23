// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json({
    code:200,
    album:{
      img:"images/1.jpg",
      name:"Monster Hunter: World origin soundtrack",
      av_img:"images/2.jpg",
      year:"2018  .", 
      time:"12mins 56s ." ,
      song_account:"83",
       av_name:"Capcom Sound Team",
    },
    data:[
      {
        img:"images/1.jpg",
        name:"星に駆られて" ,
        avatar:"牧野忠義", 
        time:"4:31",
        music:"musics/1.mp3",
        index:0,
      },
        {
          img:"images/1.jpg",
          name:"名もなき狩人の矜持" ,
        avatar:"牧野忠義", 
        time:"4:25",
        music:"musics/2.mp3",
        index:1,
        },
    ]
    ,
  })
}
