function deretKasku(n){
        var arr = [];
        var x = 3;
        for (var i = 0; i < n; i++) {
          if(x % 6 == 0 && x % 5 == 0){
            arr[i] = 'KASKUS';
          }else if (x % 6 == 0) {
            arr[i] = 'KUS';
          }else if (x % 5 == 0) {
            arr[i] = 'KAS';
          }else{
            arr[i] = x;
          }
          x = x + 3;
        }
        return arr;
      }
      console.log(deretKasku(10));