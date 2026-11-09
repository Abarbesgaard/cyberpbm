# USCSS CASSANDRA — Hunt Protocol v0.10

> *"Cassandra så sandheden. Ingen troede på hende."*

Et seksugers social deduction-spil, der spilles asynkront i Slack.

---

## 0. Hvad er ændret fra v0.9

v0.10 giver syntetikerne et drab og giver døde spillere en grund til at blive.

| v0.9 | v0.10 | Hvorfor |
|---|---|---|
| Ingen drab | **Hver syntetiker kan dræbe én gang**, fra uge 3, kun alene med offeret | Truslen gør det farligt at stå alene. Liget broadcastes med zone. |
| AI-ekko: én besked om dagen, må ikke afsløre rolle | **Ekko: frit ord i #shipwide** | Døde besætningsmedlemmer har noget at sige. Ord er stadig kun vidneudsagn. |
| Ekko har kun spøgelsesstemmen | **+ Vedligehold:** én sektion pr. uge får intet forfald | En ugentlig beslutning, der hjælper scenariet. |

### Fra v0.8 til v0.9

v0.9 gav besætningen et mål ud over jagten: **skibssystemer og ét scenarie pr. kampagne.**

| v0.8 | v0.9 | Hvorfor |
|---|---|---|
| Ét fælles integritetsur | **Seks skibssystemer**, ét pr. sektion, 0–5 | Status offentliggøres hver uge. Hvert rum bliver et spor. |
| Besætningen vinder kun ved jagt | **Eller ved at opfylde kampagnens scenarie** | At blive og arbejde konkurrerer med at rykke og jage. |
| — | **Arbejde** som felt i ordren | Syntetikere kan lade være i hemmelighed. Tallene afslører det. |
| — | **Forfald** fra uge 2 | Besætningen skal sprede sig. Ingen kan stå stille i ét rum. |
| Sabotage −1 integritet, reparation +1 | **Sabotage −2, reparation +2** på systemet i sektionen | Skal kunne mærkes på en skala fra 0 til 5. |

### Fra v0.7 til v0.8

v0.8 giver syntetikerne roller efter samme princip som besætningen: **én evne pr. spiller, hver rolle højst én gang.**

| v0.7 | v0.8 | Hvorfor |
|---|---|---|
| Alle syntetikere har Særordre med tre tilstande | **Én unik syntetikerrolle pr. syntetiker** | Én evne pr. spiller gælder nu også syntetikerne. |
| Sabotage er en tilstand | **Særordre er altid i spil og saboterer** | Integritetsuret skal altid have en syntetiker, der kan trække det. Spejler Ingeniøren. |
| Skakt: op til to zoner | **Skaktløber: vilkårlig zone** | To zoner via Rygraden nåede allerede alle zoner. Reglen siger det nu ærligt. |
| Forfalskning fra uge 3 | **Forfalsker fra uge 2** | En rolle med kun én evne må ikke stå stille i to uger. |
| — | **Ny: Støjsender** | Blokerer information i én zone. Synligt, men anonymt. |

### Fra v0.6 til v0.7

v0.7 indfører én grundregel: **hver faktisk rolle er unik i en kampagne.** Ingen to spillere kan have samme rolle.

| v0.6 | v0.7 | Hvorfor |
|---|---|---|
| Uudtalt, om to spillere kan have samme rolle | **Hver faktisk rolle findes højst én gang** | En dobbeltpåstand betyder altid, at mindst én lyver. |
| Balancetabellen nævnte præcis, hvilke roller der var i spil | **Ingeniør + hemmelig trækning** | v0.6 modsagde sig selv: Rollerne i spil skulle være hemmelige, men tabellen var offentlig. |
| 7 roller i kataloget | **11 roller** (4 nye) | Ved 7–8 spillere var der 2 og 1 ubrugte roller, men 2 syntetikere skulle bruge 4 bluffs. |
| To bluff-roller | **To bluff-forslag fra de ubrugte roller** | Det er forslag til påstande, ikke roller. Overlap mellem syntetikere er tilladt. |
| Ingen grænse for sammensætning | **Højst 2 aktive roller pr. tag** | Forhindrer, at informationsevner stables, til skibet er kortlagt. |
| Rolle-navne i data | **Stabile rolle-id'er** | Opsætning og validering bruger id'er, ikke visningsnavne. |
| Tribunalstemmer: uafklaret, om de offentliggøres | **Stemmer er hemmelige** | Præcisering. ORACLE har altid kun broadcastet resultatet. Revisor bygger på det. |

