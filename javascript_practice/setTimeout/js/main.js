window.onload = function() {
    var out = document.getElementsByTagName('output');

    var timerID = null; // 初期化
    var startBtn = document.getElementById('start');

    startBtn.addEventListener("click", function() {

        if (!timerID) { // timeIDの中身が空ならば
            out[0].innerHTML = "タイマー作動！";
            out[1].innerHTML = new Date();
            timerID = setTimeout(function() {
                alert(timerID);
            }, 2000);
        } else { // timerIDに何か値が入っていたら
            out[0].innerHTML = "既にタイマーは作動中です。";
        }

    }, false);


    var endBtn = document.getElementById('end');

    endBtn.addEventListener("click", function() {

        if (!timerID) { // timeIDの中身が空ならば
            out[0].innerHTML = "既にタイマーは止まっています。";
        } else { // timerIDに何か値が入っていたら
            out[0].innerHTML = "タイマー停止！";
            out[1].innerHTML = "";
            clearTimeout(timerID);
            timerID = null;
        }

    }, false);
};