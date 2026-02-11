import "./App.css";

export default function Teams() {
  const teams = [
    { name: "Chennai Super Kings", logo: "/teams/CSK.png" },
    { name: "Mumbai Indians", logo: "/teams/MUMBAI.png" },
    { name: "Royal Challengers Bangalore", logo: "/teams/RCB.png" },
    { name: "Kolkata Knight Riders", logo: "/teams/KKR.png" },
    { name: "Sunrisers Hyderabad", logo: "/teams/SRH.png" },
    { name: "Rajasthan Royals", logo: "/teams/RAJASTHAN.png" },
    { name: "Delhi Capitals", logo: "/teams/Delhi.png" },
    { name: "Punjab Kings", logo: "/teams/PUNJAB.png" },
    { name: "Lucknow Super Giants", logo: "/teams/LSG.png" },
    { name: "Gujarat Titans", logo: "/teams/GT.png" },
  ];

  return (
    <div className="teams-page">
      <h1>IPL Teams</h1>

      <div className="teams-grid">
        {teams.map((team, index) => (
          <div key={index} className="team-card">
            <img src={team.logo} alt="" />
            <p>{team.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
