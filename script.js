const cisla = [7, 1, 4, 5, 2, 9, 3, 6, 8];
const zvirata = [
  'pes',
  'kočka',
  'králík',
  'had',
  'andulka',
  'morče',
  'krkavec',
];
const napoje = [
  { nazev: 'Pivo', cena: 12, skladem: true },
  { nazev: 'Rum', cena: 120, skladem: false },
  { nazev: 'Víno', cena: 85, skladem: true },
  { nazev: 'Whisky', cena: 450, skladem: true },
  { nazev: 'Vodka', cena: 280, skladem: false },
  { nazev: 'Becherovka', cena: 210, skladem: true },
  { nazev: 'Kofola', cena: 40, skladem: true },
  { nazev: 'Voda', cena: 15, skladem: false },
];

// 1. Nové pole: čísla z pole cisla vynásobená dvěma
const cislaNasobenaDva = cisla.map(cislo => cislo * 2);
console.log('Čísla vynásobená dvěma:', cislaNasobenaDva);

// 2. Nové pole: délky všech řetězců z pole zvirata
const delkyZvirat = zvirata.map(zvire => zvire.length);
console.log('Délky názvů zvířat:', delkyZvirat);

// 3. Nové pole: pouze názvy všech nápojů z pole napoje
const nazvyNapoju = napoje.map(napoj => napoj.nazev);
console.log('Názvy nápojů:', nazvyNapoju);

// 4. Nové pole: názvy nápojů nebo řetězec "Není skladem"
const dostupnostNapoju = napoje.map(napoj => napoj.skladem ? napoj.nazev : 'Není skladem');
console.log('Dostupnost nápojů:', dostupnostNapoju);