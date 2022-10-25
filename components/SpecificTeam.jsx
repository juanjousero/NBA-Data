import Image from 'next/image';
import CountUp from 'react-countup';
import { teamLogos } from '../components/Team';
import { Players } from '../components/Players';
import styles from '../styles/SpecificTeam.module.css';

export function SpecificTeam ({ id, name, conference, division, abbreviation, players, onClick }) {
    const stadiumsAndColors = [
        {
            name: 'State Farm Arena',
            location: 'Atlanta, Georgia',
            capacity: 18118,
            firstColor: 'rgba(38, 40, 42, 0.75)',
            secondColor: 'rgba(224, 58, 62, 0.75)',
            thirdColor: 'rgba(193, 211, 47, 0.75)'
        },
        {
            name: 'TD Garden',
            location: 'Boston, Massachusetts',
            capacity: 19156,
            firstColor: 'rgba(255, 255, 255, 0.75)',
            secondColor: 'rgba(0, 131, 72, 0.75)',
            thirdColor: 'rgba(0, 0, 0, 0.75)'
        },
        {
            name: 'Barclays Center',
            location: 'Brooklyn, New York',
            capacity: 17732,
            firstColor: 'rgba(255, 255, 255, 0.75)',
            secondColor: 'rgba(0, 0, 0, 0.75)',
            thirdColor: 'rgba(255, 255, 255, 0.75)'
        },
        {
            name: 'Spectrum Center',
            location: 'Charlotte, North Carolina',
            capacity: 19077,
            firstColor: 'rgba(0, 120, 140, 0.75)',
            secondColor: 'rgba(161, 161, 164, 0.75)',
            thirdColor: 'rgba(29, 17, 96, 0.75)'
        },
        {
            name: 'United Center',
            location: 'Chicago, Illinois',
            capacity: 20917,
            firstColor: 'rgba(255, 255, 255, 0.75)',
            secondColor: 'rgba(206, 17, 65, 0.75)',
            thirdColor: 'rgba(0, 0, 0, 0.75)'
        },
        {
            name: 'Rocket Mortgage FieldHouse',
            location: 'Cleveland, Ohio',
            capacity: 19432,
            firstColor: 'rgba(255, 184, 28, 0.75)',
            secondColor: 'rgba(111, 38, 61, 0.75)',
            thirdColor: 'rgba(4, 30, 66, 0.75)'
        },
        {
            name: 'American Airlines Center',
            location: 'Dallas, Texas',
            capacity: 19200,
            firstColor: 'rgba(0, 83, 188, 0.75)',
            secondColor: 'rgba(187, 196, 202, 0.75)',
            thirdColor: 'rgba(0, 40, 94, 0.75)'
        },
        {
            name: 'Ball Arena',
            location: 'Denver, Colorado',
            capacity: 19520,
            firstColor: 'rgba(36, 66, 137, 0.75)',
            secondColor: 'rgba(254, 197, 36, 0.75)',
            thirdColor: 'rgba(139, 33, 49, 0.75)'
        },
        {
            name: 'Little Caesars Arena',
            location: 'Detroit, Michigan',
            capacity: 20332,
            firstColor: 'rgba(29, 66, 138, 0.75)',
            secondColor: 'rgba(200, 16, 46, 0.75)',
            thirdColor: 'rgba(255, 255, 255, 0.75)'
        },
        {
            name: 'Chase Center',
            location: 'San Francisco, California',
            capacity: 18064,
            firstColor: 'rgba(0, 107, 182, 0.75)',
            secondColor: 'rgba(253, 185, 39, 0.75)',
            thirdColor: 'rgba(38, 40, 42, 0.75)'
        },
        {
            name: 'Toyota Center',
            location: 'Houston, Texas',
            capacity: 18055,
            firstColor: 'rgba(255, 255, 255, 0.75)',
            secondColor: 'rgba(206, 17, 65, 0.75)',
            thirdColor: 'rgba(196, 206, 212, 0.75)'
        },
        {
            name: 'Gainbridge Fieldhouse',
            location: 'Indianapolis, Indiana',
            capacity: 17923,
            firstColor: 'rgba(253, 187, 48, 0.75)',
            secondColor: 'rgba(0, 45, 98, 0.75)',
            thirdColor: 'rgba(190, 192, 194, 0.75)'
        },
        {
            name: 'Crypto.com Arena',
            location: 'Los Angeles, California',
            capacity: 19068,
            firstColor: 'rgba(29, 66, 138, 0.75)',
            secondColor: 'rgba(255, 255, 255, 0.75)',
            thirdColor: 'rgba(200, 16, 46, 0.75)'
        },
        {
            name: 'Crypto.com Arena',
            location: 'Los Angeles, California',
            capacity: 18997,
            firstColor: 'rgba(85, 37, 131, 0.75)',
            secondColor: 'rgba(253, 185, 39, 0.75)',
            thirdColor: 'rgba(0, 0, 0, 0.75)'
        },
        {
            name: 'FedExForum',
            location: 'Memphis, Tenesse',
            capacity: 17794,
            firstColor: 'rgba(18, 23, 63, 0.75)',
            secondColor: 'rgba(93, 118, 169, 0.75)',
            thirdColor: 'rgba(245, 177, 18, 0.75)'
        },
        {
            name: 'FTX Arena',
            location: 'Miami, Florida',
            capacity: 19600,
            firstColor: 'rgba(152, 0, 46, 0.75)',
            secondColor: 'rgba(0, 0, 0, 0.75)',
            thirdColor: 'rgba(249, 160, 27, 0.75)'
        },
        {
            name: 'Fiserv Forum',
            location: 'Milwaukee, Wisconsin',
            capacity: 17500,
            firstColor: 'rgba(238, 225, 198, 0.75)',
            secondColor: 'rgba(0, 71, 27, 0.75)',
            thirdColor: 'rgba(0, 119, 192, 0.75)'
        },
        {
            name: 'Target Center',
            location: 'Minneapolis, Minnesota',
            capacity: 18978,
            firstColor: 'rgba(120, 190, 32, 0.75)',
            secondColor: 'rgba(12, 35, 64, 0.75)',
            thirdColor: 'rgba(158, 162, 162, 0.75)'
        },
        {
            name: 'Smoothie King Center',
            location: 'New Orleans, Louisiana',
            capacity: 16867,
            firstColor: 'rgba(0, 43, 92, 0.75)',
            secondColor: 'rgba(180, 151, 90, 0.75)',
            thirdColor: 'rgba(227, 24, 55, 0.75)'
        },
        {
            name: 'Madison Square Garden',
            location: 'New York City, New York',
            capacity: 19812,
            firstColor: 'rgba(0, 107, 182, 0.75)',
            secondColor: 'rgba(245, 132, 38, 0.75)',
            thirdColor: 'rgba(190, 192, 194, 0.75)'
        },
        {
            name: 'Paycom Center',
            location: 'Oklahoma City, Oklahoma',
            capacity: 18203,
            firstColor: 'rgba(0, 45, 98, 0.75)',
            secondColor: 'rgba(239, 59, 36, 0.75)',
            thirdColor: 'rgba(253, 187, 48, 0.75)'
        },
        {
            name: 'Amway Center',
            location: 'Orlando, Florida',
            capacity: 18846,
            firstColor: 'rgba(198, 206, 212, 0.75)',
            secondColor: 'rgba(0, 119, 192, 0.75)',
            thirdColor: 'rgba(0, 0, 0, 0.75)'
        },
        {
            name: 'Wells Fargo Center',
            location: 'Philadelphia, Pennsylvania',
            capacity: 20478,
            firstColor: 'rgba(255, 255, 255, 0.75)',
            secondColor: 'rgba(0, 107, 182, 0.75)',
            thirdColor: 'rgba(237, 23, 76, 0.75)'
        },
        {
            name: 'Footprint Center',
            location: 'Phoenix, Arizona',
            capacity: 17071,
            firstColor: 'rgba(29, 17, 96, 0.75)',
            secondColor: 'rgba(249, 160, 27, 0.75)',
            thirdColor: 'rgba(229, 96, 32, 0.75)'
        },
        {
            name: 'Moda Center',
            location: 'Portland, Oregon',
            capacity: 19441,
            firstColor: 'rgba(255, 255, 255, 0.75)',
            secondColor: 'rgba(224, 58, 62, 0.75)',
            thirdColor: 'rgba(0, 0, 0, 0.75)'
        },
        {
            name: 'Golden 1 Center',
            location: 'Sacramento, California',
            capacity: 17583,
            firstColor: 'rgba(90, 43, 129, 0.75)',
            secondColor: 'rgba(99, 114, 122, 0.75)',
            thirdColor: 'rgba(0, 0, 0, 0.75)'
        },
        {
            name: 'AT&T Center',
            location: 'San Antonio, Texas',
            capacity: 18418,
            firstColor: 'rgba(196, 206, 212, 0.75)',
            secondColor: 'rgba(0, 0, 0, 0.75)',
            thirdColor: 'rgba(255, 255, 255, 0.75)'
        },
        {
            name: 'Scotiabank Arena',
            location: 'Toronto, Ontario',
            capacity: 19800,
            firstColor: 'rgba(206, 17, 65, 0.75)',
            secondColor: 'rgba(0, 0, 0, 0.75)',
            thirdColor: 'rgba(161, 161, 161, 0.75)'
        },
        {
            name: 'Vivint Arena',
            location: 'Salt Lake City, Utah',
            capacity: 18306,
            firstColor: 'rgba(0, 71, 27, 0.75)',
            secondColor: 'rgba(249, 160, 27, 0.75)',
            thirdColor: 'rgba(0, 71, 27, 0.75)'
        },
        {
            name: 'Capital One Arena',
            location: 'Washington, D.C.',
            capacity: 20356,
            firstColor: 'rgba(0, 43, 92, 0.75)',
            secondColor: 'rgba(196, 206, 212, 0.75)',
            thirdColor: 'rgba(227, 24, 55, 0.75)'
        }
    ]
    
    const stadiumName = stadiumsAndColors[id - 1].name;
    const stadiumLoc = stadiumsAndColors[id - 1].location;
    const stadiumCap = stadiumsAndColors[id - 1].capacity;
    const firstColor = stadiumsAndColors[id - 1].firstColor;
    const secondColor = stadiumsAndColors[id - 1].secondColor;
    const thirdColor = stadiumsAndColors[id - 1].thirdColor;

    const setColors = (color) => {
        const firstColor = color[5] + color [6] + color[7];
        const textColor = ((color[5] !== '1'  && firstColor !== '255') 
                                    ? 'rgba(255, 255, 255, 1)'
                                    : 'rgba(0, 0, 0, 1)');
        return textColor;
    }
    
    const setComponentStyle = (background, text) => {
        const componentStyle = {
            backgroundColor: background,
            color: text
        }
        return componentStyle;
    }

    const firstTextColor = setColors(firstColor);
    const secondTextColor = setColors(secondColor);
    const thirdTextColor = setColors(thirdColor);
    const firstComponentStyle = setComponentStyle(firstColor, firstTextColor);
    const secondComponentStyle = setComponentStyle(secondColor, secondTextColor);
    const thirdComponentStyle = setComponentStyle(thirdColor, thirdTextColor);
    
    return (
        <div className={styles.container}>
            <div className={styles.team}
                 style={firstComponentStyle}>
                <Image src={teamLogos[id-1]} 
                    width={250} 
                    height={250}/>
                <h1>{abbreviation}</h1>
                <h2>{name}</h2>
                <p>Conference: {conference}</p>
                <p>Division: {division}</p>
            </div>
            <div className={styles.stadium}
                 style={secondComponentStyle}>
                <Image className={styles.court}
                       src='/Court.svg'
                       width={200}
                       height={136}/>
                <h2>{stadiumName}</h2>
                <CountUp className={styles.counter}
                        start={0}
                        end={stadiumCap}
                        duration={1}
                        />
                <h3>{stadiumLoc}</h3>
                <p onClick={() => onClick()}
                    className={styles.backLogo}>🔙 Back to teams</p>
            </div>
            <div className={styles.players}
                 style={thirdComponentStyle}>
                <h1>Players</h1>
                <Players players={players}
                         teamID={id}
                         colors={firstComponentStyle}/>

            </div>
        </div>
    )
}