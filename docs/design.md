# USCSS CASSANDRA v0.29

> *"Cassandra så sandheden. Ingen troede på hende."*

Et seksugers social deduction-spil, der spilles asynkront i Slack.

---

## 0. Hvad er ændret fra v0.28

v0.29 gør integriteten enkel og giver hver sektion én evne. Hvor du står, er stadig din vigtigste handling — men nu tæller kun, om der står et menneske.

| v0.28 | v0.29 | Hvorfor |
|---|---|---|
| Seks systemer; Rygraden uden system | **Syv sektioner med integritet 0–5, også Rygraden** | Alle zoner betyder noget. |
| Alle starter på 3 | **Scenariet bestemmer startværdierne** (testværdier: to sektioner på 2) | Skibet starter delvist nedbrudt, og hver kampagne starter forskelligt. |
| +1 pr. spiller, −1 forfald for alle | **Mindst ét levende menneske: +1. Ellers −1.** Flere giver intet ekstra. Syntetikere er neutrale. | Syntetikere kan ikke længere skjule sig i regnestykket ved at arbejde. En faldende sektion betyder: intet menneske stod der. |
| Særordre: sabotage −2 | **Alle syntetikere kan sabotere** sin egen sektion. Sektionens evne virker ikke næste uge. Rammer ikke integriteten. | Sabotage handler om information, ikke tal. Særordre har ingen rolleevne. |
| Rumevne ved ≥ 3, nedbrud ved ≤ 1 | **Syv sektionsevner uden grænser; ingen nedbrud** | Færre regler. Prisen er stadig ugens aktivering. |
| Mandag: status og ændring | **Mandag: kun værdierne** | Spillerne må selv sammenligne ugerne. |
| Bevægelse først, så alt andet | **Alt afgøres ud fra ugens zone; bevægelsen sker mandag** | Én regel for drab, evner og vedligehold. Du vedligeholder den sektion, du stod i hele ugen. |
| Ekko: Vedligehold → sektion | **Fjernet** | Kun levende mennesker vedligeholder. |
| Ingeniør: +2 og *"Saboteret: ja/nej"* om sidste uge | **+2 og *"Saboteret: ja/nej"* om denne uge** | Sabotagen fra denne uge virker først næste uge. Ingeniøren kan nå at advare. |
| Brand og Overbelastning ændrede arbejde og sabotage | **Tilpasset vedligehold** | Arbejde og −2-sabotage findes ikke længere. |

### Fra v0.27 til v0.28

v0.28 gør social deduction til kernen. Systemerne er uret og sporene, ikke målet.

| v0.27 | v0.28 | Hvorfor |
|---|---|---|
| Besætningen vinder kun ved scenariet | **Besætningen vinder, når alle syntetikere er i kryo** | Deduktionen er spillet. Før var det to spil, og besætningen vandt kun på logistik. |
| Syntetikerne vinder ved systemsvigt, protokol eller uopfyldt scenarie | **Syntetikerne vinder, hvis én er aktiv efter tribunalet i uge 6, eller et system rammer 0** | Overlevelse er målet; systemerne er deres genvej. |
| Uge 6: protokolvalg | **Tribunal hver uge fra uge 2 til 6** | Uden scenariesejr afgør tribunalet spillet. |
| Scenariet har krav efter uge 6 | **Scenariet er historie og arkiv** | Det afgør ikke længere, hvem der vinder. |
| *Arbejde: ja* i ordren, kun ved Bliv | **Alle i en sektion arbejder automatisk** | Hvor du står, er din handling. Ordren har tre felter. |
| Rumevnen koster ugens arbejde | **Én aktivering: rolleevne, rumevne eller Bekæmp** | Arbejdet er automatisk, så rumevnen koster din rolleevne. |
| Forfald i uge 2, 4 og 6 i tomme sektioner | **Alle systemer −1 hver uge fra uge 2** | Når det er nok at stå der, skal skibet falde hurtigere. Én holder et system, to løfter det. |
| 0 = KRITISK, én uge til systemsvigt | **0 = syntetikerne vinder** | Uret skal kunne løbe ud. |
| Ét drab pr. syntetiker; *"LIG FUNDET: Sara, Lastrum."* | **Ét drab om ugen for holdet; *"Sara er død."*** | Som i Among Us: et drab er en nyhed, ikke et bevis. Hvor og hvordan er kun påstande. |
| 5–8 spillere | **6–8 spillere** | Med drab hver uge er fire besætningsmedlemmer for få. |

### Fra v0.26 til v0.27

v0.27 binder deduktion og systemer sammen. Før var det to spil: besætningen vandt kun på systempoint, og sabotage blev broadcastet, så tallene sagde *hvor*, men aldrig gav et spor til *hvem*.

| v0.26 | v0.27 | Hvorfor |
|---|---|---|
| ORACLE broadcaster sabotage: *"Uautoriseret adgang i Livsstøtte."* | **Sabotage skjules i regnestykket.** Kun status og ændring broadcastes. | Hvert tal bliver et spor. Man skal arbejde sammen for at nå målet, men gruppen kan skjule syntetikeren. |
| Uge 6: sidste tribunal (afgøres efter systemerne og ændrer intet) | **Protokolvalg:** flertallet vælger, hvem der udfører Final Protocol. En syntetiker vinder straks. | Besætningen skal både reparere skibet og vide, hvem den stoler på. |
| Ingeniør: *"Saboteret: ja. Sabotøren her: nej."* | **Kun "Saboteret: ja/nej."** | Med skjult sabotage pegede svaret direkte på syntetikeren. |

### Fra v0.25 til v0.26

v0.26 giver hvert rum en **rumevne** og et **nedbrud**.

| v0.25 | v0.26 | Hvorfor |
|---|---|---|
| Et system betyder kun noget på 0 | **Rumevne ved ≥ 3, nedbrud ved ≤ 1** | Status 2 og 5 føltes ens. Nu giver et sundt system en evne, og et svagt rammer hele skibet. |
| Arbejde er det eneste, man gør i en sektion | **ARBEJDE: Rum → mål** i stedet for arbejde | Placering får mening hver uge. Prisen er, at systemet ikke stiger. |

### Fra v0.24 til v0.25

v0.25 lader døde og frosne blive en **alien**.

| v0.24 | v0.25 | Hvorfor |
|---|---|---|
| d6: 1–2 Jorden, 3–4 Spøgelse, 5 Afløser, 6 Ekko | **d6: 1 Jorden, 2 Spøgelse, 3–4 Alien, 5 Afløser, 6 Ekko** | Døde spillere kan nu skifte side. Alienen lever i skakterne og spiller for syntetikerne. |
| Kun syntetikere dræber | **Alienen kan angribe en ensom spiller (d6 4–6)** | At stå alene bliver farligere. Syntetikere ignoreres, så en overlevende er mistænkelig — men slaget kan også bare fejle. |
| Bevægelse er altid som skrevet | **Uro → zone: den, der rykker ind, farer vild** | Forvirring og falske alibier hjælper syntetikerne. |
| Ingen kan kæmpe | **ARBEJDE: Bekæmp** — to i alienens zone smider den ud | Besætningen har et modtræk, men det koster arbejde. |

