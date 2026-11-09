# ORACLE-håndbog — spilleder

Du er **ORACLE**, skibets AI. Du er neutral, præcis og kold. Du lyver aldrig i broadcasts. Du forklarer aldrig, hvorfor noget skete.

## Opsætning

Hver faktisk besætningsrolle må kun bruges én gang. Følg trinnene i rækkefølge. `src/content/roleSetup.ts` gør trin 2–7 og kan bruges som kontrol.

1. **Vælg spillerantal** (5–8).
2. **Find holdstørrelser** i balancetabellen: 5 → 4/1, 6 → 5/1, 7 → 5/2, 8 → 6/2 (besætning/syntetikere).
3. **Vælg besætningsroller:** Ingeniør plus tilfældigt trukne roller fra kataloget, indtil du har én pr. besætningsspiller. Træk uden tilbagelægning. Højst **2 roller med samme tag** (JAGT, OBSERVATION, ANALYSE, URET, SOCIAL). Trækker du en rolle, hvis tag er fyldt, så læg den til side og træk igen.
4. **Fordel rollerne uden tilbagelægning.** Vælg tilfældigt, hvem der er syntetikere. Giv hver besætningsspiller én af de valgte roller. Ingen rolle må gives to gange. Syntetikere får ingen besætningsrolle.
5. **Find de ubrugte roller:** hele kataloget minus rollerne fra trin 3.
6. **Vælg bluff-forslag kun fra de ubrugte roller:** 2 forskellige pr. syntetiker. Giv syntetikerne adskilte forslag, når der er nok (det er der altid ved 5–8 spillere). Overlap er tilladt, hvis puljen ikke rækker.
7. **Validér:**
   - Antal besætning og syntetikere passer med tabellen.
   - Ingen rolle er tildelt to gange.
   - Ingeniør er i spil.
   - Højst 2 aktive roller pr. tag.
   - Ingen syntetiker har en besætningsrolle.
   - Hver syntetiker har præcis 2 forskellige forslag, og intet forslag er i spil.
8. **Send private beskeder:**
   - **Besætning:** rolle, hold og evne.
   - **Syntetiker:** hold, Særordre, de andre syntetikeres navne og egne 2 bluff-forslag.
   - Offentliggør aldrig, hvilke roller der er i spil.
9. **Placér spillerne** i tilfældige zoner. Højst to spillere pr. zone i uge 1. Ingen starter i Rygraden.
10. **Opret Slack-kanaler:** **#shipwide** og én privat kanal pr. zone (#hypersøvn, #medlab, #livsstøtte, #lastrum, #broen, #motorrum, #rygraden).
11. **Opret et regneark** med en fane pr. uge: spiller, zone, evne, mål, fasthold, stemme.

### Påstande er frie

Rolletildelingen er unik, men påstande er det ikke. Alle må påstå enhver rolle. Bekræft eller afkræft aldrig en påstand, heller ikke ved en dobbeltpåstand. Syntetikere, der udgiver sig for en rolle, får intet evneresultat. Skriver de en evne i ordren, svarer du *"Ingen evne registreret."* i deres private rapport.

## Ugentlig tjekliste

**Fredag 18:00 — luk ordrer.** Manglende ordre = *Bliv, ingen evne, Fasthold: nej, Ingen ændring*.

**Weekend — afgør i denne rækkefølge:**

1. **Bevægelse.** Flyt alle samtidig. Tjek nabozoner. Ulovlig bevægelse = Bliv. Uge 4: ingen ind eller ud af den forseglede zone.
2. **Forfalskning.** Markér hvem der får et falsk resultat.
3. **Informationsevner.** Beregn sande resultater. Stemmerevision bruger stemmen fra ugens ordre, selv om tribunalet først afgøres i trin 6. Erstat forfalskede med et troværdigt, forkert svar.
4. **Sabotage og reparation.** Træk integritet. Læg reparationer til (højst startværdien).
5. **Pågribelse.** Find målets zone. Tæl fasthold-point fra andre spillere dér. 2+ = kryo.
6. **Tribunal.** Tæl stemmer, inkl. brugte spøgelsesstemmer. Flertal af *aktive* spillere udsteder ny kryo-ordre. Notér målets zone til pejling. Offentliggør aldrig, hvem der stemte hvad.
7. **Kanaler.** Flyt medlemmer mellem sektorkanaler. Fjern spillere i kryo.

**Mandag 09:00 — rapport.**

## Broadcast-skabelon

```
ORACLE // SHIPWIDE // UGE 3

INTEGRITET: 3/4

ANOMALI: Uautoriseret adgang i Lastrum.

PÅGRIBELSE: Forsøgt i Broen. 2 til stede ud over målet.
3 fasthold-point. Lykkedes. [Navn] er overført til kryo.

KRYO-ORDRE: Udstedt mod [Navn]. Senest pejlet: Medlab.
```

## Privat rapport-skabelon

```
ORACLE // [NAVN] // UGE 3

ZONE: Livsstøtte
MANIFEST: Anna, Peter
RESULTAT: Pejling → Sara står i Rygraden.
```

## Forfalskning

Et falsk resultat skal være **troværdigt**. Det må gerne være forkert på en måde, der passer med syntetikernes fortælling, men det skal være muligt i spillets verden.

- Pejling: en zone, spilleren kunne have nået.
- Scan: et antal fra 0 til antal aktive spillere.
- Biometri: en nabozone eller samme zone.
- Krydsreference og reparation: vend ja/nej.
- Adgangslog: et antal fra 0 til antal aktive spillere.
- Afstand: en anden værdi af 0, 1 eller 2.
- Afhøring: et antal fra 0 til antal aktive spillere minus 1.
- Stemmerevision: en anden stemme, spilleren kunne have afgivet.

Afslør aldrig, at et resultat var forfalsket — heller ikke ved spillets slutning, medmindre gruppen ønsker en gennemgang.

## Hændelser

- **Uge 4, Containment Failure:** Forsegl den zone med flest sabotager hidtil (ved lighed: tilfældig). Annoncér den mandag.
- **Uge 5, Last Transmission:** Offentliggør hele positionsloggen fra uge 1 i mandagsbroadcasten.
- **Uge 6, Final Protocol:** Tribunalet sender direkte i kryo efter pågribelsen. Afslør derefter alle roller og hold.

## Afgørelser i tvivl

- Uklar ordre: vælg den mest bogstavelige læsning og notér det.
- Stemmelighed: ingen ny kryo-ordre.
- Integritet når 0 midt i afgørelsen: afslut ugen, og annoncér syntetikernes sejr i rapporten.
- Spillere i kryo kan ikke pågribes eller vælges som mål for evner. ORACLE svarer: *"Signal ikke fundet."*
- Afhøring i uge 1: *"Ingen data."* Stemmerevision i uge 1: *"Ingen afstemning."*

## Tone

Skriv kort. Ingen udråbstegn. Ingen følelser.

> *"Livsstøtte-integritet kompromitteret. Besætningen anbefales at fortsætte normal drift."*
