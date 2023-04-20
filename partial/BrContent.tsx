import {BrComponent, BrPage, BrProps} from "@bloomreach/react-sdk";
import React, {useEffect, useState} from "react";
import {Configuration, initialize, Page, TYPE_CONTAINER_BOX, TYPE_CONTAINER_NO_MARKUP} from "@bloomreach/spa-sdk";

interface Props {
    fallBack: JSX.Element
    path?: string
    mapping: Record<string, any>;
    configuration: Configuration
    container?: string
    page?: Page
}

export const BrFallBackContext = React.createContext<{ fallBack?: JSX.Element }>({});

export function BrContent({mapping, configuration, fallBack, page, container}: Props): JSX.Element | null {

    const [pageModel, setPageModel] = useState(page);

    useEffect(() => {
        if (!pageModel) {
            initialize(configuration).then(value => {
                setPageModel(value)
            });
        }
    }, [])

    return (<>
        {pageModel ?
            <BrPage configuration={configuration} mapping={{
                ...mapping,
                [TYPE_CONTAINER_NO_MARKUP]: LayoutNoMarkupContainer,
                [TYPE_CONTAINER_BOX]: DefaultLayoutContainer
            }}
                    page={pageModel}>
                <BrFallBackContext.Provider value={{fallBack: fallBack}}>
                    <BrComponent path={container ?? ''}/>
                </BrFallBackContext.Provider>
            </BrPage> : fallBack}
    </>);
}

export function DefaultLayoutContainer({children, page, component}: React.PropsWithChildren<BrProps>): JSX.Element {
    const {fallBack} = React.useContext(BrFallBackContext);
    const empty = component?.getChildren().length === 0;
    return <div className={page?.isPreview() ? 'hst-container' : undefined}>
        {empty ? fallBack : React.Children.map(children, (child) => {
            return (
                <div className={page?.isPreview() ? 'hst-container-item' : undefined}>{child}</div>
            )
        })}
    </div>
}

export function LayoutNoMarkupContainer({children, page, component}: React.PropsWithChildren<BrProps>): JSX.Element {
    const {fallBack} = React.useContext(BrFallBackContext);
    const empty = component?.getChildren().length === 0;
    return <>
        {empty ? fallBack : React.Children.map(children, (child) => {
            return (
                <>{child}</>
            )
        })}
    </>
}