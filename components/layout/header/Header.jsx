import { useEffect, useState } from 'react';
import Input from '../../input/Input';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import {
  handleColumnsChange,
  sliceIntoChunks,
  useAppContext,
} from '../../../context/AppContext';
import { itemsArray } from '../../../data/data';

const Header = () => {
  const [prevSt, setPrevSt] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [{ columns, gap, isDarkMode }, dispatch] = useAppContext();

  const rechunkItems = (col) =>
    dispatch({
      type: 'SET_ITEMS',
      payload: sliceIntoChunks(itemsArray, Math.ceil(itemsArray.length / col)),
    });

  const handleColumnsChange = (e) => {
    dispatch({ type: 'SET_COLUMNS', payload: e.target.value });
    rechunkItems(e.target.value);
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  useEffect(() => {
    const handleScroll = (e) => {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      console.log('scroll direction>', st > prevSt ? 'down' : 'up');
      console.log('y', st);
      st > prevSt ? setScrolled(false) : setScrolled(true);
      setPrevSt(st <= 0 ? 0 : st); // For Mobile or negative scrolling
    };

    document.addEventListener('scroll', handleScroll, false);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [prevSt]);

  return (
    <header
      style={{
        position: scrolled ? 'fixed' : 'inline-block',
      }}
    >
      <h1>LOOOGO</h1>
      <div className="inputs">
        <Input
          label="columns"
          type="range"
          min="1"
          max="6"
          value={columns}
          onChange={handleColumnsChange}
        />
        <Input
          label="gap"
          type="range"
          min="0"
          step=".5"
          max="1.5"
          value={gap}
          onChange={(e) =>
            dispatch({ type: 'SET_GAP', payload: e.target.value })
          }
        />
        <div
          className="mode-container"
          onClick={(e) => dispatch({ type: 'TOGGLE_DARK_MODE' })}
        >
          {isDarkMode ? <MdDarkMode /> : <MdLightMode />}
        </div>
      </div>
    </header>
  );
};
export default Header;
