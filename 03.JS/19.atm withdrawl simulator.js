let amnt = 1000;

for( let i=0 ; i<3 ; i++ ){
    let flag = confirm("do you want to withdraw?")
    if( flag === true ){
        let deduct = prompt("give the amount you want : ")
        if( amnt - deduct >= 0 ){
            amnt -= deduct
            console.log("the amount is deduced and you have a balance of "+amnt);
        }
        else{
            console.error("insufficient balance");
            break;
        }
    }
    else{
        break;
    }
}