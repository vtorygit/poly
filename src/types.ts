export type Phrase = {
  id: string;
  ru: string;
  target: string;
  pronunciation: string;
  note?: string;
};

export type Word = {
  ru: string;
  target: string;
  pronunciation: string;
};

export type Scenario = {
  id: string;
  title: string;
  description: string;
  phrases: Phrase[];
  words: Word[];
};

export type CountryPack = {
  id: string;
  title: string;
  languageId: string;
  emergencyNumbers: string[];
  cultureNotes: string[];
  dangerSigns: {
    sign: string;
    meaning: string;
  }[];
};

export type LanguagePack = {
  id: string;
  title: string;
  nativeTitle: string;
  speechCode: string;
  description: string;
  readingNotes: string[];
  scenarios: Scenario[];
};
