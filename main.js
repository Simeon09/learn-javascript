window.addEventListener("keydown", (e) => {
  console.log(e.keyCode); // to check if my key code in html is same with the one on console.
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //to select the adio of each key
  const divKeys = document.querySelector(`.key[data-key = "${e.keyCode}"]`); // to select the corresponding div with keycode.
  console.log(divKeys);
  console.log(audio);
  if (!audio) {
    return; // to stop it from playing
  }
  audio.currentTime = 0; //to rewind it to d back and start all over again.
  audio.play();
  divKeys.classList.add("playing"); // to add the small animination from my class of playing.
});
// code to remove the transition on the keys
const keys = document.querySelectorAll(".key");
keys.forEach(key =>
    key.addEventListener("transitionend", (e) => {
        console.log(e)
        if (e.propertyName !== "transform") {
            // skip it if it is not a class of playing
            console.log(e.propertyName);
            console.log(this)
            key.classList.remove('playing');
        }
        return;
    })
    );
//  function removethetransition(e){ // to remove the transition
//      console.log(e)
//       if (e.propertyName !== "transform"){     // skip it if it is not a class of playing
//           console.log(e.propertyName);
//           this.classList.remove('playing');
//       }return;
//  }
// keys.forEach( key => key.addEventListener('transitionend', removethetransition))


// var name = '30 days of javascript';
// var go ="challenge";
// console.log(name.toLowerCase());
// check.innerHTML=name.toUpperCase()
// console.log(name.substr(4, 17));
// check.innerHTML=name.substr(5, 17);

// var challenge =' 30 days of javascript';
// console.log(challenge.substring(0, 3))
// console.log(challenge.includes('script'));
// console.log(challenge.split())

// check.innerHTML=challenge.split("");
