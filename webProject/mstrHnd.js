

function scnChng(value){
document.getElementById("wndwMain_ID").src = value
}

let qMarkBtnCnt = 0

function qMarkCounter(){
    qMarkBtnCnt++;
    if( 5000 <= qMarkBtnCnt){
        document.getElementById("victoryMessage_ID").style.visibility = "visib;e"  }
}