"use client"
import {DarkModeProvider} from "@/app/DarkContext"
import React, { useState, useEffect, useContext } from 'react';
import { builder } from "@builder.io/sdk";
import MainPage from '@/components/MainPage';



builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function Page() {
  
  const [content, setContent] = useState(null);
  
  

  

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
    <DarkModeProvider>
      
        <MainPage content={content} />
      
      </DarkModeProvider>
  );
}
