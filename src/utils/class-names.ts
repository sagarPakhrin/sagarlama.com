import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const classNames = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// export const classNames = (...classes: any[]): string => {
//   return classes.filter(Boolean).join(' ');
// };
