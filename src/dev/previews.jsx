import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Home from "../component/home";
import {ExpandebaleBtn} from "../component/atoms/ExpandebaleBtn";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Home">
                <Home/>
            </ComponentPreview>
            <ComponentPreview path="/ExpandebaleBtn">
                <ExpandebaleBtn/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews