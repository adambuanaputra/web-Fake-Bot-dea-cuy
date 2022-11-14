const pertanyaan = document.getElementById('pertanyaan');
const jawaban = document.getElementById('jawaban');

let init = 0;

const botSay = (data) => {
  return [
    'Hallo, perkenalkan nama saya Khonsa.bot, siapa nama kamu?',
    `Hallo ${data?.nama}, berapa usia kamu?`,
    `Ohh ${data?.usia}, hobi kamu apa ya?`,
    `Wahh sama dong aku juga hobi ${data?.hobi}, Btw udah punya pacar?`,
    `Ohh ${data?.pacar}, ya udah ya kalau gitu, udahan yah?`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let userData = [];

function botStart() {
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init == 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [1000]);
  userData.push(jawaban.value);
  jawaban.value = '';
}

function finishing() {
  pertanyaan.innerHTML = `Terimakasih ya ${userData[0]} sudah main ke Khonsa.bot 😊, kali-kali kita main ${userData[2]} bareng ya `;
  jawaban.value = '';
}

function botEnd() {
  window.location.reload();
}
