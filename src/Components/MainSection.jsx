import React from 'react'
import "./css/MainSection.css"

const MainSection = (props) => {
    return (
        <section className="section">
            {props.children}
        </section>
    )
}

export default MainSection
