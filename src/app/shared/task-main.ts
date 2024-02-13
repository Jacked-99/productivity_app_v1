import { Task } from './task';
export interface TaskMain extends Task {
  subTasks?: Task[];
}
