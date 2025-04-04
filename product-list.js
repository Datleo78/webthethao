var products = [
  {
    id: 1,
    name: "Áo bóng đá Inter Milan sân khách 2024/25",
    price: 120,
    img: "assets/img/outfits/clb/clb1.webp",
  },
  {
    id: 2,
    name: "Áo bóng đá Chelsea thứ 3 2024/25",
    price: 130,
    img: "assets/img/outfits/clb/clb2.webp",
  },
  {
    id: 3,
    name: "Áo bóng đá Manchester United Thứ 3 2024/25",
    price: 150,
    img: "assets/img/outfits/clb/clb3.webp",
  },
  {
    id: 4,
    name: "Áo bóng đá Arsenal sân khách 2024/25",
    price: 140,
    img: "assets/img/outfits/clb/clb4.webp",
  },
  {
    id: 5,
    name: "Áo bóng đá Arsenal thứ 3 2024/25",
    price: 140,
    img: "assets/img/outfits/clb/clb5.webp",
  },
  {
    id: 6,
    name: "Áo bóng đá Real Madrid Sân Nhà 2024/25",
    price: 140,
    img: "assets/img/outfits/clb/clb6.webp",
  },
  {
    id: 7,
    name: "Áo bóng đá Manchester United Sân Nhà 2024/25",
    price: 140,
    img: "assets/img/outfits/clb/clb7.webp",
  },
  {
    id: 8,
    name: "Áo bóng đá Manchester United Sân Khách 2024/25",
    price: 140,
    img: "assets/img/outfits/clb/clb8.webp",
  },
  {
    id: 9,
    name: "Áo bóng đá Manchester United Thứ 3 2024/25",
    price: 140,
    img: "assets/img/outfits/clb/clb9.webp",
  },
  {
    id: 10,
    name: "Áo tập luyện Real Madrid 2024/25",
    price: 140,
    img: "assets/img/outfits/clb/clb10.webp",
  },
];

const productContent = $(".owl-carousel");

// Hàm render sản phẩm
function renderProducts(products) {
  productContent.trigger("destroy.owl.carousel"); //Hủy slider cũ, xóa sự kiện
  productContent.html(""); // Xóa sản phẩm cũ nhưng không phá vỡ cấu trúc slider

  //Thêm sản phẩm mới vào slider
  products.forEach((product) => {
    const productHTML = `
            <div class="product-content-item js-item">
              <img src="${product.img}" alt="${product.name}">
              <div class="product-content-item-text">
                <div class="product-content-item-text-top">
                  <h1>${product.name}</h1>
                  <p>${product.price}<sup>d</sup></p>
                  <button class="btn-add-to-cart js-btn-add-to-cart" data-id=${product.id}>add to cart</button>
                  <div class="product-content-item-text-social">
                    <i class="ti-facebook"></i>
                    <i class="ti-twitter"></i>
                    <i class="ti-instagram"></i>
                  </div>
                </div>
              </div>
            </div>`;
    productContent.append(productHTML);
  });
  // Sau khi cập nhật nội dung, phải reset OwlCarousel
  productContent.owlCarousel({
    loop: true, //Chạy vòng lặp
    margin: 10, // Khoảng cách giữa các item
    nav: true, // Bật nút điều hướng
    dots: true, // Bật dấu chấm
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 4 },
    },
  });
}

// Khi trang tải xong thì render sản phẩm
$(document).ready(function () {
  renderProducts(products);
});

// Gán sự kiện cho phần tử cha (Event Delegation)
document.body.addEventListener("click", function (event) {
  if (event.target.classList.contains("js-btn-add-to-cart")) {
    showProductDetail();
  }
});
