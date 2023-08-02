let mainTitle = document.getElementById("main_title");
let storyResult = document.getElementById("story_result");
let noun = document.getElementById("noun");
let verb = document.getElementById("verb");
let adj = document.getElementById("adjective");
let titleInput = document.getElementById("title_input");
let submit = document.getElementById("submit_button");
let adlib = document.createElement("p");
let formContainer = document.querySelector(".form_container");
let update = function (e){
    mainTitle.innerText = e.target.value;
    }
    


titleInput.addEventListener("change", update);
titleInput.addEventListener("keydown", update);

let buttonClick = function (e){
   e.preventDefault();
    if (mainTitle.value == "" || noun.value == "" || verb.value == "" || adj.value == ""){
        alert("Please fill in all fields");
    }
    else{
        storyResult.innerHTML = "Last night I ate a " + noun.value + " , and today I just had to " + verb.value + ". What a " + adj.value + " day!";
        formContainer.style.display = "none";
    }
    
}
submit.addEventListener("click", buttonClick);


