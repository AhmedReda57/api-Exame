let navLinks = document.querySelectorAll(".nav-links");
let trendingURL = "https://api.themoviedb.org/3/trending/movie/day?api_key=6d5f67d30992704e6d874d47e8b32117";
let latestURL ="https://api.themoviedb.org/3/movie/latest?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
let popularURL ="https://api.themoviedb.org/3/movie/popular?api_key=6d5f67d30992704e6d874d47e8b32117&language=en-US&page=1";
let topratedURL ="https://api.themoviedb.org/3/movie/top_rated?api_key=6d5f67d30992704e6d874d47e8b32117&language=en-US&page=1";
let upcomingURL ="https://api.themoviedb.org/3/movie/upcoming?api_key=6d5f67d30992704e6d874d47e8b32117&language=en-US&page=1";
let NowURL ="https://api.themoviedb.org/3/movie/now_playing?api_key=6d5f67d30992704e6d874d47e8b32117&language=en-US&page=1";
let url ="https://api.themoviedb.org/3/movie/now_playing?api_key=6d5f67d30992704e6d874d47e8b32117&language=en-US&page=1";


const show = function(e) {

  let linkName = e.target.innerHTML;

  if (linkName == "Now Playing") {

    (url = NowURL), getMovies();

  } else if (linkName == "Upcoming") {

    (url = upcomingURL), getMovies();

  } else if (linkName == "popular") {

    (url = popularURL), getMovies();

  } else if (linkName == "Top Rated") {

    (url = topratedURL), getMovies();

  } else if (linkName == "Trending") {

    (url = trendingURL), getMovies();

  }
};

const nowPlayingData = function() {
  var movies = ``;
  for (let i = 0; i < 18; i++) {
    movies += ` 
                <div id="movie-inf" class="movie-inf">
                    <img src="https://image.tmdb.org/t/p/w500${now.results[i].poster_path}">
                    <div class="overlay">
                        <h2>${now.results[i].title}</h2>
                        <p>${now.results[i].overview}</p>
                        <p>rate: ${now.results[i].vote_average}</p>
                        <p>${now.results[i].release_date}</p>     
                    </div>
                </div>`;
  }

  document.getElementById("all-movie").innerHTML = movies;
};

const getMovies = async function() {
  response = await fetch(url);
  now = await response.json();
  await nowPlayingData();
};

getMovies();
navLinks.forEach((e) => e.addEventListener("click", show));


//navbar
$(".open").click(function () {
  if ($("nav .left").css("width") == "0px") {
    $(".right > i").addClass("fa-close").removeClass("fa-align-justify");

    $("nav .left").animate({ width: "15rem" }, 1000);

    $("nav li").animate(
      {
        "margin-top": "25px",
        opacity: "1",
      },
      2000
    );

    $(".contant").animate({ opacity: "1" }, 2000);
  } else {
    $(".right > i").addClass("fa-align-justify").removeClass("fa-close");

    $("nav .left").animate({ width: "0" }, 1000);

    $("nav li").animate({ opacity: "0" }, 500);
    $("nav li").animate({ "margin-top": "500px" }, 1000);

    $(".contant").animate({ opacity: "0" }, 500);
  }
});



// scrolling to section

$("#con").click(function (e) {
    let linkhref = $(e.target).attr('href');
    let aboutOffset = $('#contact').offset().top;
    $('html,body').animate({scrollTop: aboutOffset}, 1000)
})

// *****************************************
// regax 


    let nameRegax = /^[a-zA-Z0-9]{3,8}$/;
    let emailRegax = /^([a-zA-Z0-9]+[\.|_|\-]*)*@gmail\.com$/;
    let phoneRegax = /^01[0125][0-9]{8}$/;
    let ageRegax = /^[1-9]?\d$/;
    let passwordRegax = /^(?=.*[a-zA-Z].*)(?=.*\d.*)\S{8,128}$/;
    let repasswordRegax = /^(?=.*[a-zA-Z].*)(?=.*\d.*)\S{8,128}$/;

    let nameInput = document.querySelectorAll('.nameIn').value;
    let emailInput = document.querySelectorAll('.emailIn').value;
    let phoneInput = document.querySelectorAll('.phoneIn').value;
    let ageInput = document.querySelectorAll('.ageIn');
    let passwordInput = document.querySelectorAll('.passIn').value;
    let repasswordInput = document.querySelectorAll('.repassIn').value;

    let nameMassage = document.querySelectorAll('.nameMass');
    let emailMassage = document.querySelectorAll('.emailMass');
    let phoneMassage = document.querySelectorAll('.phoneMass');
    let ageMassage = document.querySelectorAll('.ageMass');
    let passwordMassage = document.querySelectorAll('.passMass');
    let repasswordMassage = document.querySelectorAll('.repassMass');

   
// document.getElementById('submitBtn').onsubmit = function () {

//     let validateName = nameRegax.test(nameIn);

//     if(validateName == false){
//         alert('false')
//     }
//     alert('true')
    
// }

