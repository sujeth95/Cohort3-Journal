function canVote(age){
    if(age > 18){
        return true;
    }
    else{
        return false;
    }

}
let ans = canVote(19);
console.log(ans);