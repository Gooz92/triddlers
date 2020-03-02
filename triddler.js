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
  ]
]

function calculateRestSides(sides) {
  const [ a, b, c, d ] = sides;
  return [
    ...sides,
    a + b - d
  ];
}

function drawBorders(ctx, x0, y0, cellSize, sides) {

  const sidesPx = calculateRestSides(sides).map(s => s * cellSize);

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
}

function calculateGridEnds(vertexes, cellSize, sides) {
  
  const gridEnds = [];

  sides.forEach((side, index) => {
    const v = vertexes[index];
    const 
    for (let i = 0; i < side; i++) {
      
    }
  });
}

drawBorders(ctx, 250, 250, 40, [ 2, 3, 2, 3 ]);
