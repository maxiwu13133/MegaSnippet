let achievements = document.getElementById("achievements")
let titles = document.getElementById("titles")
let completeTitles = document.getElementById("completeTitles")
let incompleteTitles = document.getElementById("incompleteTitles")
let completeAchievements = document.getElementById("completeAchievements")
let incompleteAchievements = document.getElementById("incompleteAchievements")

achievements.addEventListener("click", function(event) {
    if(!achievements.classList.contains("selected")) {
        achievements.classList.add("selected")
        titles.classList.remove("selected")
    }
    if(completeAchievements.classList.contains("hidden")){
        completeAchievements.classList.remove("hidden")
        incompleteAchievements.classList.remove("hidden")
        completeTitles.classList.add("hidden")
        incompleteTitles.classList.add("hidden")
    }

})

titles.addEventListener("click", function(event) {
    if(!titles.classList.contains("selected")) {
        titles.classList.add("selected")
        achievements.classList.remove("selected")
    }
    if(completeTitles.classList.contains("hidden")) {
        completeTitles.classList.remove("hidden")
        incompleteTitles.classList.remove("hidden")
        completeAchievements.classList.add("hidden")
        incompleteAchievements.classList.add("hidden")
    }
})