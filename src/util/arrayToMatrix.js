export default (array, rowSize) =>
  array.reduce(
    (rows, key, index) =>
      (index % rowSize === 0
        ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows,
    []
  )
