"use strict";

// document is loaded and DOM is ready
document.addEventListener('DOMContentLoaded', function(){
    /*
    fetch('/editor.txt')
    .then(r => r.text())
    .then(data => {
        let codeBlock = document.querySelector("#entrance-background code");
        codeBlock.textContent = data;
        hljs.highlightElement(codeBlock);
    });
    */

    document.querySelectorAll('a.email-replace').forEach(elem => {
        elem.href = "mailto:me" + "@" + "andrewkdinh.com";
        elem.target = "_blank";
    });

    ////////////////////////////////
    // Spotify
    ////////////////////////////////

    /*
    Dynamically get view_names.
    Dynamically set playlist/folder titles and descriptions.
    So basically the only things that need to be set are title for folders and
        and title+description for playlists (per-view)
    */
    var view_names = []
    document.getElementById("spotify").querySelectorAll("button").forEach(button_elem => {
        let prefix = "to-spotify-view-"
        if (button_elem.id.startsWith(prefix)) {
            view_names.push(button_elem.id.slice(prefix.length));

            let elem = document.getElementById(button_elem.id.slice(3))
            let title = elem.querySelector(".spotify-view-title").textContent
            let iframe_count = elem.querySelectorAll("iframe").length
            if (iframe_count > 0) {
                // Playlist
                let description = elem.querySelector(".spotify-view-desc").textContent
                button_elem.querySelector(".spotify-playlist-title").textContent = title;
                button_elem.querySelector(".spotify-playlist-desc").textContent = description;
            } else {
                // Folder
                let folder_count = elem.querySelectorAll(".spotify-folder").length
                let playlist_count = elem.querySelectorAll(".spotify-playlist").length
                var description = "";
                if (folder_count > 0 && playlist_count > 0) {
                    description = `${folder_count} folder${folder_count > 1 ? "s" : ""}, ${playlist_count} playlist${playlist_count > 1 ? "s" : ""}`;
                } else if (folder_count > 0) {
                    description = `${folder_count} folder${folder_count > 1 ? "s" : ""}`;
                } else {
                    description = `${playlist_count} playlist${playlist_count > 1 ? "s" : ""}`;
                }
                button_elem.querySelector(".spotify-folder-title").textContent = title;
                button_elem.querySelector(".spotify-folder-desc").textContent = description;
                // May want to change this if I want folders to have custom descriptions
                elem.querySelector(".spotify-view-desc").textContent = description
            }
        }
    });

    var views = [];
    view_names.forEach(view_name => {
        let elem_id = "spotify-view-" + view_name
        document.getElementById("to-" + elem_id).addEventListener("click", function() {
            let elem = document.getElementById(elem_id);
            // Load iFrame if one exists
            elem.querySelectorAll(".spotify-playlist-embed").forEach(iframe_elem => {
                if (iframe_elem.src == "") {
                    iframe_elem.src = iframe_elem.dataset.src;
                }
            })

            elem.classList.add("spotify-view-test");
            elem.classList.add("spotify-view-active");
            views.push(elem);
        });
    });

    document.querySelectorAll(".spotify-back").forEach(back_button => {
        back_button.addEventListener("click", function(elem) {
            let last_view = views.pop()
            if (last_view != undefined) {
                last_view.classList.remove("spotify-view-active")
            }
        });
    });
});

// page is fully loaded, including all frames, objects and images
window.addEventListener("load", function() {
    /*
    oneko();
    let onekoEl = document.getElementById("oneko")
    const onekoToggle = this.document.getElementById("oneko-toggle");
    onekoToggle.onclick = function(event) {
        event.preventDefault();
        if (onekoEl) {
            onekoEl.style.opacity = 0;
            // onekoToggle.style.fill = "rgb(128, 128, 128)";
            setTimeout(function() {
                if (onekoEl) {
                    onekoEl.remove();
                    onekoEl = null;
                }
            }, 700)
        } else {
            oneko();
            onekoEl = document.getElementById("oneko")
            // onekoToggle.style.fill = "rgba(255, 255, 255, 0.75)";
        }
    };
    */
});

// General functions
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

