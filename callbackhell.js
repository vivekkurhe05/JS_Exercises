function download(picture, fn) {

    setTimeout(() => {
        console.log(`Downloading ${picture}`);
        fn(picture);
    }, 3000);
    
}

let url1 = "https://www.javascripttutorial.net/pic1.jpg";
let url2 = "https://www.javascripttutorial.net/pic2.jpg";
let url3 = "https://www.javascripttutorial.net/pic3.jpg";
let url4 = "https://www.javascripttutorial.net/pic4.jpg";
let url5 = "https://www.javascripttutorial.net/pic5.jpg";

download(url1, function (picture) {
    console.log(`Processing ${picture}`);
    download(url2, function (picture){
        console.log(`Processing ${picture}`);
        download(url3, function (picture){
            console.log(`Processing ${picture}`);
            download(url4, function (picture){
                console.log(`Processing ${picture}`);
                download(url5, function (picture){
                    console.log(`Processing ${picture}`);
                })
            })
        })
    })
});