### Fra v0.5 til v0.6

| v0.5 | v0.6 | Hvorfor |
|---|---|---|
| Tre neutraliseringsmodeller i spil | **Fysisk neutralisering** er valgt | Gør skibet og bevægelse til en del af jagten. Man kan være sikker og stadig fejle. |
| Infiltratorer | **Syntetikere** med en skjult *særordre* | Alien-tonen: man ved aldrig, hvem der bløder hvidt. |
| Infiltratorer kan skjule sig passivt | **Integritetsur** | Syntetikere skal handle for at vinde, og handlinger efterlader spor. |
| Rolleevner fra uge 2 | **Informationsevner fra uge 1** | Første afstemning skal bygge på data, ikke mavefornemmelse. |
| Ingen fælles rolleliste | **Offentligt rollekatalog + bluffs** | Rollepåstande kan krydstjekkes. Dobbeltpåstande skaber drama. |
| Neutraliseret = AI-ekko | **AI-ekko + én spøgelsesstemme** | Holder neutraliserede spillere relevante til slutningen. |

---

## 1. Præmis

USCSS *Cassandra* er en kommerciel slæber på vej hjem med 20 millioner tons malm. Kessler-Tanaka Corporation har vækket besætningen før tid. Skibets AI, **ORACLE**, rapporterer uregelmæssigheder.

Én eller to af besætningen er ikke mennesker. De er **syntetikere** med en særordre fra selskabet: *Lasten og ORACLE skal nå hjem. Besætningen er sekundær.*

---

## 2. Sejrsbetingelser

**Syntetikerne vinder med det samme**, hvis ét skibssystem når 0 (se afsnit 8).

Ellers afgøres spillet efter Final Protocol i uge 6. **Besætningen vinder**, hvis alle syntetikere er i kryo, **eller** hvis kampagnens scenarie er opfyldt. **Syntetikerne vinder**, hvis mindst én syntetiker stadig er aktiv, og scenariet ikke er opfyldt.

En fejlagtig neutralisering fjerner en uskyldig fra spillets aktive handlinger. Roller afsløres først ved spillets afslutning.

---

## 3. Skibet

Syv zoner. En ring af seks sektioner rundt om **Rygraden**, skibets centrale korridor.

```
        [A] HYPERSØVN ──── [B] MEDLAB
           /                    \
  [F] MOTORRUM ── [R] RYGRADEN ── [C] LIVSSTØTTE
           \                    /
        [E] BROEN ─────── [D] LASTRUM

  Rygraden har også forbindelse til A, B, D og E.
```

- Hver sektion grænser op til sine to nabosektioner og til Rygraden.
- Rygraden grænser op til alle sektioner.
- Ringen: A – B – C – D – E – F – A.

Rygraden er hurtig, men eksponeret. Alle kan nå den på én uge.

---

## 4. Ugen

| Hvornår | Hvad |
|---|---|
| **Mandag 09:00** | ORACLE-rapport: offentlig broadcast + private resultater. |
| **Mandag–fredag** | Kommunikation. |
| **Fredag 18:00** | Deadline: ordre og tribunal-stemme. |
| **Weekend** | ORACLE afgør ugen. |

### Kommunikation

- **#shipwide** — offentlig kanal. Alle kan læse og skrive.
- **Sektorkanal** — privat kanal for spillere i samme zone. Opdateres hver mandag.
- **Ingen DM'er.** Privat tale kræver, at man står samme sted. Det er her, alibier opstår.

### Ordren

Hver aktiv spiller sender én ordre pr. uge med fire felter:

