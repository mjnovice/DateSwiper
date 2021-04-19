var longDelay=1700;
var longlongDelay=100000;
var shortDelay=750;
var longDelayChance=10;
var longlongDelayChance=5;
var likeChance=91;
var platform="bumble";

random = function(pow10) {
          var ran = Math.random();
          var result = Math.floor(ran*pow10);
          return result;
}

likeElement = function(platform) {
          if (platform==="tinder") {
                    return document.querySelector('[fill="url(#svg-fill-linear__like)"]').closest('button');
          } else if (platform==="bumble") {
                    return document.querySelector('[data-qa-role="encounters-action-like"]');
          }
}

dislikeElement = function(platform) {
          if (platform==="tinder") {
                    return document.querySelector('[fill="url(#svg-fill-linear__nope)"]').closest('button');
          } else if (platform==="bumble") {
                    return document.querySelector('[data-qa-role="encounters-action-dislike"]');
          }
}

tinderLike = function() {
          
}

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

randomLiker = function(percentage_likes){
          var result=random(100);
          if (result<percentage_likes) {
               var elem = likeElement(platform);
          } else {
               var elem = dislikeElement(platform);

          }
           elem.click();
}


while (true) {
   var sleep=shortDelay;
   var result = random(100);
   if (result<longDelayChance) {
      sleep=longDelay;
   }
   var result = random(1000);
   if (result<longlongDelayChance) {
          sleep=longlongDelay;
   }
   sleep+=random(100);
   try {
          randomLiker(likeChance);
   } catch(err) {
          console.log(err)
          await timer(sleep);
   }
   await timer(sleep); 
}
