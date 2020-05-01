$(document).ready(function(){

    let object1 = {
        picture: "images/005ada41fd7ed54e6047347ce8774fd4.jpg",
        title: "Bloody Bride",
        description: "This is the description of the first picture. As you can see, I don't have the faintest idea what to write here. But I guess this will do. Yup, it's long enough, nice."
        }

    let object2 = {
        picture: "images/20592wide.jpg",
        title: "Traditional Warrior",
        description: "This is the description of the second picture. As you can see, I don't have the faintest idea what to write here. But I guess this will do. Yup, it's long enough, nice."
        }

    let object3 = {
        picture: "images/230297.jpg",
        title: "Arwen",
        description: "This is the description of the third picture. As you can see, I don't have the faintest idea what to write here. But I guess this will do. Yup, it's long enough, nice."
        }

    let object4 = {
        picture: "images/unnamed (2).jpg",
        title: "Tauriel",
        description: "This is the description of the fourth picture. As you can see, I don't have the faintest idea what to write here. But I guess this will do. Yup, it's long enough, nice."
        }

    let object5 = {
        picture: "images/504786-most-popular-elves-wallpaper-2048x1161-for-macbook.jpg",
        title: "Elves at War",
        description: "This is the description of the fifth picture. As you can see, I don't have the faintest idea what to write here. But I guess this will do. Yup, it's long enough, nice."
        }

    let object6 = {
        picture: "images/504790-best-elves-wallpaper-1920x1080-tablet.jpg",
        title: "Elven forest at night",
        description: "This is the description of the sixth picture. As you can see, I don't have the faintest idea what to write here. But I guess this will do. Yup, it's long enough, nice."
        }

    let object7 = {
        picture: "images/elf-in-the-city-18239-2560x1600.jpg",
        title: "Elf seeing a dragon",
        description: "This is the description of the seventh picture. As you can see, I don't have the faintest idea what to write here. But I guess this will do. Yup, it's long enough, nice."
        }

    let object8 = {
        picture: "images/thumb444x250-04.jpg",
        title: "Dark and Light side",
        description: "This is the description of the eighth picture. As you can see, I don't have the faintest idea what to write here. But I guess this will do. Yup, it's long enough, nice."
        }

    let object9 = {
        picture: "images/unnamed.jpg",
        title: "King of the Elves",
        description: "This is the description of the ninth picture. As you can see, I don't have the faintest idea what to write here. But I guess this will do. Yup, it's long enough, nice."
        }

    let object10 = {
        picture: "images/unnamed (1).jpg",
        title: "Hunting a dragon",
        description: "This is the description of the tenth picture. As you can see, I don't have the faintest idea what to write here. But I guess this will do. Yup, it's long enough, nice."
    }

    let array = [object1, object2, object3, object4, object5, object6, object7, object8, object9, object10]

    array.forEach((Something, indexCall) => {
        $("#thumbnails").append(`<div id="${indexCall}" class="lilPic" data-index="${indexCall}">
                                    <img class="imgClass" src="${Something.picture}" alt="${Something.title}" data-index="${indexCall}">
                                 </div>`);
        $(`#${indexCall}`).append(`<div class="thumbTitle" data-index="${indexCall}">${Something.title}</div`);
        $(".lilPic").click((SomethingAgain) => {
            let indexClicked = $(SomethingAgain.target).attr("data-index");
            let numberIndex = parseInt(indexClicked);
           /*$('#clicked').text(array[numberIndex].title);*/
        });
    });

    let currentPic = 0;

    $("#picture").attr("src", array[currentPic].picture);
    $("#picTitle").html(array[currentPic].title);
    $("#picDescription").html(array[currentPic].description);

    let loadPic = (picNumber) => {
        $("#picture").attr("src", array[picNumber].picture);
        $("#picTitle").html(array[picNumber].title);
        $("#picDescription").html(array[picNumber].description);
    }

    loadPic(currentPic);

    $("#right").click(() => {
        currentPic++;
        if (currentPic >= array.length){
            $(currentPic = 0)};
        loadPic(currentPic);
    })

    $("#left").click(() => {
        currentPic--;
        if (currentPic < 0){
            $(currentPic = array.length-1)};
        loadPic(currentPic);
    })

})