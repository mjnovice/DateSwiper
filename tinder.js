   a = setInterval(
    function(){
          var ran = Math.random();
          var dislike = Math.floor(ran*100);
          var mod = 11;
          var result = dislike%mod;
          if (result==0) {
            var elem = document.querySelector('[aria-label="Nope"]');
          elem[0].click();
          } else {
          var elem = document.querySelector('[aria-label="Like"]');
          elem.click();
          }
          },2345)
