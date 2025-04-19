const music = new Audio('audio/blockbuster.mp3');
// music.play();

const songs = [
    {
        id: 9,
        songName: ` Sajni re <br />
                <div class="subtitle">Arijit Singh</div>`,
        poster: "img/sajni.jpg"
    },

    {
        id: 10,
        songName: ` Dhoonde Akhiya <br />
                <div class="subtitle">Yaseer Desai</div>`,
        poster: "img/dhoonde akhiya.jpg"
    },

    {
        id: 11,
        songName: ` Dulhan Banami <br />
                <div class="subtitle">Acharjya Borpatra& Kiran Dash</div>`,
        poster: "img/dulhan banami.jpg"
    },

    {
        id: 12,
        songName: ` Guzarish <br />
                <div class="subtitle">Sonu nigam & Javed ali</div>`,
        poster: "img/gujarish.jpg"
    },

    {
        id: 13,
        songName: ` Khuda Jane <br />
                <div class="subtitle">KK & Shilapa Rao</div>`,
        poster: "img/Khuda jane.jpg"
    },

    {
        id: 14,
        songName: ` Teri Jhuki Najar <br />
                <div class="subtitle">Arijit Singh</div>`,
        poster: "img/teri jhuki najar1.jpg"
    },

    {
        id: 15,
        songName: ` Malang Sajna <br />
                <div class="subtitle">Sachet & Parampara</div>`,
        poster: "img/malang sajna.jpg"
    },

    {
        id: 16,
        songName: ` Har funn Maula <br />
                <div class="subtitle">Vishal Dadlani & Zara khan</div>`,
        poster: "img/haar fun maula.jpg"
    },


    {
        id: 17,
        songName: ` Mahi Ve <br />
                <div class="subtitle">A.R Rahman</div>`,
        poster: "img/mahi ve.jpg"
    },

    {
        id: 18,
        songName: ` Butta Bomma <br />
                <div class="subtitle">Arman Malik</div>`,
        poster: "img/Butta-Bomma.jpg"
    },

    {
        id: 19,
        songName: ` Chaleya <br />
                <div class="subtitle">Arijit Singh</div>`,
        poster: "img/chaleya.jpg"
    },

    {
        id: 20,
        songName: ` Blockbuster <br />
                <div class="subtitle">Thaman</div>`,
        poster: "img/blockbuster.jpg"
    },

    {
        id: 21,
        songName: ` Arabic Kuthu <br />
                <div class="subtitle">Anirudh</div>`,
        poster: "img/arabic.jpg"
    },

    {
        id: 22,
        songName: ` Afgan jalebi <br />
                <div class="subtitle">Asrar</div>`,
        poster: "img/afgan jalebi.jpg"
    },

    {
        id: 23,
        songName: ` Girl I need you <br />
                <div class="subtitle">Arijit Singh & Meat bros</div>`,
        poster: "img/girl i need you.jpg"
    },

    {
        id: 24,
        songName: ` Gulabi Sadi <br />
                <div class="subtitle">Sanju Rathod</div>`,
        poster: "img/gulabi shadi.jpg"
    },

    {
        id: 25,
        songName: ` Chammak Chhalo <br />
                <div class="subtitle">Akon</div>`,
        poster: "img/chammak chalo.jpg"
    },

    {
        id: 26,
        songName: ` Heeriye <br />
                <div class="subtitle">Arijit Singh & Jasleen Royal</div>`,
        poster: "img/heeriye.jpg"
    },

    {
        id: 27,
        songName: ` Illuminati <br />
                <div class="subtitle">Dabzee</div>`,
        poster: "img/illuminati.jpg"
    },

    {
        id: 28,
        songName: ` Khoya Hai <br />
                <div class="subtitle">Neeti Mohan & Kaala Bhairava</div>`,
        poster: "img/khoya h.jpg"
    },

    {
        id: 29,
        songName: ` Kolaveri <br />
                <div class="subtitle">Dhanush</div>`,
        poster: "img/kolavari1.jpg."
    },

    {
        id: 30,
        songName: ` Maari <br />
                <div class="subtitle">Dhanush & Anirudh Ravichandar</div>`,
        poster: "img/mari.jpg"
    },

    {
        id: 31,
        songName: ` Kurchi Madathapetti <br />
                <div class="subtitle">Sri Krishna & Sahiti Chaganti</div>`,
        poster: "img/Kurchi Madathapetti.jpg"
    },

    {
        id: 32,
        songName: ` Unakku Than <br />
                <div class="subtitle">Santosh Narayanan & Dhvani Kailas</div>`,
        poster: "img/unakku than.jpg"
    },

    {
        id: 33,
        songName: `  Manjar Hai Naya <br />
                <div class="subtitle">Shantanu Sudame & Sushant Sachdev</div>`,
        poster: "img/manjar h naya.jpg"
    },

    {
        id: 34,
        songName: ` Manohari <br />
                <div class="subtitle">Divya kumar & Neeti mohan</div>`,
        poster: "img/manohari.jpg"
    },

    {
        id: 35,
        songName: ` Mere Bina <br />
                <div class="subtitle">Nikhil Dsouza</div>`,
        poster: "img/mere bina.jpg"
    },

    {
        id: 36,
        songName: ` Nakhrewali <br />
                <div class="subtitle">Rohit Raut & Sonali Sonawane</div>`,
        poster: "img/nakhrewali.jpg"
    },

    {
        id: 37,
        songName: `  Meri Banogi Kya <br />
                <div class="subtitle">Rita Riba</div>`,
        poster: "img/meri banogi kya.jpg"
    },

    {
        id: 38,
        songName: `  O Meri Laila <br />
                <div class="subtitle">Atif Aslam & Jyotica Tangri</div>`,
        poster: "img/meri laila.jpg"
    },

    {
        id: 39,
        songName: ` Prasthanam <br />
                <div class="subtitle">Dev Negi</div>`,
        poster: "img/Prasthanam.jpg"
    },

    {
        id: 40,
        songName: ` Oochi Oochi Deeware <br />
                <div class="subtitle">Arijit Singh</div>`,
        poster: "img/oonchi deware.jpg"
    },

    {
        id: 41,
        songName: ` Oo Antava mama <br />
                <div class="subtitle">Indravathi Chauhan</div>`,
        poster: "img/uanta vama.jpg"
    },

    {
        id: 42,
        songName: ` Rowdy Baby <br />
                <div class="subtitle">Dhanush & Dhee</div>`,
        poster: "img/rowdy baby.jpg"
    },

    {
        id: 43,
        songName: ` Satranga <br />
                <div class="subtitle">Arijit Singh</div>`,
        poster: "img/satranga.jpg"
    },

    {
        id: 44,
        songName: `  Seeti maar <br />
                <div class="subtitle">Jaspreet Jasz & Rita</div>`,
        poster: "img/seeti maar.jpg"
    },

    {
        id: 45,
        songName: ` Sabashiya <br />
                <div class="subtitle">Shilpa Rao, Anand Bhaskar & Abhijeet Srivastava</div>`,
        poster: "img/sabashiya.jpg"
    },

    {
        id: 46,
        songName: `  Sau Tarah Ke <br />
                <div class="subtitle">Janita Gandhi & Amit Mishra</div>`,
        poster: "img/sau tarah ke.jpg"
    },

    {
        id: 47,
        songName: `Shikayat <br />
                <div class="subtitle">Usama ali & Ahad khan</div>`,
        poster: "img/shikayata.jpg"
    },

    {
        id: 48,
        songName: ` Surili Akhiyo Wale <br />
                <div class="subtitle">Sajid Wajid</div>`,
        poster: "img/surili.jpg"
    },

    {
        id: 49,
        songName: ` Tu Hai Kaha <br />
                <div class="subtitle">Usama Ali & Ahad khan</div>`,
        poster: "img/tu hai kahan.jpg"
    },

    {
        id: 50,
        songName: ` Tum Se hi <br />
                <div class="subtitle">Mohit Chauhan</div>`,
        poster: "img/tum se hi.jpg"
    },

    {
        id: 51,
        songName: ` Tum Tum <br />
                <div class="subtitle">Sri Vardhini, Aditi, Satya Yamini</div>`,
        poster: "img/tum tum.jpg"
    },

    {
        id: 52,
        songName: ` Tu hi Meri Shab hai <br />
                <div class="subtitle">KK</div>`,
        poster: "img/tu hi meri sab h.jpg"
    },
    
]



let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 330;
});

pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
});