import Hello from './Hello';
import Fox from './Fox';
import Mineswepper from './Mineswepper';

const pages = {
  'Hello': Hello,
  'Fox': Fox,
  'Mineswepper': Mineswepper,
};

const ids = Object.keys(pages);

export { pages, ids };
