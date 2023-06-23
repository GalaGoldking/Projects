 let header = document.querySelector('header');
 let menu = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');
 let icons = document.querySelectorAll('.social .fa-brands');
 let audio = document.querySelector('audio')

 let allMovies = [
  {title: 'Creed 3', year: 2023, genre: 'Sport'},
  {title: 'Get Out', year: 2017, genre: 'Horror'},
  {title: 'The Super Mario Bros. Movie', year: 2023, genre: 'Adventure'},
  {title: 'Puss in Boots 2: The Last Wish', year: 2022, genre: 'Adventure'},
  {title: 'The Lord of the Rings: The Return of the King', year: 2003, genre: 'Fantazy'},
  {title: 'Avengers: Endgame', year: 2019, genre: 'Action'},
  {title: 'Dragon Ball Super: Super Hero', year: 2022, genre: 'Action'},
  {title: 'Avatar: The Way of Water', year: 2022, genre: 'Adventure'},
  {title: 'Murder Mystery 2', year: 2023, genre: 'Comedy'},
  {title: 'Operation Fortune: Ruse de guerre', year: 2023, genre: 'Comedy'}
 ];
 let upcomingMovies = [
  {title: 'Spider-Man: Into the Spider-Verse', year: 2023, genre: 'Action'},
  {title: 'Guardians of the Galaxy', year: 2023, genre: 'Action'},
  {title: 'The Super Mario Bros. Movie', year: 2023, genre: 'Adventure'},
  {title: 'Fast X', year: 2023, genre: 'Action'},
  {title: 'The Little Mermaid', year: 2023, genre: 'Fantazy'},
  {title: 'Blue Beetle', year: 2023, genre: 'Action '},
  {title: 'Dragon Ball Super: Super Hero', year: 2022, genre: 'Action'},
  {title: 'Transformers: Rise of the Beasts', year: 2023, genre: 'Action'},
  {title: 'Oppenheimer', year: 2023, genre: 'Drama'},
  {title: 'Indiana Jones', year: 2023, genre: 'Comedy'}
 ];
 
 window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
 });

  menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active')
 }
 window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
 }
 
  $(document).ready(function() {
    let swiper = new Swiper(".home", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });

  audio.loop = true;
  document.getElementById("playButton").addEventListener('click', function(){
    audio.play();
  });
  document.getElementById('stopButton').addEventListener('click', function(){
    audio.pause();
    audio.currentTime = 0;
  });

  icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.backgroundColor = 'black';
    });
  
    icon.addEventListener('mouseout', () => {
      icon.style.backgroundColor = '';
    });
  });

  $('.btn').mouseenter(function() {
    $(this).css('background-color', 'black');
  });
  
  $('.btn').mouseleave(function() {
    $(this).css('background-color', 'red');
  });

  $('.play .fa-solid').hover(function() {
    $(this).css({
      'background-color': '#ff2c1f',
      'color': 'white',
      'transition': '0.2s all linear'
    });
  }, function() {
    $(this).css({
      'background-color': '',
      'color': '',
      'transition': ''
    });
  });
 