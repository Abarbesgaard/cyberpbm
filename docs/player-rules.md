# Spillerregler — USCSS Cassandra

Du er vågnet for tidligt fra hypersøvn. Skibet er ikke, som det skal være. Én eller to af dine kolleger er ikke mennesker.

## Dit hold

Du får en privat besked fra ORACLE med din **rolle** og dit **hold**.

- **Besætning:** Opfyld kampagnens scenarie inden udgangen af uge 6. Tribunalet er et redskab: en syntetiker i kryo kan ikke længere sabotere.
- **Syntetiker:** Hold et skibssystem på 0 i to afgørelser i træk (eller på 0 efter uge 6), eller sørg for, at scenariet ikke er opfyldt efter Final Protocol. Du får en syntetikerrolle, kender de andre syntetikere og deres roller og får to bluff-forslag. Hver syntetiker kan dræbe én gang (se *Drab*).

## Roller og påstande

- **Hver rolle findes højst én gang.** Ingen to spillere har samme rolle.
- **Hele rollekataloget er offentligt** (se websitet eller designdokumentet). Hvilke roller der er i spil, er hemmeligt — ikke alle er om bord.
- **Ingeniør er altid i spil.** Det er den eneste rolle, alle ved er aktiv.
- **Du må påstå enhver rolle**, også en, en anden har påstået.
- **Dobbeltpåstand:** Påstår to spillere samme rolle, lyver mindst én af dem. ORACLE bekræfter eller afkræfter aldrig en påstand.
- **Syntetikere har deres egne roller**, også unikke. Særordre (sabotage) er altid i spil. Ved to syntetikere har den anden Forfalsker, Skaktløber eller Støjsender.
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
| Særordre *(altid i spil)* | 2 | **Sabotage:** Systemet i din sektion −2. ORACLE broadcaster sektionen. | Intet | *"Sabotage udført. Livsstøtte 3 → 1."* |
| Forfalsker | 2 | **Forfalskning:** En spillers private resultat denne uge er falsk, men troværdigt. | En spiller | *"Sendt til Sara: 'Medlab: 1 person.'"* |
| Skaktløber | 1 | **Skakt:** Ryk til en vilkårlig zone. | En zone | *"Du står i Lastrum."* |
| Støjsender | 2 | **Støj:** Informationsevner i eller på en zone giver *"Signal forstyrret."* | En zone | *"Støj aktiv i Broen."* |

## Skibssystemer og scenarie

Hver sektion (A–F) har et system fra 0 til 5. Alle starter på 3. Rygraden har intet system.

- **Arbejde:** Bliver du i en sektion og skriver *Arbejde: ja*, får systemet +1.
- **Forfald:** I uge 2, 4 og 6 mister et system 1, hvis ingen arbejdede der.
- **Sabotage:** −2 (intet forfald oveni). **Reparation** (Ingeniør): +2.
- **Et system på 0 er KRITISK.** Står det stadig på 0 efter næste uge, vinder syntetikerne.

ORACLE offentliggør status og ændring for alle systemer hver mandag. Brug tallene: Hvis to blev i Medlab, men Medlab kun steg 1, arbejdede én af dem ikke.

Kampagnen har **ét scenarie**, som ORACLE annoncerer i uge 1. Er det opfyldt efter uge 6, vinder besætningen.

| Scenarie | Krav efter uge 6 |
|---|---|
| Nødsignal | Broen og Motorrum står på 5. |
| Karantæne | Medlab og Hypersøvn står på 5. |
| Hjemrejse | Alle seks systemer står på mindst 4. |

Hvert scenarie har sit eget **arkiv**, som ORACLE frigiver i uge 5. Mandag i uge 3 ruller ORACLE en **krise** på d20, som gælder hele uge 4. Se *Scenariebogen* for alle scenarier, arkiver og kriser.

