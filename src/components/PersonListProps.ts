type Person = {
  first: string;
  last: string;
};

interface PersonListProps {
  names: Person[];
}

export type { PersonListProps };
