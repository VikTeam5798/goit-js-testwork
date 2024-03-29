// import "../css/common.css";
const refs = {
    startBtn: document.querySelector("button[data-action-start]"),
    stopBtn: document.querySelector("button[data-action-stop]"),
    clockface: document.querySelector(".js-clockface")
};
class Timer {
    constructor({ onTick  }){
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;
        this.init();
    }
    init() {
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }
    start() {
        if (this.isActive) return;
        const startTime = Date.now();
        this.isActive = true;
        this.intervalId = setInterval(()=>{
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = this.getTimeComponents(deltaTime);
            this.onTick(time);
        }, 1000);
    }
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }
    /*
   * - Принимает время в миллисекундах
   * - Высчитывает сколько в них вмещается часов/минут/секунд
   * - Возвращает обьект со свойствами hours, mins, secs
   * - Адская копипаста со стека 💩
   */ getTimeComponents(time) {
        const hours = this.pad(Math.floor(time % 86400000 / 3600000));
        const mins = this.pad(Math.floor(time % 3600000 / 60000));
        const secs = this.pad(Math.floor(time % 60000 / 1000));
        return {
            hours,
            mins,
            secs
        };
    }
    /*
   * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
   */ pad(value) {
        return String(value).padStart(2, "0");
    }
}
const timer = new Timer({
    onTick: updateClockface
});
refs.startBtn.addEventListener("click", timer.start.bind(timer));
refs.stopBtn.addEventListener("click", timer.stop.bind(timer));
/*
 * - Принимает время в миллисекундах
 * - Высчитывает сколько в них вмещается часов/минут/секунд
 * - Рисует интерфейс
 */ function updateClockface({ hours , mins , secs  }) {
    refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

//# sourceMappingURL=06-timer.617af04a.js.map
