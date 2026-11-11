const fs = require('fs');
let code = fs.readFileSync('C:/Users/dar/.gemini/antigravity/scratch/pitang-poc-landing/demo_router.js', 'utf8');

// Strip out the astro imports
code = code.replace(/import\{a as e,i as t,o as n,r,t as i\}from"\.\/react\.DwiWQo0R\.js";/, '');
code = code.replace(/import\{t as a\}from"\.\/jsx-runtime\.DB6jYilg\.js";/, '');
code = code.replace(/import\{t as o\}from"\.\/cn\.D2PoKu6C\.js";/, '');

// Remove globalThis.process??={},globalThis.process.env??={};
code = code.replace(/globalThis\.process\?\?=\{\},globalThis\.process\.env\?\?=\{\};/, '');

// Replace `,c=n(i(),1),l=a();` with `;`
code = code.replace(/,c=n\(i\(\),1\),l=a\(\);/, ';');

const header = `'use client';
import * as React from 'react';
import * as jsxRuntime from 'react/jsx-runtime';

function o(...args) {
  return args.filter(Boolean).join(' ');
}

var _defProp = Object.defineProperty;
var r = (fn, t, n) => () => {
  if (n) throw n[0];
  try { return fn && (t = fn((fn = 0))), t; } catch (err) { throw ((n = [err]), err); }
};
var t = (obj, n) => {
  let res = {};
  for (var k in obj) _defProp(res, k, { get: obj[k], enumerable: true });
  return n || _defProp(res, Symbol.toStringTag, { value: 'Module' }), res;
};
var e = (mod) => mod;
var n = (mod) => mod;
var c = React;
var l = jsxRuntime;
`;

const finalFile = header + '\n' + code;

fs.writeFileSync('C:/Users/dar/.gemini/antigravity/scratch/pitang-poc-landing/components/playbook-demo-router.jsx', finalFile, 'utf8');
console.log('Successfully written components/playbook-demo-router.jsx with all helpers!');
