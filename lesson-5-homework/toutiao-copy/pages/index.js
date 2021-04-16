import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout"
import Info from "../components/info"

export default function Home() {
  const [state, setState] = useState({
    list: [],
  });

  const [num,setNum] = useState(6);

  function scb(){
    let st = Math.max(document.documentElement.scrollTop,document.body.scrollTop);
    let ch = document.documentElement.clientHeight
    let sh = Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
    if(st + ch +2>sh) {
        setNum(num+10);
        console.log(num)
           //这里进行修改成请求数据
        }
    }
  


  useEffect(
    () => {
    window.addEventListener("scroll",scb);
    fetch("/api/news").then(async (res) => {
      const resp = await res.json();
      setState({
        list: resp.data,
      });
    });
    return () =>{ 
    window.removeEventListener("scroll",scb);
    };
  }
  );
  

  {/*最后要实现就是<News props></News>*/}
  return (
    <Layout>
        {state.list.slice(0,num).map((i) => {
          return (
            <Info name={i.name} 
            content={i.content} 
            has_img={i.has_img} 
            img_src={i.img_src}
            author={i.author}
            comment_amount={i.comment_amount}
            time={i.time}
            ></Info>
          );
        })}
    </Layout>
  );
}