type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export type { ListProps };
