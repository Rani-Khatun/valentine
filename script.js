
// const heartsContainer =
//     document.querySelector(".hearts-container");

// const heartSymbols = [
//     "❤️",
//     "💕",
//     "💖",
//     "💗",
//     "💓",
//     "💘",
//     "💝",
//     "💞"
// ];


// function createHeart() {

//     const heart = document.createElement("div");

//     heart.classList.add("floating-heart");

//     heart.innerText =
//         heartSymbols[
//             Math.floor(
//                 Math.random() * heartSymbols.length
//             )
//         ];

//     /* Random horizontal position */

//     heart.style.left =
//         Math.random() * 100 + "%";


//     /* Random size */

//     const size =
//         Math.random() * 30 + 15;

//     heart.style.fontSize =
//         size + "px";


//     /* Random animation duration */

//     const duration =
//         Math.random() * 6 + 5;

//     heart.style.animationDuration =
//         duration + "s";


//     /* Random delay */

//     heart.style.animationDelay =
//         Math.random() * 2 + "s";


//     heartsContainer.appendChild(heart);


//     /* Remove after animation */

//     setTimeout(() => {

//         heart.remove();

//     }, (duration + 3) * 1000);
// }


// /* Create hearts continuously */

// setInterval(createHeart, 350);


// /* Initial hearts */

// for (let i = 0; i < 20; i++) {

//     setTimeout(
//         createHeart,
//         i * 150
//     );
// }


// /* =================================
//    YES BUTTON
// ================================= */

// const yesBtn =
//     document.getElementById("yesBtn");

// const celebration =
//     document.getElementById("celebration");


// yesBtn.addEventListener("click", () => {

//     celebration.classList.add("active");

//     startCelebration();

// });


// /* =================================
//    CELEBRATION EFFECT
// ================================= */

// function startCelebration() {

//     /* Generate lots of floating celebration emojis */

//     const celebrationEmojis = [
//         "❤️",
//         "💕",
//         "💖",
//         "💘",
//         "💝",
//         "💋",
//         "✨",
//         "🎉",
//         "🥰"
//     ];


//     for (let i = 0; i < 60; i++) {

//         const emoji =
//             document.createElement("div");

//         emoji.className =
//             "floating-heart";

//         emoji.innerText =
//             celebrationEmojis[
//                 Math.floor(
//                     Math.random() *
//                     celebrationEmojis.length
//                 )
//             ];

//         emoji.style.left =
//             Math.random() * 100 + "%";

//         emoji.style.bottom =
//             Math.random() * 100 + "%";

//         emoji.style.fontSize =
//             Math.random() * 35 + 20 + "px";

//         emoji.style.animationDuration =
//             Math.random() * 3 + 2 + "s";

//         celebration.appendChild(emoji);

//     }
// }



/* =========================================
   FLOATING HEARTS
========================================= */

const heartsContainer =
    document.getElementById("hearts-container");

const heartSymbols = [
    "❤️",
    "💕",
    "💖",
    "💗",
    "💓",
    "💘",
    "💝"
];

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerText =
        heartSymbols[
            Math.floor(
                Math.random() * heartSymbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        15 + Math.random() * 35 + "px";

    const duration =
        4 + Math.random() * 6;

    heart.style.animationDuration =
        duration + "s";

    heart.style.animationDelay =
        Math.random() * 2 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, (duration + 3) * 1000);
}

setInterval(createHeart, 300);


/* =========================================
   PAGE SYSTEM
========================================= */

const page1 =
    document.getElementById("page1");

const page2 =
    document.getElementById("page2");

const page3 =
    document.getElementById("page3");

function showPage(page) {

    document
        .querySelectorAll(".page")
        .forEach(section => {
            section.classList.remove("active");
        });

    page.classList.add("active");
}


/* =========================================
   YES BUTTON
========================================= */

const yesBtn =
    document.getElementById("yesBtn");

yesBtn.addEventListener("click", () => {

    showPage(page2);

    startCelebration();

});


/* =========================================
   NO BUTTON
   DESKTOP + MOBILE
========================================= */

const noBtn =
    document.getElementById("noBtn");

const buttonsArea =
    document.querySelector(".buttons");


function moveNoButton(event) {

    if (event) {
        event.preventDefault();
    }

    const area =
        buttonsArea.getBoundingClientRect();

    const button =
        noBtn.getBoundingClientRect();

    const maxX =
        area.width - button.width;

    const maxY =
        area.height - button.height;

    let randomX =
        Math.random() * maxX;

    let randomY =
        Math.random() * maxY;

    /*
        Make sure the button actually moves
        a reasonable distance.
    */

    if (Math.abs(randomX) < 50) {
        randomX += 80;
    }

    if (Math.abs(randomY) < 20) {
        randomY += 30;
    }

    noBtn.style.position = "absolute";

    noBtn.style.left =
        Math.max(
            0,
            Math.min(randomX, maxX)
        ) + "px";

    noBtn.style.top =
        Math.max(
            0,
            Math.min(randomY, maxY)
        ) + "px";
}


/*
    Desktop mouse
*/

noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);


/*
    Mobile touch
*/

noBtn.addEventListener(
    "touchstart",
    moveNoButton,
    {
        passive: false
    }
);


/*
    Extra protection:
    even if somebody tries clicking it,
    nothing happens.
*/

noBtn.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        moveNoButton(event);

    }
);


/* =========================================
   CELEBRATION
========================================= */

function startCelebration() {

    createConfetti();

    createCelebrationHearts();

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const pieces = [
        "❤️",
        "💕",
        "✨",
        "💖",
        "🎉",
        "⭐",
        "💘"
    ];

    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("div");

        confetti.className =
            "confetti";

        confetti.innerText =
            pieces[
                Math.floor(
                    Math.random() *
                    pieces.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.fontSize =
            10 + Math.random() * 25 + "px";

        confetti.style.animationDuration =
            2 + Math.random() * 3 + "s";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 6000);
    }
}


/* =========================================
   EXTRA CELEBRATION HEARTS
========================================= */

function createCelebrationHearts() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 100);
    }
}


/* =========================================
   PAGE 3
========================================= */

const nextBtn =
    document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {

    showPage(page3);

    createConfetti();

});


/* =========================================
   RESTART
========================================= */

const restartBtn =
    document.getElementById("restartBtn");

restartBtn.addEventListener("click", () => {

    showPage(page1);

    noBtn.style.position = "relative";

    noBtn.style.left = "auto";

    noBtn.style.top = "auto";

});


/* =========================================
   INITIAL HEARTS
========================================= */

for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 150);
}