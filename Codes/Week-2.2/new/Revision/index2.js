const rect1 = {
    width: 2,
    height: 3,
    color: "red"
}

function area(rect){
    return rect.width * rect.height;
}

const ans = area(rect1);
console.log(ans);