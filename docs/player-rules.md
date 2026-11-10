# Spillerregler — USCSS Cassandra

Du er vågnet for tidligt fra hypersøvn. Skibet er ikke, som det skal være. Én eller to af dine kolleger er ikke mennesker.

## Dit hold

Du får en privat besked fra ORACLE med din **rolle** og dit **hold**.

- **Besætning:** Send alle syntetikere i kryo (se *Tribunalet*). Så snart den sidste er frosset, vinder I. Integriteten er jeres ur: Rammer én sektion 0, har I tabt.
- **Syntetiker:** Er mindst én af jer stadig aktiv efter tribunalet i uge 6, vinder I. Rammer en sektion 0, vinder I med det samme. Alle syntetikere kan sabotere (se *Sabotage*). Du får en syntetikerrolle, kender de andre syntetikere og deres roller og får to bluff-forslag. Holdet kan dræbe én gang om ugen (se *Drab*).
- **Alien:** En død eller frossen spiller kan blive en alien (se *Skæbne*). Den spiller for syntetikerne, uanset hvilket hold den kom fra.

## Roller og påstande

- **Hver rolle findes højst én gang.** Ingen to spillere har samme rolle.
- **Hele rollekataloget er offentligt** (se websitet eller designdokumentet). Hvilke roller der er i spil, er hemmeligt — ikke alle er om bord.
- **Ingeniør er altid i spil.** Det er den eneste rolle, alle ved er aktiv.
- **Du må påstå enhver rolle**, også en, en anden har påstået.
- **Dobbeltpåstand:** Påstår to spillere samme rolle, lyver mindst én af dem. ORACLE bekræfter eller afkræfter aldrig en påstand.
- **Syntetikere har deres egne roller**, også unikke. Særordre er altid i spil. Den har ingen rolleevne ud over den sabotage og det drab, alle syntetikere har. Ved to syntetikere har den anden Forfalsker, Skaktløber eller Støjsender.
- Syntetikere kan ikke bruge evnen fra en besætningsrolle, de udgiver sig for, og får intet evneresultat.
- **Bluff-forslag:** Hver syntetiker får to roller, der garanteret *ikke* er i spil. Det er forslag til påstande, ikke roller.

## Sådan virker din evne

1. **Vælg.** Skriv evnens mål i fredagens ordre: *EVNE: Pejling → Peter*. Nogle evner har intet mål.
2. **ORACLE afgør.** Du regner intet ud og holder ikke regnskab.
3. **Læs svaret.** Mandag står resultatet i din private rapport — fx *"Peter står i Lastrum."* Rapporten fortæller også, om din evne er aktiv i den kommende uge.

Ingen evne har point, ladninger eller tilstande, du skal huske. Hver rolle på websitet viser, hvad du vælger, og et eksempel på ORACLEs svar.

## Syntetikerroller

| Rolle | Fra uge | Evne | Du vælger | ORACLE svarer fx |
|---|---|---|---|---|
| Særordre *(altid i spil)* | — | **Ingen rolleevne.** Kun den basale sabotage og drabet, som alle syntetikere har. | — | — |
| Forfalsker | 2 | **Forfalskning:** En spillers private resultat denne uge er falsk, men troværdigt. | En spiller | *"Sendt til Sara: 'Medlab: 1 person.'"* |
| Skaktløber | 1 | **Skakt:** Ryk til en vilkårlig zone. | En zone | *"Du står i Lastrum."* |
| Støjsender | 2 | **Støj:** Informationsevner i eller på en zone giver *"Signal forstyrret."* | En zone | *"Støj aktiv i Broen."* |

## Integritet og scenarie

Alle syv sektioner, også Rygraden, har en **integritet** fra 0 til 5. Skibet starter delvist nedbrudt: scenariet bestemmer startværdierne.

