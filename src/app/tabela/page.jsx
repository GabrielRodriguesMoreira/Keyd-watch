export default function Tabela() {
    const teamsData = [
        { name: 'Pain', logo: 'https://upload.wikimedia.org/wikipedia/en/e/e5/PaiN_Gaming_logo.svg', wins: 0, loses: 0, rank: 1 },
        { name: 'Loud', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/LOUD_logo.svg/1200px-LOUD_logo.svg.png', wins: 0, loses: 0, rank: 2 },
        { name: 'Red Canids', logo: 'redcanidslogo.png', wins: 0, loses: 0, rank: 3 },
        { name: 'Liberty', logo: 'https://static1.squarespace.com/static/61afb10ae1f7cf52bfb3dd13/t/61b2690c6e2d5c6aa3f405e5/1699463747826/', wins: 0, loses: 0, rank: 4 },
        { name: 'Kabum', logo: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/ed/KaBuM%21_e-Sportslogo_square_old.png', wins: 0, loses: 0, rank: 5 },
        { name: 'Los Grandes', logo: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/46/Los_Grandeslogo_old.png', wins: 0, loses: 0, rank: 6 },
        { name: 'Fluxo', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Fluxo_escudo.png', wins: 0, loses: 0, rank: 7 },
        { name: 'Vivo Keyd', logo: 'keydlogo.webp', wins: 0, loses: 0, rank: 8 },
        { name: 'INTZ', logo: 'https://intz.com.br/wp-content/uploads/2019/10/INTZ_Logo_Principal_2022.png', wins: 0, loses: 0, rank: 9 },
        { name: 'Furia', logo: 'https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png', wins: 0, loses: 0, rank: 10 },
    ];

    const MatchesData = [
        {
            date: '10/10/2023',
            teams: [
                {
                    logo1: 'keydlogo.webp',
                    blueside: 'ITZ',
                    time: '13:00',
                    redside: 'KBM',
                    logo2: 'keydlogo.webp',
                },
                {
                    logo1: 'keydlogo.webp',
                    blueside: 'LOS',
                    time: '14:00',
                    redside: "LBR",
                    logo2: 'keydlogo.webp',
                },
                {
                    logo1: 'keydlogo.webp',
                    blueside: 'LOS',
                    time: '14:00',
                    redside: "LBR",
                    logo2: 'keydlogo.webp',
                },
                {
                    logo1: 'keydlogo.webp',
                    blueside: 'LOS',
                    time: '14:00',
                    redside: "LBR",
                    logo2: 'keydlogo.webp',
                },
                {
                    logo1: 'keydlogo.webp',
                    blueside: 'LOS',
                    time: '14:00',
                    redside: "LBR",
                    logo2: 'keydlogo.webp',
                },
            ],
        },
        {
            date: '11/10/2023',
            teams: [
                {
                    logo1: 'keydlogo.webp',
                    blueside: 'ITZ',
                    time: '13:00',
                    redside: 'KBM',
                    logo2: 'keydlogo.webp',
                },
                {
                    logo1: 'keydlogo.webp',
                    blueside: 'LOS',
                    time: '14:00',
                    redside: "LBR",
                    logo2: 'keydlogo.webp',
                }
            ],

        },
    ];


    return (
        <main className="flex flex-col lg:flex-row lg:w-screen lg:h-screen ">
            <section className=" w-full  h-fit lg:h-full lg:w-fit overflow-hidden">
                <ul className="list-none h-full flex flex-col lg:pl-6 p-2 lg:justify-between bg-zinc-700 space-y-4 lg:space-y-0">
                    {teamsData.map((team, index) => (
                        <li
                            key={team.rank}
                            className={`flex items-center relative overflow-hidden font-semibold text-white  space-x-4 h-fit bg-zinc-800 min-h-[90px] lg:min-h-0 rounded-md p-1 shadow-md hover:shadow-black transition-all cursor-pointer`}
                        >
                            <img src={team.logo} className="absolute opacity-40 blur-[1px] w-[55%] transform -translate-y-[50%] -translate-x-[50%] top-[50%]" alt="" />
                            <div className="flex w-full items-center justify-around lg:justify-normal space-x-6 z-10">
                                <div className="flex flex-col ">
                                    <span className="">{team.name}</span>
                                    <span>Wins: {team.wins} / Loses: {team.loses}</span>
                                </div>
                                <span>{team.rank}°</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className=" flex-1 gap-3 ">
                <div className=" w-full h-1/2 flex flex-col items-center lg:items-start space-y-4 lg:space-y-0 lg:flex-row p-2 text-white lg:space-x-4" id="matches">
                    {MatchesData.map((match, matchIndex) => (
                        <div key={matchIndex} className="h-full w-full lg:w-64 rounded-md flex flex-col justify-between text-center font-medium shadow-inner shadow-black p-2">
                            <h1 className="w-fit bg-zinc-800 rounded-sm px-2 py-1 shadow-sm shadow-black">{match.date}</h1>
                            {match.teams.map((team, teamIndex) => (
                                <div key={teamIndex} className="relative flex w-full h-10 shadow-sm shadow-black p-1 hover:shadow-md hover:shadow-black cursor-pointer transition-shadow">
                                    <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20 bg-gradient-to-r from-blue-900 via-transparent to-red-900"></div>
                                    <div className="flex items-center h-full w-2/5 space-x-1">
                                        <img src={team.logo1} className="h-full" alt="" />
                                        <p>{team.blueside}</p>
                                    </div>
                                    <div className="h-full flex flex-col w-1/5 text-center justify-center text-xs">
                                        <p>{team.time}</p>
                                        <p>VS</p>
                                    </div>
                                    <div className="flex items-center h-full w-2/5 space-x-1 justify-end">
                                        <p>{team.redside}</p>
                                        <img src={team.logo2} className="h-full" alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className=" hidden w-full h-1/2  p-2 text-white space-x-8" id="matches">
                    {/* This appears to be a placeholder for news content */}
                </div>
            </section>
        </main>

    );
}
