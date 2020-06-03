'use strict';

var GAP = 10;
var FONT_GAP = 15;
var BAR_HEIGHT = 150;
var PLAYER_SCALE_COLOR = 'rgba(255, 0, 0, 1)';

var Cloud = {
  WIDTH: 420,
  HEIGHT: 270,
  X: 100,
  Y: 50
};

var Text = {
  WIDTH: 50,
  COLOR: '#000000'
};

var barWidth = Text.WIDTH - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, Cloud.WIDTH, Cloud.HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, Cloud.X + GAP, GAP * 2, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, Cloud.X, GAP, '#ffffff');

  ctx.fillStyle = Text.COLOR;

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', Cloud.X + (GAP * 2), Cloud.Y - (GAP * 2));
  ctx.fillText('Список результатов:', Cloud.X + (GAP * 2), Cloud.Y);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(Math.round(times[i]), Cloud.X + GAP + Text.WIDTH + (GAP + barWidth * 2) * i, Cloud.Y + BAR_HEIGHT - (BAR_HEIGHT * Math.round(times[i])) / Math.round(maxTime) + FONT_GAP + GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = PLAYER_SCALE_COLOR;
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';
    }

    ctx.fillRect(Cloud.X + GAP + Text.WIDTH + (GAP + barWidth * 2) * i, Cloud.Y - (-Cloud.HEIGHT / 2) + Text.WIDTH + GAP, barWidth, -(BAR_HEIGHT * Math.round(times[i])) / Math.round(maxTime));
    ctx.fillStyle = Text.COLOR;
    ctx.fillText(players[i], Cloud.X + GAP + Text.WIDTH + (GAP + barWidth * 2) * i, Cloud.Y + BAR_HEIGHT + Text.WIDTH + (GAP / 2));
  }
};
