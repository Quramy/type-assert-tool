interface Success { readonly __brand: unique symbol, readonly ok: true };
export type AssertSub<T1, T2, M = [actual_type: T1, is_not_assignable_to: T2]> = T1 extends T2 ? Success: M;
export type AssertIs<T1, T2, M = [actual_type: T1, is_not: T2]> = AssertSub<T1, T2, M> extends Success ? AssertSub<T2, T1, M> : M;
type AssertSuccess = TestSuite | Success;
export type TestSuite = { readonly [caseName: string]: AssertSuccess };
