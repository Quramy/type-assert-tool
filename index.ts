interface Success { readonly __brand: unique symbol, readonly ok: true };
export type AssertSub<T1, T2, M = [actual_type: T1, is_not_assignable_to: T2]> = T1 extends T2 ? AssertSuccess : M;
export type AssertIs<T1, T2, M = [actual_type: T1, is_not: T2]> = T1 extends T2 ? T2 extends T1 ? AssertSuccess : M : M;
type AssertSuccess = TestSuite | Success;
export type TestSuite = { readonly [caseName: string]: AssertSuccess };
