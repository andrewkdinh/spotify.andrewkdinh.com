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

    loadSpotifyLibrary();
    loadArtistSlideshow();
    // loadProjects();
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


////////////////////////////////
// Spotify
////////////////////////////////
function loadSpotifyLibrary() {
    // Spotify configuration options
    const spotify_folders = {
        "Spotify Library": {
            "description": "",
            "folders": ["general", "asian", "moods", "themes", "relationships", "languages"],
            "playlists": ["Present", "Top Tier"]
        },
        "asian": {
            "folders": [],
            "playlists": ["asian", "viet", "korean", "japanese", "thai", "filipino", "chinese"]
        },
        "moods": {
            "folders": [],
            "playlists": ["boys ain't shit", "sad", "upbeat smooth", "smooth", "girlboss", "recovery", "dangerous woman", "songs to scream in the car"]
        },
        "relationships": {
            "folders": [],
            "playlists": ["lovey dovey", "u suck", "the one that got away", "cheater", "broken", "won the breakup", "ur new girl"]
        },
        "general": {
            "folders": [],
            "playlists": ["Down the middle", "n00b"]
        },
        "themes": {
            "folders": [],
            "playlists": ["Soft", "Acoustic", "X"]
        },
        "languages": {
            "folders": [],
            "playlists": ["spanish", "french", "desi", "russian", "italian", "finnish"]
        }
    }
    const spotify_playlists = {
        // Top
        "Present": {
            "description": "everything I actually listen to",
            "id": "2IMvuuOimX7DKPnLMqc1M1"
        },
        "Top Tier": {
            "description": "*chef’s kiss*",
            "id": "5aywWsI6cZxXT3uvM8P60s"
        },
        // Moods
        "Soft": {
            "description": "late night blues",
            "id": "6zufMXyYd4SQiyXtYs0M4C"
        },
        "boys ain't shit": {
            "description": "Is it really that hard not to be a dick",
            "id": "75aarNiy1HmVOTHfh6xtMR",
            "image": "boys-aint-shit",
        },
        "sad": {
            "description": "I just want to be sad",
            "id": "65ClET2NwCXm0KIM0tJvjb"
        },
        "upbeat smooth": {
            "description": "euphoria",
            "id": "7yP7soSlWyDKWHvPEK2Myx"
        },
        "smooth": {
            "description": "like water",
            "id": "6MPFipDGf3dO6rrP6eEWhA"
        },
        "girlboss": {
            "description": "power",
            "id": "2asIjRXJVcXdX8VJRnJcid"
        },
        "recovery": {
            "description": "The darkness always fades out",
            "id": "0aRWN4ZbSmqWfSuIgyWvIE"
        },
        "dangerous woman": {
            "description": "Don’t piss her off",
            "id": "5dNPaDu2H7Pxd0F0UHy3XO"
        },
        "songs to scream in the car": {
            "description": "tearjerkers",
            "id": "10dq7z7jip4xB1lNMechwy"
        },
        // Relationships
        "lovey dovey": {
            "description": "ur cute",
            "id": "5Tm6Elavhf6WFoNRUTZB2v"
        },
        "u suck": {
            "description": "you were a waste of time",
            "id": "0oEahQmxBwxUPNc2WlcrKG"
        },
        "the one that got away": {
            "description": "In another life...",
            "id": "4ZdQXB3I27Se0CMZZU6CSP"
        },
        "cheater": {
            "description": "was she worth it?",
            "id": "7Kg5LyN9syUs3CXuj5bC0H"
        },
        "broken": {
            "description": "We started out as strangers, now we're strangers again",
            "id": "390A5uAD5zQbViVB4GqhZw"
        },
        "won the breakup": {
            "description": "Not sad anymore",
            "id": "0i1VftV9sa7gQCtKeVhd9x"
        },
        "ur new girl": {
            "description": "I'm not her",
            "id": "5kQAY69PJcsbVqszuofZ0O"
        },
        // Asian
        "asian": {
            "description": "The entirety of Asia in a single playlist",
            "id": "06retRlAghx8unPsrjmLEx"
        },
        "viet": {
            "description": "I solemnly swear I am not completely whitewashed",
            "id": "5aqApBiGX9IbftliCqFYrD"
        },
        "korean": {
            "description": "k, time for drama",
            "id": "5SbXUjhxxZzGuKoYGy4oMl"
        },
        "japanese": {
            "description": "Omae wa mou shindeiru",
            "id": "7LEpC1sK8kk44OKn2jNk9u"
        },
        "thai": {
            "description": "pavilion of the enlightened",
            "id": "5ee1QOp9ykk4XPhj3mfNod"
        },
        "filipino": {
            "description": "something about nurses",
            "id": "60qSq8D632pERRtU7VzLRz"
        },
        "chinese": {
            "description": "china rich girlfriend",
            "id": "4ij0ETHiuyVUKaWuSarX7A"
        },
        // General
        "Down the middle": {
            "description": "Universal enjoyment",
            "id": "7DRLuqvW64z6GkNlPsj8Mc"
        },
        "n00b": {
            "description": "throw it back",
            "id": "5vNcWJaSHWZovnqJJufwmi"
        },
        "Acoustic": {
            "description": "",
            "id": "7cjU25kGWMzQpH112OKqBC"
        },
        "X": {
            "description": "ho ho ho",
            "id": "3RKkec4zM4qs5GNWBed3sX"
        },
        // Languages
        "spanish": {
            "description": "Hola, soy Dora!",
            "id": "1II9EjZWmyJ0P11CqCuBSC"
        },
        "french": {
            "description": "bon appétit",
            "id": "3qV1SOvuTMZCIohZx62vww"
        },
        "desi": {
            "description": "bollywood",
            "id": "29YTOEFbW7jd9vRj1iQtlz"
        },
        "russian": {
            "description": "",
            "id": "0RoOK9nxxqX8RegTNebOlc"
        },
        "italian": {
            "description": "",
            "id": "2whi2snJbxNYfaHgDe2obb"
        },
        "finnish": {
            "description": "",
            "id": "5V9Bj29poxkWIF2qG51N2Z"
        }
    }

    const spotify_elem = document.getElementById("spotify");
    let views = []

    // Create HTML elements

    // Calculate folder descriptions
    let folder_descriptions = {};
    for (let folder_title in spotify_folders) {
        let description = spotify_folders[folder_title]["description"]
        if (description === undefined) {
            const folder_count = spotify_folders[folder_title]["folders"].length ?? 0
            const playlist_count = spotify_folders[folder_title]["playlists"].length ?? 0
            if (folder_count + playlist_count === 0) {
                description = "";
            } else if (folder_count > 0 && playlist_count > 0) {
                description = `${folder_count} folder${folder_count > 1 ? "s" : ""}, ${playlist_count} playlist${playlist_count > 1 ? "s" : ""}`;
            } else if (folder_count > 0) {
                description = `${folder_count} folder${folder_count > 1 ? "s" : ""}`;
            } else {
                description = `${playlist_count} playlist${playlist_count > 1 ? "s" : ""}`;
            }
        }
        folder_descriptions[folder_title] = description
    }

    // Create view for each folder
    for (let folder_title in spotify_folders) {
        const is_top_level = folder_title === "Spotify Library";

        const view_elem = document.createElement("div");
        view_elem.classList = ["spotify-view"]
        if (is_top_level) {
            view_elem.classList.add("spotify-view-active")
        }
        view_elem.id = `spotify-folder-${folder_title}`
        spotify_elem.appendChild(view_elem)

        const header_elem = document.createElement("div");
        header_elem.classList = ["spotify-view-header"]
        view_elem.appendChild(header_elem);

        if (!is_top_level) {
            const button_elem = document.createElement("button");
            button_elem.disabled = true;
            button_elem.classList = ["spotify-back"];
            button_elem.addEventListener("click", function() {
                let last_view = views.pop()
                if (last_view != undefined) {
                    view_elem.querySelectorAll("button").forEach(button_elem => {
                        button_elem.disabled = true;
                    });
                    last_view.classList.remove("spotify-view-active")
                }
            });
            header_elem.appendChild(button_elem);

            const svg_elem = document.createElementNS("http://www.w3.org/2000/svg",'svg');
            svg_elem.classList = ["icon-spotify-back"];
            button_elem.appendChild(svg_elem)

            const use_elem = document.createElementNS("http://www.w3.org/2000/svg",'use');
            use_elem.setAttribute("href", "#icon-spotify-back");
            svg_elem.appendChild(use_elem);
        }

        const header_title_elem = document.createElement("div");
        header_title_elem.classList = ["spotify-view-title"]
        header_title_elem.innerText = folder_title;
        header_elem.appendChild(header_title_elem);

        const header_desc_elem = document.createElement("div");
        header_desc_elem.classList = ["spotify-view-desc"];
        header_desc_elem.innerText = folder_descriptions[folder_title] ?? "";
        header_elem.appendChild(header_desc_elem);

        // Create folders section
        const folders_elem = document.createElement("div");
        folders_elem.classList = ["spotify-folders"]
        view_elem.appendChild(folders_elem);
        (spotify_folders[folder_title]["folders"] ?? []).forEach(inner_folder_title => {
            const button_elem = document.createElement("button")
            if (!is_top_level) {
                button_elem.disabled = true;
            }
            button_elem.classList = "spotify-folder";
            button_elem.title = `${inner_folder_title} folder`;
            button_elem.id = `to-spotify-folder-${inner_folder_title}`;
            button_elem.addEventListener("click", function() {
                const elem = document.getElementById(`spotify-folder-${inner_folder_title}`);
                elem.querySelectorAll("button").forEach(button_elem => {
                    button_elem.disabled = false;
                });
                elem.classList.add("spotify-view-active");
                views.push(elem);
            });
            folders_elem.appendChild(button_elem);

            // https://stackoverflow.com/a/37079831
            const svg_elem = document.createElementNS("http://www.w3.org/2000/svg",'svg');
            svg_elem.classList = ["icon-folder"];
            button_elem.appendChild(svg_elem)

            const use_elem = document.createElementNS("http://www.w3.org/2000/svg",'use');
            use_elem.setAttribute("href", "#icon-folder");
            svg_elem.appendChild(use_elem);

            const text_elem = document.createElement("div");
            text_elem.classList = ["spotify-folder-text"];
            button_elem.appendChild(text_elem);

            const folder_title_elem = document.createElement("div");
            folder_title_elem.classList = ["spotify-folder-title"];
            folder_title_elem.innerText = inner_folder_title;
            text_elem.appendChild(folder_title_elem);

            const folder_desc_elem = document.createElement("div");
            folder_desc_elem.classList = ["spotify-folder-desc"];
            folder_desc_elem.innerText = folder_descriptions[inner_folder_title] ?? "";
            text_elem.appendChild(folder_desc_elem);
        })

        // Create playlists section
        const playlists_list = spotify_folders[folder_title]["playlists"] ?? []
        for (let i = 0; i < playlists_list.length; i++) {
            let playlist_title = playlists_list[i];
            console.log(playlist_title)

            const button_elem = document.createElement("button")
            if (!is_top_level) {
                button_elem.disabled = true;
            }
            button_elem.classList = "spotify-playlist";
            button_elem.title = `${playlist_title} playlist`;
            button_elem.id = `to-spotify-playlist-${playlist_title}`;
            button_elem.addEventListener("click", function() {
                const elem = document.getElementById(`spotify-playlist-${playlist_title}`);
                // Load iFrame if one exists
                elem.querySelectorAll("button").forEach(button_elem => {
                    button_elem.disabled = false;
                });
                elem.querySelectorAll(".spotify-playlist-embed").forEach(iframe_elem => {
                    if (iframe_elem.src == "") {
                        let spotify_id = spotify_playlists[playlist_title]["id"];
                        if (spotify_id != undefined) {
                            iframe_elem.src = `https://open.spotify.com/embed/playlist/${spotify_id}?theme=0`
                        }
                    }
                })
                elem.classList.add("spotify-view-active");
                views.push(elem);
            });
            view_elem.appendChild(button_elem);

            const playlist_img_elem = document.createElement("div");
            playlist_img_elem.classList = ["spotify-playlist-img"];
            button_elem.appendChild(playlist_img_elem);

            const img_elem = document.createElement("img");
            img_elem.loading = "lazy";
            img_elem.src = `img/spotify/${spotify_playlists[playlist_title]["image"] ?? playlist_title.toLowerCase().split(" ").join("-")}.jpg`;
            img_elem.alt = `${playlist_title} playlist cover`;
            playlist_img_elem.appendChild(img_elem);

            playlist_img_elem.innerHTML += `<div class="spotify-playlist-play"><div></div></div>`;

            const playlist_title_elem = document.createElement("div");
            playlist_title_elem.classList = ["spotify-playlist-title"];
            playlist_title_elem.innerText = playlist_title;
            button_elem.appendChild(playlist_title_elem);

            const playlist_desc_elem = document.createElement("div");
            playlist_desc_elem.classList = ["spotify-playlist-desc"];
            playlist_desc_elem.innerText = spotify_playlists[playlist_title]["description"];
            button_elem.appendChild(playlist_desc_elem);
        }
    };

    // Create view for each playlist
    for (let playlist_title in spotify_playlists) {
        const view_elem = document.createElement("div");
        view_elem.classList = ["spotify-view"]
        view_elem.id = `spotify-playlist-${playlist_title}`
        spotify_elem.appendChild(view_elem)

        const header_elem = document.createElement("div");
        header_elem.classList = ["spotify-view-header"]
        view_elem.appendChild(header_elem);

        const button_elem = document.createElement("button");
        button_elem.classList = "spotify-back";
        button_elem.addEventListener("click", function() {
            let last_view = views.pop()
            if (last_view != undefined) {
                view_elem.querySelectorAll("button").forEach(button_elem => {
                    button_elem.disabled = true;
                });
                last_view.classList.remove("spotify-view-active")
            }
        });
        header_elem.appendChild(button_elem);

        const svg_elem = document.createElementNS("http://www.w3.org/2000/svg",'svg');
        svg_elem.classList = ["icon-spotify-back"];
        button_elem.appendChild(svg_elem)

        const use_elem = document.createElementNS("http://www.w3.org/2000/svg",'use');
        use_elem.setAttribute("href", "#icon-spotify-back");
        svg_elem.appendChild(use_elem);

        const header_title_elem = document.createElement("a");
        header_title_elem.relList = ["noopener", "nofollow"]
        header_title_elem.href = `https://open.spotify.com/playlist/${spotify_playlists[playlist_title]["id"]}`
        header_title_elem.target = "_blank";
        header_title_elem.classList = ["spotify-view-title"]
        header_title_elem.innerText = playlist_title;
        header_elem.appendChild(header_title_elem);

        const header_desc_elem = document.createElement("div");
        header_desc_elem.classList = ["spotify-view-desc"];
        header_desc_elem.innerText = spotify_playlists[playlist_title]["description"] ?? "";
        header_elem.appendChild(header_desc_elem);

        const iframe_elem = document.createElement("iframe");
        iframe_elem.classList = ["spotify-playlist-embed"];
        iframe_elem.loading = "lazy";
        iframe_elem.referrerPolicy = "strict-origin-when-cross-origin";
        iframe_elem.allowFullscreen = "";
        iframe_elem.title = `${playlist_title} Spotify playlist`;
        view_elem.appendChild(iframe_elem);
    }
}

////////////////////////////////
// Artist slideshow
////////////////////////////////
function loadArtistSlideshow() {
    // Needed because Safari doesn't load the images when they're lazy
    const observer = new IntersectionObserver(function(entries, observer) {
        if (entries[0].isIntersecting) {
            // Might as well load playlist images early too
            // const images = document.querySelectorAll("#music .shadow img, #music .playlist-card img");
            const images = document.querySelectorAll("#music .shadow img");
            images.forEach(img => {
                img.src = img.dataset.src;
            });
            observer.disconnect();
        }
    }, {threshold: 0});

    observer.observe(document.getElementById("music"));
}

////////////////////////////////
// Load project iFrames
////////////////////////////////
function loadProjects() {
    document.querySelectorAll("#projects summary").forEach(elem => {
        elem.onclick = function() {
            let iframe_elem = document.getElementById(elem.id.replace("-summary", ""))
            if (iframe_elem && iframe_elem.dataset.src) {
                iframe_elem.src = iframe_elem.dataset.src;
            }
        }
    })
}

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
