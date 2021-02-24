import React from 'react'
import { titleSlicer } from "../utils/helper"
import Carousel from "./Carousel"
import "./css/Articles.css"
import "./css/Carousel.css"

const Articles = ({sections, title}) => {
    if (sections.length < 2){
        return (
            <>
            {
                sections[0].type === 11 ?
                <div className="carousel-container">
                    <Carousel autoplay={true} show={1}>
                        {sections[0].articles.map((item,i) =>{
                                return (<a  href={item.url.url} className="carousel-item"
                                            key={i}>
                                            <img className="carousel-thumbnail" src={"https://obs.line-scdn.net/" +
                                                item.thumbnail.hash  +"/w1200"}/>
                                            <div className="carousel-title">
                                                    <p>
                                                    {titleSlicer(item.title)}
                                                    </p>
                                            </div>
                                        </a>)
                        })}
                        
                    </Carousel> 
                </div>
                :
                <>
                {
                    sections[0].type === 6 && sections[0].articles.length > 2 ?
                    <div className="carousel-container">
                        <Carousel show={2} duo>
                            {sections[0].articles.map((item,i) =>{
                                    return (<a  href={item.url.url} className="carousel-item"
                                                key={i}>
                                                <img className="carousel-thumbnail-duo" src={"https://obs.line-scdn.net/" +
                                                    item.thumbnail.hash  +"/w1200"}/>
                                                <div className="carousel-title-duo">
                                                        <p>
                                                        {titleSlicer(item.title)}
                                                        </p>
                                                </div>
                                            </a>)
                            })}
                            
                        </Carousel> 
                    </div>
                    :
                    <div style={sections[0].articles.length === 0 ? {display:"none"} : {}} className="articles-card-wrapper">
                        <section className="articles-card">
                            <h1 className="articles-title">{ title === undefined ||  title === "" ? "Artikel Lainnya" : title}</h1>
                            <div className="articles-content">
                            {sections[0].articles.map((item,i) =>{
                                return (<a 
                                        href={item.url.url} className="articles-item" 
                                        key={i}>
                                            <img className="article-thumbnail" 
                                            src={"https://obs.line-scdn.net/" +
                                                item.thumbnail.hash + "/w580"}/>
                                            <p>
                                                {titleSlicer(item.title)}
                                            </p>
                                            <p>
                                                {item.publisher}
                                            </p>
                                        </a>)
                            })}
                                
                            </div>
                        </section>
                    </div>
                }
                
                </>
            }
            </>
    
        )
    }
    return (
        
           <>
           {
               sections[0].articles.length >= 2 ?
                <div className="carousel-container">
                        <Carousel autoplay={true} show={1}>
                            {sections[0].articles.map((item,i) =>{
                                    return (<a  href={item.url.url} className="carousel-item"
                                                key={i}>
                                                <img className="carousel-thumbnail" src={"https://obs.line-scdn.net/" +
                                                    item.thumbnail.hash  +"/w1200"}/>
                                                <div className="carousel-title">
                                                        <p>
                                                        {titleSlicer(item.title)}
                                                        </p>
                                                </div>
                                            </a>)
                            })}
                            
                        </Carousel> 
                </div>
                :
                <div style={sections[0].articles.length === 0 ? {display:"none"} : {}} className="articles-card-wrapper">
                    <section className="articles-card-big">
                        <div className="articles-content">
                        {sections[0].articles.map((item,i) =>{
                            return (<div className="articles-item-wrapper">
                                        <a 
                                            href={item.url.url} className="articles-item" 
                                            key={i}>
                                                <img className="article-thumbnail" 
                                                src={"https://obs.line-scdn.net/" +
                                                    item.thumbnail.hash + "/w580"}/>
                                                <div className="title-wrapper">
                                                    <p>
                                                        {titleSlicer(item.title)}
                                                    </p>
                                                    <p>
                                                        {item.publisher}
                                                    </p>
                                                </div>
                                        </a>
                                    </div>)
                        })}
                            
                        </div>
                    </section>
                </div>

           }
            <div style={sections[1].articles.length === 0 ? {display:"none"} : {}} className="articles-card-wrapper">
                <section className="articles-card-big">
                    <div className="articles-content">
                    {sections[1].articles.map((item,i) =>{
                        return (<div className="articles-item-wrapper">
                                    <a 
                                        href={item.url.url} className="articles-item" 
                                        key={i}>
                                            <img className="article-thumbnail" 
                                            src={"https://obs.line-scdn.net/" +
                                                item.thumbnail.hash + "/w580"}/>
                                            <div className="title-wrapper">
                                                <p>
                                                    {titleSlicer(item.title)}
                                                </p>
                                                <p>
                                                    {item.publisher}
                                                </p>
                                            </div>
                                    </a>
                                </div>)
                    })}
                        
                    </div>
                </section>
            </div>
           </>
        
    )
}

export default Articles
