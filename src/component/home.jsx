import * as PropTypes from "prop-types";
import background from '../images/bg-home.png';
import {MainHome} from "./MainHome";
import {RightSideBar} from "./RightSideBar";
import {LeftSideBar} from "./LeftSideBar";

function Home(props) {
    const ClassHome = ' ' + props.className || '';
    const StyleHome = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }


    return(
        <div className={ClassHome} style={StyleHome}>
            <div className={"h-screen w-full flex "} style={{background: 'rgba(47, 47, 56, 0.4)',}}>
                <LeftSideBar/>
                <MainHome/>
                <RightSideBar/>
            </div>
        </div>
    );
}

Home.propTypes = {className: PropTypes.string};

export default Home;