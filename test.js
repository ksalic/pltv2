

const value = `import {BrComponent, BrPage, BrProps} from "@bloomreach/react-sdk";
import React, {useContext, useEffect, useState} from "react";
import {
    Configuration,
    ContainerItem,
    initialize,
    Page,
    TYPE_CONTAINER_BOX,
    TYPE_CONTAINER_NO_MARKUP
} from "@bloomreach/spa-sdk";


export const BrFallBackContext = React.createContext<{ fallBack?: JSX.Element }>({});

export function BrContent({mapping, configuration, fallBack, page, id}: Props): JSX.Element | null {

    const [pageModel, setPageModel] = useState(page);

    useEffect(() => {
        if (!pageModel) {
            initialize(configuration).then(value => {
                setPageModel(value)
            });
        }
    }, [])

    console.log(pageModel)


    return (<>
        {pageModel ?
            <BrPage configuration={configuration} mapping={{
                ...mapping,
                [TYPE_CONTAINER_NO_MARKUP]: LayoutContainer,
                [TYPE_CONTAINER_BOX]: LayoutContainer
            }}
                    page={pageModel}>
                <BrFallBackContext.Provider value={{fallBack: fallBack}}>
                    <BrComponent path={id ?? ''}/>
                </BrFallBackContext.Provider>
            </BrPage> : fallBack}
    </>);
}


export function LayoutContainer({children, page, component}: React.PropsWithChildren<BrProps>): JSX.Element {

    const {fallBack} = React.useContext(BrFallBackContext);

    const useFallback = component?.getChildren()[0]?.getProperties().bms ?? true;
    return <div>{useFallback ? fallBack : children}</div>;
}`