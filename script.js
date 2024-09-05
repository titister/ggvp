function showModal(button) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var productItem = button.closest('.product-item');
    var img = productItem.querySelector('img');

    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function searchProducts() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toLowerCase();
    var productItems = document.getElementsByClassName('product-item');

    for (var i = 0; i < productItems.length; i++) {
        var h3 = productItems[i].getElementsByTagName("h3")[0];
        var txtValue = h3.textContent || h3.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            productItems[i].style.display = "";
        } else {
            productItems[i].style.display = "none";
        }
    }
}
