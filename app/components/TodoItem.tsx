import DeleteButton from './DeleteButton';
import CompletedButton from './CompletedButton';
import UndoComplete from './UndoComplete';

type TodoItemProps = {
  id: number;
  title: string;
  completed?: boolean;
};

export default function TodoItem({
  id,
  title,
  completed = false,
}: TodoItemProps) {
  return (
    <li
      className={`
        flex justify-between items-center p-4 rounded-lg transition
        ${
          completed
            ? 'bg-gray-100 shadow-sm opacity-80 hover:opacity-100'
            : 'bg-white shadow-md hover:shadow-xl'
        }
      `}
    >
      <div className="flex items-center gap-4">
        {completed ? <UndoComplete id={id} /> : <CompletedButton id={id} />}
        <span
          className={
            completed
              ? 'line-through text-gray-500'
              : 'text-gray-900 font-medium'
          }
        >
          {title}
        </span>
      </div>
      <DeleteButton id={id} />
    </li>
  );
}