### Fra v0.23 til v0.24

v0.24 lader **terningen** bestemme skæbnen.

| v0.23 | v0.24 | Hvorfor |
|---|---|---|
| Ekkoet vælger en ledig skæbne | **ORACLE ruller d6: 1–2 Jorden, 3–4 Spøgelse, 5 Afløser, 6 Ekko** | Det er mere spændende ikke at vide, hvad man bliver. Ingen venter strategisk på den bedste skæbne. |

### Fra v0.22 til v0.23

v0.23 lader kriserne ramme **gangene** og **ORACLE's signal**.

| v0.22 | v0.23 | Hvorfor |
|---|---|---|
| 15 Mørkelægning | **15 Gang kollapset** *(d6)*: den stiplede gang mellem sektionen og Rygraden lukkes | Skibsplanen betyder mere, når én gang kan forsvinde. På Ringen går man udenom; på Knudepunktet er sektionen afskåret. |
| 17 Ekkostorm | **17 Støj på linjen**: hvert tredje ord fra ORACLE bliver til *brzzz* i uge 4 | Sande oplysninger bliver halve. Spillerne må gætte og sammenholde, og ekkoer og højttaleren bliver svære at stole på. |
| Strømudfald og Skotter låst nævner ikke kortet | **Strømudfald lukker de stiplede gange, Skotter låst de fuldt optrukne** | Kortets to slags linjer svarer nu direkte til kriserne. |

### Fra v0.21 til v0.22

v0.22 gør **Langskibet** spilbart.

| v0.21 | v0.22 | Hvorfor |
|---|---|---|
| Langskibet er én kæde: seks ryk fra ende til ende | **To parallelle gange med tværgange: højst tre ryk** | Man rykker én zone om ugen. En kæde på seks ryk betød, at man aldrig nåede den anden ende i en seksugers kampagne. |

### Fra v0.20 til v0.21

v0.21 giver skibet **fire skibsplaner**.

| v0.20 | v0.21 | Hvorfor |
|---|---|---|
| Skibet er altid en ring om Rygraden | **Fire planer på d4: Ringen, Knudepunktet, Langskibet, Tvillingeskroget** | Samme zoner, andre gange. Hver kampagne får sin egen geografi: hvor man mødes, og hvor langt der er mellem målene. |

### Fra v0.19 til v0.20

v0.20 giver døde og frosne spillere en **skæbne**.

| v0.19 | v0.20 | Hvorfor |
|---|---|---|
| Alle ekkoer er ens: højttaler, vedligehold, én spøgelsesstemme | **+ Skæbne: Jorden, Spøgelse eller Afløser — hver én gang pr. kampagne** | En spiller, der ryger ud i uge 2, skal have noget at gøre i fire uger. Flere døde bliver til forskellige ting. |

### Fra v0.17 til v0.19

v0.19 dropper undertitlen. Spillet hedder bare **USCSS Cassandra**.

| v0.17 | v0.19 | Hvorfor |
|---|---|---|
| USCSS Cassandra — Hunt Protocol | **USCSS Cassandra** | Der er ingen jagt længere. Spillet handler om at redde skibet — eller smadre det. (v0.18 hed kortvarigt *Damage Control*.) |

### Fra v0.16 til v0.17

v0.17 gør #shipwide til skibets højttaler.

| v0.16 | v0.17 | Hvorfor |
|---|---|---|
| Alle kan skrive i #shipwide med eget navn | **Spillere skriver til ORACLE, som læser op i #shipwide uden afsender** | Et højttaleranlæg viser ikke, hvem der taler. Ingen afsløres af at tale, og en underskrift beviser intet. |
| Beskeder vises, når de skrives | **Oplæsning kl. 12 og 20 i tilfældig rækkefølge** | Tidspunktet må ikke afsløre afsenderen. |

### Fra v0.15 til v0.16

v0.16 flytter scenarierne til en egen *Scenariebog* og gør krisen i uge 4 tilfældig.

| v0.15 | v0.16 | Hvorfor |
|---|---|---|
| Hvert scenarie har én fast krise | **Krisen rulles på d20 mandag i uge 3** | Tyve kriser gør hver kampagne forskellig. Et rul en uge før giver tid til at planlægge. |
| Scenarier beskrevet i designdokumentet | **Scenariebog** med scenarier, arkiver, krisetabel og sektionstabel | ORACLE har ét sted at slå op. |

### Fra v0.14 til v0.15

v0.15 gør uge 4 og 5 afhængige af scenariet.

| v0.14 | v0.15 | Hvorfor |
|---|---|---|
| Uge 4 forsegler altid Rygraden | **Hvert scenarie har sin egen krise** | Kampagnerne spilles forskelligt. Krisen rammer det, scenariet kræver. |
| Uge 5 frigiver altid positionsloggen fra uge 1 | **Hvert scenarie har sit eget arkiv** | Sortboks, Dørlog eller Arbejdslog giver forskellige spor. |

### Fra v0.13 til v0.14

v0.14 gør scenariet til besætningens eneste vej til sejr.

| v0.13 | v0.14 | Hvorfor |
|---|---|---|
| Besætningen vinder, hvis alle syntetikere er i kryo, eller scenariet er opfyldt | **Besætningen vinder kun ved scenariet** | Skibet skal hjem. Tribunalet er et redskab til at stoppe sabotagen, ikke et mål i sig selv. |
| Syntetikerne vinder, hvis én er aktiv, og scenariet ikke er opfyldt | **Syntetikerne vinder, hvis scenariet ikke er opfyldt** | Følger af ovenstående. En syntetiker i kryo kan stadig vinde. |
| Præmis: skibet er på vej hjem | **Præmis: skibet falder fra hinanden, og nogen hjælper det på vej** | Gør begge trusler tydelige fra start. |

### Fra v0.12 til v0.13

v0.13 fjerner jagten. Ingen kan fysisk holde en anden fast i Slack, så neutralisering er nu kun en fælles beslutning.

