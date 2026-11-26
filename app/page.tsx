"use client";

import { useMemo, useState } from "react";

type Universe = "mixed" | "mcu" | "dc-movies" | "marvel-comics" | "dc-comics";
type Question = { prompt: string; hint: string; accepted: { answer: string; points: number }[] };

const universeLabels: Record<Universe, string> = {
  mixed: "Daily Mixed",
  mcu: "MCU",
  "dc-movies": "DC Movies",
  "marvel-comics": "Marvel Comics",
  "dc-comics": "DC Comics"
};

const demoQuestions: Question[] = [
  { prompt: "What is the name of the organisation that monitored the timeline in the MCU series Loki?", hint: "Three letters.", accepted: [{ answer: "TVA", points: 100 }, { answer: "Time Variance Authority", points: 100 }] },
  { prompt: "What is the name of Thor's hammer?", hint: "A legendary weapon forged in Nidavellir.", accepted: [{ answer: "Mjolnir", points: 100 }, { answer: "Mjölnir", points: 100 }] },
  { prompt: "Which city is most closely associated with Batman?", hint: "A dark, fictional American city.", accepted: [{ answer: "Gotham", points: 100 }, { answer: "Gotham City", points: 100 }] },
  { prompt: "What metal is bonded to Wolverine's skeleton?", hint: "A fictional indestructible alloy.", accepted: [{ answer: "Adamantium", points: 100 }] },
  { prompt: "What is the name of Superman's home planet?", hint: "It was destroyed.", accepted: [{ answer: "Krypton", points: 100 }] },
  { prompt: "What is the name of the island where Wonder Woman was raised?", hint: "A hidden home of the Amazons.", accepted: [{ answer: "Themyscira", points: 100 }, { answer: "Themyscira Island", points: 100 }] },
  { prompt: "What is the name of the fictional African nation ruled by Black Panther?", hint: "Its capital is Birnin Zana.", accepted: [{ answer: "Wakanda", points: 100 }] }
];

const destinations = [
  { min: 0, max: 99, marvel: "Earth-616", dc: "Earth-1", mixed: "Earth-616 / Earth-1", note: "Your journey into the multiverse begins." },
  { min: 100, max: 199, marvel: "The Moon", dc: "The Moon", mixed: "The Moon", note: "You have taken your first step beyond Earth." },
  { min: 200, max: 299, marvel: "Asgard", dc: "Oa", mixed: "Asgard / Oa", note: "You have reached the realms of cosmic power." },
  { min: 300, max: 399, marvel: "Ultimate Universe", dc: "Absolute Universe", mixed: "Ultimate / Absolute Universe", note: "You have crossed into another reality." },
  { min: 400, max: 549, marvel: "The House of Ideas", dc: "The World Forge", mixed: "House of Ideas / World Forge", note: "You stand where worlds are imagined and forged." },
  { min: 550, max: 699, marvel: "The Beyondverse", dc: "The Source Wall", mixed: "Beyondverse / Source Wall", note: "You have reached the edge of existence." },
  { min: 700, max: 700, marvel: "The One Above All", dc: "The Presence", mixed: "The One Above All • The Beyonder • The Presence", note: "A perfect score. You have transcended every realm." }
];

function getDestination(score: number, universe: Universe) {
  const tier = destinations.find((d) => score >= d.min && score <= d.max)!;
  if (universe === "mixed") return { name: tier.mixed, note: tier.note, perfect: score === 700 };
  if (universe === "dc-movies" || universe === "dc-comics") return { name: tier.dc, note: tier.note, perfect: score === 700 };
  return { name: tier.marvel, note: tier.note, perfect: score === 700 };
}

function normalise(value: string) {
  return value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
}

