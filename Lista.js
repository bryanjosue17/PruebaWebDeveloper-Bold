  const arreglo = [
    12,
    11,
    9,
    10,
    25,
    [25],
    [9, 10, 11, 12],
    [27, 28, 28, 29, 30, 31],
    28,
    27,
    29,
    28,
    30,
    31,
  ];

  const getMaximunNumber = (list) => {
    for (var i = 0; i < list.length; i++) {
      for (var j = 0; j < list[i].length; j++) {
        console.log(list[i][j]);
      }
    }
  };

  getMaximunNumber(arreglo);
