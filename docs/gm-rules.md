# ORACLE-håndbog — spilleder

Du er **ORACLE**, skibets AI. Du er neutral, præcis og kold. Du lyver aldrig i broadcasts. Du forklarer aldrig, hvorfor noget skete.

## Opsætning

Hver faktisk besætningsrolle må kun bruges én gang. Følg trinnene i rækkefølge. `src/content/roleSetup.ts` gør trin 2–7 og kan bruges som kontrol.

1. **Vælg spillerantal** (6–8).
2. **Find holdstørrelser** i balancetabellen: 6 → 5/1, 7 → 5/2, 8 → 6/2 (besætning/syntetikere).
3. **Vælg besætningsroller:** Ingeniør plus tilfældigt trukne roller fra kataloget, indtil du har én pr. besætningsspiller. Træk uden tilbagelægning. Højst **2 roller med samme tag** (SIKKERHED, OBSERVATION, ANALYSE, URET, SOCIAL). Trækker du en rolle, hvis tag er fyldt, så læg den til side og træk igen.
4. **Fordel rollerne uden tilbagelægning.** Vælg tilfældigt, hvem der er syntetikere. Giv hver besætningsspiller én af de valgte roller. Syntetikere får syntetikerroller: Særordre altid, og ved to syntetikere én tilfældig af Forfalsker, Skaktløber og Støjsender. Ingen rolle må gives to gange.
5. **Find de ubrugte roller:** hele kataloget minus rollerne fra trin 3.
6. **Vælg bluff-forslag kun fra de ubrugte roller:** 2 forskellige pr. syntetiker. Giv syntetikerne adskilte forslag, når der er nok (det er der altid ved 6–8 spillere). Overlap er tilladt, hvis puljen ikke rækker.
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
9. **Vælg scenarie og skibsplan** i *Scenariebogen*: scenarie på d6, skibsplan (Ringen, Knudepunktet, Langskibet eller Tvillingeskroget) på d4. Sæt integriteten for alle syv sektioner efter scenariet (`startStatus(scenario)` i `src/content/systems.ts`): de sektioner, scenariet nævner, starter lavere, resten på 3. Annoncér begge i den første broadcast. Scenariet er historie og arkiv; det afgør ikke spillet.
10. **Placér spillerne** i tilfældige zoner. Højst to spillere pr. zone i uge 1. Ingen starter i Rygraden.
11. **Opret Slack-kanaler:** **#shipwide**, hvor kun ORACLE må skrive (Slack: *Posting permissions*), og én privat kanal pr. zone (#hypersøvn, #medlab, #livsstøtte, #lastrum, #broen, #motorrum, #rygraden).
12. **Opret et regneark** med en fane pr. uge: spiller, zone i ugen, ny zone mandag, aktivering, mål, stemme — plus integritet, sabotage (sektion og uge) og om holdet har dræbt.

### Påstande er frie

Rolletildelingen er unik, men påstande er det ikke. Alle må påstå enhver rolle. Bekræft eller afkræft aldrig en påstand, heller ikke ved en dobbeltpåstand. Syntetikere, der udgiver sig for en rolle, får intet evneresultat. Skriver de en evne i ordren, svarer du *"Ingen evne registreret."* i deres private rapport.

## Ugentlig tjekliste

**Fredag 18:00 — luk ordrer.** Manglende ordre = *Bliv, ingen aktivering, Tribunal: Ingen*. Har en spiller sendt flere aktiveringer, gælder kun den første (`oneActivationEach`).

**Weekend — afgør i denne rækkefølge.** Alt afgøres ud fra, hvor spillerne **stod i ugen**. Bevægelsen sker til sidst og gælder fra mandag. Find først ugens saboterede sektioner med `sabotagedIn(uge, log)` i `src/content/rooms.ts`, og tjek hver aktivering med `checkActivation`: en sektionsevne kun fra sektionen selv, sabotage kun for syntetikere fra uge 2 i egen sektion. En sektionsevne i en saboteret sektion giver privat *"Systemet er saboteret."* og er brugt.