- **Vedligehold:** Fra uge 2, hver fredag: står mindst ét **levende menneske** i sektionen, stiger den 1. Står der intet, falder den 1. Flere mennesker giver ikke mere. Det sker automatisk og koster ingenting.
- **Syntetikere er neutrale.** De hverken hjælper eller skader ved at stå der. Døde og frosne tæller ikke.
- **Hvor du stod i ugen, tæller.** Fredagens beregning bruger din zone fra ugen. Din bevægelse sker mandag, og fra da vedligeholder du den nye sektion. Du vedligeholder højst én sektion om ugen.
- **Reparation:** Ingeniøren +2 i sin sektion. Ekstra reparation (Motorrum) +1. Aldrig over 5.
- **Rammer en sektion 0, vinder syntetikerne med det samme** — fredag, ikke mandag.

**Mandagens rapport viser kun tallene.** Ingen ændringer, ingen årsager, ingen navne. Sammenlign selv med sidste uge. En sektion, der faldt, havde intet levende menneske — så hvem påstod at stå der?

```
ORACLE // INTEGRITET // UGE 4
Hypersøvn  ██░░░ 2
Medlab     ████░ 4
Livsstøtte ██░░░ 2
Lastrum    ████░ 4
Broen      █████ 5
Motorrum   █░░░░ 1
Rygraden   ███░░ 3
```

### Sektionsevner

Hver sektion har én evne. Du kan bruge den, hvis du står i sektionen, i stedet for din rolleevne: *EVNE: Rum → mål*. Det er ugens eneste aktivering — ikke en ekstra. Alle i sektionen kan bruge den samme uge, også syntetikere. Kamera, Arkiv og Bevægelsessensorer er informationsevner: de kan forstyrres og forfalskes.

| Sektion | Evne | Mål | ORACLE svarer fx |
|---|---|---|---|
| **Broen** | **Kamera:** hvem står i sektionen denne uge? Navne, aldrig roller eller handlinger. | En anden sektion | *"Medlab: Peter, Sara."* |
| **Rygraden** | **Transport:** næste uge må din bevægelse gå op til to zoner ad gangene. | Intet | *"Transport klar."* |
| **Hypersøvn** | **Personlig beskyttelse:** du kan ikke dræbes denne uge, heller ikke af alienen. Kun dig. | Intet | *"Beskyttelse aktiv."* |
| **Lastrum** | **Arkiv:** hvor mange stod i sektionen i en afsluttet uge? Ingen navne. | En sektion og en uge | *"Medlab, uge 2: 2 personer."* |
| **Motorrum** | **Ekstra reparation:** sektionen +1 ved fredagens beregning. | En sektion | *"Broen +1."* |
| **Livsstøtte** | **Nødstrøm:** sektionen mister intet ved fredagens beregning. Giver intet ekstra. | En sektion | *"Nødstrøm til Lastrum."* |
| **Medlab** | **Bevægelsessensorer:** hvor mange ankom til og forlod sektionen ved seneste mandags bevægelse? Ingen navne. Skakt registreres ikke. | En sektion | *"Broen: 1 ankom, 2 forlod."* |

### Sabotage

Alle syntetikere kan sabotere, fra uge 2, ud over deres rolle. Det koster ugens aktivering: *EVNE: Sabotage*.

- Du kan kun sabotere den sektion, du står i.
- Næste uge virker sektionens evne ikke. Ugen efter virker den igen af sig selv.
- Sabotage rammer **ikke** integriteten eller vedligeholdet.
- Ingen broadcast. Den opdages kun, når nogen prøver at bruge evnen. Vedkommende får privat: *"Systemet er saboteret."* — intet andet, og aktiveringen er brugt. Hvad du gør med det, bestemmer du selv.

Kampagnen har **ét scenarie**, som ORACLE annoncerer i uge 1. Det er historien om rejsen og bestemmer, hvilket arkiv der frigives i uge 5. Det afgør ikke, hvem der vinder.

