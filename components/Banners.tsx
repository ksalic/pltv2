import {ContainerItem, ImageSet, Reference} from "@bloomreach/spa-sdk";
import {BrProps} from "@bloomreach/react-sdk";

export interface pltBanner {
    link: string
    image: Reference
    buttonText: string
}

export interface pltBanners {
    banners: pltBanner[]
}

export interface pltBannerComponent {
    desktop: pltBanners
    mobile: pltBanners
}

export default function Banners({page, component}: BrProps<ContainerItem>) {

    if (!page) {
        return null
    }

    const content = component?.getContent<pltBannerComponent>(page);
    const desktop = content?.desktop

    const {banners} = desktop

    return (
        <div data-id="banner-b7">
            <div className="hidden lg:block">
                <div style={{overflow: "auto", marginBottom: 1}}
                     className="MediumCategories_categoriesContainer__GXRhG m-auto flex flex-wrap content-around lg:justify-center"
                     data-id="banner-b7-desktop">
                    {banners && banners.map((item: pltBanner) => {

                        const {image, link, buttonText} = item
                        const imageLink = page?.getContent<ImageSet>(image)?.getOriginal()?.getUrl()


                        return (<div className="MediumCategories_wrapper__V9eMG">
                            <a href={link} aria-label="shop now link">
                                <div className="undefined relative block m-0 p-0 cursor-pointer">
                                    <div
                                        className="absolute w-full h-full z-10 transition-all duration-200 opacity-100">
                                    <span>
                                        <img alt="" role="presentation"
                                             src={imageLink}/>
                                    </span>
                                    </div>
                                    <div className="opacity-100">
                                    <span>
                                        <img alt="SHOP NOW" role="presentation"
                                             src="https://cdn-media.prettylittlething.com/bms/media/2023/01/20/34ZqdEqh8AxnrRVAL5WIQEqSss4KwX0CJEk54M7l.png?imwidth=160"/>
                                    </span>
                                    </div>
                                    <button style={{left: '30px', right: '30px'}} type="button"
                                            className="cta MediumCategories_imageButton__U12mW ButtonStyles_common__SV_7U z-10 md:m-auto block absolute font-sans pointer-events-none pis-0 pie-0 cta--default pli-8 h-10"
                                            aria-label="shop now link">{buttonText}
                                    </button>
                                </div>
                            </a>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}