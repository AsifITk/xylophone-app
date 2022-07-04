import React from 'react'


{/* <button onclick="playSound()">Play</button>

<script>
let playSound = () => new Audio("src.mp3").play();
</scirpt> */}

//  "./assets/audio/crfo.mp3";
function Card({width,height,color,audiolink,innerText ,number,top}) {
    let container = document.querySelector(".container")
    let audio = new Audio(audiolink);
    // xylophone\src\components\assets\audio\crfo.mp3


  return (
    <div className="card" style={{ "height" : height, "width" : width ,"backgroundColor":color}} onMouseOver={()=>{audio.play();
        container.style.backgroundColor = color;

    }}> <span>{innerText }</span> <span style={{"top":top}} className='number'>{ number}</span> </div>
  )
}

// var audio = new Audio("../public/sound.mp3")

// return (
//   <Container>
//         <img src={dwight} onClick={ audio.play() }/>
//   </Container>

export default Card;