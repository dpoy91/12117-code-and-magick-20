'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var TEXT_COLOR = '#000000';
var PLAYER_SCALE_COLOR = 'rgba(255, 0, 0, 1)';
var BAR_HEIGHT = 150;
var barWidth = TEXT_WIDTH - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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
  renderCloud(ctx, CLOUD_X + GAP, GAP * 2, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, GAP, '#ffffff');

  ctx.fillStyle = TEXT_COLOR;

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + (GAP * 2), CLOUD_Y - (GAP * 2));
  ctx.fillText('Список результатов:', CLOUD_X + (GAP * 2), CLOUD_Y);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + TEXT_WIDTH + (GAP + barWidth * 2) * i, CLOUD_Y + BAR_HEIGHT - (BAR_HEIGHT * Math.round(times[i])) / Math.round(maxTime) + FONT_GAP + GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = PLAYER_SCALE_COLOR;
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';
    }

    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH + (GAP + barWidth * 2) * i, CLOUD_Y - (-CLOUD_HEIGHT / 2) + TEXT_WIDTH + GAP, barWidth, -(BAR_HEIGHT * Math.round(times[i])) / Math.round(maxTime));
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(players[i], CLOUD_X + GAP + TEXT_WIDTH + (GAP + barWidth * 2) * i, CLOUD_Y + BAR_HEIGHT + TEXT_WIDTH + (GAP / 2));
  }
};
