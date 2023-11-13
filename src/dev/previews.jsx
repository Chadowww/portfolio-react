import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Home from "../component/pages/home";
import {ExpandebaleBtn} from "../component/atoms/ExpandebaleBtn";
import {Card} from "../component/atoms/Card";
import {LeftSideBar} from "../component/organisms/LeftSideBar";
import LoadingPage from "../component/pages/LoadingPage";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Home">
                <Home/>
            </ComponentPreview>
            <ComponentPreview path="/ExpandebaleBtn">
                <ExpandebaleBtn/>
            </ComponentPreview>
            <ComponentPreview path="/Card">
                <Card/>
            </ComponentPreview>
            <ComponentPreview path="/LeftSideBar">
                <LeftSideBar/>
            </ComponentPreview>
            <ComponentPreview path="/LoadingPage">
                <LoadingPage/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews