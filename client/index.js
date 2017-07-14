function getMarkup() {
  const playerType = (document.querySelector('#form-input #playerType input#playerTypeInline').checked ? 'inline' : 'block');
  const phrase = document.querySelector('#form-input #input-phrase').value;
  const audioSource = document.querySelector('#form-input #input-audioSource').value;

  const output = `<span class="g-audio ${(playerType === 'block' ? 'g-audio--block' : '')}">${phrase}<audio controls><source src="${audioSource}" type="audio/mpeg"></audio></span>`;

  return output;
}

function updateMarkup() {
  const output = getMarkup();
  document.querySelector('#form-output textarea').value = output;
}

function previewPlayer() {
  const output = getMarkup();
  document.querySelector('#form-output #form-output-preview').innerHTML = output;
  Origami['g-audio'].init();
}

const inputFields = document.querySelectorAll('#form-input input[type="text"]');
Array.from(inputFields).forEach((element) => {
  element.addEventListener('keyup', updateMarkup);
});

const radioButtons = document.querySelectorAll('#form-input input[type="radio"]');
Array.from(radioButtons).forEach((element) => {
  element.addEventListener('click', updateMarkup);
});

document.querySelector('#form-output-preview-button').addEventListener('click', previewPlayer);
