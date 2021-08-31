fetch('http://localhost:3000/data-drivers')
    .then((res) => {
        return (res.json())
    })
    .then((res) => {
        let historicData = document.querySelector('#classic-data')

        let fetch = document.querySelector('#classic-data').innerHTML
        historicData.innerHTML =
            `     
        <div id="carousel1" class="carousel slide h-100 w-100 pointer-event" data-bs-ride="carousel"
            href='#carousel1'>

            <div class="carousel-inner h-100" href='#carousel1' >
                <div class="carousel-item active h-100" href='#carousel1'>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #af1926; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[0]}</p>
                                                <img src="images/classic/Nino Farina.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[0]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[0]}
                                                        <br>
                                                        ${res.team[0]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #af1926; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[1]}</p>
                                                <img src="images/classic/Fangio.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[1]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[1]} <br>
                                                    ${res.team[1]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #ff2800; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[2]}</p>
                                                <img src="images/classic/Ascari.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[2]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[2]}
                                                        <br>
                                                        ${res.team[2]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #ff2800; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[3]}</p>
                                                <img src="images/classic/Ascari 2.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[3]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[3]} <br>
                                                        ${res.team[3]}</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item h-100" href='#carousel1'>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #C0C0C0; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[4]}</p>
                                                <img src="images/classic/Fangio 2.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[4]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2 text-truncate" id="historic">${res.driver[4]} <br>
                                                    ${res.team[4]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #C0C0C0; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[5]}</p>
                                                <img src="images/classic/Fangio 3.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[5]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[5]} <br>
                                                        ${res.team[5]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #ff2800; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[6]}</p>
                                                <img src="images/classic/Fangio 4.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[6]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[6]} <br>
                                                        ${res.team[6]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #ff2800; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[7]}</p>
                                                <img src="images/classic/Fangio 5.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[7]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[7]} <br>
                                                        ${res.team[7]}</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item h-100" href='#carousel1'>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #ff2800; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[8]}</p>
                                                <img src="images/classic/Hawthorn.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[8]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[8]} <br>
                                                        ${res.team[8]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #637a0a; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[9]}</p>
                                                <img src="images/classic/Brabham.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[9]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[9]} <br>
                                                        ${res.team[9]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #637a0a; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[10]}</p>
                                                <img src="images/classic/Brabham 2.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[10]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[10]} <br>
                                                        ${res.team[10]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #ff2800; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[11]}</p>
                                                <img src="images/classic/Phill Hill.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[11]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[11]} <br>
                                                        ${res.team[11]}</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item h-100" href='#carousel1'>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #013220; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[12]}</p>
                                                <img src="images/classic/Graham Hill.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[12]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[12]} <br>
                                                        ${res.team[12]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #000000; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[13]}</p>
                                                <img src="images/classic/Jim Clark.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[13]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[13]} <br>
                                                        ${res.team[13]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #ff2800; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[14]}</p>
                                                <img src="images/classic/John Surtees.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[14]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[14]} <br>
                                                        ${res.team[14]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #000000; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[15]}</p>
                                                <img src="images/classic/Jim Clark 2.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[15]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[15]} <br>
                                                        ${res.team[15]}</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item h-100" href='#carousel1'>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #637a0a; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[16]}</p>
                                                <img src="images/classic/Brabham 3.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[16]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[16]} <br>
                                                        ${res.team[16]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #637a0a; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[17]}</p>
                                                <img src="images/classic/Denny Hulme.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[17]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[17]} <br>
                                                        ${res.team[17]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #000000; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[18]}</p>
                                                <img src="images/classic/Graham Hill 2.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[18]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[18]} <br>
                                                        ${res.team[18]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #00247d; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[19]}</p>
                                                <img src="images/classic/Jackie Stewart.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[19]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[19]} <br>
                                                        ${res.team[19]}</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item h-100" href='#carousel1'>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #000000; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[20]}</p>
                                                <img src="images/classic/Jochen Rindt.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[20]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[20]} <br>
                                                        ${res.team[20]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #0038A8; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[21]}</p>
                                                <img src="images/classic/Jackie Stewart 2.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[21]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[21]} <br>
                                                        ${res.team[21]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #000000; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[22]}</p>
                                                <img src="images/classic/Emerson Fittipaldi.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[22]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[22]} <br>
                                                        ${res.team[22]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #0038A8; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[23]}</p>
                                                <img src="images/classic/Jackie Stewart 3.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[23]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[23]} <br>
                                                        ${res.team[23]}</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item h-100" href='#carousel1'>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #C0C0C0; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[24]}</p>
                                                <img src="images/classic/Emerson Fittipaldi 2.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[24]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2 text-truncate" id="historic">${res.driver[24]} <br>
                                                        ${res.team[24]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #ff2800; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[25]}</p>
                                                <img src="images/classic/Niki Lauda.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[25]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[25]} <br>
                                                        ${res.team[25]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #C0C0C0; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[26]}</p>
                                                <img src="images/classic/James Hunt.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[26]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[26]} <br>
                                                        ${res.team[26]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #ff2800; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[27]}</p>
                                                <img src="images/classic/Niki Lauda 2.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[27]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[27]} <br>
                                                        ${res.team[27]}</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item h-100" href='#carousel1'>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #000000; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[28]}</p>
                                                <img src="images/classic/Mario Andretti.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[28]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[28]} <br>
                                                        ${res.team[28]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #ff2800; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[29]}</p>
                                                <img src="images/classic/Jody Scheckter.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[29]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[29]} <br>
                                                        ${res.team[29]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #1351d8; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[30]}</p>
                                                <img src="images/classic/Alan Jones.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[30]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[30]} <br>
                                                        ${res.team[30]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #637a0a; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[31]}</p>
                                                <img src="images/classic/Nelson Piquet.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[31]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[31]} <br>
                                                        ${res.team[31]}</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item h-100" href='#carousel1'>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #1351d8; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[32]}</p>
                                                <img src="images/classic/Keke Rosberg.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[32]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[32]} <br>
                                                        ${res.team[32]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #637a0a; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[33]}</p>
                                                <img src="images/classic/Nelson Piquet 2.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[33]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[33]} <br>
                                                        ${res.team[33]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #C0C0C0; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[34]}</p>
                                                <img src="images/classic/Niki Lauda 3.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[34]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[34]} <br>
                                                        ${res.team[34]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #C0C0C0; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[35]}</p>
                                                <img src="images/classic/Alain Prost.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[35]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[35]} <br>
                                                        ${res.team[35]}</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item h-100" href='#carousel1'>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #C0C0C0; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[36]}</p>
                                                <img src="images/classic/Alain Prost 2.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[36]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[36]} <br>
                                                        ${res.team[36]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #1351d8; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[37]}</p>
                                                <img src="images/classic/Nelson Piquet 3.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[37]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[37]} <br>
                                                        ${res.team[37]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #C0C0C0; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[38]}</p>
                                                <img src="images/classic/Ayrton Senna.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[38]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[38]} <br>
                                                        ${res.team[38]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #C0C0C0; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[39]}</p>
                                                <img src="images/classic/Alain Prost 3.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[39]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[39]} <br>
                                                        ${res.team[39]}</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item h-100" href='#carousel1'>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #C0C0C0; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[40]}</p>
                                                <img src="images/classic/Ayrton Senna 2.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[40]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[40]} <br>
                                                        ${res.team[40]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #C0C0C0; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[41]}</p>
                                                <img src="images/classic/Ayrton Senna 3.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[41]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[41]} <br>
                                                        ${res.team[41]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #1351d8; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[42]}</p>
                                                <img src="images/classic/Nigel Mansell.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[42]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[42]} <br>
                                                        ${res.team[42]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #1351d8; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[43]}</p>
                                                <img src="images/classic/Alain Prost 4.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[43]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[43]} <br>
                                                        ${res.team[43]}</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item h-100" href='#carousel1'>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #00BFFF; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[44]}</p>
                                                <img src="images/classic/Michael Schumacher.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[44]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2 text-truncate" id="historic">${res.driver[44]} <br>
                                                        ${res.team[44]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #00BFFF; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[45]}</p>
                                                <img src="images/classic/Michael Schumacher 2.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[45]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[45]} <br>
                                                        ${res.team[45]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #1351d8; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[46]}</p>
                                                <img src="images/classic/Damon Hill.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[46]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[46]} <br>
                                                        ${res.team[46]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #1351d8; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[47]}</p>
                                                <img src="images/classic/Jacques Villeneuve.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[47]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[47]} <br>
                                                        ${res.team[47]}</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item h-100" href='#carousel1'>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #C0C0C0; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[48]}</p>
                                                <img src="images/classic/Mika Hakkinen.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[48]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[48]} <br>
                                                        ${res.team[48]}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 w-50 h-100 mx-auto">
                                            <div class="card h-100 mx-1"
                                                style="background-color: #C0C0C0; border-radius: 0.55rem;">
                                                <p class="card-text text-center h5 m-0" id="historic">${res.data[49]}</p>
                                                <img src="images/classic/Mika Hakkinen 2.png"
                                                    class="card-img-top w-100 h-50 img-fluid" alt="...">
                                                <a href="${res.info[49]}" target="_blank">
                                                    <p class="card-text text-center h4 mt-sm-3 mt-2" id="historic">${res.driver[49]} <br>
                                                        ${res.team[49]}</p>
                                                </a>
                                            </div>
                                        </div>
                                    
                                    </div>
                </div>
            </div>

        `
            + fetch
    })

    fetch('http://localhost:3000/data-drivers')
    .then((res) => {
        return (res.json())
    })
    .then((res) => {
        let contemporaryData = document.querySelector('#contemporary-data')
        
        let fetch = document.querySelector('#contemporary-data').innerHTML
        contemporaryData.innerHTML =
            `

<div class="carousel-inner h-100 w-100" href='#carousel1'>
    <div id="carousel2" class="carousel slide h-100 pointer-event" data-bs-ride="carousel"
        href='#carousel1'>
        <div class="carousel-item active h-100" href='#carousel1'>
            <div class="col-md-3 w-50 h-100 mx-auto">
                <div class="card h-100 mx-1"
                    style="background-color: #C0C0C0; border-radius: 0.55rem;">
                    <p class="card-text text-center h5 m-0" id="contemporary">${res.data[50]}</p>
                    <img src="images/contemporary/Hamilton.png"
                        class="card-img-top w-100 h-50 img-fluid" alt="...">
                    <a href="${res.info[50]}" target="_blank">
                        <p class="card-text text-center h4 mt-sm-3 mt-2" id="contemporary">${res.driver[50]}
                            <br>
                            ${res.team[50]}</p>
                    </a>
                </div>
            </div>
            <div class="col-md-3 w-50 h-100 mx-auto">
                <div class="card h-100 mx-1"
                    style="background-color: #C0C0C0; border-radius: 0.55rem;">
                    <p class="card-text text-center h5 m-0" id="contemporary">${res.data[51]}</p>
                    <img src="images/contemporary/Hamilton 2.png"
                        class="card-img-top w-100 h-50 img-fluid" alt="...">
                    <a href="${res.info[51]}" target="_blank">
                        <p class="card-text text-center h4 mt-sm-3 mt-2" id="contemporary">${res.driver[51]}
                            <br>
                            ${res.team[51]}</p>
                    </a>
                </div>
            </div>
            <div class="col-md-3 w-50 h-100 mx-auto">
                <div class="card h-100 mx-1"
                    style="background-color: #000000; border-radius: 0.55rem;">
                    <p class="card-text text-center h5 m-0" id="contemporary">${res.data[52]}</p>
                    <img src="images/contemporary/Hamilton 3.png"
                        class="card-img-top w-100 h-50 img-fluid" alt="...">
                    <a href="${res.info[52]}" target="_blank">
                        <p class="card-text text-center h4 mt-sm-3 mt-2" id="contemporary">${res.driver[52]}
                        <br>
                        ${res.team[52]}</p>
                    </a>
                </div>
            </div> 
        </div> 
    </div>
</div>
            ` + fetch
    })
    
            fetch('http://localhost:3000/data-drivers')
            .then((res) => {
                return (res.json())
            })
            .then((res) => {

                let modernData = document.querySelector('#modern-data')
        
                let fetch = document.querySelector('#modern-data').innerHTML
                modernData.innerHTML =

                `
                <div id="carousel3" class="carousel slide h-100 w-100 pointer-event" data-bs-ride="carousel"
                                href='#carousel1'>
                    
                            
                <div class="carousel-inner h-100" href='#carousel1'>
                                
                
                <div class="carousel-item active h-100" href='#carousel1'>
                <div class="col-md-3 w-50 h-100 mx-auto">
                    <div class="card h-100 mx-1"
                        style="background-color: #ff2800; border-radius: 0.55rem;">
                        <p class="card-text text-center h5 m-0" id="modern">${res.data[53]}</p>
                        <img src="images/modern/Schumacher.png"
                            class="card-img-top w-100 h-50 img-fluid" alt="...">
                        <a href="${res.info[53]}" target="_blank">
                            <p class="card-text text-center h4 mt-sm-3 mt-2 text-truncate" id="modern">${res.driver[53]}
                                <br>
                                ${res.team[53]}</p>
                        </a>
                    </div>
                </div>
                <div class="col-md-3 w-50 h-100 mx-auto">
                    <div class="card h-100 mx-1"
                        style="background-color: #ff2800; border-radius: 0.55rem;">
                        <p class="card-text text-center h5 m-0" id="modern">${res.data[54]}</p>
                        <img src="images/modern/Schumacher 1.png"
                            class="card-img-top w-100 h-50 img-fluid" alt="...">
                        <a href="${res.info[54]}" target="_blank">
                            <p class="card-text text-center h4 mt-sm-3 mt-2" id="modern">${res.driver[54]} <br>
                                ${res.team[54]}</p>
                        </a>
                    </div>
                </div>
                <div class="col-md-3 w-50 h-100 mx-auto">
                    <div class="card h-100 mx-1"
                        style="background-color: #ff2800; border-radius: 0.55rem;">
                        <p class="card-text text-center h5 m-0" id="modern">${res.data[55]}</p>
                        <img src="images/modern/Schumacher 2.png"
                            class="card-img-top w-100 h-50 img-fluid" alt="...">
                        <a href="${res.info[55]}" target="_blank">
                            <p class="card-text text-center h4 mt-sm-3 mt-2" id="modern">${res.driver[55]} <br>
                                ${res.team[55]}</p>
                        </a>
                    </div>
                </div>
                <div class="col-md-3 w-50 h-100 mx-auto">
                    <div class="card h-100 mx-1"
                        style="background-color: #ff2800; border-radius: 0.55rem;">
                        <p class="card-text text-center h5 m-0" id="modern">${res.data[56]}</p>
                        <img src="images/modern/Schumacher 3.png"
                            class="card-img-top w-100 h-50 img-fluid" alt="...">
                        <a href="${res.info[56]}" target="_blank">
                            <p class="card-text text-center h4 mt-sm-3 mt-2" id="modern">${res.driver[56]} <br>
                                ${res.team[56]}</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="carousel-item h-100" href='#carousel1'>
                <div class="col-md-3 w-50 h-100 mx-auto">
                    <div class="card h-100 mx-1"
                        style="background-color: #ff2800; border-radius: 0.55rem;">
                        <p class="card-text text-center h5 m-0" id="modern">${res.data[57]}</p>
                        <img src="images/modern/Schumacher 4.png"
                            class="card-img-top w-100 h-50 img-fluid" alt="...">
                        <a href="${res.info[57]}" target="_blank">
                            <p class="card-text text-center h4 mt-sm-3 mt-2 text-truncate" id="modern">${res.driver[57]} <br>
                                ${res.team[57]}</p>
                        </a>
                    </div>
                </div>
                <div class="col-md-3 w-50 h-100 mx-auto">
                    <div class="card h-100 mx-1"
                        style="background-color: #1351d8; border-radius: 0.55rem;">
                        <p class="card-text text-center h5 m-0" id="modern">${res.data[58]}</p>
                        <img src="images/modern/Alonso.png"
                            class="card-img-top w-100 h-50 img-fluid" alt="...">
                        <a href="${res.info[58]}" target="_blank">
                            <p class="card-text text-center h4 mt-sm-3 mt-2" id="modern">${res.driver[58]} <br>
                                ${res.team[58]}</p>
                        </a>
                    </div>
                </div>
                <div class="col-md-3 w-50 h-100 mx-auto">
                    <div class="card h-100 mx-1"
                        style="background-color: #1351d8; border-radius: 0.55rem;">
                        <p class="card-text text-center h5 m-0" id="modern">${res.data[59]}</p>
                        <img src="images/modern/Alonso 1.png"
                            class="card-img-top w-100 h-50 img-fluid" alt="...">
                        <a href="${res.info[59]}" target="_blank">
                            <p class="card-text text-center h4 mt-sm-3 mt-2" id="modern">${res.driver[59]} <br>
                                ${res.team[59]}</p>
                        </a>
                    </div>
                </div>
                <div class="col-md-3 w-50 h-100 mx-auto">
                    <div class="card h-100 mx-1"
                        style="background-color: #ff2800; border-radius: 0.55rem;">
                        <p class="card-text text-center h5 m-0" id="modern">${res.data[60]}</p>
                        <img src="images/modern/Kimi.png"
                            class="card-img-top w-100 h-50 img-fluid" alt="...">
                        <a href="${res.info[60]}" target="_blank">
                            <p class="card-text text-center h4 mt-sm-3 mt-2" id="modern">${res.driver[60]} <br>
                                ${res.team[60]}</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="carousel-item h-100" href='#carousel1'>
                <div class="col-md-3 w-50 h-100 mx-auto">
                    <div class="card h-100 mx-1"
                        style="background-color: #C0C0C0; border-radius: 0.55rem;">
                        <p class="card-text text-center h5 m-0" id="modern">${res.data[61]}</p>
                        <img src="images/modern/Hamilton.png"
                            class="card-img-top w-100 h-50 img-fluid" alt="...">
                        <a href="${res.info[61]}" target="_blank">
                            <p class="card-text text-center h4 mt-sm-3 mt-2" id="modern">${res.driver[61]} <br>
                                ${res.team[61]}</p>
                        </a>
                    </div>
                </div>
                <div class="col-md-3 w-50 h-100 mx-auto">
                    <div class="card h-100 mx-1"
                        style="background-color: #fce205; border-radius: 0.55rem;">
                        <p class="card-text text-center h5 m-0" id="modern">${res.data[62]}</p>
                        <img src="images/modern/Button.png"
                            class="card-img-top w-100 h-50 img-fluid" alt="...">
                        <a href="${res.info[62]}" target="_blank">
                            <p class="card-text text-center h4 mt-sm-3 mt-2" id="modern">${res.driver[62]} <br>
                                ${res.team[62]}</p>
                        </a>
                    </div>
                </div>
                <div class="col-md-3 w-50 h-100 mx-auto">
                    <div class="card h-100 mx-1"
                        style="background-color: #121f45; border-radius: 0.55rem;">
                        <p class="card-text text-center h5 m-0" id="modern">${res.data[63]}</p>
                        <img src="images/modern/Vettel.png"
                            class="card-img-top w-100 h-50 img-fluid" alt="...">
                        <a href="${res.info[63]}" target="_blank">
                            <p class="card-text text-center h4 mt-sm-3 mt-2" id="modern">${res.driver[63]} <br>
                                ${res.team[63]}</p>
                        </a>
                    </div>
                </div>
                <div class="col-md-3 w-50 h-100 mx-auto">
                    <div class="card h-100 mx-1"
                        style="background-color: #121f45; border-radius: 0.55rem;">
                        <p class="card-text text-center h5 m-0" id="modern">${res.data[64]}</p>
                        <img src="images/modern/Vettel 1.png"
                            class="card-img-top w-100 h-50 img-fluid" alt="...">
                        <a href="${res.info[64]}" target="_blank">
                            <p class="card-text text-center h4 mt-sm-3 mt-2" id="modern">${res.driver[64]} <br>
                                ${res.team[64]}</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="carousel-item h-100" href='#carousel1'>
                <div class="col-md-3 w-50 h-100 mx-auto">
                    <div class="card h-100 mx-1"
                        style="background-color: #121f45; border-radius: 0.55rem;">
                        <p class="card-text text-center h5 m-0" id="modern">${res.data[65]}</p>
                        <img src="images/modern/Vettel 2.png"
                            class="card-img-top w-100 h-50 img-fluid" alt="...">
                        <a href="${res.info[65]}" target="_blank">
                            <p class="card-text text-center h4 mt-sm-3 mt-2" id="modern">${res.driver[65]} <br>
                                ${res.team[65]}</p>
                        </a>
                    </div>
                </div>
                <div class="col-md-3 w-50 h-100 mx-auto">
                    <div class="card h-100 mx-1"
                        style="background-color: #121f45; border-radius: 0.55rem;">
                        <p class="card-text text-center h5 m-0" id="modern">${res.data[66]}</p>
                        <img src="images/modern/Vettel 3.png"
                            class="card-img-top w-100 h-50 img-fluid" alt="...">
                        <a href="${res.info[66]}" target="_blank">
                            <p class="card-text text-center h4 mt-sm-3 mt-2" id="modern">${res.driver[66]} <br>
                                ${res.team[66]}</p>
                        </a>
                    </div>
                </div>
                <div class="col-md-3 w-50 h-100 mx-auto">
                    <div class="card h-100 mx-1"
                        style="background-color: #C0C0C0; border-radius: 0.55rem;">
                        <p class="card-text text-center h5 m-0" id="modern">${res.data[67]}</p>
                        <img src="images/modern/Hamilton 1.png"
                            class="card-img-top w-100 h-50 img-fluid" alt="...">
                        <a href="${res.info[67]}" target="_blank">
                            <p class="card-text text-center h4 mt-sm-3 mt-2" id="modern">${res.driver[67]} <br>
                                ${res.team[67]}</p>
                        </a>
                    </div>
                </div>
                <div class="col-md-3 w-50 h-100 mx-auto">
                    <div class="card h-100 mx-1"
                        style="background-color: #C0C0C0; border-radius: 0.55rem;">
                        <p class="card-text text-center h5 m-0" id="modern">${res.data[68]}</p>
                        <img src="images/modern/Hamilton 2.png"
                            class="card-img-top w-100 h-50 img-fluid" alt="...">
                        <a href="${res.info[68]}" target="_blank">
                            <p class="card-text text-center h4 mt-sm-3 mt-2" id="modern">${res.driver[68]} <br>
                                ${res.team[68]}</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="carousel-item h-100" href='#carousel1'>
                <div class="col-md-3 w-50 h-100 mx-auto">
                    <div class="card h-100 mx-1"
                        style="background-color: #C0C0C0; border-radius: 0.55rem;">
                        <p class="card-text text-center h5 m-0" id="modern">${res.data[69]}</p>
                        <img src="images/modern/Rosberg.png"
                            class="card-img-top w-100 h-50 img-fluid" alt="...">
                        <a href="${res.info[69]}" target="_blank">
                            <p class="card-text text-center h4 mt-sm-3 mt-2" id="modern">${res.driver[69]} <br>
                                ${res.team[69]}</p>
                        </a>
                    </div>
                </div>
                <div class="col-md-3 w-50 h-100 mx-auto">
                    <div class="card h-100 mx-1"
                        style="background-color: #C0C0C0; border-radius: 0.55rem;">
                        <p class="card-text text-center h5 m-0" id="modern">${res.data[70]}</p>
                        <img src="images/modern/Hamilton 3.png"
                            class="card-img-top w-100 h-50 img-fluid" alt="...">
                        <a href="${res.info[70]}" target="_blank">
                            <p class="card-text text-center h4 mt-sm-3 mt-2" id="modern">${res.driver[70]} <br>
                                ${res.team[70]}</p>
                        </a>
                    </div>
                </div>              
            </div>
        </div>
    </div>
                `
                    + fetch
    })
    

    

    