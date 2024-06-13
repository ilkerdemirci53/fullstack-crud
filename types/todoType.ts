export type todoType = {
  id: string;
  todo: todoType;
  title?: string | null;
  isCompleted: boolean;
  createdAt?: Date;
};
