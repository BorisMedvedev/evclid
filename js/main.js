window.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#burger").addEventListener("click", function() {
        document.querySelector("#menu").classList.add("is-active");
    });
    document.querySelector("#but-mob").addEventListener("click", function() {
        document.querySelector("#menu").classList.remove("is-active");
    });
});