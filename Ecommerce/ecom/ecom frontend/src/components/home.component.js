function HomeComponent() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://img.freepik.com/premium-vector/e-commerce-icon-robotic-hand-internet-shopping-online-purchase-add-cart_127544-586.jpg?w=2000" height="500px" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJZdQmUbTFns2ORF3-S-4As51aJ0b1Sd3GoDIkiCVOw&s" height="500px" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.shutterstock.com/image-illustration/digital-shopping-icons-connections-on-260nw-1012157215.jpg" height="500px" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent;