score = 0
cross = true;
audiogameover=new Audio('sound.wav')

document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode)
    if (e.keyCode == 38) { //keycode for up key

        character = document.querySelector('.character')
        character.classList.add('animatechar'); //for jumping character

        setTimeout(() => {
            character.classList.remove('animatechar')
        }, 700)
        //removing jump thing to character after few millionseconds
    }
    if (e.keyCode == 39) { //keycode for aage ki key

        character = document.querySelector('.character')
        characterX = parseInt(window.getComputedStyle(character, null).getPropertyValue('left'))
        character.style.left = characterX + 112 + "px";
        //uski position se 112px jyada bdh jaaye

    }
    if (e.keyCode == 37) { //keycode for peeche ki key

        character = document.querySelector('.character')
        characterX = parseInt(window.getComputedStyle(character, null).getPropertyValue('left'))
        character.style.left = (characterX - 112) + "px";

    }
}
//above for jumping the character

//now for collision then game over
setInterval(() => {
    character = document.querySelector('.character')
    gameover = document.querySelector('.gameover')
    obstacle = document.querySelector('.obstacle')
    //charac ki left value and top se value
    // window se distance
    cx = parseInt(window.getComputedStyle(character, null).getPropertyValue('left'))
    cy = parseInt(window.getComputedStyle(character, null).getPropertyValue('top'))
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))

    offsetx = Math.abs(cx - ox)
    offsety = Math.abs(cy - oy)
    // console.log("working")
    if (offsetx < 73 && offsety < 52) {
        gameover.style.visibility = 'visible'
        obstacle.classList.remove('obstacleAni')

        audiogameover.play();
        setTimeout(() => {
            audiogameover.pause();
        }, 1000);

    }

    //93 and 52  145are random no & animation of obstacle removed on collision
    else if (offsetx < 145 && cross) {
        score += 1;
        // console.log("updating")
        updatescore(score)
        cross = false;
        setTimeout(() => {
            cross = true
        }, 1000);//for increasing score on avoiding collision

        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'))
            newdur = anidur - 0.1;
            obstacle.style.animationDuration = newdur + 's'
        }, 500); 
        console.log(newdur)
        //settime out nhi to obstacle have a jerk
        //this is to speed up obstacle as score increase
    }
}, 10);
function updatescore(score) {
    scoreid.innerHTML = "Your Score :" + score;
}

