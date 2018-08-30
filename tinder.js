  a = setInterval(
    function(){
          var ran = Math.random();
          var dislike = Math.floor(ran*100);
          var mod = 11;
          var result = dislike%mod;
          if (result==0) {
            var elem = document.getElementsByClassName("recsGamepad__button--dislike");
          elem[0].click();
          } else {
          var elem = document.getElementsByClassName("recsGamepad__button--like");
          elem[0].click();
          }
          },2345)
