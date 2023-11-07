export interface Test<TInput, TOutput> {
  name?: string;
  input: TInput;
  expected: TOutput;
}
