# Nota Mesatare - Aplikacioni për llogaritjen e notave mesatare përfundimtare në bazë të orëve javore të lëndëve

Ky aplikacion është një mjet i thjeshtë dhe i dobishëm për të llogaritur notat mesatare në bazë të orëve javore të lëndëve. Aplikacioni është zhvilluar me përdorimin e ReactJS dhe Tailwind CSS për një përvojë të përdoruesit tërheqëse dhe intuitive.

## Si të përdorni aplikacionin (Non-Tech user)

1. Kliko këtu `http://localhost:3000` për të përdorur aplikacionin.

## Përdorimi i aplikacionit

1. Zgjidhni një klasë nga dropdown menuja për të shfaqur kurrikulën për atë klasë.
2. Në tabelën e dhënë, futni notat për secilën lëndë në kolonën e duhur.
3. Aplikacioni automatikisht do të llogarisë totalin e notave për secilën lëndë duke marrë parasysh notën, orët javore dhe totalin e orëve javore.
4. Mesatarja e përgjithshme do të shfaqet në fund të tabelës, duke përdorur formulën: (nota * orët javore * 35) / totali i orëve javore.

Ky aplikacion është i dobishëm për nxënësit për të pasur një parashikim të mesatarës së pritur në bazë të të dhënave të futura. Mund të përdoret në shkollë, institut dhe çdo vend tjetër që ka nevojë për llogaritjen e notave mesatare.

## Si të përdorni aplikacionin (DEV - Edition)

1. Shkarkoni ose klononi kodin burimor të aplikacionit.
2. Instaloni të gjitha paketat e nevojshme me komandën `yarn`.
3. Nisni aplikacionin me komandën `yarn dev`.
4. Hapni shfletuesin tuaj dhe shkoni në adresën `http://localhost:3000` për të parë aplikacionin.


## Përshkrimi i strukturës së kodit

- `src/components/Card.js`: Kjo është komponenta kryesore që përfshin tabelën e notave dhe logjikën për llogaritjen e mesatares.
- `src/data/curriculumData.js`: Kjo është një fajll i dhënash i cili përmban informacionin për lëndët dhe orët javore për secilën klasë.
- `src/App.js` dhe `src/index.js`: Këto janë fajllat themelore të aplikacionit që lidhin komponentat dhe nisin aplikacionin.

Shpresoj që ky aplikacion të jetë i dobishëm dhe të mësuesit në mbarë Shqipërinë në nxjerrjen e notave mesatare për nxënësit e tyre. Nëse keni ndonjë pyetje, mos hezitoni të më kontaktoni në `klevissxh@gmail.com`.

Faleminderit!