1. **Bevægelse** — *Bliv* eller *Ryk* til en tilstødende zone.
2. **Evne** — brug din ene evne (eller lad være).
3. **Arbejde** — *ja/nej*. Tæller kun, hvis du blev i en sektion (ikke Rygraden). Systemet i sektionen +1.
4. **Fasthold** — *ja/nej*. Kun relevant, hvis du ender i samme zone som den person, der har en aktiv kryo-ordre.

Plus en separat **tribunal-stemme** (se afsnit 6).

### Afgørelsesrækkefølge

1. Bevægelse (samtidig for alle).
2. Drab.
3. Støj og forfalskning.
4. Informationsevner.
5. Systemer: arbejde, reparation, sabotage, forfald og vedligehold (samtidigt).
6. Pågribelse.
7. Tribunal — ny kryo-ordre.
8. Sektorkanaler opdateres.

---

## 5. Information

Information skal være nyttig, men sjældent fuldstændig.

| Niveau | Kilde | Sandt? |
|---|---|---|
| **Observation** | ORACLE-broadcast og din egen sektor-manifest | Altid sandt. |
| **Analyse** | Private evneresultater | Sandt, medmindre forfalsket. |
| **Vidneudsagn** | Alt, hvad spillere siger | Kan være sandt, falsk eller vildledende. |

**Sektor-manifest:** Hver mandag får du en liste over, hvem der står i din zone. Det er al den positionsinformation, du får gratis. Hvem der står andre steder, ved du kun fra vidneudsagn og evner.

**Broadcasts er altid sande.** Forfalskning rammer kun private resultater. Det betyder, at sabotage altid afslører, *hvor* det skete — men aldrig *hvem*.

---

## 6. Neutralisering — The Hunt

Neutralisering kræver både **beslutning** og **fysisk tilstedeværelse**.

### 6.1 Tribunal → kryo-ordre

- Hver fredag stemmer alle aktive spillere på én spiller eller *Ingen ændring*.
- Stemmerne er hemmelige. ORACLE broadcaster kun resultatet. Spillerne må selv fortælle (eller lyve om), hvad de stemte.
- **Simpelt flertal af aktive spillere** udsteder en **kryo-ordre** mod den valgte.
- Der kan kun være én aktiv kryo-ordre. En ny ordre erstatter den gamle.
- Ordren gælder, indtil målet er pågrebet eller ordren erstattes.
- Når ordren udstedes, **pejler ORACLE målet** én gang: mandagens broadcast oplyser, hvilken zone målet står i.

### 6.2 Pågribelse — to-mands-reglen

Efter bevægelse tæller ORACLE **fasthold-point** fra spillere i målets zone:

- Hver spiller med *Fasthold: ja* giver 1 point.
- Sikkerhedschefen giver 2 point.
- **2 point = pågrebet.** Målet sendes i kryo.

Hvis mindst én spiller i zonen har valgt *Fasthold: ja*, offentliggør ORACLE:

> *"Pågribelse forsøgt i Livsstøtte. 2 til stede ud over målet. 1 fasthold-point. Mislykket."*

Ingen navne. Antallet afslører, at nogen i rummet **valgte ikke at holde fast**. Var det tvivl, eller en syntetiker, der beskytter sin egen?

Hvis ingen forsøger, siger ORACLE kun: *"Målet er ikke pågrebet."*

### 6.3 Flugt

Målet ved, at jagten er gået ind. Det kan blive, flygte eller overgive sig ved at blive stående og bede om at blive hentet. En uskyldig, der bliver stående, sender et stærkt signal. En syntetiker kan gøre det samme.

### 6.4 Ekko — kryo og døde

Døde spillere og spillere i kryo bliver **Ekko**. Et ekko:

- mister bevægelse, evne, arbejde og sektorkanal.
- må skrive frit i **#shipwide**. Alt, et ekko siger, er vidneudsagn — ORACLE bekræfter aldrig en rolle.
- sender hver fredag en kort ordre: **Vedligehold → én sektion.** Den sektion får intet forfald den uge. Det giver ikke +1, og ORACLE oplyser aldrig, hvem der vedligeholdt hvad.
- har **én spøgelsesstemme**, der kan bruges i ét tribunal i resten af spillet.