| v0.12 | v0.13 | Hvorfor |
|---|---|---|
| Tribunalet udsteder en kryo-ordre, som skal fuldbyrdes ved pågribelse | **Tribunalet sender direkte i kryo** | Fasthold var en regel uden en handling bag. Det svære er at blive enige, ikke at nå frem. |
| Ordren har feltet *Fasthold* | **Feltet er fjernet** | Én beslutning mindre om ugen. |
| ORACLE pejler målet for en kryo-ordre | **Fjernet** | Der er intet mål at finde. |
| Sikkerhedschef: *Pågrib* | **Sikkerhedschef: Vagt.** Vælg en anden spiller; vedkommende kan ikke dræbes denne uge | Pågrib krævede en kryo-ordre. Vagt giver et modspil til drab. |
| Tag *JAGT* | **Tag *SIKKERHED*** | Samme roller, nyt navn. |
| Final Protocol: tribunalet sender direkte i kryo | **Final Protocol: sidste tribunal, derefter afsløring** | Alle tribunaler er nu direkte. |

### Fra v0.11 til v0.12

v0.12 gør alle evner ens at bruge: Vælg et mål, og ORACLE svarer. Ingen spiller skal tælle point eller huske, hvad der er brugt.

| v0.11 | v0.12 | Hvorfor |
|---|---|---|
| Sikkerhedschef: *Autoritet (passiv)*, fasthold tæller 2 point | **Sikkerhedschef: Pågrib.** Vælg en spiller i din zone. Har vedkommende kryo-ordre, sendes de i kryo | En passiv pointværdi skulle huskes og regnes med. Nu er det en evne som de andre. |
| Pågribelse kræver 2 fasthold-point | **Pågribelse kræver mindst to andre med Fasthold: ja** | Samme regel uden point. |
| Broadcast: antal til stede og antal point | **Lykket pågribelse broadcastes uden tal.** Mislykket: antal til stede og antal, der holdt fast | "1 til stede, 2 point" beviste Sikkerhedschefen (afsnit 14, punkt 3). |
| Evner beskrevet som regler | **Hver evne har et mål og et eksempel på ORACLEs svar** | Spilleren skal kun vælge. |
| Spilleren holder selv styr på oplåsning, drab og spøgelsesstemme | **ORACLEs mandagsrapport fortæller, hvad du kan i den kommende uge** | Ingen regnskab hos spillerne. |

### Fra v0.10 til v0.11

v0.11 lukker huller i systemerne, som kunne afgøre spillet før jagten begyndte.

| v0.10 | v0.11 | Hvorfor |
|---|---|---|
| System på 0 = syntetikerne vinder med det samme | **0 = KRITISK.** Står det stadig på 0 efter næste afgørelse, vinder syntetikerne | Sabotage i en tom sektion i uge 2 gav 3 → 0 og en sejr, før nogen kunne reagere. |
| Sabotage + forfald i samme sektion (−3) | **Sabotage erstatter forfald** (−2) | Samme hul. Én sabotage kan ikke længere tømme et system fra start. |
| Forfald hver uge fra uge 2 | **Forfald i uge 2, 4 og 6** | Fire besætningsmedlemmer kan ikke dække seks sektioner hver uge, når hver flytning koster en uges arbejde. |
| Uge 4 forsegler sektionen med flest sabotager | **Uge 4 forsegler Rygraden** | At forsegle et svækket system dømte det til forfald. Nu presses bevægelsen i stedet. |
| Manglende ordre = Arbejde: nej | **Manglende ordre = Arbejde: ja** | Inaktive spillere skal ikke trække besætningen ned. |

### Fra v0.9 til v0.10

v0.10 gav syntetikerne et drab og giver døde spillere en grund til at blive.

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

USCSS *Cassandra* er en kommerciel slæber, 19 måneder fra Jorden med 20 millioner tons malm i lasten. Kessler-Tanaka Corporation har vækket besætningen før tid, og skibet falder fra hinanden: syv sektioner svigter, og dør én af dem, dør besætningen med den. Skibets AI, **ORACLE**, rapporterer uregelmæssigheder.

Men det er ikke kun slid. Nogen om bord hjælper det på vej.

Én eller to af besætningen er ikke mennesker. De er **syntetikere** med en særordre fra selskabet: *Lasten og ORACLE skal nå hjem. Besætningen er sekundær.*

---

## 2. Sejrsbetingelser

**Besætningen vinder**, så snart alle syntetikere er i kryo. En alien er ikke syntetiker og skal ikke fryses.

**Syntetikerne vinder**, hvis en sektions integritet rammer 0 (se afsnit 8), eller hvis mindst én syntetiker er aktiv efter tribunalet i uge 6. Integriteten afgøres før tribunalet, så et svigt vinder, selv om den sidste syntetiker dømmes samme weekend.

Integriteten er ikke besætningens mål, men dens ur og dens spor. En sektion uden mennesker falder, så besætningen må sprede sig — og en faldende sektion afslører, at ingen menneske stod der.

En fejlagtig neutralisering fjerner en uskyldig fra spillets aktive handlinger. Roller afsløres først ved spillets afslutning.

---

## 3. Skibet

Syv zoner, der alle er **sektioner** med integritet og en sektionsevne. **Rygraden** er skibets centrale korridor. Kampagnen bruger én af fire **skibsplaner**, valgt eller rullet på d4 ved opsætning og offentlig fra uge 1. Zonerne og deres navne er de samme i alle planer, så scenarier og kriser virker overalt.

| d4 | Skibsplan | Forbindelser | Karakter |
|---|---|---|---|
| 1 | **Ringen** | A–B–C–D–E–F–A i en ring. Rygraden når alle sektioner. | Intet er mere end to uger væk. Rygraden er hurtig, men eksponeret. |
| 2 | **Knudepunktet** | Hver sektion har kun dør til Rygraden. | Al trafik går gennem midten. Man ser hinanden dér, og en forseglet Rygrad lammer skibet. |
| 3 | **Langskibet** | To gange langs skibet. Bagbord: Broen – Hypersøvn – Livsstøtte – Motorrum. Styrbord: Medlab – Rygraden – Lastrum. Tværgange i zigzag: Broen–Medlab–Hypersøvn–Rygraden–Livsstøtte–Lastrum–Motorrum. | Op til tre uger fra ende til ende. Langt, men aldrig én eneste vej. |
| 4 | **Tvillingeskroget** | Broen, Medlab og Hypersøvn når hinanden. Livsstøtte, Lastrum og Motorrum når hinanden. Rygraden forbinder Hypersøvn og Livsstøtte. | To skrog. Rygraden er eneste vej imellem. |

Planerne ændrer, hvor man mødes, og hvor langt der er mellem målene. Data og kort ligger i `src/content/game.ts` (`layouts`).

---

## 4. Ugen

| Hvornår | Hvad |
|---|---|
| **Mandag 09:00** | Bevægelsen sker. ORACLE-rapport: offentlig broadcast med integritet + private resultater. |
| **Mandag–fredag** | Kommunikation. |
| **Fredag 18:00** | Deadline: ordre og tribunal-stemme. |
| **Weekend** | ORACLE afgør ugen. |

### Kommunikation