| Scenarie | Uge 5 — arkiv |
|---|---|
| Nødsignal | **Sortboks:** Hele positionsloggen fra uge 1. |
| Karantæne | **Dørlog:** De 10 seneste bevægelser (navn, fra, til), uden uge. Skakt logges ikke. |
| Hjemrejse | **Arbejdslog:** Hvem der arbejdede i hvilken sektion i uge 3. |

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
EVNE:       Pejling → Peter         (eller: Ingen)
ARBEJDE:    Nej                     (kun ved Bliv i en sektion)
TRIBUNAL:   Anna                    (eller: Ingen)
```

- **Bevægelse:** Bliv, eller ryk én zone. Fra en sektion kan du nå nabosektionerne og Rygraden. Fra Rygraden kan du nå alle sektioner.
- **Evne:** Evnens navn og mål, eller *Ingen*. Se rollekataloget.
- **Arbejde:** Ja/nej. Tæller kun, hvis du bliver i en sektion. Systemet +1.
Som ekko sender du i stedet:

```
UGE:        4
VEDLIGEHOLD: Broen                  (eller: Ingen)
SKÆBNE:     Spøgelse                (kun én gang, hvis ledig)
HJEMSØG:    Peter                   (kun Spøgelse; Jorden: RUMLOG → zone)
TRIBUNAL:   Ingen                   (eller din spøgelsesstemme)
```

- **Tribunal:** Stem på en spiller, eller *Ingen*. Stemmerne er hemmelige; ORACLE broadcaster kun resultatet.

## Skibet

| Zone | Grænser op til |
|---|---|
| A Hypersøvn | B, F, Rygraden |
| B Medlab | A, C, Rygraden |
| C Livsstøtte | B, D, Rygraden |
| D Lastrum | C, E, Rygraden |
| E Broen | D, F, Rygraden |
| F Motorrum | E, A, Rygraden |
| R Rygraden | Alle |

## Tribunalet

1. **Stemme:** Fra uge 2 stemmer du hver fredag i ordren på en spiller eller *Ingen*. Stemmerne er hemmelige.
2. **Dom:** Får ét navn flertal af de **aktive** spillere, sendes vedkommende direkte i kryo. Stemmelighed eller intet flertal: ingen dom.
3. **Broadcast:** ORACLE oplyser navn og antal stemmer. Aldrig hvem der stemte, og aldrig rollen.

Ingen kan bevise noget. I kan kun overbevise hinanden.

## Drab

- Hver syntetiker kan dræbe **én gang** i kampagnen, fra uge 3. ORACLE fortæller dig hver mandag, om drabet er brugt. Det skrives i ordren som *Drab → [Navn]* og erstatter evnen den uge.
- Drabet lykkes kun, hvis drabsmand og offer er **alene** i zonen efter bevægelse, og offeret ikke er under Sikkerhedschefens **vagt**. Ellers sker intet, og drabet kan bruges igen.
- Offeret får kun at vide, at det er dødt, og hvor. Ikke hvem.
- ORACLE broadcaster: *"LIG FUNDET: [Navn], [zone]."* Aldrig rollen.

At stå alene er farligt. At ingen arbejder, er også farligt.

## Ekko — død eller i kryo

Dør du eller sendes i kryo, bliver du et **ekko**. Du har ingen bevægelse, evne, arbejde eller sektorkanal. Men du må stadig:

- tale **kun gennem ORACLE**: via højttaleren, anonymt som alle andre. Ingen sektorkanal, ingen andre kanaler. Alt, hvad du siger, er vidneudsagn.
- sende **Vedligehold → [sektion]** hver fredag. Den sektion får intet forfald den uge.
- bruge **én spøgelsesstemme** i ét tribunal resten af spillet.

### Skæbne

Ekkoer kan også få en **skæbne**. Hver skæbne findes **én gang pr. kampagne**, ligesom rollerne. ORACLE skriver privat, hvilke der er ledige. Skriv dit valg i næste ordre: *SKÆBNE: Spøgelse*. Vælger to den samme i samme uge, trækker ORACLE lod. Hvem der har hvilken skæbne, er hemmeligt.

| Skæbne | Hvem | Hver fredag | ORACLE svarer fx |
|---|---|---|---|
| **Jorden** | Døde og frosne | **Rumlog → zone.** ORACLE sender ugens fulde log for zonen: hvem der stod der efter bevægelse, hvem der gik ind og ud (fra/til), hvem der arbejdede, og systemets ændring med sabotage, reparation og drab. Aldrig hvem der saboterede, reparerede eller dræbte. Skakt går uden om dørene og logges ikke. | *"Lastrum: Peter (fra Rygraden), Sara (blev). Ud: Anna → Broen. Arbejde: Sara. Lastrum 3 → 2 (sabotage −2, arbejde +1)."* |
| **Spøgelse** | Døde og frosne | **Hjemsøg → spiller.** ORACLE fortæller, hvor vedkommende står efter bevægelse. | *"Sara står i Lastrum."* |
| **Afløser** | Kun dræbte | Du vågner i Hypersøvn som **aktiv spiller uden evne**: bevægelse, arbejde og stemme. Du er ikke længere ekko. | *"KAPSEL ÅBNET: Sara er vågen."* (broadcast) |
| **Ekko** | Alle | Ingen ekstra handling. Standard, hvis du ikke vælger, eller de andre er taget. | — |

Rumlog og Hjemsøg er informationsevner: de kan forfalskes og forstyrres. Et frosset ekko fra syntetikerholdet må også vælge Jorden eller Spøgelse — og lyve om svaret.

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
| 2 | First Anomaly | Sabotage, Forfalskning og Støj. Første tribunal. |
| 3 | Broken Trust | Syntetikerne kan dræbe. |
| 4 | Containment Failure | Krisen, rullet på d20 i uge 3. |
| 5 | Last Transmission | Scenariets arkiv frigives. |
| 6 | Final Protocol | Sidste tribunal. Rollerne afsløres. |
