
function login() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if (username !== "Feri Ardiasnyah" && password !== "namakamuaja"){
        return alert ("Login gagal")
    }

    document.querySelector("body").innerHTML = "<h1>login sukses</h1>"
}
document.querySelector("form").addEventListener("submit", function (event){
    event.preventDefault()

    const nama = document.getElementById("nama").value
    const email = document.getElementById("email").value
    const jam = document.getElementById("jam").value
    const tujuan = document.getElementById("tujuan").value
    const tiket = document.getElementById("tiket").value

    document.getElementById("hasil_nama").innerText = nama
    document.getElementById("hasil_email").innerText = email
    document.getElementById("hasil_jam").innerText = jam
    document.getElementById("hasil_tujuan").innerText = tujuan
    document.getElementById("hasil_tiket").innerText = tiket
})
function kurs() {
    const nilai = parseInt(document.getElementById("masukan_nilai").value) || 0;
    const valas = document.getElementById("selec").value;
    var kursRupiah;

    switch (valas){
        case "dollar us":
            kursRupiah = 9915;
            break;
        case "dollar singapure":
            kursRupiah = 13472;
            break;
        case "ringgit malaysia":
            kursRupiah = 874;
            break;
        case "yen jepang":
            kursRupiah = 120;
            break;
        case "euro":
            kursRupiah = 15888;
            break;
        case "riyal arab saudi":
            kursRupiah = 3592;
            break;
        default:
            kursRupiah = 1;
    }
    const nilaiRupiah = nilai * kursRupiah;
    document.getElementById("rupiah").value = nilaiRupiah.toFixed(2);
}

function kirimPesan() {
    let pesan = document.getElementById('masukkan_pesan').value

    if (pesan.trim() !== ""){
        let chat_box = document.getElementById('chat_box')
        let chatMessage = document.createElement('div')
        chatMessage.classList.add('chat-message')
        chatMessage.textContent = pesan

        chat_box.insertBefore(chatMessage,chat_box.firstChild)

        document.getElementById('masukkan_pesan').value = ''

    }
}

let isImageSelected = false;

function showImage() {
    let dropdown = document.getElementById('image-dropdown');
    let selectedImage = document.getElementById('selected-image');
    let alertBox = document.getElementById('alert-box');
    alertBox.innerHTML = '';

    if (dropdown.value !== '') {
        selectedImage.src = dropdown.value;
        isImageSelected = true;
        let fileName = dropdown.value.split('/').pop().split('\\').pop();
        alertBox.innerHTML = '<strong>Selected Image:</strong> ' + fileName;
    } else {
        selectedImage.src = '';
        isImageSelected = false;
    }
}