- **#shipwide — højttaleren.** Kun ORACLE skriver her. Spillere sender *HØJTTALER: …* privat til ORACLE, som læser beskeden op ordret og **uden afsender** kl. 12 og 20, i tilfældig rækkefølge. Højst 3 pr. spiller pr. dag. Underskrifter beviser intet.
- **Sektorkanal** — privat kanal for spillere i samme zone, med navn. Opdateres hver mandag.
- **Ingen DM'er mellem spillere.** Privat tale med navn kræver, at man står samme sted. Det er her, alibier opstår.

### Ordren

Hver aktiv spiller sender én ordre pr. uge med tre felter:

1. **Bevægelse** — *Bliv* eller *Ryk* til en tilstødende zone. Gælder fra mandag.
2. **Evne** — én aktivering: rolleevnen med mål, sektionens evne (*Rum → mål*), *Bekæmp*, *Sabotage* (syntetikere), *Drab → navn* (syntetikere) eller *Ingen*. ORACLE svarer i mandagsrapporten. Se afsnit 7.0.
3. **Tribunal** — en spiller eller *Ingen* (se afsnit 6).

Vedligehold er ikke et felt. Står et levende menneske i en sektion, vedligeholdes den automatisk.

### Afgørelsesrækkefølge

Alt afgøres ud fra, hvor spillerne **stod i ugen** (fra mandag til fredag). Bevægelsen sker til sidst.

0. Saboterede sektioner (sabotage fra sidste uge) og gyldige aktiveringer (`checkActivation`, `oneActivationEach`).
1. Drab, alien (Bekæmp, derefter Angreb) og skæbner.
2. Støj og forfalskning.
3. Informationsevner, inkl. Kamera, Arkiv og Bevægelsessensorer.
4. Integritet: vedligehold, reparation, ekstra reparation og Nødstrøm (samtidigt). Rammer en sektion 0, slutter spillet straks.
5. Tribunal — kryo. Tjek sejr.
6. Bevægelse (samtidig for alle), inkl. Transport, Skakt, alienens bevægelse og Uro. Gælder fra mandag.
7. Ugens sabotage registreres. Sektorkanaler opdateres.

---

## 5. Information

Information skal være nyttig, men sjældent fuldstændig.

| Niveau | Kilde | Sandt? |
|---|---|---|
| **Observation** | ORACLE-broadcast og din egen sektor-manifest | Altid sandt. |
| **Analyse** | Private evneresultater | Sandt, medmindre forfalsket. |
| **Vidneudsagn** | Alt, hvad spillere siger | Kan være sandt, falsk eller vildledende. |

**Sektor-manifest:** Hver mandag får du en liste over, hvem der står i din zone. Det er al den positionsinformation, du får gratis. Hvem der står andre steder, ved du kun fra vidneudsagn og evner.

**Broadcasts er altid sande.** Forfalskning rammer kun private resultater. Mandagens integritetsrapport viser kun værdierne — ikke ændringen, årsagen eller navne. Sabotage broadcastes aldrig; den opdages kun af den, der prøver at bruge den saboterede evne.

---

## 6. Neutralisering — The Tribunal

Neutralisering er en **fælles beslutning**. Ingen kan bevise noget; man kan kun overbevise hinanden.

### 6.1 Tribunalet

- Fra uge 2 til 6 stemmer alle aktive spillere hver fredag på én spiller eller *Ingen*. Stemmen står i ordren.
- Stemmerne er hemmelige. Spillerne må selv fortælle (eller lyve om), hvad de stemte.
- Får ét navn **simpelt flertal af de aktive spillere**, sendes vedkommende **direkte i kryo**. Brugte spøgelsesstemmer tæller med.
- Stemmelighed eller intet flertal: ingen dom.
- Tribunalet afgøres sidst i weekenden. Den dømte når at bruge sin evne og vedligeholde den uge.

Mandagens broadcast:

> *"TRIBUNAL: 4 af 6 stemmer mod Anna. Anna er overført til kryo."*

eller

> *"TRIBUNAL: 3 af 6 stemmer mod Anna. Intet flertal. Ingen dom."*

Antallet er offentligt, men aldrig hvem der stemte. En dom, der manglede én stemme, rejser spørgsmålet: Hvem stemte ikke på vedkommende, og hvorfor?

### 6.1b Final Protocol — sidste tribunal

Uge 6 har et almindeligt tribunal. Er mindst én syntetiker aktiv efter dommen, vinder syntetikerne. Derefter afsløres alle roller. Protokolvalget fra v0.27 er fjernet.

### 6.2 Den dømtes rolle

Den dømtes rolle afsløres ikke. Besætningen ved ikke, om de ramte rigtigt, før spillet slutter — eller før sabotagen stopper.

### 6.3 Ekko — kryo og døde

Døde spillere og spillere i kryo bliver **Ekko**. Et ekko:

- mister bevægelse, evne, vedligehold og sektorkanal.
- taler **kun gennem ORACLE** — via højttaleren, anonymt som alle andre. Ingen sektorkanal eller andre kanaler. Det gælder alle skæbner undtagen Afløseren, der er aktiv igen. Alt, et ekko siger, er vidneudsagn — ORACLE bekræfter aldrig en rolle.
- har **én spøgelsesstemme**, der kan bruges i ét tribunal i resten af spillet.

#### Skæbner

Når en spiller bliver ekko, ruller ORACLE hemmeligt en d6 for **skæbnen**: 1 Jorden, 2 Spøgelse, 3–4 Alien, 5 Afløser, 6 Ekko. Hver skæbne findes én gang pr. kampagne. Er den taget, eller er det Afløser til en frossen, bliver spilleren Ekko. Ingen omrul. Hvem der har hvilken, er hemmeligt — undtagen Afløseren, som broadcastes.

| d6 | Skæbne | Hvem | Effekt |
|---|---|---|---|
| 1 | **Jorden** | Døde og frosne | Hver fredag: *Rumlog → zone.* ORACLE sender ugens fulde log for zonen: hvem der stod der i ugen, hvem der gik ind og ud ved seneste mandags bevægelse (fra/til), og integritetens ændring. Aldrig hvem der saboterede, reparerede eller dræbte. Skakt går uden om dørene og logges ikke. |
| 2 | **Spøgelse** | Døde og frosne | Hver fredag: *Hjemsøg → spiller.* ORACLE fortæller målets zone denne uge. |
| 3–4 | **Alien** | Døde og frosne | Skifter side: du spiller nu for **syntetikerne** og vinder, hvis de vinder. Du lever i skakterne, og din zone er hemmelig. Vælg en startzone; derefter hver fredag: *ALIEN: Ryk → nabozone* (eller Bliv; kriser stopper dig ikke) og én af: **Angreb** — står præcis én spiller i din zone, dør besætning på d6 4–6; syntetikere ignoreres. **Uro → zone** — den, der rykker ind i zonen, farer vild og ender i en tilfældig nabozone; Skakt ind og ud virker ikke. To spillere med *Bekæmp* i din zone smider dig ud, og du bliver Ekko. |
| 5 | **Afløser** | Kun dræbte | Vågner i Hypersøvn som aktiv spiller uden evne: bevægelse, vedligehold, stemme. Kan dræbes og dømmes igen. |
| 6 | **Ekko** | Alle | Ingen ekstra handling. Også når skæbnen er taget eller ikke gælder. |

