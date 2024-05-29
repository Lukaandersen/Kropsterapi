// components/builder.tsx
"use client";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react"; 
import { BuilderContent, builder } from '@builder.io/sdk';
import DefaultErrorPage from "next/error";
import '../builder-registry'

interface BuilderPageProps { 
  content?: BuilderContent;
}

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export function RenderBuilderContent({ content }: BuilderPageProps) { 

  const isPreviewing = useIsPreviewing(); 

  if (content || isPreviewing) {
    return <BuilderComponent content={content} model="page" />;
  }
 
  return <DefaultErrorPage statusCode={404} />; 
}
