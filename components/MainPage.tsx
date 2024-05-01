import {useContext, useState} from "react"
import { RenderBuilderContent } from '@/components/builder';
import Navigation from '@/components/blocks/Navigation/Navigation';
import Footer from '@/components/blocks/Footer/Footer';
import { DarkContext } from "@/app/DarkContext"
import { relative } from "path";


export default function MainPage({content}){
    const {darkMode, toggleDarkMode} = useContext(DarkContext);
    return  (
    <div className={`bg-${darkMode ? 'darkBeige' : 'lightBeige'}`}style={{ position: 'relative'}}>
    <Navigation />
    <button onClick={toggleDarkMode} className='fixed z-50 bottom-3 left-2'>
      <img src={darkMode ? 'LightModeButton.png' : 'DarkModeButton.png'} alt="" width={45}/>
    </button>
    <div  style={{ marginTop: '-95px' }}>
    <RenderBuilderContent content={content}/>
    </div>
    <Footer />
  </div>)
}