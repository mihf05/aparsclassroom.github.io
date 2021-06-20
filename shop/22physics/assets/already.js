firebase.auth().onAuthStateChanged(function(e) {
    if (e) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            'uid': e.uid
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://${shopName}.herokuapp.com/${productCode}/purchase`, requestOptions)
            .then(response => {
                return response.json()
            })
            .then(result => {
                if (result.code === 200) {
                    var data = result.data;
                    const sum = data.map(element => element.access).reduce((a, b) => a + b, 0);
                    const sum2 = data.map(el => el.amount).reduce((c, d) => c + d, 0);
                    if (sum > 0.5) {
                        if (data.length == 1) {
                            document.getElementById('info').innerHTML = `
                        <h3>Purchase Information</h3>
                        Invoice : ${data[0].invoice}<br>
                        Product : ${data[0].ProductName}<br>
                        Total Paid Amount : ${sum2} ৳ <br>
                        Username : ${data[0].Name}<br>
                        Joining ID : <span id="pass">${data[0].tran_id}</span>&nbsp;&nbsp;&nbsp;<button id="cpBtn" class="cp btn btn-success d-print-none" data-clipboard-target="#pass">Copy ID</button><br>
                        Email : ${data[0].email}<br>
                        Phone No. ${data[0].phone}<br>
                        College : ${data[0].College}<br>
                        HSC : ${data[0].HSC}<br>
                        Date : ${data[0].time}<br><br>
                        Secret Group Link : <br><a href="${appl}" target="_blank">${appl}</a>
                        <br><br>
                        <h3>Group Join Request should be approved in 24 hours.<br> so please have patience.</h3>
                        `;
                        } else {
                            document.getElementById('info').innerHTML = `
                                <h3>Purchase Information</h3>
                                1<sup>st</sup> Invoice : ${data[0].invoice}<br>
                                2<sup>nd</sup> Invoice : ${data[1].invoice}<br>
                                Product : ${data[0].ProductName}<br>
                                Total Paid Amount : ${sum2} ৳ <br>
                                Username : ${data[0].Name}<br>
                                Joining ID (1st Half) : <span id="pass">${data[0].tran_id}</span>&nbsp;&nbsp;&nbsp;<button id="cpBtn" class="cp btn btn-success d-print-none" data-clipboard-target="#pass">Copy ID1</button><br><hr>
                                Joining ID (2nd Half) :  <span id="pass2">${data[1].tran_id}</span>&nbsp;&nbsp;&nbsp;<button id="cpBtn" class="cp btn btn-success d-print-none" data-clipboard-target="#pass2">Copy ID2</button><br>
                                Email : ${data[0].email}<br>
                                Phone No. ${data[0].phone}<br>
                                College : ${data[0].College}<br>
                                HSC : ${data[0].HSC}<br>
                                1<sup>st</sup> Payment : ${data[0].time}<br>
                                2<sup>nd</sup> Payment : ${data[1].time}<br><br>
                                Secret Group Link : <br><a href="${appl}" target="_blank">${appl}</a>
                                <br><br>
                                <h3>Group Join Request should be approved in 24 hours.<br> so please have patience.</h3>
                                `;
                        }
                    } else {
                        document.getElementById('info').innerHTML = `
                        <h3>Purchase Information</h3>
                        Invoice : ${data[0].invoice}<br>
                        Product : ${data[0].ProductName}<br>
                        Total Paid Amount : ${sum2} ৳ <br>
                        Username : ${data[0].Name}<br>
                        Joining ID (1st Half) : <span id="pass">${data[0].tran_id}</span>&nbsp;&nbsp;&nbsp;<button id="cpBtn" class="cp btn btn-success d-print-none" data-clipboard-target="#pass">Copy ID</button><br>
                        Email : ${data[0].email}<br>
                        Phone No. ${data[0].phone}<br>
                        College : ${data[0].College}<br>
                        HSC : ${data[0].HSC}<br>
                        Payment Date : ${data[0].time}<br>
                        <strong>You must pay the 2<sup>nd</sup> Installment in 2 months !</strong><br><br>
                        Secret Group Link : <br><a href="${appl}" target="_blank">${appl}</a>
                        <br><br>
                        <h3>Group Join Request should be approved in 24 hours.<br> so please have patience.</h3>
                        `;
                    }


                    var clipboard = new ClipboardJS('.cp');
                    clipboard.on('success', function(e) {
                        alert("Copied successfully!!")
                        e.clearSelection();
                    });

                    clipboard.on('error', function(e) {
                        alert('Action:', e.action);
                    });
                } else {
                    location.replace("./");
                }
            })
            .catch(() => {
                location.replace("./");
            })
    } else {
        location.replace("./");
    }
})