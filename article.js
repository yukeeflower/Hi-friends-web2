/**
 * Created by piaoxuehua on 2018/3/4.
 */
function searchon() {
    document.getElementById("search-circle").style.width="250px";
    document.getElementById("search-input").style.display = "block";
    document.getElementById("search-input").focus();
}
function searchout() {
    document.getElementById("search-circle").style.width="74px";
    document.getElementById("search-input").style.display = "none"
}
