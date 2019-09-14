import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from "apollo-boost";
import styles from './styles.scss';

const WEAPONS = gql `
{
  getAllWeapons {
    identifier,
    name,
    rarity,
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
    <div className={styles.weapons}>
      {data
        .getAllWeapons
        .map(weapon => <div key={weapon.identifier} className={styles.weapon_div_weaponItem}>
          <p className={styles.weapons_p_name}>{weapon.rarity} {" "} {weapon.name}</p>{" "}<img src={weapon.image} className={styles.img}/></div>)
}
    </div>
  )
}
