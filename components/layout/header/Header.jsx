import { useEffect, useState } from 'react';
import Input from '../../input/Input';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Header = ({
  numOfCol,
  setGap,
  setNumOfCol,
  gap,
  isDarkMode,
  setIsDarkMode,
  handleColumnsChange,
}) => {
  const [prevSt, setPrevSt] = useState(0);
  const [scrolled, setScrolled] = useState(false);

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
        position: scrolled && 'fixed',
        // top: scrolled ? 0 : 'auto',
      }}
    >
      <h1>LOOOGO</h1>
      <div className="inputs">
        <Input
          label="columns"
          type="range"
          min="1"
          max="6"
          value={numOfCol}
          onChange={handleColumnsChange}
        />
        <Input
          label="gap"
          type="range"
          min="0"
          step=".5"
          max="1.5"
          value={gap}
          onChange={(e) => setGap(e.target.value)}
        />
        <div
          className="mode-container"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <MdDarkMode /> : <MdLightMode />}
        </div>
      </div>
    </header>
  );
};
export default Header;
