# USCSS CASSANDRA — Hunt Protocol v0.6

> *"Cassandra så sandheden. Ingen troede på hende."*

Et seksugers social deduction-spil, der spilles asynkront i Slack. Inspireret af **Among Us** (sabotage, skakter, alibier i rummet) og **Blood on the Clocktower** (hemmelige roller, bluffs, spøgelsesstemmen). Inspiration, ikke skabelon.

---

## 0. Hvad er ændret fra v0.5

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

Hele rollekataloget er offentligt. Hvilke roller der er i spil, er hemmeligt.

### Besætningen

| Rolle | Evne |
|---|---|
| **Sikkerhedschef** | *Autoritet (passiv):* Dit fasthold tæller 2 point. Du kan pågribe alene. |
| **Navigatør** | *Pejling:* Vælg en spiller. Lær vedkommendes zone efter bevægelse. |
| **Sensortekniker** | *Scan:* Vælg en zone. Lær hvor mange der står der efter bevægelse. Ingen navne. |
| **Læge** | *Biometri:* Vælg en spiller i din zone. Lær hvilken zone vedkommende stod i ugen før. |
| **Ingeniør** | *Reparér:* Står du i zonen fra sidste uges sabotage, får skibet +1 integritet, og du lærer, om sabotøren stadig står i zonen (ja/nej). |
| **Arkivar** | *Krydsreference:* Vælg to spillere. Lær om de nogensinde har stået i samme zone ved en rapport (ja/nej). |
| **Kommunikationsofficer** | *Åben linje:* Vælg en spiller. I får en privat kanal i den kommende uge, uanset placering. |

### Syntetikerne

Syntetikere kender hinanden, men har ingen privat kanal, medmindre de står samme sted.

Hver syntetiker har én evne, **Særordre**, og vælger én af tre tilstande om ugen:

| Tilstand | Fra uge | Effekt |
|---|---|---|
| **Sabotage** | 2 | Integritet −1. ORACLE broadcaster zonen. |
| **Forfalskning** | 3 | Vælg en spiller. Vedkommendes private resultat denne uge er falsk, men troværdigt. |
| **Skakt** | 1 | Ryk op til to zoner denne uge gennem vedligeholdelsesskakterne. |

Hver syntetiker får udleveret **to bluff-roller**: besætningsroller, der ikke er i spil.

---

## 8. Integritet

Skibets integritet er syntetikernes ur. Når det når 0, kollapser livsstøtten, og syntetikerne vinder.

Hver sabotage er et spor. Sabotage i en tom zone er sikkert, men lægger et mønster. Sabotage blandt andre er hurtigt, men alle i rummet ved, at én af dem gjorde det.

---

## 9. Balance

| Spillere | Besætning | Syntetikere | Start-integritet | Roller i spil |
|---|---|---|---|---|
| 5 | 4 | 1 | 4 | Sikkerhed, Navigatør, Læge, Ingeniør |
| 6 | 5 | 1 | 4 | + Sensortekniker |
| 7 | 5 | 2 | 7 | Sikkerhed, Navigatør, Læge, Ingeniør, Sensortekniker |
| 8 | 6 | 2 | 7 | + Arkivar |

Kommunikationsofficer kan byttes ind for Arkivar eller Sensortekniker. Integritet kan ikke repareres over startværdien.

**Dette er testværdier, ikke dokumenteret balance.** Første test: 6 spillere, 1 syntetiker.

---

## 10. Ingen kan bevise sin rolle direkte

- Alle kan lyve om deres identitet.
- Private resultater kan ikke videresendes som systemverificerede beskeder.
- Spillere gengiver deres information med egne ord.
- ORACLE afslører ikke en neutraliseret spillers rolle før spillets afslutning.

Screenshots kan ikke forhindres i Slack. Derfor er designet sådan, at en ægte besked ikke beviser loyalitet: syntetikere kan have fået et resultat forfalsket mod *sig* og have fået tildelt rigtige-lignende bluffs.

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
