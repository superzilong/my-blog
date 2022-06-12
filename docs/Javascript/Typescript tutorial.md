---
title: Typescript tutorial
description: Learn the basics of typescript
---

# Typescript tutorial

## Install

```shell
npm install typescript -g
```

## Config

1. Create an empty directory and use below command to initialize.  It will generate a config file `tsconfig.json`.

```shell
tsc --init
```

2. Modify `tsconfig.json` to configure the source typescript directory and the target javascript directory.

```json
{
    "compilerOptions": {
    ...
    "rootDir": "./source",     /* Specify the root folder within your    source files. */
    "outDir": "./target",      /* Specify an output folder for all   emitted files. */
    ...
    }
}
```

3. Create `index.ts` in the source folder and add below test sentence. Run the command `tsc --watch`, it will update the output `index.js` file in the target folder in real time.

```typescript
const v: string = "Hello world!"
console.log(v);
```
4. Use node to run the output `index.js` to checkout the result.

## Basic types

### Build-in Type primitives

number, string, boolean, undefined, null, any, unknown, never, void, bigint, symbol

### Common build-in JS Objects

Date, Error, Array, Map, Set, Regexp, Promise

### Type Literals

Object:

```typescript
{
	field1: string;
	field2: number;
}
```

Function:

```typescript
(arg: number)=>string
```

Array:

```typescript
string[]
// Or
Array<string>
```

Tuple:

```typescript
[string, number]
```

### Union Type

Describes a type which is one of many options, for example a list of known strings.

```typescript
type Size = "small" | "medium" | "large";
```

Discriminated Unions

```typescript
type Responses = 
 | { status: 200, data: any }
 | { status: 301, to: string }
 | { status: 400, error: Error };
//Usage
const response = getResponse()
switch(response.status) {
 case 200: return response.data
 case 301: return redirect(response.to)
 case 400: return response.error
 }
```

### Intersection Types

A way to merge/extend types

```typescript
type Location =  { x: number } & { y: number }
// { x: number, y: number }
```

## Interface

### Common Syntax

```typescript
// Use extend to take properties from existing interface or type
interface JSONResponse extends Response, HTTPAble { 
    version: number
    
    /** In bytes */
    payloadSize: number; // The comments above property are JSDoc comment attached to show in editors
    
    outOfStock?: boolean; // This property might not be on the object
    
    // Below are two ways to describe a property which is a function
    update: (retryTimes: number) => void;
    update(retryTimes: number): void;
    
    (): JSONResponse; // This is a callable object
    
    new(s: string): JSONResponse; // You can use new on the object.
    
    // Any property not described already is assumed to exist, and all properties must be numbers
    [key: string]: number;
    
    readonly body: string; // Tells TypeScript that a property can not be changed
}
```

## CFA(Control Flow Analysis)

### If Statements

Most narrowing comes from expressions inside if statements, where different type operators narrow inside the new scope.

```typescript
// typeof (for primitives)
const input = getUserInput();
input; // string | number
if (typeof input === “string”) {
 input // string
}

// instance of (for classes)
const input = getUserInput();
input; // number | number[]
if (input instanceof Array) {
 input // number[]
}

// "property" in object (for objects)
const input = getUserInput();
input; // string | {error: ...}
if ("error" in input) {
 input // {error: ...}
}

// type-guard functions (for anything)
const input = getUserInput();
input; // number | number[]
if (Array.isArray(input)) {
 input // number[]
}
```

## Class

TBD...



