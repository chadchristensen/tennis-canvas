document.addEventListener('DOMContentLoaded', function () {

    const COURT_COLOR = '#7f9d3e';
    const LINE_COLOR = '#ffffff';
    const BALL_COLOR = '#d5e414';
    const BALL_SHADOW_COLOR = '#595e00';

    const CANVAS_WIDTH = window.innerWidth;
    const CANVAS_HEIGHT = window.innerHeight;

    let canvas = document.getElementById('tennis-court');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    let ctx = canvas.getContext('2d');

    const COURT_WIDTH = CANVAS_WIDTH * .5;
    const COURT_HEIGHT = CANVAS_HEIGHT * .5;

    const TOP_HORIZON_Y = 200;
    const BOTTOM_HORIZON_Y = 500;

    const points = [
        { x: 20, y: TOP_HORIZON_Y },
        { x: CANVAS_WIDTH - 40, y: TOP_HORIZON_Y },
        { x: 20, y: BOTTOM_HORIZON_Y },
        { x: CANVAS_WIDTH - 40, y: BOTTOM_HORIZON_Y },
        { x: CANVAS_WIDTH * .5, y: -200 },
        { x: CANVAS_WIDTH * .25, y: CANVAS_HEIGHT - 40 },
        { x: CANVAS_WIDTH * .75, y: CANVAS_HEIGHT - 40 },
        { x: CANVAS_WIDTH * .25 + 20, y: CANVAS_HEIGHT - 40 },
        { x: CANVAS_WIDTH * .75 - 20, y: CANVAS_HEIGHT - 40 },
        { x: CANVAS_WIDTH * .25 + 100, y: CANVAS_HEIGHT - 40 },
        { x: CANVAS_WIDTH * .75 - 100, y: CANVAS_HEIGHT - 40 },
        { x: 20, y: BOTTOM_HORIZON_Y - 100 },
        { x: CANVAS_WIDTH - 40, y: BOTTOM_HORIZON_Y - 100 },
        { x: 20, y: TOP_HORIZON_Y + 40 },
        { x: CANVAS_WIDTH - 40, y: TOP_HORIZON_Y + 40 },
    ]

    for (let i = 0; i < points.length; i++) {
        ctx.beginPath();
        ctx.arc(points[i].x, points[i].y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = '#000000';
        ctx.fill();
        ctx.closePath();
    }
    // Top horizon line
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    ctx.lineTo(points[1].x, points[1].y);
    ctx.stroke();

    // Bottom horizon line
    ctx.beginPath();
    ctx.moveTo(points[2].x, points[2].y);
    ctx.lineTo(points[3].x, points[3].y);
    ctx.stroke();

    // Left perspective line
    ctx.beginPath();
    ctx.moveTo(points[4].x, points[4].y);
    ctx.lineTo(points[5].x, points[5].y);
    ctx.stroke();

    // Right perspective line
    ctx.beginPath();
    ctx.moveTo(points[4].x, points[4].y);
    ctx.lineTo(points[6].x, points[6].y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(points[4].x, points[4].y);
    ctx.lineTo(points[7].x, points[7].y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(points[4].x, points[4].y);
    ctx.lineTo(points[8].x, points[8].y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(points[4].x, points[4].y);
    ctx.lineTo(points[9].x, points[9].y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(points[4].x, points[4].y);
    ctx.lineTo(points[10].x, points[10].y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(points[11].x, points[11].y);
    ctx.lineTo(points[12].x, points[12].y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(points[13].x, points[13].y);
    ctx.lineTo(points[14].x, points[14].y);
    ctx.stroke();
    // const courtPoints = {
    //     topLeft: {
    //         x: COURT_WIDTH * .65,
    //         y: 125
    //     },
    //     topRight: {
    //         x: COURT_WIDTH * 1.35,
    //         y: 125
    //     },
    //     bottomRight: {
    //         x: COURT_WIDTH * 1.35 + 100,
    //         y: COURT_HEIGHT * 1.5
    //     },
    //     bottomLeft: {
    //         x: COURT_WIDTH * .65 - 100,
    //         y: COURT_HEIGHT * 1.5
    //     }
    // }

    // // Draw the court
    // ctx.beginPath();
    // ctx.moveTo(courtPoints.topLeft.x, courtPoints.topLeft.y);
    // ctx.lineTo(courtPoints.topRight.x, courtPoints.topRight.y);
    // ctx.lineTo(courtPoints.bottomRight.x, courtPoints.bottomRight.y);
    // ctx.lineTo(courtPoints.bottomLeft.x, courtPoints.bottomLeft.y);
    // ctx.lineTo(courtPoints.topLeft.x, courtPoints.topLeft.y);
    // ctx.fillStyle = COURT_COLOR;
    // ctx.fill();
    // ctx.closePath();

    // // Draw lines
    // ctx.beginPath();
    // ctx.moveTo(courtPoints.topLeft.x + 10, courtPoints.topLeft.y + 10);
    // ctx.lineTo(courtPoints.topLeft.x + 20, courtPoints.topRight.y + 10);
    // ctx.lineTo(courtPoints.bottomLeft.x + 30, courtPoints.bottomLeft.y - 10);
    // ctx.lineTo(courtPoints.bottomLeft.x + 20, courtPoints.bottomLeft.y - 10);
    // ctx.fillStyle = LINE_COLOR;
    // ctx.fill();
    // ctx.closePath();

    // ctx.beginPath();
    // ctx.moveTo(courtPoints.topRight.x - 40, courtPoints.topRight.y - 40);
    // ctx.lineTo(courtPoints.topRight.x - 60, courtPoints.topRight.y - 60);
    // ctx.lineTo(courtPoints.bottomRight.x + 30, courtPoints.bottomRight.y - 10);
    // ctx.lineTo(courtPoints.bottomRight.x + 20, courtPoints.bottomRight.y - 10);
    // ctx.fillStyle = LINE_COLOR;
    // ctx.fill();
    // ctx.closePath();

    // // Botton Horizontal Line
    // ctx.beginPath();
    // ctx.moveTo(courtPoints.bottomLeft.x + 10, courtPoints.bottomLeft.y - 40);
    // ctx.lineTo(courtPoints.bottomRight.x - 20, courtPoints.bottomRight.y - 10);
    // ctx.lineTo(courtPoints.bottomRight.x - 20, courtPoints.bottomRight.y - 20);
    // ctx.lineTo(courtPoints.bottomLeft.x + 40, courtPoints.bottomLeft.y - 20);
    // ctx.fillStyle = LINE_COLOR;
    // ctx.fill();
    // ctx.closePath();


    // // Top Horizontal Line
    // ctx.beginPath();
    // ctx.moveTo(courtPoints.topLeft.x + 10, courtPoints.topLeft.y + 10);
    // ctx.lineTo(courtPoints.topRight.x - 20, courtPoints.topRight.y + 10);
    // ctx.lineTo(courtPoints.topRight.x - 20, courtPoints.topRight.y + 20);
    // ctx.lineTo(courtPoints.topLeft.x + 10, courtPoints.topLeft.y + 20);
    // ctx.fillStyle = LINE_COLOR;
    // ctx.fill();
    // ctx.closePath();

    // // Draw shadow
    // ctx.beginPath();
    // ctx.ellipse(375 + COURT_WIDTH / 2 + 15, COURT_HEIGHT / 2, 10, 20, Math.PI / 4, 0, 2 * Math.PI);
    // ctx.fillStyle = BALL_SHADOW_COLOR;
    // ctx.fill();
    // ctx.closePath();

    // // Draw a tennis ball
    // ctx.beginPath();
    // ctx.arc(CANVAS_WIDTH * .5, CANVAS_HEIGHT * .5, Math.max(8, COURT_WIDTH * .015), 0, 2 * Math.PI);
    // ctx.fillStyle = BALL_COLOR;
    // ctx.fill();
    // ctx.closePath();



});