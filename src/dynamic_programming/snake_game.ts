export interface Result {
  cols: number[];
  rows: number[];
}

export function snakeGame(board: string[][]): Result {
  const result: Result = {
    cols: [],
    rows: [],
  };

  const rows: Map<number, number> = new Map();
  const columns: Map<number, number> = new Map();

  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[row].length; column++) {
      const currentCell = board[row][column] === '0' ? 0 : 1;
      rows.set(row, (rows.get(row) ?? 0) + currentCell);
      columns.set(column, (columns.get(column) ?? 0) + currentCell);
    }
  }

  columns.forEach((value, key) => {
    if (value === 0) {
      result.cols.push(key);
    }
  });

  rows.forEach((value, key) => {
    if (value === 0) {
      result.rows.push(key);
    }
  });

  return result;
}
