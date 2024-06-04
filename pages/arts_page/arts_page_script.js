// modal stuff
var modal = document.getElementById('myModal');
var images = document.querySelectorAll('.artwork');
var modalImg = document.getElementById("imgid");
var modalText = document.getElementById("modalText");
images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalText.innerText = this.getAttribute('data-text'); 
        var modalWidth = modal.offsetWidth;
        var modalHeight = modal.offsetHeight;
        modalImg.style.left = "50%";
        modalImg.style.top = "50%";
        modalImg.style.width = "500px"; 
        modalImg.style.height = "500px"; 
    }
});
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Navigators
function navigateHome(){
    window.location.href ='../../index.html';
}
function navigateArtist() {
    window.location.href ='../artist_page/artistPage.html';
}

