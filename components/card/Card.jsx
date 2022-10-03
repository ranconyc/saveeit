import Image from 'next/future/image';
import styles from './Card.module.css';

const Card = ({
  item: { url, id },
  cardIndex,
  colIndex,
  numOfChunks,
  numOfCol,
}) => {
  const action = () => {
    const result = `${
      cardIndex === 0
        ? cardIndex + 1 + colIndex
        : cardIndex > 1
        ? cardIndex + colIndex + (cardIndex * numOfCol - cardIndex + 1)
        : cardIndex + colIndex + cardIndex * numOfCol
    }`;

    return result;
  };

  return (
    <div className={styles.card}>
      <img src={url} alt={id} />
      <div
        className={styles.overly}
        id={url}
        onClick={(e) => {
          navigator.clipboard.writeText(e.target.id);
          navigator.clipboard.readText().then((e) => console.log('cb', e));
        }}
      >
        <h3>COPY</h3>
      </div>
    </div>
  );
};

export default Card;
