import {ContainerItem} from "@bloomreach/spa-sdk";
import {BrProps} from "@bloomreach/react-sdk";
import React, {useEffect, useState} from "react";
import {extractTrackingCookie, generateRequestId, getSearchResults, SearchResponseDoc} from "@/utils/api-client";

export interface DiscoChannel {
    graphql_baseurl: string
    discoveryAccountId?: string
    smAccountId?: string
    discoveryRealm: string
    graphqlTenantName: string
    externalLocale?: string
    dropdown: string
    spaUrl?: string
    discoveryDomainKey?: string
    discoveryViewId?: string
    currency: string
    engagementProjectToken: string
    engagementTargetURL: string
}

export function stringToNumber(str: string, fallback?: number): number | undefined {
    const num = parseInt(str, 10);
    return isNaN(num) ? fallback : num;
}

export default function Products({page, component}: BrProps<ContainerItem>) {

    if (!page || !component) {
        return null
    }

    const content = component?.getContent<any>(page);
    const properties = component.getProperties<any>()
    const channel = page.getChannelParameters<DiscoChannel>();

    const [products, setProducts] = useState<[SearchResponseDoc]>([])
    const [errorMessage, setErrorMessage] = useState<string | undefined>()
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getSearchResults({
            endpoint: channel.discoveryRealm === 'STAGING' ? 'https://staging-core.dxpapi.com/api/v1/core/' : 'https://core.dxpapi.com/api/v1/core/',
            _br_uid_2: extractTrackingCookie(),
            account_id: stringToNumber(channel?.discoveryAccountId ?? '', 0),
            domain_key: channel.discoveryDomainKey ?? '',
            q: getQueryFromComponentModel(content),
            request_id: generateRequestId(),
            request_type: 'search',
            search_type: getRequestTypeFromComponentModel(content),
            start: Number(content?.offset),
            rows: Number(content?.limit),
            view_id: channel.discoveryViewId,
            sort: content?.sortFields,
            url: window.location.href,
            fq: getFQFromComponentModel(content)
        }).then(result => {
            setProducts(sortProductsFromComponentModel(content, result?.response?.docs ?? []))
            setLoading(false)
        }).catch(reason => setErrorMessage(reason.toString()))

    }, [channel, content])

    if (errorMessage) {
        return (
            <div className="container position-relative">
                <div className="alert alert-danger position-relative">
                    error with the search: {errorMessage}
                </div>
            </div>
        )
    }

    return (
        <div>
            {content.title && <div
                className="PLPCategory_categorydescription__WsZm_ block text-center px-4 lg:px-12 lg:pt-6 lg:pb-8 lg:bg-pink-100">
                <div
                    className="hidden lg:block [&amp;>h1]:font-brand-medium [&amp;>p]:font-brand-thin [&amp;>div>div>a]:font-brand-thin"
                    data-testid="PLP_CAT_DESC_DESKTOP"><h1 style={{textAlign: 'center'}}>{content.title}</h1></div>
            </div>}
            <div className="flex w-full mb-8">
                <style dangerouslySetInnerHTML={{
                    __html: '.plt-br-demo{' +
                        'padding: 16px 0 13px 16px !important;' +
                        '}'
                }}/>
                <div className="w-full">
                    <div id="products-list">
                        <div id="products-list1"
                             className="flex flex-wrap"
                             data-testid="PRODUCT_LIST">
                            {products.map(product => {

                                return (<a id={product.pid}
                                           className={`flex flex-col hover:no-underline plt-br-demo w-1/${properties.lg}`}
                                           href={product.url}>
                                    <div className="relative block bg-gray-200 w-full">
                                        <div className="w-full relative">
                                                    <span>
                                                        <img
                                                            alt={product.title}
                                                            src={product.thumb_image}
                                                        />
                                                    </span>
                                        </div>
                                    </div>
                                    <div className="PLPProduct_info--desktop__BPn7u">
                                        <div
                                            className="flex justify-between float-end PLPProduct_swatchLarge__fNsny"></div>
                                        <div className="flex mt-4 flex-col-reverse">
                                            <div
                                                className="leading-none text-center PLPProduct_pricing--desktop__GZ0oi"><span
                                                className="inline-block tracking-wide ItemPrice_spacing__Gt_BA ItemPrice_text--md__ISVk7">${product.sale_price}</span>
                                            </div>
                                            <h3 className="text-gray-700 lg:text-gray-950 leading-normal tracking-wide font-normal text-center normal-case font-brand-thin PLPProduct_title--desktop__9CX6X">
                                                {product.title}</h3></div>
                                    </div>
                                </a>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function sortProductsFromComponentModel(content: any | null | undefined, products: [SearchResponseDoc]): [SearchResponseDoc] {
    if (content?.search.length > 0) {
        switch (content?.search[0].contentType) {
            case 'brxsaas:bruialphaByProducts':
                const order = content?.search[0].products?.map((product: any) => {
                    const [, id,] = product.productid.match(/id=([\w\d._=-]+[\w\d=]?)?;code=([\w\d._=/-]+[\w\d=]?)?/i) ?? [];
                    return id
                })
                return products.sort((a, b) => order.indexOf(a.pid) - order.indexOf(b.pid))
            default:
                return products
        }
    }
    return products

}

export function getFQFromComponentModel(content: any | null | undefined) {
    if (content?.search.length > 0) {
        switch (content?.search[0].contentType) {
            case 'brxsaas:bruialphaByProducts':
                const fq = `pid:${content?.search[0].products?.map((product: any) => {
                    const [, id,] = product.productid.match(/id=([\w\d._=-]+[\w\d=]?)?;code=([\w\d._=/-]+[\w\d=]?)?/i) ?? [];
                    return `"${id}"`
                }).join(" OR ")}`
                return fq
            default:
                return ''
        }
    }
    return ''

}

export function getQueryFromComponentModel(content: any | null | undefined) {
    if (content?.search.length > 0) {
        switch (content?.search[0].contentType) {
            case 'brxsaas:bruialphaByKeyword':
                return content?.search[0].query
            case 'brxsaas:bruialphaByProducts':
                return ""
            case 'brxsaas:bruialphaByCategory' :
                let catid = content?.search[0]?.category.categoryid;
                try {
                    catid = JSON.parse(content?.search[0]?.category?.categoryid)?.categoryid;
                } catch (e) {
                }
                console.log('cat', catid)
                return catid
            default:
                return ''
        }
    }
    return ''

}


export function getRequestTypeFromComponentModel(content: any | null | undefined) {
    if (content?.search.length > 0) {
        console.info(content?.search[0].contentType)
        switch (content?.search[0].contentType) {
            case 'brxsaas:bruialphaByKeyword':
            case 'brxsaas:bruialphaByProducts':
                return 'keyword'
            case 'brxsaas:bruialphaByCategory' :
                return 'category'
            default:
                return 'keyword'
        }
    }
    return 'keyword'
}
