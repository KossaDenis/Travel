let item = document.querySelectorAll(".fourth_section_item_content"),
    content = document.querySelectorAll(".fourth_section_item_paragraph");

item.forEach((element, index) => {
    element.addEventListener("click", function () {
        if (content[index].classList.contains("active")) {
            content[index].classList.remove("active")
            setTimeout(() => content[index].style.display = 'none', 300)
        } else {
            content[index].style.display = 'block'
            setTimeout(() => content[index].classList.add("active"), 1)
        }
    })
})

//search
let search = document.querySelector(".search"),
    search_input = document.querySelector(".search_input");

search.addEventListener("click", function () {
    if (search_input.classList.contains('active')) {
        search_input.classList.remove('active')
        setTimeout(() => search_input.style.display = 'none', 300)
    } else {
        search_input.style.display = 'block'
        setTimeout(() => search_input.classList.add("active"), 1)
    }
})
//slick
$(function () {
    $('.sixth_section_item').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dotsClass: "sexth_section_dots",
        slidesToShow: 1,
        infinite: false,
        adaptiveWidth: true,
    })

    $('.first_section_imgs').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: false,
        prevArrow: '<img src="./img/arrow left.svg" class = "btn_left" alt="">',
        nextArrow: '<img src="./img/arrow right.svg" class = "btn_right" alt="">'
    })
    //maskMoney

    $('.money').maskMoney();

    //autocomplete
    let myArray = [
        "Cairo",
        "Alexandria",
        "Giza",
        "Shubra el-Kheima",
        "Port Said",
        "Suez",
        "Luxor"
    ];
    $('.destinations').autocomplete({
        source: myArray
    });

})
