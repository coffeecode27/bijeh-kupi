// selector untuk class navbar
let navbar = document.querySelector('.navbar');

// Menambahkan class .active ketika id menu-btn di klik
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

// menghapus / menyembunyikan class .active ketika scrolling
window.onscroll = () =>{
    navbar.classList.remove('active');
}
