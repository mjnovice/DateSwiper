  a = setInterval(
    function(){
          var ran := Math.random();
          var time = ran*1000;
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
          },time)
