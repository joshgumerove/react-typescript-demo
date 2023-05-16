type Name = {
  first: string;
  last: string;
};

interface PersonProps {
  name: Name;
}

export type { PersonProps, Name };