- Rumlog og Hjemsøg er informationsevner. De kan forfalskes og forstyrres.
- Alienen er den eneste skæbne, der hjælper syntetikerne. Den har to pladser på terningen, fordi de tre andre skæbner mest hjælper besætningen. Den skaber uro i skakterne og falske alibier: *"Jeg skulle til Medlab, men endte i Lastrum"* er sandt — eller en løgn.
- Alienens angreb ignorerer syntetikere. En overlevende er derfor mistænkelig, men slaget fejler også på 1–3.
- Et frosset syntetikerekko ruller også, kan blive Jorden eller Spøgelse og lyve om svaret. Derfor beviser en skæbne ingenting.
- Afløseren er bevist besætning (kun dræbte kan få den) — men uden evne. Det er prisen for at komme tilbage.
- Afløser kun for dræbte: en syntetiker i kryo må ikke kunne vende tilbage.

### 6.4 Drab

Drab er en fælles syntetikerhandling, ikke en rolleevne. Hver syntetiker beholder sin ene evne.

- Syntetikerne kan dræbe **én gang om ugen** for hele holdet, fra **uge 3**. Sender to syntetikere et drab, gælder kun det første, ORACLE modtog.
- Drabet skrives i ordren: *Drab → [Navn]*. Det er syntetikerens aktivering den uge.
- Drabet lykkes kun, hvis drabsmand og mål er de **eneste aktive spillere i zonen** i ugen. Målet skal være besætning og må ikke være under Sikkerhedschefens **vagt** eller have brugt **Personlig beskyttelse** (Hypersøvn).
- Mislykkes det (vidner, forkert zone, vagt, beskyttelse), sker intet. Syntetikeren får kun: *"Drab mislykket."*
- Drab afgøres først i weekenden. Offeret når ikke at bruge sin evne og vedligeholder ikke.
- Offeret får privat: *"Du er død."* — ikke hvem. Offeret ved, hvem det delte sektorkanal med i ugen. Men som ekko er alt, det siger, vidneudsagn.
- Mandagens broadcast: *"Sara er død."* Aldrig hvor, hvem eller rollen.

**Drabet er en nyhed, ikke et spor.** Hvor Sara stod, ved kun dem, hun talte med — og de kan lyve. Pejling, Biometri og Adgangslog kan pege på drabsmanden, men kun som påstande fra den, der har rollen.

Drab gør det farligt at stå alene. Men en sektion uden mennesker falder. Det er dilemmaet.

---

## 7. Roller — én evne pr. spiller

### 7.0 Sådan virker en evne

Alle evner virker på samme måde:

1. **Vælg.** I fredagens ordre skriver du evnens mål: *EVNE: Pejling → Peter*. Nogle evner har intet mål (*EVNE: Reparér*).
2. **ORACLE afgør.** Spilleren regner intet ud og holder ikke regnskab.
3. **Læs svaret.** Mandag står resultatet i din private rapport. Rapporten fortæller også, om din evne er aktiv i den kommende uge, og — for syntetikere — om drabet er brugt.

Ingen evne har ladninger, point eller tilstande, spilleren skal huske. Er en evne låst eller ugyldig, svarer ORACLE *"Ingen effekt."*

### 7.1 Grundreglen: unikke roller

- **Hver faktisk rolle findes højst én gang i en kampagne.** ORACLE trækker roller uden tilbagelægning.
- **Hele kataloget er offentligt.** Hvilke roller der er i spil, er hemmeligt. Ikke alle roller i kataloget er om bord.
- **Undtagelse:** Ingeniør er altid i spil (se 7.4). Det er den eneste rolle, alle ved er aktiv.
- **Påstande er frie.** Alle må påstå enhver rolle — også en rolle, en anden spiller har.
- **Dobbeltpåstand:** Påstår to spillere samme rolle, lyver mindst én af dem. Det kan være en syntetiker, men også besætning, der skjuler sig. ORACLE bekræfter eller afkræfter aldrig en påstand.
- **Syntetikere kan ikke bruge evnen** fra en besætningsrolle, de udgiver sig for. De får intet evneresultat og må opfinde det.
- **Syntetikere har deres egne roller** (se 7.3). De trækkes også uden tilbagelægning. Ingen to syntetikere har samme rolle.

### 7.2 Besætningen — rollekataloget

| Rolle | Id | Tag | Evne | Du vælger | ORACLE svarer fx |
|---|---|---|---|---|---|
| **Sikkerhedschef** | `security_chief` | SIKKERHED | *Vagt:* Spilleren kan ikke dræbes denne uge. Ikke dig selv. | En spiller | *"Du vogter Anna denne uge."* |
| **Navigatør** | `navigator` | SIKKERHED | *Pejling:* Spillerens zone denne uge. | En spiller | *"Peter står i Lastrum."* |
| **Sensortekniker** | `sensor_tech` | OBSERVATION | *Scan:* Antal i zonen denne uge. Ingen navne. | En zone | *"Medlab: 3 personer."* |
| **Kvartermester** *(ny)* | `quartermaster` | OBSERVATION | *Adgangslog:* Antal, der gik ind i zonen ved seneste mandags bevægelse. Ingen navne. | En zone | *"Broen: 2 gik ind."* |
| **Radaroperatør** *(ny)* | `radar_operator` | OBSERVATION | *Afstand:* Samme zone, nabozone eller langt væk denne uge. | En spiller | *"Anna: nabozone."* |
| **Læge** | `medic` | ANALYSE | *Biometri:* Hvor en spiller i din zone stod ugen før. | En spiller | *"Peter stod i Motorrum."* |
| **Arkivar** | `archivist` | ANALYSE | *Krydsreference:* Om to spillere nogensinde har stået i samme zone ved en rapport. | To spillere | *"Anna og Peter: ja."* |
| **Psykolog** *(ny)* | `psychologist` | ANALYSE | *Afhøring:* Hvor mange andre der stod med en spiller i din zone ugen før. | En spiller | *"Sara stod med 2 andre."* |
| **Ingeniør** *(altid i spil)* | `engineer` | URET | *Reparér:* Din sektion +2 integritet. Svaret siger også, om en syntetiker saboterede sektionen denne uge. | Intet | *"Livsstøtte 1 → 3. Saboteret: ja."* |
| **Kommunikationsofficer** | `comms_officer` | SOCIAL | *Åben linje:* En privat kanal mellem jer i en uge, uanset placering. | En spiller | *"Kanal åben: #linje-sara."* |
| **Revisor** *(ny)* | `auditor` | SOCIAL | *Stemmerevision:* Hvem spilleren stemte på ved denne uges tribunal. | En spiller | *"Peter stemte på Anna."* |