Et ekko fra syntetikerholdet må også sende vedligehold — eller lade være. Ingen kan se forskel.

### 6.5 Drab

Drab er en fælles syntetikerhandling, ikke en rolleevne. Hver syntetiker beholder sin ene evne.

- Hver syntetiker kan dræbe **én gang pr. kampagne**, fra **uge 3**.
- Drabet skrives i ordren: *Drab → [Navn]*. Den uge bruger syntetikeren ikke sin evne.
- Drabet lykkes kun, hvis drabsmand og mål er de **eneste aktive spillere i zonen** efter bevægelse. Målet skal være besætning.
- Mislykkes det (vidner, forkert zone), sker intet, og drabet er ikke brugt. Syntetikeren får kun: *"Drab mislykket."*
- Drab afgøres lige efter bevægelse. Offeret når ikke at bruge evne, arbejde eller fasthold.
- Offeret får privat: *"Du er død. Zone: Lastrum."* — ikke hvem. Bevægelse er samtidig, så offeret så aldrig, hvem der kom ind.
- Mandagens broadcast: *"LIG FUNDET: Sara, Lastrum."* Navn og zone, aldrig rolle.

**Liget er et spor, ikke et bevis.** Hvem kunne nå Lastrum? Hvem påstår at have stået et andet sted? Adgangslog, Biometri og Pejling kan alle pege på drabsmanden — hvis de ikke bliver forfalsket eller forstyrret.

Drab gør det farligt at stå alene. Men arbejde i en tom sektion holder systemerne i live. Det er dilemmaet.

---

## 7. Roller — én evne pr. spiller

### 7.1 Grundreglen: unikke roller

- **Hver faktisk rolle findes højst én gang i en kampagne.** ORACLE trækker roller uden tilbagelægning.
- **Hele kataloget er offentligt.** Hvilke roller der er i spil, er hemmeligt. Ikke alle roller i kataloget er om bord.
- **Undtagelse:** Ingeniør er altid i spil (se 7.4). Det er den eneste rolle, alle ved er aktiv.
- **Påstande er frie.** Alle må påstå enhver rolle — også en rolle, en anden spiller har.
- **Dobbeltpåstand:** Påstår to spillere samme rolle, lyver mindst én af dem. Det kan være en syntetiker, men også besætning, der skjuler sig. ORACLE bekræfter eller afkræfter aldrig en påstand.
- **Syntetikere kan ikke bruge evnen** fra en besætningsrolle, de udgiver sig for. De får intet evneresultat og må opfinde det.
- **Syntetikere har deres egne roller** (se 7.3). De trækkes også uden tilbagelægning. Ingen to syntetikere har samme rolle.

### 7.2 Besætningen — rollekataloget

| Rolle | Id | Tag | Evne |
|---|---|---|---|
| **Sikkerhedschef** | `security_chief` | JAGT | *Autoritet (passiv):* Dit fasthold tæller 2 point. Du kan pågribe alene. |
| **Navigatør** | `navigator` | JAGT | *Pejling:* Vælg en spiller. Lær vedkommendes zone efter bevægelse. |
| **Sensortekniker** | `sensor_tech` | OBSERVATION | *Scan:* Vælg en zone. Lær hvor mange der står der efter bevægelse. Ingen navne. |
| **Kvartermester** *(ny)* | `quartermaster` | OBSERVATION | *Adgangslog:* Vælg en zone. Lær hvor mange der gik ind i zonen denne uge. Ingen navne. |
| **Radaroperatør** *(ny)* | `radar_operator` | OBSERVATION | *Afstand:* Vælg en spiller. Lær hvor mange zoner der er mellem jer efter bevægelse: 0, 1 eller 2. |
| **Læge** | `medic` | ANALYSE | *Biometri:* Vælg en spiller i din zone. Lær hvilken zone vedkommende stod i ugen før. |
| **Arkivar** | `archivist` | ANALYSE | *Krydsreference:* Vælg to spillere. Lær om de nogensinde har stået i samme zone ved en rapport (ja/nej). |
| **Psykolog** *(ny)* | `psychologist` | ANALYSE | *Afhøring:* Vælg en spiller i din zone. Lær hvor mange andre der stod sammen med vedkommende ugen før. |
| **Ingeniør** *(altid i spil)* | `engineer` | URET | *Reparér:* Systemet i din sektion +2. Blev sektionen saboteret sidste uge, lærer du også, om sabotøren stadig står der (ja/nej). |
| **Kommunikationsofficer** | `comms_officer` | SOCIAL | *Åben linje:* Vælg en spiller. I får en privat kanal i den kommende uge, uanset placering. |
| **Revisor** *(ny)* | `auditor` | SOCIAL | *Stemmerevision:* Vælg en spiller. Lær hvem vedkommende stemte på ved denne uges tribunal. |

