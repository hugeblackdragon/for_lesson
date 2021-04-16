import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout"
import Info from "../components/info"
import { render } from "react-dom";

export default function Home() {
  const [state, setState] = useState({
    list: [],
  });

  useEffect(() => {
    fetch("/api/news").then(async (res) => {
      const resp = await res.json();
      setState({
        list: resp.data,
      });
    });
  }, []);


  {/*最后要实现就是<News props></News>*/}
  return (
    <Layout>
        {state.list.map((i) => {
          return (
            <Info name={i.name} content={i.content} has_img={i.has_img} img_src={i.img_src}></Info>
          );
        })}
    </Layout>
  );
}