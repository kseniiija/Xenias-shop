$(document).ready(function() {
    var products = [{
            name: "Green jacket", // popuniti products sa 6 proizvoda i napraviti header 
            price: 105,
            img: "images/header_IMG.jpg"

        },
        {
            name: "Range daypack",
            price: 50,
            img: "images/chocolate.jpg"

        },
        {
            name: "Cookies end coffie",
            price: 80,
            img: "images/book.jpg" /// ovde menjamo i dodajemo proizvode

        },
        {
            name: "Range daypack",
            price: 50,
            img: "images/chocolate.jpg"

        },
        {
            name: "Range daypack",
            price: 50,
            img: "images/chocolate.jpg"

        },
        {
            name: "Range daypack",
            price: 50,
            img: "images/chocolate.jpg"

        }

    ]
    for (product in products) { //ova petlja napbraja proizvod po proizvod

        var emptyProduct = $(".fake-product").clone().removeClass("fake-product"); //sacuvali smo HMTL element sa klasom fake product u varijablu i klonirali smo ga
        $(emptyProduct).find("img").attr("src", products[product].img) // pozivamo IMG unutar kloniranog elementa i menjamo mu atribut src u img iz productsa
        $(emptyProduct).find("h1").text(products[product].name + " " + products[product].price) ///pozivamo H1 i menjamo ime i cenu

        $(".products").append(emptyProduct) //element koji smo klonirali appendujemo  u  products

    }







});