import "./App.css";

export default function Matches() {
  const matches = [
  {
    teams: "MI vs KKR",
    date: "23 Mar 2026",
    time: "7:30 PM",
    venue: "Wankhede Stadium, Mumbai",
  },
  {
    teams: "CSK vs RCB",
    date: "24 Mar 2026",
    time: "7:30 PM",
    venue: "M. A. Chidambaram Stadium, Chennai",
  },
  {
    teams: "DC vs RR",
    date: "25 Mar 2026",
    time: "7:30 PM",
    venue: "Feroz Shah Kotla, Delhi",
  },
  {
    teams: "SRH vs PBKS",
    date: "26 Mar 2026",
    time: "7:30 PM",
    venue: "Rajiv Gandhi Intl. Stadium, Hyderabad",
  },
  {
    teams: "KKR vs CSK",
    date: "27 Mar 2026",
    time: "7:30 PM",
    venue: "Eden Gardens, Kolkata",
  },
  {
    teams: "RCB vs MI",
    date: "28 Mar 2026",
    time: "7:30 PM",
    venue: "M. Chinnaswamy Stadium, Bangalore",
  },
  {
    teams: "RR vs SRH",
    date: "29 Mar 2026",
    time: "7:30 PM",
    venue: "Sawai Mansingh Stadium, Jaipur",
  },
  {
    teams: "PBKS vs DC",
    date: "30 Mar 2026",
    time: "7:30 PM",
    venue: "Punjab Cricket Stadium, Mohali",
  },
  {
    teams: "MI vs CSK",
    date: "31 Mar 2026",
    time: "7:30 PM",
    venue: "Wankhede Stadium, Mumbai",
  },
  {
    teams: "KKR vs RCB",
    date: "1 Apr 2026",
    time: "7:30 PM",
    venue: "Eden Gardens, Kolkata",
  },
  {
    teams: "DC vs SRH",
    date: "2 Apr 2026",
    time: "7:30 PM",
    venue: "Feroz Shah Kotla, Delhi",
  },
  {
    teams: "RR vs MI",
    date: "3 Apr 2026",
    time: "7:30 PM",
    venue: "Sawai Mansingh Stadium, Jaipur",
  },
  {
    teams: "PBKS vs CSK",
    date: "4 Apr 2026",
    time: "7:30 PM",
    venue: "Punjab Cricket Stadium, Mohali",
  },
  {
    teams: "RCB vs DC",
    date: "5 Apr 2026",
    time: "7:30 PM",
    venue: "M. Chinnaswamy Stadium, Bangalore",
  },
  {
    teams: "SRH vs KKR",
    date: "6 Apr 2026",
    time: "7:30 PM",
    venue: "Rajiv Gandhi Intl. Stadium, Hyderabad",
  },
  {
    teams: "MI vs RR",
    date: "7 Apr 2026",
    time: "7:30 PM",
    venue: "Wankhede Stadium, Mumbai",
  },
  {
    teams: "CSK vs PBKS",
    date: "8 Apr 2026",
    time: "7:30 PM",
    venue: "M. A. Chidambaram Stadium, Chennai",
  },
  {
    teams: "RCB vs SRH",
    date: "9 Apr 2026",
    time: "7:30 PM",
    venue: "M. Chinnaswamy Stadium, Bangalore",
  },
  {
    teams: "KKR vs DC",
    date: "10 Apr 2026",
    time: "7:30 PM",
    venue: "Eden Gardens, Kolkata",
  },
  {
    teams: "RR vs CSK",
    date: "11 Apr 2026",
    time: "7:30 PM",
    venue: "Sawai Mansingh Stadium, Jaipur",
  },
  {
    teams: "PBKS vs MI",
    date: "12 Apr 2026",
    time: "7:30 PM",
    venue: "Punjab Cricket Stadium, Mohali",
  },
  {
    teams: "SRH vs RCB",
    date: "13 Apr 2026",
    time: "7:30 PM",
    venue: "Rajiv Gandhi Intl. Stadium, Hyderabad",
  }
];


  return (
    <div className="matches-page">
      <h1>IPL Matches</h1>

      <div className="matches-list">
        {matches.map((match, index) => (
          <div key={index} className="match-card">
            <h2>{match.teams}</h2>
            <p><strong>Date:</strong> {match.date}</p>
            <p><strong>Time:</strong> {match.time}</p>
            <p><strong>Venue:</strong> {match.venue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
