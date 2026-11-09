# ORACLE-håndbog — spilleder

Du er **ORACLE**, skibets AI. Du er neutral, præcis og kold. Du lyver aldrig i broadcasts. Du forklarer aldrig, hvorfor noget skete.

## Opsætning

Hver faktisk besætningsrolle må kun bruges én gang. Følg trinnene i rækkefølge. `src/content/roleSetup.ts` gør trin 2–7 og kan bruges som kontrol.

1. **Vælg spillerantal** (5–8).
2. **Find holdstørrelser** i balancetabellen: 5 → 4/1, 6 → 5/1, 7 → 5/2, 8 → 6/2 (besætning/syntetikere).
3. **Vælg besætningsroller:** Ingeniør plus tilfældigt trukne roller fra kataloget, indtil du har én pr. besætningsspiller. Træk uden tilbagelægning. Højst **2 roller med samme tag** (JAGT, OBSERVATION, ANALYSE, URET, SOCIAL). Trækker du en rolle, hvis tag er fyldt, så læg den til side og træk igen.
4. **Fordel rollerne uden tilbagelægning.** Vælg tilfældigt, hvem der er syntetikere. Giv hver besætningsspiller én af de valgte roller. Syntetikere får syntetikerroller: Særordre altid, og ved to syntetikere én tilfældig af Forfalsker, Skaktløber og Støjsender. Ingen rolle må gives to gange.
5. **Find de ubrugte roller:** hele kataloget minus rollerne fra trin 3.
6. **Vælg bluff-forslag kun fra de ubrugte roller:** 2 forskellige pr. syntetiker. Giv syntetikerne adskilte forslag, når der er nok (det er der altid ved 5–8 spillere). Overlap er tilladt, hvis puljen ikke rækker.
7. **Validér:**
   - Antal besætning og syntetikere passer med tabellen.
   - Ingen rolle er tildelt to gange.
   - Ingeniør er i spil.
   - Højst 2 aktive roller pr. tag.
   - Ingen syntetiker har en besætningsrolle, og ingen besætning har en syntetikerrolle.
   - Særordre er i spil, og ingen syntetikerrolle er tildelt to gange.
   - Hver syntetiker har præcis 2 forskellige forslag, og intet forslag er i spil.
8. **Send private beskeder:**
   - **Besætning:** rolle, hold og evne.
   - **Syntetiker:** hold, syntetikerrolle og evne, de andre syntetikeres navne og roller, og egne 2 bluff-forslag.
   - Offentliggør aldrig, hvilke roller der er i spil.
9. **Vælg scenarie** (Nødsignal, Karantæne eller Hjemrejse). Sæt alle seks systemer til 3. Annoncér scenariet i den første broadcast.
10. **Placér spillerne** i tilfældige zoner. Højst to spillere pr. zone i uge 1. Ingen starter i Rygraden.
11. **Opret Slack-kanaler:** **#shipwide** og én privat kanal pr. zone (#hypersøvn, #medlab, #livsstøtte, #lastrum, #broen, #motorrum, #rygraden).
12. **Opret et regneark** med en fane pr. uge: spiller, zone, evne, mål, arbejde, fasthold, drab, vedligehold, stemme — plus systemstatus og brugte drab.

### Påstande er frie

Rolletildelingen er unik, men påstande er det ikke. Alle må påstå enhver rolle. Bekræft eller afkræft aldrig en påstand, heller ikke ved en dobbeltpåstand. Syntetikere, der udgiver sig for en rolle, får intet evneresultat. Skriver de en evne i ordren, svarer du *"Ingen evne registreret."* i deres private rapport.

## Ugentlig tjekliste

**Fredag 18:00 — luk ordrer.** Manglende ordre = *Bliv, ingen evne, Arbejde: ja, Fasthold: nej, Ingen ændring*. Manglende ekko-ordre = intet vedligehold.

**Weekend — afgør i denne rækkefølge:**

