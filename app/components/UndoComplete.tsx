'use client';

import React from 'react';
import { undoCompleteTodo } from '../actions/actions';

type todoId = {
  id: number;
};

const UndoComplete = (id: todoId) => {
  return (
    <button
      onClick={() => {
        undoCompleteTodo(id);
      }}
      className="
                px-3 py-1
                bg-red-600 hover:bg-red-700
                text-white font-semibold text-sm
                rounded-lg shadow
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1"
    >
      X
    </button>
  );
};

export default UndoComplete;
