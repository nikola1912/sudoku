export default (array, rowSize) => {
    return array.reduce((rows, key, index) => (index % rowSize === 0 ? 
        rows.push([key]) :
        rows[rows.length-1].push(key)) && rows, []);
}