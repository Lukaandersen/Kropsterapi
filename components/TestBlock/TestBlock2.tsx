import React, { useState, useMemo } from 'react';
import Blocks from '@builder.io/sdk-react';

function TestBlock2({ tabs, defaultActiveTab, builderBlock }) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab ? defaultActiveTab - 1 : 0);

  const activeTabContent = useMemo(() => {
    return tabs && tabs.length > activeTab ? tabs[activeTab].content : undefined;
  }, [tabs, activeTab]);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="builder-tabs-wrap">
        {tabs.map((item, index) => (
          <span
            key={index}
            className={`builder-tab-wrap ${activeTab === index ? 'builder-tab-active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <Blocks parent={builderBlock.id} path={`component.options.tabs.${index}.label`} blocks={item.label} />
          </span>
        ))}
      </div>
      {activeTabContent && (
        <div>
          <Blocks
            parent={builderBlock.id}
            path={`component.options.tabs.${activeTab}.content`}
            blocks={activeTabContent}
          />
        </div>
      )}
    </div>
  );
}

export default TestBlock2;
