const product = "MMV 1st Paper (2nd half)";
const productCode = "131";
const fix = 2000;
const pls = 1500;
const appl = "https://www.facebook.com/groups/169092541444666";
const vidD = document.getElementById('video');
const clprc = document.getElementById('clprc');
if (screen.width <= 600) {
    clprc.classList.add('fixed-bottom');
} else {
    clprc.classList.remove('fixed-bottom');
    vidD.style.position = 'sticky';
}


fetch(`${courseContent}?productCode=${productCode}`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        let types = data.types;

        document.getElementById('con1').innerHTML = `<i class="fab fa-youtube"></i>&nbsp; ${types[0].TotalClasses} ${types[0].ContType}`;
        document.getElementById('con4').innerHTML = `<i class="fas fa-question-circle"></i>&nbsp;${types[1].TotalClasses} ${types[1].ContType} `;
        document.getElementById('con5').innerHTML = `<i class="fas fa-calendar-check"></i>&nbsp;${types[2].TotalClasses} ${types[2].ContType} `;
        document.getElementById('enrolled').setAttribute('countTo', types[4].TotalClasses);
        if (document.getElementById('enrolled')) {
            const countUp = new CountUp('enrolled', document.getElementById("enrolled").getAttribute("countTo"));
            if (!countUp.error) {
                countUp.start();
            } else {
                console.error(countUp.error);
            }
        }
        document.getElementById('duration').innerHTML = `${types[3].TotalClasses} মাস`;
        document.getElementById('loading1').innerHTML = "";
        document.getElementById('pra11').innerHTML = "";
        document.getElementById('exloading11').innerHTML = "";

        let classes = data.classes;

        var as = classes.filter((all) => {
            return all.SubAndPaper == 'Higher Math (1st Paper)'
        })

        let domC = document.getElementById('Classes1');
        as.forEach(element => {
            if (element.Playlist != "") {
                domC.innerHTML += `
                <li>
                <a href = "${element.Playlist}" style="color:rgb(37, 173, 55);text-decoration:none;font-weight:bold;" target="blank">🗝️🔒 ${element.Chapter} - ${element.LiveClass} Classes</a>
                </li>`
            } else {
                domC.innerHTML += `
                <li class="disabled">
                🔒 ${element.Chapter} - ${element.LiveClass} Classes
                </li>`
            }

        });


        let prac1 = document.getElementById('prac1');
        as.forEach(element => {
            prac1.innerHTML += `
                <li class="disabled">
                🔒 ${element.Chapter} - ${element.QnAClass} Sheets
                </li>`

        });

        let ex1 = document.getElementById('ex1');
        as.forEach(element => {
            ex1.innerHTML += `
                <li class="disabled">
                🔒 ${element.Chapter} - ${element.Exam} Exam(s)
                </li>`

        });

    })
    .catch((err) => {
        console.log(err)
    })