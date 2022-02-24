
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  matrix.map((item, index) => index % 2 !== 0 ? item.reverse() : item)

  return [].concat(...matrix);
}
