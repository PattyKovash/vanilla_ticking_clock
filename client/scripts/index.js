document.addEventListener('DOMContentLoaded', (e) => {
  const clock = Array.from(document.querySelectorAll('.hand'));
  const [hour, min, sec] = clock;

  function setHour() {
    const curHour = (new Date()).getHours() % 12;
    const hourDeg = 90 + (30 * curHour)
    hour.style.transform = `rotate(${hourDeg}deg)`;
  }

  function setMin() {
    const curMin = (new Date()).getMinutes();
    const minDeg = ((curMin / 60) * 360) + 90;
    min.style.transform = `rotate(${minDeg}deg)`;
  }

 function setSec() {
    const curSec = (new Date()).getSeconds();
    const secDeg = ((curSec / 60) * 360) + 90;
    sec.style.transform = `rotate(${secDeg}deg)`;
  }

  function setHands(time, func) {
    setInterval(func , time);
  }

  setHour();
  setMin();
  setSec();
  setHands(1000 * 60 * 60, setHour);
  setHands(1000 * 60, setMin);
  setHands(1000, setSec);

});