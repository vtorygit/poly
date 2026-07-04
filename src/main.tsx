import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import { countries, languages } from "./data";
import type { Phrase, Scenario } from "./types";

function speak(text: string, lang: string) {
  if (!("speechSynthesis" in window)) {
    alert("Озвучка не поддерживается в этом браузере.");
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.82;

  window.speechSynthesis.speak(utterance);
}

function App() {
  const [languageId, setLanguageId] = useState(languages[0].id);
  const [countryId, setCountryId] = useState(countries[0].id);
  const [scenarioId, setScenarioId] = useState(languages[0].scenarios[0].id);

  const language = useMemo(
    () => languages.find((item) => item.id === languageId) ?? languages[0],
    [languageId]
  );

  const availableCountries = useMemo(
    () => countries.filter((item) => item.languageId === language.id),
    [language.id]
  );

  const country = useMemo(
    () =>
      availableCountries.find((item) => item.id === countryId) ??
      availableCountries[0],
    [availableCountries, countryId]
  );

  const scenario = useMemo(
    () =>
      language.scenarios.find((item) => item.id === scenarioId) ??
      language.scenarios[0],
    [language, scenarioId]
  );

  function handleLanguageChange(nextLanguageId: string) {
    const nextLanguage = languages.find((item) => item.id === nextLanguageId);
    if (!nextLanguage) return;

    const nextCountry =
      countries.find((item) => item.languageId === nextLanguage.id) ??
      countries[0];

    setLanguageId(nextLanguage.id);
    setCountryId(nextCountry.id);
    setScenarioId(nextLanguage.scenarios[0].id);
  }

  return (
    <main className="page">
      <section className="hero no-print">
        <div>
          <p className="eyebrow">Survival Phrasebook</p>
          <h1>Разговорник для первых дней в новой стране</h1>
          <p className="heroText">
            Минимальные фразы, слова, произношение, знаки и культурные
            предупреждения. Сделано для ситуации, когда нужно не выучить язык,
            а быстро вернуть себе самостоятельность.
          </p>
        </div>

        <div className="heroActions">
          <button onClick={() => window.print()} className="primaryButton">
            Скачать / сохранить PDF
          </button>
        </div>
      </section>

      <section className="controls no-print">
        <label>
          <span>Язык</span>
          <select
            value={language.id}
            onChange={(event) => handleLanguageChange(event.target.value)}
          >
            {languages.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title} / {item.nativeTitle}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Страна / пакет</span>
          <select
            value={country.id}
            onChange={(event) => setCountryId(event.target.value)}
          >
            {availableCountries.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </label>
      </section>

      <section className="printHeader">
        <p>Survival Phrasebook</p>
        <h1>
          {language.title}: {country.title}
        </h1>
      </section>

      <section className="layout">
        <aside className="sidebar no-print">
          <div className="card">
            <h2>{language.title}</h2>
            <p>{language.description}</p>
          </div>

          <nav className="scenarioNav">
            {language.scenarios.map((item) => (
              <button
                key={item.id}
                className={item.id === scenario.id ? "active" : ""}
                onClick={() => setScenarioId(item.id)}
              >
                {item.title}
              </button>
            ))}
          </nav>
        </aside>

        <div className="content">
          <ScenarioBlock scenario={scenario} speechCode={language.speechCode} />

          <section className="card">
            <h2>Как читать</h2>
            <ul className="cleanList">
              {language.readingNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="card">
            <h2>Экстренные номера</h2>
            <ul className="cleanList">
              {country.emergencyNumbers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="card">
            <h2>Знаки и надписи</h2>
            <div className="signGrid">
              {country.dangerSigns.map((item) => (
                <div className="signCard" key={item.sign}>
                  <strong>{item.sign}</strong>
                  <span>{item.meaning}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="card">
            <h2>Культурные и безопасностные заметки</h2>
            <ul className="cleanList">
              {country.cultureNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}

function ScenarioBlock({
  scenario,
  speechCode
}: {
  scenario: Scenario;
  speechCode: string;
}) {
  return (
    <section className="card">
      <div className="sectionHeader">
        <div>
          <h2>{scenario.title}</h2>
          <p>{scenario.description}</p>
        </div>
      </div>

      <h3>Фразы</h3>
      <div className="phraseList">
        {scenario.phrases.map((phrase) => (
          <PhraseCard key={phrase.id} phrase={phrase} speechCode={speechCode} />
        ))}
      </div>

      <h3>Слова</h3>
      <div className="wordGrid">
        {scenario.words.map((word) => (
          <div className="wordCard" key={`${word.ru}-${word.target}`}>
            <span>{word.ru}</span>
            <strong>{word.target}</strong>
            <em>{word.pronunciation}</em>
          </div>
        ))}
      </div>
    </section>
  );
}

function PhraseCard({
  phrase,
  speechCode
}: {
  phrase: Phrase;
  speechCode: string;
}) {
  return (
    <article className="phraseCard">
      <div>
        <p className="ru">{phrase.ru}</p>
        <p className="target">{phrase.target}</p>
        <p className="pronunciation">{phrase.pronunciation}</p>
        {phrase.note && <p className="note">{phrase.note}</p>}
      </div>

      <button
        className="speakButton no-print"
        onClick={() => speak(phrase.target, speechCode)}
        aria-label={`Произнести: ${phrase.target}`}
      >
        🔊
      </button>
    </article>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
