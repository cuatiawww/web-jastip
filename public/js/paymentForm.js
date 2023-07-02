//Function ini digunakan untuk mengirimkan data yang diisi di paymentForm.html lalu ditangkap menggunakan HTML DOM dan dikirimkan ke url whatsapp
function sendWhatsAppMessage() {
    // Menangkap nilai menggunakan DOM
    let username = document.getElementsByName('username')[0].value;
    let email = document.getElementsByName('email')[0].value;
    let address = document.getElementsByName('address')[0].value;
    let city = document.getElementsByName('city')[0].value;
    let state = document.getElementsByName('state')[0].value;
    let zipcode = document.getElementsByName('zipcode')[0].value;
    let kodeBrg = document.getElementsByName('kodeBarang')[0].value;
    let cardname = document.getElementsByName('cardname')[0].value;
    let cardnumber = document.getElementsByName('cardnumber')[0].value;
    let expmonth = document.getElementsByName('expmonth')[0].value;
    let expyear = document.getElementsByName('expyear')[0].value;
    let cvv = document.getElementsByName('cvv')[0].value;
    // URL WhatsApp
    let whatsappUrl = "https://api.whatsapp.com/send?phone=6281908775565&text=";
    // Data yang akan dikirimkan ke url WhatsApp
    let message = `Username: ${username}\r\n\r\nEmail: ${email}\r\n\r\nAddress: ${address}\r\n\r\nCity: ${city}\r\n\r\nState: ${state}\r\n\r\nZip Code: ${zipcode}\r\n\r\nItem code: ${kodeBrg}\r\n\r\nName on Card: ${cardname}\r\n\r\nCredit Card Number: ${cardnumber}\r\n\r\nExp Month: ${expmonth}\r\n\r\nExp Year: ${expyear}\r\n\r\nCVV: ${cvv}`;

    // Membuka whatsapp url dan cek kode unik
    window.open(whatsappUrl + encodeURIComponent(message));
}
