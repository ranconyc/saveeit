import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/layout/header/Header';
import Grid from '../components/layout/grid/Grid';
import { itemsArray, moreItems } from '../data/data';
import { useAppContext } from '../context/AppContext';

// export async function getServerSideProps({ req, res }) {
//   const origin = req.headers.host;
//   const { itemsArray } = await fetch(`https://${origin}/api/images`).then(
//     (res) => res.json()
//   );

//   return { props: { itemsArray } };
// }

export default function Home() {
  const [{ isDarkMode }] = useAppContext();

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
      <Header />
      <Grid />
      {/* <button onClick={handleClick}>more</button> */}
    </div>
  );
}

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
