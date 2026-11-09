# USCSS CASSANDRA — Hunt Protocol v0.7

> *"Cassandra så sandheden. Ingen troede på hende."*

Et seksugers social deduction-spil, der spilles asynkront i Slack. Inspireret af **Among Us** (sabotage, skakter, alibier i rummet) og **Blood on the Clocktower** (hemmelige roller, bluffs, spøgelsesstemmen). Inspiration, ikke skabelon.

---

## 0. Hvad er ændret fra v0.6

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

**Besætningen vinder**, hvis alle syntetikere er i kryo efter Final Protocol i uge 6.

**Syntetikerne vinder**, hvis mindst én syntetiker stadig er aktiv efter Final Protocol, **eller** hvis skibets integritet når 0.

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

Hver aktiv spiller sender én ordre pr. uge med tre felter:

1. **Bevægelse** — *Bliv* eller *Ryk* til en tilstødende zone.
2. **Evne** — brug din ene evne (eller lad være).
3. **Fasthold** — *ja/nej*. Kun relevant, hvis du ender i samme zone som den person, der har en aktiv kryo-ordre.

Plus en separat **tribunal-stemme** (se afsnit 6).

### Afgørelsesrækkefølge

1. Bevægelse (samtidig for alle).
2. Forfalskning.
3. Informationsevner.
4. Sabotage og reparation.
5. Pågribelse.
6. Tribunal — ny kryo-ordre.
7. Sektorkanaler opdateres.

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

### 6.4 Kryo

En spiller i kryo:

- mister sin ordre og sin evne.
- forlader sektorkanalerne.
- må skrive i **#shipwide** som et **AI-ekko**: højst én besked om dagen. Må ikke afsløre rolle eller hold.
- har **én spøgelsesstemme**, der kan bruges i ét tribunal i resten af spillet.

---

## 7. Roller — én evne pr. spiller

### 7.1 Grundreglen: unikke roller

- **Hver faktisk rolle findes højst én gang i en kampagne.** ORACLE trækker roller uden tilbagelægning.
- **Hele kataloget er offentligt.** Hvilke roller der er i spil, er hemmeligt. Ikke alle roller i kataloget er om bord.
- **Undtagelse:** Ingeniør er altid i spil (se 7.4). Det er den eneste rolle, alle ved er aktiv.
- **Påstande er frie.** Alle må påstå enhver rolle — også en rolle, en anden spiller har.
- **Dobbeltpåstand:** Påstår to spillere samme rolle, lyver mindst én af dem. Det kan være en syntetiker, men også besætning, der skjuler sig. ORACLE bekræfter eller afkræfter aldrig en påstand.
- **Syntetikere kan ikke bruge evnen** fra en rolle, de udgiver sig for. De får intet evneresultat og må opfinde det.
- **Syntetiker er et hold, ikke en katalogrolle.** Syntetikere har ingen besætningsrolle. Ved to syntetikere har begge Særordre. Unikhedsreglen gælder besætningsrollerne.

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
| **Ingeniør** *(altid i spil)* | `engineer` | URET | *Reparér:* Står du i zonen fra sidste uges sabotage, får skibet +1 integritet, og du lærer, om sabotøren stadig står i zonen (ja/nej). |
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

Syntetikere kender hinanden, men har ingen privat kanal, medmindre de står samme sted.

Hver syntetiker har én evne, **Særordre**, og vælger én af tre tilstande om ugen:

| Tilstand | Fra uge | Effekt |
|---|---|---|
| **Sabotage** | 2 | Integritet −1. ORACLE broadcaster zonen. |
| **Forfalskning** | 3 | Vælg en spiller. Vedkommendes private resultat denne uge er falsk, men troværdigt. |
| **Skakt** | 1 | Ryk op til to zoner denne uge gennem vedligeholdelsesskakterne. |

### 7.4 Rollepulje og bluff-forslag

**Sammensætning:**

1. **Ingeniør er altid i spil.** Integritetsuret er afstemt efter, at skaden kan repareres. Uden Ingeniør kan én syntetiker vinde på fire sabotager i uge 2–5, og det er ikke testet.
2. Resten af besætningsrollerne trækkes tilfældigt fra kataloget **uden tilbagelægning**.
3. **Højst 2 aktive roller med samme tag.** Det forhindrer, at fx Sensortekniker, Kvartermester og Radaroperatør tilsammen kortlægger hele skibet hver uge.

**Bluff-forslag:**

- Hver syntetiker får **2 forskellige bluff-forslag**.
- Forslag vælges **kun fra de ubrugte roller**. En syntetiker, der påstår et forslag, kan derfor aldrig blive modsagt af den ægte rolleindehaver.
- Forslag **må overlappe** mellem syntetikere. De kender hinanden og kan koordinere. ORACLE giver adskilte forslag, når der er nok ubrugte roller — og det er der altid ved 5–8 spillere med det nuværende katalog.
- Forslag er forslag til påstande, ikke roller. En syntetiker må påstå hvad som helst, også en rolle, der er i spil. Så risikerer den en dobbeltpåstand.

## 8. Integritet

Skibets integritet er syntetikernes ur. Når det når 0, kollapser livsstøtten, og syntetikerne vinder.

Hver sabotage er et spor. Sabotage i en tom zone er sikkert, men lægger et mønster. Sabotage blandt andre er hurtigt, men alle i rummet ved, at én af dem gjorde det.

---

## 9. Balance

| Spillere | Besætning | Syntetikere | Start-integritet | Roller i spil | Ubrugte roller | Bluff-forslag |
|---|---|---|---|---|---|---|
| 5 | 4 | 1 | 4 | Ingeniør + 3 | 7 | 1 × 2 = 2 |
| 6 | 5 | 1 | 4 | Ingeniør + 4 | 6 | 1 × 2 = 2 |
| 7 | 5 | 2 | 7 | Ingeniør + 4 | 6 | 2 × 2 = 4 |
| 8 | 6 | 2 | 7 | Ingeniør + 5 | 5 | 2 × 2 = 4 |

