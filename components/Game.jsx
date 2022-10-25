import { useState, useEffect } from 'react';
import { teamLogos } from '../components/Team';

export function Game({ game }) {
    const [showTeams, setShowTeams] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowTeams(true);
        }, 700)
    });

    return (
        <>
        {!showTeams 
            ?   <></>
            :   <li key={game.id}>
                    <img src={teamLogos[game.home_team.id - 1]}/>
                    <h2>{game.home_team.abbreviation}</h2>
                    <h3>{game.home_team_score}</h3>
                    <h3>-</h3>
                    <h3>{game.visitor_team_score}</h3>
                    <h2>{game.visitor_team.abbreviation}</h2>
                    <img src={teamLogos[game.visitor_team.id - 1]}/>
                </li>
        }
        </>
    )
}