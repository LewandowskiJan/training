// Class, Interface, Types
export class Syntax {}

export interface InterfaceExample {
  interfaceName: string;
}

export type TypeExample = {
  name: string;
};

// Functions
export function someVoidFunction(): void {
  console.log('no return');
}

export function someFunction(): string {
  return '';
}

export function someFunctionWithParam(param1: string): string {
  return param1;
}

// Primitives
export const myString: string = '123';
export const myNumber: number = 23;
export const myBoolean: boolean = true;

// Combine
export const stringOrNull: string | null = null;
export const undefinedOrNull: undefined | null = undefined;

// Objects
export const myCustomObject: { name: string; age: number } = { name: 'example', age: 12 };

// Arrays
export const myArray: [] = [];
export const myStringArray: string[] = ['aaa', 'bbb'];
export const myAnyArray: any[] = ['aaa', 'bbb', 123];
export const myCustomObjArray: { name: string; age: number }[] = [myCustomObject];
export const myClassArray: Syntax[] = [new Syntax()];
export const myInterfaceArray: InterfaceExample[] = [{ interfaceName: 'a' }, { interfaceName: 'b' }];
export const myTypeArray: TypeExample[] = [{ name: 'a' }, { name: 'b' }];

export const fn: any = (paramX: number): string => '' + paramX;

// Generic types
export function modify<T>(paramZ: T): T {
  return paramZ;
}

export function modifyFancyGenericType<FancyGenericType>(some: FancyGenericType): FancyGenericType {
  return { name: '1', ...some } as FancyGenericType;
}
