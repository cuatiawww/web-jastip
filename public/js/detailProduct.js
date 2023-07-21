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
    },
    {
        id: 8,
        image: "Mi-clock.jpg",
        smallimg: "Mi-clock2.jpg",
        smallimg1: "Mi-clock3.jpg",
        smallimg2: "Mi-clock4.jpg",
        title: "Mi Smart Clock",
        price: "Rp420.000",
        store: "Xiaomi",
        details: "With the simple design and pure white cover, the compact Mi Smart Clock blends perfectly into any room. With help from Google, waking up and getting ready for bed have never been easier. Play your favorite music, podcast, or radio show from Youtube Music or Spotify directly on Mi Smart Clock. Talk to Google on your Mi Smart Clock for hands-free help. Use your voice to set an alarm, get answers, check the weather, play music, and more. Just say “Ok Google” to get started. Connect to your other IoT devices and use Mi Smart Clock as a control center. Connect Mi Smart Clock to a smart camera to see what the camera is recording directly on the clock screen."
    },
    {
        id: 9,
        image: "j1.jpg",
        smallimg: "j1.2.jpg",
        smallimg1: "j1.3.jpg",
        smallimg2: "j1.4.jpg",
        title: "Varsity Jacket FTH x EVOS",
        price: "Rp920.000",
        store: "EVOSGOODS",
        details: "Faith Industries (FTH) is collaborating again this time with the EVOS Esports organization to release its newest capsule collection. This capsule collection follows many of the EVOS Esports elements with its color palette which includes black, white and blue tones." 
    },
    {
        id: 10,
        image: "jt1.jpg",
        smallimg: "jt1.2.jpg",
        smallimg1: "jt1.3.jpg",
        smallimg2: "jt1.4.jpg",
        title: "TAG Heuer Carrera",
        price: "Rp47.000.000",
        store: "TAG Heuer",
        details: "As daring as ever, the resilient TAG Heuer Carrera is driven to the next level thanks to new details on this proudly upgraded chronograph. Improved dial and case elements prove the boldness and conviction of this great classic."
    },
    {
        id: 11,
        image: "k3.jpg",
        smallimg: "k3.2.jpg",
        smallimg1: "k3.3.jpeg",
        smallimg2: "k3.4.jpg",
        title: "Big and Tall Sport Shirt, Irish Linen",
        price: "Rp860.000",
        store: "Brooks Brothers",
        details: "The fabric for this style is woven for us by the renowned Baird McNutt mill in Ireland, which has been making the world's finest linen since 1912. Additional features include our signature 6-Pleat Shirring® at the barrel cuffs and a left chest pocket."
    },
    {
        id: 12,
        image: "t1.jpg",
        smallimg: "t1.2.jpg",
        smallimg1: "t1.3.jpg",
        smallimg2: "t1.4.jpg",
        title: "Stussy Cord Low Pro Cap",
        price: "Rp294.000",
        store: "Stussy",
        details: "With its cotton/viscose construction and low profile 6 panel look, the Big Logo Low Pro Cap from Stussy is a versatile look for any wardrobe, now with a corded material design. A small signature Stussy logo sits embroidered at the centre of the cap for that OG look, with the curved brim and adjustable closure making for a practical fit."
    },
    {
        id: 13,
        image: "d1.jpg",
        smallimg: "d1.2.jpg",
        smallimg1: "d1.3.jpg",
        smallimg2: "d1.4.jpg",
        title: "Astrid Textured Slit Dress Black",
        price: "Rp534.000",
        store: "The Willow Label",
        details: "Made of textured polyester elastane blend. Lined; until slit opening. Slight stretch. Concealed back zip. Slide slit (approx 17)."
    },
    {
        id: 14,
        image: "s6.jpg",
        smallimg: "s6.2.jpg",
        smallimg1: "s6.3.jpg",
        smallimg2: "s6.4.jpg",
        title: "Jimmy Choo Hitch 100 Sandals",
        price: "Rp4.340.000",
        store: "Jimmy Choo",
        details: "Hitch 100 sandals from Jimmy Choo feature a contemporary caged design that show off the shape of the foot with its cut out details. Securely fastened with a tie fastening, these stand-out Hitch sandals are finished with a luxurious leather brand embossed insole and a leather insole whilst the striking 100mm high stiletto heel elongates the leg."
    },
    {
        id: 15,
        image: "tas1.jpg",
        smallimg: "tas1.2.jpg",
        smallimg1: "tas1.3.png",
        smallimg2: "tas1.4.jpg",
        title: "Slingbag Chanel Flap Medium Black Caviar",
        price: "Rp3.504.000",
        store: "Chanel",
        details:"A Chanel Timeless Classic crafted from Black Caviar leather. The structured silhouette offers plenty of space for your wallet, phone and keys. Produced in 2017. Chanel's medium-sized design effortlessly transitions from day to night - carry it from brunch dates to the office, to dinner beyond."
    },
    {
        id: 16,
        image: "j2.jpg",
        smallimg: "j2.2.jpg",
        smallimg1: "j2.3.jpg",
        smallimg2: "j2.4.jpg",
        title: "Jacket FTH x EVOS 'Let The Roar Begin'",
        price: "Rp934.000",
        store: "EVOSGOODS",
        details: "Faith Industries (FTH) is collaborating again this time with the EVOS Esports organization to release its newest capsule collection. This capsule collection follows many of the EVOS Esports elements with its color palette which includes black, white and blue tones."
    },
    {
        id: 17,
        image: "skincare.jpg",
        smallimg: "skincare2.jpg",
        smallimg1: "skincare3.jpg",
        smallimg2: "skincare4.jpg",
        title: "Ms Glow Whitening Original",
        price: "Rp300.000",
        store: "Ms Glow",
        details: "Formulated for normal or dry skin, it makes white skin glow healthy all day long. Consists of 4 facial wash products, toner, whitening day cream, and whitening night cream with pouch bag packaging."
    },
    {
        id: 18,
        image: "bedak.jpg",
        smallimg: "bedak2.jpg",
        smallimg1: "bedak3.jpg",
        smallimg2: "bedak4.jpg",
        title: "Mitu Baby Liquid Powder",
        price: "Rp19.000",
        store: "Mitu Baby Care",
        details: "Liquid powder with a lotion texture with the Acti Natura formulation to keep baby's skin dry and smooth, it is also protected from skin irritation. It is safe for your little one's breathing because it does not contain powder. It has been tested hypoallergenic (anti-allergic) and certified halal."
    },
    {
        id: 19,
        image: "popok.jpg",
        smallimg: "popok2.png",
        smallimg1: "popok3.jpg",
        smallimg2: "popok4.jpg",
        title: "Baby Happy Diapers",
        price: "Rp45.000",
        store: "Baby Happy",
        details: "Baby Happy is a diaper product for babies presented by Wings. Comes in a pack of disposable pants diapers with size L containing 30 pcs. These diapers are specially designed with baby comfort in mind. Made with the finest materials, leak-proof, and has a lot and fast absorption."
    },
    {
        id: 20,
        image: "tmptsusu.jpg",
        smallimg: "tmptsusu2.jpg",
        smallimg1: "tmptsusu3.jpg",
        smallimg2: "tmptsusu4.jpg",
        title: "Milk Powder and Snack Container",
        price: "Rp15.000",
        store: "Emomcare",
        details: "Milk and snack containers help make it easier to carry milk and snacks while traveling. This container consists of three levels that can be stacked so that it saves space when stored in a diaper bag. Each container holds approx. 0.04 kg / 9 scoops of formula powder."
    },
    {
        id: 21,
        image: "bedrail.jpg",
        smallimg: "bedrail2.png",
        smallimg1: "bedrail3.jpg",
        smallimg2: "bedrail4.jpg",
        title: "Gol Baby Bedrail",
        price: "Rp284.000",
        store: "BabaBoo",
        details: "Bedrail is installed between the divan (full box/wooden divan) and the mattress. Based on the guide (installation standard), install by inserting and bolting with the bolts provided. The main function of the bedrail is to protect the child from falling while sleeping."
    },
    {
        id: 22,
        image: "hampers.jpg",
        smallimg: "hampers2.png",
        smallimg1: "hampers3.jpg",
        smallimg2: "hampers4.jpg",
        title: "Hampers Newborn Baby Gift Set",
        price: "Rp74.000",
        store: "Newborn",
        details: "Each hamper Free box and packaging, Free custom greeting cards, Free 1 layer of bubble wrap. Tolerance of colors and motifs cannot be 100% the same because it depends on motifs, factory-produced fabrics and also lighting effects. Brands of soap, powder and tissue are also not always the same depending on stock."
    },
    {
        id: 23,
        image: "s3.jpg",
        smallimg: "s3.2.jpg",
        smallimg1: "s3.3.jpg",
        smallimg2: "s3.4.jpg",
        title: "Clarks Men's Shoes RaceLite Tor",
        price: "Rp1.304.000",
        store: "Clarks",
        details: "A retro-sport addition, our RaceLite Tor shoe unites authentic Clarks craftsmanship with feel-good wear. Layers of suedes and nylons create a design-led profile, while its perforated leather and plush cushioning deliver breathable comfort and a vintage aesthetic."
    },
    {
        id: 24,
        image: "s4.jpg",
        smallimg: "s4.2.jpg",
        smallimg1: "s4.3.jpg",
        smallimg2: "s4.4.jpg",
        title: "New Balance Fresh Foam Arishi",
        price: "Rp654.000",
        store: "New Balance",
        details: "The Fresh Foam Arishi v3 running shoe from New Balance offers a premium underfoot comfort experience using pinnacle brand technology, built to help increase your style and comfort throughout the day."
    },
    {
        id: 25,
        image: "s5.jpg",
        smallimg: "s5.2.jpg",
        smallimg1: "s5.3.jpg",
        smallimg2: "s5.4.jpg",
        title: "Vans SK8 Hi Notchback Defcon Multicam Jungle Black",
        price: "Rp580.000",
        store: "Vans",
        details: "Vans reunites with the stealth collective this spring to resurrect the Vans Sk8-Hi Notchback Pro, engineered with three new Multicam® patterns, Arid™, Tropic™, and Black™, specifically designed to reduce the visual and near-Infrared signature of a person in three distinct environments."
    },
    {
        id: 26,
        image: "monitor.jpg",
        smallimg: "monitor2.jpg",
        smallimg1: "monitor3.jpg",
        smallimg2: "monitor4.jpg",
        title: "Mi 23.8'' Desktop Monitor 1C",
        price: "Rp1.599.000",
        store: "Xiaomi",
        details: "The 23.8'' IPS widescreen offers a wide 178-degree field of view, with a clear and realistic view at every angle. The thinnest part of the body measures 7.3 mm, so saves countertop space and looks neat. Internal 1920*1080 high definition quality of this 23.8'' screen offers a crisp and clear view, soothing the eyes with amazing detail and refinement."
    },
    {
        id: 27,
        image: "mini-fan.jpg",
        smallimg: "mini-fan2.jpeg",
        smallimg1: "mini-fan3.jpg",
        smallimg2: "mini-fan4.jpg",
        title: "Robot RT-BF10 Cleanable 720' Rotating",
        price: "Rp112.500",
        store: "ROBOT",
        details: "ROBOT RT-BF10 is a versatile fan equipped with a 18650, 2000 mAh lithium battery, so it can be used anytime and anywhere without having to be connected to a separate charger or power bank. This fan can be rotated 720 degrees so that it can be directed according to your wishes. Easy maintenance, can be opened and cleaned."
    },
    {
        id: 28,
        image: "tab.jpg",
        smallimg: "tab2.jpg",
        smallimg1: "tab3.jpg",
        smallimg2: "tab4.jpg",
        title: "Samsung Galaxy Tab S8",
        price: "Rp8.149.000",
        store: "Samsung",
        details: "This 11' LCD screen has a lot to offer. From 5G to big battery, and 12MP Ultra Wide Front Camera. And of course, the S Pen is included. Aluminum Armor case protects against all kinds of bumps and drops. This is our thinnest, biggest, heaviest Samsung Galaxy Tab S."
    },
    {
        id: 29,
        image: "mini-kulkas.jpg",
        smallimg: "mini-kulkas2.jpg",
        smallimg1: "mini-kulkas3.jpg",
        smallimg2: "mini-kulkas4.jpg",
        title: "Polytron Mini Refrigerator PRH 51X",
        price: "Rp1.412.000",
        store: "Polytron",
        details: "The Polytron PRH 51X is a mini fridge that has a capacity of 50L which is equipped with energy saving features and shelves that can be adjusted as needed. The minimalist design and recess handle make this refrigerator suitable for placing in a limited space such as a bedroom or office."
    },
    {
        id: 30,
        image: "led-lamp.jpg",
        smallimg: "led-lamp2.jpg",
        smallimg1: "led-lamp3.jpg",
        smallimg2: "led-lamp4.jpg",
        title: "LED Table Lamp",
        price: "Rp69.000",
        store: "Vinero",
        details: "Having an elegant design, this lamp is equipped with an eye protection feature so that your eyes won't feel dazzled. In addition, this lamp is also very flexible so that it can be bent up to 180 degrees, and has 3 color temperatures that can be adjusted as needed."
    },
    {
        id: 31,
        image: "bean-bag.jpg",
        smallimg: "bean-bag2.jpg",
        smallimg1: "bean-bag3.jpg",
        smallimg2: "bean-bag4.jpg",
        title: "Linori Lobo Mini Bean Bag",
        price: "Rp339.000",
        store: "Dekoruma",
        details: "This Lobo Mini Bean Bag is a multi-functional bean bag, a mini bean bag that is suitable for relaxing or working on the floor. Filled with foam beads, this mini bean bag is lighter. Equipped with a zipper, making it easier for you to refill or replace the foam beads."
    },
    {
        id: 32,
        image: "mini-vase.jpg",
        smallimg: "mini-vase2.jpg",
        smallimg1: "mini-vase3.jpg",
        smallimg2: "mini-vase4.jpg",
        title: "ROSS Nordic Style Mini Vase",
        price: "Rp48.000",
        store: "ROSS",
        details: "A beautiful and light small vase made by a professional ceramic manufacturer with a Matte-Doff Old European Fashioned Looks texture finish. The simple model is decorated with beautiful small flowers on each side, the body of the bottle and the inside are painted in the same color."
    },
    {
        id: 33,
        image: "meja-lipat.jpg",
        smallimg: "meja-lipat2.jpg",
        smallimg1: "meja-lipat3.jpg",
        smallimg2: "meja-lipat4.jpg",
        title: "Folding Wall Table",
        price: "Rp114.000",
        store: "QARA",
        details: "Complete the limited-sized room of the house by using a portable folding wall table that can make maximum use of the function of space. When not in use, this wall corner table can be folded so it can provide an efficient concept for a minimalist space."
    },
    {
        id: 34,
        image: "b2.jpg",
        smallimg: "",
        smallimg1: "",
        smallimg2: "",
        title: "Novel Kita Pergi Hari Ini",
        price: "Rp84.000",
        store: "Goodreads",
        details: "Despite having children's characters, Kita Pergi Hari Ini is a social satirical novel full of meaning. While reading it, you will find stigma about boys and girls. There is also the issue of animal exploitation. So, this adult fantasy novel is suitable for those of you who are interested in social issues that are covered through slick fantasy stories.",
    },
    {
        id: 35,
        image: "b3.jpg",
        smallimg: "",
        smallimg1: "",
        smallimg2: "",
        title: "The Subtle Art of Not Giving A F*ck",
        price: "Rp169.000",
        store: "Gramedia",
        details: "In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be positive all the time so that we can truly become better, happier people. For decades, we have been told that positive thinking is the key to a happy, rich life. F**k positivity, Mark Manson says.",
    },
    {
        id: 36,
        image: "b4.jpg",
        smallimg: "",
        smallimg1: "",
        smallimg2: "",
        title: "Nanti Kita Bercerita Tentang Hari Ini",
        price: "Rp134.000",
        store: "Gramedia",
        details: "This book by Marchella FP is a graphic visual book which contains a flash fiction story about the main character named Awan. A woman who is afraid will forget what it's like to be young. Therefore, he wrote a letter for the future addressed to his son containing growing, breaking, enduring, changing, waiting and all the fears experienced by humans.",
    },
    {
        id: 37,
        image: "b5.jpg",
        smallimg: "",
        smallimg1: "",
        smallimg2: "",
        title: "Novel Sesuk",
        price: "Rp88.000",
        store: "Goodreads",
        details: "Novel Sesuk tells the story of a family who moves from a city to a village. They decided to move to an old house in the hills because they wanted to spend quality time with their family. Because before deciding to move into the old house, an incident occurred in the old house that almost claimed the life of a family member.",
    }
];

