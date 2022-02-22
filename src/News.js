import React from 'react'

const News = ({ title, description, urlToImage, url }) => {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={urlToImage} className="card-img-top" alt="news" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-success" target="_ravi">Get Detail news</a>
                </div>
            </div>
        </>
    )
}

export default News