import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from "apollo-boost";
import styles from './styles.scss';

const WEAPONS = gql `
{
  getAllWeapons {
    identifier,
    name,
    image,
    stats {
      hit_body,
      hit_head,
      reloadtime
    }
  }
}
`

export default function Weapons() {
  const {loading, error, data} = useQuery(WEAPONS);
  if (loading) 
    return <p>Loading...</p>;
  if (error) 
    return <p>Error :(</p>;
  return (
    <div className={styles.div}>
      {data
        .getAllWeapons
        .map(weapon => <div key={weapon.identifier}>
          <p className={styles.p__name}>{weapon.name}</p>{" "}<img src={weapon.image} className={styles.img}/></div>)
}
    </div>
  )
}