Hvert scenarie har sit eget **arkiv**, som ORACLE frigiver i uge 5. Mandag i uge 3 ruller ORACLE en **krise** på d20, som gælder hele uge 4. Se *Scenariebogen* for alle scenarier, arkiver og kriser.

| Scenarie | Uge 5 — arkiv |
|---|---|
| Nødsignal | **Sortboks:** Hele positionsloggen fra uge 1. |
| Karantæne | **Dørlog:** De 10 seneste bevægelser (navn, fra, til), uden uge. Skakt logges ikke. |
| Hjemrejse | **Arbejdslog:** Hvem der stod i hvilken sektion i uge 3. |

## Hver uge

1. **Mandag 09:00** — Læs ORACLE-rapporten i **#shipwide** og din private rapport.
2. **Mandag–fredag** — Tal via **højttaleren** eller i din **sektorkanal**. Se *Kommunikation*.
3. **Fredag 18:00** — Send din ordre til ORACLE, og afgiv din tribunal-stemme.

## Kommunikation

- **Højttaleren (#shipwide):** Du kan ikke skrive i #shipwide selv. Send beskeden privat til ORACLE, startende med *HØJTTALER:*. ORACLE læser den op i #shipwide ordret og **uden afsender**. Du kan underskrive med et navn, men alle kan skrive "Anna her".
- ORACLE læser op to gange dagligt, kl. 12 og 20, i tilfældig rækkefølge. Højst 3 beskeder pr. spiller pr. dag.
- **Sektorkanalen:** Her taler du med navn til dem, der står i samme zone.
- **Ingen DM'er mellem spillere.** Din private tråd med ORACLE er kun til ordrer og højttalerbeskeder.

## Ordren

```
UGE:        3
BEVÆGELSE:  Ryk → Livsstøtte        (eller: Bliv)
EVNE:       Pejling → Peter         (eller: Rum → mål, Bekæmp, Sabotage, Drab → navn, Ingen)
TRIBUNAL:   Anna                    (eller: Ingen)
```

- **Bevægelse:** Bliv, eller ryk til en nabozone på kampagnens skibsplan (se *Skibet*). Du flytter mandag. Indtil da står du, hvor du stod i ugen.
- **Evne:** Én aktivering om ugen. Vælg din rolleevne med mål (se rollekataloget), **Rum → mål** (sektionens evne, se *Sektionsevner*), **Bekæmp**, **Sabotage** (kun syntetikere) eller *Ingen*. Bekæmp: Er en alien i din zone denne uge, kæmper du mod den. To, der bekæmper den samme uge, smider den ud. Er der ingen alien, sker intet.
- **Vedligehold** skriver du ikke. Står du i en sektion, vedligeholder du automatisk.
Som ekko sender du i stedet:

```
UGE:        4
HJEMSØG:    Peter                   (kun Spøgelse; Jorden: RUMLOG → zone)
ALIEN:      Ryk → Lastrum, Angreb   (kun Alien; eller: Uro → zone)
TRIBUNAL:   Ingen                   (eller din spøgelsesstemme)
```

- **Tribunal:** Stem på en spiller, eller *Ingen*. Stemmerne er hemmelige; ORACLE broadcaster kun resultatet.

## Skibet

Skibet har syv zoner: seks sektioner (A Hypersøvn, B Medlab, C Livsstøtte, D Lastrum, E Broen, F Motorrum) og **Rygraden** (R). Hvordan de hænger sammen, afhænger af kampagnens **skibsplan**, som ORACLE annoncerer i uge 1. Websitet viser alle fire planer.

| d4 | Skibsplan | Forbindelser | Karakter |
|---|---|---|---|
| 1 | **Ringen** | A–B–C–D–E–F–A i en ring. Rygraden når alle sektioner. | Intet er mere end to uger væk. Rygraden er hurtig, men eksponeret. |
| 2 | **Knudepunktet** | Hver sektion har kun dør til Rygraden. | Al trafik går gennem midten. Man ser hinanden dér, og en forseglet Rygrad lammer skibet. |
| 3 | **Langskibet** | To gange langs skibet. Bagbord: Broen – Hypersøvn – Livsstøtte – Motorrum. Styrbord: Medlab – Rygraden – Lastrum. Tværgange i zigzag: Broen–Medlab–Hypersøvn–Rygraden–Livsstøtte–Lastrum–Motorrum. | Op til tre uger fra ende til ende. Langt, men aldrig én eneste vej. |
| 4 | **Tvillingeskroget** | Broen, Medlab og Hypersøvn når hinanden. Livsstøtte, Lastrum og Motorrum når hinanden. Rygraden forbinder Hypersøvn og Livsstøtte. | To skrog. Rygraden er eneste vej imellem. |

## Tribunalet

1. **Stemme:** Fra uge 2 til 6 stemmer du hver fredag i ordren på en spiller eller *Ingen*. Stemmerne er hemmelige.
2. **Dom:** Får ét navn flertal af de **aktive** spillere, sendes vedkommende direkte i kryo. Stemmelighed eller intet flertal: ingen dom.
3. **Broadcast:** ORACLE oplyser navn og antal stemmer. Aldrig hvem der stemte, og aldrig rollen.
4. **Sejr:** Er alle syntetikere i kryo, vinder besætningen med det samme. Er mindst én syntetiker aktiv efter dommen i uge 6, vinder syntetikerne. Derefter afsløres alle roller.

Ingen kan bevise noget. I kan kun overbevise hinanden.

## Drab

- Syntetikerne kan dræbe **én gang om ugen** for hele holdet, fra uge 3. Det skrives i ordren som *Drab → [Navn]* og erstatter evnen den uge. Er I to, aftaler I, hvem der dræber. Sender begge et drab, gælder kun det første, ORACLE modtog.
- Drabet lykkes kun, hvis drabsmand og offer er **alene** i zonen i ugen, og offeret ikke er under Sikkerhedschefens **vagt** eller har brugt **Personlig beskyttelse**. Ellers sker intet.
- Offeret får kun at vide, at det er dødt. Ikke hvem.
- ORACLE broadcaster kun: *"[Navn] er død."* Aldrig hvor, hvem eller rollen.

At stå alene er farligt. En sektion uden mennesker falder.

### Alien

En død eller frossen spiller kan blive en **alien** (se *Skæbne*). Den skifter side til syntetikerne og lever i skakterne. Dens zone er hemmelig.

- **Angreb:** Står præcis én spiller i alienens zone i ugen, ruller ORACLE d6. Besætning dør på 4–6. Syntetikere ignoreres. Sikkerhedschefens vagt og Personlig beskyttelse beskytter. Et offer broadcastes som ethvert andet drab: *"[Navn] er død."*
- **Uro → zone:** Den, der rykker ind i zonen, farer vild og ender i en tilfældig nabozone. ORACLE fortæller dig privat, hvor du endte. Skakt ind og ud af zonen virker ikke.
- **Tegn:** Står du i samme zone som alienen i ugen, får du privat: *"Noget bevæger sig i ventilationen."*
- **Bekæmp:** To spillere med *EVNE: Bekæmp* i alienens zone smider den ud. Den bliver et almindeligt ekko, men spiller stadig for syntetikerne.
- Alienen kender ikke syntetikerne, og de kender ikke den. Et mislykket angreb kan være en syntetiker — eller bare et dårligt slag.

## Ekko — død eller i kryo

Dør du eller sendes i kryo, bliver du et **ekko**. Du har ingen bevægelse, evne, vedligehold eller sektorkanal. Men du må stadig:

- tale **kun gennem ORACLE**: via højttaleren, anonymt som alle andre. Ingen sektorkanal, ingen andre kanaler. Alt, hvad du siger, er vidneudsagn.
- bruge **én spøgelsesstemme** i ét tribunal resten af spillet.

### Skæbne

Når du bliver ekko, **ruller ORACLE en d6** i hemmelighed og fortæller dig privat, hvad du bliver: **1 Jorden, 2 Spøgelse, 3–4 Alien, 5 Afløser, 6 Ekko.** Hver skæbne findes **én gang pr. kampagne**, ligesom rollerne. Er resultatet taget, eller er det Afløser og du er frosset, bliver du Ekko. Du kan ikke vælge eller rulle om. Hvem der har hvilken skæbne, er hemmeligt.

| d6 | Skæbne | Hvem | Hver fredag | ORACLE svarer fx |
|---|---|---|---|---|
| 1 | **Jorden** | Døde og frosne | **Rumlog → zone.** ORACLE sender ugens fulde log for zonen: hvem der stod der i ugen, hvem der gik ind og ud ved seneste mandags bevægelse (fra/til), og integritetens ændring. Aldrig hvem der saboterede, reparerede eller dræbte. Skakt går uden om dørene og logges ikke. | *"Lastrum: Peter (fra Rygraden), Sara (blev). Ud: Anna → Broen. Lastrum 3 → 2."* |
| 2 | **Spøgelse** | Døde og frosne | **Hjemsøg → spiller.** ORACLE fortæller, hvor vedkommende står denne uge. | *"Sara står i Lastrum."* |
| 3–4 | **Alien** | Døde og frosne | Skifter side: du spiller nu for **syntetikerne** og vinder, hvis de vinder. Du lever i skakterne, og din zone er hemmelig. Vælg en startzone; derefter hver fredag: *ALIEN: Ryk → nabozone* (eller Bliv; kriser stopper dig ikke) og én af: **Angreb** — står præcis én spiller i din zone, dør besætning på d6 4–6; syntetikere ignoreres. **Uro → zone** — den, der rykker ind i zonen, farer vild og ender i en tilfældig nabozone; Skakt ind og ud virker ikke. To spillere med *Bekæmp* i din zone smider dig ud, og du bliver Ekko. | *"Angreb: Anna var alene. Intet sker."* |
| 5 | **Afløser** | Kun dræbte | Du vågner i Hypersøvn som **aktiv spiller uden evne**: bevægelse, vedligehold og stemme. Du er ikke længere ekko. | *"KAPSEL ÅBNET: Sara er vågen."* (broadcast) |
| 6 | **Ekko** | Alle | Ingen ekstra handling. Også resultatet, hvis skæbnen er taget eller ikke gælder for dig. | — |

Rumlog og Hjemsøg er informationsevner: de kan forfalskes og forstyrres. Et frosset ekko fra syntetikerholdet ruller også og kan blive Jorden eller Spøgelse — og lyve om svaret.

## Information

- **ORACLE-broadcasts er altid sande.**
- **Din sektor-manifest er altid sand.** Den viser, hvem der står i din zone.
- **Dine evneresultater er sande** — medmindre en syntetiker har forfalsket dem.
- **Alt andre siger, kan være løgn.**

## Regler for ærlighed

- Du må lyve om alt i spillet.
- Du må ikke indsætte screenshots eller videresende ORACLEs beskeder. Gengiv med egne ord.
- Du må ikke tale om spillet uden for Slack-kanalerne.

## Uge for uge

| Uge | Navn | Nyt |
|---|---|---|
| 1 | Awakening | Informationsevner og Skakt er aktive. Intet tribunal. |
| 2 | First Anomaly | Integriteten ændrer sig. Sabotage, Forfalskning og Støj. Første tribunal. |
| 3 | Broken Trust | Syntetikerne kan dræbe. |
| 4 | Containment Failure | Krisen, rullet på d20 i uge 3. |
| 5 | Last Transmission | Scenariets arkiv frigives. |
| 6 | Final Protocol | Sidste tribunal. Rollerne afsløres. |
