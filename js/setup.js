'use strict';

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var NUMBERS_OF_WIZARDS = 4;

var wizardColors = {
  coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
};

var userDialog = document.querySelector('.setup');

var getRandomInt = function (max, min) {

  if (!min) {
    min = 0;
  }

  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

if (userDialog) {
  userDialog.classList.remove('hidden');
}

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getFullName = function () {
  return WIZARD_FIRST_NAMES[getRandomInt(WIZARD_FIRST_NAMES.length - 1)] + ' ' + WIZARD_LAST_NAMES[getRandomInt(0, WIZARD_LAST_NAMES.length - 1)];
};

var getWizardsObj = function (colors) {
  return {
    fullName: getFullName(),
    coatColor: colors.coatColors[getRandomInt(colors.coatColors.length - 1)],
    eyesColor: colors.eyesColors[getRandomInt(colors.eyesColors.length - 1)]
  };
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.fullName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var getRandomWizardsArr = function () {
  var randomWizardsArr = [];

  for (var i = 0; i < NUMBERS_OF_WIZARDS; i++) {
    randomWizardsArr.push(renderWizard(getWizardsObj(wizardColors)));
  }

  return randomWizardsArr;
};

var randomWizardsArr = getRandomWizardsArr();

var renderFragment = function () {
  var fragment = document.createDocumentFragment();

  randomWizardsArr.forEach(function(item){
    fragment.appendChild(item);
  })

  similarListElement.appendChild(fragment);
};
renderFragment();

var similarDialog = document.querySelector('.setup-similar');

if (similarDialog) {
  similarDialog.classList.remove('hidden');
}
