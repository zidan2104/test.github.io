document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle');
    const myPhoto = document.getElementById('myphoto');

    toggleButton.addEventListener('click', function() {
        // Toggle kelas 'hidden' pada elemen foto
        myPhoto.classList.toggle('hidden');
    });
});
