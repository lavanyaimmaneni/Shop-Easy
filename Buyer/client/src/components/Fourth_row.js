import React from 'react'
import Row_4_Card_items from './Row_4_Card_items'
import './Fourth_row.css'
export default function Fourth_row() {
    return (
        <div class="d-flex flex-column bd-highlight mb-3">
            <div class="Heading">
                <h2>
                    Latest Smart TV's
                </h2>
            </div>
            <div class="p-2 bd-highlight">
                <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="p-2 bd-highlight">
                        <Row_4_Card_items
                            imageurl="https://www.gizmochina.com/wp-content/uploads/2018/02/Mi-LED-TV-4-featured.jpeg"
                        />
                    </div>
                    <div class="p-2 bd-highlight">
                        <Row_4_Card_items
                            imageurl="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Mi_TV_5X_10_bit_color_1024x576.jpg"
                        />
                    </div>
                    <div class="p-2 bd-highlight">
                        <Row_4_Card_items
                            imageurl="http://www.firstpost.com/wp-content/uploads/2018/02/Flipkart-Mi-TV-4.jpg"
                        />
                    </div>
                </div>
            </div>
            <div class="p-2 bd-highlight">
                <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="p-2 bd-highlight">
                        <Row_4_Card_items
                            imageurl="https://img.global.news.samsung.com/in/wp-content/uploads/2021/07/8670_BIg-TV-Day_Newsroom-Banners_3000x2000-px.jpg"
                        />
                    </div>
                    <div class="p-2 bd-highlight">
                        <Row_4_Card_items
                            imageurl="https://i.insider.com/54db3c206bb3f74829802498?width=1000&format=jpeg&auto=webp"
                        />
                    </div>
                    <div class="p-2 bd-highlight">
                        <Row_4_Card_items
                            imageurl="https://i.pinimg.com/originals/2f/37/28/2f3728f0772b9670c6e65681661c9c25.jpg"
                        />
                    </div>
                </div>
            </div>
            <div className='Heading'>
                <h2>
                    Latest Smartphones
                </h2>
            </div>
            <div class="p-2 bd-highlight">
                <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="p-2 bd-highlight">
                        <Row_4_Card_items
                            imageurl="https://images.macrumors.com/t/YU0cj4rhNfVahW00d0QI0Qlln1s=/1600x/article-new/2021/07/iphone-12-ad-in-the-dark.jpg"
                        />
                    </div>
                    <div class="p-2 bd-highlight">
                        <Row_4_Card_items
                            imageurl="https://newspaperads.ads2publish.com/wp-content/uploads/2021/05/redmi-note-10-pro-max-revolutionary-108mp-smartphone-ad-times-of-india-mumbai-25-05-2021.jpg"
                        />
                    </div>
                    <div class="p-2 bd-highlight">
                        <Row_4_Card_items
                            imageurl="https://1.bp.blogspot.com/-9AUd-W0XFqg/XIKRymd6MPI/AAAAAAABH5s/T-ztg-exkUg6F2IjECX-nOWnOVbF6w-bgCLcBGAs/s1600/oppo-f11-pro-launch-date-philippines.png"
                        />
                    </div>
                </div>
            </div>
            <div class="p-2 bd-highlight">
                <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="p-2 bd-highlight">
                        <Row_4_Card_items
                            imageurl="https://1.bp.blogspot.com/-tnOv3Fvkm6s/W2mGrjFrAfI/AAAAAAAAEw8/oCR74a7-t-MG9aOM0Qjw5UvBaTGwFKSLgCLcBGAs/s1600/New-Samsung-Galaxy-Note-9-pictures%2Bj.png"
                        />
                    </div>
                    <div class="p-2 bd-highlight">
                        <Row_4_Card_items
                            imageurl="https://assets.mspimages.in/wp-content/uploads/2021/06/OnePlus-Nord-CE-5G-1.jpg"
                        />
                    </div>
                    <div class="p-2 bd-highlight">
                        <Row_4_Card_items
                            imageurl="https://images.hindustantimes.com/tech/img/2021/06/17/1600x900/Vivo_V21e_1623941418226_1623941434132.jpg"
                        />
                    </div>
                </div>
            </div>
            <div class="Heading">
                <h2>
                    Featured Brand's
                </h2>
            </div>
            <div class="Brands_class">
                <div class="p-2 bd-highlight">
                    <div class="d-flex flex-row bd-highlight mb-3">
                        <div class="p-2 bd-highlight">
                            <Row_4_Card_items
                                imageurl="https://newspaperads.ads2publish.com/wp-content/uploads/2018/05/lg-the-coolest-way-to-maximize-your-svings-ad-delhi-times-28-04-2018.png"
                            />
                        </div>
                        <div class="p-2 bd-highlight">
                            <Row_4_Card_items
                                imageurl="https://i.ytimg.com/vi/TUSpA3eQayg/maxresdefault.jpg"
                            />
                        </div>
                        <div class="p-2 bd-highlight">
                            <Row_4_Card_items
                                imageurl="https://www.patentlyapple.com/.a/6a0120a5580826970c026bdec4a280200c-pi"
                            />
                        </div>
                        

                    </div>
                </div>
            </div>

        </div>

    )
}
