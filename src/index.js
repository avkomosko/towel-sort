// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result =[];
    let arr =[];
    if (arguments.length !== 0 && matrix.length !== 0) {
        for (let i=0; i< matrix.length; i++){
            if (i % 2 === 0 ) {
                arr.push(matrix[i].sort((a,b)=> a-b));
            } else {
                arr.push(matrix[i].sort((a,b)=> b-a));
            }
            result =  result.concat(arr[i]);
        }
    }
    return result;
};
