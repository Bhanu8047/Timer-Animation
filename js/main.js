let circle = document.getElementById('cls');
let total ;
let start = $('#start');

start.click( ()=>{
    let minute = document.getElementById('min').value;
    let second = document.getElementById('sec').value;
    // console.log("seconds:"+(minute*60)+"secs:"+second);
    total = (parseInt(minute)*60) + parseInt(second);
    console.log("total:"+total);
    circle.style.strokeDashoffset = "800";
    circle.style.animationDuration = total+"s";
    circle.style.animationPlayState = "running";
    set(1000*total);
    circle.classList.add("run-anim");
});

function set(total){
    let interval = setInterval(ret,total);
    function ret(){
        confirm('Timer Completed! Press Reset');
        circle.classList.remove("run-anim");
        void circle.offsetWidth;
        clearInterval(interval);
    }
}

// let reset = $('#reset');
// reset.click(()=>{
//     circle.style.animationPlayState = "paused";
// });