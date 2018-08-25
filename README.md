# Electron React Example

Before start install as global or dev dependencies one of packages for your system

**Windows**
As Dev
npm i -D electron-installer-dmg or yarn add electron-installer-dmg --dev
As Global
npm i -g electron-installer-dmg or electron-installer-dmg

**MacOS**
As Dev
npm i -D electron-installer-windows or yarn add electron-installer-windows --dev
As Global
npm i -g electron-installer-windows or yarn global add electron-installer-windows

**Linux**
As Dev
npm i -D electron-installer-debian or yarn add electron-installer-debian --dev
As Global
npm i -g electron-installer-debian or yarn global add electron-installer-debian

In-game currency "normakoiny" (norm coins) are bought for real money. The more you buy the normals, the cheaper it becomes.

Features System: Fedora.

## Setup
* Change `config/default.js`
* Chose system and `npm i -D electron-installer-*`
* Make sure that you have already installed  ([Node.JS](https://nodejs.org/en/)).

## Npm commands
* `build:app` building application to ./app/
* `prebuild` run prebuilding electron appfrom ./app/
* `start` running `build:app & prebuild`

* `releases:win32` create releases build to ./dist/builds/win32/`NAME`-win32-ia32/,
* `releases:win64` create releases build to ./dist/builds/win64/`NAME`-win32-x64/,
* `releases:deb` create releases build to ./dist/builds/deb,
* `releases:mac` create releases build to ./dist/builds/mac,

* `installer:win32` create win32 installer from ./dist/builds/win32/`NAME`-win32-ia32/,
* `installer:win64` create win64 installer from ./dist/builds/win64/`NAME`-win32-x64/,
