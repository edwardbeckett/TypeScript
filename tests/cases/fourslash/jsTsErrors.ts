/// <reference path="fourslash.ts" />

// @allowJs: true

// @Filename: /a.js
////export const x = 0;
/////*insert*/

// @Filename: /b.ts
/// <reference path="fourslash.ts" />
////import * as a from "./a";
////a.x;
////a.y;

goTo.file("/b.ts");
verify.numberOfErrorsInCurrentFile(1);

goTo.marker("insert");
edit.insertLine("export const y = 1;");

goTo.file("/b.ts");
verify.numberOfErrorsInCurrentFile(0);
