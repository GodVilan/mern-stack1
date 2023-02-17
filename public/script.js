const url = " https://randomuser.me/api/ ";

let userName = document.getElementById("userName");
let userImage = document.getElementById("userImage");

toggle.addEventListener("click", function(){
    fetch(url)
    .then(hErr)
    .then(pJSON)
    .then(uProfile)
    .catch(pErr)
});

function hErr(res){
    if(!res.ok){
        throw error(res.status);
    }
    console.log(res);
    return res;
}

function pJSON(res){
    return res.json();
}

function uProfile(profile){
    userImage.src = profile.results[0].picture.large;
    userName.innerHTML = profile.results[0].name.first + " " + profile.results[0].name.last + "<br>" + "<span>" + profile.results[0].location.city + "</span>";
    return 1;
}

function pErr(err){
    console.error(err);
}