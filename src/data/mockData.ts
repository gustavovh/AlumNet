export interface Message {
  id: string;
  title: string;
  description: string;
  content: string;
  type: 'urgent' | 'academic' | 'event' | 'all';
  date: string;
  author: string;
  read: boolean;
  time: string;
}

export interface Event {
  id: string;
  label: string;
  time: string;
  type: 'examen' | 'reunion' | 'evento';
  room: string;
  date: string; // YYYY-MM-DD
}

export const messages: Message[] = [
  {
    id: '1',
    title: 'Examen de Matemáticas - Semana 12',
    description: 'Examen parcial el viernes 9 de mayo a las 10:00 AM en Aula 204',
    content: 'Se les comunica que el examen parcial de la semana 12 se llevará a cabo el próximo viernes. Temas a evaluar: Cálculo Integral y Series Infinitas.\n\nActividades preparatorias:\n- Revisar guía de ejercicios 4\n- Traer calculadora científica\n- Puntualidad obligatoria',
    type: 'academic',
    date: '2026-05-09',
    time: '14:22',
    author: 'Prof. García - Matemáticas',
    read: false,
  },
  {
    id: '2',
    title: 'Día del Deporte 2025',
    description: 'Sábado 10 de mayo - Actividades deportivas desde las 8:00 AM',
    content: 'Estamos emocionados de invitarlos a nuestra jornada anual de deportes. Tendremos torneos de fútbol, básquetbol y vóley.\n\nCronograma:\n- 08:00 Apertura\n- 09:30 Torneo Fútbol\n- 12:00 Almuerzo\n- 14:00 Premiación',
    type: 'event',
    date: '2026-05-10',
    time: '14:22',
    author: 'Coordinación Deportiva',
    read: true,
  },
  {
    id: '3',
    title: 'Cambio de horario temporal',
    description: 'Clases vespertinas adelantadas 30 min la semana del 12-16 mayo',
    content: 'Debido a trabajos de mantenimiento en el ala norte, las clases del turno tarde se adelantarán 30 minutos.\n\nPor favor tomen las precauciones necesarias para llegar a tiempo.',
    type: 'urgent',
    date: '2026-05-12',
    time: '14:22',
    author: 'Dirección Académica',
    read: false,
  },
  {
    id: '4',
    title: 'Inscripción a talleres extracurriculares',
    description: 'Inscríbete a talleres: Robótica, Teatro, Música y más',
    content: 'Ya están abiertas las inscripciones para el segundo semestre. Cupos limitados.\n\nTalleres disponibles:\n- Robótica Avanzada\n- Teatro y Expresión\n- Ensamble Musical\n- Pintura al Óleo',
    type: 'academic',
    date: '2026-05-15',
    time: '14:22',
    author: 'Bienestar Estudiantil',
    read: true,
  }
];

export const events: Event[] = [
  {
    id: 'e1',
    label: 'Examen Matemáticas',
    time: '10:00',
    type: 'examen',
    room: 'Aula 204',
    date: '2026-05-05',
  },
  {
    id: 'e2',
    label: 'Reunión de padres',
    time: '17:00',
    type: 'reunion',
    room: 'Auditorio',
    date: '2026-05-05',
  },
  {
    id: 'e3',
    label: 'Taller de Robótica',
    time: '14:00',
    type: 'evento',
    room: 'Lab C',
    date: '2026-05-06',
  },
  {
    id: 'e4',
    label: 'Entrega de proyecto',
    time: '08:00',
    type: 'examen',
    room: 'Virtual',
    date: '2026-05-07',
  },
  {
    id: 'e5',
    label: 'Día del Deporte',
    time: '08:00',
    type: 'evento',
    room: 'Patio',
    date: '2026-05-09',
  }
];

export const currentUser = {
  name: 'Gustavo Van Humbeeck',
  email: 'vanhumbeeck@gmail.com',
  initials: 'GV',
  role: 'Administrador',
  stats: {
    comunicados: 5,
    leidos: 5,
    sinLeer: 0
  }
};
