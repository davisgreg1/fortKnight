import React from 'react';
import {Link}from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import styles from './styles.scss';

const SAVETHEWORLDNEWS = gql `
{
  saveTheWorldNews {
    title,
    body,
    image
  }
}
`

export default function News() {
  return (
    <div className={styles.item_div_container}>
      <Link to="news/battleroyale">BATTLE ROYALE NEWS</Link>
      <Link to="news/savetheworld">SAVE THE WORLD NEWS</Link>
    </div>
  )
}