**Hvorfor de fire nye roller:**

- **Kvartermester** tæller *bevægelse*, ikke tilstedeværelse. Den kan afsløre et alibi som "jeg blev i Lastrum hele ugen" uden at nævne navne.
- **Radaroperatør** er en grov Pejling: Den siger kun, om nogen er tæt på. Nyttig til at vurdere, om en jagt kan nå frem.
- **Psykolog** tjekker påstande som "jeg var alene" uden at afsløre, hvor eller med hvem.
- **Revisor** gør tribunalet til information. Syntetikere, der koordinerer stemmer, risikerer at blive opdaget — men kun af én spiller, der selv kan lyve om resultatet.

Ingen af de nye evner afslører en spillers hold, ingen kræver ressourcer, og alle resultater er private og kan forfalskes.

**Nye evner — detaljer:**

- *Adgangslog* tæller spillere, der stod i en anden zone ved sidste rapport og nu står i den valgte zone. Skakt tæller som at gå ind.
- *Afstand*: 0 = samme zone, 1 = nabozone (alle sektioner er naboer til Rygraden), 2 = ellers.
- *Afhøring* bruger målets zone ved sidste rapport. Uge 1 er der ingen "ugen før": ORACLE svarer *"Ingen data."*
- *Stemmerevision*: Uge 1 er der intet tribunal: *"Ingen afstemning."* Spøgelsesstemmer kan ikke revideres, fordi spillere i kryo ikke kan vælges.

### 7.3 Syntetikerne

Syntetikere kender hinanden og hinandens roller, men har ingen privat kanal, medmindre de står samme sted.

Hver syntetiker har **én rolle med én evne**. Kataloget er offentligt.

| Rolle | Id | Evne | Fra uge | Effekt |
|---|---|---|---|---|
| **Særordre** *(altid i spil)* | `special_order` | Sabotage | 2 | Systemet i din sektion −2. ORACLE broadcaster sektionen — aldrig navnet. |
| **Forfalsker** | `forger` | Forfalskning | 2 | Vælg en spiller. Vedkommendes private resultat denne uge er falsk, men troværdigt. |
| **Skaktløber** | `crawler` | Skakt | 1 | Ryk til en vilkårlig zone gennem vedligeholdelsesskakterne. |
| **Støjsender** *(ny)* | `jammer` | Støj | 2 | Vælg en zone. Alle informationsevner brugt i eller på zonen giver *"Signal forstyrret."* |

- **Særordre er altid i spil.** Ved én syntetiker er det den eneste syntetikerrolle. Uden den kan systemerne kun falde gennem forfald.
- **Ved to syntetikere** trækkes den anden rolle tilfældigt blandt Forfalsker, Skaktløber og Støjsender.
- Besætningen ved, at Særordre er om bord. De ved ikke, hvilken støtterolle der er med.

**Detaljer:**

- *Støj* rammer evner, hvis mål er zonen, en spiller i zonen efter bevægelse, eller som bruges af en spiller i zonen. Ingeniørens reparation virker stadig, men ja/nej-svaret bliver *"Signal forstyrret."* Støj og forfalskning på samme resultat: Støj vinder.
- *Skakt* erstatter bevægelsen i ordren. Skaktløberen står stadig i manifestet for den zone, den ender i.

### 7.4 Rollepulje og bluff-forslag

**Sammensætning:**

