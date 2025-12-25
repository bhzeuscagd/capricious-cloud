export interface Experience {
  period: string;
  datetime: string;
  title: string;
  company: string;
  location: string;
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    period: '2023-NOW',
    datetime: '2023/2024',
    title: 'Senior Product Designer',
    company: 'Google',
    location: 'Remoto',
    isCurrent: true
  },
  {
    period: '2021-2023',
    datetime: '2021/2023',
    title: 'Frontend Lead',
    company: 'Studio Norte',
    location: 'Colombia',
    isCurrent: false
  },
  {
    period: '2019-2021',
    datetime: '2019/2021',
    title: 'Freelance Developer',
    company: 'Independent',
    location: 'Global',
    isCurrent: false
  }
];