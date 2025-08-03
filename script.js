let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg_para = document.querySelector("#msg_para");
let user_score =document.querySelector("#user_score")
let comp_score =document.querySelector("#comp_score")

 


const gencomp_choice = () => {
    let options = ["rock", "paper", "scissor"];
    let random_idx = Math.floor(Math.random() * 3)
    return options[random_idx];
}
const draw_game = () => {
    msg_para.innerText = "game was drawed."
    msg_para.style.backgroundColor = "rgb(4, 1, 33)"
    console.log("game was drawed.")

}
const show_winner = (user_win,comp_choice,user_choice) => {
    if (user_win) {
        msg_para.innerText = `you win! your "${user_choice}" beats "${comp_choice}"`
        msg_para.style.backgroundColor = "green"
        userScore++;
        user_score.innerText = userScore;
    } else {
        msg_para.innerText = `you lose! "${comp_choice}" beats your "${user_choice}" `
        msg_para.style.backgroundColor = "red"
        compScore++;
        comp_score.innerText = compScore;
    }

}
const play_game = (user_choice) => {
    console.log(`your choice =  ${user_choice}`)
    //computer choice//
    let comp_choice = gencomp_choice();
    console.log(`computer choice =  ${comp_choice}`)
    //check winner
    if (user_choice === comp_choice) {
        draw_game();


    } else {
        user_win = true;
        if (user_choice === "rock") {
            user_win = comp_choice === "paper" ? false : true;
        } else if (user_choice === "paper") {
            user_win = comp_choice === "scissor" ? false : true;
        } else {
            user_win = comp_choice === "rock" ? false : true;
        }
        show_winner(user_win,comp_choice,user_choice);
    }

}




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let user_choice = choice.getAttribute("id");
        play_game(user_choice);

    })
})


