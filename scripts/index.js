const professions = ['Doctor', 'Engineer', 'Nurse', 'Dentist', 'Soft dev',
  'Explorer' 
];
const pElement = document.querySelector('p');

function isVowel(word) {
  if ('aeiou'.includes(word[0].toLowerCase())) {
    return true
  };
  return false;
}

let professionIndex = 0;
let characterIndex = 0;

function updateText() {
  characterIndex++;
  isVowel(professions[professionIndex]) ?
    pElement.innerHTML = 'I\'m an ' + professions[professionIndex].slice(0, characterIndex) :
    pElement.innerHTML = 'I\'m a ' + professions[professionIndex].slice(0, characterIndex);
  
  if (characterIndex >= professions[professionIndex].length) {
    professionIndex++;
    characterIndex = 0;

    if (professionIndex >= professions.length) {
      professionIndex = 0;
    }
  }
  setTimeout(updateText, 400);
}
updateText();

/*
const intervalId = setInterval(() => {
  if (!(professionIndex < professions.length - 1)) {
    clearInterval(intervalId);
  }
  isVowel(professions[professionIndex]) ?
    pElement.innerHTML = 'I\'m an ' + professions[professionIndex] :
    pElement.innerHTML = 'I\'m a ' + professions[professionIndex];
  professionIndex++;
}, 2000);
*/