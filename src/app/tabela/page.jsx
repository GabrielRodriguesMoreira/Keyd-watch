export default function Tabela() {
    const teamsData = [
        { name: 'Pain', logo: 'keydlogo.webp', points: 0, wins: 0, loses: 0 },
        { name: 'Loud', logo: 'keydlogo.webp', points: 0, wins: 0, loses: 0 },
        { name: 'Red Canids', logo: 'keydlogo.webp', points: 0, wins: 0, loses: 0 },
        { name: 'Liberty', logo: 'keydlogo.webp', points: 0, wins: 0, loses: 0 },
        { name: 'Kabum', logo: 'keydlogo.webp', points: 0, wins: 0, loses: 0 },
        { name: 'Los Grandes', logo: 'keydlogo.webp', points: 0, wins: 0, loses: 0 },
        { name: 'Fluxo', logo: 'keydlogo.webp', points: 0, wins: 0, loses: 0 },
        { name: 'Vivo Keyd', logo: 'keydlogo.webp', points: 0, wins: 0, loses: 0 },
        { name: 'INTZ', logo: 'keydlogo.webp', points: 0, wins: 0, loses: 0 },
        { name: 'Furia', logo: 'keydlogo.webp', points: 0, wins: 0, loses: 0 },
    ].map((team, index) => ({ ...team, classificacao: index + 1 }));

    return (
        <main className="flex w-screen h-screen p-6 gap-3">
            <section className="h-full w-1/4 border border-purple-500 rounded-md overflow-hidden">
                <table className="w-full h-full">
                    <thead>
                        <tr className="text-white bg-purple-500">
                            <th className="px-2">Rank</th>
                            <th>Org</th>
                            <th className="px-1">Points</th>
                            <th className="px-1">Wins</th>
                            <th className="px-1">Loses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teamsData.map((team, index) => (
                            <tr key={index} className=' hover:bg-zinc-700 text-white transition-colors'>
                                <td className="text-center">{team.classificacao}</td>
                                <td>
                                    <div className="flex items-center">
                                        <img src={team.logo} alt={`${team.name} logo`} className="max-h-8 mx-2" />
                                        <span>{team.name}</span>
                                    </div>
                                </td>
                                <td className="text-center">{team.points}</td>
                                <td className="text-center">{team.wins}</td>
                                <td className="text-center">{team.loses}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className="flex flex-col h-full w-3/4 gap-3">
                <div className="w-full h-1/2" id='matches dates'>
                    {/* Add your content for matches dates here */}
                </div>

                <div className="w-full h-1/2 " id='news'>
                    {/* Add your content for news here */}
                </div>
            </section>
        </main>
    );
}
