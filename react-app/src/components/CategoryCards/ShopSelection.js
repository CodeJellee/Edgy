
import './CategoryCardsStyle5.css'

function ShopSelectionCard() {
    return (
        <div className="shopSelection">

            <h1>Shop our selections</h1>
            <p>Curated collections hand-picked by Edgy's editors</p>
            <div className='collections'>
                <div>
                    <img src="https://ultimatemaitai.com/wp-content/uploads/2021/12/IMG_9154-scaled.jpg"></img>
                    <p>Creating change togeather</p>
                </div>
                <div>
                    <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/7c4eb65860982a525eadbed6689712c2.jpg?imageView2/2/w/800/q/70/format/webp"></img>
                    <p>Gifts for Her</p>
                </div>
                <div>
                    <img src="https://i.etsystatic.com/30016978/r/il/44a82d/4817852903/il_1588xN.4817852903_8mdm.jpg"></img>
                    <p>Gifts for Him</p>
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/61i-kVUBq+S._AC_SX679_.jpg"></img>
                    <p>Gifts for Kids</p>
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/41sypkoWn+L._UF894,1000_QL80_.jpg"></img>
                    <p>Gifts Under $30</p>
                </div>
            </div>
        </div>
    )
}

export default ShopSelectionCard