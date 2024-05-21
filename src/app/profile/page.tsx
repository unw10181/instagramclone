"use client"
//importing libraries 
import styled, { createGlobalStyle } from "styled-components";

//importing components
import NavigationBar from "../components/NavigationBar/NavigationBar";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import ProfilePhotosGrid from "../components/PhotoGrid/ProfilePhotosGrid";
import ProfileStoriesGrid from "../components/ProfileStories/ProfileStoriesGrid";
//import icons
import CompassIcon from "../../../public/icons/compass.svg"
import FilmIcon from "../../../public/icons/film.svg"
import HeartIcon from "../../../public/icons/heart.svg"
import HouseIcon from "../../../public/icons/house.svg"
import MagnifyingGlassIcon from "../../../public/icons/magnifyingglass.svg"
import MessageIcon from "../../../public/icons/message.svg"

const GlobalStyles = createGlobalStyle`
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const ProfileContainer = styled.div`
/* background-color: red; */
padding-left: 73px;
max-width: 935px;
margin: 30px auto;

@media (max-width: 480px) {
    padding: 0 0;
    margin: auto auto;
}
::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
`;

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
        <GlobalStyles />
        {/* Nav bar*/}
        <NavigationBar items={navbarConfigItems}/>
        {/* profile container */}
        <ProfileContainer>
        {/* Header */}
            <ProfileHeader/>
            {/* stories */}
            <ProfileStoriesGrid />
            {/* photogrid */}
            <ProfilePhotosGrid />
        </ProfileContainer>
        </>
    );
}