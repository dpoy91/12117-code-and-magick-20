'use strict';

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBERS_OF_WIZARDS = 4;

var userDialog = document.querySelector('.setup');

var getRandomInt = function (min, max) {
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

var getWizardsObj = function (firstNames, lastNames, coatColors, eyesColors) {
  return {
    fullName: firstNames[getRandomInt(0, firstNames.length - 1)] + ' ' + lastNames[getRandomInt(0, lastNames.length - 1)],
    coatColor: coatColors[getRandomInt(0, coatColors.length - 1)],
    eyesColor: eyesColors[getRandomInt(0, eyesColors.length - 1)]
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
    randomWizardsArr.push(renderWizard(getWizardsObj(WIZARD_FIRST_NAMES, WIZARD_LAST_NAMES, WIZARD_COAT_COLOR, WIZARD_EYES_COLOR)));
  }

  return randomWizardsArr;
};

var randomWizardsArr = getRandomWizardsArr();

var renderFragment = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < NUMBERS_OF_WIZARDS; i++) {
    fragment.appendChild(randomWizardsArr[i]);
  }
  similarListElement.appendChild(fragment);
};
renderFragment();

var similarDialog = document.querySelector('.setup-similar');
if (similarDialog) {
  similarDialog.classList.remove('hidden');
}
