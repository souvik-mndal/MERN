let cnt =0;
for( let i=1 ; i<=20 ; i++ ){
    if( cnt === 3){
        break;
    }
    if( i%2===1 ){
        cnt++;
        console.log(i);
    }
}