**Hvorfor de fire nye roller:**

- **Kvartermester** tæller *bevægelse*, ikke tilstedeværelse. Den kan afsløre et alibi som "jeg blev i Lastrum hele ugen" uden at nævne navne.
- **Radaroperatør** er en grov Pejling: Den siger kun, om nogen er tæt på. Nyttig til at tjekke, om en spiller står, hvor vedkommende påstår.
- **Psykolog** tjekker påstande som "jeg var alene" uden at afsløre, hvor eller med hvem.
- **Revisor** gør tribunalet til information. Syntetikere, der koordinerer stemmer, risikerer at blive opdaget — men kun af én spiller, der selv kan lyve om resultatet.

Ingen af de nye evner afslører en spillers hold, ingen kræver ressourcer, og alle resultater er private og kan forfalskes.

**Nye evner — detaljer:**

- *Adgangslog* tæller spillere, der stod i en anden zone ved sidste rapport og nu står i den valgte zone. Skakt tæller som at gå ind.
- *Afstand*: 0 = samme zone, 1 = nabozone på skibsplanen, 2 = ellers.
- *Afhøring* bruger målets zone ved sidste rapport. Uge 1 er der ingen "ugen før": ORACLE svarer *"Ingen data."*
- *Stemmerevision*: Uge 1 er der intet tribunal: *"Ingen afstemning."* Spøgelsesstemmer kan ikke revideres, fordi spillere i kryo ikke kan vælges.

### 7.3 Syntetikerne

Syntetikere kender hinanden og hinandens roller, men har ingen privat kanal, medmindre de står samme sted.

Hver syntetiker har **én rolle med én evne**. Kataloget er offentligt.

| Rolle | Id | Evne | Fra uge | Effekt | Du vælger | ORACLE svarer fx |
|---|---|---|---|---|---|---|
| **Særordre** *(altid i spil)* | `special_order` | Ingen | — | Ingen rolleevne. Kun den basale sabotage og drabet, som alle syntetikere har. | — | — |
| **Forfalsker** | `forger` | Forfalskning | 2 | Spillerens private resultat denne uge er falsk, men troværdigt. Du får at vide, hvad der blev sendt. | En spiller | *"Sendt til Sara: 'Medlab: 1 person.'"* |
| **Skaktløber** | `crawler` | Skakt | 1 | Ryk til en vilkårlig zone gennem vedligeholdelsesskakterne. | En zone | *"Du står i Lastrum."* |
| **Støjsender** *(ny)* | `jammer` | Støj | 2 | Alle informationsevner brugt i eller på zonen giver *"Signal forstyrret."* | En zone | *"Støj aktiv i Broen."* |

- **Særordre er altid i spil.** Ved én syntetiker er det den eneste syntetikerrolle. Alle syntetikere har den basale sabotage og drabet ud over deres rolle.
- **Ved to syntetikere** trækkes den anden rolle tilfældigt blandt Forfalsker, Skaktløber og Støjsender.
- Besætningen ved, at Særordre er om bord. De ved ikke, hvilken støtterolle der er med.

**Detaljer:**

- *Støj* rammer evner, hvis mål er zonen, en spiller i zonen i ugen, eller som bruges af en spiller i zonen. Ingeniørens reparation virker stadig, men ja/nej-svaret bliver *"Signal forstyrret."* Støj og forfalskning på samme resultat: Støj vinder.
- *Skakt* erstatter bevægelsen i ordren og sker mandag som al anden bevægelse. Skaktløberen står i manifestet for den zone, den ender i.

### 7.4 Rollepulje og bluff-forslag

**Sammensætning:**

1. **Ingeniør er altid i spil.** Integriteten er afstemt efter, at sektioner kan løftes med +2. Uden Ingeniør er det kun vedligehold og ekstra reparation, og det er ikke testet.
2. Resten af besætningsrollerne trækkes tilfældigt fra kataloget **uden tilbagelægning**.
3. **Højst 2 aktive roller med samme tag.** Det forhindrer, at fx Sensortekniker, Kvartermester og Radaroperatør tilsammen kortlægger hele skibet hver uge.

**Bluff-forslag:**

- Hver syntetiker får **2 forskellige bluff-forslag**.
- Forslag vælges **kun fra de ubrugte roller**. En syntetiker, der påstår et forslag, kan derfor aldrig blive modsagt af den ægte rolleindehaver.
- Forslag **må overlappe** mellem syntetikere. De kender hinanden og kan koordinere. ORACLE giver adskilte forslag, når der er nok ubrugte roller — og det er der altid ved 5–8 spillere med det nuværende katalog.
- Forslag er forslag til påstande, ikke roller. En syntetiker må påstå hvad som helst, også en rolle, der er i spil. Så risikerer den en dobbeltpåstand.

## 8. Integritet, sektionsevner og scenarie

### 8.1 Integritet

Alle syv sektioner har en integritet fra **0 til 5**. Scenariet bestemmer startværdierne (`start` i `src/content/game.ts`); sektioner, det ikke nævner, starter på **3**.

Hver fredag fra **uge 2**, efter informationsevnerne, ændres hver sektion samtidigt ud fra, hvem der stod der i ugen:

| Kilde | Effekt |
|---|---|
| **Vedligehold** | Mindst ét levende menneske i sektionen: +1. Ingen: −1. Flere mennesker giver intet ekstra. |
| **Syntetikere, alien, døde, frosne** | Neutrale. Tæller hverken for eller imod. |
| **Reparation** (Ingeniør) | +2 i Ingeniørens sektion. |
| **Ekstra reparation** (Motorrum) | +1 i den valgte sektion. Flere giver mere. |
| **Nødstrøm** (Livsstøtte) | Den valgte sektion mister intet netto. Giver intet ekstra. |

Alt lægges sammen samtidigt. Nødstrøm vender et negativt resultat til 0. Integriteten holdes mellem 0 og 5. I uge 1 sker ingen automatisk ændring, men reparation virker. **Rammer en sektion 0, vinder syntetikerne straks** — fredag, ikke mandag. Logik: `resolveSystems` og `humansBySection` i `src/content/systems.ts`.

En spiller vedligeholder kun den sektion, vedkommende stod i hele ugen. Ny zone gælder fra mandag.

Hver mandag broadcaster ORACLE kun værdierne (`integrityReport`):