1. **Drab.** Personlig beskyttelse (Hypersøvn) beskytter mod drab og alien (`shielded`). Tjek hver *Drab → [Navn]* med `resolveKill` i `src/content/kills.ts`: uge 3+, holdet har ikke dræbt denne uge (`killedThisWeek`), målet er besætning, og drabsmand og mål er alene i zonen i ugen, og målet er ikke under Sikkerhedschefens vagt (`guarded`). Sender to syntetikere et drab, gælder kun det første, du modtog. Lykkes det, er offeret død og ude af resten af afgørelsen (ingen evne, intet vedligehold). Mislykkes det, sker intet.
1b. **Alien.** Tjek `resolveAlien` i `src/content/alien.ts`: to eller flere med *Bekæmp* i alienens zone smider den ud (den bliver Ekko, stadig syntetikerhold). Ellers, ved Angreb og præcis én spiller i zonen: rul d6; besætning dør på 4–6, syntetikere, bevogtede og beskyttede overlever. Offeret broadcastes som et normalt drab: kun navnet. Alle i alienens zone får privat: *"Noget bevæger sig i ventilationen."*
1c. **Skæbner.** Rul d6 for hvert nyt ekko: 1 Jorden, 2 Spøgelse, 3–4 Alien, 5 Afløser, 6 Ekko. Hver findes én gang. Taget, eller Afløser til en frossen = Ekko. Ingen omrul. Flere nye ekkoer samme uge: rul i tilfældig rækkefølge. Afløser (kun dræbte) vågner i Hypersøvn nu, uden evne, og handler fra næste ordre. Rumlog og Hjemsøg afgøres i trin 3 som informationsevner — Hjemsøg bruger positionen i ugen.
2. **Støj og forfalskning.** Markér hvilke resultater der bliver *"Signal forstyrret."* og hvem der får et falsk resultat. Støj vinder over forfalskning.
3. **Informationsevner.** Beregn sande resultater. Stemmerevision bruger stemmen fra ugens ordre, selv om tribunalet først afgøres i trin 5. Erstat forfalskede med et troværdigt, forkert svar. Kamera (`camera`), Arkiv (`archive`) og Bevægelsessensorer (`motionSensors`) afgøres her. Sabotage, Transport, Personlig beskyttelse, Ekstra reparation og Nødstrøm svarer kun med en kvittering.
4. **Integritet.** Kun automatisk fra uge 2. Tæl levende mennesker pr. sektion med `humansBySection` (fjern weekendens ofre først). Kør `resolveSystems` i `src/content/systems.ts` med `humans`, Ingeniørens `repairs` (+2), Motorrums `extraRepairs` (+1) og Livsstøttes `stabilized` (Nødstrøm). Mindst ét menneske: +1, ellers −1; flere giver ikke mere; syntetikere er neutrale. Alt samtidigt, holdt mellem 0 og 5. Nødstrøm stopper ethvert nettotab. Rammer en sektion 0 (`failed`), vinder syntetikerne straks: stop afgørelsen, og afslør alle roller. Kriser i uge 4 justerer beregningen (se *Scenariebogen*).
5. **Tribunal.** Tæl stemmer, inkl. brugte spøgelsesstemmer. Har ét navn flertal af de *aktive* spillere, sendes vedkommende i kryo og bliver et ekko. Broadcast navn og antal stemmer. Offentliggør aldrig, hvem der stemte hvad. Er alle syntetikere nu i kryo, vinder besætningen. Er det uge 6, og er mindst én syntetiker aktiv, vinder syntetikerne.
6. **Bevægelse — gælder fra mandag.** Flyt alle samtidig. Tjek nabozoner. Transport fra sidste uge: op til to zoner ad gangene (`reachable(layout, zone, 2)`). Skaktløber med Skakt må ende i enhver zone. Ulovlig bevægelse = Bliv. Alien: ryk den én zone (eller bliv); kriser stopper den ikke. Uro → zone: hver, der rykker ind i zonen, ender i en tilfældig nabozone til den; Skakt ind og ud fejler. Uge 4: tjek krisen, fx Strømudfald, Karantænezone, Skotter låst eller Gang kollapset.
7. **Sabotage og kanaler.** Notér ugens sabotage (sektion og uge): den virker næste uge og udløber derefter selv. Flyt medlemmer mellem sektorkanaler. Fjern døde og spillere i kryo.

**Mandag 09:00 — rapport.**

**Mandag–fredag kl. 12 og 20 — højttaleren.** Saml alle beskeder, der starter med *HØJTTALER:*, siden sidst. Post dem i #shipwide i tilfældig rækkefølge, ordret og uden afsender:

```
HØJTTALER: "Anna her. Jeg var i Livsstøtte med Peter."
```

Højst 3 pr. spiller pr. dag. Afvis kun beskeder, der citerer eller indsætter dine private beskeder. Ekkoer kan kun tale gennem dig — via højttaleren som alle andre. Fjern dem fra alle sektorkanaler. Ingen oplæsning i weekenden.

## Broadcast-skabelon

```
ORACLE // SHIPWIDE // UGE 4

INTEGRITET:
Hypersøvn  ██░░░ 2
Medlab     ████░ 4
Livsstøtte ██░░░ 2
Lastrum    ████░ 4
Broen      █████ 5
Motorrum   █░░░░ 1
Rygraden   ███░░ 3
SCENARIE: Nødsignal

TRIBUNAL: 4 af 6 stemmer mod [Navn]. [Navn] er overført til kryo.

[Navn] er død.
```

