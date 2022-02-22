import React, { useState } from 'react';
// import "../node_module/bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import {Button, Alert, Breadcrumb, Card,Container, Form, Row, Col} from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import News from './News';
import axios from 'axios';

function FetchNews() {
  const [news, setNews] = useState([])
  let generateNews = async () => {

    let { data } = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=c9b552c69e384ec5a920f79329d68e38")

    // console.log(data);
    console.log(data.articles[0])
    // console.log(data.articles[0].source)
    // console.log(data.articles[0].title)
    setNews(data.articles);

  }

  return (
    <>
      <h1 className='text-center my-3' >Welcome To Ravi's World</h1>
      <div className="container text-center">
        <Button className="button" onClick={generateNews}>Get News</Button>
      </div>
      <div className="container my-4">
        <div className="row">
          {
            news.map((curVal, id) => {
              return <div className="col-lg-4 col-md-6 col-sm-12">
                <News key={id} title={curVal.title} description={curVal.description} urlToImage={curVal.urlToImage} url={curVal.url} />
              </div>
            })
          }
        </div>
      </div>
    </>
  );
}

export default FetchNews;