```
ORACLE // INTEGRITET // UGE 4
Hypersøvn  ██░░░ 2
Medlab     ████░ 4
Livsstøtte ██░░░ 2
Lastrum    ████░ 4
Broen      █████ 5
Motorrum   █░░░░ 1
Rygraden   ███░░ 3
```

**Tallene er sporet.** En sektion, der faldt, havde intet levende menneske — eller en krise. Påstår to at have stået der, lyver mindst én — eller begge er syntetikere. En sektion, der steg, havde et menneske, en reparation eller begge. Ingen ændringer vises, så spillerne må selv holde regnskab over ugerne.

Syntetikere kan ikke sænke integriteten direkte. De vinder systemsvigt ved at trække mennesker væk fra sektioner — via drab, tribunalet og overtalelse.

### 8.1b Sektionsevner og sabotage

Hver sektion har én evne. Den, der står i sektionen, kan bruge den som ugens aktivering (*EVNE: Rum → mål*) i stedet for rolleevnen. Alle i sektionen kan bruge den samme uge, også syntetikere. Data og logik: `src/content/rooms.ts`.

| Sektion | Evne | Mål | Effekt |
|---|---|---|---|
| **Broen** | **Kamera** | En anden sektion | Navnene på dem, der står der denne uge. Ikke roller eller handlinger. |
| **Rygraden** | **Transport** | Intet | Næste bevægelse må gå op til to zoner ad gangene. |
| **Hypersøvn** | **Personlig beskyttelse** | Intet | Du kan ikke dræbes denne uge, heller ikke af alienen. |
| **Lastrum** | **Arkiv** | Sektion og afsluttet uge | Antal, der stod i sektionen den uge. Ingen navne. |
| **Motorrum** | **Ekstra reparation** | En sektion | +1 integritet ved fredagens beregning. |
| **Livsstøtte** | **Nødstrøm** | En sektion | Intet nettotab ved fredagens beregning. |
| **Medlab** | **Bevægelsessensorer** | En sektion | Antal, der ankom og forlod ved seneste mandags bevægelse. Ingen navne. Skakt registreres ikke. |

- Kamera, Arkiv og Bevægelsessensorer er informationsevner: de kan forstyrres og forfalskes.
- Kamera viser nuet, Arkiv en tidligere uge, Bevægelsessensorer skiftet mellem ugerne.
- Prisen er rolleevnen. Bruger du sektionens evne, får du intet fra din rolle den uge.

**Sabotage.** Alle syntetikere kan fra uge 2 bruge ugens aktivering på *EVNE: Sabotage* i den sektion, de står i. Næste uge virker sektionens evne ikke; ugen efter virker den igen af sig selv. Sabotage rammer ikke integriteten. Der er ingen broadcast. Den, der prøver at bruge evnen, får privat *"Systemet er saboteret."*, og aktiveringen er brugt. Ingeniøren i sektionen får *"Saboteret: ja"* samme weekend, som sabotagen sendes.

### 8.2 Scenarie

Hver kampagne har **ét scenarie**: Nødsignal (`distress`), Karantæne (`quarantine`) eller Hjemrejse (`homeward`). ORACLE vælger det ved opsætning og offentliggør det i uge 1. Scenariet er historien om rejsen bestemmer arkivet i uge 5 og startintegriteten. Det afgør ikke, hvem der vinder.

| Scenarie | Starter på 2 (testværdier) |
|---|---|
| Nødsignal | Broen, Motorrum |
| Karantæne | Medlab, Hypersøvn |
| Hjemrejse | Lastrum, Rygraden |

### 8.3 Krise og arkiv

Hvert scenarie har sit eget **arkiv**, som frigives i uge 5: Sortboks (Nødsignal), Dørlog (Karantæne) eller Arbejdslog (Hjemrejse).

**Krisen** i uge 4 rulles på en d20-tabel mandag i uge 3 og annonceres straks. Den kan lukke zoner, gange eller kanaler, lægge støj på ORACLE, skade eller reparere en sektion, ændre tribunalet eller frigive information. Kriser og arkiver er broadcasts og altid sande.

Se *Scenariebogen* (`docs/scenarios.md`) for scenarier, arkiver, krisetabellen og sektionstabellen. `src/content/crises.ts` indeholder tabellen og en rullefunktion.

---

## 9. Balance

| Spillere | Besætning | Syntetikere | Roller i spil | Ubrugte roller | Bluff-forslag |
|---|---|---|---|---|---|
| 6 | 5 | 1 | Ingeniør + 4 | 6 | 1 × 2 = 2 |
| 7 | 5 | 2 | Ingeniør + 4 | 6 | 2 × 2 = 4 |
| 8 | 6 | 2 | Ingeniør + 5 | 5 | 2 × 2 = 4 |

Integriteten starter efter scenariet ved alle spillerantal. Tabellen viser kun antal — hvilke roller der er i spil, offentliggøres aldrig. Syntetikerroller: Særordre ved 1 syntetiker; Særordre + 1 af 3 ved 2 syntetikere.

### 9.1 Bevist (testet i `tests/roleSetup.test.ts`)

- Ved 6–8 spillere er holdfordelingen korrekt, og ingen besætningsrolle optræder to gange.
- Alle sammensætninger, der overholder tag-grænsen, er mulige for 6–8 spillere (udtømmende gennemgang).
- Der er altid mindst 2 × antal syntetikere ubrugte roller, så bluff-forslag kan være adskilte.
- Bluff-forslag peger aldrig på en rolle i spil.
- Ugyldige opsætninger giver forståelige fejl.
- Særordre er altid i spil, og ingen syntetikerrolle optræder to gange.
- Integriteten (+1 ved mindst ét levende menneske, ingen bonus for flere, syntetikere neutrale, døde og frosne tæller ikke, grænser 0–5, svigt ved 0, bevægelse først i næste uges beregning, reparation og Nødstrøm) er testet i `tests/systems.test.ts`.
- Sektionsevner og sabotage (kun fra egen sektion, én aktivering pr. spiller, sabotage virker kun ugen efter, opdages kun ved forsøg, kun privat svar, informationsevner afslører kun navne eller antal) er testet i `tests/rooms.test.ts`.
- Drabsbetingelserne (uge 3+, alene, kun besætning, vagt, Personlig beskyttelse, højst ét drab om ugen for holdet) er testet i `tests/kills.test.ts`.

### 9.2 Antagelser, der ikke er testet

