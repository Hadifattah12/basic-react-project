import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx"

export default function Examples(){
let [selectedTopic,setSelectedTopic]= useState('');
 
function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
  }
  
  let tabContent = <p> please select a topic</p>;
  if(selectedTopic)
  {
  tabContent =(
      <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
            <code>
            {EXAMPLES[selectedTopic].code}
            </code>
            </pre>
            </div>
  );
  }
    return (
<Section id="examples" title="Examples">
    <Tabs
        buttons={
            <>
            <TabButton isSelected={selectedTopic === 'components'} 
            onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}
            onClick={() => handleSelect('jsx')}>jsx</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}
            onClick={() => handleSelect('props')}>props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}
            onClick={() => handleSelect('state')}>state</TabButton>
            </>
            }
            >
            {tabContent}
            </Tabs>
        </Section>
    );
}

   


