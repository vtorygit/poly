import type { CountryPack, LanguagePack } from "./types";

export const languages: LanguagePack[] = [
  {
    id: "english",
    title: "Английский",
    nativeTitle: "English",
    speechCode: "en-US",
    description:
      "Базовый английский для первых дней: граница, жильё, магазин, врач, полиция, транспорт.",
    readingNotes: [
      "В английском написание и произношение часто не совпадают. Лучше слушать фразы голосом.",
      "th произносится не как русское «з» или «с», но в экстренной ситуации понятность важнее идеального акцента.",
      "w произносится с округлением губ: water — уóтэр.",
      "r обычно произносится мягче, чем русская «р»."
    ],
    scenarios: [
      {
        id: "first-contact",
        title: "Первый контакт",
        description: "Самые базовые фразы, чтобы начать разговор и объяснить, что вы плохо говорите.",
        phrases: [
          {
            id: "hello",
            ru: "Здравствуйте.",
            target: "Hello.",
            pronunciation: "хэ-лоу"
          },
          {
            id: "sorry",
            ru: "Извините.",
            target: "Sorry.",
            pronunciation: "со-ри"
          },
          {
            id: "dont-speak",
            ru: "Я плохо говорю по-английски.",
            target: "I don't speak English well.",
            pronunciation: "ай доунт спик инглиш уэл"
          },
          {
            id: "repeat",
            ru: "Повторите, пожалуйста.",
            target: "Please repeat.",
            pronunciation: "плиз ри-пит"
          },
          {
            id: "slowly",
            ru: "Говорите медленнее, пожалуйста.",
            target: "Please speak slowly.",
            pronunciation: "плиз спик слоу-ли"
          },
          {
            id: "help",
            ru: "Мне нужна помощь.",
            target: "I need help.",
            pronunciation: "ай нид хэлп"
          }
        ],
        words: [
          { ru: "да", target: "yes", pronunciation: "йес" },
          { ru: "нет", target: "no", pronunciation: "ноу" },
          { ru: "спасибо", target: "thank you", pronunciation: "сэнк ю" },
          { ru: "пожалуйста", target: "please", pronunciation: "плиз" },
          { ru: "помощь", target: "help", pronunciation: "хэлп" }
        ]
      },
      {
        id: "border",
        title: "Граница и документы",
        description: "Фразы для паспортного контроля, визы, документов и объяснения ситуации.",
        phrases: [
          {
            id: "passport",
            ru: "Вот мой паспорт.",
            target: "Here is my passport.",
            pronunciation: "хир из май пас-порт"
          },
          {
            id: "visa",
            ru: "У меня есть виза.",
            target: "I have a visa.",
            pronunciation: "ай хэв э ви-за"
          },
          {
            id: "no-visa",
            ru: "У меня нет визы.",
            target: "I don't have a visa.",
            pronunciation: "ай доунт хэв э ви-за"
          },
          {
            id: "purpose",
            ru: "Я приехал / приехала временно.",
            target: "I came here temporarily.",
            pronunciation: "ай кейм хир тэм-по-рэр-и-ли"
          },
          {
            id: "address",
            ru: "Это мой адрес.",
            target: "This is my address.",
            pronunciation: "зис из май э-дрэс"
          }
        ],
        words: [
          { ru: "паспорт", target: "passport", pronunciation: "пас-порт" },
          { ru: "виза", target: "visa", pronunciation: "ви-за" },
          { ru: "адрес", target: "address", pronunciation: "э-дрэс" },
          { ru: "граница", target: "border", pronunciation: "бор-дэр" },
          { ru: "документы", target: "documents", pronunciation: "до-кью-ментс" }
        ]
      },
      {
        id: "doctor",
        title: "Врач и аптека",
        description: "Фразы для боли, аллергии, лекарств и срочной медицинской помощи.",
        phrases: [
          {
            id: "doctor",
            ru: "Мне нужен врач.",
            target: "I need a doctor.",
            pronunciation: "ай нид э док-тэр"
          },
          {
            id: "ambulance",
            ru: "Вызовите скорую, пожалуйста.",
            target: "Please call an ambulance.",
            pronunciation: "плиз кол эн эм-бью-лэнс"
          },
          {
            id: "pain",
            ru: "У меня болит здесь.",
            target: "I have pain here.",
            pronunciation: "ай хэв пэйн хир"
          },
          {
            id: "allergy",
            ru: "У меня аллергия.",
            target: "I have an allergy.",
            pronunciation: "ай хэв эн э-лэр-джи"
          },
          {
            id: "medicine",
            ru: "Мне нужно лекарство.",
            target: "I need medicine.",
            pronunciation: "ай нид мэ-ди-син"
          }
        ],
        words: [
          { ru: "врач", target: "doctor", pronunciation: "док-тэр" },
          { ru: "больница", target: "hospital", pronunciation: "хос-пи-тэл" },
          { ru: "аптека", target: "pharmacy", pronunciation: "фар-ма-си" },
          { ru: "боль", target: "pain", pronunciation: "пэйн" },
          { ru: "лекарство", target: "medicine", pronunciation: "мэ-ди-син" }
        ]
      },
      {
        id: "police",
        title: "Полиция и безопасность",
        description: "Фразы, если вы потерялись, потеряли документы или вам угрожает опасность.",
        phrases: [
          {
            id: "police-help",
            ru: "Мне нужна полиция.",
            target: "I need the police.",
            pronunciation: "ай нид зэ по-лис"
          },
          {
            id: "lost",
            ru: "Я потерялся / потерялась.",
            target: "I am lost.",
            pronunciation: "ай эм лост"
          },
          {
            id: "documents-lost",
            ru: "Я потерял / потеряла документы.",
            target: "I lost my documents.",
            pronunciation: "ай лост май до-кью-ментс"
          },
          {
            id: "danger",
            ru: "Мне угрожает опасность.",
            target: "I am in danger.",
            pronunciation: "ай эм ин дэн-джэр"
          }
        ],
        words: [
          { ru: "полиция", target: "police", pronunciation: "по-лис" },
          { ru: "опасность", target: "danger", pronunciation: "дэн-джэр" },
          { ru: "потерянный", target: "lost", pronunciation: "лост" },
          { ru: "помощь", target: "help", pronunciation: "хэлп" }
        ]
      }
    ]
  }
];

export const countries: CountryPack[] = [
  {
    id: "general-english",
    title: "Английский: общий пакет",
    languageId: "english",
    emergencyNumbers: [
      "112 — единый экстренный номер во многих странах",
      "911 — США и Канада",
      "999 — Великобритания, Ирландия, часть стран Содружества"
    ],
    cultureNotes: [
      "Не спорьте с пограничниками и полицией. Коротко отвечайте на вопрос и показывайте документы.",
      "Если не понимаете вопрос, лучше сказать: “Please repeat slowly.”",
      "В официальных ситуациях используйте please, sorry, thank you — это снижает напряжение."
    ],
    dangerSigns: [
      { sign: "No entry", meaning: "Вход запрещён" },
      { sign: "Emergency exit", meaning: "Аварийный выход" },
      { sign: "Police", meaning: "Полиция" },
      { sign: "Hospital", meaning: "Больница" },
      { sign: "Pharmacy", meaning: "Аптека" },
      { sign: "Danger", meaning: "Опасность" },
      { sign: "Keep out", meaning: "Не входить / держаться подальше" }
    ]
  }
];
