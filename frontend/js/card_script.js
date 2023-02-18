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

 // const userOne = {
        //     name: "Srikanth Reddy",
        //     bio: "Engineer, Coding Enthusiast",
        //     posts: "200",
        //     followers: "200k",
        //     following: "150",
        //     image: "/mypic.jpg",
        // }
        // const userTwo = {
        //     name: "Havish Reddy",
        //     bio: "Little Master",
        //     posts: "100",
        //     followers: "100k",
        //     following: "100",
        //     image: "/havi.jpg",
        // }
        // let currentIsMe = false;
        // let displayUser = userOne;
        // let userName = document.getElementById("userName");
        // let userImage = document.getElementById("userImage");
        // let posts = document.getElementById("posts");
        // let followers = document.getElementById("followers");
        // let following = document.getElementById("following");
        // let toggleUser = function() {
        //     if(currentIsMe){
        //         displayUser = userTwo;
        //         currentIsMe = false;
        //     }
        //     else{
        //         displayUser = userOne;
        //         currentIsMe = true;
        //     }
        //     userName.innerHTML = displayUser.name + "<br>" + "<span>" + displayUser.bio + "</span>";
        //     userImage.src = displayUser.image;
        //     posts.innerHTML = displayUser.posts + "<br>" + "<span>" + "Posts" + "</span>";
        //     followers.innerHTML = displayUser.followers + "<br>" + "<span>" + "Followers" + "</span>";
        //     following.innerHTML = displayUser.following + "<br>" + "<span>" + "Following" + "</span>";
        // }
