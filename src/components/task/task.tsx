'use client';
import './task.css';
import { Toaster, toast } from 'sonner';

interface TaskProps {
  task_in_db: string;
  task_name: string;
  task_price: number;
  url_of_btn: string;
  user_id: number | null;
}

export default function Task({
  task_in_db,
  task_name,
  task_price,
  url_of_btn,
  user_id,
}: TaskProps) {

  return (
    <div className="task">
      <p className="task-name">{task_name}</p>
      <p className="task-price">{task_price}</p>
      <button className="claim-btn">
        <a href={url_of_btn}>Join</a>
      </button>
    </div>
  );
}
