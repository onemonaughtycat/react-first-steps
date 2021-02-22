import Hello from './Hello';
import Fox from './Fox';
import Minesweeper from './Minesweeper';

const pages = {
  'Hello': Hello,
  'Fox': Fox,
  'Minesweeper': Minesweeper,
};

const ids = Object.keys(pages);

export { pages, ids };
