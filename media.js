function media(list){
    let sum = 0;
    for (let i=0; i < list.length; i++){
        sum += list[i];
        return sum
    };

    let media = sum/list.length;
    console.log(`A média dos números é: ${media}`);
    return media
};

media([1,2,5,6,7])
// LF