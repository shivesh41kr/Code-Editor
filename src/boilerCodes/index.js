export const cppBoiler = `#include<bits/stdc++.h>
using namespace std;

int main(){
	cout<<"Hello World! Use me as your Code Editor"<<endl;
	return 0;
}
`;
export const pyBoiler = `print("Hello World! Use me as your Code Editor")`;
export const jsBoiler = `console.log("Hello World! Use me as your Code Editor");`;
const assemblyBoiler = `section .data
    msg db "Hello, World! Use me as your Code Editor",0xa
section .text
    global _start
_start:
    ; write(1, msg, 13)
    mov eax, 4
    mov ebx, 1
    mov ecx, msg
    mov edx, 13
    int 0x80
    ; exit(0)
    mov eax, 1
    xor ebx, ebx
    int 0x80`;
const bashBoiler = `#!/bin/bash
echo "Hello, World! Use me as your Code Editor"
`;
const basicBoiler = `PRINT "Hello, World! Use me as your Code Editor"`;
const cBoiler = `#include <stdio.h>

int main() {
    printf("Hello, World! Use me as your Code Editor");
    return 0;
}`;

const clojureBoiler = `(println "Hello, World! Use me as your Code Editor")`;
const cSharpBoiler = `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World! Use me as your Code Editor");
    }
}`;

const cobolBoiler = `IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO.
PROCEDURE DIVISION.
    DISPLAY "Hello, World! Use me as your Code Editor".
    STOP RUN.`;

const commonLispBoiler = `(format t "Hello, World! Use me as your Code Editor~%")`;
const dBoiler = `import std.stdio;

void main() {
    writeln("Hello, World! Use me as your Code Editor");
}
`;
const elixirBoiler = `IO.puts "Hello, World! Use me as your Code Editor"`;
const erLangBoiler = `-module(hello).
-export([hello_world! Use me as your Code Editor/0]).

hello_world() -> io:fwrite("Hello, World! Use me as your Code Editor\n").`;
const fSharpBoiler = `printfn "Hello, World! Use me as your Code Editor"`;
const fortranBoiler = `program hello
write(*,*) "Hello, World! Use me as your Code Editor"
end program hello`;
const goBoiler = `package main

import "fmt"

func main() {
    fmt.Println("Hello, World! Use me as your Code Editor")
}`;

const groovyBoiler = `println "Hello, World! Use me as your Code Editor"`;
const haskellBoiler = `main = putStrLn "Hello, World! Use me as your Code Editor"`;
const javaBoiler = `public class HelloWorld {
	public static void main(String[] args) {
			System.out.println("Hello, World! Use me as your Code Editor");
	}
}`;
const kotlinBoiler = `fun main() {
	println("Hello, World! Use me as your Code Editor")
}`;
const luaBoiler = `print("Hello, World! Use me as your Code Editor")`;
const objectCBoiler = `#import <Foundation/Foundation.h>

int main() {
    @autoreleasepool {
        NSLog(@"Hello, World! Use me as your Code Editor");
    }
    return 0;
}
`;
const oCamlBoiler = `print_endline "Hello, World! Use me as your Code Editor"`;
const octaveBoiler = `printf("Hello, World! Use me as your Code Editor\n")`;
const pascalBoiler = `program hello;
begin
    writeln('Hello, World! Use me as your Code Editor');
end.`;
const perlBoiler = `print "Hello, World! Use me as your Code Editor\n";`;
const phpBoiler = `<?php
echo "Hello, World! Use me as your Code Editor\n";
?>
`;
const py2Boiler = `print "Hello, World! Use me as your Code Editor"`;
const py3Boiler = `print("Hello, World! Use me as your Code Editor")`;
const rBoiler = `cat("Hello, World! Use me as your Code Editor\n")`;
const rubyBoiler = `puts "Hello, World! Use me as your Code Editor"`;
const rustBoiler = `fn main() {
	println!("Hello, World! Use me as your Code Editor");
}`;
const scalaBoiler = `object HelloWorld {
  def main(args: Array[String]) {
    println("Hello, World! Use me as your Code Editor")
  }
}
`;
const switfBoiler = `print("Hello, World! Use me as your Code Editor")`;
const typescriptBoiler = `console.log("Hello, World! Use me as your Code Editor");`;
const visualBasicBoiler = `Module HelloWorld
Sub Main()
		Console.WriteLine("Hello, World! Use me as your Code Editor")
End Sub
End Module`;

export const boilerCodes = (languageId) => {
	switch (languageId) {
		case 45:
			return assemblyBoiler;
		case 46:
			return bashBoiler;
		case 47:
			return basicBoiler;
		case 50:
			return cBoiler;
		case 51:
				return cSharpBoiler;
		case 54:
			return cppBoiler;
		case 55:
			return commonLispBoiler;
		case 56:
			return dBoiler;
		case 57:
			return elixirBoiler;
		case 58:
			return erLangBoiler;
		case 59:
			return fortranBoiler;
		case 60:
			return goBoiler;
		case 61:
			return haskellBoiler;
		case 62:
			return javaBoiler;
		case 63:
			return jsBoiler;
		case 64:
			return luaBoiler;
		case 65:
			return oCamlBoiler;
		case 66:
			return octaveBoiler;
		case 67:
			return pascalBoiler;
		case 68:
			return phpBoiler;
		case 69:
			return '';
		case 70:
			return py2Boiler;
		case 71:
			return py3Boiler;
		case 72:
			return rubyBoiler;
		case 73:
			return rustBoiler;
		case 74:
			return typescriptBoiler;
		case 77:
			return cobolBoiler;
		case 78:
			return kotlinBoiler;
		case 79:
			return objectCBoiler;
		case 80:
			return rBoiler;
		case 81:
			return scalaBoiler;
		case 82:
			return '';
		case 83:
			return switfBoiler;
		case 84:
			return visualBasicBoiler;
		case 85:
			return perlBoiler;
		case 86:
			return clojureBoiler;

		default:
			return '';
	}
};
