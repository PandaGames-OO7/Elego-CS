const addMovieModal = document.querySelector('#add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.querySelector('#backdrop');
const backdropf = () =>{
    backdrop.classList.toggle('visible');
};

const toggleMovieButton = () =>{
    addMovieModal.classList.toggle('visible');
    backdropf();
};
startAddMovieButton.addEventListener('click', toggleMovieButton);

