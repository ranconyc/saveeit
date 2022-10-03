import Card from '../../card/Card';
import styles from './Grid.module.css';

const Grid = ({ items, gap, numOfCol }) => {
  console.log(items);
  return (
    <div
      className={styles.gridContainer}
      style={{
        padding: `${gap * 3}vw`,
        gap: `${gap * 3}vw`,
        gridTemplateColumns: `repeat(${numOfCol}, 1fr)`,
      }}
    >
      {items.map((chunk, colIndex) => {
        return (
          <div
            className={styles.col}
            key={`$col-${colIndex + 1}`}
            style={{ gap: `${gap * 3}vw` }}
          >
            {chunk.map((item, index) => (
              <Card
                key={item.url}
                item={item}
                cardIndex={index}
                colIndex={colIndex}
                numOfChunks={chunk.length}
                numOfCol={numOfCol}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
