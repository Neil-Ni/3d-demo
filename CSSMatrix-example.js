// include https://github.com/camupod/CSSMatrix/blob/browserified/CSSMatrix.js

// create a matrix from a CSS matrix transform string
var matrix1 = new CSSMatrix('matrix(1, 2, 3, 4, 5, 6)');
var matrix2 = new CSSMatrix('matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)');

// create a matrix from matrix values
var matrix3 = new CSSMatrix(1, 2, 3, 4, 5, 6);
var matrix4 = new CSSMatrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

// toString() explicit
matrix3.toString();
// "matrix(1.000000, 2.000000, 3.000000, 4.000000, 5.000000, 6.000000)"

// implicit
matrix4 + '';
// "matrix3d(1.000000, 2.000000, 3.000000, 4.000000, 5.000000, 6.000000, 7.000000, 8.000000, 9.000000, 10.000000, 11.000000, 12.000000, 13.000000, 14.000000, 15.000000, 16.000000)"

// rotate the matrix x:30deg, y: 30deg, z: 90deg
var matrix5 = new CSSMatrix().rotate(20, 30, 90);

// translate x: 100, y: 200, z: 300
var matrix6 = new CSSMatrix().translate(100, 200, 300);

// scale x: 2, y: 2, z: 1
var matrix7 = new CSSMatrix().scale(2);

// scale x: 2, y: 3, z: 1
var matrix8 = new CSSMatrix().scale(2, 3);

// scale x: 2, y: 3, z: 4
var matrix9 = new CSSMatrix().scale(2, 3, 4);

// multiply two matrices (order matters!)
var matrix10 = matrix5.multiply(matrix9);