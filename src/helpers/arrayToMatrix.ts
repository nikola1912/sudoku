const arrayToMatrix = (array: any[], rowLength: number) => {
  return array.reduce(
    (rows, value, index) =>
      (index % rowLength === 0
        ? rows.push([value])
        : rows[rows.length - 1].push(value)) && rows,
    []
  )
}

export { arrayToMatrix }
