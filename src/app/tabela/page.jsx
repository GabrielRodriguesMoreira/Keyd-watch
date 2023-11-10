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
                }
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
        <main className="flex w-screen h-screen">
            <section className="h-full w-fit overflow-hidden">
                <ul className="list-none  h-full flex flex-col pl-6 p-2 justify-between bg-zinc-700">
                    {teamsData.map((team, index) => (
                        <li
                            key={team.rank}
                            className={`flex items-center relative overflow-hidden   text-white font-semibold space-x-4 h-fit bg-zinc-800 -500 rounded-md p-1 shadow-md hover:shadow-black transition-all cursor-pointer`}

                        >
                            <img src={team.logo} className="absolute opacity-40 blur-[1px] w-[55%] transform -translate-y-[50%] -translate-x-[50%] top-[50%]" alt="" />
                            <div className="flex w-full items-center space-x-4 z-10">
                               
                                <div className="flex flex-col font-bold">
                                    <span className="">{team.name}</span>
                                    <span>Wins: {team.wins} - Loses: {team.loses}</span>
                                </div>
                                <span >{team.rank}°</span>
                            </div>

                        </li>
                    ))}
                </ul>
            </section>

            <section className="flex flex-1 gap-3">
                <div className="w-full h-1/2 flex p-2 text-white space-x-5 " id="matches">
                    {MatchesData.map((match, matchIndex) => (
                        <div key={matchIndex} className="p-2 space-y-2 h-1/2 ">
                            <h1>{match.date}</h1>
                            {match.teams.map((team, teamIndex) => (
                                <div key={teamIndex} className="flex justify-between h-1/5 w-64 ">
                                    <div className="flex space-x-1 items-center">
                                        <div className="h-full w-2 bg-blue-500 rounded-full"></div>
                                        <img src={team.logo1} alt="" className="h-full w-auto" />
                                        <p>{team.blueside}</p>
                                    </div>
                                    <div className="h-full text-center text-xs">
                                        <p>{team.time}</p>
                                        <p>VS</p>
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <p>{team.redside}</p>
                                        <img src={team.logo2} alt="" className="h-full w-auto" />
                                        <div className="h-full w-2 bg-red-500 rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>


                <div className="w-full h-1/2 " id="news">
                    {/* Add your content for news here */}
                </div>
            </section>
        </main>
    );
}
