// Everything that changes from one visit to the next lives here.
// A new `edition` makes the envelope sealed again for her.
export const CARD = {
  edition: "2026-10-24",
  recipient: "Mirela",
  // Landing time at SJP, in Rio Preto's own offset (Brazil has no DST).
  arrival: "2026-10-24T15:35:00-03:00",
  arrivalTimeZone: "America/Sao_Paulo",
  destination: "Rio Preto",
  kicker: "feliz 2 meses",
  tagline: "contando os dias",
  letter: {
    greeting: "Meu amor,",
    paragraphs: [
      "Faz dois meses que você fisgou meu coração, e esse peixe aqui não quer ser solto nunca mais.",
      "A distância é grande, mas o que eu sinto por você é muito maior. Cada dia que passa é um dia a menos até eu poder te abraçar.",
      "Te amo muito.",
    ],
    signoff: "Com todo o meu amor,",
    signature: "Kevin",
  },
} as const;

/** "sábado, 24 de outubro · 15h35" in her time zone. */
export function arrivalLabel(): string {
  const at = new Date(CARD.arrival);
  const day = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: CARD.arrivalTimeZone,
  }).format(at);
  const [h, m] = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: CARD.arrivalTimeZone,
  })
    .format(at)
    .split(":");
  return `${day} · ${h}h${m}`;
}
