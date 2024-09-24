
const button = document.getElementById("button")
const videoContainer  = document.getElementById("video-container")
const addNew = document.getElementById("addNew")

let numVideos = 0
let i = -1


// creating new videos
function newVideo(){
    var videoElements = videoContainer.getElementsByTagName("video");
        numVideos = videoElements.length;
    const vid = document.createElement("video");
    vid.id = `video${numVideos}`;
    vid.controls = true;
    vid.height = 90;
    vid.width = 160;
    // vid.style.borderRadius = "50%"
    vid.style.overflow = "hidden"
    // vid.hidden = true;
    videoContainer.appendChild(vid)
}

// prompt to select media stream, pass to video element, then play 

async function selectMediaStream(idNumber) {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
       idNumber.srcObject = mediaStream
       idNumber.onloadedmetadata = ()=>{
            idNumber.play();
            console.log(`video${numVideos}`)
        }
    } catch (error) {

        console.log("there is something wrong",error)
        
        
    } 
    
}

button.addEventListener("click", async ()=>{
    ++i
    // disable button
    console.log("start")
    button.disabled = true
    // start picture in picture
    if(i > numVideos ){
        i = 0;
        await document.getElementById(`video${i}`).requestPictureInPicture()
      } else{
        
        await document.getElementById(`video${i}`).requestPictureInPicture()
      }
         
        
     
    
    // reset button
    button.disabled = false 
})

addNew.addEventListener("click", ()=>{
    var videoElements = videoContainer.getElementsByTagName("video");
        numVideos = videoElements.length;
    newVideo()
    selectMediaStream(document.getElementById(`video${numVideos}`))
    
})


// selectMediaStream()