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

let i = 0;

const intervalId = setInterval(() => {
  if (!(i < professions.length - 1)) {
    clearInterval(intervalId);
  }
  isVowel(professions[i]) ?
    pElement.innerHTML = 'I\'m an ' + professions[i] :
    pElement.innerHTML = 'I\'m a ' + professions[i];
  i++;
}, 2000);