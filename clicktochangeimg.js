document.querySelector('body').addEventListener('click', (e) => {
    console.log("case1");
    if (document.querySelector(".targetitem").classList.contains("d-none") == true) {

        document.querySelector(".targetout").classList.add("d-none")
        document.querySelector(".targetitem").classList.remove("d-none")
        document.querySelector(".targetitem").classList.add("fadein")
        console.log("case2");

    }
    else { console.log("case3"); }
});

