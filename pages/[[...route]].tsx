/*
 * Copyright 2019-2022 Bloomreach
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import axios from 'axios';
import {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import {relevance} from '@bloomreach/spa-sdk/lib/express';
import {buildConfiguration} from '../utils/buildConfiguration';
import PinkBanner from "../components/PinkBanner";
import CallToAction from "../components/CallToAction";
import Splash from "../components/Splash";
import Banners from "../components/Banners";
import Footer from "../partial/Footer";
import Head from "next/head";
import Header from "../partial/header";
import Bottom from "../partial/Bottom";
import {BrContent} from "@/partial/BrContent";
import FallBack from "@/partial/FallBack";

export const getServerSideProps: GetServerSideProps = async ({req: request, res: response, resolvedUrl: path}) => {
    relevance(request, response);

    const configuration = buildConfiguration(path ?? '/');

    return {props: {configuration}};
};

const mapping = {PinkBanner, "AboveBelowSplash": CallToAction, "Caroursel": Splash, Banners}




export default function Index({
                                  configuration
                              }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {

    // const [page, setPage] = useState<Page>();
    //
    // useEffect(() => {
    //     initialize({...configuration, httpClient: axios}).then(page => setPage(page));
    // }, [])

    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=5"/>
                <title>Women&#x27;s Fashion Clothing &amp; Dresses | PrettyLittleThing USA</title>
                <meta name="description"
                      content="Shop the latest women&#x27;s fashion at PrettyLittleThing USA. Hit refresh on your wardrobe &amp; discover thousands of this season&#x27;s must-have looks at PLT USA."/>
            </Head>
            <div className="page flex flex-col flex-wrap justify-between text-gray-900">
                <Header/>
                <div className="mx-auto w-full">
                    <div className=" ">
                        <div className="lg:hidden" id="mobile-search-container" data-testid="SEARCH_HOMEPAGE_CONTAINER">
                            <div className="p-2 bg-gray-450">
                                <form className="flex items-center bg-white p-2"
                                      data-testid="mobile-homepage-search-form" id="mobile-homepage-search-form"><label
                                    className="hidden" id="mobile-homepage-search-form-label"
                                    htmlFor="mobile-homepage-search-form-input"
                                    role="search-label">Search...</label><input
                                    className="placeholder-gray-800 w-full flex-grow border-box rounded-none focus:outline-none leading-5 text-gray-950 tracking-wide font-thin font-normal text-base lg:text-sm leading-4"
                                    data-testid="SEARCH_INPUT" id="mobile-homepage-search-form-input" role="search"
                                    aria-label="sitewide" name="search" placeholder="Search..." autoComplete="off"
                                    defaultValue/>
                                    <div id="search-buttons" className="flex items-center">
                                        <button type="submit" data-testid="SEARCH_INPUT_BUTTON" aria-label="search"
                                                className="h-full flex items-center"><span
                                            className="icon icon-search inline-block h-4 w-4 bg-contain bg-no-repeat"
                                            data-testid="SEARCH_INPUT_ICON" aria-hidden="true"/></button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {Banner1()}

                        <BrContent configuration={{...configuration, httpClient: axios}}
                                   mapping={mapping} container={'banner4'} fallBack={<FallBack/>}/>
                        

                        {Banner3()}

                        <BrContent configuration={{...configuration, httpClient: axios}}
                                   mapping={mapping} container={'bottom'}
                                   fallBack={<h2>BMS as fallback | BMS as fallback | BMS as fallback</h2>}/>

                        <Bottom/>
                    </div>
                </div>
                <Footer/>
            </div>
        </>);
}

function Banner1() {
    return <div id="banner-b3">
        <div className="hidden lg:block">
            <div id="banner-b3-desktop">
                <div id="homepage-pink-banner" className="pink-banner">
                    <div className="link-block"><a href="/view-all.html"
                                                   className="hover:no-underline link-overlay"/>
                        <div className="link-inner">
                            <div
                                className="banner banner--pink-brand align--center flex-col uppercase tracking-wider z-0 text-sm md:text-base leading-normal">
                                <p className="w-full font-brand-medium font-normal line-1">SAVE
                                    RIGHT THIS SPRING BREAK</p><p
                                className="w-full font-brand-medium font-normal line-2">ALL LINES
                                NOW 40-60% OFF!*</p><p
                                className="w-full font-brand-medium font-normal line-3">+ $1.99
                                SHIPPING ON ALL ORDERS</p><p
                                className="w-full font-brand-medium font-normal line-4"><a
                                className="underline normal-case mx-2"
                                href="https://www.prettylittlething.us/terms#pricing-policy-anchor">DISCOUNTS
                                MAY NOT BE BASED ON FORMER PRICES - SEE PRICING POLICY</a></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="block lg:hidden">
            <div id="banner-b3-mobile">
                <div id="homepage-pink-banner" className="pink-banner">
                    <div className="link-block"><a href="/view-all.html"
                                                   className="hover:no-underline link-overlay"/>
                        <div className="link-inner">
                            <div
                                className="banner banner--pink-brand align--center flex-col uppercase tracking-wider z-0 text-sm md:text-base leading-normal">
                                <p className="w-full font-brand-medium font-normal line-1">SAVE
                                    RIGHT THIS SPRING BREAK</p><p
                                className="w-full font-brand-medium font-normal line-2">ALL LINES
                                NOW 40-60% OFF!*</p><p
                                className="w-full font-brand-medium font-normal line-3">+ $1.99
                                SHIPPING ON ALL ORDERS</p><p
                                className="w-full font-brand-medium font-normal line-4"><a
                                className="underline normal-case mx-2"
                                href="https://www.prettylittlething.us/terms#pricing-policy-anchor">DISCOUNTS
                                MAY NOT BE BASED ON FORMER PRICES - SEE PRICING POLICY</a></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

function Banner3() {
    return <div id="banner-b5">
        <div className="hidden lg:block">
            <div
                className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                id="banner-b5-desktop">
                <div className="swiper-wrapper" style={{
                    transform: 'translate3d(-4262px, 0px, 0px)',
                    transitionDuration: '0ms'
                }}>
                    <div
                        className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                        data-swiper-slide-index={1} style={{width: '2131px'}}><a
                        id="banner-b5-desktop" href="/view-all.html">
                        <div id="banner-b5-slide-0" className="relative">
                            <div
                                className="absolute w-full h-full z-10 transition-all duration-200 opacity-100">
                                                    <span style={{
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
                                                    }}/><img alt="" aria-label="SHOP NOW link" role="presentation"
                                                             src="https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=2048"
                                                             decoding="async" data-nimg="responsive" style={{
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
                                                             sizes="(min-width: 1200px) 2048px, (min-width: 990px) 1024px, (min-width: 740px) 640px, (min-width: 460px) 320px, (min-width: 0px) 160px, (min-width: 0px) 0px"
                                                             srcSet="https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=160 160w, https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=300 300w, https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=400 400w, https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=600 600w, https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=800 800w, https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=1024 1024w, https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=1200 1200w, https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=1600 1600w, https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=2048 2048w"/></span>
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
                                     src="https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=160"
                                     decoding="async" data-nimg="responsive" style={{
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
                            }}/></span></div>
                            <button type="button"
                                    className="cta ButtonStyles_common__SV_7U ButtonStyles_centered__HBl44 ButtonStyles_splash__OaDNC z-10 absolute bottom-4 md:bottom-6 pointer-events-none cta--default pli-8 h-10"
                                    aria-label="SHOP NOW link">SHOP NOW
                            </button>
                            <span
                                className="z-10 absolute bottom-2 inline-end-2 text-xs leading-normal SplashBanners_desktopExclusionBottom__LdjcB"
                                style={{color: '#000000'}}>*EXCL BEAUTY &amp; NEW IN THIS WEEK</span>
                        </div>
                    </a></div>
                    <div className="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
                         data-swiper-slide-index={0} style={{width: '2131px'}}><a
                        id="banner-b5-desktop" href="/shop-by/festival-shop.html">
                        <div id="banner-b5-slide-1" className="relative">
                            <div
                                className="absolute w-full h-full z-10 transition-all duration-200 opacity-100">
                                                    <span style={{
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
                                                    }}/><img alt="" aria-label="SHOP NOW link" role="presentation"
                                                             src="https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=2048"
                                                             decoding="async" data-nimg="responsive" style={{
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
                                                             sizes="(min-width: 1200px) 2048px, (min-width: 990px) 1024px, (min-width: 740px) 640px, (min-width: 460px) 320px, (min-width: 0px) 160px, (min-width: 0px) 0px"
                                                             srcSet="https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=160 160w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=300 300w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=400 400w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=600 600w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=800 800w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=1024 1024w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=1200 1200w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=1600 1600w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=2048 2048w"/></span>
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
                                     src="https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=160"
                                     decoding="async" data-nimg="responsive" style={{
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
                            }}/></span></div>
                            <button type="button"
                                    className="cta ButtonStyles_common__SV_7U ButtonStyles_centered__HBl44 ButtonStyles_splash__OaDNC z-10 absolute bottom-4 md:bottom-6 pointer-events-none cta--default pli-8 h-10"
                                    aria-label="SHOP NOW link">SHOP NOW
                            </button>
                        </div>
                    </a></div>
                    <div className="swiper-slide swiper-slide-active" data-swiper-slide-index={1}
                         style={{width: '2131px'}}><a id="banner-b5-desktop" href="/view-all.html">
                        <div id="banner-b5-slide-0" className="relative">
                            <div
                                className="absolute w-full h-full z-10 transition-all duration-200 opacity-100">
                                                    <span style={{
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
                                                    }}/><img alt="" aria-label="SHOP NOW link" role="presentation"
                                                             src="https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=2048"
                                                             decoding="async" data-nimg="responsive" style={{
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
                                                             sizes="(min-width: 1200px) 2048px, (min-width: 990px) 1024px, (min-width: 740px) 640px, (min-width: 460px) 320px, (min-width: 0px) 160px, (min-width: 0px) 0px"
                                                             srcSet="https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=160 160w, https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=300 300w, https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=400 400w, https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=600 600w, https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=800 800w, https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=1024 1024w, https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=1200 1200w, https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=1600 1600w, https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=2048 2048w"/></span>
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
                                     src="https://cdn-media.prettylittlething.com/bms/media/2023/04/17/pUGxZHBXWi8mJVj04Ym3a0klSnwWnED9Tnjyemua.jpg?imwidth=160"
                                     decoding="async" data-nimg="responsive" style={{
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
                            }}/></span></div>
                            <button type="button"
                                    className="cta ButtonStyles_common__SV_7U ButtonStyles_centered__HBl44 ButtonStyles_splash__OaDNC z-10 absolute bottom-4 md:bottom-6 pointer-events-none cta--default pli-8 h-10"
                                    aria-label="SHOP NOW link">SHOP NOW
                            </button>
                            <span
                                className="z-10 absolute bottom-2 inline-end-2 text-xs leading-normal SplashBanners_desktopExclusionBottom__LdjcB"
                                style={{color: '#000000'}}>*EXCL BEAUTY &amp; NEW IN THIS WEEK</span>
                        </div>
                    </a></div>
                    <div
                        className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
                        data-swiper-slide-index={0} style={{width: '2131px'}}><a
                        id="banner-b5-desktop" href="/shop-by/festival-shop.html">
                        <div id="banner-b5-slide-1" className="relative">
                            <div
                                className="absolute w-full h-full z-10 transition-all duration-200 opacity-100">
                                                    <span style={{
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
                                                    }}/><img alt="" aria-label="SHOP NOW link" role="presentation"
                                                             src="https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=2048"
                                                             decoding="async" data-nimg="responsive" style={{
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
                                                             sizes="(min-width: 1200px) 2048px, (min-width: 990px) 1024px, (min-width: 740px) 640px, (min-width: 460px) 320px, (min-width: 0px) 160px, (min-width: 0px) 0px"
                                                             srcSet="https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=160 160w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=300 300w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=400 400w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=600 600w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=800 800w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=1024 1024w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=1200 1200w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=1600 1600w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=2048 2048w"/></span>
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
                                     src="https://cdn-media.prettylittlething.com/bms/media/2023/04/11/3ory1Vo26RXj8HEDMSbW1LQxFwEy0mKISDwSgUkK.jpg?imwidth=160"
                                     decoding="async" data-nimg="responsive" style={{
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
                            }}/></span></div>
                            <button type="button"
                                    className="cta ButtonStyles_common__SV_7U ButtonStyles_centered__HBl44 ButtonStyles_splash__OaDNC z-10 absolute bottom-4 md:bottom-6 pointer-events-none cta--default pli-8 h-10"
                                    aria-label="SHOP NOW link">SHOP NOW
                            </button>
                        </div>
                    </a></div>
                </div>
            </div>
        </div>
        <div className="block lg:hidden">
            <div
                className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                id="banner-b5-mobile">
                <div className="swiper-wrapper" style={{transitionDuration: '500ms'}}>
                    <div
                        className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                        data-swiper-slide-index={1}><a id="banner-b5-mobile" href="/view-all.html">
                        <div id="banner-b5-slide-0" className="relative">
                            <div
                                className="absolute w-full h-full z-10 transition-all duration-200 hidden">
                                                    <span style={{
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
                                                        paddingTop: '100%'
                                                    }}/><img alt="" aria-label="SHOP NOW link" role="presentation"
                                                             src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                             decoding="async" data-nimg="responsive" style={{
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
                                                    }}/><noscript>&lt;img alt="" aria-label="SHOP NOW link" role="presentation" sizes="100vw" srcSet="https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=160 160w, https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=300 300w, https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=400 400w, https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=600 600w, https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=800 800w, https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=1024 1024w, https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=1200 1200w, https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=1600 1600w, https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=2048 2048w" src="https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=2048" decoding="async" data-nimg="responsive" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/&gt;</noscript></span>
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
                                paddingTop: '100%'
                            }}/><img alt="SHOP NOW" role="presentation"
                                     src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                     decoding="async" data-nimg="responsive" style={{
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
                            }}/><noscript>&lt;img alt="SHOP NOW" role="presentation" src="https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=160" decoding="async" data-nimg="responsive" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/&gt;</noscript></span>
                            </div>
                            <button type="button"
                                    className="cta ButtonStyles_common__SV_7U ButtonStyles_centered__HBl44 ButtonStyles_splash__OaDNC z-10 absolute bottom-4 md:bottom-6 pointer-events-none cta--default pli-8 h-10"
                                    aria-label="SHOP NOW link">SHOP NOW
                            </button>
                            <span
                                className="z-10 absolute bottom-2 inline-end-2 SplashBanners_mobileExclusionText__039pv SplashBanners_mobileExclusionBottom__YlZPB"
                                style={{color: '#000000'}}>*EXCL BEAUTY &amp; NEW IN THIS WEEK</span>
                        </div>
                    </a></div>
                    <div className="swiper-slide" data-swiper-slide-index={0}><a
                        id="banner-b5-mobile" href="/shop-by/festival-shop.html">
                        <div id="banner-b5-slide-1" className="relative">
                            <div
                                className="absolute w-full h-full z-10 transition-all duration-200 hidden">
                                                    <span style={{
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
                                                        paddingTop: '100%'
                                                    }}/><img alt="" aria-label="SHOP NOW link" role="presentation"
                                                             src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                             decoding="async" data-nimg="responsive" style={{
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
                                                    }}/><noscript>&lt;img alt="" aria-label="SHOP NOW link" role="presentation" sizes="100vw" srcSet="https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=160 160w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=300 300w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=400 400w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=600 600w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=800 800w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=1024 1024w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=1200 1200w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=1600 1600w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=2048 2048w" src="https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=2048" decoding="async" data-nimg="responsive" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/&gt;</noscript></span>
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
                                paddingTop: '100%'
                            }}/><img alt="SHOP NOW" role="presentation"
                                     src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                     decoding="async" data-nimg="responsive" style={{
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
                            }}/><noscript>&lt;img alt="SHOP NOW" role="presentation" src="https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=160" decoding="async" data-nimg="responsive" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/&gt;</noscript></span>
                            </div>
                            <button type="button"
                                    className="cta ButtonStyles_common__SV_7U ButtonStyles_centered__HBl44 ButtonStyles_splash__OaDNC z-10 absolute bottom-4 md:bottom-6 pointer-events-none cta--default pli-8 h-10"
                                    aria-label="SHOP NOW link">SHOP NOW
                            </button>
                        </div>
                    </a></div>
                    <div className="swiper-slide" data-swiper-slide-index={1}><a
                        id="banner-b5-mobile" href="/view-all.html">
                        <div id="banner-b5-slide-0" className="relative">
                            <div
                                className="absolute w-full h-full z-10 transition-all duration-200 hidden">
                                                    <span style={{
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
                                                        paddingTop: '100%'
                                                    }}/><img alt="" aria-label="SHOP NOW link" role="presentation"
                                                             src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                             decoding="async" data-nimg="responsive" style={{
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
                                                    }}/><noscript>&lt;img alt="" aria-label="SHOP NOW link" role="presentation" sizes="100vw" srcSet="https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=160 160w, https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=300 300w, https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=400 400w, https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=600 600w, https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=800 800w, https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=1024 1024w, https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=1200 1200w, https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=1600 1600w, https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=2048 2048w" src="https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=2048" decoding="async" data-nimg="responsive" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/&gt;</noscript></span>
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
                                paddingTop: '100%'
                            }}/><img alt="SHOP NOW" role="presentation"
                                     src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                     decoding="async" data-nimg="responsive" style={{
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
                            }}/><noscript>&lt;img alt="SHOP NOW" role="presentation" src="https://cdn-media.prettylittlething.com/bms/media/2023/04/12/9hm0pjdSFVcdXPkafhUS47CdcUj444OYSwifzcgz.jpg?imwidth=160" decoding="async" data-nimg="responsive" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/&gt;</noscript></span>
                            </div>
                            <button type="button"
                                    className="cta ButtonStyles_common__SV_7U ButtonStyles_centered__HBl44 ButtonStyles_splash__OaDNC z-10 absolute bottom-4 md:bottom-6 pointer-events-none cta--default pli-8 h-10"
                                    aria-label="SHOP NOW link">SHOP NOW
                            </button>
                            <span
                                className="z-10 absolute bottom-2 inline-end-2 SplashBanners_mobileExclusionText__039pv SplashBanners_mobileExclusionBottom__YlZPB"
                                style={{color: '#000000'}}>*EXCL BEAUTY &amp; NEW IN THIS WEEK</span>
                        </div>
                    </a></div>
                    <div
                        className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                        data-swiper-slide-index={0}><a id="banner-b5-mobile"
                                                       href="/shop-by/festival-shop.html">
                        <div id="banner-b5-slide-1" className="relative">
                            <div
                                className="absolute w-full h-full z-10 transition-all duration-200 hidden">
                                                    <span style={{
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
                                                        paddingTop: '100%'
                                                    }}/><img alt="" aria-label="SHOP NOW link" role="presentation"
                                                             src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                             decoding="async" data-nimg="responsive" style={{
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
                                                    }}/><noscript>&lt;img alt="" aria-label="SHOP NOW link" role="presentation" sizes="100vw" srcSet="https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=160 160w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=300 300w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=400 400w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=600 600w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=800 800w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=1024 1024w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=1200 1200w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=1600 1600w, https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=2048 2048w" src="https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=2048" decoding="async" data-nimg="responsive" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/&gt;</noscript></span>
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
                                paddingTop: '100%'
                            }}/><img alt="SHOP NOW" role="presentation"
                                     src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                     decoding="async" data-nimg="responsive" style={{
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
                            }}/><noscript>&lt;img alt="SHOP NOW" role="presentation" src="https://cdn-media.prettylittlething.com/bms/media/2023/04/11/zikMj1xp6yHANQ3T9zOGjxbGfcMPbfwhEVGSkAO2.jpg?imwidth=160" decoding="async" data-nimg="responsive" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/&gt;</noscript></span>
                            </div>
                            <button type="button"
                                    className="cta ButtonStyles_common__SV_7U ButtonStyles_centered__HBl44 ButtonStyles_splash__OaDNC z-10 absolute bottom-4 md:bottom-6 pointer-events-none cta--default pli-8 h-10"
                                    aria-label="SHOP NOW link">SHOP NOW
                            </button>
                        </div>
                    </a></div>
                </div>
            </div>
        </div>
    </div>;
}
