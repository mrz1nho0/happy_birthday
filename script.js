const output = document.querySelector("h1");

const countDown = () => {
    // tempos
    const countDownDate = new Date("August 12, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    // temporizador
    const distance = countDownDate - now;

    // horas convertidas
    const dd = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hh = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const ss = Math.floor((distance % (1000 * 60 )) / 1000);

    output.innerText = `${dd}d ${hh}h ${mm}m ${ss}s`;

    if (distance < 0) {
        output.innerText = 'EXPIRADO';
    }
}

countDown();
setInterval(countDown, 1000);