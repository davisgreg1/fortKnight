import React, {useState, Fragment} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
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

  const [legendaryWeapons,
    setLegendaryWeapons] = useState([]);

  const [epicWeapons,
    setEpicWeapons] = useState([]);

  const [rareWeapons,
    setRareWeapons] = useState([]);

  const [commonWeapons,
    setCommonWeapons] = useState([]);

  const [uncommonWeapons,
    setUncommonWeapons] = useState([]);

  const [legendaryWeaponsShowing,
    setLegendaryWeaponsShowing] = useState(false);

  const [epicWeaponsShowing,
    setEpicWeaponsShowing] = useState(false);

  const [rareWeaponsShowing,
    setRareWeaponsShowing] = useState(false);

  const [commonWeaponsShowing,
    setCommonWeaponsShowing] = useState(false);

  const [uncommonWeaponsShowing,
    setUncommonWeaponsShowing] = useState(false);

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error 😫</p>
  }

  const filterWeapons = (arr, rarity) => arr.filter(weapon => weapon.rarity === rarity);
  const renderWeapons = weaponsArr => <div className={styles.weapons}>
    {weaponsArr.map(weapon => <div key={weapon.identifier} className={styles.weapon_div_weaponItem}>
      <div className={styles.weapons_div_info}>
        <p className={styles.weapon_p_rarity}>{weapon.rarity}</p>
        <div className={styles.weapons_p_name}>
          {weapon.name}
        </div>
      </div>{' '}<img src={weapon.image} className={styles.img}/></div>)
}
  </div>

  return (
    <Fragment>
      <div className={styles.weapon_button_nav}>
        <button
          className={styles.weapon_button}
          onClick={() => {
          setLegendaryWeapons(filterWeapons(data.getAllWeapons, 'legendary'));
          setLegendaryWeaponsShowing(true);
          setEpicWeaponsShowing(false)
          setRareWeaponsShowing(false)
          setCommonWeaponsShowing(false)
          setUncommonWeaponsShowing(false)
        }}>Legendary Weapons</button>
        <button
          className={styles.weapon_button}
          onClick={() => {
          setEpicWeapons(filterWeapons(data.getAllWeapons, 'epic'));
          setEpicWeaponsShowing(true);
          setLegendaryWeaponsShowing(false)
          setRareWeaponsShowing(false)
          setCommonWeaponsShowing(false)
          setUncommonWeaponsShowing(false)
        }}>Epic Weapons</button>
        <button
          className={styles.weapon_button}
          onClick={() => {
          setRareWeapons(filterWeapons(data.getAllWeapons, 'rare'));
          setRareWeaponsShowing(true);
          setLegendaryWeaponsShowing(false)
          setEpicWeaponsShowing(false)
          setCommonWeaponsShowing(false)
          setUncommonWeaponsShowing(false)
        }}>Rare Weapons</button>
        <button
          className={styles.weapon_button}
          onClick={() => {
          setCommonWeapons(filterWeapons(data.getAllWeapons, 'common'));
          setCommonWeaponsShowing(true);
          setLegendaryWeaponsShowing(false)
          setRareWeaponsShowing(false)
          setEpicWeaponsShowing(false)
          setUncommonWeaponsShowing(false)
        }}>Common Weapons</button>
        <button
          className={styles.weapon_button}
          onClick={() => {
          setUncommonWeapons(filterWeapons(data.getAllWeapons, 'uncommon'));
          setUncommonWeaponsShowing(true);
          setLegendaryWeaponsShowing(false)
          setCommonWeaponsShowing(false)
          setRareWeaponsShowing(false)
          setEpicWeaponsShowing(false)
        }}>Uncommon Weapons</button>
      </div>

      {legendaryWeaponsShowing && renderWeapons(legendaryWeapons)}
      {epicWeaponsShowing && renderWeapons(epicWeapons)}
      {rareWeaponsShowing && renderWeapons(rareWeapons)}
      {commonWeaponsShowing && renderWeapons(commonWeapons)}
      {uncommonWeaponsShowing && renderWeapons(uncommonWeapons)}
    </Fragment>
  )
};
