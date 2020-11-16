function change_image() {
    let images = document.getElementById("changeImage").value;
    let gambar = document.getElementById("gambar");
    if (images == "Kucing"){
        gambar.src="./images/meong.jpg";
        alert(`Ini adalah foto Kucing ${images}`);
    }else if (images == "Domba"){
        gambar.src="./images/domba.jpg";
        alert(`Ini adalah foto Domba ${images}`);
    }else if (images == "Harimau"){
        gambar.src="./images/harimau.jpg";
        alert(`Ini adalah foto Harimau ${images}`);
    }else if (images == "Singa"){
        gambar.src="./images/lion.jpg";
        alert(`Ini adalah foto Singa ${images}`);
    }else if (images == "Lumba-lumba"){
        gambar.src="./images/dolphin.jpg";
        alert(`Ini adalah foto Lumba-lumba  ${images}`);
    }else if (images == "Elang"){
        gambar.src="./images/elang.jpg";
        alert(`Ini adalah foto Elang ${images}`);
    }
}