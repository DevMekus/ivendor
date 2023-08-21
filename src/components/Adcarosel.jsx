import React from 'react'

const Adcarosel = () => {
  return (
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://img.freepik.com/free-vector/flat-design-black-friday-concept_23-2148676380.jpg?w=2000" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
                <img src="https://t4.ftcdn.net/jpg/01/24/84/83/360_F_124848301_xU8zYPbiqllW4kmETGmAhtxkUDwLveBi.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src="https://st4.depositphotos.com/19408678/22315/i/600/depositphotos_223159142-stock-photo-black-friday-logo-typographic-logotype.jpg" class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Adcarosel