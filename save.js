function add0(m) { return m < 10 ? '0' + m : m }

function format(seconds) {
    var time = new Date(seconds);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}

function finalFormat(seconds) {
    var time = new Date(seconds);
    //var y = time.getFullYear();
    var m = time.getMonth();
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}

function update() {
    var startSeconds = 1626660000;
    var save = 32000 + 4828.14 + 2000 + 1500 + 2000;
    var id = setInterval(flush, 1000)

    function flush() {
        document.getElementById('save').value = save;
        document.getElementById('startSeconds').value = startSeconds;
        var startTime = format(startSeconds * 1000);
        document.getElementById('startTime').value = startTime;
        var currentSeconds = Date.parse(new Date()) / 1000;
        document.getElementById('currentSeconds').value = currentSeconds;
        var currentTime = format(currentSeconds * 1000);
        document.getElementById('currentTime').value = currentTime;
        var Incomes = (currentSeconds - startSeconds) * 0.0021;
        document.getElementById('Incomes').value = Incomes;
        document.getElementById('retSave').value = save - Incomes;
        var final = parseInt((save - Incomes) / 0.0021);
        var finalseconds = final * 1000;
        var finalTime = finalFormat(finalseconds);
        document.getElementById('finalTime').value = finalTime;

        var elem = document.getElementById('myBar');
        var pVal = parseFloat(Incomes / save) * 100;
        elem.style.width = pVal + '%';
        elem.innerHTML = pVal * 1 + "%";
    }

};