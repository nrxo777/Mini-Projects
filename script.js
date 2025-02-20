// ******************** Timer ********************
let start_btn = document.querySelector('#start');
let stop_btn = document.querySelector('#stop');

start_btn.addEventListener('click', function(s){
    
    let old_time = 1

        let start_timing = (i) => {
            
            let para_tag = document.querySelector('p').innerText = old_time;
            old_time++;
        };

    let pause_time = setInterval(start_timing, 1000);

    stop_btn.addEventListener('click', function(p){

        clearTimeout(pause_time);                
    })
                    
});        

       
// ******************** BG Changer ********************
const change_btn = document.querySelector('#bg-color');
const hero = document.querySelector('#hero');

let random_color = function(i){
    let hex = '0123456789abcdef';
    let hash = '#';
    for (let i = 0; i < 6; i++) {
        hash += hex[Math.floor(Math.random() * 16)]
    }
    return hash;
};


change_btn.addEventListener('click', function(cb){
    hero.style.backgroundColor = random_color();
})

// ******************** BG Changer Continuously ********************

const start_chan = document.querySelector('#start-chan');
const stop_chan = document.querySelector('#stop-chan');
let intervalID;

start_chan.addEventListener('click', function(sc){

    if(!intervalID) {
        intervalID = setInterval(keep_chaning, 500);
    }

    function keep_chaning() { hero.style.backgroundColor = random_color() };  // ---------- 'hero & random_color' from previous section

    stop_chan.addEventListener('click', function(){
        
        clearInterval(intervalID);
        intervalID = null;
    })    
})

// ******************** BG Changer Specific ********************


document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            let color = e.target.id;
            document.body.style.backgroundColor = color
            });
    });
});