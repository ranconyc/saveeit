import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Header from '../components/layout/header/Header';
import Grid from '../components/layout/grid/Grid';
import { itemsArray, moreItems } from './data';

function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

export default function Home() {
  const [numOfCol, setNumOfCol] = useState(4);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [gap, setGap] = useState(0.5);

  const [items, setItems] = useState(
    sliceIntoChunks(itemsArray, Math.ceil(itemsArray.length / numOfCol))
  );

  console.log('col', numOfCol);

  const rechunkItems = (col) =>
    setItems(sliceIntoChunks(itemsArray, Math.ceil(itemsArray.length / col)));

  const handleColumnsChange = (e) => {
    console.log('input>', e.target.value);
    setNumOfCol(e.target.value);
    rechunkItems(e.target.value);
  };
  // const handleClick = () => {
  //   setItems((prevItems) => {
  //     const allItems = itemsArray.concat(moreItems);
  //     console.log("all", allItems);
  //     return sliceIntoChunks(
  //       allItems,
  //       Math.ceil((itemsArray.length + moreItems.length) / numOfCol)
  //     );
  //   });
  // };

  return (
    <div
      className="container"
      style={{
        background: isDarkMode ? `#111010` : `#ebebeb`,
        color: isDarkMode ? `#000` : `#fff`,
      }}
    >
      <Head>
        <title>Savee.it clone</title>
        <meta
          name="description"
          content="Save inspirations from around the web"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        numOfCol={numOfCol}
        setGap={setGap}
        setNumOfCol={setNumOfCol}
        gap={gap}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        handleColumnsChange={handleColumnsChange}
      />
      <Grid numOfCol={numOfCol} gap={gap} items={items} />
      {/* <button onClick={handleClick}>more</button> */}
    </div>
  );
}
