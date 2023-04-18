import {BrProps} from "@bloomreach/react-sdk";
import {ContainerItem, ImageSet, Reference} from "@bloomreach/spa-sdk";
import {pltPinkBannerComponent} from "@/components/PinkBanner";
import React from "react";
import {BrFallBackContext} from "@/partial/BrContent";
import {useComponentFallBack} from "@/partial/useComponentFallBack";

export interface pltAboveBelowSplash {
    items: pltAboveBelowSplashItem[]
}

export interface pltAboveBelowSplashItem {
    icon?: Reference
    link: string
    label: string
}

export interface pltAboveBelowSplashComponent {
    desktop: pltAboveBelowSplash
    mobile: pltAboveBelowSplash
}

export default function CallToAction({page, component}: BrProps<ContainerItem>) {
    if (!page || !component) {
        return null
    }
    const [useFallBack, fallBackComponent] = useComponentFallBack(component);

    if (useFallBack) {
        return fallBackComponent
    }

    const content = component?.getContent<pltAboveBelowSplashComponent>(page);

    const desktop = content?.desktop

    const {items} = desktop

    return (
        <div data-id={`banner-${component?.getName()}`}>
            <div className="above-below-splash w-full text-sm">
                <div className="grid" data-id={`banner-${component?.getName()}-desktop`}
                     style={{gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'}}>
                    {items && items.map((item: pltAboveBelowSplashItem, index) => {

                        const {label, icon, link} = item

                        const imageUrl = icon && page?.getContent<ImageSet>(icon)?.getOriginal()?.getUrl()

                        return (
                            <a key={index}
                               className="bg-gray-400 uppercase font-sans p-2 text-center no-underline items-center justify-center"
                               href={link}>
                                <div
                                    className={"relative align--center flex items-center above-below-image"}>
                                    {imageUrl && <span>
                                                <img height={30} width={30} alt="promotional carousel slide"
                                                     src={imageUrl}/>
                                            </span>}
                                    <span className="text-sm text-label"><strong>{label}</strong></span>
                                </div>
                            </a>)

                    })}
                </div>
            </div>
        </div>
    )

}