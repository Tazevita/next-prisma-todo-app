'use client';

import React from 'react';
import { completeTodo } from '../actions/actions';

type todoId = {
  id: number;
};

const CompletedButton = (id: todoId) => {
  return (
    <button
      onClick={() => {
        completeTodo(id);
      }}
      className="
    px-3 py-1
    bg-green-500 hover:bg-green-600
    text-white font-semibold text-sm
    rounded-lg shadow
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1
  "
    >
      ✓
    </button>
  );
};

export default CompletedButton;
