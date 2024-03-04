console.log('bobbyhadz.com');

const text = 'Bobby Hadz';

const matches = [];

for (const div of document.querySelectorAll('div')) {
  if (div.textContent.includes(text)) {
    matches.push(div);
  }
}

console.log(matches); // 👉️ [div.box]