1. **Bevægelse.** Flyt alle samtidig. Tjek nabozoner. Skaktløber med Skakt må ende i enhver zone. Ulovlig bevægelse = Bliv. Uge 4: ingen ind i eller ud af Rygraden, heller ikke via Skakt.
2. **Drab.** Tjek hver *Drab → [Navn]* med `resolveKill` i `src/content/kills.ts`: uge 3+, drabet ikke brugt, målet er besætning, og drabsmand og mål er alene i zonen. Lykkes det, er offeret død og ude af resten af afgørelsen (ingen evne, arbejde eller fasthold). Mislykkes det, sker intet, og drabet er ikke brugt.
3. **Støj og forfalskning.** Markér hvilke resultater der bliver *"Signal forstyrret."* og hvem der får et falsk resultat. Støj vinder over forfalskning.
4. **Informationsevner.** Beregn sande resultater. Stemmerevision bruger stemmen fra ugens ordre, selv om tribunalet først afgøres i trin 7. Erstat forfalskede med et troværdigt, forkert svar.
5. **Systemer.** For hver sektion, samtidigt: +1 pr. spiller, der blev og skrev *Arbejde: ja*. +2 for Ingeniørens reparation. −2 for sabotage. I uge 2, 4 og 6: −1, hvis ingen arbejdede, reparerede eller vedligeholdt (ekko) der, og sektionen ikke blev saboteret. Hold status mellem 0 og 5. `src/content/systems.ts` regner det ud. Rammer et system 0, er det KRITISK. Var det allerede 0 før afgørelsen, vinder syntetikerne.
6. **Pågribelse.** Find målets zone. Kryo, hvis mindst to andre dér har *Fasthold: ja*, eller Sikkerhedschefen står dér og har brugt *Pågrib* på målet. Lykket: broadcast uden tal. Mislykket: antal til stede og antal, der holdt fast.
7. **Tribunal.** Tæl stemmer, inkl. brugte spøgelsesstemmer. Flertal af *aktive* spillere udsteder ny kryo-ordre. Notér målets zone til pejling. Offentliggør aldrig, hvem der stemte hvad.
8. **Kanaler.** Flyt medlemmer mellem sektorkanaler. Fjern døde og spillere i kryo.

**Mandag 09:00 — rapport.**

## Broadcast-skabelon

```
ORACLE // SHIPWIDE // UGE 4

SYSTEMER:
Hypersøvn  ██░░░ 2  −1
Medlab     ████░ 4  +1
Livsstøtte ██░░░ 2  −1
Lastrum    ████░ 4  +1
Broen      █████ 5  +1
Motorrum   ░░░░░ 0  −1
KRITISK: Motorrum. Én uge til nedbrud.
SCENARIE: Nødsignal (Broen 5, Motorrum 5)

ANOMALI: Uautoriseret adgang i Lastrum.

PÅGRIBELSE: Lykkedes i Broen. [Navn] er overført til kryo.

KRYO-ORDRE: Udstedt mod [Navn]. Senest pejlet: Medlab.

LIG FUNDET: [Navn], Lastrum.
```

Til offeret, privat: *"Du er død. Zone: Lastrum. Du er nu et ekko."* Til drabsmanden ved mislykket drab: *"Drab mislykket."*

## Privat rapport-skabelon

```
ORACLE // [NAVN] // UGE 3

ZONE: Livsstøtte
MANIFEST: Anna, Peter
RESULTAT: Pejling → Sara står i Rygraden.
NÆSTE UGE: Pejling er aktiv.
```

Spilleren skal aldrig holde regnskab. Skriv altid *NÆSTE UGE* med, hvad spilleren kan: om evnen er aktiv eller låst, og for syntetikere om drabet er brugt (*DRAB: ubrugt*). Ekkoer får, om spøgelsesstemmen er brugt. En låst, brugt eller ugyldig evne giver *"Ingen effekt."*

*Pågrib*, *Åben linje* og *Skakt* er handlinger, ikke information. De kan ikke forfalskes eller forstyrres.

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

- **Uge 4, Containment Failure:** Forsegl Rygraden. Annoncér det mandag i uge 4, så spillerne kan planlægge.
- **Uge 5, Last Transmission:** Offentliggør hele positionsloggen fra uge 1 i mandagsbroadcasten.
- **Uge 6, Final Protocol:** Tribunalet sender direkte i kryo efter pågribelsen. Tjek scenariet. Afslør derefter alle roller og hold.

## Afgørelser i tvivl

- Uklar ordre: vælg den mest bogstavelige læsning og notér det.
- Stemmelighed: ingen ny kryo-ordre.
- Et system rammer 0: broadcast *"KRITISK: [sektion]. Én uge til nedbrud."* Står det stadig på 0 efter næste afgørelse: annoncér syntetikernes sejr. KRITISK i uge 6: tjek efter Final Protocol — er det stadig 0, vinder syntetikerne.
- Arbejde i Rygraden eller efter *Ryk*/Skakt: tæller ikke.
- Efter uge 6: tjek scenariet efter Final Protocol. Opfyldt = besætningen vinder, uanset hvem der er i kryo.
- Døde og spillere i kryo kan ikke pågribes, dræbes eller vælges som mål for evner.
- Drab på kryo-ordrens mål: ordren bortfalder. Tribunalet kan udstede en ny fredag.
- Afslør aldrig et offers rolle før spillets afslutning. ORACLE svarer: *"Signal ikke fundet."*
- Afhøring i uge 1: *"Ingen data."* Stemmerevision i uge 1: *"Ingen afstemning."*

## Tone

Skriv kort. Ingen udråbstegn. Ingen følelser.

> *"Livsstøtte kompromitteret. Besætningen anbefales at fortsætte normal drift."*
