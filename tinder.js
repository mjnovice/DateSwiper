randomPercentage = function() {
          var ran = Math.random();
          var result = Math.floor(ran*100);
          return result;
}

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

randomLiker = function(percentage_likes){
          var result=randomPercentage();
          if (result<percentage_likes) {
            var elem = document.querySelector('[fill="url(#svg-fill-linear__like)"]').closest('button');
          } else {
            var elem = document.querySelector('[fill="url(#svg-fill-linear__nope)"]').closest('button');
          }
           elem.click();
}

var longDelay=1700;
var shortDelay=750;
var longDelayChance=10;
var likeChance=51;
while (true) {
   var sleep=shortDelay;
   var result = randomPercentage();
   if (result<longDelayChance) {
      sleep=longDelay;
   }
   sleep+=randomPercentage();
   randomLiker(likeChance);
   await timer(sleep); 
}
