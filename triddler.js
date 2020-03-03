const canvas = document.getElementById('canv'),
  ctx = canvas.getContext('2d');


const sin60 = Math.sqrt(3) / 2;

const path = [
  [
    a => - a / 2,
    a => - sin60 * a
  ],
  [
    a => a / 2,
    a => - sin60 * a
  ],
  [
    a => a,
    a => 0
  
  ],
  [
    a => a / 2,
    a => sin60 * a
  ],
  [
    a => - a / 2,
    a => sin60 * a
  ],
  [
    a => -a,
    a => 0,
  ]
]

function calculateRestSides(sides) {
  const [ a, b, c, d ] = sides;
  return [
    ...sides,
    a + b - d,
    d
  ];
}

function drawBorders(ctx, x0, y0, cellSize, sides) {

  const allSides = calculateRestSides(sides);
  const sidesPx = allSides.map(s => s * cellSize);

  ctx.moveTo(x0, y0);

  let x = x0, y = y0;

  const vpx = [ [ x0, y0] ];

  path.forEach(([ nextDx, nextDy ], index) => {
    const side = sidesPx[index];

    x += nextDx(side);
    y += nextDy(side);
    ctx.lineTo(x, y);

    vpx.push([ x, y ]);
  });

  ctx.closePath();

  ctx.stroke();

  const gridEnds = calculateGridEnds(vpx, cellSize, allSides);

  gridEnds.forEach(([ xe, ye ]) => {
    ctx.beginPath();
    ctx.arc(xe, ye, 2, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.stroke();
  });
}

function drawGrid(sides, gridEnds) {
  
}

function calculateGridEnds(vertexes, cellSize, sides) {
  
  const gridEnds = [];

  sides.forEach((side, index) => {
    const v = vertexes[index];
    let [ x, y ] = v;
    for (let i = 0; i < side; i++) {
      x += path[index][0](cellSize);
      y += path[index][1](cellSize);

      gridEnds.push([ x, y ]);
    }
  });

  return gridEnds;
}

drawBorders(ctx, 250, 250, 40, [ 1, 4, 1, 4 ]);
