function validasi() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;
    
    if (username != "" && password !="" && nama !="" && email !="" && alamat !="") {
    alert ("Daftar Berhasil");
    window.location = "../../Login/login.html";
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}