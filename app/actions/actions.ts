'use server';

import { revalidatePath } from 'next/cache';
import prisma from '../lib/db';

export async function createTodo(formData: FormData) {
  const title = formData.get('todo') as string;

  await prisma.todo.create({
    data: {
      title,
    },
  });
  revalidatePath('/');
}
export async function deleteTodo(todoid: any) {
  await prisma.todo.delete({
    where: todoid,
  });
  revalidatePath('/');
}

export async function completeTodo(todoid: any) {
  await prisma.todo.update({
    where: todoid,
    data: {
      completed: true,
    },
  });
  revalidatePath('/');
}
export async function undoCompleteTodo(todoid: any) {
  await prisma.todo.update({
    where: todoid,
    data: {
      completed: false,
    },
  });
  revalidatePath('/');
}
