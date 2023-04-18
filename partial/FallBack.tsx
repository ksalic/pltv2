export default function FallBack() {
    return (<div id="banner-b4">
        <div className="hidden lg:block">
            <div className="above-below-splash w-full text-sm">
                <div className="grid" id="banner-b4-desktop" style={{gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'}}>
                    <a className="bg-gray-400 uppercase font-brand-medium p-2 text-center no-underline items-center justify-center"
                       href="https://apps.apple.com/app/id1138840268?mt=8">
                        <div className="relative align--center flex items-center above-below-image"><span
                            className="text-sm leading-normal text-label">EXTRA 10% OFF THE APP FOR ALL NEW CUSTOMERS</span>
                        </div>
                    </a><a
                    className="bg-gray-400 uppercase font-brand-medium p-2 text-center no-underline items-center justify-center"
                    href="/shop-by/cargos-nice-top.html">
                    <div className="relative align--center flex items-center above-below-image"><span
                        className="text-sm leading-normal text-label">CARGOS &amp; A NICE TOP ALWAYS – FROM $10</span>
                    </div>
                </a><a
                    className="bg-gray-400 uppercase font-brand-medium p-2 text-center no-underline items-center justify-center"
                    href="/view-all.html">
                    <div className="relative align--center flex items-center above-below-image"><span
                        className="text-sm leading-normal text-label">$1.99 SHIPPING ON ALL ORDERS</span></div>
                </a></div>
            </div>
        </div>
        <div className="block lg:hidden">
            <div className="above-below-splash w-full text-sm">
                <div
                    className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-autoheight"
                    id="banner-b4-mobile">
                    <div className="swiper-wrapper" style={{transitionDuration: '500ms'}}>
                        <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={2}><a
                            className="bg-gray-400 uppercase font-brand-medium p-2 text-center no-underline items-center justify-center w-full"
                            aria-label="promotional banner" href="/view-all.html">
                            <div className="relative align--center flex items-center" id="banner-b4-mobile-slide-2">
                                <span className="text-sm leading-normal">$1.99 SHIPPING ON ALL ORDERS</span></div>
                        </a></div>
                        <div className="swiper-slide" data-swiper-slide-index={0}><a
                            className="bg-gray-400 uppercase font-brand-medium p-2 text-center no-underline items-center justify-center w-full"
                            aria-label="promotional banner" href="https://apps.apple.com/app/id1138840268?mt=8">
                            <div className="relative align--center flex items-center" id="banner-b4-mobile-slide-0">
                                <span
                                    className="text-sm leading-normal">EXTRA 10% OFF THE APP FOR ALL NEW CUSTOMERS</span>
                            </div>
                        </a></div>
                        <div className="swiper-slide" data-swiper-slide-index={1}><a
                            className="bg-gray-400 uppercase font-brand-medium p-2 text-center no-underline items-center justify-center w-full"
                            aria-label="promotional banner" href="/shop-by/cargos-nice-top.html">
                            <div className="relative align--center flex items-center" id="banner-b4-mobile-slide-1">
                                <span
                                    className="text-sm leading-normal">CARGOS &amp; A NICE TOP ALWAYS – FROM $10</span>
                            </div>
                        </a></div>
                        <div className="swiper-slide" data-swiper-slide-index={2}><a
                            className="bg-gray-400 uppercase font-brand-medium p-2 text-center no-underline items-center justify-center w-full"
                            aria-label="promotional banner" href="/view-all.html">
                            <div className="relative align--center flex items-center" id="banner-b4-mobile-slide-2">
                                <span className="text-sm leading-normal">$1.99 SHIPPING ON ALL ORDERS</span></div>
                        </a></div>
                        <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={0}><a
                            className="bg-gray-400 uppercase font-brand-medium p-2 text-center no-underline items-center justify-center w-full"
                            aria-label="promotional banner" href="https://apps.apple.com/app/id1138840268?mt=8">
                            <div className="relative align--center flex items-center" id="banner-b4-mobile-slide-0">
                                <span
                                    className="text-sm leading-normal">EXTRA 10% OFF THE APP FOR ALL NEW CUSTOMERS</span>
                            </div>
                        </a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}