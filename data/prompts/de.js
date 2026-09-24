export default {
  "dev": [
    {
      "cat": "Debugging",
      "prompts": [
        {
          "title": "Fehler finden",
          "text": "Hier ist mein Code. Er funktioniert nicht wie erwartet:\n\n[Code hier einfügen]\n\nDer Fehler oder das Problem: [beschreibe es]\n\nFinde den Bug, erkläre die Ursache und zeige die Lösung."
        },
        {
          "title": "Fehlermeldung erklären",
          "text": "Ich erhalte folgende Fehlermeldung:\n\n[Fehlermeldung hier einfügen]\n\nHier ist der relevante Code:\n\n[Code hier einfügen]\n\nErkläre die Ursache dieses Fehlers und wie er behoben werden kann."
        },
        {
          "title": "Performance-Problem debuggen",
          "text": "Dieser Code läuft langsamer als erwartet:\n\n[Code hier einfügen]\n\nAnalysiere die Logik, identifiziere Flaschenhälse (Bottlenecks) und schlage konkrete Optimierungen mit Vorher-/Nachher-Beispielen vor."
        },
        {
          "title": "Fehlgeschlagenen Test reparieren",
          "text": "Dieser Test schlägt fehl:\n\n[Test-Code hier einfügen]\n\nDie Fehlerausgabe:\n\n[Fehler hier einfügen]\n\nHier ist die getestete Implementierung:\n\n[Code hier einfügen]\n\nErkläre, warum der Test fehlschlägt und wie das Problem behoben werden kann."
        }
      ]
    },
    {
      "cat": "Code-Review",
      "prompts": [
        {
          "title": "Review auf Bugs & Qualität",
          "text": "Überprüfe diesen Code auf Bugs, Randfälle (Edge Cases) und Mängel bei der Codequalität. Nenne konkrete Probleme und schlage Lösungen vor:\n\n[Code hier einfügen]"
        },
        {
          "title": "Sicherheits-Review",
          "text": "Überprüfe diesen Code auf Sicherheitslücken (Injection, Authentifizierungsprobleme, Datenlecks, OWASP Top 10). Bewerte den Schweregrad und schlage Korrekturen vor:\n\n[Code hier einfügen]"
        },
        {
          "title": "PR-Diff überprüfen",
          "text": "Hier ist ein PR-Diff. Überprüfe ihn auf Korrektheit, Stil, Performance und potenzielle Probleme. Fasse dich kurz und gib konkrete Handlungsempfehlungen:\n\n[Diff hier einfügen]"
        },
        {
          "title": "Verbesserungen vorschlagen",
          "text": "Überprüfe diesen Code und schlage Verbesserungen für Lesbarkeit, Wartbarkeit und idiomatischen Stil vor. Die Funktionalität muss unverändert bleiben:\n\n[Code hier einfügen]"
        }
      ]
    },
    {
      "cat": "Refactoring",
      "prompts": [
        {
          "title": "Für Lesbarkeit refaktorisieren",
          "text": "Refaktorisiere diesen Code, um ihn lesbarer und wartbarer zu machen. Das Verhalten muss identisch bleiben. Erkläre jede vorgenommene Änderung:\n\n[Code hier einfügen]"
        },
        {
          "title": "Wiederverwendbare Logik auslagern",
          "text": "Dieser Code enthält duplizierte oder eng gekoppelte Logik. Lagere wiederverwendbare Funktionen/Module aus, während das Verhalten unverändert bleibt:\n\n[Code hier einfügen]"
        },
        {
          "title": "In async/await konvertieren",
          "text": "Wandle diesen Callback-basierten oder Promise-Chain-Code in async/await um. Sorge für ein sauberes Error-Handling:\n\n[Code hier einfügen]"
        },
        {
          "title": "Komplexe Funktion vereinfachen",
          "text": "Diese Funktion ist zu komplex. Zerlege sie in kleinere, aussagekräftig benannte Funktionen. Die Ein- und Ausgaben müssen gleich bleiben:\n\n[Code hier einfügen]"
        }
      ]
    },
    {
      "cat": "Testing",
      "prompts": [
        {
          "title": "Unit-Tests schreiben",
          "text": "Schreibe umfassende Unit-Tests für diese Funktion. Decke Standardfälle (Happy Paths), Randfälle (Edge Cases) und Fehlerszenarien ab. Verwende [Test-Framework]:\n\n[Code hier einfügen]"
        },
        {
          "title": "Integrationstest schreiben",
          "text": "Schreibe einen Integrationstest für dieses Feature. Er soll den gesamten Ablauf von [Start] bis [Ende] testen:\n\n[Code/API hier einfügen]\n\nVerwende [Test-Framework]."
        },
        {
          "title": "Testfälle generieren",
          "text": "Liste alle Testfälle auf, die ich für diese Funktion schreiben sollte. Gruppiere sie nach: Happy Path, Randfällen (Edge Cases), Fehlerbehandlung und Grenzwertbedingungen:\n\n[Code hier einfügen]"
        },
        {
          "title": "Testabdeckung ergänzen",
          "text": "Dieser Code hat keine Tests. Analysiere ihn, identifiziere die kritischsten Pfade und schreibe Tests nach Priorität geordnet. Verwende [Test-Framework]:\n\n[Code hier einfügen]"
        }
      ]
    },
    {
      "cat": "Architektur",
      "prompts": [
        {
          "title": "Datenbankschema entwerfen",
          "text": "Entwirf ein Datenbankschema für [beschreibe deine App/dein Feature]. Berücksichtige Tabellen, Spalten, Datentypen, Relationen und Indizes. Erkläre deine Architekturentscheidungen."
        },
        {
          "title": "API entwerfen",
          "text": "Entwirf eine REST-API für [Feature/Ressource]. Definiere Endpunkte, HTTP-Methoden, Request-/Response-Schemas, Statuscodes und Authentifizierung. Beachte Best Practices."
        },
        {
          "title": "Lösungsansätze vergleichen",
          "text": "Ich muss mich zwischen diesen Ansätzen für [Problem] entscheiden:\n\nOption A: [beschreibe Ansatz]\nOption B: [beschreibe Ansatz]\n\nVergleiche sie nach: Performance, Wartbarkeit, Komplexität und Skalierbarkeit. Sprich eine begründete Empfehlung aus."
        },
        {
          "title": "Systemdesign entwerfen",
          "text": "Entwirf ein System für [beschreibe den Anwendungsfall]. Behandle: High-Level-Architektur, Datenfluss, Datenspeicherung, Caching-Strategie und Skalierung. Identifiziere potenzielle Engpässe."
        }
      ]
    },
    {
      "cat": "DevOps",
      "prompts": [
        {
          "title": "Dockerfile erstellen",
          "text": "Schreibe ein produktionsreifes Dockerfile für dieses Projekt:\n\nSprache/Framework: [z. B. Node.js, Python Flask]\nAnforderungen: [z. B. Multi-Stage-Build, Non-Root-User]\n\nBerücksichtige Best Practices für Sicherheit und Image-Größe."
        },
        {
          "title": "CI/CD-Pipeline erstellen",
          "text": "Erstelle einen GitHub-Actions-Workflow, der Folgendes tut:\n\n1. [Schritte auflisten, z. B. Linting, Tests, Build, Deployment]\n\nSprache/Framework: [angeben]\nDeployment-Ziel: [z. B. AWS, Vercel, Docker Hub]\n\nIntegriere Caching und sinnvolle Trigger."
        },
        {
          "title": "CI-Fehler analysieren",
          "text": "Meine CI-Pipeline schlägt fehl. Hier ist die Log-Ausgabe:\n\n[CI-Log hier einfügen]\n\nDie Pipeline-Konfiguration:\n\n[Konfiguration hier einfügen]\n\nIdentifiziere das Problem und schlage eine Lösung vor."
        },
        {
          "title": "Infrastructure as Code (IaC)",
          "text": "Schreibe eine [Terraform/CloudFormation/Pulumi]-Konfiguration für:\n\n[Infrastruktur beschreiben, z. B. S3-Bucket mit CloudFront, VPC mit Subnetzen]\n\nBefolge Sicherheits-Best-Practices und füge Kommentare zur Erklärung der einzelnen Ressourcen hinzu."
        }
      ]
    },
    {
      "cat": "Git & Dokumentation",
      "prompts": [
        {
          "title": "Commit-Message schreiben",
          "text": "Schreibe eine klare, konventionelle Commit-Message für diesen Diff. Verwende das Format: type(scope): description. Fasse dich kurz, aber präzise:\n\n[Diff hier einfügen]"
        },
        {
          "title": "README erstellen",
          "text": "Erstelle eine README.md für dieses Projekt. Enthalten sein sollten: Funktionsweise, Installation, Nutzung, Konfigurationsoptionen und wie man mitwirken kann:\n\n[Projektstruktur oder Hauptdatei hier einfügen]"
        },
        {
          "title": "Code dokumentieren",
          "text": "Füge diesem Code eine klare, prägnante Dokumentation hinzu. Enthalten sein sollten Funktions-/Methoden-Docstrings, Parameterbeschreibungen, Rückgabewerte und Anwendungsbeispiele:\n\n[Code hier einfügen]"
        },
        {
          "title": "Changelog-Eintrag verfassen",
          "text": "Verfasse einen Changelog-Eintrag für diese Änderungen. Gruppiere nach: Added (Hinzugefügt), Changed (Geändert), Fixed (Behoben), Removed (Entfernt). Verwende verständliche, nutzerorientierte Sprache:\n\n[Diff oder Liste der Änderungen hier einfügen]"
        }
      ]
    }
  ],
  "writing": [
    {
      "cat": "Blog & Artikel",
      "prompts": [
        {
          "title": "Blogartikel-Gliederung erstellen",
          "text": "Erstelle eine detaillierte Gliederung für einen Blogartikel zum Thema: [Thema]\n\nZielgruppe: [Zielgruppe beschreiben]\nTonalität: [z. B. informativ, locker, autoritativ]\nAngestrebte Wortanzahl: [z. B. 1500 Wörter]\n\nBehalte bei: einen packenden Titel, eine fesselnde Einleitung, 4–6 Hauptabschnitte mit Unterpunkten sowie ein Fazit mit klarem Call-to-Action."
        },
        {
          "title": "Artikeleinleitung optimieren",
          "text": "Schreibe die Einleitung dieses Artikels so um, dass sie Leser sofort fesselt. Die aktuelle Einleitung:\n\n[Einleitung hier einfügen]\n\nDer Artikel handelt von: [Thema]\nZielgruppe: [Zielgruppe beschreiben]\n\nFormuliere die neue Einleitung spannend, präzise und unter 100 Wörtern. Biete 3 Variationen an."
        },
        {
          "title": "Blogartikel-Ideen generieren",
          "text": "Generiere 10 Blogartikel-Ideen für [Blog/Marke beschreiben] mit der Zielgruppe [Zielgruppe].\n\nSchwerpunkt: [z. B. Produktivität, SaaS-Marketing, Finanzen]\n\nGib für jede Idee an: einen Arbeitstitel, den zentralen Aufhänger/Hook und für wen sie am nützlichsten ist. Priorisiere Themen, die konkret, umsetzbar und für SEO aussichtsreich sind."
        },
        {
          "title": "Überzeugendes Fazit schreiben",
          "text": "Schreibe ein Fazit für diesen Blogartikel:\n\nThema: [Thema]\nBehandelte Kernpunkte: [Hauptpunkte zusammenfassen]\nGewünschte Handlung der Leser: [z. B. abonnieren, teilen, Produkt testen]\n\nDas Fazit sollte die wichtigste Kernaussage zusammenfassen, den Text harmonisch abrunden und mit einem klaren, natürlichen Call-to-Action enden."
        }
      ]
    },
    {
      "cat": "Social Media",
      "prompts": [
        {
          "title": "Twitter/X-Thread verfassen",
          "text": "Schreibe einen Twitter/X-Thread über: [Thema]\n\nZielgruppe: [beschreiben]\nZiel: [z. B. informieren, Traffic generieren, Autorität aufbauen]\nAnzahl der Tweets: [z. B. 8–10]\n\nStarte mit einem starken Hook-Tweet, unterteile das Thema in verständliche Abschnitte und schließe mit einem klaren Call-to-Action. Halte jeden Tweet unter 280 Zeichen. Nutze Absätze für gute Lesbarkeit."
        },
        {
          "title": "LinkedIn-Beitrag schreiben",
          "text": "Schreibe einen LinkedIn-Post über: [Thema oder Erfahrung]\n\nTonalität: [z. B. nachdenklich, direkt, Story-basiert]\nZiel: [z. B. Lesson Learned teilen, Kommentare anregen, Glaubwürdigkeit aufbauen]\n\nStarte mit einem einzeiligen Hook, der zum Weiterlesen animiert. Verwende kurze Absätze. Bringe eine persönliche Perspektive oder Erkenntnis ein. Ende mit einer Frage für mehr Interaktion. Zielumfang: 150–250 Wörter."
        },
        {
          "title": "Instagram-Caption verfassen",
          "text": "Schreibe eine Instagram-Bildunterschrift (Caption) für einen Post über: [Bild/Thema beschreiben]\n\nMarkenstimme: [z. B. verspielt, inspirierend, minimalistisch]\nZiel: [z. B. Saves steigern, Profilbesuche fördern, Produkt verkaufen]\n\nEnthalten sein sollten: ein ansprechender erster Satz, 2–3 Sätze Begleittext, ein Call-to-Action und 5–10 relevante Hashtags."
        },
        {
          "title": "Social-Media-Redaktionsplan",
          "text": "Erstelle einen 2-wöchigen Social-Media-Redaktionsplan für [Marke/Creator] auf den Plattformen [Plattformen, z. B. LinkedIn + Instagram].\n\nNische: [Themenbereich]\nZiel: [z. B. Follower aufbauen, Traffic steigern, Produktlaunch]\nPosting-Frequenz: [z. B. 3x pro Woche je Plattform]\n\nGib für jeden Beitrag an: Datum, Plattform, Beitragsformat (z. B. Tipp, Story, Promo) und eine einzeilige Beschreibung der Idee."
        }
      ]
    },
    {
      "cat": "E-Mail",
      "prompts": [
        {
          "title": "Cold-Outreach-E-Mail verfassen",
          "text": "Schreibe eine Kaltakquise-E-Mail (Cold Email) für folgende Situation:\n\nAbsender: [dein Name/Rolle/Unternehmen]\nEmpfänger: [Berufsbezeichnung oder Profil]\nZiel: [z. B. Erstgespräch vereinbaren, Weiterempfehlung erhalten, Partnerschaft anbahnen]\nKontext: [relevante Details zum Anlass der Kontaktaufnahme]\n\nMaximal 150 Wörter. Beginne mit konkretem Mehrwert oder Relevanz – nicht mit einer Selbstdarstellung. Schließe mit einem unkomplizierten, niedrigschwelligen CTA ab."
        },
        {
          "title": "Newsletter-Einleitung schreiben",
          "text": "Schreibe eine Einleitung für die aktuelle Ausgabe unseres E-Mail-Newsletters.\n\nName des Newsletters / Thema: [beschreiben]\nIn dieser Ausgabe geht es um: [Hauptthema oder Schwerpunkt]\nZielgruppe: [Abonnenten beschreiben]\nTonalität: [z. B. herzlich, humorvoll, prägnant]\n\nDie Einleitung sollte persönlich wirken, neugierig auf die Inhalte machen und zum Weiterlesen anregen. Halte sie unter 80 Wörtern."
        },
        {
          "title": "Follow-up-E-Mail schreiben",
          "text": "Schreibe eine Follow-up-E-Mail für folgende Situation:\n\nUrsprünglicher Kontakt: [erste Interaktion beschreiben – z. B. Verkaufsgespräch, Vorstellungsgespräch, Angebot versendet]\nZeit seit dem letzten Kontakt: [z. B. 5 Tage]\nZiel des Follow-ups: [z. B. Entscheidung einholen, Reaktivierung, nächste Schritte abstimmen]\n\nFreundlich, aber direkt. Nimm kurz Bezug auf das vorherige Gespräch. Mache das Antworten so einfach wie möglich. Unter 100 Wörtern bleiben."
        },
        {
          "title": "Heikle E-Mail formulieren",
          "text": "Hilf mir, eine professionelle E-Mail für eine heikle Situation zu schreiben:\n\nSituation: [beschreiben – z. B. Entschuldigung für Fristversäumnis, Absage einer Anfrage, Überbringen schlechter Nachrichten]\nEmpfänger: [Beziehung beschreiben – z. B. Kunde, Vorgesetzter, Kollege]\nGewünschtes Ergebnis: [was nach dem Lesen erreicht werden soll]\n\nSei ehrlich, übernimm wo nötig Verantwortung und wahre einen konstruktiven Ton. Vermeide Rechtfertigungen oder übertriebene Entschuldigungen."
        }
      ]
    },
    {
      "cat": "Copywriting",
      "prompts": [
        {
          "title": "Produktbeschreibung verfassen",
          "text": "Schreibe eine überzeugende Produktbeschreibung für:\n\nProduktname: [Name]\nFunktion: [beschreiben]\nHauptmerkmale: [3–5 Merkmale auflisten]\nZielkunde: [beschreiben]\nTonalität: [z. B. hochwertig, verspielt, technisch]\n\nStelle Kundennutzen vor Produkteigenschaften. Beginne mit dem größten Vorteil. Halte den Text unter 120 Wörtern und ende mit einem dezenten Kaufanreiz."
        },
        {
          "title": "Landingpage Headline & Subline",
          "text": "Schreibe 5 Kombinationen aus Hauptüberschrift (Headline) und Unterzeile (Subline) für eine Landingpage.\n\nProdukt/Dienstleistung: [beschreiben]\nZielgruppe: [beschreiben]\nZentrales Nutzenversprechen: [welches Problem wird gelöst oder welches Ergebnis erzielt]\nTonalität: [z. B. selbstbewusst, vertrauenerweckend, geistreich]\n\nJede Headline sollte klar, präzise und nutzenorientiert sein. Die Subline soll den Gedanken vertiefen, mögliche Einwände entkräften oder Glaubwürdigkeit schaffen."
        },
        {
          "title": "Call-to-Action-Varianten erstellen",
          "text": "Formuliere 10 verschiedene Call-to-Action-Button-Texte (CTA) für:\n\nProdukt/Dienstleistung: [beschreiben]\nZiel des CTA: [z. B. kostenlose Testphase starten, Demo buchen, Leitfaden herunterladen]\nTonalität: [z. B. handlungsorientiert, unverbindlich, neugierig machend]\n\nVariiere den Blickwinkel – teste Dringlichkeit, Nutzenfokus, Neugier und Social Proof. Halte jede Option wenn möglich unter 6 Wörtern."
        },
        {
          "title": "An die Brand Voice anpassen",
          "text": "Schreibe den folgenden Text passend zu unserer Markenstimme (Brand Voice) um.\n\nUrsprünglicher Text:\n[Text hier einfügen]\n\nUnsere Markenstimme: [beschreiben – z. B. selbstbewusst aber nahbar, kompetent ohne Fachchinesisch, herzlich und geistreich]\nZielgruppe: [beschreiben]\n\nDie Kernaussage muss erhalten bleiben, passe jedoch Tonfall, Wortwahl und Satzstruktur an. Zeige einen Vorher-/Nachher-Vergleich."
        }
      ]
    },
    {
      "cat": "Lektorat & Überarbeitung",
      "prompts": [
        {
          "title": "Komplexen Text vereinfachen",
          "text": "Vereinfache den folgenden Text so, dass er für Laien ohne Vorwissen leicht verständlich ist.\n\n[Text hier einfügen]\n\nVermeide Fachjargon. Verwende kurze Sätze. Ersetze technische Fachbegriffe durch einfache Sprache. Die ursprüngliche Bedeutung und alle Kerninformationen müssen erhalten bleiben. Ziel ist eine allgemein verständliche Sprache."
        },
        {
          "title": "Tonfall und Stil anpassen",
          "text": "Überarbeite den folgenden Text, um Ton und Stil zu verbessern.\n\nAktueller Text:\n[Text hier einfügen]\n\nGewünschter Tonfall: [z. B. selbstbewusster, weniger formell, wärmer, prägnanter]\nInhalt und Fakten müssen unverändert bleiben. Zeige die überarbeitete Fassung und erkläre kurz die wichtigsten Änderungen."
        },
        {
          "title": "Auf Wortanzahl kürzen",
          "text": "Kürze den folgenden Text auf ca. [Ziel-Wortanzahl] Wörter, ohne die Kernaussage oder den Sinn zu verändern.\n\n[Text hier einfügen]\n\nKürze vorrangig: Füllwörter, redundante Sätze und ausschweifende Erklärungen. Behalte die wichtigsten Kernaussagen, prägnantesten Beispiele und treffendsten Formulierungen bei."
        },
        {
          "title": "Korrekturlesen & optimieren",
          "text": "Lies den folgenden Text Korrektur und schlage Verbesserungen vor.\n\n[Text hier einfügen]\n\nPrüfe auf: Rechtschreib- und Grammatikfehler, holprige Formulierungen, unklare Sätze und uneinheitlichen Tonfall. Gib die korrigierte Version aus, gefolgt von einer kurzen Übersicht der Änderungen und deren Begründung."
        }
      ]
    },
    {
      "cat": "Kreatives Schreiben",
      "prompts": [
        {
          "title": "Einstieg für Kurzgeschichte schreiben",
          "text": "Schreibe die ersten 3 Absätze einer Kurzgeschichte basierend auf folgenden Details:\n\nGenre: [z. B. Gegenwartsliteratur, Science-Fiction, Thriller]\nSchauplatz: [Ort und Zeit beschreiben]\nHauptfigur: [kurze Beschreibung]\nAusgangssituation oder Konflikt: [beschreiben]\nStimmung/Atmosphäre: [z. B. düster, melancholisch, hoffnungsvoll]\n\nBeginne mitten im Geschehen (in medias res) oder mit einem prägnanten Moment. Fessle den Leser sofort. Vermeide lange Vorreden."
        },
        {
          "title": "Figurendialog verfassen",
          "text": "Schreibe eine Dialogszene zwischen zwei Figuren:\n\nFigur A: [Name, Kurzbeschreibung, Absicht in dieser Szene]\nFigur B: [Name, Kurzbeschreibung, Absicht in dieser Szene]\nSituation: [Ort und Geschehen beschreiben]\nUnterschwellige Spannung: [worum es wirklich geht oder was ungesagt bleibt]\n\nGestalte den Dialog lebendig und aufschlussreich. Jede Figur sollte eine eigene Stimme haben. Arbeite mit Subtext – was gemeint ist im Vergleich zu dem, was tatsächlich ausgesprochen wird."
        },
        {
          "title": "Metaphern und Analogien finden",
          "text": "Finde 8 originelle Metaphern oder Analogien, um folgendes Konzept zu erklären:\n\nKonzept: [Idee, Prozess oder Gegenstand beschreiben]\nZielgruppe: [wer es verstehen soll]\nKontext: [Einsatzbereich – z. B. Blogartikel, Rede, Produkterklärung]\n\nWähle eine gute Mischung: bildhafte, emotionale und humorvolle Vergleiche. Vermeide Klischees. Ergänze jede Metapher um eine einzeilige Erklärung, in welchem Kontext sie am besten funktioniert."
        },
        {
          "title": "In einem anderen Stil umschreiben",
          "text": "Schreibe den folgenden Text im Stil von [Name des Autors oder Stilbeschreibung, z. B. Ernest Hemingway, viktorianischer Roman, Gen-Z-Social-Media-Post] um.\n\nUrsprünglicher Text:\n[Text hier einfügen]\n\nFange den Tonfall, den Satzrhythmus, den Wortschatz und die charakteristischen Strukturen dieses Stils ein. Die Kernaussage muss erhalten bleiben. Gib ausschließlich die umgeschriebene Fassung aus."
        }
      ]
    }
  ],
  "marketing": [
    {
      "cat": "Kampagnenplanung",
      "prompts": [
        {
          "title": "Marketingkampagne planen",
          "text": "Hilf mir bei der Planung einer Marketingkampagne für [Produkt/Dienstleistung].\n\nZielgruppe: [beschreiben]\nZiel: [z. B. Leads, Registrierungen, Markenbekanntheit]\nBudgetrahmen: [Betrag]\nZeitplan: [Dauer]\n\nSkizziere die Kampagnenstrategie, Kernbotschaften, Kanäle, Meilensteine und Erfolgsmetriken (KPIs)."
        },
        {
          "title": "Content-Kalender erstellen",
          "text": "Erstelle einen [30/60/90]-Tage-Content-Plan für [Marke/Produkt].\n\nZielgruppe: [beschreiben]\nKanäle: [z. B. LinkedIn, E-Mail, Blog, Instagram]\nThemenfelder: [auflisten]\nGeplante Posting-Frequenz: [z. B. 3x pro Woche]\n\nBerücksichtige Beitragsformate, konkrete Themen und einen empfohlenen Veröffentlichungszeitplan."
        },
        {
          "title": "Zielgruppen-Persona erstellen",
          "text": "Erstelle eine detaillierte Buyer Persona für [Produkt/Dienstleistung].\n\nBisherige Erkenntnisse: [aktuelle Kunden oder Annahmen beschreiben]\n\nBehandle: Demografie, Berufsbezeichnung, Ziele, Pain Points (Herausforderungen), Einwände, bevorzugte Kanäle und den Entscheidungsprozess beim Kauf."
        },
        {
          "title": "Kampagnen-Post-Mortem-Analyse",
          "text": "Hilf mir bei der Nachbereitung (Post-Mortem) einer Marketingkampagne.\n\nKampagnenziel: [z. B. 500 Leads generieren]\nTatsächliches Ergebnis: [was wurde erreicht]\nGenutzte Kanäle: [auflisten]\nWichtigste Kennzahlen: [CTR, Conversion-Rate, CAC usw.]\n\nAnalysiere, was funktioniert hat, was nicht, die Ursachen dafür und konkrete Handlungsempfehlungen für die nächste Kampagne."
        }
      ]
    },
    {
      "cat": "SEO",
      "prompts": [
        {
          "title": "Keyword-Recherche-Briefing",
          "text": "Erstelle ein Briefing zur Keyword-Recherche für [Thema/Produkt].\n\nWebsite: [URL oder Beschreibung]\nZielgruppe: [beschreiben]\nWettbewerber: [falls bekannt auflisten]\n\nSchlage Fokus-Keywords, Long-Tail-Varianten, Suchintentionen (informational, kommerziell, transaktional) und Content-Chancen für die jeweiligen Themencluster vor."
        },
        {
          "title": "SEO-Meta-Tags verfassen",
          "text": "Schreibe SEO-optimierte Title-Tags und Meta-Descriptions für folgende Seite.\n\nSeitenthema: [beschreiben]\nFokus-Keyword: [Keyword]\nURL: [Seiten-URL]\nWortanzahl der Seite: [ungefähr]\n\nGib jeweils 3 Title-Tag-Optionen (unter 60 Zeichen) und 3 Meta-Description-Optionen (unter 155 Zeichen) an. Kennzeichne die Platzierung des Fokus-Keywords."
        },
        {
          "title": "Content-Gap-Analyse",
          "text": "Führe eine Content-Gap-Analyse für [Website/Marke] in der Branche [Branche] durch.\n\nBestehende Themen unseres Contents: [auflisten oder beschreiben]\nWichtigste Wettbewerber: [auflisten]\nZielgruppe: [beschreiben]\n\nIdentifiziere Themen und Keywords, für die Wettbewerber ranken, die uns jedoch fehlen, und priorisiere sie nach Traffic-Potenzial und geschäftlicher Relevanz."
        },
        {
          "title": "Interne Verlinkungsstrategie",
          "text": "Erstelle eine Strategie für die interne Verlinkung für einen [Blog/eine Website] zum Thema [Thema].\n\nWichtige bestehende Seiten: [Pillar Pages oder zentrale URLs auflisten]\nZiel: [z. B. Rankings für X verbessern, Absprungrate senken, Linkjuice verteilen]\n\nSchlage passende Ankertexte vor, welche Seiten aufeinander verlinken sollten und wie die Linkstruktur die thematische Autorität stärkt."
        }
      ]
    },
    {
      "cat": "Werbeanzeigen",
      "prompts": [
        {
          "title": "Google-Ads-Texte verfassen",
          "text": "Schreibe Anzeigentexte für Google Ads für [Produkt/Dienstleistung].\n\nFokus-Keyword: [Keyword]\nLandingpage-URL: [URL]\nHauptvorteil: [zentrales Nutzenversprechen]\nZielgruppe: [wer die Anzeige sehen wird]\n\nErstelle 3 Anzeigentitel (max. 30 Zeichen) und 2 Textzeilen (max. 90 Zeichen) für eine responsive Suchanzeige. Hebe Vorteile hervor, integriere einen CTA und treffe die Suchintention des Keywords."
        },
        {
          "title": "Facebook-Ads-Varianten erstellen",
          "text": "Erstelle 3 Varianten für Facebook-Werbeanzeigen für [Produkt/Dienstleistung].\n\nZielgruppe: [Demografie und Interessen beschreiben]\nKampagnenziel: [z. B. Klicks, Conversions, Markenbekanntheit]\nZentrales Angebot / Hook: [beschreiben]\n\nFormuliere für jede Variante: primären Text (2–3 Sätze), Headline (unter 40 Zeichen) und Beschreibung (unter 25 Zeichen). Nutze jeweils einen anderen Aufhänger – z. B. Pain Point, Social Proof und Angebotsfokus."
        },
        {
          "title": "A/B-Test-Ideen für Landingpage",
          "text": "Generiere A/B-Test-Ideen für die Landingpage von [Produkt/Dienstleistung].\n\nAktuelle Conversion-Rate: [falls bekannt]\nPrimärer CTA: [z. B. Kostenlos registrieren]\nHaupt-Traffic-Quelle: [z. B. Google Ads, Facebook]\nSeitenziel: [beschreiben]\n\nListe 8–10 konkrete, wirkungsvolle Testideen auf für: Headline, CTA-Text, Social Proof, Layout und Gestaltung des Angebots. Priorisiere nach erwarteter Wirkung und Umsetzungsaufwand."
        },
        {
          "title": "Targeting-Strategie für Paid Ads",
          "text": "Hilf mir bei der Entwicklung einer Zielgruppen-Targeting-Strategie für bezahlte Werbung für [Produkt/Dienstleistung].\n\nPlattform: [z. B. Meta, Google, LinkedIn]\nBudget: [monatlich]\nZiel: [z. B. Leads, Käufe, Registrierungen]\nIdealer Kunde: [beschreiben]\n\nEmpfiehl: Targeting-Optionen für kalte Zielgruppen, Retargeting-Segmente, Lookalike-Strategie und Ausschlüsse. Begründe jede Empfehlung."
        }
      ]
    },
    {
      "cat": "Analysen & Kennzahlen",
      "prompts": [
        {
          "title": "Traffic-Rückgang analysieren",
          "text": "Hilf mir bei der Ursachenforschung für einen Traffic-Rückgang auf [Website/Seite].\n\nDetails zum Einbruch: [z. B. organischer Traffic in den letzten 2 Wochen um 30 % gesunken]\nZeitpunkt des Rückgangs: [Datum]\nBetroffene Seiten: [welche Seiten oder die gesamte Website]\nKürzliche Änderungen: [Website-Änderungen, Google-Core-Updates, Weiterleitungen usw.]\n\nNenne die wahrscheinlichsten Ursachen nach Relevanz geordnet sowie konkrete Schritte zur Diagnose und Behebung für jeden Punkt."
        },
        {
          "title": "Marketing-Funnel analysieren",
          "text": "Analysiere diesen Marketing-Funnel und zeige auf, wo wir Nutzer verlieren.\n\nFunnel-Schritte und Conversion-Rates:\n[z. B. Besucher > Landingpage: 100 %]\n[Landingpage > Registrierung: 12 %]\n[Registrierung > Aktivierung: 40 %]\n[Aktivierung > Kauf: 18 %]\n\nVergleiche diese Werte mit typischen Branchenstandards, hebe die größten Absprungpunkte hervor und schlage konkrete Optimierungen für jede Phase vor."
        },
        {
          "title": "Monatlichen Marketingbericht zusammenfassen",
          "text": "Verfasse eine prägnante Zusammenfassung für den monatlichen Marketingbericht für [Monat].\n\nWichtigste Kennzahlen:\n- Traffic: [Zahl, im Vergleich zum Vormonat]\n- Leads: [Zahl, im Vergleich zum Vormonat]\n- CAC (Kundenakquisekosten): [Betrag]\n- Conversion-Rate: [%]\n- Bester Kanal: [Kanal]\n- Größte Erfolge: [auflisten]\n- Herausforderungen: [auflisten]\n\nSchreibe eine Executive Summary (3–4 Sätze), einen Abschnitt zu den Highlights, einen zu den Herausforderungen sowie 3 klare Handlungsschritte für den kommenden Monat."
        },
        {
          "title": "Attributionsmodelle vergleichen",
          "text": "Vergleiche Attributionsmodelle für ein [B2B/B2C]-Unternehmen, das [Produkt/Dienstleistung] vertreibt.\n\nUnsere wichtigsten Marketingkanäle: [z. B. Paid Search, organische Suche, E-Mail, Social Media]\nDurchschnittlicher Verkaufszyklus: [z. B. 2 Wochen / 3 Monate]\nAktuelles Attributionsmodell: [z. B. Last Click]\n\nErkläre, wie First-Touch-, Last-Touch-, lineare, Time-Decay- und datengetriebene Modelle unseren Funnel jeweils bewerten würden, und empfiehl das passendste Modell mit Begründung."
        }
      ]
    },
    {
      "cat": "Branding & Markenstrategie",
      "prompts": [
        {
          "title": "Brand-Positioning-Statement verfassen",
          "text": "Schreibe ein Positionierungs-Statement für [Unternehmen/Produkt].\n\nWas wir tun: [beschreiben]\nZielgruppe: [beschreiben]\nHauptnutzen: [zentraler Mehrwert, den wir bieten]\nDifferenzierung: [was uns von Alternativen unterscheidet]\nWettbewerber: [wichtigste auflisten]\n\nNutze das Format: Für [Zielgruppe], die [Bedarf/Problem], ist [Marke] die [Kategorie], die [Nutzen/Vorteil], weil [Begründung/Beweis]. Biete anschließend 2 alternative Formulierungen mit unterschiedlichen Schwerpunkten an."
        },
        {
          "title": "Wettbewerbsdifferenzierung herausarbeiten",
          "text": "Hilf mir klar zu formulieren, wie sich [Produkt/Unternehmen] von Mitbewerbern abhebt.\n\nUnser Produkt: [beschreiben]\nWichtigste Konkurrenten: [mit Kurzbeschreibung auflisten]\nUnsere Kernstärken: [auflisten]\nKundenfeedback-Muster: [was Kunden besonders schätzen]\n\nArbeite unsere stärksten Alleinstellungsmerkmale (USPs) heraus, zeige, welche am schwersten kopierbar sind, und wie wir sie im Marketingtext klar kommunizieren. Weise auf Aussagen hin, die noch zu generisch wirken und geschärft werden müssen."
        },
        {
          "title": "Brand-Voice-Guidelines erstellen",
          "text": "Erstelle Richtlinien für die Markenstimme (Brand Voice) von [Unternehmen/Produkt].\n\nWas wir tun: [beschreiben]\nZielgruppe: [beschreiben]\nGewünschte Markenpersönlichkeit: [z. B. kompetent aber nahbar, mutig, herzlich]\nPersönlichkeitsmerkmale, die wir vermeiden wollen: [z. B. steif, voller Fachjargon]\nBeispieltexte, die uns gefallen: [hier einfügen]\n\nDefiniere 4–5 Attribute der Tonalität, erkläre jedes Attribut mit einer Beschreibung, Do's & Don'ts sowie einem Vorher-/Nachher-Beispiel."
        },
        {
          "title": "Slogans & Claims brainstormen",
          "text": "Brainstorme Slogans und Claims für [Unternehmen/Produkt].\n\nWas wir tun: [in einem Satz beschreiben]\nZielgruppe: [beschreiben]\nHauptnutzen: [zentrales Nutzenversprechen]\nTonalität: [z. B. prägnant, nachdenklich, selbstbewusst, verspielt]\nBisherige Slogans, die uns nicht gefallen, und warum: [optional]\n\nGeneriere 15 Slogan-Ideen. Gruppiere sie nach Ansatz: nutzenorientiert, emotionsorientiert und herausfordernd (Challenger). Kennzeichne deine Top 3 Favoriten mit einer kurzen Begründung."
        }
      ]
    },
    {
      "cat": "Growth & Wachstum",
      "prompts": [
        {
          "title": "Empfehlungsprogramm konzipieren",
          "text": "Entwirf ein Empfehlungsprogramm (Referral-Programm) für [Produkt/Dienstleistung].\n\nGeschäftsmodell: [z. B. SaaS-Abonnement, E-Commerce]\nAktuelle Nutzerbasis: [ungefähre Größe]\nDurchschnittlicher Customer Lifetime Value (LTV): [Betrag]\nZiel-Kundenakquisekosten (CAC): [Zielwert]\n\nSchlage 3 Modelle für das Empfehlungsprogramm mit unterschiedlichen Anreizmechanismen vor (z. B. beidseitige Belohnung, Guthaben, Barauszahlung). Beschreibe für jedes Modell: Mechanismus, Empfehlungsablauf, Belohnungsstruktur und den erwarteten Einfluss auf den viralen Koeffizienten."
        },
        {
          "title": "Retention-E-Mail-Sequenz verfassen",
          "text": "Schreibe eine E-Mail-Sequenz zur Nutzerbindung (Retention) für Nutzer, die sich bei [Produkt] registriert haben, aber seit [X Tagen] inaktiv sind.\n\nProdukt: [Funktion beschreiben]\nHäufiger Grund für Inaktivität: [falls bekannt]\nTonalität: [z. B. freundlich, direkt]\nAnzahl der E-Mails: [z. B. 3-teilige E-Mail-Sequenz]\n\nErstelle für jede E-Mail: Betreffzeile, Vorschautext, E-Mail-Text und CTA. Setze einen Abstand von [X] Tagen zwischen den Mails an. Fokussiere dich auf Reaktivierung durch echten Mehrwert statt reiner Rabatte."
        },
        {
          "title": "Onboarding-Flow optimieren",
          "text": "Hilf mir, den Onboarding-Prozess für [Produkt] zu optimieren.\n\nAktuelle Onboarding-Schritte: [auflisten]\nGrößter Absprungpunkt: [wo Nutzer abbrechen]\nZiel-Time-to-Value: [z. B. Nutzer erlebt Mehrwert innerhalb von 5 Minuten]\nZentrales Aktivierungsereignis: [z. B. erstes Projekt erstellt, Teammitglied eingeladen]\n\nIdentifiziere Reibungspunkte im aktuellen Ablauf, schlage konkrete Verbesserungen für jeden Schritt vor und skizziere ein schlankes Mindest-Onboarding (Minimum Viable Onboarding), das Nutzer am schnellsten zur Aktivierung führt."
        },
        {
          "title": "Viral-Loop-Strategie entwickeln",
          "text": "Entwirf eine Viral-Loop-Strategie für [Produkt/Dienstleistung].\n\nProduktkategorie: [z. B. Kollaborations-Tool, Marktplatz, Social App]\nAktueller Wachstumsmechanismus: [wie Nutzer uns heute finden]\nNatürliche Teilungsmomente: [wann möchten Nutzer das Produkt natürlicherweise teilen?]\nZiel für den viralen Koeffizienten: [z. B. K > 1]\n\nSchlage 2–3 Konzepte für virale Schleifen vor. Beschreibe jeweils: Auslöser (Trigger), Sharing-Mechanismus, Anreiz und den Conversion-Ablauf für eingeladene Nutzer. Schätze den realistischen viralen Koeffizienten für jeden Ansatz ein."
        }
      ]
    }
  ],
  "job": [
    {
      "cat": "Lebenslauf",
      "prompts": [
        {
          "title": "Lebenslauf-Stichpunkte überarbeiten",
          "text": "Formuliere diese Stichpunkte meines Lebenslaufs überzeugender, wirkungsvoller und ergebnisorientierter. Verwende aktive Verben und beziffere Erfolge mit Kennzahlen, wo immer möglich:\n\n[Stichpunkte hier einfügen]\n\nAngestrebte Stelle: [Berufsbezeichnung]\nBranche: [Branche]"
        },
        {
          "title": "Lebenslauf an Stellenanzeige anpassen",
          "text": "Hier sind mein aktueller Lebenslauf und eine Stellenanzeige, auf die ich mich bewerben möchte. Identifiziere Lücken, schlage vor, welche Fähigkeiten und Keywords ergänzt oder hervorgehoben werden sollten, und passe die relevantesten Abschnitte an das Anforderungsprofil an.\n\nMein Lebenslauf:\n[Lebenslauf hier einfügen]\n\nStellenanzeige:\n[Stellenanzeige hier einfügen]"
        },
        {
          "title": "Kurzprofil für den Lebenslauf verfassen",
          "text": "Schreibe ein überzeugendes Kurzprofil (Professional Summary) für meinen Lebenslauf. Es sollte 3–4 Sätze umfassen, meine Kernkompetenzen und Erfahrungen hervorheben und genau auf meine Zielposition abgestimmt sein.\n\nMein Hintergrund: [Jahre an Erfahrung, Kernfähigkeiten, besondere Erfolge]\nAngestrebte Rolle: [Berufsbezeichnung und Branche]"
        },
        {
          "title": "Erfolge messbar machen",
          "text": "Hilf mir, diese Erfolge im Lebenslauf mit konkreten Zahlen zu untermauern und schlagkräftiger zu formulieren. Wenn ich keine genauen Zahlen genannt habe, schlage Metriken vor, die ich recherchieren oder schätzen kann:\n\n[Erfolge hier einfügen]\n\nMeine Position: [Berufsbezeichnung]\nUnternehmensgröße / Branche: [Details]"
        }
      ]
    },
    {
      "cat": "Anschreiben",
      "prompts": [
        {
          "title": "Bewerbungsschreiben verfassen",
          "text": "Schreibe ein überzeugendes Anschreiben für diese Bewerbung. Gliedere es in 3 Absätze: warum mich das Unternehmen begeistert, was ich für die Stelle mitbringe und ein klarer Schlusssatz mit Gesprächsaufforderung.\n\nMein Hintergrund: [kurze Zusammenfassung]\nStellenbezeichnung: [Titel]\nUnternehmen: [Name des Unternehmens]\nWichtigste Anforderungen: [3–5 Anforderungen aus der Anzeige einfügen]\nKonkreter Grund für mein Interesse an diesem Unternehmen: [dein Grund]"
        },
        {
          "title": "Anschreiben für Quereinstieg",
          "text": "Schreibe ein Anschreiben für einen beruflichen Quereinstieg bzw. Branchenwechsel. Gehe offen auf den Wechsel ein, verbinde meine übertragbaren Fähigkeiten (Transferable Skills) mit der neuen Stelle und vermittle echte Motivation für den Neuanfang.\n\nMein bisheriger Werdegang: [aktueller Bereich und Erfahrung]\nAngestrebte Rolle: [neue Berufsbezeichnung und Bereich]\nMeine übertragbaren Kompetenzen: [auflisten]\nGrund für den Wechsel: [dein Grund]"
        },
        {
          "title": "Antrag auf internen Wechsel",
          "text": "Schreibe ein Schreiben für einen internen Wechsel in ein anderes Team oder eine neue Rolle innerhalb meines Unternehmens. Betone mein internes Unternehmenswissen, meine bisherigen Erfolge und warum dieser Schritt sowohl für mich als auch für das Unternehmen ein Gewinn ist.\n\nMeine aktuelle Position: [Titel und Team]\nGewünschte Position: [Titel und Team]\nZugehörigkeit zum Unternehmen: [Dauer]\nWichtigste bisherige Beiträge: [2–3 Erfolge auflisten]\nGrund für den Wechsel: [dein Grund]"
        },
        {
          "title": "Nachfass-E-Mail zur Bewerbung",
          "text": "Schreibe eine kurze, professionelle Nachfass-E-Mail nach dem Absenden einer Bewerbung. Sie soll mein anhaltendes Interesse bekunden, höflich und prägnant formuliert sein und keinesfalls aufdringlich wirken.\n\nStellenbezeichnung: [Titel]\nUnternehmen: [Name des Unternehmens]\nBewerbungsdatum: [Datum]\nName der Ansprechperson / Recruiter (falls bekannt): [Name oder 'Personalabteilung']"
        }
      ]
    },
    {
      "cat": "Interview-Vorbereitung",
      "prompts": [
        {
          "title": "Verhaltensbasierte Fragen üben (STAR-Methode)",
          "text": "Hilf mir bei der Vorbereitung von Antworten nach der STAR-Methode (Situation, Task, Action, Result) auf verhaltensbezogene Interviewfragen für diese Rolle. Leite mich bei jeder Frage durch die Struktur:\n\nPosition, für die ich interviewt werde: [Berufsbezeichnung]\nBranche: [Branche]\nMein Werdegang: [kurze Zusammenfassung]\n\nBeginne mit diesen typischen Fragen:\n1. Erzähle von einer Situation, in der du einen Konflikt am Arbeitsplatz gelöst hast.\n2. Beschreibe ein Projekt, das du von Anfang bis Ende geleitet hast.\n3. Berichte von einem Misserfolg und was du daraus gelernt hast."
        },
        {
          "title": "Technisches Interview vorbereiten",
          "text": "Ich habe ein technisches Vorstellungsgespräch für diese Stelle. Erstelle einen gezielten Lernplan und liste die wahrscheinlichsten Themen und Fragetypen auf, auf die ich mich vorbereiten sollte. Binde Beispielfragen ein und erkläre, was eine herausragende Antwort auszeichnet.\n\nPosition: [Berufsbezeichnung]\nUnternehmenstyp: [Startup / Großkonzern / Tech-Konzern]\nWichtigste Skills laut Stellenanzeige: [hier einfügen]\nMein aktuelles Kenntnisniveau: [Einsteiger / Fortgeschritten / Experte]\nZeit bis zum Interview: [Tage/Wochen]"
        },
        {
          "title": "Eigene Fragen im Vorstellungsgespräch",
          "text": "Erstelle eine Liste durchdachter, strategischer Fragen, die ich am Ende des Vorstellungsgesprächs stellen kann. Berücksichtige Fragen zur Rolle, Teamkultur, Entwicklungsmöglichkeiten und Erfolgsmessung. Vermeide Standardfloskeln.\n\nPosition: [Berufsbezeichnung]\nUnternehmen: [Name des Unternehmens]\nInterview-Runde: [Erstgespräch / Endrunde / Fachbereich / Panel-Interview]\nWas ich bereits über das Unternehmen weiß: [kurze Notizen]"
        },
        {
          "title": "Leitfaden für die Gehaltsverhandlung",
          "text": "Schreibe einen Gesprächsleitfaden für die Gehaltsverhandlung nach Erhalt eines Jobangebots. Der Ton sollte selbstbewusst und kooperativ sein, meine Gehaltsvorstellung mit Marktdaten und meiner Erfahrung begründen und das Gespräch positiv gestalten.\n\nErhaltenes Angebot: [Gehaltsangebot]\nMein Wunschgehalt: [Wunschbetrag]\nMeine Erfahrung: [Berufsjahre und Kernqualifikationen]\nPosition: [Berufsbezeichnung]\nStandort / Remote: [Standort]"
        }
      ]
    },
    {
      "cat": "LinkedIn",
      "prompts": [
        {
          "title": "LinkedIn-Profil-Slogan optimieren",
          "text": "Formuliere 5 Varianten für den Profil-Slogan (Headline) meines LinkedIn-Profils. Jede Version sollte suchmaschinen- und recruiter-optimierte Keywords enthalten, mein Nutzenversprechen klar vermitteln und unter 220 Zeichen bleiben.\n\nMeine aktuelle Rolle: [Titel]\nBranche: [Branche]\nKernkompetenzen: [3–5 Skills auflisten]\nWofür ich wahrgenommen werden möchte: [kurze Beschreibung]\nOffen für Angebote (Open to Work): [ja / nein]"
        },
        {
          "title": "LinkedIn-Profil-Info (About) verfassen",
          "text": "Schreibe den Info-Bereich (About-Sektion) für mein LinkedIn-Profil. Schreibe aus der Ich-Perspektive, beginne mit einem starken Aufhänger, stelle meine Erfahrung und Kernkompetenzen dar und ende mit meinen Zielen oder einer Kontaktmöglichkeit. Umfang: 250–350 Wörter.\n\nMein beruflicher Hintergrund: [Zusammenfassung der Erfahrung]\nKernkompetenzen und Fachwissen: [auflisten]\nBesondere Erfolge: [1–3 Highlights]\nWonach ich suche: [Rollen, Chancen oder Kooperationen]"
        },
        {
          "title": "LinkedIn-Kontaktanfrage verfassen",
          "text": "Schreibe eine kurze, persönliche Nachricht für eine LinkedIn-Kontaktanfrage (unter 300 Zeichen). Sie soll sympathisch wirken, den konkreten Grund für die Vernetzung nennen und nicht sofort Forderungen stellen.\n\nPerson, die ich kontaktiere: [Name und Position]\nGrund für die Anfrage: [gemeinsames Interesse, gemeinsame Kontakte, Wertschätzung ihrer Arbeit usw.]\nMein Hintergrund: [einzeilige Kurzbeschreibung zu mir]"
        },
        {
          "title": "LinkedIn-Post über Karriere-Learning",
          "text": "Schreibe einen LinkedIn-Beitrag, der eine wichtige Erkenntnis oder ein Learning aus meiner Karriere teilt. Nutze eine starke erste Zeile als Blickfang, erzähle eine kurze Anekdote oder Beobachtung und schließe mit einer Frage ab, um die Interaktion zu fördern. Vermeide Buzzwords und bleibe authentisch.\n\nThema oder Erkenntnis: [was ich teilen möchte]\nKontext oder Geschichte dazu: [kurze Details]\nZielgruppe: [für wen ich schreibe]\nTonalität: [reflektiert / motivierend / praxisnah]"
        }
      ]
    },
    {
      "cat": "Networking & Kontakte",
      "prompts": [
        {
          "title": "Anfrage für Kennenlerngespräch",
          "text": "Schreibe eine E-Mail mit der Bitte um ein 20-minütiges Informationsgespräch mit jemandem in einer Rolle oder einem Unternehmen, die mich interessieren. Fasse dich kurz, zeige ehrliches Interesse an den Erfahrungen der Person und mache die Zusage so einfach wie möglich.\n\nName: [Name]\nPosition und Unternehmen: [Details]\nWie ich auf die Person aufmerksam wurde: [LinkedIn, gemeinsame Kontakte, Artikel usw.]\nWas ich erfahren möchte: [konkrete Themen oder Fragen]\nMein Hintergrund: [ein Satz über mich]"
        },
        {
          "title": "Dankschreiben nach Networking-Gespräch",
          "text": "Schreibe eine Dankes- und Follow-up-E-Mail, die innerhalb von 24 Stunden nach einem Informationsgespräch oder Networking-Treffen versendet wird. Nimm Bezug auf einen konkreten Gedanken aus dem Gespräch, drücke echte Wertschätzung aus und schlage einen unkomplizierten nächsten Schritt vor.\n\nName der Person: [Name]\nDatum des Gesprächs: [Datum]\nKonkreter Gesprächspunkt: [Thema oder Erkenntnis]\nVorgeschlagener nächster Schritt: [z. B. in Kontakt bleiben, Ressource teilen, in 3 Monaten wieder austauschen]"
        },
        {
          "title": "Elevator Pitch formulieren",
          "text": "Schreibe einen 30-sekündigen Elevator Pitch für Networking-Events oder die Frage: „Was machst du beruflich?“. Er sollte prägnant und einprägsam sein und natürlich zu einem Gespräch überleiten. Erstelle 3 Versionen: formell, ungezwungen und für Quereinsteiger.\n\nMein Hintergrund: [aktuelle/letzte Position und Branche]\nKernkompetenzen oder Fachwissen: [auflisten]\nMein nächstes Ziel: [Ziele oder Art der angestrebten Rolle]"
        },
        {
          "title": "Follow-up-E-Mail nach einer Konferenz",
          "text": "Schreibe eine Follow-up-E-Mail an jemanden, den ich kurz auf einer Konferenz oder einem Branchenevent kennengelernt habe. Beziehe dich darauf, wie wir uns getroffen haben, greife das Gespräch kurz auf und schlage eine Möglichkeit vor, in Kontakt zu bleiben oder das Gespräch fortzusetzen.\n\nName der Person: [Name]\nName der Veranstaltung: [Konferenz oder Event]\nWie wir uns trafen / worüber wir sprachen: [kurze Details]\nVorgeschlagener nächster Schritt: [Telefonat, Kaffee, Ressource teilen usw.]"
        }
      ]
    },
    {
      "cat": "Karriereentwicklung",
      "prompts": [
        {
          "title": "Karriereentwicklungsplan erstellen",
          "text": "Hilf mir bei der Erstellung eines 12-Monats-Karriereentwicklungsplans. Berücksichtige konkrete Ziele, auszubauende Fähigkeiten, Meilensteine und Maßnahmen für jedes Quartal. Gestalte den Plan realistisch und ausgerichtet auf meine Zielposition.\n\nMeine aktuelle Rolle: [Titel und Level]\nZielrolle in 12 Monaten: [Titel und Level]\nWichtigste Lücken, die geschlossen werden müssen: [fehlende Fähigkeiten, Erfahrungen oder Zertifikate]\nVerfügbare Ressourcen: [Kurse, Mentoren, Weiterbildungsbudget usw.]"
        },
        {
          "title": "Gesprächsleitfaden für eine Beförderung",
          "text": "Schreibe einen Leitfaden für ein Gespräch mit meiner Führungskraft über eine Beförderung. Gliedere das Gespräch in: Einstieg, Zusammenfassung meiner Erfolge und deren geschäftliche Auswirkung, klare Bitte um Beförderung und Ausblick auf die gemeinsame Gestaltung der nächsten Schritte. Der Ton sollte selbstbewusst und kooperativ sein.\n\nMein aktueller Titel: [Titel]\nAngestrebter Titel: [Wunschtitel]\nDauer in der aktuellen Position: [Zeitraum]\nWichtigste Erfolge: [3–5 Erfolge mit Wirkung auflisten]\nWarum jetzt: [Timing oder Anlass]"
        },
        {
          "title": "Selbstbeurteilung verfassen",
          "text": "Hilf mir beim Verfassen einer überzeugenden Selbstbeurteilung (Self-Review) für mein jährliches Mitarbeitergespräch. Hebe für jeden Bereich konkrete Erfolge mit messbarer Wirkung hervor, benenne Entwicklungspotenziale ehrlich und verknüpfe meine Arbeit mit den Zielen des Teams und des Unternehmens.\n\nMeine Position: [Titel]\nWichtigste Projekte oder Aufgaben in dieser Periode: [auflisten]\nBesondere Erfolge: [möglichst mit Kennzahlen]\nBereiche, in denen ich mich weiterentwickeln möchte: [konkret benennen]\nZiele für die nächste Periode: [2–3 Ziele auflisten]"
        },
        {
          "title": "Skill-Gap-Analyse durchführen",
          "text": "Analysiere die Lücke zwischen meinen aktuellen Fähigkeiten und den Anforderungen meiner Zielposition. Priorisiere die Defizite nach Relevanz, schlage konkrete Maßnahmen vor, um jede Lücke zu schließen, und erstelle einen realistischen Zeitplan.\n\nMeine aktuellen Fähigkeiten: [Hard- und Soft-Skills auflisten]\nZielposition: [Berufsbezeichnung]\nStellenbeschreibung bzw. Anforderungen: [wichtigste Anforderungen einfügen oder beschreiben]\nGeplanter Zeitrahmen: [Monate oder Jahre]"
        }
      ]
    }
  ],
  "startup": [
    {
      "cat": "Ideenfindung",
      "prompts": [
        {
          "title": "Geschäftsidee validieren",
          "text": "Ich habe eine Geschäftsidee: [beschreibe deine Idee in 2–3 Sätzen].\n\nHilf mir bei der Validierung anhand folgender Punkte:\n1. Problemschärfe – existiert hier ein echtes, drängendes Problem (Pain Point)?\n2. Zielkunde – wer würde dafür bezahlen?\n3. Marktgröße – grobe Schätzung von TAM, SAM und SOM\n4. Zentrale Risiken und Annahmen, die getestet werden müssen\n5. 3 schnelle, kostengünstige Wege zur Validierung, bevor Code geschrieben oder gebaut wird."
        },
        {
          "title": "Zielmarkt identifizieren",
          "text": "Mein Produkt ist: [Produkt oder Dienstleistung beschreiben].\n\nHilf mir, meinen Zielmarkt zu identifizieren und zu priorisieren:\n1. Nenne 5 potenzielle Kundensegmente, die Bedarf haben könnten\n2. Beschreibe für jedes Segment: Leidensdruck (Pain Level), Zahlungsbereitschaft und Erreichbarkeit\n3. Empfiehl, welches Segment wir zuerst ansprechen sollten und warum\n4. Beschreibe das ideale Kundenprofil (ICP – Ideal Customer Profile) für dieses Segment im Detail."
        },
        {
          "title": "Wettbewerbsumfeld analysieren",
          "text": "Ich entwickle [Produkt/Dienstleistung beschreiben] im Bereich [Branche/Markt].\n\nAnalysiere das Wettbewerbsumfeld:\n1. Wer sind die wichtigsten direkten und indirekten Konkurrenten?\n2. Was sind deren Stärken und Schwächen?\n3. Welche Lücken oder ungedeckten Kundenbedürfnisse gibt es im Markt?\n4. Wo kann sich ein neuer Marktteilnehmer realistisch differenzieren?\n5. Was würde Kunden dazu bewegen, von bestehenden Lösungen zu wechseln?"
        },
        {
          "title": "MVP-Funktionen priorisieren",
          "text": "Ich baue ein MVP für [Produkt beschreiben]. Meine Zielgruppe ist [Nutzer beschreiben] und das Kernproblem, das ich löse, ist [Problem beschreiben].\n\nHilf mir bei der Feature-Priorisierung:\n1. Liste die absoluten Must-have-Funktionen für ein lauffähiges MVP auf\n2. Liste Nice-to-have-Funktionen auf, die zum Launch nicht essenziell sind\n3. Liste Funktionen auf, die auf spätere Versionen verschoben werden sollten\n4. Schlage die kleinstmögliche Version vor, die ich in [Zeitrahmen] veröffentlichen kann, um echtes Nutzerfeedback zu sammeln.\n\nNutze die MoSCoW-Methode, wo sinnvoll."
        }
      ]
    },
    {
      "cat": "Pitch & Fundraising",
      "prompts": [
        {
          "title": "Elevator Pitch verfassen",
          "text": "Hilf mir, einen prägnanten 30-Sekunden-Elevator-Pitch für mein Startup zu formulieren.\n\nDetails:\n- Was wir tun: [Produkt/Dienstleistung beschreiben]\n- Welches Problem wir lösen: [Problem beschreiben]\n- Zielkunde: [für wen es gedacht ist]\n- Geschäftsmodell: [wie wir Geld verdienen]\n- Bisherige Traktion: [Kennzahlen, Nutzer, Umsatz]\n\nSchreibe 3 Versionen: eine für Investoren, eine für potenzielle Kunden und eine für allgemeine Networking-Events. Halte jede Version unter 60 Wörtern."
        },
        {
          "title": "Pitch-Deck-Storyline entwickeln",
          "text": "Hilf mir, den roten Faden (Narrative Arc) für mein Investoren-Pitch-Deck zu entwickeln.\n\nStartup-Details:\n- Unternehmensname: [Name]\n- Was wir tun: [Beschreibung]\n- Problem: [Problem]\n- Lösung: [Lösung]\n- Marktgröße: [Markt]\n- Geschäftsmodell: [Monetarisierung]\n- Traktion: [Kennzahlen]\n- Team: [Kernteam-Mitglieder]\n- Finanzierungsbedarf (Ask): [Betrag, geplante Verwendung]\n\nFormuliere für jede Folie (Problem, Solution, Market, Product, Traction, Team, Ask) die Kernbotschaft und 3 stützende Stichpunkte. Gestalte es investorenfokussiert und als überzeugende Story."
        },
        {
          "title": "Investoren-Erstkontakt-E-Mail schreiben",
          "text": "Schreibe eine Kaltakquise-E-Mail (Cold Email), um mein Startup einem Venture-Capital-Investor vorzustellen.\n\nKontext:\n- Investoren-Fokus: [z. B. B2B SaaS, Early Stage, Fintech]\n- Mein Startup: [Name und einzeilige Beschreibung]\n- Warum genau dieser Investor: [Grund]\n- Traktion / Meilensteine: [wichtigste Kennzahlen oder Erfolge]\n- Bitte (Ask): [z. B. 20-minütiges Kennenlerngespräch]\n\nErstelle eine Betreffzeile und eine E-Mail mit unter 150 Wörtern. Formuliere direkt, konkret und überzeugend. Vermeide Floskeln und Buzzwords."
        },
        {
          "title": "Annahmen für 3-Jahres-Finanzplan",
          "text": "Hilf mir, die zentralen Annahmen für meine 3-Jahres-Finanzplanung aufzustellen.\n\nGeschäftsmodell: [Abrechnungsmodell beschreiben, z. B. SaaS-Abo, Marktplatz, Einmalkauf]\nZielkunde: [Kundensegment beschreiben]\nAktueller Status: [Umsatz, Nutzer oder Pre-Revenue]\n\nDefiniere für jedes Jahr (Jahr 1, Jahr 2, Jahr 3) realistische Annahmen für:\n1. Kundenakquise (Kanäle, CAC, Wachstumsrate)\n2. Umsatz pro Kunde (ACV oder ARPU, Abwanderungsquote/Churn)\n3. Personalaufbau und Schlüsselpositionen\n4. Wichtigste Kostentreiber\n5. Weg zum Break-even\n\nKennzeichne die Annahmen, die Investoren voraussichtlich am kritischsten hinterfragen werden."
        }
      ]
    },
    {
      "cat": "Produktmanagement",
      "prompts": [
        {
          "title": "Product Requirements Document (PRD) erstellen",
          "text": "Erstelle ein Product Requirements Document (PRD) für folgendes Feature.\n\nFeature-Name: [Name des Features]\nProdukt: [Produktbeschreibung]\nNutzerproblem: [welches Problem wird für wen gelöst]\nUnternehmensziel: [warum bauen wir das]\n\nDas PRD sollte enthalten:\n1. Überblick und Zielsetzung\n2. User Stories (Als [Nutzer] möchte ich [Aktion], damit [Ergebnis])\n3. Funktionale Anforderungen\n4. Nicht im Umfang enthalten (Out of Scope)\n5. Erfolgsmetriken\n6. Offene Fragen\n\nHalte es prägnant und direkt umsetzbar für das Entwicklerteam."
        },
        {
          "title": "User-Story-Mapping durchführen",
          "text": "Hilf mir, eine User Story Map für [Produkt oder Feature] zu erstellen.\n\nZielnutzer: [Nutzer beschreiben]\nZentrale User Journey: [Hauptablauf von Anfang bis Ende beschreiben]\n\n1. Unterteile die Journey in 5–7 übergeordnete Aktivitäten (die oberste Ebene der Story Map)\n2. Liste unter jeder Aktivität die erforderlichen User Tasks (Stories) auf\n3. Bestimme, welche Stories zum MVP-Release gehören und welche für spätere Releases geplant sind\n4. Weise auf Abhängigkeiten zwischen Stories hin\n\nFormatiere das Ganze als strukturierte Übersicht gruppiert nach Aktivitäten."
        },
        {
          "title": "Pricing-Strategie analysieren",
          "text": "Hilf mir, die richtige Preisstrategie für mein Produkt festzulegen.\n\nProdukt: [Funktionsweise beschreiben]\nZielkunde: [wer kauft es, Unternehmensgröße, Branche]\nErbrachter Mehrwert: [welches konkrete Ergebnis wird für den Kunden erzielt]\nPreise der Wettbewerber: [was Alternativen kosten]\nBisherige Überlegungen: [eigene Preisideen]\n\nAnalysiere:\n1. Das beste Preismodell (Abonnement, nutzungsbasiert, Einmalkauf, Freemium etc.) mit Vor- und Nachteilen\n2. Empfohlener Preispunkt inklusive Begründung\n3. Tarif-Stufen (Packaging Tiers), falls sinnvoll\n4. Wie die Preise vor der endgültigen Einführung getestet und validiert werden können\n5. Typische Pricing-Fehler, die in diesem Markt vermieden werden sollten."
        },
        {
          "title": "Feature-Backlog priorisieren",
          "text": "Ich habe ein Backlog mit Feature-Wünschen und muss diese priorisieren. Wende ein strukturiertes Framework an.\n\nProdukt: [Produkt beschreiben]\nAktuelle Phase: [z. B. Pre-Launch, erste Traktion, Skalierung]\nWichtigstes Geschäftsziel aktuell: [z. B. Nutzerbindung, erste 100 Kunden gewinnen, Churn senken]\n\nFeature-Backlog:\n[Features hier auflisten]\n\nBewerte jedes Feature nach:\n1. Auswirkung (Impact) auf das Hauptgeschäftsziel (1–5)\n2. Entwicklungsaufwand (Effort, 1–5, wobei 5 = sehr hoch)\n3. Nachfragesignal der Nutzer (wie viele Nutzer wünschen sich das)\n4. Strategischer Fit\n\nErstelle ein Ranking und empfiehl, was sofort, was als Nächstes gebaut und was zurückgestellt werden sollte."
        }
      ]
    },
    {
      "cat": "Growth & Skalierung",
      "prompts": [
        {
          "title": "Go-to-Market-Strategie (GTM) erstellen",
          "text": "Hilf mir, eine Go-to-Market-Strategie (GTM) für mein Startup zu entwickeln.\n\nProdukt: [Produkt beschreiben]\nZielkunde (ICP): [Branche, Unternehmensgröße, Rolle, Pain Point]\nEinzigartiges Nutzenversprechen (USP): [was uns unterscheidet]\nPreispunkt: [Preisgestaltung]\nLaunch-Zeitplan: [wann der Launch geplant ist]\n\nBehandle:\n1. GTM-Modell (Product-Led, Sales-Led oder Marketing-Led) und die Begründung dafür\n2. Die ersten 3 Akquisitionskanäle, auf die wir uns fokussieren sollten, inklusive Begründung\n3. Launch-Plan für die ersten 90 Tage mit Schlüsselmeilensteinen\n4. Zentrale Risiken und deren Minimierung\n5. Erfolgskriterien nach 30, 60 und 90 Tagen nach dem Launch."
        },
        {
          "title": "Kundenakquisitionskanäle bewerten",
          "text": "Ich muss die besten Kanäle zur Kundenakquise für mein Startup identifizieren.\n\nProdukt: [Produkt beschreiben]\nZielkunde: [wer sie sind, wo sie sich online und offline aufhalten]\nAkquisitionsbudget: [monatlicher Budgetrahmen]\nTeamgröße: [verfügbare Personen für Growth/Marketing]\nAktuelle Traktion: [bestehende Kunden oder noch bei null]\n\nFür jeden empfohlenen Kanal:\n1. Warum er zu Zielgruppe und Produkt passt\n2. Geschätzte CAC-Spanne (Kundenakquisekosten)\n3. Wie man ihn kostengünstig innerhalb von 2 Wochen testet\n4. Wie der Kanal im skalierten Zustand aussieht\n\nErstelle ein Ranking der Kanäle nach dem höchsten ROI-Potenzial für meine aktuelle Phase."
        },
        {
          "title": "Retention-Strategie entwickeln",
          "text": "Hilf mir, eine Retention-Strategie zur Nutzerbindung für mein Produkt zu entwerfen.\n\nProdukt: [Produkt beschreiben]\nNutzertyp: [B2B oder B2C, Nutzer beschreiben]\nAktuelle Retention: [z. B. 30-Tage-Retention-Rate oder Churn-Rate falls bekannt]\nIdeales Nutzungsmuster: [wie oft Nutzer das Produkt idealerweise verwenden sollten]\nHauptgründe für Abwanderung (falls bekannt): [auflisten]\n\nLiefere:\n1. Den wichtigsten Retention-Hebel, auf den wir uns zuerst konzentrieren sollten, und warum\n2. Einen Onboarding-Ablauf, der Nutzer schneller zum Aha-Moment führt\n3. 3 Lifecycle-E-Mail- bzw. Benachrichtigungskampagnen zur Steigerung der Bindung\n4. Produktfunktionen oder Anpassungen im Produkt, die Churn reduzieren\n5. Wie abwanderungsgefährdete Nutzer frühzeitig erkannt werden können."
        },
        {
          "title": "Startup-Kennzahlen-Dashboard entwerfen",
          "text": "Hilf mir, das zentrale Kennzahlen-Dashboard für mein Startup zu konzipieren.\n\nGeschäftsmodell: [z. B. B2B SaaS, Marktplatz, B2C-App, E-Commerce]\nUnternehmensphase: [Pre-Revenue / erste Traktion / Skalierung]\nAktuelles Hauptziel: [z. B. MRR steigern, Retention verbessern, Aktivierung erhöhen]\n\nDefiniere:\n1. Die wichtigste Steuerungsgröße (North Star Metric), auf die optimiert werden soll\n2. 5–7 operative Treiber-Metriken (Inputs), die den North Star beeinflussen\n3. Gesundheits-Metriken (Health Metrics), um Probleme frühzeitig zu erkennen\n4. Kennzahlen, die in der aktuellen Phase ignoriert werden können\n5. Einen einfachen wöchentlichen Review-Rhythmus für diese Metriken."
        }
      ]
    },
    {
      "cat": "Operations & Organisation",
      "prompts": [
        {
          "title": "Hiring-Plan für Startups erstellen",
          "text": "Hilf mir, einen Einstellungsplan (Hiring Plan) für mein Startup zu erstellen.\n\nAktuelles Team: [aktuelle Rollen/Mitarbeiterzahl auflisten]\nFinanzierungsstatus: [Bootstrapped / Pre-Seed / Seed / Series A]\nRunway: [Monate an finanzieller Reichweite]\nWichtigste Prioritäten für die nächsten 12 Monate: [2–3 Kernziele]\n\nLiefere:\n1. Die ersten 3 Neueinstellungen, die wir vornehmen sollten, und warum (nach Priorität)\n2. Für jede Stelle: Berufsbezeichnung, Kernaufgaben, Must-have-Skills und ob Vollzeit, Teilzeit oder Freelancer sinnvoll ist\n3. Wie man Top-Talente ohne großes Recruiting-Budget gewinnt\n4. Warnsignale (Red Flags), auf die man in der Frühphase achten muss\n5. Einen schlanken Bewerbungsprozess, der schnell ist, ohne Abstriche bei der Qualität zu machen."
        },
        {
          "title": "Unternehmenskultur-Manifest verfassen",
          "text": "Hilf mir, ein grundlegendes Leitbild für die Unternehmenskultur meines Startups zu formulieren.\n\nUnternehmen: [Name und Tätigkeit]\nPhase: [Teamgröße, Phase]\nWerte der Gründer: [3–5 Werte auflisten, die dir persönlich wichtig sind]\nArbeitsmodell: [Remote / Büro / Hybrid]\nArt des Teams, das aufgebaut werden soll: [in einem Satz beschreiben]\n\nErstelle:\n1. Ein kurzes Kultur-Statement (2–3 Sätze)\n2. 4–6 Kernwerte mit einer verständlichen Erklärung, was sie in der Praxis bedeuten\n3. 3 konkrete Beispiele, wie diese Werte tägliche Entscheidungen leiten\n4. Verhaltensweisen, die nicht toleriert werden (Anti-Werte)\n5. Wie die Kultur auch bei wachsendem Team erhalten bleibt."
        },
        {
          "title": "Startup-OKRs definieren",
          "text": "Hilf mir, OKRs (Objectives and Key Results) für mein Startup zu formulieren.\n\nUnternehmensphase: [z. B. Seed, Series A]\nZeitraum: [z. B. Q1 2026 oder Jahresziel]\nStrategische Top-Prioritäten: [2–3 Prioritäten auflisten]\nAktuelle Ausgangswerte (Baseline): [wichtigste Zahlen, falls vorhanden]\n\nFormuliere für jede Priorität:\n- 1 Objective (inspirierend, qualitativ, richtungsweisend)\n- 3 Key Results (messbar, konkret, zeitgebunden)\n\nErgänze zudem:\n1. Wie die OKRs auf Teamebene heruntergebrochen werden\n2. Rhythmus für Check-ins und die Bewertung der Zielerreichung\n3. Typische OKR-Fallstricke, die Startups in der Frühphase vermeiden sollten."
        },
        {
          "title": "Software- und Tool-Auswahl evaluieren",
          "text": "Hilf mir bei der Evaluation und Auswahl zwischen Tools oder Anbietern für [konkreter Bedarf, z. B. CRM, Data Warehouse, Support-Plattform].\n\nAnwendungsfall: [exakt beschreiben, was das Tool können muss]\nTeamgröße: [wie viele Personen es nutzen werden]\nBudget: [monatlicher Budgetrahmen]\nMust-have-Kriterien: [unverzichtbare Anforderungen auflisten]\nNice-to-have-Kriterien: [sekundäre Wünsche auflisten]\n\nIn der engeren Auswahl:\n1. [Option A]\n2. [Option B]\n3. [Option C]\n\nVergleiche sie nach: Funktionsumfang, Preisstruktur, Setup-Aufwand, Skalierbarkeit, Integrationen und Kundensupport. Sprich eine begründete Empfehlung aus und weise auf versteckte Kosten oder Lock-in-Risiken hin."
        }
      ]
    },
    {
      "cat": "Recht & Finanzen",
      "prompts": [
        {
          "title": "AGB-Struktur (Terms of Service) entwerfen",
          "text": "Hilf mir, eine Gliederung für die Allgemeinen Geschäftsbedingungen (AGB / Terms of Service) meines Produkts zu erstellen.\n\nProduktkategorie: [z. B. SaaS-App, Marktplatz, B2C-App]\nNutzer: [B2B-Kunden / Verbraucher / beides]\nHauptfunktionen: [was Nutzer auf der Plattform tun können]\nBesondere Aspekte: [z. B. nutzergenerierte Inhalte, Zahlungsabwicklung, Datenverarbeitung]\n\nLiefere:\n1. Eine empfohlene Struktur mit allen essenziellen Abschnitten einer AGB\n2. Eine verständliche Zusammenfassung, was jeder Abschnitt regelt und warum er wichtig ist\n3. Klauseln, die für meinen Produkttyp besonders entscheidend sind\n4. Typische Fehler, die Gründer in der Anfangsphase bei AGBs machen\n\nHinweis: Dies dient nur der Vorbereitung – das finale Dokument lasse ich von einem Anwalt prüfen."
        },
        {
          "title": "Anforderungen an die Datenschutzerklärung",
          "text": "Hilf mir zu verstehen, was in der Datenschutzerklärung (Privacy Policy) für mein Produkt geregelt werden muss.\n\nProdukt: [Produkt beschreiben]\nErfasste Daten: [Arten der erhobenen Daten, z. B. E-Mail, Zahlungsinformationen, Nutzungsdaten]\nStandort der Nutzer: [z. B. Deutschland/EU, USA, weltweit]\nEingesetzte Drittanbieter-Tools: [z. B. Stripe, Google Analytics, Intercom]\n\nBehandle:\n1. Zentrale Abschnitte, die jede Datenschutzerklärung enthalten muss\n2. Gesetzliche Vorgaben je nach Region der Nutzer (DSGVO, CCPA usw.)\n3. Datenerhebungen, die eine ausdrückliche Einwilligung (Consent) erfordern\n4. Informationspflichten zur Weitergabe von Daten an Dritte\n5. Wie die Datenschutzerklärung bei Produktänderungen aktuell gehalten wird\n\nHinweis: Dies dient der Orientierung – die finale Prüfung erfolgt durch einen Fachanwalt."
        },
        {
          "title": "Cap-Table-Szenario modellieren",
          "text": "Hilf mir, ein Cap-Table-Szenario für die Finanzierungsrunde meines Startups zu modellieren.\n\nAktuelle Anteilsverteilung (Cap Table):\n- Gründer 1: [Name, Anteile in %]\n- Gründer 2: [Name, Anteile in %]\n- Mitarbeiterbeteiligungsprogramm (ESOP/VSOP Pool): [%]\n- Sonstige: [Business Angels, Wandeldarlehen/SAFEs usw.]\n\nGeplante Finanzierungsrunde:\n- Runden-Typ: [z. B. Seed, Series A]\n- Geplante Summe: [Betrag]\n- Pre-Money-Bewertung: [Betrag oder 'Hilf mir bei der Herleitung']\n- Neue Investoren: [Name oder 'Noch offen']\n\nZeige auf:\n1. Post-Money-Beteiligungsquoten aller Parteien\n2. Wie sich ein Aufstocken des Mitarbeiter-Optionspools auf die Verwässerung der Gründer auswirkt\n3. Wie die Cap Table nach Abschluss der Runde aussieht\n4. Wichtige Verhandlungspunkte abseits der Bewertung (Pro-Rata-Rechte, Beiratssitze etc.)"
        },
        {
          "title": "Unit Economics analysieren",
          "text": "Hilf mir bei der Analyse der Deckungsbeitragsrechnung und Stückkosten (Unit Economics) meines Geschäftsmodells.\n\nGeschäftsmodell: [Monetarisierung beschreiben]\nPreise: [wie viel Kunden zahlen und in welchen Intervallen]\nHauptkosten der Kundenakquise: [wichtigste CAC-Komponenten auflisten]\nLaufende Bereitstellungskosten pro Kunde: [COGS / Server- & Supportkosten pro Kunde]\nAbwanderungsquote / Churn (falls bekannt): [monatlich oder jährlich]\n\nBerechne und erläutere:\n1. Kundenakquisekosten (CAC)\n2. Durchschnittlicher Umsatz pro Nutzer (ARPU) oder Jahresvertragswert (ACV)\n3. Bruttomarge pro Kunde\n4. Customer Lifetime Value (LTV)\n5. LTV:CAC-Verhältnis und dessen Aussagekraft über die finanzielle Solidität\n6. Amortisationszeit (CAC Payback Period)\n7. Konkrete Hebel zur Optimierung einer gesunden Wirtschaftlichkeit."
        }
      ]
    }
  ],
  "data": [
    {
      "cat": "SQL",
      "prompts": [
        {
          "title": "SQL-Abfrage erstellen",
          "text": "Schreibe eine SQL-Abfrage für folgende Aufgabe:\n\nAufgabe: [beschreibe die Anforderung, z. B. alle Nutzer finden, die sich in den letzten 30 Tagen registriert und mindestens einen Kauf getätigt haben]\n\nRelevante Tabellen und Spalten:\n\n[Schema beschreiben oder CREATE TABLE-Statements einfügen]\n\nDatenbanksystem: [z. B. PostgreSQL, MySQL, BigQuery]\n\nGib die Abfrage mit verständlichen Kommentaren zu den einzelnen Schritten aus."
        },
        {
          "title": "Langsame SQL-Abfrage optimieren",
          "text": "Diese SQL-Abfrage läuft zu langsam. Hilf mir bei der Optimierung.\n\nAbfrage:\n\n[Abfrage hier einfügen]\n\nDatenbank: [z. B. PostgreSQL, MySQL]\nTabellengrößen: [z. B. orders hat 50 Mio. Zeilen, users hat 2 Mio. Zeilen]\nBestehende Indizes: [auflisten oder EXPLAIN-Ausgabe einfügen]\n\nIdentifiziere Flaschenhälse, schlage sinnvolle Index-Anpassungen vor und schreibe die Abfrage bei Bedarf um. Erkläre jede Optimierung."
        },
        {
          "title": "Komplexe SQL-Abfrage erklären",
          "text": "Erkläre diese SQL-Abfrage in verständlicher Sprache. Gehe sie Schritt für Schritt durch: was jede Klausel bewirkt, welche Zwischendaten entstehen und was das Endergebnis aussagt:\n\n[Abfrage hier einfügen]"
        },
        {
          "title": "Datenbankschema entwerfen",
          "text": "Entwirf ein relationales Datenbankschema für folgenden Anwendungsfall:\n\nAnwendungsfall: [Anwendung oder Feature beschreiben, z. B. mandantenfähiges SaaS mit Projekten, Aufgaben und Benutzerrollen]\n\nDatenbank: [z. B. PostgreSQL]\n\nBerücksichtige: Tabellennamen, Spalten mit Datentypen und Constraints, Primär- und Fremdschlüssel, Indizes sowie eine Erläuterung deiner Architekturentscheidungen und möglicher Trade-offs."
        }
      ]
    },
    {
      "cat": "Datenanalyse",
      "prompts": [
        {
          "title": "Plan für explorative Datenanalyse (EDA)",
          "text": "Ich habe einen Datensatz und möchte eine explorative Datenanalyse durchführen. Erstelle einen schrittweisen EDA-Plan.\n\nBeschreibung des Datensatzes: [Spalten, Datentypen, ungefähre Größe und Domäne beschreiben, z. B. E-Commerce-Bestellungen mit Kunden-ID, Produkt, Preis, Datum]\n\nGeschäftsfrage, die beantwortet werden soll: [beschreiben]\n\nBerücksichtige: Datenqualitätsprüfungen, univariate Analysen, zu untersuchende Korrelationen/Zusammenhänge, empfohlene Visualisierungen und typische Datenfehler, auf die zu achten ist."
        },
        {
          "title": "Statistischen Signifikanztest durchführen",
          "text": "Hilf mir, den passenden statistischen Test für meine Analyse auszuwählen und die Ergebnisse zu interpretieren.\n\nVergleichsgegenstand: [z. B. Conversion-Rates zweier Nutzergruppen]\nDatentyp: [z. B. binäre Zielgröße, kontinuierliche Messwerte]\nStichprobengrößen: [z. B. Gruppe A: 1.200, Gruppe B: 1.400]\nAktuelle Ergebnisse: [z. B. Gruppe A: 4,2 %, Gruppe B: 5,1 %]\n\nEmpfiehl den geeigneten Test, benenne die Voraussetzungen, zeige die Berechnung oder den Code und erkläre verständlich, wie p-Wert und Konfidenzintervall zu deuten sind."
        },
        {
          "title": "Kohortenanalyse konzipieren",
          "text": "Hilf mir beim Entwurf und der Interpretation einer Kohortenanalyse.\n\nZiel: [z. B. 30/60/90-Tage-Retention nach Registrierungsmonat messen]\nVerfügbare Daten: [Tabellen und Spalten beschreiben, z. B. users-Tabelle mit signup_date, events-Tabelle mit user_id und event_date]\nDatenbank / Tool: [z. B. BigQuery, pandas]\n\nErstelle die Abfrage bzw. den Code für die Kohortentabelle, erkläre die Lesart der Auswertung und weise auf typische Interpretationsfehler hin."
        },
        {
          "title": "Datentrends interpretieren",
          "text": "Ich beobachte eine auffällige Entwicklung in meinen Daten und benötige Hilfe bei der Interpretation.\n\nKennzahl: [z. B. Weekly Active Users]\nBeobachtung: [z. B. Rückgang um 15 % in den letzten 6 Wochen nach kontinuierlichem Wachstum]\nKontext: [bekannte Ereignisse, Produkt-Updates, Saisonalität oder externe Faktoren]\n\nHilf mir dabei: plausible Ursachen zu identifizieren, Datenartefakte auszuschließen, weiterführende Analysen zur Ursachenbestimmung vorzuschlagen und sinnvolle nächste Schritte zu definieren."
        }
      ]
    },
    {
      "cat": "Datenvisualisierung",
      "prompts": [
        {
          "title": "Diagrammtyp-Empfehlung",
          "text": "Empfiehl den optimalen Diagrammtyp für meinen Anwendungsfall und begründe die Wahl.\n\nDarzustellende Information: [z. B. Umsatzverteilung nach Produktkategorie und monatliche Entwicklung]\nZielpublikum: [z. B. Führungskräfte im Quartalsbericht]\nDatenstruktur: [z. B. 12 Monate x 6 Kategorien, Wertebereich von 10.000 € bis 2 Mio. €]\nVisualisierungstool: [z. B. Tableau, matplotlib, Looker Studio]\n\nSchlage 2–3 Varianten vor, ordne sie nach Eignung und erläutere die jeweiligen Vor- und Nachteile."
        },
        {
          "title": "Dashboard-Layout gestalten",
          "text": "Hilf mir, ein übersichtliches und effektives Dashboard-Layout zu entwerfen.\n\nZweck: [z. B. tägliches operatives Monitoring für das Support-Team]\nWichtigste Kennzahlen: [auflisten, z. B. offene Tickets, Lösungszeit, CSAT-Score, Ticketvolumen nach Kanal]\nNutzer und Nutzungsszenario: [z. B. Teamleiter prüfen das Dashboard zu Schichtbeginn]\nTool: [z. B. Metabase, Tableau, Grafana]\n\nSchlage eine Strukturierung in Abschnitte, passende Diagrammtypen für jede Metrik und UX-Best-Practices für optimale Lesbarkeit auf einen Blick vor."
        },
        {
          "title": "Data Storytelling aufbauen",
          "text": "Hilf mir, diese Datenanalyse in eine überzeugende Präsentations-Story zu verwandeln.\n\nWichtigste Erkenntnisse: [3–5 Haupterkenntnisse der Analyse auflisten]\nZielgruppe: [z. B. nicht-technische Stakeholder, C-Level]\nZiel der Präsentation: [z. B. Budgetfreigabe für Maßnahmen zur Kundenbindung erhalten]\n\nEntwickle einen Spannungsbogen: beginnend mit der wichtigsten Kernaussage, untermauert durch relevante Datenpunkte und abschließend mit einer klaren Handlungsempfehlung. Halte es prägnant und frei von Fachjargon."
        },
        {
          "title": "Diagrammbeschriftungen & Annotationen",
          "text": "Hilf mir, treffende Beschriftungen und Annotationen für dieses Diagramm zu verfassen, damit es selbsterklärend ist.\n\nDiagrammtyp: [z. B. Liniendiagramm]\nInhalt: [z. B. monatlicher Umsatz der letzten zwei Jahre]\nHervorzuhebende Meilensteine: [z. B. Produktlaunch im März, Preisanpassung im August, Einbruch im Dezember]\nZielgruppe: [z. B. Investoren im Pitch Deck]\n\nFormuliere 3–5 kurze, prägnante Anmerkungen sowie einen einzeiligen Diagrammtitel und -untertitel."
        }
      ]
    },
    {
      "cat": "Datenbereinigung",
      "prompts": [
        {
          "title": "Checkliste zur Datenbereinigung",
          "text": "Erstelle eine umfassende Checkliste für die Datenbereinigung (Data Cleaning) meines Datensatzes.\n\nBeschreibung des Datensatzes: [Spalten, Datentypen, Datenquelle und Fachbereich beschreiben]\nBekannte Probleme: [bereits sichtbare Fehler auflisten, z. B. Duplikate, uneinheitliche Datumsformate, fehlende Werte in Schlüsselspalten]\nNachgelagerte Verwendung: [z. B. Training eines ML-Modells, Dashboard-Erstellung]\n\nStrukturiere die Checkliste nach Priorität, nenne konkrete Prüfschritte und zeige Lösungswege für jedes Problem auf."
        },
        {
          "title": "Umgang mit fehlenden Werten (Imputation)",
          "text": "Hilf mir bei der Entscheidung, wie mit fehlenden Datenwerten in meinem Datensatz umgegangen werden soll.\n\nSpalte mit fehlenden Werten: [Spaltenname und Bedeutung]\nAnteil fehlender Werte: [z. B. 18 %]\nDatentyp: [z. B. numerisch, kategorial, Datumsangabe]\nNachgelagerte Nutzung der Spalte: [z. B. Feature in einem Regressionsmodell]\n\nVergleiche die Optionen (Zeilen löschen, Imputation durch Mittelwert/Median/Modus, modellbasierte Imputation, Kennzeichnung als eigene Kategorie) und empfiehl das beste Vorgehen mit Begründung."
        },
        {
          "title": "Ausreißer erkennen und behandeln",
          "text": "Hilf mir, Ausreißer (Outliers) in meinem Datensatz aufzuspüren und angemessen zu behandeln.\n\nSpalte: [Spaltenname und Bedeutung]\nDatentyp: [numerisch / Datum]\nStatistische Kennzahlen: [z. B. Min: 0, Max: 99.000, Mittelwert: 450, Median: 380, Standardabweichung: 1.200]\nKontext: [z. B. Bestellwert in Euro; extrem hohe Werte könnten legitime Großbestellungen oder Eingabefehler sein]\n\nSchlage geeignete Methoden vor (IQR, Z-Score, Isolation Forest etc.), liefere Code in [Python/SQL] und berate zum Umgang mit bestätigten Ausreißern."
        },
        {
          "title": "Inkonsistente Daten standardisieren",
          "text": "Hilf mir, uneinheitliche Werte in dieser Spalte zu bereinigen und zu standardisieren.\n\nSpaltenname: [z. B. Land / Country]\nBeispiele für fehlerhafte/abweichende Werte: [z. B. 'USA', 'United States', 'US', 'u.s.a', 'America']\nGewünschtes Zielformat: [z. B. ISO 3166-1 Alpha-2 Ländercodes]\nTool: [z. B. Python pandas, SQL, dbt]\n\nSchreibe den Code für das Mapping und die Standardisierung, berücksichtige Randfälle und kennzeichne Werte, die nicht automatisch zugeordnet werden können."
        }
      ]
    },
    {
      "cat": "Python & R",
      "prompts": [
        {
          "title": "Pandas-Datenpipeline erstellen",
          "text": "Erstelle eine Datenpipeline mit pandas für folgende Aufgabe:\n\nInput-Daten: [Datenquelle beschreiben, z. B. CSV-Datei mit den Spalten: user_id, event_type, timestamp, revenue]\nErforderliche Transformationen:\n1. [z. B. nur Kauf-Events filtern]\n2. [z. B. monatlichen Umsatz pro Nutzer aggregieren]\n3. [z. B. Wachstumsrate im Vergleich zum Vormonat berechnen]\nOutput: [gewünschtes Ergebnis beschreiben, z. B. DataFrame mit einer Zeile pro Nutzer und Monat]\n\nSchreibe sauberen, kommentierten Code und nutze Method Chaining, wo es der Lesbarkeit dient."
        },
        {
          "title": "Matplotlib/Seaborn-Visualisierung erstellen",
          "text": "Schreibe Python-Code für folgende Datenvisualisierung:\n\nDiagrammtyp: [z. B. Heatmap, gruppiertes Balkendiagramm, Zeitreihe mit Konfidenzintervall]\nDatenstruktur: [DataFrame-Aufbau beschreiben, z. B. Spalten: month, category, value]\nDesign-Vorgaben: [z. B. dunkler Hintergrund, barrierefreie/farbenblinden-freundliche Palette, rahmenlos]\nAusgabe: [z. B. Speichern als PNG mit 300 DPI]\n\nVerwende matplotlib und/oder seaborn. Integriere Titel, Achsenbeschriftungen und Legende in publikationsreifer Qualität."
        },
        {
          "title": "Feature-Engineering-Ideen entwickeln",
          "text": "Schlage Feature-Engineering-Ideen für meinen Machine-Learning-Datensatz vor.\n\nZielvariable (Target): [z. B. ob ein Nutzer in den nächsten 30 Tagen abwandert/churned]\nVerfügbare Roh-Features: [mit Datentypen auflisten, z. B. signup_date (Datum), last_login (Datum), num_sessions (Integer), plan_type (kategorial)]\nGranularität: [z. B. eine Zeile pro Nutzer]\n\nSchlage 10–15 abgeleitete Features vor, erkläre die Motivation dahinter und liefere den entsprechenden pandas-Code."
        },
        {
          "title": "Python-Datenvalidierungs-Skript erstellen",
          "text": "Schreibe ein Python-Skript zur Datenvalidierung für meinen Datensatz.\n\nDatensatz: [Spalten, Typen und Datenquelle beschreiben]\nZu prüfende Validierungsregeln:\n1. [z. B. user_id darf nicht null sein und muss eindeutig sein]\n2. [z. B. event_date muss zwischen 2020-01-01 und heute liegen]\n3. [z. B. revenue muss >= 0 sein]\n4. [z. B. status muss einer der folgenden Werte sein: active, inactive, pending]\n\nDas Skript sollte eine strukturierte Zusammenfassung aller Verstöße ausgeben und nicht beim ersten Fehler abbrechen. Verwende pandas oder Great Expectations."
        }
      ]
    },
    {
      "cat": "Reporting & Berichte",
      "prompts": [
        {
          "title": "Executive Summary aus Kennzahlen formulieren",
          "text": "Verfasse eine Management-Zusammenfassung (Executive Summary) basierend auf folgenden Daten:\n\nKontext: [z. B. Q1 2026 Performance-Review für ein SaaS-Produkt]\nWichtigste Kennzahlen:\n- [Metrik 1]: [Wert und Veränderung zur Vorperiode]\n- [Metrik 2]: [Wert und Veränderung]\n- [Metrik 3]: [Wert und Veränderung]\nBesondere Ereignisse: [z. B. Feature X im Februar gelauncht, Großkunden im März verloren]\n\nSchreibe eine Zusammenfassung von 150–200 Wörtern. Beginne mit der wichtigsten Erkenntnis, benenne Schwachstellen offen und schließe mit den 2–3 zentralen Prioritäten für das nächste Quartal ab."
        },
        {
          "title": "Wöchentliches Kennzahlen-Update",
          "text": "Schreibe einen kompakten wöchentlichen Kennzahlenbericht für folgende Zahlen:\n\nTeam / Produkt: [z. B. Growth-Team, Mobile App]\nKalenderwoche: [z. B. Woche vom 17. März 2026]\nKennzahlen dieser Woche:\n- [Metrik]: [aktueller Wert] vs. [Wert Vorwoche]\n- [Metrik]: [aktueller Wert] vs. [Wert Vorwoche]\nHighlights: [Erfolge oder nennenswerte Ereignisse]\nBedenken / Warnsignale: [Rückgänge oder Probleme]\n\nFormatiere es als kurzes Slack- oder E-Mail-Update: 3–5 Stichpunkte, verständliche Sprache ohne unnötigen Jargon. Hebe Punkte hervor, die sofortige Aufmerksamkeit erfordern."
        },
        {
          "title": "A/B-Testergebnisse dokumentieren",
          "text": "Verfasse eine verständliche Zusammenfassung meiner A/B-Testergebnisse für ein nicht-technisches Publikum.\n\nTest-Name: [z. B. Neuer Checkout-Flow]\nHypothese: [z. B. Ein 2-stufiger Checkout steigert die Conversion-Rate]\nKontrollgruppe vs. Variante: [Änderung beschreiben]\nErgebnisse:\n- Primäre Metrik: [z. B. Conversion-Rate] – Kontrolle: [X %], Variante: [Y %], relativer Zuwachs (Lift): [Z %]\n- Statistische Signifikanz: [z. B. p=0,03, 95 % Konfidenzintervall: +1,2 % bis +4,8 %]\n- Sekundärmetriken: [Kontrollmetriken / Guardrail Metrics und deren Werte]\nTestdauer: [z. B. 14 Tage, 25.000 Nutzer pro Gruppe]\n\nErkläre die Bedeutung der Ergebnisse, gib eine Empfehlung ab (Rollout ja/nein) und weise auf eventuelle Einschränkungen hin."
        },
        {
          "title": "Data Dictionary erstellen",
          "text": "Erstelle ein Data Dictionary für folgende Tabelle oder folgenden Datensatz:\n\nTabellenname: [z. B. orders]\nSpalten:\n- [spaltenname]: [Datentyp, z. B. INT] – [kurze Inhaltsbeschreibung]\n- [spaltenname]: [Datentyp] – [Beschreibung]\n- [weitere nach Bedarf]\nZielgruppe: [z. B. neue Datenanalysten im Team]\n\nGib für jede Spalte an: Name, Datentyp, Beschreibung, Beispielwerte, Nullable (ja/nein) und bekannte Besonderheiten/Stolperfallen. Formatiere die Ausgabe als übersichtliche Markdown-Tabelle."
        }
      ]
    }
  ],
  "design": [
    {
      "cat": "UI-Review",
      "prompts": [
        {
          "title": "UI-Design kritisieren",
          "text": "Agiere als Senior Product Designer und beurteile dieses UI-Design kritisch:\n\n[Bildschirm beschreiben oder Screenshot/Beschreibung einfügen]\n\nBewerte: visuelle Hierarchie, Abstände (Spacing), Typografie, Farbeinsatz und Konsistenz. Benenne konkrete Verbesserungspunkte und begründe diese."
        },
        {
          "title": "Accessibility-Audit (WCAG 2.1 AA)",
          "text": "Prüfe dieses UI-Design auf Barrierefreiheit gemäß den WCAG 2.1 AA-Richtlinien:\n\n[UI beschreiben oder Komponenten auflisten]\n\nÜberprüfe: Farbkontraste, Tastaturbedienbarkeit, Fokus-Zustände, Screenreader-Kompatibilität, Touch-Target-Größen und ARIA-Attribute. Liste gefundene Mängel nach Schweregrad sortiert auf."
        },
        {
          "title": "Mobile Responsiveness überprüfen",
          "text": "Überprüfe dieses UI-Design auf mobile Responsivität:\n\n[Layout beschreiben oder Komponenten auflisten]\n\nIdentifiziere: Elemente, die schlecht skalieren, zu kleine Touch-Ziele, überlaufende Inhalte und Abstandsprobleme auf kleinen Bildschirmen. Schlage konkrete Lösungen vor."
        },
        {
          "title": "Visuelle Hierarchie analysieren",
          "text": "Analysiere die visuelle Hierarchie dieser Benutzeroberfläche:\n\n[Bildschirmlayout und Elemente beschreiben]\n\nUntersuche: Worauf fällt der Blick des Nutzers zuerst? Entspricht die Hierarchie dem eigentlichen Nutzerziel? Welche Anpassungen würden das Scannen und Verstehen der Oberfläche verbessern?"
        }
      ]
    },
    {
      "cat": "UX-Research",
      "prompts": [
        {
          "title": "Nutzerinterview-Leitfaden erstellen",
          "text": "Erstelle einen Interviewleitfaden für die Nutzerforschung zum Thema [Thema oder Feature, z. B. 'wie Menschen ihre Finanzen verwalten'].\n\nEnthalten sein sollten: 3 Einstiegsfragen (Warm-up), 8–10 Kernfragen und 2 Abschlussfragen. Nutze offene Formulierungen und vermeide suggestive Fragestellungen."
        },
        {
          "title": "User Persona erstellen",
          "text": "Erstelle eine realistische User Persona für [Produkt oder Feature].\n\nZielgruppe: [grob beschreiben, z. B. 'freiberufliche Grafikdesigner, 28–40 Jahre']\n\nBehandle: Name, Alter, Beruf, Ziele, Frustrationen/Pain Points, typische Verhaltensmuster und ein prägnantes Zitat. Halte die Persona praxisnah und handlungsorientiert."
        },
        {
          "title": "Usability-Test-Leitfaden verfassen",
          "text": "Schreibe ein Moderationsskript für einen Usability-Test von [Feature oder Ablauf, z. B. 'der Checkout-Prozess'].\n\nEnthalten sein sollten: Begrüßung durch den Testleiter, Einverständniserklärung, 4–6 praxisnahe Testszenarien und vertiefende Nachfragen zu jeder Aufgabe. Verrate dabei nicht den optimalen Klickpfad."
        },
        {
          "title": "Nutzerumfrage zu Produkt-Features entwerfen",
          "text": "Konzipiere eine Nutzerumfrage, um Feedback zu [Feature, z. B. 'unser neuer Onboarding-Flow'] einzuholen.\n\nIntegriere: 1 NPS- oder CSAT-Frage, 4–6 Bewertungs- oder Multiple-Choice-Fragen und 2 offene Fragen. Die Beantwortung sollte unter 3 Minuten dauern. Schlage eine optimale Reihenfolge der Fragen vor."
        }
      ]
    },
    {
      "cat": "Design-Systeme",
      "prompts": [
        {
          "title": "Benennungskonvention für Komponenten",
          "text": "Schlage eine einheitliche Naming Convention für UI-Komponenten in unserem Design-System vor.\n\nKontext: [z. B. 'Wir nutzen React, Figma und eine Mischung aus atomaren und zusammengesetzten Komponenten']\n\nBehandle: Komponentennamen, Variantenbezeichnungen, Prop-Namen sowie Datei- und Ebenen-Benennung in Figma. Gib konkrete Beispiele für Button, Modal und Form Field."
        },
        {
          "title": "Komponentendokumentation verfassen",
          "text": "Verfasse eine verständliche Dokumentation für folgende UI-Komponente:\n\nKomponente: [Name der Komponente, z. B. 'Toast-Benachrichtigung']\nProps/Varianten: [auflisten]\nEinsatzbereich: [wo sie verwendet wird]\n\nIntegriere: Kurzbeschreibung, Wann verwenden / Wann nicht verwenden (Do's & Don'ts), Tabelle der Props/Parameter, Hinweise zur Barrierefreiheit und ein Anwendungsbeispiel."
        },
        {
          "title": "Design-Token-Architektur strukturieren",
          "text": "Entwirf eine Struktur für Design Tokens für [Produkt oder Name des Design-Systems].\n\nMarkenfarben: [wichtigste Farben auflisten]\nTypografie: [Schriftarten oder typografische Skala auflisten]\nKontext: [z. B. Web-App, Mobile App oder beides]\n\nStrukturiere Tokens nach: Farbe, Typografie, Abstände (Spacing), Eckenradius (Border Radius), Schatten (Shadows) und Animationen (Motion). Zeige Beispiele für primitive (globale) und semantische Tokens."
        },
        {
          "title": "Pattern-Library auf Konsistenz prüfen",
          "text": "Hilf mir, unsere UI-Pattern-Library auf Inkonsistenzen zu überprüfen.\n\nHier ist die Liste unserer aktuellen Komponenten und Varianten:\n\n[Komponentenliste hier einfügen]\n\nIdentifiziere: redundante Patterns mit gleichem Einsatzzweck, abweichende Benennungen, Lücken für fehlende wiederverwendbare Komponenten und Elemente, die zu speziell sind, um als Komponente zu dienen."
        }
      ]
    },
    {
      "cat": "Wireframing & Flows",
      "prompts": [
        {
          "title": "User Flow für ein Feature entwerfen",
          "text": "Skizziere den User Flow für [Feature, z. B. 'Passwort zurücksetzen'].\n\nNutzerziel: [was der Nutzer erreichen möchte]\nEinstiegspunkt: [wo der Nutzer startet]\n\nListe jeden Einzelschritt auf, inklusive Entscheidungspunkten, Verzweigungen und möglicher Fehler- oder Sonderfälle (Edge Cases). Formatiere dies als nummerierten Ablauf mit Verzweigungen."
        },
        {
          "title": "Informationsarchitektur für App-Bereich",
          "text": "Entwirf die Informationsarchitektur (IA) für [App-Bereich, z. B. 'den Einstellungsbereich eines SaaS-Dashboards'].\n\nNutzertypen: [falls mehrere, auflisten]\nWichtigste Nutzeraufgaben: [4–6 Hauptaufgaben auflisten]\n\nSchlage eine Navigationsstruktur mit Hauptrubriken, Unterbereichen und den jeweiligen Inhalten oder Aktionen vor. Begründe die Gruppierung."
        },
        {
          "title": "Navigationskonzept erstellen",
          "text": "Schlage eine Navigationsstruktur für [Produkt, z. B. 'ein B2B-Projektmanagement-Tool'] vor.\n\nHauptfunktionen: [Kernfeatures auflisten]\nBenutzerrollen: [Rollen auflisten, falls zutreffend]\n\nEmpfiehl: primäre Navigationselemente, sekundäre Menüs und den Umgang mit rollenbasierten Berechtigungen. Berücksichtige Desktop-Sidebar und mobile Bottom-Navigation."
        },
        {
          "title": "Onboarding-Flow gestalten",
          "text": "Entwirf einen Onboarding-Flow für [Produkt, z. B. 'eine Gewohnheiten-Tracker-App'].\n\nZiel des neuen Nutzers: [was erreicht werden muss, um Mehrwert zu erleben]\nErforderliche Einrichtungsschritte: [notwendige Schritte auflisten, z. B. 'erste Gewohnheit anlegen']\n\nSchlage vor: Screen-Abfolge, welche Abfragen sofort vs. später erfolgen sollten, Fortschrittsanzeige und Optionen zum Überspringen. Minimiere die Zeit bis zum ersten Produkterlebnis (Time-to-Value)."
        }
      ]
    },
    {
      "cat": "UX-Writing & Microcopy",
      "prompts": [
        {
          "title": "Nutzerfreundliche Fehlermeldungen verfassen",
          "text": "Schreibe klare, nutzerfreundliche Fehlermeldungen für folgende Szenarien:\n\n[Fehlerszenarien auflisten, z. B. 'ungültiges E-Mail-Format', 'Datei zu groß', 'Sitzung abgelaufen']\n\nVerfasse für jedes Szenario: Titel des Fehlers, eine verständliche Erklärung des Problems und die konkrete Handlungsanweisung zur Behebung. Tonalität: [z. B. freundlich, professionell, minimalistisch]."
        },
        {
          "title": "Empty-State-Texte verfassen",
          "text": "Schreibe UI-Texte für leere Zustände (Empty States):\n\n[Zustände auflisten, z. B. 'keine Suchergebnisse', 'noch keine Benachrichtigungen', 'keine Dateien hochgeladen']\n\nFormuliere für jeden Zustand: Überschrift, 1–2 Sätze Erklärung und einen passenden Call-to-Action. Tonalität: [z. B. ermutigend, sachlich, humorvoll]. Vermeide abgedroschene Floskeln wie 'Hier gibt es nichts zu sehen'."
        },
        {
          "title": "Button- und CTA-Texte variieren",
          "text": "Formuliere Textvarianten für Buttons und Call-to-Actions (CTAs) für [Aktion oder Feature, z. B. 'kostenlose Testphase starten'].\n\nKontext: [wo der Button platziert ist, z. B. 'Preisseite', 'Empty State', 'Modal-Header']\nTonalität: [z. B. direkt, nutzenorientiert, unverbindlich]\n\nLiefere 6–8 Textvarianten, sortiert von fordernd bis zurückhaltend, und erläutere die Vor- und Nachteile."
        },
        {
          "title": "Tooltips und UI-Hilfetexte schreiben",
          "text": "Schreibe Tooltips und Hilfetexte für folgende UI-Elemente:\n\n[Elemente auflisten, z. B. 'Feld für API-Schlüssel', 'Schalter für Abrechnungsintervall', 'Einstellung für Benachrichtigungshäufigkeit']\n\nFormuliere für jedes Element: einen prägnanten Tooltip (unter 15 Wörtern) sowie optional einen ausführlicheren Inline-Hilfetext. Setze Klarheit vor Wortwitz."
        }
      ]
    },
    {
      "cat": "Design-Präsentation",
      "prompts": [
        {
          "title": "Designentscheidung argumentieren",
          "text": "Hilf mir, eine fundierte Begründung für folgende Designentscheidung zu formulieren:\n\nEntscheidung: [beschreiben, was entschieden wurde, z. B. 'Wechsel von einem Tab-Layout zu einer fortlaufenden Seite']\nKontext: [welches Problem gelöst wird oder welche Daten/Erkenntnisse ausschlaggebend waren]\nVerworfene Alternativen: [1–2 Alternativen nennen]\n\nSchreibe eine prägnante Argumentation für Stakeholder, die umfasst: das Problem, die Entscheidung, warum es die beste Lösung ist und welche Kompromisse eingegangen wurden."
        },
        {
          "title": "Design-Review-Präsentation gliedern",
          "text": "Erstelle eine Gliederung für eine Design-Review-Präsentation für [Feature- oder Projektname].\n\nPublikum: [z. B. 'Produktteam + Lead Engineers']\nZiel des Reviews: [z. B. 'Freigabe vor dem Entwicklungs-Handoff' oder 'Feedback zur gestalterischen Richtung einholen']\nProjektphase: [z. B. 'frühes Konzept', 'ausgearbeitete Mockups', 'finale Designs']\n\nBerücksichtige: empfohlene Abschnitte, was jeweils gezeigt werden soll, Zeitplanung und die gezielte Steuerung des Feedbacks."
        },
        {
          "title": "Vorher-/Nachher-Fallstudie formulieren",
          "text": "Verfasse eine Vorher-/Nachher-Darstellung für diese Designverbesserung:\n\nVorher: [altes Design und dessen Probleme beschreiben]\nNachher: [neues Design und die Änderungen beschreiben]\nMetriken oder Nutzerfeedback: [falls vorhanden einfügen]\n\nSchreibe eine prägnante Story für eine Case Study oder ein Stakeholder-Update, die das Problem, die zugrundeliegende Erkenntnis und den messbaren Effekt der Änderung herausarbeitet."
        },
        {
          "title": "Stakeholder-Feedback aus Design-Review strukturieren",
          "text": "Hilf mir, dieses Feedback von Stakeholdern aus einem Design-Review zusammenzufassen und zu strukturieren:\n\n[Notizen oder Feedback hier einfügen]\n\nOrdne es nach: Themenfeldern, konkreten Handlungsanweisungen, klärungsbedürftigen Fragen und widersprüchlichem Feedback. Hebe Punkte hervor, die im Widerspruch zu UX-Research-Erkenntnissen oder Designprinzipien stehen."
        }
      ]
    }
  ],
  "student": [
    {
      "cat": "Lernen & Verstehen",
      "prompts": [
        {
          "title": "Lernleitfaden für ein Thema erstellen",
          "text": "Erstelle einen umfassenden Lernleitfaden für das Thema [Thema].\n\nBehandle:\n- Zentrale Konzepte und Definitionen\n- Wichtige Daten, Formeln oder Namen zum Auswendiglernen\n- Typische Denkfehler und Missverständnisse\n- Eine kompakte Zusammenfassung für die Wiederholung kurz vor der Prüfung\n\nNiveau: [Anfänger / Fortgeschritten / Experte]"
        },
        {
          "title": "Konzept mit Alltagsanalogien erklären",
          "text": "Erkläre mir [Konzept] anhand anschaulicher Analogien aus dem Alltag.\n\nIch bin Schüler/Student im [Schuljahr/Semester] im Fach [Fachbereich]. Ich habe [verwandtes Konzept] verstanden, tue mich aber mit diesem Thema schwer.\n\nNutze mindestens zwei unterschiedliche Analogien und überprüfe mein Verständnis am Ende mit einer kurzen Testfrage."
        },
        {
          "title": "Karteikarten-Fragen (Flashcards) generieren",
          "text": "Erstelle 10 Frage-Antwort-Paare für Karteikarten (Flashcards) zum folgenden Thema:\n\n[Thema oder Notizen hier einfügen]\n\nFormatiere jede Karte als:\nF: [Frage]\nA: [prägnante Antwort]\n\nMische Faktenabfragen, Verständnisfragen und Anwendungsbeispiele."
        },
        {
          "title": "Lehrbuchkapitel zusammenfassen",
          "text": "Fasse das folgende Lehrbuchkapitel in klaren, prägnanten Notizen zusammen.\n\n[Kapiteltext hier einfügen]\n\nGliedere die Zusammenfassung nach:\n- Hauptaussage (1–2 Sätze)\n- Kernpunkte (Stichpunktliste)\n- Wichtige Fachbegriffe (mit Definitionen)\n- Typische prüfungsrelevante Inhalte"
        }
      ]
    },
    {
      "cat": "Hausarbeiten & Essays",
      "prompts": [
        {
          "title": "Gliederung für Essay oder Hausarbeit",
          "text": "Erstelle eine detaillierte Gliederung für folgende Aufgabenstellung:\n\n[Themenstellung / Prompt einfügen]\n\nKurs/Fach: [Name des Kurses]\nZiel-Wortanzahl: [z. B. 1500 Wörter]\nArgumentationsstil: [argumentativ / analytisch / vergleichend / darstellend]\n\nEnthalten sein sollten: eine zentrale These, Thesensätze (Topic Sentences) für jeden Hauptabschnitt sowie stützende Argumente."
        },
        {
          "title": "These (Thesis Statement) formulieren",
          "text": "Hilf mir, eine überzeugende zentrale These (Thesis Statement) für meine Arbeit zu formulieren.\n\nThema: [Thema]\nMeine ursprüngliche Idee/Argumentation: [grobe Idee beschreiben]\nArt der Arbeit: [argumentativ / analytisch / forschungsorientiert]\n\nFormuliere drei verschiedene Thesen (von konservativ bis mutig/provokant) mit einer kurzen Einschätzung der jeweiligen Stärken."
        },
        {
          "title": "Argumentation stärken",
          "text": "Lies diesen Absatz aus meinem Essay und hilf mir, die Argumentation zu schärfen.\n\n[Absatz hier einfügen]\n\nPrüfe konkret:\n1. Ist die Behauptung klar und vertretbar?\n2. Sind Belege und Zitate sinnvoll eingebunden?\n3. Erklärt die Analyse die eigentliche Relevanz (das 'Na und?')?\n\nSchreibe den Absatz in verbesserter Form um und erkläre jede vorgenommene Änderung."
        },
        {
          "title": "Einleitung für Essay schreiben",
          "text": "Schreibe eine fesselnde Einleitung für meine wissenschaftliche Arbeit bzw. meinen Essay.\n\nThema: [Thema]\nThese: [deine zentrale These]\nZielpublikum: [z. B. Dozent/Professor, interessierte Öffentlichkeit]\nTonalität: [akademisch / sachlich]\n\nBeginne mit einem Einstieg/Hook, gib kurzen Kontext und ende mit der These. Ergänze anschließend eine alternative Hook-Variante."
        }
      ]
    },
    {
      "cat": "Wissenschaftliche Recherche",
      "prompts": [
        {
          "title": "Forschungsfrage präzisieren",
          "text": "Hilf mir, meine Forschungsfrage zu präzisieren.\n\nBisherige Fragestellung: [dein Entwurf]\nFachgebiet: [Studienfach]\nUmfang: [z. B. Bachelorarbeit, 3000 Wörter, ein Semester]\n\nIst die Frage zu weit, zu eng oder passend eingegrenzt? Schlage drei verfeinerte Versionen vor und erkläre, warum sie jeweils überzeugender sind."
        },
        {
          "title": "Literaturüberblick (Literature Review) zusammenfassen",
          "text": "Fasse die zentralen Themen und wissenschaftlichen Debatten in der Literatur zu [Thema] zusammen.\n\nKontext: Ich schreibe eine [Art der Arbeit] im Rahmen von [Kurs/Studienniveau].\n\nBehandle:\n- Wichtige Denkschulen und theoretische Ansätze\n- Zentrale Konsense und Kontroversen im Fachbereich\n- Forschungslücken in der bestehenden Literatur\n- Empfohlene Suchbegriffe für die weitere Literaturrecherche"
        },
        {
          "title": "Forschungslücken identifizieren",
          "text": "Ich forsche zu [Thema]. Hilf mir anhand folgender Quellen und Notizen, Forschungslücken in der bestehenden Literatur zu identifizieren, die meine Arbeit behandeln könnte:\n\n[Notizen oder Zusammenfassungen hier einfügen]\n\nWelche Aspekte sind unzureichend erforscht? Welche Fragen bleiben offen? Was wäre ein eigenständiger wissenschaftlicher Beitrag?"
        },
        {
          "title": "Kommentierte Bibliografie (Annotated Bibliography)",
          "text": "Erstelle einen Eintrag für ein kommentiertes Literaturverzeichnis (Annotated Bibliography) für folgende Quelle:\n\nQuellenangabe / Zitation: [vollständige Quellenangabe]\nZusammenfassung der Quelle: [Abstract oder Kernpunkte einfügen]\nZitierstil: [APA / MLA / Chicago / Harvard]\n\nDie Annotation sollte umfassen: eine kurze Inhaltsangabe (2–3 Sätze), eine Bewertung von Glaubwürdigkeit und Relevanz sowie den konkreten Nutzen der Quelle für meine Arbeit."
        }
      ]
    },
    {
      "cat": "Mathe & Naturwissenschaften",
      "prompts": [
        {
          "title": "Mathematisches Konzept Schritt für Schritt erklären",
          "text": "Erkläre mir [mathematisches Konzept] Schritt für Schritt, als hätte ich es noch nie zuvor gesehen.\n\nMein aktueller Kenntnisstand: [z. B. Schulmathematik/Oberstufe, Analysis 1 im Grundstudium]\nWo ich nicht weiterkomme: [Verständnisproblem beschreiben]\n\nFühre mich anhand eines durchgerechneten Beispiels durch das Konzept und gib mir anschließend eine etwas anspruchsvollere Übungsaufgabe zum Selberrechnen. Blende die Lösung erst danach ein."
        },
        {
          "title": "Übungsaufgaben mit Lösungen generieren",
          "text": "Erstelle 5 Übungsaufgaben zu [Thema/Konzept].\n\nSchwierigkeitsgrad: [leicht / mittel / schwer]\nMein Niveau: [z. B. Abitur-Chemie, Experimentalphysik Universität]\n\nPräsentiere zuerst die Aufgaben ohne Lösungen. Liefere danach, getrennt durch eine Trennlinie, ausführliche Schritt-für-Schritt-Lösungswege für jede Aufgabe."
        },
        {
          "title": "Laborprotokoll / Versuchsbericht gliedern",
          "text": "Hilf mir bei der Strukturierung eines Laborberichts (Versuchsprotokolls) für folgendes Experiment:\n\nExperiment: [Versuchsaufbau und Durchführung beschreiben]\nFachbereich: [z. B. Biologie, Chemie, Physik]\nAusbildungsstand: [Schule / Bachelorstudium]\n\nGib die Standardabschnitte an (Titel, Abstract, Einleitung, Material & Methoden, Ergebnisse, Diskussion, Fazit) mit Stichpunkten zu den Inhalten und typischen Fehlern, die vermieden werden sollten."
        },
        {
          "title": "Wissenschaftliche Methodik anwenden",
          "text": "Führe mich Schritt für Schritt durch die Anwendung der wissenschaftlichen Methode auf folgende Fragestellung:\n\nForschungsfrage: [deine Frage]\nFachbereich: [Biologie / Chemie / Physik / Sonstiges]\n\nErkläre für jeden Schritt – Beobachtung, Hypothese, Versuchsplanung, Datenerhebung, Analyse und Schlussfolgerung –, was zu tun ist und warum. Weise gegebenenfalls auf ethische Aspekte hin."
        }
      ]
    },
    {
      "cat": "Sprachen lernen",
      "prompts": [
        {
          "title": "Grammatikregel mit Beispielen erklären",
          "text": "Erkläre folgende Grammatikregel in [Sprache] klar und verständlich.\n\nGrammatikthema: [z. B. Konjunktiv / Subjuntivo, Passiv, Partikelverwendung]\nMein Sprachniveau: [A1 / A2 / B1 / B2 / C1]\n\nLiefere:\n- Eine verständliche Erklärung der Regel\n- 5 Beispielsätze mit deutscher Übersetzung\n- Die häufigsten typischen Fehler von Lernenden\n- Eine kurze Übungsaufgabe zur Festigung"
        },
        {
          "title": "Wortschatz im Kontext einüben",
          "text": "Hilf mir, folgende Vokabeln aus [Sprache] im Kontext zu lernen.\n\nWörter: [Vokabelliste hier einfügen]\n\nGib für jedes Wort an:\n- Deutsche Übersetzung/Bedeutung\n- Beispielsatz in [Sprache] mit Übersetzung\n- Stilebene (formell / umgangssprachlich / Slang)\n- Eine typische Kollokation oder Redewendung, in der es vorkommt\n\nErstelle anschließend einen kurzen Textabschnitt, der alle Wörter harmonisch und sinnvoll verwendet."
        },
        {
          "title": "Übersetzung mit Nuancen-Erläuterungen",
          "text": "Übersetze folgenden Text von [Ausgangssprache] nach [Zielsprache].\n\n[Text hier einfügen]\n\nFüge nach der Übersetzung sprachliche Anmerkungen hinzu:\n- Wörter oder Redewendungen, die sich nicht 1:1 übersetzen lassen\n- Kulturelle Bezüge, die Kontext erfordern\n- Alternative Übersetzungsmöglichkeiten bei mehrdeutigen Begriffen\n- Unterschiede in Sprachebene oder Tonfall zwischen Original und Übersetzung"
        },
        {
          "title": "Konversationsdialog zur Sprachübung",
          "text": "Schreibe einen praxisnahen Übungsdialog auf [Sprache] für folgendes Szenario:\n\nSzenario: [z. B. Essen im Restaurant bestellen, nach dem Weg fragen, Vorstellungsgespräch]\nMein Sprachniveau: [A1 / A2 / B1 / B2 / C1]\n\nEnthalten sein sollten:\n- Der vollständige Dialog zwischen zwei Personen\n- Eine deutsche Übersetzung unter jeder Zeile\n- Vokabelhinweise zu wichtigen Begriffen und Redewendungen\n- Zwei weiterführende Fragen, mit denen das Gespräch vertieft werden kann"
        }
      ]
    },
    {
      "cat": "Prüfungsvorbereitung",
      "prompts": [
        {
          "title": "Prüfungsfragen zur Übung erstellen",
          "text": "Erstelle 10 Übungsfragen zur Prüfungsvorbereitung für [Fach/Thema].\n\nPrüfungsformat: [Multiple Choice / Kurzantworten / Essay-Fragen / gemischt]\nNiveau: [z. B. Abitur, Grundstudium Universität]\nSchwerpunktthemen: [wichtigste Themen auflisten]\n\nFüge im Anschluss an die Fragen einen Lösungsschlüssel mit kurzen Erklärungen für jede richtige Antwort bei."
        },
        {
          "title": "Prüfungsfehler analysieren und verstehen",
          "text": "Ich habe diese Prüfungsaufgabe falsch beantwortet. Hilf mir zu verstehen, warum.\n\nFrage: [Frage hier einfügen]\nMeine Antwort: [was gewählt oder geschrieben wurde]\nRichtige Antwort: [die korrekte Lösung]\n\nErkläre:\n1. Warum meine Antwort falsch ist\n2. Warum die Musterlösung korrekt ist\n3. Welches grundlegende Konzept ich verstehen muss\n4. Eine ähnliche Übungsaufgabe, um mein Verständnis direkt zu überprüfen"
        },
        {
          "title": "Mnemotechniken und Merkhilfen anwenden",
          "text": "Gib mir wirksame Gedächtnistechniken, um mir [Thema/Informationen] nachhaltig einzuprägen.\n\nLernstoff: [Inhalte, Liste oder Konzept hier einfügen]\nPrüfungstermin: [wie viel Zeit verbleibt]\nBevorzugter Lerntyp: [visuell / auditiv / strukturiert / egal]\n\nStelle mindestens drei verschiedene Techniken vor (z. B. Eselsbrücken/Mnemonics, Loci-Methode, Chunking) mit konkreten Beispielen angewendet auf diesen Lernstoff."
        },
        {
          "title": "Last-Minute-Checkliste für die Prüfung",
          "text": "Erstelle eine Last-Minute-Wiederholungs-Checkliste für meine anstehende Prüfung.\n\nFach: [Fach]\nPrüfungstermin: [z. B. in 24 Stunden, in 3 Tagen]\nPrüfungsstoff: [Hauptthemen auflisten]\nFormat: [Multiple Choice / Essay / Rechenaufgaben]\n\nPriorisiere, was zuerst wiederholt werden sollte, hebe die Themen mit dem höchsten Punktepotenzial hervor und ergänze typische Fehler, die in der Klausur vermieden werden sollten."
        }
      ]
    }
  ],
  "productivity": [
    {
      "cat": "Planung & Priorisierung",
      "prompts": [
        {
          "title": "Wochenplanung strukturieren",
          "text": "Hilf mir bei meiner Wochenplanung. Hier sind meine Aufgaben, Deadlines und Termine:\n\n[alle anstehenden Aufgaben hier auflisten]\n\nOrdne diese in einen strukturierten Tagesplan ein, weise auf Terminkonflikte hin und schlage vor, was verschoben werden kann. Priorisiere nach geschäftlicher Auswirkung und Dringlichkeit."
        },
        {
          "title": "Großes Projekt in Teilaufgaben zerlegen",
          "text": "Ich habe ein umfangreiches Projekt, das ich in handhabbare Teilaufgaben zerlegen muss:\n\nProjekt: [Projekt und Ziel beschreiben]\nDeadline / Abgabetermin: [Datum]\nTeamgröße: [Anzahl der Personen oder allein]\n\nErstelle einen Phasenplan mit Meilensteinen, Abhängigkeiten und geschätztem Zeitaufwand pro Aufgabe."
        },
        {
          "title": "Prioritätenmatrix (Eisenhower-Prinzip) erstellen",
          "text": "Hilf mir, eine Prioritätenmatrix für meine aktuellen Aufgaben zu erstellen. Ordne jede Aufgabe einer der vier Kategorien zu: Sofort erledigen, Terminieren, Delegieren oder Verwerfen.\n\nMeine Aufgaben:\n[Aufgaben hier auflisten]\n\nBegründe die Einordnung für jede Aufgabe kurz."
        },
        {
          "title": "Quartalsziele definieren (SMART)",
          "text": "Hilf mir, Ziele für das nächste Quartal zu formulieren. Meine Rolle ist [Berufsbezeichnung/Funktion] und mein Hauptziel lautet [beschreibe, was du erreichen möchtest].\n\nEntwirf 3–5 SMART-Ziele mit Erfolgsmetriken, den wichtigsten Maßnahmen pro Ziel und einer einfachen Methode zur wöchentlichen Fortschrittsmessung."
        }
      ]
    },
    {
      "cat": "Meetings & Besprechungen",
      "prompts": [
        {
          "title": "Meeting-Agenda-Vorlage erstellen",
          "text": "Erstelle eine strukturierte Agenda für folgendes Meeting:\n\nMeeting-Typ: [z. B. Weekly Sync, Projekt-Kickoff, Retrospektive]\nDauer: [Zeitraum]\nTeilnehmer: [Rollen oder Namen]\nZiel: [was entschieden oder erreicht werden soll]\n\nIntegriere Zeitblöcke (Timeboxing) für jeden Tagesordnungspunkt und formuliere das angestrebte Ergebnis klar."
        },
        {
          "title": "Meeting-Notizen zusammenfassen",
          "text": "Fasse diese Meeting-Notizen in einem übersichtlichen, schnell erfassbaren Format mit drei Abschnitten zusammen: Wichtigste Entscheidungen, To-dos / Action Items (mit Verantwortlichen und Fristen) sowie Offene Fragen.\n\nNotizen:\n[Notizen hier einfügen]"
        },
        {
          "title": "To-dos aus Notizen extrahieren",
          "text": "Extrahiere alle Aufgaben und To-dos (Action Items) aus diesen Meeting-Notizen. Nenne für jede Aufgabe: die konkrete Tätigkeit, den Verantwortlichen (falls genannt) und die Frist (falls erwähnt). Formatiere das Ergebnis als nummerierte Liste.\n\nMeeting-Notizen:\n[Notizen hier einfügen]"
        },
        {
          "title": "Follow-up-E-Mail nach einem Meeting",
          "text": "Schreibe eine prägnante Follow-up-E-Mail für ein soeben beendetes Meeting.\n\nMeeting-Thema: [Thema]\nTeilnehmer: [Namen oder Rollen]\nGetroffene Entscheidungen: [auflisten]\nNächste Schritte / Action Items: [mit Verantwortlichen auflisten]\nNächster Termin: [Datum oder noch offen]\n\nHalte die E-Mail kurz, verbindlich und professionell."
        }
      ]
    },
    {
      "cat": "E-Mail & Schriftverkehr",
      "prompts": [
        {
          "title": "Professionelle E-Mail verfassen",
          "text": "Schreibe eine professionelle E-Mail mit folgenden Angaben:\n\nEmpfänger: [Name und Rolle]\nKontext: [Hintergrund der Situation]\nHauptanliegen / Kernbotschaft: [was mitgeteilt werden soll]\nTonalität: [z. B. formell, freundlich, direkt]\n\nFasse dich kurz und schließe mit einem klaren nächsten Schritt ab."
        },
        {
          "title": "Auf heikle E-Mail antworten",
          "text": "Hilf mir, sachlich, professionell und besonnen auf diese E-Mail zu antworten.\n\nErhaltene E-Mail:\n[E-Mail hier einfügen]\n\nMeine Situation: [relevanten Kontext ergänzen]\nGewünschtes Ergebnis: [was nach dem Versenden erreicht werden soll]\n\nFormuliere eine Antwort, die bestimmt, aber konstruktiv und lösungsorientiert ist."
        },
        {
          "title": "Wiederverwendbare E-Mail-Vorlagen erstellen",
          "text": "Erstelle [Anzahl] wiederverwendbare E-Mail-Vorlagen für [Anwendungsfall, z. B. Kunden-Check-ins, Projektstatus-Updates, Onboarding neuer Kontakte].\n\nJede Vorlage sollte eine Betreffzeile, einen Textkörper mit [Platzhaltern] zur Personalisierung und einen Call-to-Action enthalten. Halte jede Vorlage unter 150 Wörtern."
        },
        {
          "title": "Anfrage höflich ablehnen",
          "text": "Hilf mir, eine freundliche, aber unmissverständliche Absage auf diese Anfrage zu formulieren:\n\nDie Anfrage: [beschreiben, worum gebeten wurde]\nGrund für die Absage: [kurze, ehrliche Begründung]\nVerhältnis zum Absender: [Kollege, Kunde, Vorgesetzter usw.]\n\nSchlage nach Möglichkeit eine Alternative vor oder federe die Ablehnung diplomatisch ab. Halte die Antwort kurz."
        }
      ]
    },
    {
      "cat": "Entscheidungsfindung",
      "prompts": [
        {
          "title": "Strukturiertes Entscheidungs-Framework anwenden",
          "text": "Ich muss eine Entscheidung zwischen folgenden Optionen treffen:\n\nOption A: [beschreiben]\nOption B: [beschreiben]\nOption C: [beschreiben, oder weglassen falls nur zwei]\n\nKontext: [was auf dem Spiel steht, Rahmenbedingungen, Zeitplan]\n\nBewerte jede Option nach: Auswirkung (Impact), Aufwand, Risiko und Reversibilität (Umkehrbarkeit). Sprich eine begründete Empfehlung für die beste Option aus."
        },
        {
          "title": "Pre-Mortem-Analyse durchführen",
          "text": "Führe eine Pre-Mortem-Analyse für diesen Plan durch. Nimm an, wir befinden uns [6 Monate / 1 Jahr] in der Zukunft und das Vorhaben ist komplett gescheitert.\n\nDer Plan: [Plan oder Initiative beschreiben]\n\nNenne die wahrscheinlichsten Ursachen für das Scheitern, die Frühwarnzeichen, auf die ich achten sollte, und Anpassungen, die wir bereits jetzt am Plan vornehmen sollten."
        },
        {
          "title": "Entscheidungsmatrix mit Kriteriengewichtung",
          "text": "Hilf mir, diese Entscheidung anhand gewichteter Bewertungskriterien zu treffen.\n\nEntscheidungsfrage: [was entschieden werden soll]\nOptionen: [Optionen auflisten]\nRelevante Kriterien (Wichtigkeit von 1–5 bewerten): [Kriterien auflisten, z. B. Kosten, Geschwindigkeit, Qualität, Risiko]\n\nErstelle eine gewichtete Scoring-Tabelle, bewerte jede Option und küre die Gewinneroption mit Begründung."
        },
        {
          "title": "Stakeholder-Impact-Analyse",
          "text": "Analysiere die Auswirkungen dieser Entscheidung bzw. Veränderung auf alle Stakeholder:\n\nDie Entscheidung: [beschreiben]\nBeteiligte Stakeholder: [Gruppen oder Personen auflisten]\n\nErmittle für jeden Stakeholder: Art der Auswirkung (positiv oder negativ), voraussichtliche Reaktion und gezielte Kommunikations- oder Begleitmaßnahmen."
        }
      ]
    },
    {
      "cat": "Kommunikation",
      "prompts": [
        {
          "title": "Projekt-Statusupdate verfassen",
          "text": "Schreibe einen Projekt-Statusbericht für [Zielgruppe, z. B. Geschäftsführung, Projektteam, Kunde].\n\nProjekt: [Name und einzeilige Kurzbeschreibung]\nStatus: [im Plan (on track) / gefährdet / verzögert]\nErreicht in dieser Periode: [auflisten]\nGeplant für die nächste Periode: [auflisten]\nBlocker oder Risiken: [auflisten oder 'keine']\n\nBeschränke dich auf eine Seite und benenne Risiken offen und transparent."
        },
        {
          "title": "Technisches Konzept laienverständlich erklären",
          "text": "Erkläre [technisches Konzept oder Fachbegriff] für jemanden ohne technischen Hintergrund. Nutze eine anschauliche Alltagsanalogie, verzichte auf Fachjargon und halte den Text unter 150 Wörtern. Die Zielgruppe ist: [beschreiben, z. B. Geschäftsführung, Kunden, HR-Team]."
        },
        {
          "title": "Konstruktives Feedback formulieren (SBI-Modell)",
          "text": "Hilf mir, klares, konstruktives Mitarbeiterfeedback zu formulieren.\n\nSituation: [was wann passiert ist]\nAuswirkung (Impact): [wie es das Team, das Projekt oder das Ergebnis beeinflusst hat]\nKonkretes Verhalten: [präzise beschreiben, nicht persönlich werden]\nGewünschte Veränderung: [was künftig anders laufen soll]\n\nFormuliere das Feedback nach dem SBI-Modell (Situation, Behavior, Impact) in einem wertschätzenden, unterstützenden Ton."
        },
        {
          "title": "Eskalations-E-Mail verfassen",
          "text": "Schreibe eine Eskalations-E-Mail für eine blockierte oder kritische Situation.\n\nProblem: [Problem präzise beschreiben]\nFolgen bei Nichtlösung: [Zeitplan, Geschäftsrisiko oder finanzielle Kosten]\nBisherige Lösungsversuche: [bereits unternommene Schritte]\nBenötigte Unterstützung: [Entscheidung, Ressourcen oder Intervention]\nEmpfänger: [Rolle und Bezug zum Thema]\n\nFormuliere direkt und lösungsorientiert, ohne vorwurfsvoll zu wirken."
        }
      ]
    },
    {
      "cat": "Persönliche Routinen & Gewohnheiten",
      "prompts": [
        {
          "title": "Morgenroutine optimieren",
          "text": "Hilf mir, eine effektive Morgenroutine zu gestalten. Meine Ausgangslage:\n\nAufstehzeit: [Uhrzeit]\nVerfügbare Zeit vor Arbeitsbeginn: [Dauer]\nBisherige Routine: [beschreiben oder 'keine']\nZiele, die gefördert werden sollen: [z. B. Fokus, Fitness, Gelassenheit, Lernen]\nRahmenbedingungen / Einschränkungen: [z. B. Kinder, Pendelzeit, wenig Platz]\n\nEntwirf eine realistische Routine mit festen Zeitblöcken und erläutere den Nutzen jedes Elements."
        },
        {
          "title": "Gewohnheiten-Tracker (Habit Tracker) gestalten",
          "text": "Hilf mir, einen Habit Tracker für folgende Gewohnheiten zu entwerfen, die ich etablieren möchte:\n\nGewohnheiten: [auflisten]\nTracking-Intervall: [täglich / wöchentlich]\nBevorzugtes Format: [einfache Checkliste, Tabellenspalten, Journal-Fragen etc.]\n\nSchlage für jede Gewohnheit einen Auslöser (Trigger), eine Minimalversion (Minimum Viable Habit) für stressige Tage und eine konkrete Kennzahl zur Fortschrittsmessung vor."
        },
        {
          "title": "Wochenrückblick-Vorlage (Weekly Review) erstellen",
          "text": "Erstelle eine Vorlage für einen wöchentlichen Rückblick (Weekly Review), die ich jeden [Wochentag] zur Reflexion und Planung nutzen kann.\n\nMeine Lebensbereiche / Schwerpunkte: [z. B. Berufsprojekte, Gesundheit, Beziehungen, Weiterbildung]\nVerfügbare Zeit: [Dauer]\n\nIntegriere Reflexionsfragen, einen Bereich für Erfolge (Wins) und Erkenntnisse (Lessons Learned) sowie einen Planungsteil für die kommende Woche. Halte es praxisnah und zügig ausfüllbar."
        },
        {
          "title": "Lernplan für neue Fähigkeit erstellen",
          "text": "Erstelle einen strukturierten Lernplan für [Fähigkeit, die ich lernen möchte].\n\nMein aktueller Kenntnisstand: [absoluter Anfänger / Grundkenntnisse vorhanden / fortgeschritten]\nVerfügbare Zeit: [Stunden pro Woche]\nZieltermin: [Datum oder flexibel]\nBevorzugter Lernstil: [Videos, Fachliteratur, Praxisprojekte, Online-Kurse etc.]\n\nUnterteile den Plan in Phasen mit konkreten Ressourcen, Meilensteinen und Methoden zur Überprüfung des Lernfortschritts auf jeder Stufe."
        }
      ]
    }
  ],
  "legal": [
    {
      "cat": "Verträge",
      "prompts": [
        {
          "title": "Vertrag auf Risiken & Red Flags prüfen",
          "text": "Überprüfe diesen Vertrag auf bedenkliche Klauseln (Red Flags), unübliche Regelungen oder einseitige Benachteiligungen. Hebe alles hervor, was erhebliche Risiken oder Haftungsfallen bergen könnte:\n\n[Vertragstext hier einfügen]\n\nErkläre für jeden Fundpunkt das konkrete Risiko und schlage eine rechtlich ausgewogene Formulierung vor."
        },
        {
          "title": "Zentrale Vertragspunkte zusammenfassen",
          "text": "Fasse die wesentlichen Klauseln dieses Vertrags in klarer, verständlicher Sprache zusammen. Behandle: Vertragsparteien, Laufzeit, Zahlungsbedingungen, Pflichten beider Seiten, Kündigungsbedingungen und besondere Einschränkungen:\n\n[Vertragstext hier einfügen]"
        },
        {
          "title": "Geheimhaltungsvereinbarung (NDA) strukturieren",
          "text": "Erstelle die Gliederung für eine Geheimhaltungsvereinbarung (Non-Disclosure Agreement / NDA) zwischen:\n\nOffenlegende Partei: [Name/Art, z. B. ein SaaS-Startup]\nEmpfangende Partei: [Name/Art, z. B. potenzieller Unternehmenskunde]\nZweck der Offenlegung: [z. B. Prüfung einer Softwareintegration]\nVertragslaufzeit: [z. B. 2 Jahre]\n\nBerücksichtige die Standardklauseln: Definition vertraulicher Informationen, Geheimhaltungspflichten, Ausnahmetatbestände, Laufzeit und Rechtsbehelfe bei Vertragsverletzung."
        },
        {
          "title": "Zwei Vertragsversionen vergleichen",
          "text": "Vergleiche diese beiden Versionen eines Vertrags und fasse die wesentlichen Abweichungen zusammen. Hebe Änderungen hervor, die Rechte, Pflichten, Haftung oder Zahlungsmodalitäten spürbar beeinflussen:\n\nVersion 1:\n[hier einfügen]\n\nVersion 2:\n[hier einfügen]"
        }
      ]
    },
    {
      "cat": "Compliance & Regulierung",
      "prompts": [
        {
          "title": "DSGVO-Compliance-Checkliste erstellen",
          "text": "Erstelle eine DSGVO-Compliance-Checkliste für [Art der Organisation, z. B. B2B-SaaS-Unternehmen], das [Arten von Daten, z. B. E-Mail-Adressen und Nutzungsstatistiken] von Nutzern in der EU erhebt.\n\nBehandle: Rechtsgrundlagen der Verarbeitung, Einwilligung, Betroffenenrechte, Aufbewahrungsfristen, Meldepflicht bei Datenpannen und Auftragsverarbeitungsverträge (AVV)."
        },
        {
          "title": "Prüfung eines Datenverarbeitungsvorgangs",
          "text": "Hilf mir bei der datenschutzrechtlichen Prüfung folgender Datenverarbeitungsaktivität:\n\nAktivität: [beschreiben, z. B. Versand von Marketing-E-Mails an Empfänger in der EU]\nErfasste Daten: [Arten auflisten]\nEingesetzte Drittanbieter / Auftragsverarbeiter: [auflisten, z. B. Mailchimp, Stripe]\n\nIdentifiziere rechtliche Verpflichtungen, Datenschutzrisiken und empfohlene technische sowie organisatorische Schutzmaßnahmen (TOMs)."
        },
        {
          "title": "Auswirkungsanalyse regulatorischer Änderungen",
          "text": "Analysiere die Auswirkungen folgender Gesetzesänderung auf unser Unternehmen:\n\nRegulierung: [Bezeichnung und Geltungsbereich, z. B. EU AI Act, California SB 1047]\nUnser Geschäftsmodell: [kurze Beschreibung]\nBestehende Praxis: [relevante aktuelle Abläufe beschreiben]\n\nWelche Anpassungen müssen vorgenommen werden? Priorisiere nach Dringlichkeit."
        },
        {
          "title": "Audit-Vorbereitung strukturieren",
          "text": "Hilf uns bei der Vorbereitung auf ein bevorstehendes Audit [Art des Audits, z. B. SOC 2 Type II, ISO 27001, DSGVO-Audit].\n\nUnser Unternehmen: [Kurzbeschreibung]\nAudit-Umfang (Scope): [beschreiben]\nZeitrahmen: [z. B. Audit findet in 3 Monaten statt]\n\nErstelle eine priorisierte Checkliste mit vorzubereitenden Nachweisen, typischen Prüfungsfeststellungen, die vorab behoben werden sollten, und erforderlichen Dokumenten."
        }
      ]
    },
    {
      "cat": "Richtlinien & Policies",
      "prompts": [
        {
          "title": "Datenschutzerklärung strukturiert entwerfen",
          "text": "Entwirf eine Gliederung für eine Datenschutzerklärung für:\n\nProdukt/Dienstleistung: [beschreiben]\nErfasste Daten: [Arten auflisten, z. B. Name, E-Mail, Zahlungsdaten, Nutzungsdaten]\nGenutzte Drittanbieter-Dienste: [z. B. Stripe, Google Analytics, AWS]\nStandort der Nutzer: [z. B. EU und USA]\n\nBerücksichtige alle nach DSGVO und CCPA erforderlichen Abschnitte. Formuliere in verständlicher, transparenter Sprache."
        },
        {
          "title": "Nutzungsrichtlinie (Acceptable Use Policy) verfassen",
          "text": "Verfasse eine Richtlinie zur zulässigen Nutzung (Acceptable Use Policy / AUP) für [Produkt-/Plattformname], ein [Produkt beschreiben, z. B. cloudbasiertes Kollaborationstool für Unternehmen].\n\nIntegriere: zulässige Nutzung, verbotene Aktivitäten, Durchsetzung und Konsequenzen bei Verstößen sowie Meldewege für Missbrauch.\n\nDer Tonfall sollte klar und professionell sein, ohne unnötiges juristisches Kauderwelsch."
        },
        {
          "title": "Kapitel für Mitarbeiterhandbuch schreiben",
          "text": "Schreibe einen Abschnitt für unser Mitarbeiterhandbuch zum Thema [Thema, z. B. Homeoffice-Regelung / Datensicherheit / Social-Media-Nutzung].\n\nUnternehmenstyp: [beschreiben]\nWichtigste Regeln: [auflisten]\nTonalität: [z. B. kollegial, aber verbindlich]\n\nFormuliere leicht verständlich: Erwartungshaltung, unzulässige Verhaltensweisen und Konsequenzen bei Nichteinhaltung."
        },
        {
          "title": "Verhaltenskodex (Code of Conduct) entwerfen",
          "text": "Entwirf einen Verhaltenskodex (Code of Conduct) für [Art der Organisation, z. B. ein Open-Source-Projekt / ein Tech-Startup].\n\nZentrale Werte: [auflisten, z. B. Inklusion, Respekt, Transparenz]\nGeltungsbereich: [z. B. für Mitwirkende, Mitarbeiter, Events]\n\nEnthalten sein sollten: erwünschtes Verhalten, inakzeptables Verhalten, Meldeprozess bei Verstößen und Durchsetzungsmaßnahmen."
        }
      ]
    },
    {
      "cat": "Geistiges Eigentum",
      "prompts": [
        {
          "title": "Markenrecherche vorbereiten",
          "text": "Hilf mir bei der Vorbereitung einer Markenrecherche für folgende Kennzeichnung:\n\nGeplante Marke: [Name oder Slogan]\nWaren/Dienstleistungen (Nizza-Klassen): [Angebot beschreiben]\nZielregionen: [z. B. Deutschland, EU, USA]\n\nErkläre, worauf bei der Recherche zu achten ist, welche Kriterien für die Eintragungsfähigkeit gelten und welche Verwechslungsgefahren vermieden werden müssen."
        },
        {
          "title": "Stand der Technik (Prior Art) für Patent zusammenfassen",
          "text": "Hilf mir, den relevanten Stand der Technik (Prior Art) für folgende Erfindungsidee im Hinblick auf eine Patentanmeldung zusammenzufassen:\n\nBeschreibung der Erfindung: [in verständlicher Sprache beschreiben]\nTechnologiefeld: [z. B. Machine Learning, Biotechnologie, Software]\n\nErläutere die Bedeutung des Stands der Technik, welche Datenbanken/Kategorien durchsucht werden sollten, und hilf mir, die Neuheit und erfinderische Tätigkeit präzise herauszuarbeiten."
        },
        {
          "title": "Open-Source-Lizenzen vergleichen",
          "text": "Vergleiche diese Open-Source-Lizenzen für unseren konkreten Anwendungsfall:\n\nZu vergleichende Lizenzen: [z. B. MIT, Apache 2.0, GPL v3, AGPL]\nUnser Anwendungsfall: [z. B. wir entwickeln ein kommerzielles SaaS-Produkt, das Open-Source-Bibliotheken einbindet]\n\nErläutere für jede Lizenz: Was ist erlaubt? Was ist Pflicht (z. B. Copyleft, Namensnennung)? Was ist verboten? Empfiehl die passendste Lizenz mit Begründung."
        },
        {
          "title": "Checkliste zur Rechteübertragung (IP Assignment)",
          "text": "Erstelle eine Checkliste zur lückenlosen Übertragung von Urheber- und Verwertungsrechten (IP Assignment), wenn wir [Freelancer / Angestellte / Dienstleister] für [Arbeitsbereich beschreiben, z. B. Softwareentwicklung] beauftragen.\n\nWelche Klauseln müssen im Vertrag stehen? Was muss dokumentiert werden? Welche typischen Fallstricke müssen vermieden werden, damit sämtliche Rechte vollumfänglich auf unser Unternehmen übergehen?"
        }
      ]
    },
    {
      "cat": "Wirtschaftsrecht & Verträge",
      "prompts": [
        {
          "title": "AGB-Gliederung für Geschäftsmodelle",
          "text": "Erstelle eine Gliederung für die Allgemeinen Geschäftsbedingungen (AGB) für:\n\nProdukt: [beschreiben]\nGeschäftsmodell: [z. B. SaaS-Abonnement, Marktplatz, Online-Shop]\nNutzerkreis: [z. B. Verbraucher (B2C), Geschäftskunden (B2B)]\n\nBerücksichtige: Kontoregistrierung, Zahlung und Rückerstattungen, unzulässige Nutzung, Haftungsbeschränkung, Streitbeilegung und anwendbares Recht. Kennzeichne Passagen, die zwingend von einem Fachanwalt geprüft werden müssen."
        },
        {
          "title": "Haftungsrisiken bewerten",
          "text": "Hilf mir bei der Bewertung von Haftungsrisiken für folgende geschäftliche Tätigkeit:\n\nTätigkeit: [beschreiben, z. B. Bereitstellung KI-generierter Finanzberichte für Privatanleger]\nUnternehmensart: [beschreiben]\nRechtsordnungen / Märkte: [wo tätig]\n\nIdentifiziere die wesentlichen Haftungsrisiken, deren Eintrittswahrscheinlichkeit und Schadenspotenzial und schlage wirksame Strategien zur Risikominimierung vor."
        },
        {
          "title": "Eckpunkte für Kooperationsvertrag festlegen",
          "text": "Skizziere die wesentlichen Vertragspunkte, die in einer Kooperationsvereinbarung zwischen folgenden Partnern geregelt sein sollten:\n\nPartei A: [beschreiben]\nPartei B: [beschreiben]\nArt der Kooperation: [z. B. Umsatzbeteiligung an gemeinsam entwickeltem Produkt]\n\nRegle: Rollen und Pflichten, Aufteilung von Einnahmen/Gewinnen, Urheberrechte (IP), Entscheidungsprozesse, Ausstiegs-/Kündigungsklauseln und Streitbeilegung."
        },
        {
          "title": "Prüfcheckliste für Dienstleisterverträge",
          "text": "Erstelle eine Checkliste zur Überprüfung von Lieferanten- und Dienstleisterverträgen vor der Unterzeichnung. Unser Unternehmen ist ein [beschreiben, z. B. Series-A-Fintech-Startup].\n\nBesonders wichtig sind uns: [Punkte auflisten, z. B. Datenschutz/Auftragsverarbeitung, SLAs, Haftungsobergrenzen, Kündigungsrechte]\n\nWorauf müssen wir standardmäßig achten? Welche einseitig nachteiligen Klauseln verwenden Anbieter häufig, und welche Punkte sollten wir nachverhandeln?"
        }
      ]
    },
    {
      "cat": "Rechtstexte vereinfachen",
      "prompts": [
        {
          "title": "Rechtstext in verständliche Sprache übersetzen",
          "text": "Formuliere diesen juristischen Text in klarer, allgemein verständlicher Sprache um. Die rechtliche Bedeutung muss vollständig erhalten bleiben, jedoch ohne Juristendeutsch, Schachtelsätze und unnötige Passivkonstruktionen:\n\n[Rechtstext hier einfügen]\n\nZielgruppe: [z. B. Endverbraucher / Kleinunternehmer]"
        },
        {
          "title": "Nutzerfreundlichen Rechtshinweis erstellen",
          "text": "Verfasse einen nutzerorientierten Rechtshinweis für folgende gesetzliche Anforderung:\n\nAnforderung: [z. B. DSGVO-Einwilligung für Marketing-E-Mails / Cookie-Banner / Aktualisierung der Aufbewahrungsfristen]\nEinsatzort: [wo der Hinweis erscheint, z. B. Registrierungsformular / In-App-Banner]\nTonalität: [z. B. sympathisch, prägnant, vertrauenerweckend]\n\nGestalte den Hinweis transparent, ehrlich und so kurz wie möglich, ohne Pflichtangaben auszulassen."
        },
        {
          "title": "FAQ aus Rechtsdokument ableiten",
          "text": "Wandle dieses Rechtsdokument in ein leicht verständliches FAQ-Format um, das Nutzer tatsächlich lesen und verstehen. Greife die wichtigsten Kernpunkte und die typischsten Nutzerfragen auf:\n\n[Dokument hier einfügen]\n\nFormatiere als Frage-Antwort-Paare. Ziel: 8–12 Fragen. Beschränke jede Antwort auf 2–3 prägnante Sätze."
        },
        {
          "title": "Richtlinie in praxisnahen Mitarbeiter-Guide übersetzen",
          "text": "Nimm diese formale Unternehmensrichtlinie und schreibe sie in einen verständlichen, praxisnahen Leitfaden für Mitarbeiter um. Ziel ist, dass das Team die Regeln wirklich versteht und im Arbeitsalltag lebt:\n\nRichtlinie:\n[hier einfügen]\n\nBehandle: Was bedeutet das im Arbeitsalltag? Konkrete Beispiele für Do's und Don'ts sowie Handlungsanweisungen bei Unsicherheiten."
        }
      ]
    }
  ],
  "sales": [
    {
      "cat": "Akquise & Lead-Generierung",
      "prompts": [
        {
          "title": "Kaltakquise-E-Mail verfassen",
          "text": "Schreibe eine Kaltakquise-E-Mail an einen potenziellen Neukunden (Prospect).\n\nName des Zielunternehmens: [Unternehmen]\nRolle des Ansprechpartners: [z. B. VP Sales, Head of Operations]\nUnser Angebot: [Produkt/Dienstleistung kurz beschreiben]\nZentrales Nutzenversprechen: [welches Problem wir lösen]\nGewünschtes Ergebnis: [z. B. 20-minütiges Kennenlerngespräch vereinbaren]\n\nMaximal 150 Wörter. Beginne mit dem Schmerzpunkt (Pain Point) des Kunden, nicht mit unserem Produkt. Schließe mit einem einfachen, niedrigschwelligen CTA ab."
        },
        {
          "title": "3-stufige LinkedIn-Outreach-Sequenz erstellen",
          "text": "Erstelle eine 3-stufige LinkedIn-Nachrichtensequenz zur Kundenakquise.\n\nProfil des Prospects: [Rolle, Unternehmen, Branche]\nUnser Angebot: [Produkt/Dienstleistung und Kernvorteil]\n\nSchritt 1: Notiz zur Kontaktanfrage (unter 300 Zeichen)\nSchritt 2: Erste Nachricht nach Vernetzung (mehrwertorientiert, kein Pitch, unter 100 Wörtern)\nSchritt 3: Follow-up nach 5 Tagen ohne Antwort (freundlicher Impuls, unter 80 Wörtern)\n\nTonalität: professionell und menschlich. Vermeide Standardfloskeln wie 'Ich bin auf dein Profil gestoßen'."
        },
        {
          "title": "Gesprächsvorbereitung & Recherche für Sales-Call",
          "text": "Hilf mir bei der Vorbereitung auf ein Verkaufsgespräch mit folgendem Lead:\n\nName des Ansprechpartners: [Name]\nRolle: [Titel/Position]\nUnternehmen: [Unternehmensname]\nBranche: [Branche]\nZiel des Gesprächs: [z. B. Bedarfsanalyse/Discovery, Produktdemo, Abschluss]\n\nLiefere:\n1. 5 gezielte Fragen abgestimmt auf typische Prioritäten dieser Position\n2. 3 potenzielle Pain Points für diese Rolle\n3. 2 aktuelle Branchentrends für den Aufbau von Glaubwürdigkeit\n4. Einen passenden Icebreaker mit Bezug zu Person oder Unternehmen."
        },
        {
          "title": "Ideal Customer Profile (ICP) definieren",
          "text": "Hilf mir, das ideale Kundenprofil (Ideal Customer Profile / ICP) für unser Angebot zu schärfen.\n\nProdukt/Dienstleistung: [was verkauft wird]\nBestehende Top-Kunden: [2–3 Beispiele beschreiben, falls vorhanden]\nGelöstes Problem: [zentraler Pain Point]\nPreispunkt: [ungefähre Größenordnung]\n\nErstelle:\n1. Firmografisches Profil (Unternehmensgröße, Branche, Region, Jahresumsatz)\n2. Technografische Merkmale (eingesetzte Tools und Technologien)\n3. Verhaltensbezogene Kaufauslöser (Trigger-Events)\n4. Anti-ICP: Wen wir bewusst NICHT ansprechen sollten und warum."
        }
      ]
    },
    {
      "cat": "Bedarfsanalyse & Discovery",
      "prompts": [
        {
          "title": "Leitfaden für Discovery-Calls (SPIN-Methode)",
          "text": "Erstelle einen Fragenkatalog für ein Erstgespräch zur Bedarfsanalyse (Discovery Call).\n\nProdukt/Dienstleistung: [was wir verkaufen]\nZiel-Persona: [Position und Branche]\nGeplante Dauer: [z. B. 30 Minuten]\n\nGliedere die Fragen nach der SPIN-Struktur:\n1. Situationsfragen (2–3 Fragen zum Status quo)\n2. Problemfragen (2–3 Fragen zur Identifikation von Pain Points)\n3. Implikationsfragen (2 Fragen zu den geschäftlichen Konsequenzen des Problems)\n4. Nutzenfragen (Need-Payoff – 2 Fragen, damit der Kunde den Mehrwert der Lösung selbst formuliert)\n\nErgänze eine offene Abschlussfrage, um die Bereitschaft für nächste Schritte abzuklopfen."
        },
        {
          "title": "Pain Points aus Gesprächsnotizen herausarbeiten",
          "text": "Analysiere diese Notizen aus einem Discovery-Gespräch, identifiziere die zentralen Schmerzpunkte (Pain Points) und ordne sie nach Dringlichkeit.\n\nGesprächsnotizen:\n[Notizen hier einfügen]\n\nFür jeden Pain Point:\n1. Klar benennen und beschreiben\n2. Aussage des Kunden zitieren oder paraphrasieren\n3. Dringlichkeit einstufen: Hoch / Mittel / Gering\n4. Passendes Produktfeature bzw. Nutzenversprechen zuordnen\n\nWeise zudem auf unterschwellige Probleme hin, die der Kunde nicht direkt ausgesprochen hat."
        },
        {
          "title": "Strukturierte Bedarfsanalyse erstellen",
          "text": "Erstelle eine strukturierte Bedarfsanalyse auf Basis dieses Kundengesprächs:\n\nKunde: [Name, Position, Unternehmen]\nGenanntes Hauptziel: [Zitat oder Zusammenfassung]\nAktueller Prozess / bisherige Tools: [was heute genutzt wird]\nGenannte Frustrationen: [auflisten]\nGenannter Zeitplan: [falls vorhanden]\nBudget-Signale: [falls vorhanden]\n\nLiefere eine strukturierte Analyse mit:\n- Primärem Bedarf\n- Sekundärem Bedarf\n- Erfolgskriterien (was bedeutet eine gelungene Lösung für den Kunden?)\n- Empfohlenem nächsten Schritt im Vertriebsprozess."
        },
        {
          "title": "Lead-Qualifizierung nach BANT und MEDDIC",
          "text": "Bewerte diesen Lead anhand etablierter Qualifizierungs-Frameworks.\n\nLead: [Name, Rolle, Unternehmen]\nGesprächsnotizen: [Notizen einfügen]\n\nBewerte anhand beider Modelle:\n\nBANT:\n- Budget: [bekannt / unbekannt / bestätigt]\n- Authority (Entscheidungskompetenz): [Entscheider / Beeinflusser / unklar]\n- Need (Bedarf): [stark / mäßig / schwach / unklar]\n- Timeline (Zeitrahmen): [dringend / innerhalb 6 Monaten / kein Zeithorizont]\n\nMEDDIC:\n- Metrics (Messbare Kennzahlen): [bezifferte Auswirkung bekannt?]\n- Economic Buyer (Budgetverantwortlicher): [identifiziert?]\n- Decision Criteria (Entscheidungskriterien): [bekannt?]\n- Decision Process (Entscheidungsweg): [verstanden?]\n- Identify Pain (Kernproblem): [bestätigt?]\n- Champion (Interner Fürsprecher): [vorhanden?]\n\nEmpfehlung: Qualifizieren / Weiter pflegen (Nurture) / Disqualifizieren – inklusive Begründung."
        }
      ]
    },
    {
      "cat": "Pitch & Produktdemo",
      "prompts": [
        {
          "title": "Sales-Pitch auf Ziel-Persona zuschneiden",
          "text": "Passe unseren Sales-Pitch auf eine spezifische Ziel-Persona an.\n\nUnser Angebot: [Produkt/Dienstleistung beschreiben]\nZentrales Nutzenversprechen: [1–2 Sätze]\nZiel-Persona: [Rolle, Unternehmenstyp, Branche]\nIhre mutmaßlichen Top-Prioritäten: [z. B. Kostensenkung, Teameffizienz, Compliance]\nIdentifizierte Pain Points: [aus der Bedarfsanalyse]\n\nFormuliere den Pitch so um, dass er:\n1. Mit der wichtigsten Priorität dieser Persona einsteigt\n2. Die Fachsprache der Zielgruppe nutzt (kein interner Firmenjargon)\n3. Unsere Features direkt mit den konkreten Problemen verknüpft\n4. Mit einem überzeugenden Argument für eine zeitnahe Entscheidung schließt."
        },
        {
          "title": "Ablaufplan für Produktdemos (Demo Script) entwerfen",
          "text": "Erstelle einen Ablaufplan (Demo Script) für eine Produktdemo.\n\nProdukt: [Name und Kurzbeschreibung]\nKunde: [Rolle, Unternehmen, Branche]\nIn der Bedarfsanalyse bestätigte Probleme: [auflisten]\nGeplante Dauer: [z. B. 30 Minuten]\nHervorzuhebende Kernfunktionen: [3–4 Funktionen auflisten]\n\nGliederung:\n1. Begrüßung & Agenda (Zielabgleich, 2 Min.)\n2. Rahmensetzung (Bezug zu den Kundenproblemen herstellen, 3 Min.)\n3. Hauptteil der Demo (Funktion für Funktion mit konkretem Nutzen/Mehrwert, 18 Min.)\n4. Feedback & Zwischenfragen (Pause für Einwände/Fragen, 4 Min.)\n5. Abschluss (nächste Schritte und Call-to-Action, 3 Min.)\n\nFormuliere für jeden Abschnitt einen geschmeidigen Überleitungssatz."
        },
        {
          "title": "ROI-Wirtschaftlichkeitsrechnung & Argumentation aufbauen",
          "text": "Hilf mir, eine überzeugende ROI-Argumentation (Return on Investment) für ein Kundengespräch zu entwickeln.\n\nUnser Produkt/Dienstleistung: [Beschreibung]\nGröße des Zielunternehmens: [Mitarbeiterzahl / Umsatz falls bekannt]\nAktueller Schmerzpunkt: [beschreiben]\nErgebnis durch unsere Lösung: [was verbessert wird]\n\nBaue eine schlüssige Story auf:\n1. Aktuelle Kosten des Problems (Zeitaufwand, Geld oder Geschäftsrisiko)\n2. Konservative Schätzung der Verbesserung durch unsere Lösung\n3. Jährliche ROI-Berechnung mit transparenten Annahmen\n4. Amortisationsdauer (Payback Period)\n5. Eine einzeilige Kernaussage für Führungskräfte/C-Level\n\nVerwende runde Zahlen und mache alle Annahmen anpassbar für den Kunden."
        },
        {
          "title": "Kunden-Case-Study für Leads aufbereiten",
          "text": "Fasse eine Kunden-Erfolgsgeschichte (Case Study) für einen potenziellen Kunden zusammen.\n\nReferenzkunde: [Name oder 'ein Unternehmen aus der [Branche]']\nAusgangslage/Problem: [beschreiben]\nEinsatz unserer Lösung: [beschreiben]\nErzielte Resultate: [Kennzahlen falls vorhanden]\nZeitrahmen: [Dauer bis zur Zielerreichung]\n\nErstelle eine 150-Wörter-Zusammenfassung gegliedert nach:\n- Situation\n- Herausforderung\n- Lösung\n- Ergebnisse\n\nFormuliere zudem eine 1-Satz-Version für E-Mails sowie 2 Anschlussfragen, um die Erfolgsstory auf die Situation des Gesprächspartners zu übertragen."
        }
      ]
    },
    {
      "cat": "Einwandbehandlung",
      "prompts": [
        {
          "title": "Auf Preiseinwände souverän reagieren",
          "text": "Hilf mir, professionell auf einen Preiseinwand zu reagieren.\n\nAussage des Kunden: „[genauer Wortlaut oder sinngemäß]“\nUnser Preis: [ungefähr]\nErbrachter Mehrwert: [Hauptergebnisse]\nVergleichbare Alternative/Wettbewerber: [falls bekannt]\n\nFormuliere eine Antwort, die:\n1. Den Einwand wertschätzend aufnimmt, ohne defensiv zu wirken\n2. Kosten als lohnende Investition mit ROI-Fokus umdeutet\n3. Den Preis auf Tages- oder Nutzerebene herunterbricht, falls sinnvoll\n4. Einen konkreten nächsten Schritt vorschlägt (ohne direkt Rabatte anzubieten)\n\nSchlage zudem eine klärende Rückfrage vor, um zu prüfen, ob es sich um ein echtes Budgetproblem oder ein Wertwahrnehmungsproblem handelt."
        },
        {
          "title": "Wettbewerber-Vergleich souverän begegnen",
          "text": "Hilf mir, mit einem Einwand bezüglich eines Mitbewerbers umzugehen.\n\nAussage des Kunden: „[Zitat oder Umschreibung]“\nGenannter Wettbewerber: [Name des Konkurrenten]\nWas der Kunde am Wettbewerber schätzt: [Preis / Features / Markenbekanntheit / bestehende Beziehung]\nUnsere Alleinstellungsmerkmale: [2–3 Differenzierungsmerkmale auflisten]\n\nFormuliere eine Antwort, die:\n1. Anerkennt, dass der Kunde den Markt sorgfältig vergleicht\n2. Den Wettbewerber fair und respektvoll behandelt (kein Schlechtreden)\n3. Den Fokus auf unsere individuellen Stärken lenkt, passend zum Problem des Kunden\n4. Konkrete Kriterien für einen direkten Vergleich vorschlägt\n\nSchließe mit einer weiterführenden Frage ab, die das Gespräch voranbringt."
        },
        {
          "title": "Einwand „Nicht der richtige Zeitpunkt“ behandeln",
          "text": "Hilf mir bei der Reaktion auf den Einwand mangelnder Zeit oder falschen Timings.\n\nAussage des Kunden: „[Zitat oder Umschreibung, z. B. 'Wir haben gerade keine Kapazitäten' oder 'Lassen Sie uns im 3. Quartal sprechen']“\nBekannter Kontext: [Hintergrund aus dem Erstgespräch]\nTypische Implementierungsdauer: [z. B. 2 Wochen, 1 Tag]\n\nFormuliere eine Antwort, die:\n1. Verständnis für die aktuelle Auslastung zeigt\n2. Behutsam hinterfragt, ob Abwarten das Problem vergrößert oder löst\n3. Einen unverbindlichen, niederschwelligen Zwischenschritt anbietet\n4. Einen handfesten Grund liefert, warum ein früher Start vorteilhaft ist\n\nUnter 120 Wörtern bleiben. Keine aggressiven Druckmittel verwenden."
        },
        {
          "title": "Einwand „Ich muss mir das noch überlegen“ auflösen",
          "text": "Hilf mir, professionell auf die Floskel „Ich muss noch einmal darüber nachdenken“ oder „Ich melde mich wieder“ zu reagieren.\n\nVerkaufsphase: [wo wir im Deal stehen – z. B. Demo gehalten, Angebot verschickt]\nAussage des Kunden: „[genauer Wortlaut]“\nVermuteter wahrer Hinderungsgrund: [Preis / interne Freigabe nötig / Risiko / unklarer Nutzen]\n\nFormuliere eine Antwort, die:\n1. Den Entscheidungsprozess respektiert, ohne den Deal einschlafen zu lassen\n2. Den eigentlichen Einwand durch eine direkte, aber unaufdringliche Frage ans Licht bringt\n3. Konkrete Unterstützung bei der internen Entscheidungsfindung anbietet (z. B. Vorlage für Business Case)\n4. Einen verbindlichen Termin für das nächste Gespräch vor Gesprächsende vereinbart."
        }
      ]
    },
    {
      "cat": "Follow-up & Nachfassen",
      "prompts": [
        {
          "title": "Follow-up-E-Mail nach Produktdemo",
          "text": "Schreibe eine Follow-up-E-Mail, die innerhalb von 24 Stunden nach einer Produktdemo versendet wird.\n\nName des Kunden: [Name]\nUnternehmen: [Unternehmen]\nDatum der Demo: [Datum]\nBesprochene Pain Points: [1–3 Punkte auflisten]\nFunktionen mit der besten Resonanz: [auflisten]\nVereinbarter nächster Schritt: [z. B. Angebot senden, Abstimmung mit Team, Testzugang]\nOffene Fragen des Kunden: [falls vorhanden auflisten]\n\nDie E-Mail sollte:\n1. Sich bedanken und auf ein konkretes Gesprächsthema Bezug nehmen\n2. Die 2–3 wichtigsten Mehrwerte passend zu den Problemen zusammenfassen\n3. Offene Fragen beantworten\n4. Den vereinbarten nächsten Schritt mit klarer Zuständigkeit bestätigen\n\nTonalität: herzlich und professionell. Unter 200 Wörtern."
        },
        {
          "title": "Eingeschlafenen Lead reaktivieren",
          "text": "Schreibe eine E-Mail zur Reaktivierung eines Kontakts, der sich nicht mehr meldet.\n\nName: [Name]\nUnternehmen: [Unternehmen]\nLetzter Kontakt: [Datum und Anlass – z. B. Demo, Angebot verschickt]\nVerstrichene Zeit seit letztem Kontakt: [z. B. 6 Wochen]\nVermuteter Grund für die Funkstille: [falls bekannt]\nNeuer Aufhänger / Trigger: [z. B. Unternehmensneuigkeiten des Kunden, neues Feature bei uns, Marktveränderung]\n\nDie E-Mail sollte:\n1. Keine Vorwürfe machen und sich nicht übertrieben entschuldigen\n2. Mit einem echten Mehrwert oder Anlass einsteigen (kein 'Ich wollte mich nur mal melden')\n3. Den geschäftlichen Nutzen in einem Satz in Erinnerung rufen\n4. Einen einzigen, mühelos zu beantwortenden CTA enthalten\n\nUnter 100 Wörtern."
        },
        {
          "title": "Begleit-E-Mail zum Angebot verfassen",
          "text": "Schreibe eine professionelle Begleit-E-Mail zur Übersendung eines Angebots.\n\nName des Kunden: [Name]\nUnternehmen: [Unternehmen]\nZusammenfassung des Angebots: [kurzer Überblick über Leistungsumfang]\nGesamtinvestition / Preis: [Betrag oder Preisspanne]\nKonkreter Nutzen für den Kunden: [2–3 Stichpunkte]\nGültigkeit / Entscheidungsfrist: [falls zutreffend]\nNächster Schritt: [z. B. Abstimmungsgespräch vereinbart, Rücksendung der Unterschrift]\n\nDie E-Mail sollte:\n1. Das Angebot als passgenaue Lösung für die besprochenen Anforderungen präsentieren\n2. Die wichtigsten 2–3 Ergebnisse hervorheben\n3. Orientierung im Angebot bieten\n4. Den nächsten Schritt unmissverständlich benennen\n\nTonalität: souverän, partnerschaftlich und lösungsorientiert. Unter 180 Wörtern."
        },
        {
          "title": "Blockierten Deal wieder in Bewegung bringen",
          "text": "Schreibe eine E-Mail, um einen ins Stocken geratenen Verkaufsabschluss wieder voranzubringen.\n\nName des Ansprechpartners: [Name]\nUnternehmen: [Unternehmen]\nPhase des Deals: [z. B. Angebot liegt vor, mündliche Zusage ohne Unterschrift, Prüfung in Rechtsabteilung]\nDauer des Stillstands: [Zeitraum]\nLetzter Austausch: [kurze Zusammenfassung]\nVermuteter Blocker: [beste Vermutung]\n\nDie E-Mail sollte:\n1. Keinen künstlichen Druck aufbauen und nicht drängelnd wirken\n2. Echte Unterstützung anbieten (z. B. Vorlage, Daten, kurzes Gespräch zur Klärung offener Punkte)\n3. Sanfte, berechtigte Dringlichkeit vermitteln\n4. Einen konkreten nächsten Schritt mit Terminvorschlag anbieten\n\nSchlage zudem eine alternative Strategie vor, falls auf die E-Mail keine Rückmeldung erfolgt."
        }
      ]
    },
    {
      "cat": "Sales-Reporting & Pipeline",
      "prompts": [
        {
          "title": "Wöchentlicher Pipeline-Bericht",
          "text": "Verfasse eine wöchentliche Pipeline-Zusammenfassung für Vertriebsleitung oder Team.\n\nAktivitäten dieser Woche:\n- Neu eröffnete Opportunities: [Anzahl und Kurzbeschreibung]\n- Durchgeführte Demos oder Gespräche: [Anzahl]\n- Versendete Angebote: [Anzahl]\n- Gewonnene Deals (Closed Won): [Anzahl und Gesamtwert]\n- Verlorene Deals (Closed Lost): [Anzahl und Gründe falls bekannt]\n\nPipeline-Überblick:\n- Gesamtvolumen der offenen Pipeline: [Gesamtwert]\n- Deals je Verkaufsphase: [auflisten]\n- Gefährdete Deals (At-Risk): [stockende oder riskante Deals]\n\nPrioritäten für nächste Woche: [3–4 Maßnahmen auflisten]\n\nFormatiere als übersichtliche Zusammenfassung in klarer, sachlicher Sprache."
        },
        {
          "title": "Analyse verlorener Deals (Lost-Deal-Analyse)",
          "text": "Hilf mir bei der Erstellung einer Analyse für einen verlorenen Verkaufsabschluss (Lost Deal Analysis).\n\nDeal-Details:\n- Kunde: [Unternehmensname]\n- Deal-Größe: [Volumen]\n- Dauer des Verkaufszyklus: [Dauer]\n- Phase des Verlusts: [z. B. nach der Demo, nach Angebotsabgabe]\n- Genannte Absagebegründung: [Aussage des Kunden]\n- Tatsächlicher Grund (eigene Einschätzung): [ehrliche Beurteilung]\n- Gewählter Wettbewerber (falls bekannt): [Name]\n\nAnalysiere:\n1. Welche Signale haben wir übersehen oder ignoriert?\n2. An welchem Punkt geriet der Verkaufsprozess ins Wanken?\n3. Hätte der Deal gewonnen werden können? Warum bzw. warum nicht?\n4. Was sollten wir künftig anders machen?\n5. Gibt es eine Perspektive für eine spätere Wiederansprache?\n\nFormuliere ehrlich, handlungsorientiert und ohne Schutzbehauptungen."
        },
        {
          "title": "Win/Loss-Muster analysieren",
          "text": "Analysiere diese Win/Loss-Ergebnisse, um wiederkehrende Muster zu identifizieren.\n\nKürzlich gewonnene Deals:\n[gewonnene Abschlüsse auflisten – inklusive Volumen, Branche, Persona, Zyklusdauer, Hauptgrund für Gewinn]\n\nKürzlich verlorene Deals:\n[verlorene Deals auflisten – inklusive Volumen, Branche, Persona, Zyklusdauer, Hauptgrund für Verlust]\n\nArbeite heraus:\n1. Gemeinsamkeiten gewonnener Deals (ICP-Passung, Use Case, Persona, Dealgröße)\n2. Gemeinsamkeiten verlorener Deals\n3. Typische Gründe für Erfolge (Preis, Kundenbeziehung, Features, Schnelligkeit)\n4. Typische Gründe für Misserfolge (gleiche Kriterien)\n5. Handlungsempfehlungen: worauf fokussieren, was im Prozess verbessern und welches Kundensegment priorisieren."
        },
        {
          "title": "Vertriebs-Forecast für die Geschäftsführung formulieren",
          "text": "Schreibe einen Vertriebs-Forecast-Bericht für das Management oder den Beirat.\n\nPrognosezeitraum: [z. B. Q2 2026]\nVertriebsziel (Quota): [Gesamtziel]\nAktuelle Pipeline: [Gesamtwert]\nCommitted Forecast (sicherer Abschluss): [Betrag, bei dem hoher Abschlussgrad besteht]\nBest-Case-Szenario: [wenn alles optimal läuft]\nWesentliche Risiken: [Deals, die sich verschieben könnten]\n\nWichtigste Deals im Fokus:\n[3–5 Deals mit Name/Platzhalter, Phase, Volumen, erwartetem Abschlussdatum auflisten]\n\nVerfasse einen 200-Wörter-Bericht, der:\n1. Die zentrale Kennzahl klar hervorhebt\n2. Die Gründe für die Zuversicht datenbasiert untermauert\n3. Zentrale Risiken und eingeleitete Gegenmaßnahmen benennt\n4. Mit einer konkreten Bitte an die Führungsebene schließt (falls Unterstützung nötig ist)\n\nTonalität: souverän, datengestützt und transparent."
        }
      ]
    }
  ]
};