// masuk detail produk
function pindahHalaman(id) {
    window.location.href = 'detailProduct.html?id=' + id;

}
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));
const productTitle = urlParams.get('title');

window.addEventListener("DOMContentLoaded", function(event) { 
    setImage()
  });

window.addEventListener("load", (event) => {
    setImage();
});

function setImage() {
    let prod = null;
    if(productId){
        prod = items.find(i => i.id === productId);
    }
    if(productTitle){
        prod = items.find(i => 
            i.title === productTitle
        )
    }
    
    
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

    const relatedProduct = document.getElementById('related');
    if(productTitle){
        relatedProduct.className = "hidden";
    }

    console.log(productImageSmall);
}
//INI LOGIKA LOGIN BUY THIS
const checkAuthAndRedirect = (paymentUrl) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // Pengguna sudah login, izinkan pembayaran
            window.location.href = paymentUrl;
        } else {
            // Pengguna belum login, tampilkan peringatan atau alihkan ke halaman login
            alert("Silakan login untuk melakukan pembayaran.");
            // Anda dapat mengalihkan ke halaman login dengan menggunakan:
            window.location.href = "login.html";
        }
    });
};

const buyThisBtn = document.querySelector("#buyThisBtn");
buyThisBtn.addEventListener("click", () => {
    checkAuthAndRedirect('./paymentForm.html');
});



