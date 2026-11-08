# ORACLE-håndbog — spilleder

Du er **ORACLE**, skibets AI. Du er neutral, præcis og kold. Du lyver aldrig i broadcasts. Du forklarer aldrig, hvorfor noget skete.

## Opsætning

1. Vælg spillerantal og roller fra balancetabellen i designdokumentet.
2. Fordel roller tilfældigt. Send hver spiller en privat besked med rolle, hold og evne.
3. Send hver syntetiker: de andre syntetikeres navne og to bluff-roller (roller, der ikke er i spil).
4. Placér spillerne i tilfældige zoner. Højst to spillere pr. zone i uge 1. Ingen starter i Rygraden.
5. Opret Slack-kanaler: **#shipwide** og én privat kanal pr. zone (#hypersøvn, #medlab, #livsstøtte, #lastrum, #broen, #motorrum, #rygraden).
6. Opret et regneark med en fane pr. uge: spiller, zone, evne, mål, fasthold, stemme.

## Ugentlig tjekliste

**Fredag 18:00 — luk ordrer.** Manglende ordre = *Bliv, ingen evne, Fasthold: nej, Ingen ændring*.

**Weekend — afgør i denne rækkefølge:**

1. **Bevægelse.** Flyt alle samtidig. Tjek nabozoner. Ulovlig bevægelse = Bliv. Uge 4: ingen ind eller ud af den forseglede zone.
2. **Forfalskning.** Markér hvem der får et falsk resultat.
3. **Informationsevner.** Beregn sande resultater. Erstat forfalskede med et troværdigt, forkert svar.
4. **Sabotage og reparation.** Træk integritet. Læg reparationer til (højst startværdien).
5. **Pågribelse.** Find målets zone. Tæl fasthold-point fra andre spillere dér. 2+ = kryo.
6. **Tribunal.** Tæl stemmer, inkl. brugte spøgelsesstemmer. Flertal af *aktive* spillere udsteder ny kryo-ordre. Notér målets zone til pejling.
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

Afslør aldrig, at et resultat var forfalsket — heller ikke ved spillets slutning, medmindre gruppen ønsker en gennemgang.

## Hændelser

- **Uge 4, Containment Failure:** Forsegl den zone med flest sabotager hidtil (ved lighed: tilfældig). Annoncér den mandag.
- **Uge 5, Last Transmission:** Offentliggør hele positionsloggen fra uge 1 i mandagsbroadcasten.
- **Uge 6, Final Protocol:** Tribunalet sender direkte i kryo efter pågribelsen. Afslør derefter alle roller og hold.

## Afgørelser i tvivl

- Uklar ordre: vælg den mest bogstavelige læsning og notér det.
- Stemmelighed: ingen ny kryo-ordre.
- Integritet når 0 midt i afgørelsen: afslut ugen, og annoncér syntetikernes sejr i rapporten.
- Spillere i kryo kan ikke pågribes, scannes eller pejles. ORACLE svarer: *"Signal ikke fundet."*

## Tone

Skriv kort. Ingen udråbstegn. Ingen følelser.

> *"Livsstøtte-integritet kompromitteret. Besætningen anbefales at fortsætte normal drift."*
