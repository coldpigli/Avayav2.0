import React from 'react'
import chilli from "../assets/chili.png"

const ProductItem = () => {
  return (
    <div class="card vertical-card bod-light">
                <div class="card-image">
                    <img src={chilli} alt="food"/>
                    <div class="favourite">
                        <span class="material-icons md-24">
                            favorite
                        </span>
                    </div>
                </div>

                <div class="card-description">
                    <h3 class="heading3">Chilli</h3>
                    <div class="card-price-rating">
                        <p>1kg</p>
                        <div class="item-rating">
                            ★ 4.2
                        </div>
                    </div>
                </div>

                <div class="cards-cta">
                    <div class="quantity-counter flex">
                    <h2 class="heading3">₹180</h2>
                    </div>
                    {/* <a href="#"><span class="add-to-bag material-icons md-24">add</span></a> */}
                    <div class="quantity-counter flex">
                        <div class="counter-button bod-light heading3 children-middle">-</div>
                        <p>2</p>
                        <div class="counter-button bod-light heading3 children-middle">+</div>
                    </div>
                </div>
            </div>
  )
}

export default ProductItem