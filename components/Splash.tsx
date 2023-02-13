// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {Autoplay} from "swiper";
import {ContainerItem, ImageSet, Reference} from "@bloomreach/spa-sdk";
import {BrProps} from "@bloomreach/react-sdk";

export interface dpltSplashItem {
    image: Reference
    link: string
    buttonText: string
}

export interface dpltSplash {
    slides: dpltSplashItem[]
}

export interface dpltSplashComponent {
    desktop: dpltSplash
    mobile: dpltSplash
}

export default function Splash({page, component}: BrProps<ContainerItem>) {

    if (!page) {
        return null
    }

    const content = component?.getContent<dpltSplashComponent>(page);
    const desktop = content?.desktop

    const {slides} = desktop

    return (
        <div id="banner-b5">
            <div className="lg:block">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {slides && slides.map((item: dpltSplashItem) => {

                        const {image, buttonText, link} = item
                        const imageLink = page?.getContent<ImageSet>(image)?.getOriginal()?.getUrl()

                        return <SwiperSlide>
                            <a id="banner-b5-desktop" href={link}>
                                <div id="banner-b5-slide-1" className="relative">
                                    <div
                                        className="absolute w-full h-full z-10 transition-all duration-200 opacity-100">
                                <span>
                                    <span style={{
                                        boxSizing: 'border-box',
                                        display: 'block',
                                        width: 'initial',
                                        height: 'initial',
                                        background: 'none',
                                        opacity: 1,
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        paddingTop: '34.375%'
                                    }}/>
                                    <img alt="" aria-label="SHOP NOW link" role="presentation"
                                         src={imageLink}
                                         style={{
                                             position: 'absolute',
                                             top: 0,
                                             left: 0,
                                             bottom: 0,
                                             right: 0,
                                             boxSizing: 'border-box',
                                             padding: 0,
                                             border: 'none',
                                             margin: 'auto',
                                             display: 'block',
                                             width: 0,
                                             height: 0,
                                             minWidth: '100%',
                                             maxWidth: '100%',
                                             minHeight: '100%',
                                             maxHeight: '100%'
                                         }}
                                    />
                                </span>
                                    </div>
                                    <div className="opacity-100"><span style={{
                                        boxSizing: 'border-box',
                                        display: 'block',
                                        overflow: 'hidden',
                                        width: 'initial',
                                        height: 'initial',
                                        background: 'none',
                                        opacity: 1,
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        position: 'relative'
                                    }}><span style={{
                                        boxSizing: 'border-box',
                                        display: 'block',
                                        width: 'initial',
                                        height: 'initial',
                                        background: 'none',
                                        opacity: 1,
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        paddingTop: '34.375%'
                                    }}/><img alt="SHOP NOW" role="presentation"
                                             src="https://cdn-media.prettylittlething.com/bms/media/2023/01/23/ec2v3qhGbwx798lEbeaxIAmb7cPbDAltlZpIT5p5.jpg?imwidth=160"
                                             style={{
                                                 position: 'absolute',
                                                 top: 0,
                                                 left: 0,
                                                 bottom: 0,
                                                 right: 0,
                                                 boxSizing: 'border-box',
                                                 padding: 0,
                                                 border: 'none',
                                                 margin: 'auto',
                                                 display: 'block',
                                                 width: 0,
                                                 height: 0,
                                                 minWidth: '100%',
                                                 maxWidth: '100%',
                                                 minHeight: '100%',
                                                 maxHeight: '100%'
                                             }}/>
                            </span>
                                    </div>
                                    <button type="button"
                                            className="cta ButtonStyles_common__SV_7U ButtonStyles_centered__HBl44 ButtonStyles_splash__OaDNC z-10 absolute bottom-4 md:bottom-6 pointer-events-none cta--default pli-8 h-10"
                                            aria-label="SHOP NOW link">{buttonText}
                                    </button>
                                </div>
                            </a>
                        </SwiperSlide>
                    })}


                </Swiper>
            </div>
        </div>)
}