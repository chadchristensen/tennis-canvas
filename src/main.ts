import { intersect } from 'mathjs';

document.addEventListener('DOMContentLoaded', function () {


  const BACKGROUND_COLOR = '#7046A7';
  const COURT_COLOR = '#5A9160';
  const LINE_COLOR = '#ffffff';
  const BALL_COLOR = '#d5e414';
  const POST_COLOR = '#C1A752';
  const BALL_SHADOW_COLOR = '#595e00';
  const NET_COLOR = '#222222';
  const COURT_LINE_WIDTH = 5;

  const CANVAS_WIDTH = window.innerWidth;
  const CANVAS_HEIGHT = window.innerHeight;

  let canvas = document.getElementById('tennis-court')!;

  if (canvas instanceof HTMLCanvasElement) {
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    let ctx = canvas.getContext('2d')!;

    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const TOP_HORIZON_Y = 200;
    const BOTTOM_HORIZON_Y = 500;

    const horizontalLinePoints = {
      leftTopCourt: { x: 20, y: TOP_HORIZON_Y },
      rightTopCourt: { x: CANVAS_WIDTH - 40, y: TOP_HORIZON_Y },
      leftBottomCourt: { x: 20, y: BOTTOM_HORIZON_Y },
      rightBottomCourt: { x: CANVAS_WIDTH - 40, y: BOTTOM_HORIZON_Y },
      leftTopBaseline: { x: 20, y: TOP_HORIZON_Y + 40 },
      rightTopBaseline: { x: CANVAS_WIDTH - 40, y: TOP_HORIZON_Y + 40 },
      leftBottomBaseline: { x: 20, y: BOTTOM_HORIZON_Y - 100 },
      rightBottomBaseline: { x: CANVAS_WIDTH - 40, y: BOTTOM_HORIZON_Y - 100 },
    }

    const verticalLinePoints: { [key: string]: { x: number; y: number; } } = {
      topPerspective: { x: CANVAS_WIDTH * .5, y: -300 },
      leftCourt: { x: CANVAS_WIDTH * .25, y: CANVAS_HEIGHT - 40 },
      rightCourt: { x: CANVAS_WIDTH * .75, y: CANVAS_HEIGHT - 40 },
      leftInnerBaseline: { x: CANVAS_WIDTH * .25 + 125, y: CANVAS_HEIGHT - 40 },
      rightInnerBaseline: { x: CANVAS_WIDTH * .75 - 125, y: CANVAS_HEIGHT - 40 },
      centerLine: { x: CANVAS_WIDTH * .5, y: CANVAS_HEIGHT - 40 },
    }

    // const points = [...Object.values(horizontalLinePoints), ...Object.values(verticalLinePoints)];

    // for (let i = 0; i < points.length; i++) {
    //   ctx.beginPath();
    //   ctx.arc(points[i].x, points[i].y, 4, 0, 2 * Math.PI);
    //   ctx.fillStyle = '#000000';
    //   ctx.fill();
    //   ctx.closePath();
    // }

    // * Calculate the intersection points of the lines 

    const topLeftPoint = intersect(
      [verticalLinePoints.topPerspective.x, verticalLinePoints.topPerspective.y],
      [verticalLinePoints.leftCourt.x, verticalLinePoints.leftCourt.y],
      [horizontalLinePoints.leftTopCourt.x, horizontalLinePoints.leftTopCourt.y],
      [horizontalLinePoints.rightTopCourt.x, horizontalLinePoints.rightTopCourt.y]
    );

    const topRightPoint = intersect(
      [verticalLinePoints.topPerspective.x, verticalLinePoints.topPerspective.y],
      [verticalLinePoints.rightCourt.x, verticalLinePoints.rightCourt.y],
      [horizontalLinePoints.leftTopCourt.x, horizontalLinePoints.leftTopCourt.y],
      [horizontalLinePoints.rightTopCourt.x, horizontalLinePoints.rightTopCourt.y]
    );

    const bottomLeftPoint = intersect(
      [verticalLinePoints.topPerspective.x, verticalLinePoints.topPerspective.y],
      [verticalLinePoints.leftCourt.x, verticalLinePoints.leftCourt.y],
      [horizontalLinePoints.leftBottomCourt.x, horizontalLinePoints.leftBottomCourt.y],
      [horizontalLinePoints.rightBottomCourt.x, horizontalLinePoints.rightBottomCourt.y]
    );

    const bottomRightPoint = intersect(
      [verticalLinePoints.topPerspective.x, verticalLinePoints.topPerspective.y],
      [verticalLinePoints.rightCourt.x, verticalLinePoints.rightCourt.y],
      [horizontalLinePoints.leftBottomCourt.x, horizontalLinePoints.leftBottomCourt.y],
      [horizontalLinePoints.rightBottomCourt.x, horizontalLinePoints.rightBottomCourt.y]
    );

    const topLeftBaselinePoint = intersect(
      [verticalLinePoints.topPerspective.x, verticalLinePoints.topPerspective.y],
      [verticalLinePoints.leftInnerBaseline.x, verticalLinePoints.leftInnerBaseline.y],
      [horizontalLinePoints.leftTopCourt.x, horizontalLinePoints.leftTopCourt.y],
      [horizontalLinePoints.rightTopCourt.x, horizontalLinePoints.rightTopCourt.y]
    )

    const bottomLeftBaselinePoint = intersect(
      [verticalLinePoints.topPerspective.x, verticalLinePoints.topPerspective.y],
      [verticalLinePoints.leftInnerBaseline.x, verticalLinePoints.leftInnerBaseline.y],
      [horizontalLinePoints.leftBottomCourt.x, horizontalLinePoints.leftBottomCourt.y],
      [horizontalLinePoints.rightBottomCourt.x, horizontalLinePoints.rightBottomCourt.y]
    )

    const topRightBaselinePoint = intersect(
      [verticalLinePoints.topPerspective.x, verticalLinePoints.topPerspective.y],
      [verticalLinePoints.rightInnerBaseline.x, verticalLinePoints.rightInnerBaseline.y],
      [horizontalLinePoints.leftTopCourt.x, horizontalLinePoints.leftTopCourt.y],
      [horizontalLinePoints.rightTopCourt.x, horizontalLinePoints.rightTopCourt.y]
    )

    const bottomRightBaselinePoint = intersect(
      [verticalLinePoints.topPerspective.x, verticalLinePoints.topPerspective.y],
      [verticalLinePoints.rightInnerBaseline.x, verticalLinePoints.rightInnerBaseline.y],
      [horizontalLinePoints.leftBottomCourt.x, horizontalLinePoints.leftBottomCourt.y],
      [horizontalLinePoints.rightBottomCourt.x, horizontalLinePoints.rightBottomCourt.y]
    )

    const innerTopLeftPoint = intersect(
      [verticalLinePoints.topPerspective.x, verticalLinePoints.topPerspective.y],
      [verticalLinePoints.leftInnerBaseline.x, verticalLinePoints.leftInnerBaseline.y],
      [horizontalLinePoints.leftTopBaseline.x, horizontalLinePoints.leftTopBaseline.y],
      [horizontalLinePoints.rightTopBaseline.x, horizontalLinePoints.rightTopBaseline.y]
    );

    const innerTopRightPoint = intersect(
      [verticalLinePoints.topPerspective.x, verticalLinePoints.topPerspective.y],
      [verticalLinePoints.rightInnerBaseline.x, verticalLinePoints.rightInnerBaseline.y],
      [horizontalLinePoints.leftTopBaseline.x, horizontalLinePoints.leftTopBaseline.y],
      [horizontalLinePoints.rightTopBaseline.x, horizontalLinePoints.rightTopBaseline.y]
    );

    const innerBottomRightPoint = intersect(
      [verticalLinePoints.topPerspective.x, verticalLinePoints.topPerspective.y],
      [verticalLinePoints.rightInnerBaseline.x, verticalLinePoints.rightInnerBaseline.y],
      [horizontalLinePoints.leftBottomBaseline.x, horizontalLinePoints.leftBottomBaseline.y],
      [horizontalLinePoints.rightBottomBaseline.x, horizontalLinePoints.rightBottomBaseline.y]
    );

    const innerBottomLeftPoint = intersect(
      [verticalLinePoints.topPerspective.x, verticalLinePoints.topPerspective.y],
      [verticalLinePoints.leftInnerBaseline.x, verticalLinePoints.leftInnerBaseline.y],
      [horizontalLinePoints.leftBottomBaseline.x, horizontalLinePoints.leftBottomBaseline.y],
      [horizontalLinePoints.rightBottomBaseline.x, horizontalLinePoints.rightBottomBaseline.y]
    );

    const topCenterLinePoint = intersect(
      [verticalLinePoints.topPerspective.x, verticalLinePoints.topPerspective.y],
      [verticalLinePoints.centerLine.x, verticalLinePoints.centerLine.y],
      [horizontalLinePoints.leftTopBaseline.x, horizontalLinePoints.leftTopBaseline.y],
      [horizontalLinePoints.rightTopBaseline.x, horizontalLinePoints.rightTopBaseline.y]
    );

    const bottomCenterLinePoint = intersect(
      [verticalLinePoints.topPerspective.x, verticalLinePoints.topPerspective.y],
      [verticalLinePoints.centerLine.x, verticalLinePoints.centerLine.y],
      [horizontalLinePoints.leftBottomBaseline.x, horizontalLinePoints.leftBottomBaseline.y],
      [horizontalLinePoints.rightBottomBaseline.x, horizontalLinePoints.rightBottomBaseline.y]
    );

    // Draw court
    function drawCountOutline() {
      ctx.beginPath();
      ctx.moveTo(Math.floor(topLeftPoint[0] as number), Math.floor(topLeftPoint[1] as number));
      ctx.lineTo(Math.floor(topRightPoint[0] as number), Math.floor(topRightPoint[1] as number));
      ctx.lineTo(Math.floor(bottomRightPoint[0] as number), Math.floor(bottomRightPoint[1] as number));
      ctx.lineTo(Math.floor(bottomLeftPoint[0] as number), Math.floor(bottomLeftPoint[1] as number));
      ctx.closePath();
      ctx.fillStyle = COURT_COLOR;
      ctx.fill();
      ctx.lineWidth = COURT_LINE_WIDTH;
      ctx.strokeStyle = LINE_COLOR;
      ctx.stroke();
    }

    function drawLeftBaseline() {
      ctx.beginPath();
      ctx.moveTo(Math.floor(topLeftBaselinePoint[0] as number), Math.floor(topLeftBaselinePoint[1] as number));
      ctx.lineTo(Math.floor(bottomLeftBaselinePoint[0] as number), Math.floor(bottomLeftBaselinePoint[1] as number));
      ctx.lineWidth = COURT_LINE_WIDTH;
      ctx.strokeStyle = LINE_COLOR;
      ctx.stroke();
    }

    function drawRightBaseline() {
      ctx.beginPath();
      ctx.moveTo(Math.floor(topRightBaselinePoint[0] as number), Math.floor(topRightBaselinePoint[1] as number));
      ctx.lineTo(Math.floor(bottomRightBaselinePoint[0] as number), Math.floor(bottomRightBaselinePoint[1] as number));
      ctx.lineWidth = COURT_LINE_WIDTH;
      ctx.strokeStyle = LINE_COLOR;
      ctx.stroke();
    }

    function drawInnerCourtLines() {
      ctx.beginPath();
      ctx.moveTo(Math.floor(innerTopLeftPoint[0] as number), Math.floor(innerTopLeftPoint[1] as number));
      ctx.lineTo(Math.floor(innerTopRightPoint[0] as number), Math.floor(innerTopRightPoint[1] as number));
      ctx.lineTo(Math.floor(innerBottomRightPoint[0] as number), Math.floor(innerBottomRightPoint[1] as number));
      ctx.lineTo(Math.floor(innerBottomLeftPoint[0] as number), Math.floor(innerBottomLeftPoint[1] as number));
      ctx.closePath();
      ctx.lineWidth = COURT_LINE_WIDTH;
      ctx.strokeStyle = LINE_COLOR;
      ctx.stroke();
    }

    function drawCenterLine() {
      ctx.beginPath();
      ctx.moveTo(Math.floor(topCenterLinePoint[0] as number), Math.floor(topCenterLinePoint[1] as number));
      ctx.lineTo(Math.floor(bottomCenterLinePoint[0] as number), Math.floor(bottomCenterLinePoint[1] as number));
      ctx.closePath();
      ctx.lineWidth = COURT_LINE_WIDTH;
      ctx.strokeStyle = LINE_COLOR;
      ctx.stroke();
    }

    function drawPost(x: number, y: number, offsetXPost: number, offsetXPostCaps: number) {
      const postX = x as number;
      const postY = (y + ((bottomRightPoint[1] as number) - (topRightPoint[1] as number)) / 2) - 100;
      ctx.beginPath();
      // * Draw top post round
      ctx.arc(postX + offsetXPostCaps, postY, 5, 0, 2 * Math.PI);
      // * Draw post
      ctx.rect(postX + offsetXPost, postY, 10, 70);
      // * Draw bottom post round
      ctx.arc(postX + offsetXPostCaps, postY + 68, 5, 0, 2 * Math.PI);

      ctx.fillStyle = POST_COLOR;
      ctx.fill();
    }

    function drawNet() {
      const topOfNet = (topLeftPoint[1] as number + ((bottomRightPoint[1] as number) - (topRightPoint[1] as number)) / 2) - 100;
      const bottomOfNet = (topLeftPoint[1] as number + ((bottomRightPoint[1] as number) - (topRightPoint[1] as number)) / 2) - 35;
      const netWidth = (topRightPoint[0] as number) - (topLeftPoint[0] as number);
      const netHeight = bottomOfNet - topOfNet;

      // * Top net
      ctx.beginPath();
      ctx.moveTo(topLeftPoint[0] as number - 8, topOfNet);
      ctx.lineTo(topRightPoint[0] as number + 8, topOfNet);
      ctx.closePath();
      ctx.lineWidth = 6;
      ctx.strokeStyle = '#EFEFEF'
      ctx.stroke();

      // * Draw netting
      ctx.fillStyle = NET_COLOR;
      // * Draw vertical lines
      for (let i = topLeftPoint[0] as number - 5; i < (topRightPoint[0] as number) + 8; i += 6) {
        ctx.rect(i, topRightPoint[1] as number + 55, 1, 60);
        ctx.fill();
      }

      // * Draw horizontal lines
      for (let i = topOfNet + 4; i < topOfNet + netHeight; i += 6) {
        ctx.rect(topLeftPoint[0] as number - 5, i, netWidth + 10, 1);
        ctx.fill();
      }

      // * Bottom net
      ctx.beginPath();
      ctx.moveTo(topLeftPoint[0] as number - 8, bottomOfNet);
      ctx.lineTo(topRightPoint[0] as number + 8, bottomOfNet);
      ctx.closePath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = NET_COLOR;
      ctx.stroke();
    }

    function generateRandomTennisBallCoordinates() {
      const buffer = 20;
      const minX = topLeftPoint[0] as number + buffer;
      const maxX = topRightPoint[0] as number - buffer;
      const minY = topLeftPoint[1] as number + buffer;
      const maxY = bottomLeftPoint[1] as number - buffer;

      return [Math.floor(Math.random() * (maxX - minX + 1)) + minX, Math.floor(Math.random() * (maxY - minY + 1)) + minY];

    }

    const [tennisBallX, tennisBallY] = generateRandomTennisBallCoordinates();


    function drawTennisBall() {
      // * Draw tennis ball shadow
      ctx.beginPath();
      ctx.ellipse(tennisBallX + 2, tennisBallY + 6, 6, 3, Math.floor(Math.random() * 10), 0, 2 * Math.PI);
      ctx.globalAlpha = 0.7;
      ctx.fillStyle = BALL_SHADOW_COLOR;
      ctx.fill();

      ctx.globalAlpha = 1;
      // * Draw tennis ball
      ctx.beginPath();
      ctx.arc(tennisBallX, tennisBallY, 5, 0, 2 * Math.PI);
      ctx.fillStyle = BALL_COLOR;
      ctx.fill();
    }

    ctx.rect(bottomLeftPoint[0] as number - 4, bottomLeftPoint[1] as number + 2, (bottomRightPoint[0] as number) - (bottomLeftPoint[0] as number) + 7, 10);
    ctx.fillStyle = '#C2C2C2';
    ctx.fill();


    drawCountOutline();
    drawInnerCourtLines();
    drawCenterLine();
    drawLeftBaseline();
    drawRightBaseline();
    drawPost(topLeftPoint[0] as number, topLeftPoint[1] as number, -20, -15);
    drawPost(topRightPoint[0] as number - 10, topRightPoint[1] as number, 20, 25);
    drawTennisBall();
    drawNet();





    // ctx.beginPath();
    // ctx.arc(Math.floor(innerTopLeftPoint[0] as number), Math.floor(innerTopLeftPoint[1] as number), 4, 0, 2 * Math.PI);
    // ctx.fillStyle = 'red';
    // ctx.fill();

    // ctx.beginPath();
    // ctx.arc(Math.floor(innerTopRightPoint[0] as number), Math.floor(innerTopRightPoint[1] as number), 4, 0, 2 * Math.PI);
    // ctx.fillStyle = 'red';
    // ctx.fill();

    // ctx.beginPath();
    // ctx.arc(Math.floor(innerBottomRightPoint[0] as number), Math.floor(innerBottomRightPoint[1] as number), 4, 0, 2 * Math.PI);
    // ctx.fillStyle = 'red';
    // ctx.fill();

    // ctx.beginPath();
    // ctx.arc(Math.floor(innerBottomLeftPoint[0] as number), Math.floor(innerBottomLeftPoint[1] as number), 4, 0, 2 * Math.PI);
    // ctx.fillStyle = 'red';
    // ctx.fill();

    // ctx.beginPath();
    // ctx.arc(Math.floor(topLeftBaselinePoint[0] as number), Math.floor(topLeftBaselinePoint[1] as number), 4, 0, 2 * Math.PI);
    // ctx.fillStyle = 'red';
    // ctx.fill();

    // Draw Baseline points

    // ctx.beginPath();
    // ctx.arc(Math.floor(topLeftBaselinePoint[0] as number), Math.floor(topLeftBaselinePoint[1] as number), 4, 0, 2 * Math.PI);
    // ctx.fillStyle = 'red';
    // ctx.fill();

    // ctx.beginPath();
    // ctx.arc(Math.floor(bottomLeftBaselinePoint[0] as number), Math.floor(bottomLeftBaselinePoint[1] as number), 4, 0, 2 * Math.PI);
    // ctx.fillStyle = 'red';
    // ctx.fill();

    // ctx.beginPath();
    // ctx.arc(Math.floor(topRightBaselinePoint[0] as number), Math.floor(topRightBaselinePoint[1] as number), 4, 0, 2 * Math.PI);
    // ctx.fillStyle = 'red';
    // ctx.fill();

    // ctx.beginPath();
    // ctx.arc(Math.floor(bottomRightBaselinePoint[0] as number), Math.floor(bottomRightBaselinePoint[1] as number), 4, 0, 2 * Math.PI);
    // ctx.fillStyle = 'red';
    // ctx.fill();

    // Draw Centerline Points
    // ctx.beginPath();
    // ctx.arc(Math.floor(topCenterLinePoint[0] as number), Math.floor(topCenterLinePoint[1] as number), 4, 0, 2 * Math.PI);
    // ctx.fillStyle = 'red';
    // ctx.fill();

    // ctx.beginPath();
    // ctx.arc(Math.floor(bottomCenterLinePoint[0] as number), Math.floor(bottomCenterLinePoint[1] as number), 4, 0, 2 * Math.PI);
    // ctx.fillStyle = 'red';
    // ctx.fill();

  } else {

  }
});