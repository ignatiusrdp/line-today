import React from 'react'
import "./css/Articles.css"
const Articles = ({sections, title}) => {
    return (
        <div style={sections.length < 2 && sections[0].articles.length === 0 ? {display:"none"} : {}} className="articles-card-wrapper">
            <section className="articles-card">
                <h1 className="articles-title">{title}</h1>
                <div className="articles-content">
                    {
                         sections.length < 2 ?
                         <>
                            {sections[0].articles.map((item,i) =>{
                                console.log(title)
                                return (<a 
                                        href={item.url.url} className="articles-item" 
                                        key={i}>
                                            <img className="article-thumbnail" src={item.thumbnail ? "https://obs.line-scdn.net/" +item.thumbnail.hash + "/w580" : "he"}/>
                                            <p>
                                                {item.title}
                                            </p>
                                            <p>
                                                {item.publisher}
                                            </p>
                                        </a>)
                            })}
                         </>
                        :
                        <div>
                            HEHE
                        </div>
                    }
                    
                </div>
            </section>
        </div>
    )
}

export default Articles
