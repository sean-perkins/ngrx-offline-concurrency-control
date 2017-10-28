# Ngrx Offline Concurrency Control

<!--
[![npm](https://img.shields.io/npm/v/@teammaestro/ngx-offline-concurrency-control.svg)](https://www.npmjs.com/package/@teammaestro/ngx-offline-concurrency-control)
[![npm](https://img.shields.io/npm/dt/@teammaestro/ngx-offline-concurrency-control.svg?label=npm%20downloads)](https://www.npmjs.com/package/@teammaestro/ngx-offline-concurrency-control)

[![NPM](https://nodei.co/npm/@teammaestro/ngx-offline-concurrency-control.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@teammaestro/ngx-offline-concurrency-control/) -->

An extendable offline data management module for any Angular application. Multi-version concurrency to manage the client's database versus the master database. Uses evolutionary timeline methodologies to sequence offline changes to data, to only send the most up-to-date reference of an object to your master database.

_Note_: WIP do not use this yet.

## Roadmap
* [x] Connection Monitoring - WiFi / 3G / None
* [x] Data Persistence Layer
* [ ] Decorators(?) for tagging `@Offline()` effects
* [ ] Sync Persistence Layer
* [ ] Transaction Manager
* [ ] Http Middleware
* [ ] Hooks for database of choice

## Contributors

[<img alt="Sean perkins" src="https://avatars1.githubusercontent.com/u/13732623?v=3&s=117" width="117">](https://github.com/sean-perkins) |
:---:
|[Sean Perkins](https://github.com/sean-perkins)|
