import NavigationBar from "./NavigationBar";

//import icons
import CompassIcon from "../../../public/icons/compass.svg"
import FilmIcon from "../../../public/icons/film.svg"
import HeartIcon from "../../../public/icons/heart.svg"
import HouseIcon from "../../../public/icons/house.svg"
import MagnifyingGlassIcon from "../../../public/icons/magnifyingglass.svg"
import MessageIcon from "../../../public/icons/message.svg"

//create array of icons to pass to navbar 

export interface Icon {
    path: string;
    altText: string;
    width: number;
    height: number;
}
const iconHeight = 25;
const iconWidth = 25;

const navbarConfigItems: Icon[] = [
    {path: CompassIcon, altText: "Discover", width: iconWidth, height: iconHeight},
    {path: FilmIcon, altText: "Reels", width: iconWidth, height: iconHeight},
    {path: HeartIcon, altText: "Like", width: iconWidth, height: iconHeight},
    {path: HouseIcon, altText: "Home", width: iconWidth, height: iconHeight},
    {path: MagnifyingGlassIcon, altText: "Search", width: iconWidth, height: iconHeight},
    {path: MessageIcon, altText: "Message", width: iconWidth, height: iconHeight}


]
export default function Profile() {
    return (
        <>
        {/* Nav bar*/}
        <NavigationBar items={navbarConfigItems}/>
        {/* Header */}
        {/* photogrid */}
        {/* stories */}
        </>
    );
}