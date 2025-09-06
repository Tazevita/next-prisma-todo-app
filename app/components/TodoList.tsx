import TodoItem from './TodoItem';

type TodoListProps = {
  todos: { id: number; title: string; completed: boolean }[];
  title: string;
};

export default function TodoList({ todos, title }: TodoListProps) {
  return (
    <div className="max-w-3xl mx-auto mb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
}
