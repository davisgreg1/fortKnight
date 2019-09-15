import React, {useState, Fragment} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import styles from './styles.scss';

const WEAPONS = gql `
{
  getAllWeapons {
    identifier,
    name,
    vaulted,
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
  const renderWeapons = weaponsArr => {
    return (
      <TransitionGroup className={styles.weapons}>
        {weaponsArr.map(weapon => <CSSTransition classNames="weapons" key={weapon.identifier} timeout={100}>
          <div className={styles["weapons-div-weaponItem"]}>
            <div className={styles["weapons-div-info"]}>
              <p className={styles["weapons-p-rarity"]}>{weapon.rarity}</p>
              <p className={styles["weapons-p-color-red"]}>{weapon.vaulted === 1
                  ? "Vaulted"
                  : ''}</p>
              <div className={styles["weapons-p-name"]}>
                {weapon.name}
              </div>
            </div>{' '}<img src={weapon.image} className={styles["weapons-img"]}/></div>
        </CSSTransition>)
}
      </TransitionGroup>
    )
  }

  return (
    <Fragment>
      <div className={styles.weapon_button_nav}>
        <button
          className={styles.weapon_button}
          onClick={() => {
          setCommonWeapons(filterWeapons(data.getAllWeapons, 'common'));
          setCommonWeaponsShowing(true);
          setLegendaryWeaponsShowing(false);
          setRareWeaponsShowing(false);
          setEpicWeaponsShowing(false);
          setUncommonWeaponsShowing(false);
        }}>Common Weapons</button>
        
        <button
          className={styles.weapon_button}
          onClick={() => {
          setUncommonWeapons(filterWeapons(data.getAllWeapons, 'uncommon'));
          setUncommonWeaponsShowing(true);
          setLegendaryWeaponsShowing(false);
          setCommonWeaponsShowing(false);
          setRareWeaponsShowing(false);
          setEpicWeaponsShowing(false);
        }}>Uncommon Weapons</button>
        <button
          className={styles.weapon_button}
          onClick={() => {
          setLegendaryWeapons(filterWeapons(data.getAllWeapons, 'legendary'));
          setLegendaryWeaponsShowing(true);
          setEpicWeaponsShowing(false);
          setRareWeaponsShowing(false);
          setCommonWeaponsShowing(false);
          setUncommonWeaponsShowing(false);
        }}>Legendary Weapons</button>
        <button
          className={styles.weapon_button}
          onClick={() => {
          setEpicWeapons(filterWeapons(data.getAllWeapons, 'epic'));
          setEpicWeaponsShowing(true);
          setLegendaryWeaponsShowing(false);
          setRareWeaponsShowing(false);
          setCommonWeaponsShowing(false);
          setUncommonWeaponsShowing(false);
        }}>Epic Weapons</button>
        <button
          className={styles.weapon_button}
          onClick={() => {
          setRareWeapons(filterWeapons(data.getAllWeapons, 'rare'));
          setRareWeaponsShowing(true);
          setLegendaryWeaponsShowing(false);
          setEpicWeaponsShowing(false);
          setCommonWeaponsShowing(false);
          setUncommonWeaponsShowing(false);
        }}>Rare Weapons</button>

      </div>
      {commonWeaponsShowing && renderWeapons(commonWeapons)}
      {uncommonWeaponsShowing && renderWeapons(uncommonWeapons)}
      {epicWeaponsShowing && renderWeapons(epicWeapons)}
      {legendaryWeaponsShowing && renderWeapons(legendaryWeapons)}
      {rareWeaponsShowing && renderWeapons(rareWeapons)}
    </Fragment>
  )
};