// https://github.com/adryd325/oneko.js
function oneko() {
    const nekoEl = document.createElement("div");
    nekoEl.style.opacity = 0;
    /*
    let nekoPosX = 32;
    let nekoPosY = 32;
    let mousePosX = 0;
    let mousePosY = 0;
    */
    // let nekoPosX = 32;
    let nekoPosX = window.innerWidth - 32;
    let nekoPosY = 92;
    // let mousePosX = 0;
    let mousePosX = window.innerWidth;
    let mousePosY = 60;

    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation = null;
    let idleAnimationFrame = 0;
    const nekoSpeed = 13;
    const spriteSets = {
        idle: [[-3, -3]],
        alert: [[-7, -3]],
        scratch: [
            [-5, 0],
            [-6, 0],
            [-7, 0],
        ],
        tired: [[-3, -2]],
        sleeping: [
            [-2, 0],
            [-2, -1],
        ],
        N: [
            [-1, -2],
            [-1, -3],
        ],
        NE: [
            [0, -2],
            [0, -3],
        ],
        E: [
            [-3, 0],
            [-3, -1],
        ],
        SE: [
            [-5, -1],
            [-5, -2],
        ],
        S: [
            [-6, -3],
            [-7, -2],
        ],
        SW: [
            [-5, -3],
            [-6, -1],
        ],
        W: [
            [-4, -2],
            [-4, -3],
        ],
        NW: [
            [-1, 0],
            [-1, -1],
        ],
    };
    function create() {
        nekoEl.id = "oneko";
        nekoEl.style.width = "32px";
        nekoEl.style.height = "32px";
        nekoEl.style.position = "fixed";
        nekoEl.style.backgroundImage = "url('/images/oneko.gif')";
        nekoEl.style.imageRendering = "pixelated";
        // nekoEl.style.left = "16px";
        nekoEl.style.left = window.innerWidth - 48 + "px";
        nekoEl.style.top = "76px";

        document.body.appendChild(nekoEl);
        setTimeout(function() {
            nekoEl.style.opacity = 1;
        }, 100)

        document.onmousemove = (event) => {
            mousePosX = event.clientX;
            mousePosY = event.clientY;
        };

        window.onekoInterval = setInterval(frame, 100);
    }

    function setSprite(name, frame) {
        const sprite = spriteSets[name][frame % spriteSets[name].length];
        nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${
            sprite[1] * 32
        }px`;
    }

    function resetIdleAnimation() {
        idleAnimation = null;
        idleAnimationFrame = 0;
    }

    function idle() {
        idleTime += 1;

        // every ~ 20 seconds
        if (
            idleTime > 10 &&
            Math.floor(Math.random() * 200) == 0 &&
            idleAnimation == null
        ) {
            idleAnimation = ["sleeping", "scratch"][
                Math.floor(Math.random() * 2)
            ];
        }

        switch (idleAnimation) {
            case "sleeping":
                if (idleAnimationFrame < 8) {
                    setSprite("tired", 0);
                    break;
                }
                setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
                if (idleAnimationFrame > 192) {
                    resetIdleAnimation();
                }
                break;
            case "scratch":
                setSprite("scratch", idleAnimationFrame);
                if (idleAnimationFrame > 9) {
                    resetIdleAnimation();
                }
                break;
            default:
                setSprite("idle", 0);
                return;
        }
        idleAnimationFrame += 1;
    }

    function frame() {
        frameCount += 1;
        const diffX = nekoPosX - mousePosX;
        const diffY = nekoPosY - mousePosY;
        const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

        if (distance < nekoSpeed || distance < 48) {
            idle();
            return;
        }

        idleAnimation = null;
        idleAnimationFrame = 0;

        if (idleTime > 1) {
            setSprite("alert", 0);
            // count down after being alerted before moving
            idleTime = Math.min(idleTime, 7);
            idleTime -= 1;
            return;
        }

        let direction = diffY / distance > 0.5 ? "N" : "";
        direction += diffY / distance < -0.5 ? "S" : "";
        direction += diffX / distance > 0.5 ? "W" : "";
        direction += diffX / distance < -0.5 ? "E" : "";
        setSprite(direction, frameCount);

        nekoPosX -= (diffX / distance) * nekoSpeed;
        nekoPosY -= (diffY / distance) * nekoSpeed;

        nekoEl.style.left = `${nekoPosX - 16}px`;
        nekoEl.style.top = `${nekoPosY - 16}px`;
    }

    create();
}
