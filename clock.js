const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

let h = 0;
let m = 0;
let s = 0;
let ms = 0;

let cron;

const start = document.getElementById('start').addEventListener('click', startClock);

function startClock () {

    if(!cron) {

        cron = setInterval(() => {
            timer();
        }, 10);

    }


    // console.log('1');
}

const stop = document.getElementById('stop').addEventListener('click', stopClock);

function stopClock () {
    clearInterval(cron);

    cron = undefined;

    // console.log('2');
}

const restart = document.getElementById('restart').addEventListener('click', restartClock)

function restartClock () {
    h = 0;
    m = 0;
    s = 0;
    ms = 0;

    hour.innerHTML = '00';
    minute.innerHTML = '00';
    second.innerHTML = '00';

    // console.log('3');
    clearInterval(cron);
    cron = undefined;
}

function timer () {
    if ((ms += 500) == 1000) {
        ms = 0;
        s++;
      }
    if (s == 60) {
        s = 0;
        m++;
      }
      if (m == 60) {
        m = 0;
        h++;
      }

      hour.innerText = returnData(h);
      minute.innerText = returnData(m);
      second.innerText = returnData(s);
}

function returnData(i) {
    return i > 10 ? i : `0${i}`;
}

// return if(i > 10) {
//     i = `0${i}`;
// }