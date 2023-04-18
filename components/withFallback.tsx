import React from 'react';
import {BrProps} from '@bloomreach/react-sdk';
import {useComponentFallBack} from "@/partial/useComponentFallBack";
import {ContainerItem} from "@bloomreach/spa-sdk";


export const withFallback = (WrappedComponent: ({
                                                    page,
                                                    component
                                                }: BrProps<ContainerItem>) => (null | JSX.Element)) => {
    return ({component, page}: BrProps<ContainerItem>) => {

        if (!component || !page) {
            return null;
        }

        const [useFallback, fallback] = useComponentFallBack(component)

        return (
            <>
                {useFallback ? fallback : <WrappedComponent component={component} page={page}/>}
            </>
        );
    };
};

