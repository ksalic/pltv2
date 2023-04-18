// import {BrComponent, BrPage, BrProps} from "@bloomreach/react-sdk";
// import React, {useEffect, useState} from "react";
// import {Configuration, ContainerItem, initialize, Page, PageModel} from "@bloomreach/spa-sdk";
//
// type BuildConfigurationOptions = {
//     endpoint: string | (string | null)[];
//     baseUrl: string;
// };
//
// type ConfigurationBuilder = Omit<Configuration & Partial<BuildConfigurationOptions>, 'httpClient'>;
//
// export function buildConfiguration(
//     path: string,
//     environment: string,
//     channel: string,
// ): ConfigurationBuilder {
//     const configuration: ConfigurationBuilder = {
//         path,
//     };
//     if (environment && channel) {
//         configuration.endpoint = `https://${environment}.bloomreach.io/delivery/site/v1/channels/${channel}/pages`;
//     }
//     return configuration;
// }
//
// declare type HttpClient<T> = (config: HttpClientConfig) => Promise<HttpResponse<T>>;
//
// declare type HttpHeaders = Record<string, string | number | boolean>;
//
// interface HttpResponse<T> {
//
//     data: T;
// }
//
// declare type HttpClientConfig = {
//     /**
//      * HTTP request method.
//      */
//     method: 'GET' | 'POST';
//     /**
//      * The URL to send the HTTP request to.
//      */
//     url: string;
//     /**
//      * Optional: the headers to send with the HTTP request.
//      */
//     headers?: HttpHeaders;
//     /**
//      * Optional: the data to send with the HTTP request.
//      * Will only be provided when the 'method' is 'post'.
//      */
//     data?: any;
// };
//
// interface Props {
//     fallBack: JSX.Element
//     environment: string
//     channel: string
//     path?: string
//     mapping: React.Context<Record<string | number | symbol, BrComponent>>;
//     layoutId?: string
//     httpClient: HttpClient<PageModel>
// }
//
// export function BrElement({
//                               mapping,
//                               environment,
//                               channel,
//                               layoutId,
//                               path,
//                               fallBack,
//                               httpClient
//                           }: Props): JSX.Element | null {
//
//     const [page, setPage] = useState<Page | undefined>();
//
//     const configuration = buildConfiguration(path ?? '/', environment, channel);
//
//     useEffect(() => {
//         if (!page) {
//             initialize({...configuration, httpClient}).then(value => {
//                 setPage(value)
//             });
//         }
//     }, [])
//
//
//     return (<>
//         {page ? <BrPage configuration={{...configuration, httpClient}} mapping={mapping} page={page}>
//             <BrComponent path={layoutId ?? ''}/>
//         </BrPage> : fallBack}
//     </>);
// }
//
// export interface BrFallBackProps extends React.PropsWithChildren<BrProps<ContainerItem>> {
//     fallBack: JSX.Element
// }
//
// export function BrFallBack({
//                                children,
//                                page,
//                                component,
//                                fallBack
//                            }: BrFallBackProps): JSX.Element | null {
//
//
//     return <>{children}</>
// }