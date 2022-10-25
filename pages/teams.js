import { useState, useEffect } from 'react';
import Head from 'next/head';

import { URL } from '../pages/index';
import { Team } from '../components/Team';
import { SpecificTeam } from '../components/SpecificTeam';
import Header from '../components/Header';

import styles from '../styles/Teams.module.css';

import fs from 'fs/promises';

export const playersEndpoint = '/players';
export const teamsEndpoint = '/teams';


export default function Teams({ teams, playersData }) {
    const [specificTeam, setSpecificTeam] = useState(false);
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [conference, setConference] = useState('');
    const [division, setDivision] = useState('');
    const [abbreviation, setAbbreviation] = useState('');

    const changeView = (team) => {
        setSpecificTeam(true);
        setId(team.id);
        setName(team.name);
        setConference(team.conference);
        setDivision(team.division);
        setAbbreviation(team.abbreviation);
    }

    const changeToTeams = () => {
        setSpecificTeam(false);
        setId(0);
        setName('');
        setConference('');
        setDivision('');
        setAbbreviation('');
    }
    
    return (
        <>
            <Head>
                <title>💻 Teams 🏀</title>
                <meta name="description" content="Generated by create next app to test NextJS" />
            </Head>
            
            {!specificTeam 
                ? 
                <>
                <Header className={styles.header}/>
                <div className={styles.container}>
                    <ul>
                        {teams.map(team => <Team team={team}
                                                 onClick={() => changeView(team)}
                                                 />)}
                    </ul>
                  </div>
                </>
                : <SpecificTeam id={id}
                                name={name}
                                conference={conference}
                                division={division}
                                abbreviation={abbreviation}
                                players={playersData}
                                onClick={changeToTeams}/>
            }
        </>
    )
}

export async function getStaticProps (context) {
    const data = await fetch(`${URL}${teamsEndpoint}`);
    const dataJSON = await data.json();
    const teams = dataJSON.data;

    const files = await fs.readdir('./players');
    const promisesReadFiles = files.map(async (file) => {
        const content = await fs.readFile(`./players/${file}`, 'utf8')
        return JSON.parse(content);
    })
    
    const playersDataRaw = await Promise.all(promisesReadFiles);
    const playersData = [];
    playersDataRaw.map((innerArray) => innerArray.map((innerData) => playersData.push(innerData)));
    // console.log(playersData);

    return {
        props: {
            teams,
            playersData
        }
    }
}