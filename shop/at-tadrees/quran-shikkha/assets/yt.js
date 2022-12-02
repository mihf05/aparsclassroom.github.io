const video = document.getElementById("video");

const videoId = window.location.search.split("?")[1];

firebase.auth().onAuthStateChanged(function (e) {
    if (e) {
        fetch(`https://${shopName2}/access/${productCode}/${e.uid}/${videoId}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                if (data.status == 200) {
                    const content = data.content;
                    document.getElementById("title").innerHTML = content.title;
                    document.getElementById("description").innerText = content.description;
                    if (content.type == "yt") {
                        document.getElementById('video').innerHTML = `
                        <iframe src="${content.link.replace("watch?v=", "embed/")}"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                        `;
                    } else {
                        document.getElementById('video').innerHTML = `
                        <video width="100%" controls controlsList="nodownload">
    <source data-src="${content.link}" type="video/mp4">
</video>
                        `;
                    }
                } else {
                    location.replace(`https://${shopName2}/${productCode}`);
                }
            })
            .catch(err => {
                console.log(err);
            }
            );
    } else {
        location.replace(`/shop/dashboard/login`);
    }
});
