function updateOutput() {
  const playerType = (document.querySelector('#form-input #playerType input#playerTypeInline').checked ? 'inline' : 'block');
  const phrase = document.querySelector('#form-input #input-phrase').value;
  const audioSource = document.querySelector('#form-input #input-audioSource').value;

  const output = `<span class="g-audio ${(playerType === 'block' ? 'g-audio--block' : '')}">${phrase}<audio controls><source src="${audioSource}" type="audio/mpeg"></audio></span>`;

  document.querySelector('#form-output textarea').value = output;
}

const inputFields = document.querySelectorAll('#form-input input[type="text"]');
Array.from(inputFields).forEach((element) => {
  element.addEventListener('keyup', updateOutput);
});

const radioButtons = document.querySelectorAll('#form-input input[type="radio"]');
Array.from(radioButtons).forEach((element) => {
  element.addEventListener('click', updateOutput);
});
