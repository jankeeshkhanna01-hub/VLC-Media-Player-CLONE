
const vidbtn = document.querySelector("#vidbtn")
const vidinput = document.querySelector(".vid-input")
const main = document.querySelector(".vidplay");

const handler = () =>{
    vidinput.click();

}

// this is the way to get the files as the input in index.html recieves the file and then we target it , convert it into url and then append it to the video in main tag !!!
const handlervid= (obj) =>{
  
  const selfile = obj.target.files[0];
  const link = URL.createObjectURL(selfile);
  const video = document.createElement("video");
  video.src= link;
  vidplay.appendChild(video);
  video.setAttribute("class" , "video");
  video.controls="true";
  console.log(video.currentTime);
  console.log(video.duration);
}

vidbtn.addEventListener("click", handler)
vidinput.addEventListener("change", handlervid);     



const speedup = document.querySelector("#speedup")
const speeddown = document.querySelector("#speeddown")
const volup = document.querySelector("#volup")
const voldown = document.querySelector("#voldown")


const speeduphandlr=() =>{
  const video= document.querySelector("video");
  if(video== null){
    return;
  }
  else{
     const incspeed=video.playbackRate+0.25; 
     console.log(incspeed);
     video.playbackRate = incspeed ; 
  }
  toast.textContent = video.playbackRate +"x";
  toast.style.display="block"; 
  setTimeout(() => {
    toast.style.display="none";
  }, 1000);
}
const speedhandlerdown=() =>{
  const video = document.querySelector("video");
  if(video == null){
    return;
  }
 if( video.playbackRate>0){
    const decspeed=video.playbackRate-0.25;
    console.log("decreased speed::")
    console.log(decspeed);
    video.playbackRate= decspeed;
   }
    toast.textContent = video.playbackRate +"X";
  toast.style.display="block"; 
  setTimeout(() => {
    toast.style.display="none";
  }, 1000);
}

const uphandlr = () =>{
  const video = document.querySelector("video");
    if(video == null){
    return;
  }
  console.log("not in if up handler")
   if(video.volume<1){
    video.volume = (video.volume+0.1).toFixed(1);
    console.log(video.volume);
   }

     toast.textContent = video.volume +"X";
  toast.style.display="block"; 
  setTimeout(() => {
    toast.style.display="none";
  }, 1000);

}

const downHandlr =()=>{
  const video = document.querySelector("video");
    if(video == null){
    return;
    }
    if(video.volume>=0){
       video.volume = (video.volume-0.1).toFixed(1);
    console.log(video.volume);
    }

      toast.textContent = (video.volume) +"X";
  toast.style.display="block"; 
  setTimeout(() => {
    toast.style.display="none";
  }, 1000);
}
speedup.addEventListener("click", speeduphandlr);
speeddown.addEventListener("click",speedhandlerdown);
volup.addEventListener("click",uphandlr);
voldown.addEventListener("click",downHandlr);

const toast =document.querySelector(".toast");
