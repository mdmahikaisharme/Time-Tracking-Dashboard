const trackMenu = document.querySelector(".trackMenu").children;
const trackBottom = document.querySelector(".trackBottom");
const data = [
    {
        title: "Work",
        timeframes: {
            daily: {
                current: 5,
                previous: 7,
            },
            weekly: {
                current: 32,
                previous: 36,
            },
            monthly: {
                current: 103,
                previous: 128,
            },
        },
    },
    {
        title: "Play",
        timeframes: {
            daily: {
                current: 1,
                previous: 2,
            },
            weekly: {
                current: 10,
                previous: 8,
            },
            monthly: {
                current: 23,
                previous: 29,
            },
        },
    },
    {
        title: "Study",
        timeframes: {
            daily: {
                current: 0,
                previous: 1,
            },
            weekly: {
                current: 4,
                previous: 7,
            },
            monthly: {
                current: 13,
                previous: 19,
            },
        },
    },
    {
        title: "Exercise",
        timeframes: {
            daily: {
                current: 1,
                previous: 1,
            },
            weekly: {
                current: 4,
                previous: 5,
            },
            monthly: {
                current: 11,
                previous: 18,
            },
        },
    },
    {
        title: "Social",
        timeframes: {
            daily: {
                current: 1,
                previous: 3,
            },
            weekly: {
                current: 5,
                previous: 10,
            },
            monthly: {
                current: 21,
                previous: 23,
            },
        },
    },
    {
        title: "Self Care",
        timeframes: {
            daily: {
                current: 0,
                previous: 1,
            },
            weekly: {
                current: 2,
                previous: 2,
            },
            monthly: {
                current: 7,
                previous: 11,
            },
        },
    },
];

let timeframe = "week";

function linkClicked(e) {
    e.preventDefault();

    timeframe = e.target.getAttribute("data-time");

    [...trackMenu].forEach((i) => i.classList.remove("trackLinkActive"));
    e.target.classList.add("trackLinkActive");

    updateTrack();
}

function getTime(item, time) {
    const name = timeframe.includes("ly") ? timeframe : timeframe + "ly";
    const hour = item.timeframes[name][time];
    const hourFormat = hour > 1 ? "hrs" : "hr";
    return hour + hourFormat;
}

async function updateTrack() {
    trackBottom.innerHTML = await data
        .map((item) => {
            const img = item.title.toLowerCase().replace(" ", "-");
            const currentlyDone = getTime(item, "current");
            const previouslyDone = getTime(item, "previous");

            return `
            <div class="trackCard">
                <img class="trackCardBgImg" src="./images/icon-${img}.svg" alt=""/>

                <div class="trackCardMain">
                    <div class="trackCardHead">
                        <h3>${item.title}</h3>
                        <button><img src="./images/icon-ellipsis.svg" alt=""/></button>
                    </div>
                    <div class="trackCardContent">
                    <h1>${currentlyDone}</h1>
                    <p>Last ${timeframe} - ${previouslyDone}</p>
                
                    </div></div>
            </div>
        `;
        })
        .join("");
}

[...trackMenu].forEach((i) => i.addEventListener("click", linkClicked));
updateTrack();
