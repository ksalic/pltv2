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

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import Link from 'next/link';
import {BrComponent, BrPage, BrPageContext} from '@bloomreach/react-sdk';
import {initialize, Page} from '@bloomreach/spa-sdk';
import {relevance} from '@bloomreach/spa-sdk/lib/express';
import {Banner, Content, Menu, NewsList, CookieConsent} from '../components';
import {buildConfiguration} from '../utils/buildConfiguration';
import PinkBanner from "../components/PinkBanner";
import CallToAction from "../components/CallToAction";
import Splash from "../components/Splash";
import Banners from "../components/Banners";
import Footer from "../partial/Footer";
import Head from "next/head";
import Header from "../partial/header";
import Bottom from "../partial/Bottom";

export const getServerSideProps: GetServerSideProps = async ({req: request, res: response, resolvedUrl: path}) => {
    relevance(request, response);

    const configuration = buildConfiguration(path ?? '/');

    return {props: {configuration}};
};

const mapping = {PinkBanner, "AboveBelowSplash": CallToAction, "Caroursel": Splash, Banners}


export default function Index({
                                  configuration
                              }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {

    const [page, setPage] = useState<Page>();

    useEffect(() => {
        initialize(configuration).then(page => setPage(page));
    }, [])

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

                        <BrPage configuration={{...configuration, httpClient: axios}} mapping={mapping} page={page}>
                            <BrComponent path="main"/>
                        </BrPage>

                        <Bottom/>
                    </div>
                </div>
                <Footer/>
            </div>
        </>);
}
