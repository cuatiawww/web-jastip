// change image dproduct
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function() {
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function() {
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function() {
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function() {
    MainImg.src = smallimg[3].src;
}

// json
const items = [
    {
        id: 1,
        image: "k1.jpg",
        smallimg: "k1.2.jpg",
        smallimg1: "k1.3.jpg",
        smallimg2: "k1.4.jpg",
        title: "Shmoofoil T-Shirt",
        price: "Rp380.000",
        store: "Adidas",
        details: "Shmoofoil Painted Short Sleeve Tee A Tee for all genders with art by Gonz. With graphics pulled from paintings created by adidas Skateboarding team rider Mark Gonzales, the Shmoofoil Painted Short Sleeve Tee offers staple style with a personal touch from The Gonz. By buying products marked with the better cotton initiative logo. you're supporting more sustainable cotton farming. Art pulled from Adidas Skateboarding team rider Mark Gonzales original paintings. UNITEFIT is Adidas answer to creating a more thoughtful approach to clothing. Rather than defaulting to gender-specific fit standars. Bold Expression celebrating Mark Gonzales imagination and constant creativity."
    },
    {
        id: 2,
        image: "k2.jpg",
        smallimg: "k2.2.jpg",
        smallimg1: "k2.3.jpg",
        title: "T-Shirt Tribute to Leo",
        price: "Rp180.000",
        store: "Aloomni",
        details: "Leo is crafted from premium stretch-Pima cotton, world-renowned for its softness, brilliant lustre and tough wearing capabilities. Versatile and lightweight, this crew-neck t-shirt focuses on flexibility and comfort with added stretch to perfectly fit the body. A year round essential, Leo is designed to take you from day to night with its lustrous texture and custom fit."
    },
    {
        id: 3,
        image: "s1.jpg",
        smallimg: "s1.2.jpg",
        smallimg1: "s1.3.jpg",
        smallimg2: "s1.4.jpg",
        title: "J Balvin x Nike Air Jordan",
        price: "Rp2.889.000",
        store: "Nike",
        details: "Originally unveiled during a half-time performance on American football's biggest stage, this exclusive AJ1 uses an eclectic mix of colours, textures and graphics to re-imagine the classic silhouette in the image of Colombian recording artist J Balvin. Rough-sewn overlays blur the design's typically crisp design lines, while a spectrum of neon hues inject the look with an aggressive burst of energy. Customisable graphics (including Balvin's signature smiley face) put a distinctive twist on the tongue, with similar visuals adorning the shoe's insole and heel. Lace up and march to the beat of your own drum in this long-awaited and colourful collectible."
    },
    {
        id: 4,
        image: "s2.jpg",
        smallimg: "s2.2.jpg",
        smallimg1: "s2.3.jpg",
        smallimg2: "s2.4.jpg",
        title: "Adidas Yeezy Boost 350",
        price: "Rp6.340.000",
        store: "Adidas",
        details:"Developed by Kanye West, the Adidas Yeezy Boost 350 V2 is the latest version of the popular 350 model. Constructed with a tri-color Primeknit upper, they also feature internal toebox reinforcement, 3-Stripes detail on the inner heel, 'SPLY-350' detail, full-length Boost technology, rope laces, and a semi-translucent rubber outsole. The YEEZY BOOST 350 V2features an upper composed of re-engineered Primeknit. The post-dyed monofilament side stripe is woven into the upper. Reflective threads are woven into the laces. The midsole utilizes adidas innovative BOOST™ technology."
    },
    {
        id: 5,
        image: "h1.jpg",
        smallimg: "h1.2.png",
        smallimg1: "h1.3.jpg",
        smallimg2: "h1.4.jpg",
        title: "iPhone 14 Pro Max",
        price: "Rp16.380.000",
        store: "Apple",
        details:"The phone comes with a 120 Hz refresh rate 6.70-inch touchscreen display offering a resolution of 2796x1290 pixels at a pixel density of 460 pixels per inch (ppi). The display sports Other for protection. iPhone 14 Pro Max is powered by a hexa-core Apple A16 Bionic processor. The iPhone 14 Pro Max supports wireless charging, as well as proprietary fast charging. As far as the cameras are concerned, the iPhone 14 Pro Max on the rear packs a triple camera setup featuring a 48-megapixel (f/1.78) primary camera; a 12-megapixel (f/2.2) camera, and a 12-megapixel (f/1.78) camera. It has a single front camera setup for selfies, featuring a 12-megapixel sensor with an f/1.9 aperture. iPhone 14 Pro Max is based on iOS 16 and packs 128GB, 256GB, 512GB, 1TB of inbuilt storage. The iPhone 14 Pro Max measures 160.70 x 77.60 x 7.85mm (height x width x thickness) and weighs 240.00 grams. It was launched in Space Black, Silver, Gold, and Deep Purple colours. It features an IP68 rating for dust and water protection. Connectivity options on the iPhone 14 Pro Max include Wi-Fi and Lightning. Sensors on the phone include accelerometer, ambient light sensor, proximity sensor, and compass/ magnetometer."
    },
    {
        id: 6,
        image: "f1.png",
        smallimg: "f1.2.jpg",
        smallimg1: "f1.3.jpg",
        smallimg2: "f1.4.jpg",
        title: "Pop Guardians of The Galaxy Vol 2",
        price: "Rp480.000",
        store: "Funko",
        details:"This figure from the Guardians of the Galaxy 2 movie stands 3 3/4 tall and boasts the stylized perfect for any Marvel fan!, urban design that have made these figures fan-favorites! Window box packaging. Comes in original packaging and is bundled with a Plastic Box Protector with the collector in mind (Removable Film). From Guardians of The Galaxy, Star Lord CHASE Version, as a stylized POP vinyl from Funko! Ships in acid-free PET plastic Pop Protector with peel-able protective film. Push-lock tab that adds structural integrity to the Pop Protector when formed"
    },
    {
        id: 7,
        image: "b1.2.jpg",
        smallimg: "b1.jpg",
        smallimg1: "",
        smallimg2: "",
        title: "Manga One Piece Vol 105",
        price: "Rp180.000",
        store: "Jump Comics",
        details:"One Piece comic volume 105 contains 10 chapters, starting from chapter 1056 titled 'CROSS GUILD' to chapter 1065 entitled 'Six Vegapunk'. Some of the upgrades on the cover of volume 105 include: Luffy changes to Gear Five mode, Buggy wears a bigger hat and joins the Cross Guid, while Teach also wears a big hat and has a bushy beard, plus he also has the Gura Gura no Mi ability. stolen from Whitebeard."
    }
];

// masuk detail produk
function pindahHalaman(id) {
    window.location.href = 'detailProduct.html?id=' + id;

}

window.addEventListener("load", (event) => {
    setImage("tes");
});

function setImage(src) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const prod = items.find(i => i.id === productId);
    
    const productImageMain = document.getElementById('MainImg');
    productImageMain.setAttribute('src', "../assets/img/"+prod.image);

    const productImageSmall = document.querySelector('.small-img');
    productImageSmall.setAttribute('src', "../assets/img/"+prod.image);

    const productImageSmall1 = document.querySelector('.small1');
    productImageSmall1.setAttribute('src', "../assets/img/"+prod.smallimg);

    const productImageSmall2 = document.querySelector('.small2');
    productImageSmall2.setAttribute('src', "../assets/img/"+prod.smallimg1);

    const productImageSmall3 = document.querySelector('.small3');
    if (productId == 2) {
        productImageSmall3.className = "hidden";
    }
    else {
        productImageSmall3.setAttribute('src', "../assets/img/"+prod.smallimg2);
    }

    document.getElementById('details').innerHTML = prod.details;

    document.getElementsByTagName('h4')[0].innerHTML = prod.title;

    document.getElementsByTagName('h2')[0].innerHTML = prod.price;

    console.log(productImageSmall);
}

// masuk pemesanan
function pesanan() {
    window.location.href = 'paymentForm.html';
}