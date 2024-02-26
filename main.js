// let audioElement = new Audio('/songs/1.mp3');
let audioElement = new Audio('/songs/Chill Wave(PaglaSongs).mp3');
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay')
let myProgress = document.getElementById('myProgressBar')
let gif = document.querySelector('.songInfo img')
let songItem = Array.from(document.getElementsByClassName('songItem'))
let nextPlay = document.getElementById('nextPlay')
let previousPlay = document.getElementById('previousPlay')
let ab = 0
let songs = [
    { songName: 'chill wave', duration: '02:53', filePath: '/Chill Wave(PaglaSongs).mp3', coversPath: 'https://source.boomplaymusic.com/group10/M00/11/15/6486d8d560c646c7ba89a725d23c0b7d_464_464.jpg' },
    { songName: 'season', duration: '03:35', filePath: '/Season(PaglaSongs).mp3', coversPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTitD-pjV84wcp4wJR-MIayGVvUXLSLf2wHNQ&usqp=CAU' },
    { songName: 'sheh', duration: '03:09', filePath: '/Sheh - Singga.mp3', coversPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ67savw8VYadQTv5biMcIQdnZcJrDux3e5Dw&usqp=CAU' },
    { songName: 'World war', duration: '02:56', filePath: '/World War_128-(DJPunjab).mp3', coversPath: 'https://koshalworld.com/siteuploads/thumb/sft59/29054_7.jpg' },
    { songName: 'Newspaper', duration: '02:55', filePath: '/Newspaper.mp3', coversPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_yPJ63SckTuChQudoNb-Zhll3pJ_KUo_-yQ&usqp=CAU' },
    { songName: 'Tension', duration: '02:49', filePath: '/Tension - Nijjar.mp3', coversPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0psLKvhU6eK5hDjx92Ci-sMFg777Dszm1A&usqp=CAU' },
    { songName: 'America wala', duration: '03:07', filePath: 'America Wala - Ravraaz.mp3', coversPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpKzddl6yVGJZlF5o3VQHdD1Xu-IQetaZ6Fg&usqp=CAU' },
    { songName: 'Vibe', duration: '02:44', filePath: '/Vibe - Gulab Sidhu.mp3', coversPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0mUqVqollS3C3JGc4uNb1Ao9OEzDbYR63g&usqp=CAU' },
    { songName: 'Badam', duration: '03:32', filePath: '/Badam_Sumit_Parta.mp3', coversPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5MfFd9uBWuKGozfa48YD8PtEKArE8aUyIw&usqp=CAU' },
    { songName: 'Student life', duration: '03:34', filePath: '/Student Life - Romey Maan.mp3', coversPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSwu4a3M9m2cF27gUl1vuEfSBMoHT8ee0V1Q&usqp=CAU' },

     ]

function ply() {

    if (audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play()
        masterPlay.classList.toggle('fa-circle-pause')

        gif.style.opacity = '1'

    } else {
        audioElement.pause()
        masterPlay.classList.toggle('fa-circle-pause')
        gif.style.opacity = '0'
    }

}
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
//   if (myProgress.value!=0) {
//       audioElement.play()
//   }

    myProgress.value = progress
})
myProgress.addEventListener('change', () => {
    audioElement.currentTime = myProgress.value * audioElement.duration / 100
})

songItem.forEach((element, i) => {

    element.getElementsByTagName('img')[0].src = songs[i].coversPath
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {

    songIndex = songs[element.id].filePath

    element.addEventListener('click', function play(e, i) {
        makeAllPlays();

        songIndex = songs[e.target.id].filePath

        if (audioElement.paused || audioElement.currentTime <= 0) {

            audioElement.src = `${songIndex}`
            audioElement.play()
            gif.style.opacity = 1;


            masterPlay.classList.toggle('fa-circle-pause')
            e.target.classList.toggle('fa-pause-circle');

            document.querySelector('.songInfo span').innerHTML = songs[e.target.id].songName
            document.querySelector('.container').style.backgroundImage = `url(${songs[e.target.id].coversPath})`;
            return songIndex, ab = e.target.id;


        } else {
            e.target.classList.toggle('fa-play-circle');
            audioElement.pause()
            masterPlay.classList.toggle('fa-circle-pause')
        }
    })


})


nextPlay.addEventListener('click', (element) => {
    ab++;
    if (ab > 9) {
        ab = 0;
        songIndex = songs[ab].filePath
        audioElement.src = songIndex
        audioElement.play()
        document.querySelector('.songInfo span').innerHTML = songs[ab].songName
        document.querySelector('.container').style.backgroundImage = `url(${songs[ab].coversPath})`;
        makeAllPlays();




    } else {
        songIndex = songs[ab].filePath

        audioElement.src = songIndex
        audioElement.play()
        document.querySelector('.songInfo span').innerHTML = songs[ab].songName
        document.querySelector('.container').style.backgroundImage = `url(${songs[ab].coversPath})`;
        makeAllPlays();



    }
})

previousPlay.addEventListener('click', (element) => {
    ab--;
    if (ab < 0) {
        ab = 9;
        songIndex = songs[ab].filePath
        audioElement.src = songIndex
        audioElement.play()

        document.querySelector('.songInfo span').innerHTML = songs[ab].songName
        document.querySelector('.container').style.backgroundImage = `url(${songs[ab].coversPath})`;
        makeAllPlays();
    } else {
        songIndex = songs[ab].filePath
        console.log(songIndex);
        console.log(ab);
        audioElement.src = songIndex
        audioElement.play()

        document.querySelector('.songInfo span').innerHTML = songs[ab].songName
        document.querySelector('.container').style.backgroundImage = `url(${songs[ab].coversPath})`;
        makeAllPlays();
    }
})
