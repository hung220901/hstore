import { faCoins, faPhone, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
// import backgroundImage from 'https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/aboutus/4/top-bg.jpg';
export default function AboutUs() {
  return (
    <>
        <div className=" relative w-full h-[250px] leading-6 p-16 text-[#1e3636]">
            <img className='absolute left-0 right-0 top-0 bottom-0 h-full -z-20  ' src="https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/aboutus/4/top-bg.jpg" alt="" />
            <span className='text-xl font-bold'>ABOUT US</span>
            <h2 className='text-4xl font-black pb-5'>OUR COMPANY</h2>
            <div className="font-bold text-sm bg-black text-white inline-block cursor-pointer px-6 py-4">CONTACT</div>
        </div>
        <div className='px-20 pt-2'>
            <div className="content py-2 text-[#777777]">
                <span className='text-[#21293c]'>Home {'>'} <span>About</span></span>
                <h3 className='pt-20 pb-5 font-bold text-2xl text-[#21293c]'>OUR STORY</h3>
                <p className='py-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ullam eaque porro cumque tempore rem eos culpa, harum ex reprehenderit iusto enim distinctio corrupti quibusdam maxime natus sint quis accusantium?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam earum molestias et quo, asperiores soluta doloremque dignissimos, impedit mollitia quod velit. Consectetur, quae esse blanditiis repellat quaerat quas soluta. Placeat.</p>
            </div>
            <div className="why-choose-us bg-[#efefef] py-14 px-5">
                <h3 className='text-xl font-bold mb-5'>WHY CHOOSE US</h3>
                <div className="box flex ">
                    <div className="free-shipping bg-white pt-7 px-11 pb-10">
                        <div className="icon">
                            <FontAwesomeIcon icon={faTruck} size='3x'/>
                        </div>
                        <h3 className="title font-bold py-5 text-lg ">
                            Free Shipping
                        </h3>
                        <div className="content text-[15px] text-[#7b858a]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr.
                        </div>
                    </div>
                    <div className="money bg-white pt-7 px-11 pb-10">
                        <div className="icon">
                            <FontAwesomeIcon icon={faCoins} size='3x'/>
                        </div>
                        <h3 className="title font-bold py-5 text-lg ">
                            100% money back guarant
                        </h3>
                        <div className="content text-[15px] text-[#7b858a]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr.
                        </div>
                    </div>
                    <div className="support bg-white pt-7 px-11 pb-10">
                        <div className="icon">
                            <FontAwesomeIcon icon={faPhone} size='3x'/>
                        </div>
                        <h3 className="title font-bold py-5 text-lg ">
                        Online Support 24/7
                        </h3>
                        <div className="content text-[15px] text-[#7b858a]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr.
                        </div>
                    </div>
                </div>
            </div>
            <div className="happy-client py-5">
                <h3 className='text-center py-10 font-bold text-xl '>HAPPY CLIENTS</h3>
                <Swiper
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 4000
                }}
                modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className="flex ">
                            <div className="avaImg w-[200px] h-full">
                                <img src="https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/aboutus/4/client2.png"
                                 alt="" className='max-w-[60px] h-auto inline-block' />
                            </div>
                            <div className="flex-col">
                                <div className="name font-bold">hung</div>
                                <div className="role">admin</div>
                                <div className="content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia commodi accusantium iusto aut maiores dolorem sit provident est ipsam ea odio hic assumenda iste illum sapiente nulla, vitae fugit.
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> 
                </Swiper>
            </div>
            <div className="counter flex px-5 py-10 text-[#7b858a] bg-[#efefef] justify-around">
                <div className="customer">
                    <span className='text-[#0088cc] text-[32px] leading-6 font-extrabold'>200+</span>
                    <div>MILLION CUSTOMERS</div>
                </div>
                <div className="member">
                    <span className='text-[#0088cc] text-[32px] leading-6 font-extrabold'>1800+</span>
                    <div>TEAM MEMBERS</div>
                </div>
                <div className="support">
                    <span className='text-[#0088cc] text-[32px] leading-6 font-extrabold'>24<span className='text-[20px]'>HR</span></span>
                    <div>SUPPORT AVAILABLE</div>
                </div>
                <div className="product">
                    <span className='text-[#0088cc] text-[32px] leading-6 font-extrabold'>265+</span>
                    <div>CUP OF COFFEE</div>
                </div>
                <div className="review">
                    <span className='text-[#0088cc] text-[32px] leading-6 font-extrabold'>99%</span>
                    <div>POSITIVE REVIEWS</div>
                </div>
            </div>
        </div>
    </>
  )
}
