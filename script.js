const ui = new UI();


const quiz = new Quiz(sorular);

ui.btn_start.addEventListener("click",function(){
    ui.soruGoster(quiz.soruGetir(),quiz.soruIndex +1);
    startTimer(10);
    startTimerLine();
    ui.quiz_box.classList.add("active");
    ui.btn_next.classList.remove("show");
    ui.soruSayisiniGoster(quiz.soruIndex + 1,quiz.sorular.length);
});

ui.btn_next.addEventListener("click",function(){
    if(quiz.sorular.length != quiz.soruIndex +1){
        quiz.soruIndex +=1 ;
        ui.soruGoster(quiz.soruGetir(),quiz.soruIndex +1);
        clearInterval(counter);
        startTimer(10);
        clearInterval(counterLine);
        startTimerLine();
        ui.soruSayisiniGoster(quiz.soruIndex + 1,quiz.sorular.length);
        ui.btn_next.classList.remove("show");
    }
    else{
        clearInterval(counter);
        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active");
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
    }
});

ui.btn_quit.addEventListener("click",function(){
    window.location.reload();
})
ui.btn_replay.addEventListener("click",function(){
    quiz.soruIndex = 0 ;
    quiz.dogruCevapSayisi = 0 ;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
})

function optionSelected(option){
    clearInterval(counterLine);
    clearInterval(counter);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabıKontrolEt(cevap)){
        quiz.dogruCevapSayisi += 1 ;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon);
     }
     else{
         option.classList.add("incorrect");
         option.insertAdjacentHTML("beforeend",ui.inCorrectIcon);
         
     }

     for(let i=0; i<ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled");
     }

     ui.btn_next.classList.add("show");
 }

 let counter;
 function startTimer(time){
    counter = setInterval(timer,1000);

    function timer(){
        ui.time_second.textContent = time;
        time--;

        if(time<0){
            clearInterval(counter);
            ui.time_text.textContent = "Süre Bitti!"

            let cevap = quiz.soruGetir().dogruCevap ;

            for(let option of ui.option_list.children){
                option.classList.add("disabled");
                if(option.querySelector("span b").textContent == cevap){
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend",ui.correctIcon);
                }
            }
            ui.btn_next.classList.add("show");
        }
    }
 }
let counterLine;
 function startTimerLine(){
    let line_width = 0;
    counterLine = setInterval(timer,100);

    function timer(){
        line_width += 5;
        ui.time_line.style.width = line_width + "px";
        if(line_width>545){
            clearInterval(counterLine);
        }
    }
 }

 