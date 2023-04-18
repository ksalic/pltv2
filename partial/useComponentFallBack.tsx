import React from 'react';
import {Component} from "@bloomreach/spa-sdk";
import {BrFallBackContext} from "@/partial/BrContent";

export function useComponentFallBack(component?: Component): [boolean, (JSX.Element | undefined)] {
    const {fallBack} = React.useContext(BrFallBackContext);

    if (component?.getProperties()?.useBMS) {
        return [true, fallBack]
    }

    return [false, fallBack];
}
