function showContent()
{
    let div = document.getElementById("detail1");
    let btnText = document.getElementById("readBtn");
    if (div.style.display === "none") {
        div.style.display = "block";
    }
    else {
        div.style.display = "none";
    }
}

function showContent2()
{
    var div = document.getElementById("detail2");
    if (div.style.display !== "block") {
        div.style.display = "block";
    }
    else {
        div.style.display = "none";
    }
}


function showContent3()
{
    var div = document.getElementById("detail3");
    if (div.style.display !== "block") {
        div.style.display = "block";
    }
    else {
        div.style.display = "none";
    }
}