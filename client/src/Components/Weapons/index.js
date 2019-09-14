import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import styles from './styles.scss'

const WEAPONS = gql`
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

export default function Weapons () {
  const { loading, error, data } = useQuery(WEAPONS)
  if (loading) { return <p>Loading...</p> }
  if (error) { return <p>Error :(</p> }
  return (
    <div className={styles.weapons}>
      {data
        .getAllWeapons
        .map(weapon => <div key={weapon.identifier} className={styles.weapon_div_weaponItem}>
          <div className={styles.weapons_div_info}>
            <p className={styles.weapon_p_rarity}>{weapon.rarity}</p>
            <div className={styles.weapons_p_name}>
              {weapon.name}
            </div>
          </div>{' '}<img src={weapon.image} className={styles.img}/></div>)
      }
    </div>
  )
}
