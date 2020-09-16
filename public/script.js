
const videoGrid = document.getElementById('video-grid');
const myvideo = document.createElement('video');
myvideo.muted = true;

let myVideoStream;

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,    
}).then(stream => {
    myVideoStream = stream;
    addVideoStream(myvideo, myVideoStream);
})

const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoGrid.append(video);
}