# type-assert-tool

Utility type to assert your TypeScript type.

## Usage

```ts
import { AssertIs, AssertSub, TestSuite } from "type-assert-tool";

type MyAwesomeType<T = string> = T extends string ? `Hello, ${T} !` : "Bye.";

interface MyAwesomeTypeTest extends TestSuite {
  result1: AssertIs<MyAwesomeType<'world'>, "Hello, world !">;
  result2: AssertIs<MyAwesomeType<number>, "Bye.">;

  // Property 'result3' of type '[actual_type: "Bye.", is_not: "Bye bye"]' is not assignable to string index type 'AssertSuccess'.
  result3: AssertIs<MyAwesomeType<number>, "Bye bye">;

  "you can put cases into a section": {
    pattern1: AssertIs<MyAwesomeType<''>, "Hello,  !">;
    pattern2: AssertSub<MyAwesomeType, string>;

    "nested section": {
      result: AssertSub<"Hello", string>;
    };
  };
}
```

[Try this in Playground!](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgQQM6oKawJKoDQrpYwDKArgEYEAqGqpZwMGcAvnAGZQQhwBEMAJ5gMAWgCGRWKJgQIAGz4BuAFAqhIuAFlByAO50eGasIwAeanAC8celGAA7AOYA+a3EsYAHswcATVFsYe2c4AH44AAMACQx5eQgCABIEanYAQki4AC5+ACFBDAA6ZTVHZigOcQBjFh19QxBjU1p6OG9fAI86BiYWBBU4OCg6MnkYAEZctEwcVDN6g1QjExEzAHI9aHk-dZcCPlj4xLgtqB24dL4XVSGR1DGYACZpqRhcBd0lldMzBzIQBQsPt8oUSjc1EMAPRQuAABW4Ilggjg63ujwAzOs4BAOHANCx1gBtGowMjieQAfQJuT4BWKfAIwFQlIcEBgtPpcAohT4AF1scy4Gz4JJUMAnA5xBR5CxZEEQk44I4-N58aZUTNiORqrV0OsioNhqNxhjXrN3vNFo1mmt-oDgQcuTyMNdVEa+IIIGQ4NVxA44GAyPA-ZhAuUIHBxLYMNUYMAIA4+LkBkMhmBxDAKg4poQLR9rcsmqtzOs9gcjgkCJc3Ub05nsy889rKJ8GkXbRgCHZHK53Wn+A4ehg-DG4wmkym62n0eNzS2KGZDnEEoyFb2IQPWLc2KpWEA)

## API

### `TestSuite`

You can write "TypeScript type test" extending this type. For example:

```ts
interface YourTestCases extends TestSuite {
  // write test cases as properties
}
```

There are no restrictions on the property names in the sub interface. However, `TestSuite` enforces as the sub interface's properties should be assignable to type `AssertSuccess` .

### `AssertIs<Actual, Expected>`
Test equality between type `Actual` and type `Expected` . Only if succeeded, this type returns type `AssertSuccess` .

### `AssertSub<Actual, Expected>`
Test whether type `Actual` type is a sub type of type `Expected` . Only if succeeded, this type returns type `AssertSuccess` .

## Motivation
TypeScript's type arithmetic capabilities are amazing. It has powerful features such as Mapped Types, Conditional Types, Recursive Types, and Template Literal Types.

I needed a way to make sure that the composite types I created using these features would work as expected. I created this utility because I wanted to write tests for composite types in the same way I write unit tests for functions.

## Similar repositories

- [ts-expect](https://github.com/TypeStrong/ts-expect) provides function to assert type of your "values".

## License
MIT
