var a;
window.addEventListener('load', function() {

    const lin1 = "aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy8=";
    const lin2 = "L2V4ZWM=";
    var ln1 = window.atob(lin1);
    var ln2 = window.atob(lin2);
    var ln = window.atob(inf);
    fetch(ln1 + ln + ln2)
        .then((res) => {
            return res.json();
        })
        .then((loadedData) => {
            a = loadedData;
            var serial = sl - 1;
            var num = a[serial].Number;
            var Word = a[serial].Word;
            var Subject = a[serial].Subject;
            var chapter = a[serial].Chapter;
            var ref = a[serial].Ref;
            var RefPage = a[serial].RefPage;
            var meaning = a[serial].Meaning;
            var description = a[serial].Description;
            var img = a[serial].img;
            var video = a[serial].video;
            var audio = a[serial].Audio;
            var link = a[serial].Return;
            document.title = a[serial].Word + ' | BioDictionary';
            document.getElementById('explainations').innerHTML = `
            <div class="row justify-content-center">
    <div class="container">

        <div style="position:absolute;">
                <a type="button" id="book" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg>
            </a>
            <a id="deletebook" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
<path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
</svg>
            </a>

            </div>
            <div style="text-align:right;">
            <a type="button" class="btn btn-primary" href="${link}" id="rt">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                </svg>
                </a> 
               </div>
                <div id="row">
                <div id="main">


        <div class="card bg-primary shadow-soft border-light px-4 py-1 mb-6">
            
            <div class="card-body text-md-left">

                <div class="row align-items-center">
                    <div class="mb-3">
                    <div class="text-center">
                    <h3 class = "bangla text-danger navbar-brand shadow-soft py-2 px-3 rounded border border-light"><strong>${Word}</strong></h3>
                    </div>
                    <div style="padding:15px;border-radius:10px" class="shadow-inset">
                    <p class = "bangla"><b>অর্থ :</b> ${meaning}</p>
                    </div>
                    <div style="margin-top:5px;padding:15px;border-radius:10px" class="shadow-inset">
                    <p class = "bangla"><b>ব্যাখ্যা :</b> ${description}</p>
                    </div>
                    <div style="margin-top:10px;padding:15px;border-radius:10px;" class="card bg-primary shadow-soft border-light px-4 mb-3">
                    <h3 class = "bangla text-secondary text-center"><strong>সূত্র</strong></h3>
                    <p class = "bangla svgs"><b>&nbsp;বই :</b> ${ref}</p>
                    <p class = "bangla svgs"><b>&nbsp;অধ্যায় :</b> ${chapter}</p>
                    <p class = "bangla svgs"><b>&nbsp;পৃষ্ঠা :</b> ${RefPage}</p>
                    </div>
                        <div class="mb-4">
                        <a type="button" class="btn btn-primary btn-pill" id="ad" onclick="play()"><span id="adImg"></span></a>
                        <audio id="audio" preload="none" src="${audio}"></audio>
                    </div>   
                </div>
                
                <div class="col-12 col-md-6 mt-4 mt-md-0 text-md-right">                 
   
                        <img src="${img}" id="image" class="card-img-top rounded" alt="${Word}">
                        <figcaption style="margin-top:10px;" class="figure-caption bangla text-center">চিত্র : ${Word}</figcaption>

            </div>
                    </div>

        </div>

        `;

            $(function() {
                var id = {
                    sl: num + "_" + chapter + "_" + Subject,
                    time: new Date(),
                    name: Word,
                    url: window.location.href
                }
                var result = JSON.parse(sessionStorage.getItem("todayWatched"));
                if (result == null) {
                    result = [];
                }
                var alreadyExists = result.filter(function(item) {
                    return item.url === window.location.href
                }).length;
                if (alreadyExists > 0) {
                    return false;
                } else {
                    result.push(id);
                }
                sessionStorage.setItem("todayWatched", JSON.stringify(result));
            });
            $(function() {
                var id = {
                    sl: num + "_" + chapter + "_" + Subject,
                    time: new Date(),
                    name: Word,
                    url: window.location.href
                }
                var result = JSON.parse(localStorage.getItem("watched"));
                if (result == null) {
                    result = [];
                }
                var alreadyExists = result.filter(function(item) {
                    return item.url === window.location.href
                }).length;
                if (alreadyExists > 0) {
                    return false;
                } else {
                    result.push(id);
                }
                localStorage.setItem("watched", JSON.stringify(result));
            });

            document.getElementById('deletebook').style.display = "none";
            var book = document.getElementById('book');
            var deletebook = document.getElementById('deletebook');
            book.addEventListener('click', saveBook);
            deletebook.addEventListener('click', deleteBook);



            function saveBook(e) {
                var bookmark = {
                    sl: num + "_" + chapter + "_" + Subject,
                    time: new Date(),
                    name: Word,
                    url: window.location.href
                }
                if (localStorage.getItem('bookmarks') === null) {
                    var bookmarks = [];
                    bookmarks.push(bookmark);
                    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                    // alert(Word + " added as your First bookmark!!!")
                } else {
                    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
                    bookmarks.push(bookmark);
                    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                    // alert("You've added " + Word + " as a new bookmark")
                }
                asekina()
                asebook()
            }

            function deleteBook(url) {
                var url = window.location.href
                var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
                // Loop through the bookmarks
                for (var i = 0; i < bookmarks.length; i++) {
                    if (bookmarks[i].url == url) {
                        bookmarks.splice(i, 1);
                        deletebook.style.display = "none";
                        book.style.display = "inline-block";
                        // alert("You've removed " + Word + " as a bookmark")
                    }

                }
                // Re-set back to localStorage
                localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                asebook()
                asekina()
            }

            $('#Video').on('hidden.bs.modal', function() {
                player.currentTime = 0
                player.pause();
            })


            if (img == "" || img == "https://gdurl.com") {
                document.getElementById('image').style.display = "none";
                document.getElementById('fi').style.display = "none";
            } else {
                document.getElementById('image').style.cssText = "display:inline-block;";
            }
            if (audio == "" || audio == "https://gdurl.com") {
                document.getElementById('ad').style.display = "none";
            } else {
                document.getElementById('adImg').innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-volume-off-fill" viewBox="0 0 16 16">
                <path d="M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
              </svg>
                `;
            }
            var book = document.getElementById('book');
            var deletebook = document.getElementById('deletebook');

            var result = JSON.parse(localStorage.getItem("bookmarks"));
            if (result === null) {
                return;
            }
            var alreadyExists = result.filter(function(item) {
                return window.location.href === item.url
            }).length;

            if (alreadyExists > 0) {
                deletebook.style.display = "inline-block";
                book.style.display = "none";
                return false;
            } else {
                deletebook.style.display = "none";
                book.style.display = "inline-block";
            }

            function aseKi() {
                if (localStorage.getItem('bookmarks') === null || localStorage.getItem('bookmarks') === "[]") {

                } else {
                    asekina()
                }
            }
            aseKi()

            function asekina() {
                var url = window.location.href
                var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
                for (var i = 0; i < bookmarks.length; i++) {
                    if (bookmarks[i].url === url) {
                        return book.style.display = "inline-block";


                    } else {
                        return deletebook.style.display = "none";
                    }
                }
            }

            function asebook(url) {
                var url = window.location.href
                var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
                for (var i = 0; i < bookmarks.length; i++) {
                    if (bookmarks[i].url === url) {
                        deletebook.style.display = "inline-block";
                        book.style.display = "none";
                    } else {
                        deletebook.style.display = "none";
                        book.style.display = "inline-block";
                    }
                }
            }
            asebook()
        })
        .catch((err) => {
            console.error(err);
        });
})


function play() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
        document.getElementById('adImg').innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
        <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
        <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
      </svg>
        `;
    } else {
        audio.pause();
        audio.currentTime = 0
        document.getElementById('adImg').innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
        <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
      </svg>
        `;
    }

}