1. **Ingeniør er altid i spil.** Systemerne er afstemt efter, at sabotage kan repareres. Uden Ingeniør er det kun arbejde, der kan opveje −2 pr. uge, og det er ikke testet.
2. Resten af besætningsrollerne trækkes tilfældigt fra kataloget **uden tilbagelægning**.
3. **Højst 2 aktive roller med samme tag.** Det forhindrer, at fx Sensortekniker, Kvartermester og Radaroperatør tilsammen kortlægger hele skibet hver uge.

**Bluff-forslag:**

- Hver syntetiker får **2 forskellige bluff-forslag**.
- Forslag vælges **kun fra de ubrugte roller**. En syntetiker, der påstår et forslag, kan derfor aldrig blive modsagt af den ægte rolleindehaver.
- Forslag **må overlappe** mellem syntetikere. De kender hinanden og kan koordinere. ORACLE giver adskilte forslag, når der er nok ubrugte roller — og det er der altid ved 5–8 spillere med det nuværende katalog.
- Forslag er forslag til påstande, ikke roller. En syntetiker må påstå hvad som helst, også en rolle, der er i spil. Så risikerer den en dobbeltpåstand.

## 8. Skibssystemer og scenarie

### 8.1 Systemer

Hver sektion har ét system med status fra **0 til 5**. Alle starter på **3**. Rygraden har intet system.

Hver uge, efter informationsevnerne, ændres hvert system samtidigt:

| Kilde | Effekt |
|---|---|
| **Arbejde** | +1 pr. spiller, der blev i sektionen og skrev *Arbejde: ja*. |
| **Reparation** (Ingeniør) | +2. Tæller også som arbejde. |
| **Sabotage** (Særordre) | −2. |
| **Forfald** (fra uge 2) | −1, hvis ingen arbejdede eller reparerede i sektionen. |

Status holdes mellem 0 og 5. **Når ét system når 0, vinder syntetikerne med det samme.**

Hver mandag broadcaster ORACLE alle seks systemer med status og ændring:

```
ORACLE // SYSTEMSTATUS // UGE 3
Hypersøvn  ██░░░ 2  −1
Medlab     ████░ 4  +1
Livsstøtte ██░░░ 2  −1
Lastrum    ████░ 4  +1
Broen      █████ 5  +1
Motorrum   █░░░░ 1  −1
ANOMALI: Uautoriseret adgang i Livsstøtte.
```

**Tallene er et spor.** Sammenhold ændringen med, hvem der påstår at have stået og arbejdet i sektionen. To blev i Medlab, men Medlab steg kun 1? Én af dem arbejdede ikke. Besætning har ingen grund til at lade være. En syntetiker har.

Sabotage i en tom sektion er sikkert, men giver forfald oven i: −3. Sabotage blandt andre er sværere at se i tallene, men alle i rummet ved, at én af dem gjorde det.

### 8.2 Scenarie

Hver kampagne har **ét scenarie**. ORACLE vælger det ved opsætning og offentliggør det i uge 1. Scenariet tjekkes efter afgørelsen i uge 6.

| Scenarie | Id | Krav efter uge 6 |
|---|---|---|
| **Nødsignal** | `distress` | Broen og Motorrum står på 5. |
| **Karantæne** | `quarantine` | Medlab og Hypersøvn står på 5. |
| **Hjemrejse** | `homeward` | Alle seks systemer står på mindst 4. |

Scenariet giver besætningen to veje til sejr — og et dilemma hver uge: blive og arbejde, eller rykke og jage.

---

## 9. Balance

| Spillere | Besætning | Syntetikere | Roller i spil | Ubrugte roller | Bluff-forslag |
|---|---|---|---|---|---|
| 5 | 4 | 1 | Ingeniør + 3 | 7 | 1 × 2 = 2 |
| 6 | 5 | 1 | Ingeniør + 4 | 6 | 1 × 2 = 2 |
| 7 | 5 | 2 | Ingeniør + 4 | 6 | 2 × 2 = 4 |
| 8 | 6 | 2 | Ingeniør + 5 | 5 | 2 × 2 = 4 |

