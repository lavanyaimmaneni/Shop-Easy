import React from 'react'
import './Third_row.css'
export default function Third_row() {
    return (

        <div id="demo" class="carousel slide" data-ride="carousel">


            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
            </ul>


            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://images.samsung.com/is/image/samsung/assets/in/11316-S22-Ultra-1TB_Banners_1440x640_updated_disclaimer.jpg?imwidth=2560" alt="Los Angeles"/>
                </div>
                <div class="carousel-item">
                    <img src="https://images.samsung.com/is/image/samsung/assets/in/Neo_QLED_1440x640.jpg?imwidth=1366" alt="Chicago"  />
                </div>
                <div class="carousel-item">
                    <img src="https://images.samsung.com/is/image/samsung/assets/in/A73-Homepage_Main_KV_Desktop_1440x640.jpg?imwidth=1366" alt="New York" />
                </div>
                <div class="carousel-item">
                    <img src="https://images.samsung.com/is/image/samsung/assets/in/home/7909_Curd-Maestro_Samsung.com_1440x640-0412.jpg?imwidth=1366" alt="New York" />
                </div>
            </div>


            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>

    )
}
