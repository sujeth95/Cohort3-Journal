let ctr = 0;
function callback(){
     // console.log(ctr);
    //-----OR-------
    // document.querySelectorAll("h2")[1].innerHTML = ctr;
    //-----OR-------
    const el = document.querySelectorAll("h4")[1]
    el.innerHTML = ctr;

    ctr = ctr + 1;
}
setInterval(callback,5000);
console.log("Hii This is Me");
