import { useState, useEffect } from 'react';
import styles from '../styles/Players.module.css';

export function Players ({players, teamID, colors}) {
    const [teamPlayers, setTeamPlayers] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [isPlayersSelected, setIsPlayersSelected] = useState(false);

    useEffect(() => {
        players.map((player) => {
            if (player.team.id == teamID) {
                player['isClicked'] = isClicked;
                setTeamPlayers((oldArr) => [...oldArr, player])
            }
        });

        setIsPlayersSelected(true);
    }, [teamID]);

    useEffect(() => {
        setTimeout(() => {
            const reducedArray = teamPlayers.slice(0, teamPlayers.length/2);
            setTeamPlayers(reducedArray);
        }, 500)
    }, [isPlayersSelected])

    const checkHeight = (height) => {
        if (height != '20rem') {
            return '20rem';
        } else {
            return '5rem';
        }
    }

    const stylingElement = (el, height) => {
        el.parentNode.firstChild.childNodes[1].style.marginTop = '8px';
        el.style.height = height;
        el.style.alignItems = 'flex-start';
    }
    
    const createData = (el, player) => {
        if (el.childElementCount == 2) {
            const div = document.createElement('div'); 
            const position = document.createElement('p');
            const height = document.createElement('p');
            const weight = document.createElement('p');
            
            position.innerHTML = player.position !== '' ? `Position: ${player.position}` : 'Position: Unknown';
            height.innerHTML = player.height_feet !== null ? `Height: ${player.height_feet} ft` : 'Height: Unknown';
            weight.innerHTML = player.weight_pound === null ? `Weight: ${player.weight_pound}` : 'Weight: Unknown';
            
            div.classList.add(styles.playerDiv)
            div.appendChild(position);
            div.appendChild(height);
            div.appendChild(weight);
            el.appendChild(div);
        } else {
            el.removeChild(el.childNodes[2]);
        }
    }

    const showCompletePlayer = (e, player) => {
        const element = e.target;
        const parent = element.parentNode;
        const grandParent = parent.parentNode;
        const type = element.localName;
        const height = '';

        switch (type) {
            case 'li':
                height = checkHeight(element.style.height);
                stylingElement(element, height);
                createData(element, player);
                break;
            case 'div':
                height = checkHeight(parent.style.height);
                stylingElement(parent, height);
                createData(parent, player);
                break;
            case 'p':
                height = checkHeight(grandParent.style.height);
                stylingElement(grandParent, height);
                createData(grandParent, player);
                break;
            default:
                break;
        }
    }

    return (
        <ul className={styles.container}>
            {teamPlayers.map((player) =>
                <li key={player.id}
                    style={{ backgroundColor: colors.backgroundColor, 
                             color: colors.color,
                             border: `1px solid ${colors.color}` }}
                    className={player.isClicked ? styles.detailedCard : styles.card}
                    onClick={() => showCompletePlayer(event, player)}>
                    <div className={styles.data}>
                        <p>{player.first_name}</p>
                        <p>{player.last_name}</p>
                    </div>
                    <div className={styles.arrow}>
                        <p>🏀</p>
                    </div>
                </li>
            )}
        </ul>
    )
}