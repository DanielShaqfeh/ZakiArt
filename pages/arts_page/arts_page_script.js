document.addEventListener('DOMContentLoaded', function() {
    const images = [
        {
            url: '../../assets/images/paint001.jpg',
            text: '“A horse is a thing of beauty; boundless courage and great nobility”\n\n"الحصان شيء من الجمال؛ شجاعة لا حدود لها ونبل عظيم."'
        },
        {
            url: '../../assets/images/paint002.jpg',
            text: '“Canvas of Cause and Hope: Illuminating the Resilience of Palestine”\n\n"لوحة القضية والأمل؛ إضاءة على صمود فلسطين"'
        },
        {
            url: '../../assets/images/paint003.jpg',
            text: '“A thousand greetings to the steadfast and resistant Palestinian woman“\n\n"ألف سلام للمرأة الفلسطينية المقاومة الصامدة"'
        },
        {
            url: '../../assets/images/paint004.jpg',
            text: '“A painting entitled Encounter“\n\n"لوحه بعنوان لقـــــــــــــــاء"'
        }
    ];

    const gallery = document.getElementById('gallery');
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.className = 'artwork';
        imgElement.src = image.url;
        imgElement.alt = '';
        imgElement.dataset.text = image.text;
        gallery.appendChild(imgElement);
    });

    // Modal 
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("imgid");
    var modalText = document.getElementById("modalText");
    
    document.querySelectorAll('.artwork').forEach(function(img) {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            modalText.innerText = this.getAttribute('data-text'); 
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
    window.navigateHome = function() {
        window.location.href = '../../index.html';
    }
    
    window.navigateArtist = function() {
        window.location.href = '../artist_page/artistPage.html';
    }
});