export default function Home() {
  const [universe, setUniverse] = useState<Universe>("mixed");
  const [screen, setScreen] = useState<"home" | "quiz" | "result">("home");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [history, setHistory] = useState<{ score: number; universe: Universe; date: string }[]>([]);

  const question = demoQuestions[questionIndex];
  const destination = useMemo(() => getDestination(score, universe), [score, universe]);

  function startQuiz() {
    setQuestionIndex(0); setAnswer(""); setScore(0); setAnswers([]); setShowHint(false); setScreen("quiz");
  }

  function submitAnswer() {
    const clean = normalise(answer);
    const match = question.accepted.find((a) => normalise(a.answer) === clean);
    const points = match?.points ?? 0;
    const nextScore = score + points;
    setScore(nextScore);
    setAnswers((prev) => [...prev, answer.trim() || "No answer"]);
    setAnswer(""); setShowHint(false);
    if (questionIndex === demoQuestions.length - 1) {
      setScore(nextScore);
      setHistory((prev) => [{ score: nextScore, universe, date: new Date().toLocaleDateString() }, ...prev].slice(0, 5));
      setScreen("result");
    } else {
      setQuestionIndex((i) => i + 1);
    }
  }

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); setScreen("home"); }}><span className="brand-mark">✳</span><span>INFINITE <b>REALMS</b></span></a>
        <nav><button onClick={() => setScreen("home")}>Home</button><button onClick={() => setScreen("home")}>The Realms</button><button onClick={() => setScreen("home")}>Leaderboard</button><button onClick={() => setScreen("home")}>Archive</button></nav>
        <span className="edition">DAILY MULTIVERSE CHALLENGE <i /></span>
      </header>

      {screen === "home" && <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span /> THE MULTIVERSE AWAITS</div>
          <h1>KNOW THE<br /><em>UNIVERSE.</em><br />CLAIM YOUR<br />DESTINY.</h1>
          <p className="hero-description">Seven questions stand between you and the farthest reaches of comic-book mythology. Every answer takes you closer to your ultimate destination.</p>
          <div className="hero-stats"><div><strong>07</strong><span>QUESTIONS</span></div><div><strong>700</strong><span>MAX POINTS</span></div><div><strong>∞</strong><span>POSSIBILITIES</span></div></div>
          <button className="primary-cta" onClick={startQuiz}>ENTER THE MULTIVERSE <span>↗</span></button>
          <p className="microcopy">ONE DAILY CHALLENGE · ONE SHARED DESTINY</p>
        </div>
        <div className="cosmos-art" aria-label="Original abstract cosmic portal artwork">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="portal"><div className="portal-core" /><div className="portal-glow" /></div>
          <div className="shard shard-a" /><div className="shard shard-b" /><div className="shard shard-c" />
          <div className="art-caption"><span>FIG. 001</span><b>THE INFINITE EXPANSE</b><span>BEYOND THE KNOWN</span></div>
          <div className="floating-label label-top">EARTH / 616</div><div className="floating-label label-bottom">SOURCE UNKNOWN</div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="line" /><span>EST. ACROSS EVERY REALITY</span></div>
      </section>}

      {screen === "home" && <section className="realm-section">
        <div className="section-heading"><div><div className="eyebrow">CHOOSE YOUR REALITY</div><h2>WHICH REALM <em>CALLS YOU?</em></h2></div><p>Each universe has its own lore, legends and final destination. Or test your knowledge across them all.</p></div>
        <div className="realm-grid">
          {(["mixed", "mcu", "dc-movies", "marvel-comics", "dc-comics"] as Universe[]).map((u, i) => <button key={u} className={`realm-card realm-${i} ${universe === u ? "selected" : ""}`} onClick={() => setUniverse(u)}><span className="realm-number">0{i + 1}</span><span className="realm-symbol">{["✧", "◉", "◇", "✳", "⬡"][i]}</span><b>{universeLabels[u]}</b><small>{i === 0 ? "ALL FOUR WORLDS · DAILY" : i === 1 ? "MARVEL CINEMATIC UNIVERSE" : i === 2 ? "DC FILMS & TELEVISION" : i === 3 ? "MARVEL COMIC CONTINUITY" : "DC COMIC CONTINUITY"}</small><span className="realm-arrow">↗</span></button>)}
        </div>
        <div className="selected-realm"><span>SELECTED REALM</span><b>{universeLabels[universe]}</b><button onClick={startQuiz}>PLAY THIS CHALLENGE ↗</button></div>
      </section>}

      {screen === "quiz" && <section className="quiz-wrap">
        <div className="quiz-top"><button className="back-link" onClick={() => setScreen("home")}>← EXIT CHALLENGE</button><span>{universeLabels[universe].toUpperCase()} / DAILY CHALLENGE</span><span>POINTS <b>{score}</b> / 700</span></div>
        <div className="quiz-progress">{demoQuestions.map((_, i) => <span key={i} className={i <= questionIndex ? "active" : ""} />)}</div>
        <div className="question-panel"><div className="eyebrow">QUESTION {String(questionIndex + 1).padStart(2, "0")} <span className="slash">/ 07</span></div><h2>{question.prompt}</h2><p className="answer-instruction">TYPE YOUR ANSWER BELOW. SPELLING COUNTS.</p><form onSubmit={(e) => { e.preventDefault(); if (answer.trim()) submitAnswer(); }}><input autoFocus value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Your answer..." /><button className="primary-cta" disabled={!answer.trim()}>LOCK ANSWER <span>↗</span></button></form><button className="hint-button" onClick={() => setShowHint((v) => !v)}>{showHint ? "HIDE HINT" : "NEED A CLUE?"}</button>{showHint && <p className="hint-text">{question.hint}</p>}</div>
        <div className="quiz-foot"><span>YOUR DESTINATION IS REVEALED AT THE END</span><span>NO TURNING BACK</span></div>
      </section>}

      {screen === "result" && <section className="result-wrap"><div className="eyebrow">CHALLENGE COMPLETE · {universeLabels[universe].toUpperCase()}</div><div className="result-score">{score}<span> / 700</span></div><div className="result-rule" /><p className="result-kicker">YOUR DESTINATION</p><h1 className="destination-title">{destination.name}</h1><p className="destination-note">{destination.note}</p>{destination.perfect && <div className="perfect-seal">✦ BEYOND ALL REALMS · PERFECT SCORE ✦</div>}<div className="result-actions"><button className="primary-cta" onClick={() => setScreen("home")}>RETURN TO THE REALMS ↗</button><button className="secondary-cta" onClick={startQuiz}>PLAY AGAIN</button></div><p className="microcopy">YOUR DESTINATION IS DETERMINED BY YOUR SCORE AND SELECTED UNIVERSE.</p></section>}

      <footer className="footer"><span>INFINITE REALMS <b>© 2026</b></span><span>AN UNOFFICIAL FAN-MADE CONCEPT · NOT AFFILIATED WITH MARVEL OR DC</span><span>BUILT FOR THE CURIOUS <i>✳</i></span></footer>
    </main>
  );
}
