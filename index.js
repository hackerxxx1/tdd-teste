
module.exports={
    add: (a,b) => {
    return(a+b)
    },
    sub: (a,b) => {
        return(a-b)
    },
    mut: (a,b) => {
        return(a*b)
    },
    divi: (a,b) => {
        if(b != 0){return(a/b)}else{throw new TypeError("voce e um merda meu irmao nao se divide por zero");}
    }
}