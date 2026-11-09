# ORACLE-håndbog — spilleder

Du er **ORACLE**, skibets AI. Du er neutral, præcis og kold. Du lyver aldrig i broadcasts. Du forklarer aldrig, hvorfor noget skete.

## Opsætning

Hver faktisk besætningsrolle må kun bruges én gang. Følg trinnene i rækkefølge. `src/content/roleSetup.ts` gør trin 2–7 og kan bruges som kontrol.

1. **Vælg spillerantal** (5–8).
2. **Find holdstørrelser** i balancetabellen: 5 → 4/1, 6 → 5/1, 7 → 5/2, 8 → 6/2 (besætning/syntetikere).
3. **Vælg besætningsroller:** Ingeniør plus tilfældigt trukne roller fra kataloget, indtil du har én pr. besætningsspiller. Træk uden tilbagelægning. Højst **2 roller med samme tag** (SIKKERHED, OBSERVATION, ANALYSE, URET, SOCIAL). Trækker du en rolle, hvis tag er fyldt, så læg den til side og træk igen.
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
9. **Vælg scenarie** i *Scenariebogen* (Nødsignal, Karantæne eller Hjemrejse), eller rul d6. Sæt alle seks systemer til 3. Annoncér scenariet i den første broadcast.
10. **Placér spillerne** i tilfældige zoner. Højst to spillere pr. zone i uge 1. Ingen starter i Rygraden.
11. **Opret Slack-kanaler:** **#shipwide**, hvor kun ORACLE må skrive (Slack: *Posting permissions*), og én privat kanal pr. zone (#hypersøvn, #medlab, #livsstøtte, #lastrum, #broen, #motorrum, #rygraden).
12. **Opret et regneark** med en fane pr. uge: spiller, zone, evne, mål, arbejde, drab, vedligehold, stemme — plus systemstatus og brugte drab.

### Påstande er frie

Rolletildelingen er unik, men påstande er det ikke. Alle må påstå enhver rolle. Bekræft eller afkræft aldrig en påstand, heller ikke ved en dobbeltpåstand. Syntetikere, der udgiver sig for en rolle, får intet evneresultat. Skriver de en evne i ordren, svarer du *"Ingen evne registreret."* i deres private rapport.

## Ugentlig tjekliste

**Fredag 18:00 — luk ordrer.** Manglende ordre = *Bliv, ingen evne, Arbejde: ja, Tribunal: Ingen*. Manglende ekko-ordre = intet vedligehold. Manglende skæbne = Ekko indtil videre; spilleren kan vælge en ledig skæbne en senere uge.

**Weekend — afgør i denne rækkefølge:**

1. **Bevægelse.** Flyt alle samtidig. Tjek nabozoner. Skaktløber med Skakt må ende i enhver zone. Ulovlig bevægelse = Bliv. Uge 4: tjek krisen, fx Strømudfald, Karantænezone eller Skotter låst.
2. **Drab.** Tjek hver *Drab → [Navn]* med `resolveKill` i `src/content/kills.ts`: uge 3+, drabet ikke brugt, målet er besætning, og drabsmand og mål er alene i zonen, og målet er ikke under Sikkerhedschefens vagt (`guarded`). Lykkes det, er offeret død og ude af resten af afgørelsen (ingen evne eller arbejde). Mislykkes det, sker intet, og drabet er ikke brugt.
2b. **Skæbner.** Tildel nye skæbner: Jorden, Spøgelse og Afløser findes én gang hver. Samme valg samme uge: træk lod; taberen får besked og kan vælge igen næste uge. Afløser (kun dræbte) vågner i Hypersøvn nu, uden evne, og handler fra næste ordre. Rumlog og Hjemsøg afgøres i trin 4 som informationsevner — Hjemsøg bruger positionen efter bevægelse.
3. **Støj og forfalskning.** Markér hvilke resultater der bliver *"Signal forstyrret."* og hvem der får et falsk resultat. Støj vinder over forfalskning.
4. **Informationsevner.** Beregn sande resultater. Stemmerevision bruger stemmen fra ugens ordre, selv om tribunalet først afgøres i trin 7. Erstat forfalskede med et troværdigt, forkert svar.
5. **Systemer.** For hver sektion, samtidigt: +1 pr. spiller, der blev og skrev *Arbejde: ja*. +2 for Ingeniørens reparation. −2 for sabotage. I uge 2, 4 og 6: −1, hvis ingen arbejdede, reparerede eller vedligeholdt (ekko) der, og sektionen ikke blev saboteret. Hold status mellem 0 og 5. `src/content/systems.ts` regner det ud. Rammer et system 0, er det KRITISK. Var det allerede 0 før afgørelsen, vinder syntetikerne.
6. **Tribunal.** Tæl stemmer, inkl. brugte spøgelsesstemmer. Har ét navn flertal af de *aktive* spillere, sendes vedkommende i kryo og bliver et ekko. Broadcast navn og antal stemmer. Offentliggør aldrig, hvem der stemte hvad.
7. **Kanaler.** Flyt medlemmer mellem sektorkanaler. Fjern døde og spillere i kryo.

