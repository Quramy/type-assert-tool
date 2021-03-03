import { AssertIs, AssertSub, TestSuite } from ".";

type MyAwesomeType<T = string> = T extends string ? `Hello, ${T} !` : "Bye.";

interface MyAwesomeTypeTest extends TestSuite {
  result1: AssertIs<MyAwesomeType<'world'>, "Hello, world !">;
  result2: AssertIs<MyAwesomeType<number>, "Bye.">;

  // @ts-expect-error
  // Property 'result3' of type '[actual_type: "Bye.", is_not: "Bye bye"]' is not assignable to string index type 'AssertSuccess'.
  result3: AssertIs<MyAwesomeType<number>, "Bye bye">;

  "section 1": {
    pattern1: AssertIs<MyAwesomeType<''>, "Hello,  !">;
    pattern2: AssertSub<MyAwesomeType, string>;

    "nested section": {
      result: AssertSub<"Hello", string>;
    };
  };
}
