import React from 'react'
import NewsContent from '../Components/NewsContent'
import LeftStack from '../Components/LeftStack'
import HeaderAds from '../Components/HeaderAds'

function LangingPage() {
    return (
        <>
            <div className='container-fluid w-100 m-1 p-5'>
                <HeaderAds />
            </div>
            <section class="py-5 border-bottom" id="features">
                <div class="container px-5 my-5">
                    <div class="row gx-5">
                        <div class="col-lg-3 mb-5 mb-lg-0">
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div>
                            <LeftStack />
                        </div>
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <div class="feature bg-light bg-gradient text-dark rounded-3 mb-3 p-4"><i class="bi bi-building"></i> 
                                <NewsContent />
                            </div>
                            {/* <a class="text-decoration-none" href="#!">
                            Call to action
                            <i class="bi bi-arrow-right"></i>
                        </a> */}
                        </div>
                        <div class="col-lg-3">
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                            <img src='https://i.postimg.cc/28x8VZmz/malabargold.jpg' style={{ height: '200px' }}></img>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default LangingPage