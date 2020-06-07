'use strict';

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var removeClass = function (element, className) {
  element.classList.remove(className);
};

var userDialog = document.querySelector('.setup');
if (userDialog) {
  removeClass(userDialog, 'hidden');
}

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandom = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);

  return arr[rand];
};

var wizards = [
  {
    name: getRandom(WIZARD_FIRST_NAMES) + ' ' + getRandom(WIZARD_LAST_NAMES),
    coatColor: getRandom(WIZARD_COAT_COLOR),
    eyesColor: getRandom(WIZARD_EYES_COLOR)
  },
  {
    name: getRandom(WIZARD_FIRST_NAMES) + ' ' + getRandom(WIZARD_LAST_NAMES),
    coatColor: getRandom(WIZARD_COAT_COLOR),
    eyesColor: getRandom(WIZARD_EYES_COLOR)
  },
  {
    name: getRandom(WIZARD_FIRST_NAMES) + ' ' + getRandom(WIZARD_LAST_NAMES),
    coatColor: getRandom(WIZARD_COAT_COLOR),
    eyesColor: getRandom(WIZARD_EYES_COLOR)
  },
  {
    name: getRandom(WIZARD_FIRST_NAMES) + ' ' + getRandom(WIZARD_LAST_NAMES),
    coatColor: getRandom(WIZARD_COAT_COLOR),
    eyesColor: getRandom(WIZARD_EYES_COLOR)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderFragment = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};
renderFragment();

var similarDialog = document.querySelector('.setup-similar');
if (similarDialog) {
  removeClass(similarDialog, 'hidden');
}
