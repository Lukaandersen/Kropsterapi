"use client"
import React, { useState, useEffect } from 'react';
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from '@/components/builder';
import Navigation from '@/components/blocks/Navigation/Navigation';
import Footer from '@/components/blocks/Footer/Footer';
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);
  const [content, setContent] = useState(null);
  const [darkModeButtonImage, setDarkModeButtonImage] = useState('DarkModeButton.png');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setDarkModeButtonImage(darkMode ? 'DarkModeButton.png' : 'LightModeButton.png');
  };

  useEffect(() => {
    async function fetchContent() {
      const pageContent = await builder.get("page").toPromise();
      setContent(pageContent);
    }
    fetchContent();
  }, []);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`bg-${darkMode ? 'darkBeige' : 'lightBeige'}`}style={{ position: 'relative'}}>
      <Navigation />
      <button onClick={toggleDarkMode} className='absolute z-50'>
      <img src={darkModeButtonImage} alt="" width={45}/>
      </button>
      <RenderBuilderContent content={content}/>
      <Footer />
    </div>
  );
}
