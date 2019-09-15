import React, {Suspense, lazy} from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import styles from './styles.scss';
const NewsItem = lazy(() => import ('./NewsItem'));

const BATTLEROYALENEWS = gql `
{
  battleRoyaleNews {
    title,
    body,
    image
  }
}
`

export default function BattleRoyaleNews() {
  const {loading, error, data} = useQuery(BATTLEROYALENEWS);
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error 😫</p>
  }
  return (
    <div>
      <button>
        <Link to="/news">Back</Link>
      </button>
      <Suspense fallback={'...Loading'}>
        <NewsItem data={data}/>
      </Suspense>
    </div>
  )
}
