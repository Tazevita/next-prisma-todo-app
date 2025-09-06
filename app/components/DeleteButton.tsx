'use client';

import React from 'react';
import { deleteTodo } from '../actions/actions';

type todoId = {
  id: number;
};

const DeleteButton = (id: todoId) => {
  return (
    <button
      onClick={() => {
        deleteTodo(id);
      }}
      className="
    px-4 py-2
    bg-red-600 hover:bg-red-700
    text-white font-semibold
    rounded-lg shadow-md
    focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1
    transition-colors duration-200
  "
      type="button"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
