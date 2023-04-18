import React from 'react';
import {ContainerItem} from "@bloomreach/spa-sdk";
import {BrFallBackContext} from "@/partial/BrContent";

export function useComponentFallBack(component: ContainerItem): [boolean, JSX.Element | undefined] {
    const {fallBack} = React.useContext(BrFallBackContext);

    if (component?.getProperties()?.useBMS) {
        return [true, fallBack]
    }

    return [false, fallBack];
}