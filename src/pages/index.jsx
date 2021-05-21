import Head from "next/head";
import Image from "next/image";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [foo, setFoo] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(false);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にして下さい");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{foo}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : " 表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <Main page="index" />
      <Footer />
    </div>
  );
}
