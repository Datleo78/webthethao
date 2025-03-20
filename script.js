const slider = document.querySelectorAll(".slider-content-item");
const next = document.querySelector(".ti-arrow-right");
const prev = document.querySelector(".ti-arrow-left");
let index = 0;

next.addEventListener("click", function () {
  slider[index].classList.remove("active");
  index = (index + 1) % slider.length;
  slider[index].classList.add("active");
});

prev.addEventListener("click", function () {
  slider[index].classList.remove("active");
  index = (index - 1 + slider.length) % slider.length;
  slider[index].classList.add("active");
});

const btnAddToCarts = document.querySelectorAll(".js-btn-add-to-cart");
const productDetail = document.querySelector(".js-product-detail");
const productDetailClose = document.querySelector(".js-product-detail-close");
const productDetailContainer = document.querySelector(
  ".js-product-detail-container"
);

//hiển thị chi tiết sản phẩm
function showProductDetail() {
  productDetail.classList.add("open");
}

//ẩn chi tiết sản phẩm
function hideProuductDetail() {
  productDetail.classList.remove("open");
}

//lặp qua từng btnAddToCart
for (const btnAddToCart of btnAddToCarts) {
  //thực hiện sự kiện click vào button add-to-cart để chạy hàm show...
  btnAddToCart.addEventListener("click", showProductDetail);
}

//thực hiện sự kiện click vào button productDetailClose để chạy hàm hide...
productDetailClose.addEventListener("click", hideProuductDetail);

//click vào vùng nội dung productDetail sẽ ẩn productDetail
productDetail.addEventListener("click", hideProuductDetail);

//ngăn chặn hành vi nổi bột của productDetailContainer
productDetailContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