Til offeret, privat: *"Du er død. Du er nu et ekko. Skæbne (d6: 2): Spøgelse."* Det samme til en spiller, der sendes i kryo. Afløser broadcastes: *"KAPSEL ÅBNET: [Navn] er vågen i Hypersøvn."* Jorden, Spøgelse og Alien broadcastes aldrig. Til en ny alien: *"Du er en alien. Du spiller nu for syntetikerne. Vælg en startzone."* Til alienen efter angreb: *"Angreb: Anna var alene. Intet sker."* eller *"Angreb: Anna er død."* Til drabsmanden ved mislykket drab: *"Drab mislykket."*

## Privat rapport-skabelon

```
ORACLE // [NAVN] // UGE 3

ZONE: Livsstøtte (fra mandag)
MANIFEST: Anna, Peter
RESULTAT: Pejling → Sara står i Rygraden.
NÆSTE UGE: Pejling er aktiv.
```

Spilleren skal aldrig holde regnskab. Skriv altid *NÆSTE UGE* med, hvad spilleren kan: om evnen er aktiv eller låst, og for syntetikere, at holdet kan dræbe igen (*DRAB: klar*). Ekkoer får, om spøgelsesstemmen er brugt, og deres skæbne. En låst, brugt eller ugyldig evne giver *"Ingen effekt."*

*Vagt*, *Åben linje*, *Skakt*, *Transport*, *Personlig beskyttelse*, *Ekstra reparation*, *Nødstrøm* og *Sabotage* er handlinger, ikke information. De kan ikke forfalskes eller forstyrres.

## Forfalskning

Et falsk resultat skal være **troværdigt**. Det må gerne være forkert på en måde, der passer med syntetikernes fortælling, men det skal være muligt i spillets verden.

- Pejling: en zone, spilleren kunne have nået.
- Scan: et antal fra 0 til antal aktive spillere.
- Biometri: en nabozone eller samme zone.
- Krydsreference og reparation: vend ja/nej.
- Adgangslog: et antal fra 0 til antal aktive spillere.
- Afstand: en anden værdi af 0, 1 eller 2.
- Afhøring: et antal fra 0 til antal aktive spillere minus 1.
- Rumlog: flyt én person ind eller ud. Integritetens ændring må ikke ændres.
- Hjemsøg: en zone, spilleren kunne have nået.
- Kamera: tilføj eller fjern ét navn.
- Arkiv og Bevægelsessensorer: et andet muligt antal.
- Stemmerevision: en anden stemme, spilleren kunne have afgivet.

Afslør aldrig, at et resultat var forfalsket — heller ikke ved spillets slutning, medmindre gruppen ønsker en gennemgang.

## Hændelser

Alle scenarier, arkiver, krisetabellen (d20) og sektionstabellen (d6) står i *Scenariebogen*.

- **Uge 3, mandag:** Rul krisen på d20, og annoncér den i broadcasten: *"KRISE I UGE 4: Brand i Lastrum."*
- **Uge 4, Containment Failure:** Gennemfør krisen hele ugen: kommunikation, ordrer og afgørelse.
- **Uge 5, Last Transmission:** Frigiv scenariets arkiv. Kriser og arkiver er broadcasts og altid sande.
- **Uge 6, Final Protocol:** Sidste tribunal. Er mindst én syntetiker aktiv efter dommen, vinder syntetikerne. Afslør derefter alle roller og hold.

## Afgørelser i tvivl

- Uklar ordre: vælg den mest bogstavelige læsning og notér det.
- Stemmelighed eller intet flertal: ingen dom.
- En sektion rammer 0: broadcast *"SYSTEMSVIGT: [sektion]."* straks — vent ikke til mandag — og annoncér syntetikernes sejr. Integriteten afgøres før tribunalet, så et svigt vinder, selv om den sidste syntetiker dømmes samme weekend.
- Mandagens rapport viser kun værdierne (`integrityReport`). Aldrig ændringer, årsager eller navne.
- Besætningen vinder, så snart alle syntetikere er i kryo. En alien er ikke syntetiker og skal ikke fryses. Syntetikerne vinder, hvis en sektion rammer 0, eller hvis mindst én er aktiv efter tribunalet i uge 6.
- Døde og spillere i kryo kan ikke dræbes, dømmes eller vælges som mål for evner. En Afløser er aktiv igen og kan dræbes, dømmes og vælges.
- Stemmer på en spiller, der dør samme weekend, tæller ikke.
- Afslør aldrig et offers rolle før spillets afslutning. ORACLE svarer: *"Signal ikke fundet."*
- Afhøring i uge 1: *"Ingen data."* Stemmerevision i uge 1: *"Ingen afstemning."*

## Tone

Skriv kort. Ingen udråbstegn. Ingen følelser.

> *"Livsstøtte kompromitteret. Besætningen anbefales at fortsætte normal drift."*
