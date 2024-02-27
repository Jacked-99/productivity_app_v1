import { TaskMain } from './task-main';

export interface TaskTable {
  id: number;
  name: string;
  tasks: TaskMain[];
}
