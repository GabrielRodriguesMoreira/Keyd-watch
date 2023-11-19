import News from "../componenets/news";

export default function Tabela() {
    const painLogo = 'https://pt.egamersworld.com/uploads/counterstrike/teams/pain-gaming-logo.png';
    const loudLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/LOUD_logo.svg/1200px-LOUD_logo.svg.png';
    const redCanidsLogo = 'redcanidslogo.png';
    const libertyLogo = 'https://static1.squarespace.com/static/61afb10ae1f7cf52bfb3dd13/t/61b2690c6e2d5c6aa3f405e5/1699463747826/';
    const kabumLogo = 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/ed/KaBuM%21_e-Sportslogo_square_old.png';
    const losLogo = 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/46/Los_Grandeslogo_old.png';
    const fluxoLogo = 'https://upload.wikimedia.org/wikipedia/commons/b/be/Fluxo_escudo.png';
    const keydLogo = 'keydlogo.webp';
    const intzLogo = 'https://intz.com.br/wp-content/uploads/2019/10/INTZ_Logo_Principal_2022.png';
    const furiaLogo = 'https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png';

    const MatchesData = [
        {
            date: '11/11/2023',
            teams: [
                {
                    logo1: painLogo,
                    blueside: 'PNG',
                    time: '13:00',
                    redside: 'LLL',
                    logo2: loudLogo,
                },
                {
                    logo1: redCanidsLogo,
                    blueside: 'RED',
                    time: '14:00',
                    redside: "LBR",
                    logo2: libertyLogo,
                },
                {
                    logo1: kabumLogo,
                    blueside: 'KBM',
                    time: '15:00',
                    redside: "LOS",
                    logo2: losLogo,
                },
                {
                    logo1: fluxoLogo,
                    blueside: 'FLX',
                    time: '16:00',
                    redside: "VKS",
                    logo2: keydLogo,
                },
                {
                    logo1: intzLogo,
                    blueside: 'ITZ',
                    time: '17:00',
                    redside: "FUR",
                    logo2: furiaLogo,
                },
            ],
        },
        {
            date: '12/11/2023',
            teams: [
                {
                    logo1: redCanidsLogo,
                    blueside: 'RED',
                    time: '13:00',
                    redside: 'VKS',
                    logo2: keydLogo,
                },
                {
                    logo1: intzLogo,
                    blueside: 'ITZ',
                    time: '14:00',
                    redside: "LBR",
                    logo2: libertyLogo,
                },
                {
                    logo1: painLogo,
                    blueside: 'PNG',
                    time: '15:00',
                    redside: "LOS",
                    logo2: losLogo,
                },
                {
                    logo1: kabumLogo,
                    blueside: 'KBM',
                    time: '16:00',
                    redside: "FUR",
                    logo2: furiaLogo,
                },
                {
                    logo1: fluxoLogo,
                    blueside: 'FLX',
                    time: '17:00',
                    redside: "LLL",
                    logo2: loudLogo,
                },
            ],
        },
        {
            date: '18/11/2023',
            teams: [
                {
                    logo1: kabumLogo,
                    blueside: 'KBM',
                    time: '13:00',
                    redside: 'LLL',
                    logo2: loudLogo,
                },
                {
                    logo1: fluxoLogo,
                    blueside: 'FLX',
                    time: '14:00',
                    redside: "FUR",
                    logo2: furiaLogo,
                },
                {
                    logo1: redCanidsLogo,
                    blueside: 'RED',
                    time: '15:00',
                    redside: "VKS",
                    logo2: keydLogo,
                },
                {
                    logo1: intzLogo,
                    blueside: 'ITZ',
                    time: '16:00',
                    redside: "LBR",
                    logo2: libertyLogo,
                },
                {
                    logo1: painLogo,
                    blueside: 'PNG',
                    time: '17:00',
                    redside: "LOS",
                    logo2: losLogo,
                },
            ],
        },
        {
            date: '19/11/2023',
            teams: [
                {
                    logo1: intzLogo,
                    blueside: 'ITZ',
                    time: '13:00',
                    redside: 'VKS',
                    logo2: keydLogo,
                },
                {
                    logo1: kabumLogo,
                    blueside: 'KBM',
                    time: '14:00',
                    redside: "FUR",
                    logo2: furiaLogo,
                },
                {
                    logo1: redCanidsLogo,
                    blueside: 'RED',
                    time: '15:00',
                    redside: "LLL",
                    logo2: loudLogo,
                },
                {
                    logo1: fluxoLogo,
                    blueside: 'FLX',
                    time: '16:00',
                    redside: "LBR",
                    logo2: libertyLogo,
                },
                {
                    logo1: painLogo,
                    blueside: 'PNG',
                    time: '17:00',
                    redside: "LOS",
                    logo2: losLogo,
                },
            ],
        },
        {
            date: '12/09/2023',
            teams: [
                {
                    logo1: painLogo,
                    blueside: 'PNG',
                    time: '13:00',
                    redside: 'FUR',
                    logo2: furiaLogo,
                },
                {
                    logo1: redCanidsLogo,
                    blueside: 'RED',
                    time: '14:00',
                    redside: "LOS",
                    logo2: losLogo,
                },
                {
                    logo1: kabumLogo,
                    blueside: 'KBM',
                    time: '15:00',
                    redside: "VKS",
                    logo2: keydLogo,
                },
                {
                    logo1: fluxoLogo,
                    blueside: 'FLX',
                    time: '16:00',
                    redside: "LBR",
                    logo2: libertyLogo,
                },
                {
                    logo1: intzLogo,
                    blueside: 'ITZ',
                    time: '17:00',
                    redside: "LLL",
                    logo2: loudLogo,
                },
            ],
        },
    ];

    const teamsData = [
        { name: 'Pain', logo: painLogo, wins: 0, loses: 0, rank: 1 },
        { name: 'Loud', logo: loudLogo, wins: 0, loses: 0, rank: 2 },
        { name: 'Red Canids', logo: redCanidsLogo, wins: 0, loses: 0, rank: 3 },
        { name: 'Liberty', logo: libertyLogo, wins: 0, loses: 0, rank: 4 },
        { name: 'Kabum', logo: kabumLogo, wins: 0, loses: 0, rank: 5 },
        { name: 'Los Grandes', logo: losLogo, wins: 0, loses: 0, rank: 6 },
        { name: 'Fluxo', logo: fluxoLogo, wins: 0, loses: 0, rank: 7 },
        { name: 'Vivo Keyd', logo: keydLogo, wins: 0, loses: 0, rank: 8 },
        { name: 'INTZ', logo: intzLogo, wins: 0, loses: 0, rank: 9 },
        { name: 'Furia', logo: furiaLogo, wins: 0, loses: 0, rank: 10 },
    ];

    return (
        <main className="flex flex-col lg:flex-row lg:w-screen lg:h-screen">
            <section className=" h-fit lg:h-full lg:w-1/6 overflow-hidden">
                <ul className="list-none h-full flex flex-col lg:pl-6 p-2 lg:justify-between bg-zinc-700 space-y-4 lg:space-y-0">
                    {teamsData.map((team, index) => (
                        <li
                            key={team.rank}
                            className={`flex items-center relative overflow-hidden font-semibold text-white h-14 bg-zinc-800  lg:min-h-0 rounded-md shadow-md hover:shadow-black transition-shadow cursor-pointer`}
                        >
                            <div className="flex w-full  items-center justify-around z-10">
                                <div className="flex flex-col ">
                                    <span className="">{team.name}</span>
                                    <span>Wins: {team.wins} / Loses: {team.loses}</span>
                                </div>
                                <span >{team.rank}°</span>
                            </div>

                            <img src={team.logo} className="absolute opacity-30 w-[55%] transform -translate-y-[50%] -translate-x-[30%] top-[50%]" alt="" />
                            <div className="absolute h-full w-full bg-gradient-to-l from-transparent to-black via-transparent opacity-20"></div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className=" gap-3 w-full lg:w-5/6 ">
                <div className="w-full overflow-x-scroll h-1/2 flex  p-2" id="matches">
                    <div className=" h-full flex items-center  lg:items-start space-y-4 lg:space-y-0 flex-col lg:flex-row text-white lg:space-x-4">
                        {MatchesData.map((match, matchIndex) => (
                            <div key={matchIndex} className="h-full  w-64 rounded-md flex flex-col justify-between text-center font-medium shadow-inner shadow-black p-2">
                                <h1 className="w-fit bg-zinc-800 rounded-sm px-2 py-1 shadow-sm shadow-black text-purple-200">{match.date}</h1>
                                {match.teams.map((team, teamIndex) => (
                                    <div key={teamIndex} className="relative flex w-full h-10 shadow-sm shadow-black p-2 hover:shadow-md hover:shadow-black cursor-pointer transition-shadow">
                                        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20 bg-gradient-to-r from-blue-900 via-transparent to-red-900"></div>
                                        <div className="flex items-center h-full w-2/5 space-x-2">
                                            <img src={team.logo1} className="h-full" alt="" />
                                            <p>{team.blueside}</p>
                                        </div>
                                        <div className="h-full flex flex-col w-1/5 text-center justify-center text-xs">
                                            <p>{team.time}</p>
                                            <p>VS</p>
                                        </div>
                                        <div className="flex items-center h-full w-2/5 space-x-2 justify-end">
                                            <p>{team.redside}</p>
                                            <img src={team.logo2} className="h-full" alt="" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                        ))}
                    </div>
                </div>

                <div className=" flex flex-col w-full h-1/2 p-2  text-white bg-zinc-950 overflow-auto" id="news">
                    <h1 className="text-2xl text-white font-bold mb-1">Notícias</h1>
                    <div className="h-full flex w-fit space-x-6">
                        <News
                            title="Worlds 2023: Faker descarta aposentadoria; assista à coletiva da T1"
                            img="https://noticias.maisesports.com.br/wp-content/uploads/2023/11/t1-worlds-2023-coletiva-800x534.jpg"
                            text="A T1 atropelou a Weibo Gaming por 3-0 e ergueu a taça do Worlds..."
                            date='19/11/2023'
                            link="https://maisesports.com.br/worlds-2023-faker-descarta-aposentadoria-em-coletiva-veja-todas-as-respostas/"
                        />
                        <News
                            title="Worlds 2023: T1 segue sem perder para equipes da LPL em playoffs de Mundial"
                            link="https://maisesports.com.br/worlds-2023-t1-segue-sem-perder-para-equipes-da-lpl-em-playoffs-de-mundial/"
                            text="A T1 se sagrou tetracampeã mundial de LoL! Os sul-coreanos..."
                            date='19/11/2023'
                            img="https://noticias.maisesports.com.br/wp-content/uploads/2023/11/faker-levantando-trofeu-worlds-2024-800x448.jpg"

                        />
                        <News
                            title="Worlds 2023: Mundial de LoL é o torneio mais assistido da história dos esports"
                            link="https://maisesports.com.br/worlds-2023-mundial-de-lol-e-o-torneio-mais-assistido-da-historia-dos-esports/"
                            text="O Worlds 2023 chegou ao fim com um atropelo da T1 em cima da Weibo Gaming..."
                            date='19/11/2023'
                            img="https://noticias.maisesports.com.br/wp-content/uploads/2023/11/worlds-2023-audiencia-final-800x534.jpg"

                        />
                        <News
                            title="Worlds 2023: Zeus é eleito o MVP da final pela Riot"
                            link="https://maisesports.com.br/worlds-2023-zeus-e-eleito-o-mvp-da-final-pela-riot/"
                            text="A T1 atropelou a Weibo Gaming na final do Worlds 2023 e se sagrou tetracampeã..."
                            date='19/11/2023'
                            img="https://noticias.maisesports.com.br/wp-content/uploads/2023/11/zeus-mvp-worlds-2024-800x447.jpg"

                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
