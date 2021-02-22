import Status from "./Status";

/**
 * @typedef BoardState Состояние поля
 * @property {number} x Координата X
 * @property {number} y Координата Y
 * @property {boolean} withBomb Ячейка с бомбой
 * @property {number} nearBombsCount Количество бомб рядом с ячейкой
 * @property {boolean} isOpened Ячейка открыта
 * @property {boolean} isMarked Ячейка помечена на возможное наличие бомбы
 * @property {boolean} isHelper
 */

/**
 * Логика игры "Сапер"
 */
export default class Logic {
  /**
   * Сгенерировать начальное состояние поля
   * @param {number} width Ширина поля
   * @param {number} height Высота поля
   * @param {number} bombsCount Количество бомб на поле
   * @returns {BoardState[][]} Состояние поля
   */
  static initBoard(width, height, bombsCount) {
    /* Расставляем бомбы. */

    const bombs = [];
    const isBomb = (x, y) => bombs.filter(bomb => bomb.x === x && bomb.y === y).length;

    for (let i = 0; i < bombsCount; i++) {
      const x = Math.floor(Math.random() * width);
      const y = Math.floor(Math.random() * height);

      if (isBomb(x, y))
        i--;
      else
        bombs.push({ x, y });
    }

    /* Помечаем для каждой ячейки сколько рядом с ней находится бомб. */

    const nearBombs = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (isBomb(x, y)) continue;

        let count = 0;

        for (let dy = -1; dy <= 1; dy++)
          for (let dx = -1; dx <= 1; dx++)
            if (isBomb(x - dx, y - dy))
              count++;

        if (count)
          nearBombs.push({ x, y, count });
      }
    }

    /* Создаем поле. */

    const board = Array(height).fill()
      .map((_, y) => Array(width).fill()
        .map((_, x) => {
          const filtered = nearBombs.filter(cell => cell.x === x && cell.y === y);

          return {
            x, y,
            withBomb: Boolean(isBomb(x, y)),
            nearBombsCount: filtered.length ? filtered[0].count : 0,
            isOpened: false,
            isMarked: false,
          };
        })
      );

    console.log(Logic.logBoard(board));

    return board;
  }

  /**
   * @typedef ReturnObject
   * @property {BoardState[][]} board Состояние поля
   * @property {Status} status Статус игры
   */

  /**
   * Открыть ячейку и, по возможности, все остальные рядом с ней, если они пустые.
   * @param {BoardState[][]} boardState Последнее состояние поля
   * @param {BoardState} currSquare Выбранная ячейка
   * @returns {ReturnObject} Новое состояние поля и статус игры
   */
  static openSquare(boardState, currSquare) {
    const board = boardState.map(row => row.map(sqr => sqr));
    const square = board[currSquare.y][currSquare.x];

    openSquareRec(board, square);

    const status = Logic.getStatus(board, square);

    if (status === Status.IsLose)
      board.forEach(row => row.forEach(sqr => sqr.isOpened = true));

    return { board, status };
  }

  /**
   * Поставить или снять метку на закрытую ячейку ("!" или "?").
   * @param {BoardState[][]} boardState Последнее состояние поля
   * @param {BoardState} currSquare Выбранная ячейка
   * @returns {ReturnObject} Новое состояние поля
   */
  static setMark(boardState, currSquare) {
    if (currSquare.isOpened)
      return boardState;

    const board = boardState.map(row => row.map(sqr => sqr));
    const square = board[currSquare.y][currSquare.x];

    square.isMarked = !currSquare.isMarked;

    return { board, status: Logic.getStatus(board, square) };
  }

  /**
   * Открыть соседние ячейки, если среди них нет бомб.
   * @param {BoardState[][]} boardState Последнее состояние поля
   * @param {BoardState} currSquare Выбранная ячейка
   * @returns {ReturnObject} Новое состояние поля
   */
  static tryOpenNearSquares(boardState, currSquare) {
    let isBombsNear = false; 

    doWithNearSquares(boardState, currSquare, square => {
      if (isBombsNear) return;

      if (square.isOpened || square.isMarked) return;

      if (square.withBomb)
        isBombsNear = true;
    });

    if (isBombsNear)
      return { board: boardState, status: Logic.getStatus(boardState, currSquare) };

    const board = boardState.map(row => row.map(sqr => sqr));

    doWithNearSquares(board, currSquare, square => {
      if (square.isOpened || square.isMarked) return;

      square.isOpened = true;
    });

    return { board, status: Logic.getStatus(board, currSquare) };
  }

  /**
   * Получить статус игры
   * @param {BoardState[][]} boardState Последнее состояние поля
   * @param {BoardState} currSquare Выбранная ячейка
   * @returns {Status} Статус игры
   */
  static getStatus(boardState, currSquare) {
    let isWin = true;

    for (const row of boardState) {
      for (const square of row)
        if (square.withBomb && !square.isMarked)
          isWin = false;

      if (!isWin)
        break;
    }

    const isLose = currSquare.isOpened && currSquare.withBomb;

    return isLose ? Status.IsLose : isWin ? Status.IsWin : 0;
  }

  /**
   * Показать в консоли расположение бомб на поле.
   * @param {BoardState[][]} boardState Состояние поля
   */
  static logBoard(boardState) {
    console.log(
      boardState.map(row => (
        row.map(square => (
          square.withBomb ? 'Q' : square.nearBombsCount ? square.nearBombsCount + '' : ' '
        ))
      ))
    );
  }
}

/**
 * С помощью рекурсии открыть все пустые ячейки от выбранной до ячеек с количеством рядом находящихся бомб.
 * @param {BoardState[][]} boardState Состояние поля
 * @param {BoardState} currSquare Выбранная ячейка
 */
function openSquareRec(boardState, currSquare) {
  if (currSquare.isOpened || currSquare.isMarked)
    return;

  currSquare.isOpened = true;

  if (currSquare.withBomb || currSquare.nearBombsCount)
    return;

  doWithNearSquares(boardState, currSquare, square => openSquareRec(boardState, square));
};

/**
 * @callback nearSquareCallback
 * @param {BoardState} square Выбранная ячейка
 */

/**
 * Сделать что-то с ближайшими от выбранной ячейками 
 * @param {BoardState[][]} boardState Состояние поля
 * @param {BoardState} currSquare Выбранная ячейка
 * @param {nearSquareCallback} callback Колбэк
 */
function doWithNearSquares(boardState, currSquare, callback) {
  const x = currSquare.x;
  const y = currSquare.y;

  for (let dy = -1; dy <= 1; dy++)
    for (let dx = -1; dx <= 1; dx++) {
      if (!(boardState[y + dy] && boardState[y + dy][x + dx])) continue;

      const square = boardState[y + dy][x + dx];

      if (!square) continue;
      if (square.x === x && square.y === y) continue;

      callback(square);
    }
}
