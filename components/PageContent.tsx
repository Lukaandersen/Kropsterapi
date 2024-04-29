// components/PageContent.tsx
import { useState, useEffect } from 'react';
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from './builder';
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function PageContent() {
  const [darkMode, setDarkMode] = useState(false);
  const [content, setContent] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
    <div className={`bg-${darkMode ? 'darkBeige' : 'lightBeige'}`}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <RenderBuilderContent content={content}/>
    </div>
  );
}
