import Status from "./Status";

/**
 * @typedef Square Ячейка
 * @property {number} x Координата X
 * @property {number} y Координата Y
 * @property {boolean} withBomb Есть бомба
 * @property {number} nearBombsCount Сколько рядом бомб
 * @property {boolean} isOpened Открыта ли
 * @property {boolean} isMarked Помечена ли
 */

/**
 * Логика игры "Сапер"
 */
export default class Logic {
  /**
   * Создать новое поле и сгенерировать бомбы на ней
   * @param {number} width Ширина
   * @param {number} height Высота
   * @param {number} bombsCount Количество бомб
   * @returns {Square[][]} Поле
   */
  static initBoard(width, height, bombsCount) {
    const board = Array(height).fill()
      .map((_, y) => Array(width).fill()
        .map((_, x) => ({
          x, y,
          withBomb: false,
          nearBombsCount: 0,
          isOpened: false,
          isMarked: false,
          })
        )
      )

    for (let i = 0; i < bombsCount; i++) {
      const x = Math.floor(Math.random() * width);
      const y = Math.floor(Math.random() * height);

      if (!board[y][x].withBomb)
        board[y][x].withBomb = true;
      else
        i--;
    }

    for (const row of board) {
      for (const square of row) {
        if (square.withBomb)
          continue;

        let count = 0;

        doWithNearSquares(board, square, sqr => {
          if (sqr.withBomb)
            count++;
        })

        if (count)
          square.nearBombsCount = count;
      }
    }

    Logic.logBoard(board);

    return board;
  }

  /**
   * Открыть ячейку и, по возможности,
   * все остальные рядом с ней, если они пустые.
   * @param {Square[][]} board Поле
   * @param {Square} square Выбранная ячейка
   * @returns {Square[][] | null} Новое поле
   */
  static openSquare(board, square) {
    if (square.isOpened)
      return null;

    board = board.map(row => row.map(sqr => sqr));
    square = board[square.y][square.x];

    openSquareRec(board, square);

    if (square.isOpened && square.withBomb)
      board.forEach(row => row.forEach(sqr => sqr.isOpened = true));

    return board;
  }

  /**
   * Поставить или снять метку на закрытую ячейку.
   * @param {Square[][]} board Поле
   * @param {Square} square Выбранная ячейка
   * @returns {Square[][] | null} Новое поле
   */
  static setMark(board, square) {
    if (square.isOpened)
      return null;

    board = board.map(row => row.map(sqr => sqr));
    square = board[square.y][square.x];

    square.isMarked = !square.isMarked;

    return board;
  }

  /**
   * Открыть соседние ячейки, если среди них нет бомб.
   * @param {Square[][]} board Поле
   * @param {Square} square Выбранная ячейка
   * @returns {Square[][] | null} Новое поле
   */
  static openNearSquares(board, square) {
    let closedCount = 0;
    let isBombsNear = false; 

    doWithNearSquares(board, square, sqr => {
      if (!sqr.isOpened && !sqr.isMarked)
        closedCount++;
      else
        return;

      if (sqr.withBomb)
        isBombsNear = true;
    });

    if (!closedCount || isBombsNear)
      return null;

    board = board.map(row => row.map(sqr => sqr));

    doWithNearSquares(board, square, sqr => {
      if (!sqr.isOpened && !sqr.isMarked)
        openSquareRec(board, sqr);
    });

    return board;
  }

  /**
   * Получить статус игры
   * @param {Square[][]} board Поле
   * @param {Square} square Выбранная ячейка
   * @returns {Status} Статус игры
   */
  static getStatus(board, square) {
    let isWin = true;

    for (const row of board) {
      for (const square of row) {
        if (!square.isOpened && !square.withBomb)
          isWin = false;
      }

      if (!isWin)
        break;
    }

    const isLose = square.isOpened && square.withBomb;

    return (
      isLose ? Status.lose :
      isWin  ? Status.win  :
      Status.running
    );
  }

  /**
   * Показать в консоли расположение бомб на поле.
   * @param {Square[][]} board Поле
   */
  static logBoard(board) {
    console.log(
      board.map(row => (
        row.map(square => {
          if (square.withBomb)
            return 'Q';

          if (square.nearBombsCount)
            return String(square.nearBombsCount);

          return ' ';
        })
      ))
    );
  }
}

/**
 * С помощью рекурсии открыть все пустые ячейки
 * от выбранной до ячеек с количеством рядом находящихся бомб.
 * @param {Square[][]} board Поле
 * @param {Square} square Выбранная ячейка
 */
function openSquareRec(board, square) {
  if (square.isOpened || square.isMarked)
    return;

  square.isOpened = true;

  if (square.withBomb || square.nearBombsCount)
    return;

  doWithNearSquares(board, square, sqr => (
    openSquareRec(board, sqr)
  ));
};

/**
 * @callback NearSquareCallback
 * @param {Square} square Выбранная ячейка
 */

/**
 * Сделать что-то с ближайшими от выбранной ячейками 
 * @param {Square[][]} board Поле
 * @param {Square} square Выбранная ячейка
 * @param {NearSquareCallback} callback Колбэк
 */
function doWithNearSquares(board, square, callback) {
  const { x, y } = square;

  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (!(board[y + dy] && board[y + dy][x + dx]))
        continue;

      const sqr = board[y + dy][x + dx];

      if (sqr.x === x && sqr.y === y)
        continue;

      callback(sqr);
    }
  }
}
