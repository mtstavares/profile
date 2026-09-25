import { experiences } from './experience'
import type { Experience, Locale } from '../types/content'

// Shared employment records keep Home, full career and PDF selections consistent.
export const policeExperiences: readonly Experience[] = experiences.filter(
  (item) =>
    ['cybersecurity', 'network-administration', 'emergency-response'].includes(
      item.id,
    ),
)

export const careerHistory: readonly Experience[] = [
  ...experiences.map((item) => ({ ...item, secondary: false })),
  {
    id: 'hotel-firenze',
    organization: { 'pt-BR': 'Hotel Firenze', 'en-US': 'Hotel Firenze' },
    period: { start: '2018', end: '2019' },
    role: {
      'pt-BR': 'Garçom, barman e maître',
      'en-US': 'Waiter, Bartender and Maître d’',
    },
    description: {
      'pt-BR':
        'Atuação no atendimento e na operação de bar e restaurante, ampliando a experiência como garçom para as funções de barman e maître. Responsável pela liderança de uma equipe de 15 pessoas.',
      'en-US':
        'Worked in bar and restaurant service and operations, building on experience as a waiter to take on bartender and maître d’ responsibilities. Led a team of 15 people.',
    },
    highlights: { 'pt-BR': [], 'en-US': [] },
    skillIds: [],
  },
  {
    id: 'trattoria-due-fratelli',
    organization: {
      'pt-BR': 'Trattoria Due Fratelli',
      'en-US': 'Trattoria Due Fratelli',
    },
    period: { start: '2013', end: '2018' },
    role: { 'pt-BR': 'Garçom', 'en-US': 'Waiter' },
    description: {
      'pt-BR':
        'Primeira experiência profissional, com atuação no atendimento ao público. Desenvolvimento de comunicação, atenção às necessidades dos clientes e capacidade de trabalhar sob pressão.',
      'en-US':
        'First professional role, focused on customer service. Developed communication skills, attention to customer needs and the ability to work under pressure.',
    },
    highlights: { 'pt-BR': [], 'en-US': [] },
    skillIds: [],
  },
]

export const careerLabels: Record<
  Locale,
  { title: string; intro: string; timeline: string; more: string }
> = {
  'pt-BR': {
    title: 'Trajetória profissional',
    intro:
      'Do atendimento ao público à cibersegurança: experiência em hospitalidade, logística e, desde 2020, na Polícia Militar do Estado de São Paulo.',
    timeline: 'Experiência ao longo dos anos',
    more: 'Ver mais',
  },
  'en-US': {
    title: 'Professional Journey',
    intro:
      'From customer service to cybersecurity: experience in hospitality, logistics and, since 2020, the São Paulo State Military Police.',
    timeline: 'Experience through the years',
    more: 'View more',
  },
}
