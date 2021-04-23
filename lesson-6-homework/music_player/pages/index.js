import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Tool from '../components/tool.js'
import Mhead from '../components/mhead.js'
import Song from '../components/song.js'
import Footer from '../components/footer.js'
import { useEffect, useState } from 'react'

var num=1;

function change(e){
  num = e;
}

function click(){
  if(num==0){
    num=1;
  }
  else{
    num = num-1;
  }
}

function add(){
  if(num==1){
    num=0;
  }
  else{
    num =num +1;
  }
}

function play(){
  
  var play = document.getElementById('music');
  var pic = document.getElementById('pic');
  if(play.paused)                     {                 
    play.play();//audio.play();// 这个就是播放 
    pic.src="https://img.icons8.com/ios/50/ffffff/circled-pause";
  }else{
  play.pause();// 这个就是暂停
  pic.src="https://img.icons8.com/ios/50/ffffff/circled-play--v1.png";
  }
}

export default function Home() {

  const[state,setState] =useState({
    album:{},
    list:[],
    footer:{},
  })
  

useEffect(
  () =>{
    fetch("/api/hello").then(async (res) =>{
      const resp = await res.json();
      setState({
        album:resp.album,
        list:resp.data,
        footer:resp.data[num],
      });
    });
  }
)

  return (
    <body className={styles.body}>
    <main className={styles.main}>
      <Head>
        <title>Music Player</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <aside className={styles.aside}>
        <Tool></Tool>
      </aside>
      <div className={styles.content}>
        <Mhead img={state.album.img} name={state.album.name} av_img={state.album.av_img}
        year={state.album.year} time={state.album.time} song_account={state.album.song_account} av_name={state.album.av_name}
        ></Mhead>
           <ul>
           {state.list.map((i) => {
          return (
            <li onClick={()=>change(i.index)}>
            <Song name={i.name} 
            name={i.name}
            avatar = {i.avatar}
            time = {i.time}
            ></Song>
            </li>
          );
        })}
           </ul>
      </div>
      <Footer name={state.footer.name} img={state.footer.img} avatar={state.footer.avatar}>
        
      <a onClick={click}><img src="https://img.icons8.com/ios/50/ffffff/rewind-button-round--v2.png"/></a>
            <a onClick={play}><img id="pic" src="https://img.icons8.com/ios/50/ffffff/circled-pause"/></a>
            <a onClick={add}><img src="https://img.icons8.com/ios/50/ffffff/fast-forward-round--v2.png"/></a>
            <a><img src="https://img.icons8.com/ios/50/ffffff/high-volume--v1.png" className={styles.hide} /></a>
            <a><img src="https://img.icons8.com/ios/50/ffffff/shuffle.png" className={styles.hide} /></a>
        </Footer>
        <audio id="music" src={state.footer.music} autoPlay></audio>

      </main>
    </body>
  )
}
