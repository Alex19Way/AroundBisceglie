import React from "react";

const Category=()=>{
    return(
        <div className="category" id="category">
            <div className="category-container">
            <button className="btn-intra" name="intrattenimento">
                    <h5 class="categorie-text">Intrattenimento</h5></button>
            <button className="btn-spiaggia" name="spiagge">
                    <h5 class="categorie-text">Spiagge e Lidi</h5></button>
            <button className="btn-monu" name="monumenti">
                    <h5 className="categorie-text">Monumenti</h5></button>
            <button className="btn-risto" name="ristoro">
                    <h5 className="categorie-text">Ristoro</h5></button>
            <button className="btn-att" name="attivita">
                    <h5 className="categorie-text">Attività Commerciali</h5></button>
            </div>
        </div>
    )
}

export default Category;