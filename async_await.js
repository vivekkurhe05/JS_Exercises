function download(picture, fn) {

    setTimeout(async () => {
        console.log(`Downloading ${picture}`);
        await fn(picture);
    }, 3000);
    
}

let url1 = "https://www.javascripttutorial.net/pic1.jpg";
let url2 = "https://www.javascripttutorial.net/pic2.jpg";
let url3 = "https://www.javascripttutorial.net/pic3.jpg";
let url4 = "https://www.javascripttutorial.net/pic4.jpg";
let url5 = "https://www.javascripttutorial.net/pic5.jpg";

function process (picture){
    console.log(`Processing ${picture}`);
}

download(url1, process);
download(url2, process);
// download(url3, process);
// download(url4, process);
// download(url5, process);