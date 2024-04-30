import {useContext, useState} from "react"
import { RenderBuilderContent } from '@/components/builder';
import Navigation from '@/components/blocks/Navigation/Navigation';
import Footer from '@/components/blocks/Footer/Footer';
import { DarkContext } from "@/app/DarkContext"


export default function MainPage({content}){
    const {darkMode, toggleDarkMode} = useContext(DarkContext);
    return  (
    <div className={`bg-${darkMode ? 'darkBeige' : 'lightBeige'}`}style={{ position: 'relative'}}>
    <Navigation />
    <button onClick={toggleDarkMode} className='absolute z-50'>
      <img src={darkMode ? 'DarkModeButton.png' : 'LightModeButton.png'} alt="" width={45}/>
    </button>
    <RenderBuilderContent content={content}/>
    <Footer />
  </div>)
}