Systemerne starter på 3 ved alle spillerantal. Tabellen viser kun antal — hvilke roller der er i spil, offentliggøres aldrig. Syntetikerroller: Særordre ved 1 syntetiker; Særordre + 1 af 3 ved 2 syntetikere.

### 9.1 Bevist (testet i `tests/roleSetup.test.ts`)

- Ved 5–8 spillere er holdfordelingen korrekt, og ingen besætningsrolle optræder to gange.
- Alle sammensætninger, der overholder tag-grænsen, er mulige for 5–8 spillere (udtømmende gennemgang).
- Der er altid mindst 2 × antal syntetikere ubrugte roller, så bluff-forslag kan være adskilte.
- Bluff-forslag peger aldrig på en rolle i spil.
- Ugyldige opsætninger giver forståelige fejl.
- Særordre er altid i spil, og ingen syntetikerrolle optræder to gange.
- Systemregnskabet (arbejde, reparation, sabotage, forfald, vedligehold, grænser 0–5) og scenarietjek er testet i `tests/systems.test.ts`.
- Drabsbetingelserne (uge 3+, alene, kun besætning, én pr. syntetiker, mislykket drab er ikke brugt) er testet i `tests/kills.test.ts`.

### 9.2 Antagelser, der ikke er testet

- Spillerfordeling, systemernes startværdi og forfald er stadig testværdier. Første test: 6 spillere, 1 syntetiker.
- At højst 2 pr. tag er nok til at undgå for stærke informationskombinationer.
- At 11 roller giver nok rum til bluffs uden at blive uoverskueligt.
- At Revisor ikke gør stemmekoordinering umulig for syntetikerne.
- At forfald ikke er for hårdt ved 5 spillere, hvor fire besætningsmedlemmer skal dække seks systemer.
- At de tre scenarier er nogenlunde lige svære.
- At ét drab pr. syntetiker ikke knækker besætningen ved 5 spillere (4 → 3 besætning).
- At ekko-vedligehold ikke gør forfald for let, når flere spillere er døde eller i kryo.
- At Særordre alene giver én syntetiker nok at arbejde med ved 5–6 spillere. Forfalskning og Støj findes kun ved 7–8 spillere.
- At det er acceptabelt, at Ingeniør er offentligt kendt som aktiv. En syntetiker, der påstår Ingeniør, laver altid en dobbeltpåstand.

## 10. Ingen kan bevise sin rolle direkte

- Alle kan lyve om deres identitet.
- Private resultater kan ikke videresendes som systemverificerede beskeder.
- Spillere gengiver deres information med egne ord.
- ORACLE afslører ikke en neutraliseret spillers rolle før spillets afslutning.

- Rolletildelingen er unik, men det beviser ingenting i sig selv: ORACLE bekræfter aldrig en påstand, og en dobbeltpåstand afgøres kun af spillerne.

Screenshots kan ikke forhindres i Slack. Derfor er screenshots og videresendelse forbudt. Se afsnit 14 om, hvor meget den regel bærer.

---

## 11. Seks uger

| Uge | Navn | Nyt |
|---|---|---|
| 1 | **Awakening** | Spillerne vågner i tilfældige zoner. Informationsevner og Skakt er aktive. Ingen sabotage, intet tribunal. |
| 2 | **First Anomaly** | Sabotage, Forfalskning og Støj låses op. Første tribunal fredag. |
| 3 | **Broken Trust** | Første pågribelse mulig. |
| 4 | **Containment Failure** | ORACLE forsegler én zone hele ugen. Ingen kan gå ind eller ud. |
| 5 | **Last Transmission** | ORACLE frigiver hele positionsloggen fra uge 1. Gamle alibier kan tjekkes. |
| 6 | **Final Protocol** | Fredagens tribunal er direkte: flertal sender målet i kryo uden pågribelse. Derefter afsløres alle roller. |

Hver uge tilføjer data eller pres, ikke nye regler.

---

## 12. Eksempel — uge 4, Containment Failure

> **ORACLE // SHIPWIDE**
> *Advarsel. Uautoriseret adgang i Livsstøtte. Livsstøtte 2/5 (−1).*
> *Pågribelse forsøgt i Livsstøtte. 1 til stede ud over målet. 0 fasthold-point. Mislykket.*

