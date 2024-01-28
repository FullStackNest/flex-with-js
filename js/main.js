// let, const, var: variable declarations
let navHeader = document.getElementById("nav-header"); // reference 
navHeader.insertAdjacentHTML("afterbegin", `
 <nav class="navbar navbar-expand-lg navbar-light bg-primary ">
        <div class="container-fluid">
            <a class="navbar-brand text-light" href="index.html">MyShop</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active text-light" aria-current="page" href="products.html">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="about-us.html">About us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="return-policy.html">Return Policy</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="faqs.html">FAQs</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Cash On Delivery</a></li>
                            <li><a class="dropdown-item" href="#">24 Hours Delivery</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">No Cost EMI Shopping</a></li>
                        </ul>
                    </li>

                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

`)


let head = document.getElementById('head');
head.insertAdjacentHTML('afterbegin', `
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<link rel="shortcut icon" href="https://img.freepik.com/premium-vector/creative-abstract-modern-ecommerce-logo-design-colorful-gradient-online-shopping-logo-template_467913-976.jpg" type="image/x-icon">
<link rel="stylesheet" href="css/style.css">
`)