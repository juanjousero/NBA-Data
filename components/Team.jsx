import Image from 'next/image';
import styles from '../styles/Team.module.css';

export const teamLogos = ['/logos/ATL.svg', '/logos/BOS.svg', '/logos/BRK.svg',
'/logos/CHO.svg', '/logos/CHI.svg', '/logos/CLE.svg', '/logos/DAL.svg',
'/logos/DEN.svg', '/logos/DET.svg', '/logos/GSW.svg', '/logos/HOU.svg',
'/logos/IND.svg', '/logos/LAC.svg', '/logos/LAL.svg', '/logos/MEM.svg',
'/logos/MIA.svg', '/logos/MIL.svg', '/logos/MIN.svg', '/logos/NOP.svg',
'/logos/NYK.svg', '/logos/OKC.svg', '/logos/ORL.svg', '/logos/PHI.svg',
'/logos/PHO.svg', '/logos/POR.svg', '/logos/SAC.svg', '/logos/SAS.svg',
'/logos/TOT.svg', '/logos/UTA.svg', '/logos/WAS.svg'];

export function Team({team, onClick}) {
    const {id, full_name, conference, division, abbreviation} = team;
    
    return (
        <li key={id} className={styles.grid} onClick={onClick}>
            <Image src={teamLogos[id-1]} 
                width={150} 
                height={150}/>
            <h3>{full_name}</h3>
            <p>{conference}</p>
        </li>
    )
}