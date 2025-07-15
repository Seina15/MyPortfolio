import React from 'react'
import './MySkill.css';
import CollapsibleTable from "../Collapsible"

// Skillぺーじ（途中）
export const MySkill = () => {
  return (
    <>
      <div id = "skill-top"></div>
      <section className="anim-box slidein is-animated" id = "myskill">
        <h1 id = "h1-skill">~ My Skills ~</h1>
        <CollapsibleTable/>
      </section>
    </>
    
  )
}


export default MySkill
