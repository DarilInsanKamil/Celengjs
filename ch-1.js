function sum (){
        var i;
        var a = 0;
        for(i = 0; i < arguments.length; i++) {
                a = a + arguments[i];
        }
        return a;
}
console.log(sum(1, 2, 7));