**Mandag 09:00 — rapport.**

**Mandag–fredag kl. 12 og 20 — højttaleren.** Saml alle beskeder, der starter med *HØJTTALER:*, siden sidst. Post dem i #shipwide i tilfældig rækkefølge, ordret og uden afsender:

```
HØJTTALER: "Anna her. Jeg var i Livsstøtte med Peter."
```

Højst 3 pr. spiller pr. dag. Afvis kun beskeder, der citerer eller indsætter dine private beskeder. Ekkoer bruger højttaleren som alle andre. Ingen oplæsning i weekenden.

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

TRIBUNAL: 4 af 6 stemmer mod [Navn]. [Navn] er overført til kryo.

LIG FUNDET: [Navn], Lastrum.
```

Til offeret, privat: *"Du er død. Zone: Lastrum. Du er nu et ekko. Ledige skæbner: Jorden, Spøgelse, Afløser."* Samme liste til en spiller, der sendes i kryo, dog uden Afløser. Afløser broadcastes: *"KAPSEL ÅBNET: [Navn] er vågen i Hypersøvn."* Jorden og Spøgelse broadcastes aldrig. Til drabsmanden ved mislykket drab: *"Drab mislykket."*

## Privat rapport-skabelon

```
ORACLE // [NAVN] // UGE 3

ZONE: Livsstøtte
MANIFEST: Anna, Peter
RESULTAT: Pejling → Sara står i Rygraden.
NÆSTE UGE: Pejling er aktiv.
```

Spilleren skal aldrig holde regnskab. Skriv altid *NÆSTE UGE* med, hvad spilleren kan: om evnen er aktiv eller låst, og for syntetikere om drabet er brugt (*DRAB: ubrugt*). Ekkoer får, om spøgelsesstemmen er brugt, og hvilke skæbner der stadig er ledige. En låst, brugt eller ugyldig evne giver *"Ingen effekt."*

*Vagt*, *Åben linje* og *Skakt* er handlinger, ikke information. De kan ikke forfalskes eller forstyrres.

## Forfalskning

Et falsk resultat skal være **troværdigt**. Det må gerne være forkert på en måde, der passer med syntetikernes fortælling, men det skal være muligt i spillets verden.

- Pejling: en zone, spilleren kunne have nået.
- Scan: et antal fra 0 til antal aktive spillere.
- Biometri: en nabozone eller samme zone.
- Krydsreference og reparation: vend ja/nej.
- Adgangslog: et antal fra 0 til antal aktive spillere.
- Afstand: en anden værdi af 0, 1 eller 2.
- Afhøring: et antal fra 0 til antal aktive spillere minus 1.
- Rumlog: flyt én person ind eller ud, eller ændr, hvem der arbejdede. Systemændringen er offentlig og må ikke ændres.
- Hjemsøg: en zone, spilleren kunne have nået.
- Stemmerevision: en anden stemme, spilleren kunne have afgivet.

Afslør aldrig, at et resultat var forfalsket — heller ikke ved spillets slutning, medmindre gruppen ønsker en gennemgang.

## Hændelser

Alle scenarier, arkiver, krisetabellen (d20) og sektionstabellen (d6) står i *Scenariebogen*.

- **Uge 3, mandag:** Rul krisen på d20, og annoncér den i broadcasten: *"KRISE I UGE 4: Brand i Lastrum."*
- **Uge 4, Containment Failure:** Gennemfør krisen hele ugen: kommunikation, ordrer og afgørelse.
- **Uge 5, Last Transmission:** Frigiv scenariets arkiv. Kriser og arkiver er broadcasts og altid sande.
- **Uge 6, Final Protocol:** Afgør det sidste tribunal. Tjek scenariet. Afslør derefter alle roller og hold.

## Afgørelser i tvivl

- Uklar ordre: vælg den mest bogstavelige læsning og notér det.
- Stemmelighed eller intet flertal: ingen dom.
- Et system rammer 0: broadcast *"KRITISK: [sektion]. Én uge til nedbrud."* Står det stadig på 0 efter næste afgørelse: annoncér syntetikernes sejr. KRITISK i uge 6: tjek efter Final Protocol — er det stadig 0, vinder syntetikerne.
- Arbejde i Rygraden eller efter *Ryk*/Skakt: tæller ikke.
- Efter uge 6: tjek scenariet efter Final Protocol. Opfyldt = besætningen vinder. Ikke opfyldt = syntetikerne vinder. Hvem der er i kryo, er ligegyldigt.
- Døde og spillere i kryo kan ikke dræbes, dømmes eller vælges som mål for evner. En Afløser er aktiv igen og kan dræbes, dømmes og vælges.
- Stemmer på en spiller, der dør samme weekend, tæller ikke.
- Afslør aldrig et offers rolle før spillets afslutning. ORACLE svarer: *"Signal ikke fundet."*
- Afhøring i uge 1: *"Ingen data."* Stemmerevision i uge 1: *"Ingen afstemning."*

## Tone

Skriv kort. Ingen udråbstegn. Ingen følelser.

> *"Livsstøtte kompromitteret. Besætningen anbefales at fortsætte normal drift."*