Kryo-ordren fra uge 3 var på **Anna**.

- **Anna:** "Jeg var i Livsstøtte med Peter. Han sagde, han ville tjekke terminalen."
- **Peter:** "Jeg er Sikkerhedschef. Jeg holdt ikke fast, fordi jeg ikke tror, Anna er syntetiker."
- **Sara:** "Jeg er Sensortekniker. Min scan viste 2 personer i Livsstøtte."

Hvad ved besætningen?

- Broadcasten er sand: Der blev saboteret i Livsstøtte, og der var præcis to personer — Anna og Peter.
- Én af de to er altså syntetikeren. Syntetikeren tog en risiko ved at sabotere i et rum med et vidne.
- Peter kunne have pågrebet Anna alene. Han lod være. Beskytter han en uskyldig eller sig selv?
- Livsstøtte faldt kun 1: sabotage −2, én arbejdede +1. Anna og Peter påstår begge, at de arbejdede. Én af dem lyver.
- Saras scan bekræfter blot det, alle allerede ved. Er hun ægte, eller bygger hun troværdighed?

Besætningen skal vælge: behold ordren på Anna, eller flyt den til Peter. Begge står i en zone ved siden af Rygraden. Begge ved, hvad der kommer.

---

## 13. Åbne testspørgsmål

1. Er to-mands-reglen for svær med 5 spillere?
2. Er Skaktløber for stærk til flugt? Alternativ: Skakt kun fra uge 3.
3. Bliver sabotage syntetikernes eneste strategi?
4. Er én pejling ved udstedelse nok til at starte en jagt?
5. Er spøgelsesstemmen sjov, eller bare en formalitet?
6. Er Final Protocol en nødvendig sikkerhedsventil, eller tager den luften ud af jagten?
7. Er 11 roller for mange at holde styr på for nye spillere?
8. Er Revisor for stærk mod syntetikere, der koordinerer stemmer?
9. Gør det, at Ingeniør altid er i spil, rollen for let at bekræfte via reparationer?
10. Er én syntetiker med kun Særordre for svag ved 5–6 spillere?
11. Afslører *"Signal forstyrret"* for meget, nemlig at Støjsender er i spil?
12. Er ét drab pr. syntetiker for meget ved 5 spillere?
13. Bliver spillere så bange for at stå alene, at ingen arbejder i tomme sektioner?
14. Afslører et ekkos frie ord for meget? Et dødt offer *er* besætning — men ved ikke, hvem der dræbte.

---

## 14. Kendte uoverensstemmelser

Fundet under arbejdet med v0.7. Punkt 1–2 er rettet, fordi unikke roller kræver det. Resten er **dokumenteret, ikke ændret**.

1. **Rettet:** v0.6's balancetabel nævnte præcis, hvilke roller der var i spil, men samtidig var "hvilke roller der er i spil" hemmeligt.
2. **Rettet:** Ved 7 og 8 spillere gav v0.6 kun 2 og 1 ubrugte roller, men 2 syntetikere skulle have 2 bluffs hver.
3. **Fasthold-point kan bevise Sikkerhedschefen.** Broadcasten nævner antal til stede og antal point. "1 til stede, 2 point" beviser, at den ene var Sikkerhedschef. Det strider mod afsnit 10. Mulig rettelse: Broadcast kun *lykkedes/mislykket* og antal til stede.
4. **Åben linje beviser Kommunikationsofficeren over for målet.** Målet ser kanalen blive oprettet. Det er et bevis over for én spiller, ikke offentligt.
5. **Reparation er synlig.** En stigning på 2 eller mere i systemstatus peger på, at Ingeniøren stod i sektionen. Det kan afgøre en dobbeltpåstand om Ingeniør.
6. **Afsnit 10 i v0.6 overvurderede forfalskning.** Teksten sagde, at syntetikere kan "have fået et resultat forfalsket mod sig". Syntetikere har ingen informationsevne og får ingen resultater. Et ægte evneresultat beviser altså, at afsenderen er besætning. Det eneste værn er forbuddet mod screenshots og videresendelse.
