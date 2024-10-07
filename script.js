const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');

fileInput.addEventListener('change', (event) => {
    preview.innerHTML = ''; // Clear previous preview
    const files = event.target.files;
    for (const file of files) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            preview.appendChild(img);
        }
        reader.readAsDataURL(file);
    }
});

document.getElementById('uploadForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Bilder hochgeladen! (Noch keine Server-Funktionalität)');
    // Hier könntest du eine Funktion einbauen, die die Dateien zum Server hochlädt.
});
