import React from 'react';
import newsStyles from './newsStyles.scss';

export default function NewsItem(props) {
  const {data}=props;
  return (
    <div>
    {data && data.battleRoyaleNews.map(elem => {
      return (
        <div className={newsStyles["news-div-container"]}>
        <div style={{backgroundImage: `url(${elem.image})`, backgroundPosition: 'center', backgroundSize: 'auto 100%', opacity: 0.5}}>
          <h2 className={newsStyles["news-h2"]}>{elem.title}</h2>
        </div>
        </div>
      )
    })}
    </div>
  )
}