Integritet kan ikke repareres over startværdien. Tabellen viser kun antal — hvilke roller der er i spil, offentliggøres aldrig.

### 9.1 Bevist (testet i `tests/roleSetup.test.ts`)

- Ved 5–8 spillere er holdfordelingen korrekt, og ingen besætningsrolle optræder to gange.
- Alle sammensætninger, der overholder tag-grænsen, er mulige for 5–8 spillere (udtømmende gennemgang).
- Der er altid mindst 2 × antal syntetikere ubrugte roller, så bluff-forslag kan være adskilte.
- Bluff-forslag peger aldrig på en rolle i spil.
- Ugyldige opsætninger giver forståelige fejl.

### 9.2 Antagelser, der ikke er testet

- Spillerfordeling og start-integritet er stadig testværdier. Første test: 6 spillere, 1 syntetiker.
- At højst 2 pr. tag er nok til at undgå for stærke informationskombinationer.
- At 11 roller giver nok rum til bluffs uden at blive uoverskueligt.
- At Revisor ikke gør stemmekoordinering umulig for syntetikerne.
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
| 2 | **First Anomaly** | Sabotage låses op. Første tribunal fredag. |
| 3 | **Broken Trust** | Forfalskning låses op. Første pågribelse mulig. |
| 4 | **Containment Failure** | ORACLE forsegler én zone hele ugen. Ingen kan gå ind eller ud. |
| 5 | **Last Transmission** | ORACLE frigiver hele positionsloggen fra uge 1. Gamle alibier kan tjekkes. |
| 6 | **Final Protocol** | Fredagens tribunal er direkte: flertal sender målet i kryo uden pågribelse. Derefter afsløres alle roller. |

Hver uge tilføjer data eller pres, ikke nye regler.

---

## 12. Eksempel — uge 4, Containment Failure

> **ORACLE // SHIPWIDE**
> *Advarsel. Uautoriseret adgang i Livsstøtte. Integritet 2/4.*
> *Pågribelse forsøgt i Livsstøtte. 1 til stede ud over målet. 0 fasthold-point. Mislykket.*

Kryo-ordren fra uge 3 var på **Anna**.

- **Anna:** "Jeg var i Livsstøtte med Peter. Han sagde, han ville tjekke terminalen."
- **Peter:** "Jeg er Sikkerhedschef. Jeg holdt ikke fast, fordi jeg ikke tror, Anna er syntetiker."
- **Sara:** "Jeg er Sensortekniker. Min scan viste 2 personer i Livsstøtte."

Hvad ved besætningen?

- Broadcasten er sand: Der blev saboteret i Livsstøtte, og der var præcis to personer — Anna og Peter.
- Én af de to er altså syntetikeren. Syntetikeren tog en risiko ved at sabotere i et rum med et vidne.
- Peter kunne have pågrebet Anna alene. Han lod være. Beskytter han en uskyldig eller sig selv?
- Saras scan bekræfter blot det, alle allerede ved. Er hun ægte, eller bygger hun troværdighed?

Besætningen skal vælge: behold ordren på Anna, eller flyt den til Peter. Begge står i en zone ved siden af Rygraden. Begge ved, hvad der kommer.

---

## 13. Åbne testspørgsmål

1. Er to-mands-reglen for svær med 5 spillere?
2. Er Skakt for stærk til flugt? Alternativ: Skakt kun fra uge 3.
3. Bliver integritetsuret syntetikernes eneste strategi?
4. Er én pejling ved udstedelse nok til at starte en jagt?
5. Er spøgelsesstemmen sjov, eller bare en formalitet?
6. Er Final Protocol en nødvendig sikkerhedsventil, eller tager den luften ud af jagten?
7. Er 11 roller for mange at holde styr på for nye spillere?
8. Er Revisor for stærk mod syntetikere, der koordinerer stemmer?
9. Gør det, at Ingeniør altid er i spil, rollen for let at bekræfte via reparationer?

---

## 14. Kendte uoverensstemmelser

Fundet under arbejdet med v0.7. Punkt 1–2 er rettet, fordi unikke roller kræver det. Resten er **dokumenteret, ikke ændret**.

1. **Rettet:** v0.6's balancetabel nævnte præcis, hvilke roller der var i spil, men samtidig var "hvilke roller der er i spil" hemmeligt.
2. **Rettet:** Ved 7 og 8 spillere gav v0.6 kun 2 og 1 ubrugte roller, men 2 syntetikere skulle have 2 bluffs hver.
3. **Fasthold-point kan bevise Sikkerhedschefen.** Broadcasten nævner antal til stede og antal point. "1 til stede, 2 point" beviser, at den ene var Sikkerhedschef. Det strider mod afsnit 10. Mulig rettelse: Broadcast kun *lykkedes/mislykket* og antal til stede.
4. **Åben linje beviser Kommunikationsofficeren over for målet.** Målet ser kanalen blive oprettet. Det er et bevis over for én spiller, ikke offentligt.
5. **Reparation er synlig.** Integritet +1 i broadcasten viser, at Ingeniøren stod i sabotagezonen. Det kan afgøre en dobbeltpåstand om Ingeniør.
6. **Afsnit 10 i v0.6 overvurderede forfalskning.** Teksten sagde, at syntetikere kan "have fået et resultat forfalsket mod sig". Syntetikere har ingen informationsevne og får ingen resultater. Et ægte evneresultat beviser altså, at afsenderen er besætning. Det eneste værn er forbuddet mod screenshots og videresendelse.
