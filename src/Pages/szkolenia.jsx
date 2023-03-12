import styles from './szkolenia.module.css';

const Szkolenia = () => {
  return (
    <div className={styles.background}>
      <section className={styles['page-title']}>
        <div className={styles['display-flex']}>
          <h3> Szkolenia </h3>
        </div>
        <h1>Szkolenia informatyczne</h1>
      </section>
      <section className={styles['main-section']}>
        <div className={styles['main-section--left-container']}>
          <h3>Cyfryzacja 2.0</h3>
          <p>
            Specjalnie dobrany pakiet szkoleń dla firm. W pierwszym etapie
            zbieramy informacje na temat firmy, przedsiębiorstwa czy też
            instytucji. Następnie staramy się stworzyć najlepszy plan dla
            podmiotu, który przechodzi proces cyfryzacji. Cyfryzacja jest
            nieunikniona, co więcej sprawia, że wykonywana praca będzie bardziej
            efektywna. Nie czekaj, przyszłość zaczyna się dziś.
          </p>
        </div>

        <div className={styles['main-section--right-container']}>
          <h3>Technologie informacyjno-komunikacyjne (TIK)</h3>
          <p>
            Technologie Informacyjno-komunikacyjne to w ogólnym rozumieniu
            wszelkie techniki umożliwiające przetwarzanie, rozpowszechnianie
            oraz przechowywanie cyfrowych treści. Obejmują zakres: Prezentacje
            multimedialne Projektowanie plakatów, ulotek, broszur informacyjnych
            Podstawy pakietu biurowego Tworzenie prostych grafik Poczta
            elektroniczna Sieć WWW Chmura Video rozmowy Chat Narzędzia Google
            Prowadzenie prostego bloga / strony informacyjnej.
          </p>
        </div>

        <div className={styles['main-section--left-container']}>
          <h3>Java</h3>
          <p>
            Jak wskazują statystyki język programowania JAVA jest wciąż
            aktualnym i stabilnym językiem programowania. Zostań z programistą z
            nami już teraz!
          </p>
        </div>

        <div className={styles['main-section--right-container']}>
          <h3>C++</h3>
          <p>
            Nasza firma prowadzi szkolenia z środowiska C++. Język programowania
            jest wykorzystywany do dziś w wielu branżach na całym świecie. Nasi
            instruktorzy krok po kroku przeprowadzą Cię przez naukę tego języka
          </p>
        </div>

        <div className={styles['main-section--left-container']}>
          <h3>Android</h3>
          <p>
            Aplikacja mobilna stała się nieodłącznym elementem naszego życia.
            Najbardziej popularną platformą jest Android. Nie dziwi więc
            zapotrzebowanie na programistów w tej branży. Przygotujemy Cię do
            pracy programisty!.
          </p>
        </div>

        <div className={styles['main-section--right-container']}>
          <h3>Pracownik biurowy</h3>
          <p>
            Szkolenie dla pracowników biurowych, obejmuje m.in: • Pakiet biurowy
            MS Office / LibreOffice / OpenOffice • Przetwarzanie i przesyłanie
            dokumentów • Poczta elektroniczna • Wykorzystanie chmury w
            przedsiębiorstwie • Zarządzanie dokumentami • Bezpieczeństwo i
            poufność • Social Media
          </p>
        </div>

        <div className={styles['main-section--left-container']}>
          <h3>Tworzenie stron WWW</h3>
          <p>
            Z nami nauczysz się tworzyć strony internetowe. Oferujemy naukę
            tworzenia stron od podstaw z wykorzystaniem HTML, CSS, PHP, Java
            Script. Uczymy także jak korzystać z gotowych rozwiązań CMS typu
            WordPress.
          </p>
        </div>

        <div className={styles['main-section--right-container']}>
          <h3>Kurs komputerowy PKK</h3>
          <p>
            Podstawowy Kurs Komputerowy to nasz autorski program. Dobraliśmy tak
            program nauczania aby przedstawić podstawowe i praktyczne
            umiejętności związane z użytkowaniem komputera. Ogólny program
            obejmuje: • Podstawy używania komputera • System Windows • Internet
            • Tworzenie treści • Bezpieczeństwo • Rozrywka Kurs trwa 80h Na
            koniec każdy z uczestników otrzymuje certyfikat ukończenia kursu.
            Dla chętnych możliwość podejścia do egzaminu kwalifikacyjnego.
          </p>
        </div>

        <div className={styles['main-section--left-container']}>
          <h3>ECDL</h3>
          <p>
            Przygotujemy Cię do zdania egzaminu ECDL – Europejski Certyfikat
            Umiejętności Komputerowych. Przygotujemy także cały egzamin. – Na
            każdym poziomie. .
          </p>
        </div>
      </section>
    </div>
  );
};

export default Szkolenia;
