declare module '@/utilities' {
  export function randomElement<T>(array: T[]): T;

  export function randomElements<T>(array: T[], count: number): T[];
}
