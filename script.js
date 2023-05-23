// pictures
const letter=document.querySelector("#letter");
const script=document.querySelector("#script");
const cover=document.querySelector("#cover");
let letterStatus=false;
document.addEventListener("click",(event)=>{
    if (event.target.id=="cover"){
        if (letterStatus==false){
            letterStatus=true;
            letter.classList.add('show');
            script.classList.add('show');
        }
    }
    else
    {
        letterStatus=false;
        letter.classList.remove('show');
        script.classList.remove('show');
    }
})

// text
var typing = new Typed("#auto-type",{
    strings: ["GVCN xinh đẹp, yêu quý của con","người bạn của con","cô Thoa"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: false,
});

// play the songs
const songs=["https://www.youtube.com/watch?v=iy53wPnNCYU",
            "https://www.youtube.com/watch?v=vTJdVE_gjI0",
            "https://www.youtube.com/watch?v=J4zrIbX1ROI",
            "https://www.youtube.com/watch?v=kfw7MYah2n0",
            "https://www.youtube.com/watch?v=sQlQpKpQOpc",
            "https://www.youtube.com/watch?v=1dE3j8JpigY",
            "https://www.youtube.com/watch?v=O_T1boJt4pU",
            "https://www.youtube.com/watch?v=B9PDYlaV84w"];
function play(numSong){
    window.open(songs[numSong-1]);
}