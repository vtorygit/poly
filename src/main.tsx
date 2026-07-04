import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";

const languages = [
  {
    id: "english",
    title: "Английский",
    native: "English",
    countries: ["США", "Великобритания", "Канада", "Австралия", "ОАЭ", "Сингапур"],
    description:
      "Международный язык транспорта, медицины, полиции, сервиса и документов. В разных странах акцент и отдельные слова могут отличаться.",
    speechCode: "en-US",
    phrases: [
      ["Здравствуйте.", "Hello.", "хэ-лоу"],
      ["Мне нужна помощь.", "I need help.", "ай нид хэлп"],
      ["Я говорю по-русски.", "I speak Russian.", "ай спик ра-шэн"],
      ["Мне нужен переводчик.", "I need a translator.", "ай нид э транс-лей-тэр"],
      ["Можно использовать переводчик в телефоне?", "Can I use a translator on my phone?", "кэн ай юз э транс-лей-тэр он май фоун"],
      ["Пожалуйста, напишите это.", "Please write it down.", "плиз райт ит даун"],
      ["Я не понимаю.", "I don’t understand.", "ай доунт ан-дэр-стэнд"]
    ]
  },
  {
    id: "spanish",
    title: "Испанский",
    native: "Español",
    countries: ["Испания", "Аргентина", "Чили", "Уругвай", "Мексика", "Колумбия"],
    description:
      "Один из самых полезных языков для Латинской Америки и Испании. Для Аргентины нужен отдельный блок: произношение, vos, бытовые слова.",
    speechCode: "es-ES",
    phrases: [
      ["Здравствуйте.", "Hola.", "о-ла"],
      ["Мне нужна помощь.", "Necesito ayuda.", "нэ-се-си-то а-ю-да"],
      ["Я говорю по-русски.", "Hablo ruso.", "а-бло ру-со"],
      ["Мне нужен переводчик.", "Necesito un traductor.", "нэ-се-си-то ун тра-дук-тор"],
      ["Можно использовать переводчик в телефоне?", "¿Puedo usar un traductor en mi teléfono?", "пуэ-до у-сар ун тра-дук-тор эн ми тэ-ле-фо-но"],
      ["Пожалуйста, напишите это.", "Por favor, escríbalo.", "пор фа-вор эс-кри-ба-ло"],
      ["Я не понимаю.", "No entiendo.", "но эн-тьен-до"]
    ]
  }
];

const sections = [
  "Быстрые фразы",
  "Граница",
  "Жильё",
  "Транспорт",
  "Магазин",
  "Врач",
  "Полиция",
  "Справочник"
];

function speak(text: string, lang: string) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.85;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function App() {
  const [languageId, setLanguageId] = useState("english");
  const language = languages.find((item) => item.id === languageId) || languages[0];

  return (
    <main>
      <header className="topbar">
        <div className="brand">🌍</div>

        <select value={languageId} onChange={(e) => setLanguageId(e.target.value)}>
          {languages.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>

        <button onClick={() => window.print()}>PDF</button>
      </header>

      <section className="language-hero">
        <p className="eyebrow">Язык</p>
        <h1>{language.title}</h1>
        <p className="native">{language.native}</p>
        <p>{language.description}</p>

        <div className="chips">
          {language.countries.map((country) => (
            <span key={country}>{country}</span>
          ))}
        </div>
      </section>

      <section className="pin-container">
        {sections.map((section, index) => (
          <article className="pin-card" key={section}>
            <div className={`pin-image tone-${index % 5}`}>
              <span>{section}</span>
            </div>

            <div className="pin-content">
              <p className="pin-title">{section}</p>
              <p className="pin-author">
                {section === "Быстрые фразы"
                  ? "Самое нужное для первого контакта"
                  : "Раздел в разработке"}
              </p>

              {section === "Быстрые фразы" && (
                <div className="phrase-list">
                  {language.phrases.map(([ru, target, transcription]) => (
                    <div className="phrase" key={target}>
                      <p>{ru}</p>
                      <strong>{target}</strong>
                      <em>{transcription}</em>
                      <button onClick={() => speak(target, language.speechCode)}>🔊</button>
                    </div>
                  ))}
                </div>
              )}

              {section === "Справочник" && (
                <div className="mini-list">
                  <p>Как читать</p>
                  <p>Экстренные номера</p>
                  <p>Знаки и надписи</p>
                  <p>Культурные заметки</p>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
