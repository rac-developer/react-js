import { v4 as uuidv4 } from "uuid";

interface Task {
  id: string;
  title: string;
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

const mockData: Column[] = [
  {
    id: uuidv4(),
    title: "✍️Por hacer",
    tasks: [
      {
        id: uuidv4(),
        title: "Estudiar TypeScript"
      },
      {
        id: uuidv4(),
        title: "Hacer curso de Next js"
      },
      {
        id: uuidv4(),
        title: "Hacer practicas de Nest js"
      }
    ]
  },
  {
    id: uuidv4(),
    title: "⭕En progreso",
    tasks: [
      {
        id: uuidv4(),
        title: "Estudiar Ingles"
      },
      {
        id: uuidv4(),
        title: "Terminar portafolio"
      },
      {
        id: uuidv4(),
        title: "Ir a la playa"
      }
    ]
  },
  {
    id: uuidv4(),
    title: "✔️Terminadas",
    tasks: [
      {
        id: uuidv4(),
        title: "TypeScript"
      },
      {
        id: uuidv4(),
        title: "Hacer curso de Next js"
      },
      {
        id: uuidv4(),
        title: "Hacer practicas de Nest js"
      }
    ]
  }
];

export default mockData;