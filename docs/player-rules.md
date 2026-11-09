# Spillerregler — USCSS Cassandra

Du er vågnet for tidligt fra hypersøvn. Skibet er ikke, som det skal være. Én eller to af dine kolleger er ikke mennesker.

## Dit hold

Du får en privat besked fra ORACLE med din **rolle** og dit **hold**.

- **Besætning:** Få alle syntetikere i kryo inden udgangen af uge 6, **eller** opfyld kampagnens scenarie.
- **Syntetiker:** Bring ét skibssystem til 0 (så vinder I med det samme), eller overlev Final Protocol uden at scenariet er opfyldt. Du får en syntetikerrolle, kender de andre syntetikere og deres roller og får to bluff-forslag. Hver syntetiker kan dræbe én gang (se *Drab*).

## Roller og påstande

- **Hver rolle findes højst én gang.** Ingen to spillere har samme rolle.
- **Hele rollekataloget er offentligt** (se websitet eller designdokumentet). Hvilke roller der er i spil, er hemmeligt — ikke alle er om bord.
- **Ingeniør er altid i spil.** Det er den eneste rolle, alle ved er aktiv.
- **Du må påstå enhver rolle**, også en, en anden har påstået.
- **Dobbeltpåstand:** Påstår to spillere samme rolle, lyver mindst én af dem. ORACLE bekræfter eller afkræfter aldrig en påstand.
- **Syntetikere har deres egne roller**, også unikke. Særordre (sabotage) er altid i spil. Ved to syntetikere har den anden Forfalsker, Skaktløber eller Støjsender.
- Syntetikere kan ikke bruge evnen fra en besætningsrolle, de udgiver sig for, og får intet evneresultat.
- **Bluff-forslag:** Hver syntetiker får to roller, der garanteret *ikke* er i spil. Det er forslag til påstande, ikke roller.

## Syntetikerroller

| Rolle | Fra uge | Evne |
|---|---|---|
| Særordre *(altid i spil)* | 2 | **Sabotage:** Systemet i din sektion −2. ORACLE broadcaster sektionen. |
| Forfalsker | 2 | **Forfalskning:** En spillers private resultat denne uge er falsk, men troværdigt. |
| Skaktløber | 1 | **Skakt:** Ryk til en vilkårlig zone. |
| Støjsender | 2 | **Støj:** Informationsevner i eller på en zone giver *"Signal forstyrret."* |

## Skibssystemer og scenarie

Hver sektion (A–F) har et system fra 0 til 5. Alle starter på 3. Rygraden har intet system.

- **Arbejde:** Bliver du i en sektion og skriver *Arbejde: ja*, får systemet +1.
- **Forfald:** Fra uge 2 mister et system 1, hvis ingen arbejdede der.
- **Sabotage:** −2. **Reparation** (Ingeniør): +2.
- **Når ét system når 0, vinder syntetikerne.**

ORACLE offentliggør status og ændring for alle systemer hver mandag. Brug tallene: Hvis to blev i Medlab, men Medlab kun steg 1, arbejdede én af dem ikke.

Kampagnen har **ét scenarie**, som ORACLE annoncerer i uge 1. Er det opfyldt efter uge 6, vinder besætningen.

| Scenarie | Krav efter uge 6 |
|---|---|
| Nødsignal | Broen og Motorrum står på 5. |
| Karantæne | Medlab og Hypersøvn står på 5. |
| Hjemrejse | Alle seks systemer står på mindst 4. |

## Hver uge

1. **Mandag 09:00** — Læs ORACLE-rapporten i **#shipwide** og din private rapport.
2. **Mandag–fredag** — Tal. Offentligt i **#shipwide**, privat i din **sektorkanal** med dem, der står samme sted. Ingen DM'er.
3. **Fredag 18:00** — Send din ordre til ORACLE, og afgiv din tribunal-stemme.

## Ordren

```
UGE:        3
BEVÆGELSE:  Ryk → Livsstøtte        (eller: Bliv)
EVNE:       Pejling → Peter         (eller: Ingen)
ARBEJDE:    Nej                     (kun ved Bliv i en sektion)
FASTHOLD:   Ja                      (eller: Nej)
TRIBUNAL:   Anna                    (eller: Ingen ændring)
```

- **Bevægelse:** Bliv, eller ryk én zone. Fra en sektion kan du nå nabosektionerne og Rygraden. Fra Rygraden kan du nå alle sektioner.
- **Evne:** Din ene evne. Se rollekataloget.
- **Arbejde:** Ja/nej. Tæller kun, hvis du bliver i en sektion. Systemet +1.
- **Fasthold:** Hvis du ender i samme zone som målet for kryo-ordren, hjælper du med at pågribe det.
- **Tribunal:** Stem på en spiller, eller *Ingen ændring*. Stemmerne er hemmelige; ORACLE broadcaster kun resultatet.

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

## Jagten

1. **Tribunal:** Flertal af aktive spillere udsteder en kryo-ordre. ORACLE pejler målets zone én gang.
2. **Pågribelse:** Står der spillere med *Fasthold: ja* i målets zone, og giver de mindst **2 point**, sendes målet i kryo. Sikkerhedschefen giver 2 point alene.
3. **Rapport:** ORACLE oplyser, hvor mange der var til stede, og hvor mange point de gav. Aldrig hvem.

Én aktiv kryo-ordre ad gangen. Den gælder, indtil målet er pågrebet eller tribunalet vælger et nyt mål.

## Drab

- Hver syntetiker kan dræbe **én gang** i kampagnen, fra uge 3. Det skrives i ordren som *Drab → [Navn]* og erstatter evnen den uge.
- Drabet lykkes kun, hvis drabsmand og offer er **alene** i zonen efter bevægelse. Ellers sker intet, og drabet kan bruges igen.
- Offeret får kun at vide, at det er dødt, og hvor. Ikke hvem.
- ORACLE broadcaster: *"LIG FUNDET: [Navn], [zone]."* Aldrig rollen.

At stå alene er farligt. At ingen arbejder, er også farligt.

## Ekko — død eller i kryo

Dør du eller sendes i kryo, bliver du et **ekko**. Du har ingen bevægelse, evne, arbejde eller sektorkanal. Men du må stadig:

- skrive frit i **#shipwide**. Alt, hvad du siger, er vidneudsagn.
- sende **Vedligehold → [sektion]** hver fredag. Den sektion får intet forfald den uge.
- bruge **én spøgelsesstemme** i ét tribunal resten af spillet.

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
| 3 | Broken Trust | Første pågribelse. |
| 4 | Containment Failure | Én zone forsegles hele ugen. |
| 5 | Last Transmission | Positionsloggen fra uge 1 frigives. |
| 6 | Final Protocol | Tribunalet sender direkte i kryo. Rollerne afsløres. |
