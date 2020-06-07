'use strict';

var GAP = 10;
var FONT_GAP = 15;
var BAR_HEIGHT = 150;

var Cloud = {
  WIDTH: 420,
  HEIGHT: 270,
  X: 100,
  Y: 50
};

var TextConf = {
  WIDTH: 50,
  COLOR: '#000000'
};

var Color = {
  PLAYER_SCALE: 'rgba(255, 0, 0, 1)',
  TRANSPARENT: 'rgba(0, 0, 0, 0.3)',
  WHITE: '#ffffff'
};

var barWidth = TextConf.WIDTH - GAP;
var doubleGap = GAP * 2;
var cloudX = Cloud.X + doubleGap;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, Cloud.WIDTH, Cloud.HEIGHT);
};

var getMaxElement = function getMaxOfArray(arr) {
  return Math.max.apply(null, arr);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, Cloud.X + GAP, doubleGap, Color.TRANSPARENT);
  renderCloud(ctx, Cloud.X, GAP, Color.WHITE);

  ctx.fillStyle = TextConf.COLOR;

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', cloudX, Cloud.Y - doubleGap);
  ctx.fillText('Список результатов:', cloudX, Cloud.Y);

  var maxTime = getMaxElement(times);

  var renderStat = function () {
    var resultCloudX = Cloud.X + GAP + TextConf.WIDTH + (GAP + barWidth * 2) * i;
    var resultHeightBar = (BAR_HEIGHT * Math.round(times[i])) / Math.round(maxTime);

    ctx.fillText(Math.round(times[i]), resultCloudX, Cloud.Y + BAR_HEIGHT - resultHeightBar + FONT_GAP + GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = Color.PLAYER_SCALE;
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';
    }

    ctx.fillRect(resultCloudX, Cloud.Y - (-Cloud.HEIGHT / 2) + TextConf.WIDTH + GAP, barWidth, -resultHeightBar);
    ctx.fillStyle = TextConf.COLOR;
    ctx.fillText(players[i], resultCloudX, Cloud.Y + BAR_HEIGHT + TextConf.WIDTH + (GAP / 2));
  };

  for (var i = 0; i < players.length; i++) {
    renderStat();
  }
};