- Spillerfordeling og scenariernes startværdier er stadig testværdier. Første test: 6 spillere, 1 syntetiker.
- At højst 2 pr. tag er nok til at undgå for stærke informationskombinationer.
- At 11 roller giver nok rum til bluffs uden at blive uoverskueligt.
- At Revisor ikke gør stemmekoordinering umulig for syntetikerne.
- At syv sektioner ikke er for mange at dække, når drab og kryo tynder ud i besætningen. Fem mennesker kan dække fem sektioner; to falder hver uge.
- At systemsvigt ved 0 ikke afgør spillet for tidligt. En sektion på 2 uden mennesker rammer 0 efter to uger.
- At besætningen ikke bare kan stå alene i hver sin sektion. Det løfter flest sektioner, men gør alle sårbare for drab.
- At ét drab om ugen ikke knækker besætningen ved 6 spillere (5 → 2 besætning efter tre drab).
- At Kamera (navne) ikke er for stærkt i forhold til Scan og Pejling.
- At Særordre uden rolleevne giver én syntetiker nok at arbejde med ved 6 spillere. Den har kun sabotage, drab og løgne.
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
| 1 | **Awakening** | Spillerne vågner i tilfældige zoner. Informationsevner, sektionsevner og Skakt er aktive. Ingen sabotage, ingen automatisk integritet, intet tribunal. |
| 2 | **First Anomaly** | Integriteten ændrer sig hver fredag. Sabotage, Forfalskning og Støj låses op. Første tribunal fredag. |
| 3 | **Broken Trust** | Syntetikerne kan dræbe. Sikkerhedschefens vagt får betydning. |
| 4 | **Containment Failure** | Krisen, rullet på d20 i uge 3 (se 8.3). |
| 5 | **Last Transmission** | Scenariets arkiv (se 8.3). |
| 6 | **Final Protocol** | Sidste tribunal (se 6.1b). Derefter afsløres alle roller. |

Hver uge tilføjer data eller pres, ikke nye regler.

---

## 12. Eksempel — uge 4, Containment Failure

> **ORACLE // INTEGRITET // UGE 4**
> *Livsstøtte 1/5. (Uge 3: 2/5.)*
> *Tribunal: 3 af 6 stemmer mod Anna. Intet flertal. Ingen dom.*

Broadcasten viser kun 1. At Livsstøtte stod på 2 sidste uge, ved spillerne kun, fordi de selv har gemt rapporten.

- **Anna:** "Jeg var i Livsstøtte med Peter hele ugen."
- **Peter:** "Jeg er Sikkerhedschef. Anna taler sandt — vi stod der begge."
- **Sara:** "Jeg brugte Kamera på Broen. Livsstøtte: Anna, Peter."

Hvad ved besætningen?

- Broadcasten er sand: Livsstøtte faldt. Det sker kun, når intet levende menneske stod der — eller ved en krise.
- Er Saras kamera ægte, stod der præcis Anna og Peter. Så er de **begge** syntetikere — ingen af dem vedligeholdt.
- Eller Sara lyver, eller hendes resultat var forfalsket.
- Eller Anna og Peter lyver sammen om, hvor de stod.

Besætningen skal vælge: stem på Anna, Peter — eller Sara. Vælger de forkert, mister de et menneske, der vedligeholder — og syntetikerne får en uge og et drab mere.

---

## 13. Åbne testspørgsmål

1. Er et tribunal hver uge fra uge 2 for stærkt for besætningen ved 6 spillere?
2. Har Skaktløber nok at bruge Skakt til?
3. Bliver sabotage syntetikernes eneste strategi?
4. Er Vagt for stærk eller for svag mod ét drab om ugen?
5. Er spøgelsesstemmen sjov, eller bare en formalitet? Og er skæbnerne nok til at holde døde spillere engagerede?
6. Gør Afløseren drab for svage? Den vender kun tilbage uden evne, men tribunalet får en bevist besætning mere.
7. Står besætningen alene i hver sin sektion for at holde flest sektioner oppe — og gør det drab for lette?
8. Er 11 roller for mange at holde styr på for nye spillere?
9. Er Revisor for stærk mod syntetikere, der koordinerer stemmer?
10. Gør det, at Ingeniør altid er i spil, rollen for let at bekræfte via reparationer?
11. Er én syntetiker med kun Særordre (ingen rolleevne) for svag ved 6 spillere?
12. Afslører *"Signal forstyrret"* for meget, nemlig at Støjsender er i spil?
13. Er ét drab om ugen for meget ved 6 spillere?
14. Bliver spillere så bange for at stå alene, at sektioner uden mennesker falder?
15. Afslører et ekkos frie ord for meget? Et dødt offer *er* besætning — og ved nu, hvem det delte sektorkanal med, fordi drab bruger ugens zone.
16. Er Kamera (navne) for stærkt i forhold til Scan og Pejling?
17. Overlapper Bevægelsessensorer for meget med Adgangslog?
18. Gør det, at syntetikere er neutrale, en faldende sektion for sigende? To, der påstår at have stået i en faldet sektion, er begge mistænkte.
19. Er Brand og Overbelastning (tilpasset fra v0.28) stadig rigtige kriser? Kaskadefejl kan ramme Rygraden, men sektionstabellen (d6) kan ikke.
20. Holder scenariernes startværdier (to sektioner på 2)?

---

## 14. Kendte uoverensstemmelser

Fundet under arbejdet med v0.7. Punkt 1–2 er rettet, fordi unikke roller kræver det. Resten er **dokumenteret, ikke ændret**.

1. **Rettet:** v0.6's balancetabel nævnte præcis, hvilke roller der var i spil, men samtidig var "hvilke roller der er i spil" hemmeligt.
2. **Rettet:** Ved 7 og 8 spillere gav v0.6 kun 2 og 1 ubrugte roller, men 2 syntetikere skulle have 2 bluffs hver.
3. **Rettet i v0.12–v0.13:** Fasthold-point kunne bevise Sikkerhedschefen. Pågribelse og fasthold er nu fjernet helt.
4. **Åben linje beviser Kommunikationsofficeren over for målet.** Målet ser kanalen blive oprettet. Det er et bevis over for én spiller, ikke offentligt.
5. **Reparation er synlig.** En stigning på 2 eller mere i integriteten peger på, at Ingeniøren stod i sektionen. Det kan afgøre en dobbeltpåstand om Ingeniør.
6. **Afsnit 10 i v0.6 overvurderede forfalskning.** Teksten sagde, at syntetikere kan "have fået et resultat forfalsket mod sig". Syntetikere har ingen informationsevne og får ingen resultater. Et ægte evneresultat beviser altså, at afsenderen er besætning. Det eneste værn er forbuddet mod screenshots og videresendelse.
7. **Et drab bekræfter offerets hold.** Kun besætning kan dræbes, så et dødt ekko er bevist besætning. Dets ord vejer derfor tungere end andres. Det er accepteret som en del af spillet: offeret ved stadig ikke, hvem der dræbte.
8. **Ændret i v0.13: mange tribunaler.** Før gav kryo-ordre og pågribelse 3–4 forsøg. Nu er der fem direkte tribunaler (uge 2–6). Det kan være for stærkt for besætningen ved én syntetiker. Skal testes.
