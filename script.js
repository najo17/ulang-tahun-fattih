document.addEventListener("DOMContentLoaded", function () {

    const openInvitation = document.getElementById("openInvitation");
    const cover = document.getElementById("cover");
    const mainContent = document.getElementById("mainContent");
    const birthdayMusic = document.getElementById("birthdayMusic");

    console.log("Script berhasil dijalankan");
    console.log("Tombol:", openInvitation);
    console.log("Cover:", cover);
    console.log("Main:", mainContent);
    console.log("Music:", birthdayMusic);

    // ================================
    // BUKA UNDANGAN
    // ================================

    openInvitation.onclick = function () {

        console.log("Tombol Buka Undangan diklik");

        // Sembunyikan cover
        cover.style.display = "none";

        // Tampilkan isi undangan
        mainContent.style.display = "block";

        // Izinkan scrolling
        document.body.style.overflowY = "auto";

        // ================================
        // PUTAR MUSIK
        // ================================

        if (birthdayMusic) {

            birthdayMusic.volume = 0.7;

            const playMusic = birthdayMusic.play();

            if (playMusic !== undefined) {
                playMusic
                    .then(function () {
                        console.log("Musik berhasil diputar");
                    })
                    .catch(function (error) {
                        console.log("Musik tidak bisa diputar:", error);
                    });
            }
        }

        // Scroll ke awal undangan
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    // ================================
    // COUNTDOWN
    // ================================

    const targetDate = new Date("October 10, 2026 13:00:00").getTime();

    function updateCountdown() {

        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = document.getElementById("days");
        const hours = document.getElementById("hours");
        const minutes = document.getElementById("minutes");
        const seconds = document.getElementById("seconds");

        if (distance <= 0) {

            days.textContent = "00";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";

            return;
        }

        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );
        const m = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );
        const s = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );

        days.textContent = String(d).padStart(2, "0");
        hours.textContent = String(h).padStart(2, "0");
        minutes.textContent = String(m).padStart(2, "0");
        seconds.textContent = String(s).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

});