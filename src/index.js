
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  
  if (Array.isArray(matrix)) {
    for (let i = 0; i<matrix.length; i++){
      if (i == 0) {
        result = result.concat(matrix[i]);
      } else if (i % 2 !== 0) {
        result = result.concat((matrix[i]).reverse());
      } else result = result.concat(matrix[i]);
    }
    return result;
  } else if (matrix === undefined) {
    return [];
  }
  return [];
};
