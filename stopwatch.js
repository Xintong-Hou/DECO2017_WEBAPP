var watchTxt=document.getElementsByTagName("input")[0];
var watchStart=document.getElementsByTagName("input")[1];
var watchStop=document.getElementsByTagName("input")[2];
var watchReset=document.getElementsByTagName("input")[3];
var n= 0, timer=null;
//Start the watch
watchStart.onclick= function () {
    clearInterval(timer);
    timer=setInterval(function () {
        n++;
        var m=parseInt(n/3600);
        var s=parseInt(n/60%60);
        var h=parseInt(n%60);
        watchTxt.value=addZero(m)+":"+addZero(s)+":"+addZero(h);
    },1000/60);
};
//Stop  the watch
watchStop.onclick= function () {
    clearInterval(timer);
}
//reset the watch
watchReset.onclick= function () {
    watchTxt.value="00:00:00";
    n=0;
}
//add zero
function addZero(a){
    return a<10?"0"+a:""+a;
}
