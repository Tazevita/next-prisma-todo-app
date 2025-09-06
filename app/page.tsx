import prisma from './lib/db';

import MainHeader from './components/MainHeader';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default async function Home() {
  const todosFetch = await prisma.todo.findMany();
  const activeTodos = todosFetch.filter((t) => !t.completed);
  const completedTodos = todosFetch.filter((t) => t.completed);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      {/* Header */}
      <MainHeader />
      {/* Add Todo Form */}
      <TodoForm />
      {/* Active Todos */}
      <TodoList todos={activeTodos} title="Active Tasks" />
      {/* Completed Todos  */}
      <TodoList todos={completedTodos} title="Completed Tasks" />
    </div>
  );
}
