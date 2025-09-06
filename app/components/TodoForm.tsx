import { createTodo } from '../actions/actions';

export default function TodoForm() {
  return (
    <div className="flex justify-center mb-8">
      <form
        action={createTodo}
        className="flex w-full max-w-2xl shadow-lg rounded-lg overflow-hidden"
      >
        <input
          type="text"
          name="todo"
          placeholder="Add a new task..."
          className="flex-1 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition-colors"
        >
          Add
        </button>
      </form>
    </div>
  );
}
