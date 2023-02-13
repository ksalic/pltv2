import {BrProps} from "@bloomreach/react-sdk";
import {ContainerItem} from "@bloomreach/spa-sdk";

export interface pltPinkBanner {
    line1: string
    line2: string
    line3: string
    line4: string
    line4link: string
}

export interface pltPinkBannerComponent {
    desktop: pltPinkBanner
    mobile: pltPinkBanner
}

export default function PinkBanner({page, component}: BrProps<ContainerItem>) {


    if (!page) {
        return null
    }

    const content = component?.getContent<pltPinkBannerComponent>(page);
    const desktop = content?.desktop

    const {line1, line2, line3, line4, line4link} = desktop

    return (<div id="banner-b3">
        <div className="hidden lg:block">
            <div id="banner-b3-desktop" className>
                <div id="homepage-pink-banner" className="pink-banner">
                    <div className="link-block"><a
                        href={line4link}
                        className="hover:no-underline link-overlay"/>
                        <div className="link-inner">
                            <div
                                className="banner banner--pink-brand align--center flex-col uppercase tracking-wider z-0 text-sm md:text-base">
                                <p className="w-full font-sans font-normal line-1">{line1}</p>
                                <p className="w-full font-sans font-normal line-2">{line2}</p>
                                <p className="w-full font-sans font-normal line-3">{line3}</p>
                                <p className="w-full font-sans font-normal line-4"><a
                                    className="underline normal-case mx-2"
                                    href={line4link}>{line4}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="block lg:hidden">
            <div id="banner-b3-mobile" className>
                <div id="homepage-pink-banner" className="pink-banner">
                    <div className="link-block"><a
                        href="https://www.prettylittlething.us/view-all.html"
                        className="hover:no-underline link-overlay"/>
                        <div className="link-inner">
                            <div
                                className="banner banner--pink-brand align--center flex-col uppercase tracking-wider z-0 text-sm md:text-base">
                                <p className="w-full font-sans font-normal line-1">END OF SEASON
                                    SALE</p>
                                <p className="w-full font-sans font-normal line-2">50% OFF
                                    EVERYTHING*</p>
                                <p className="w-full font-sans font-normal line-3">*EXCL
                                    BEAUTY &amp; NEW IN
                                    THIS WEEK</p>
                                <p className="w-full font-sans font-normal line-4"><a
                                    className="underline normal-case mx-2"
                                    href="https://www.prettylittlething.us/terms#pricing-policy-anchor">DISCOUNTS
                                    MAY NOT BE BASED ON FORMER PRICES - SEE PRICING POLICY</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}