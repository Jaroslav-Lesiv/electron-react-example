// electron-packager ./app  goodWorker --overwrite --platform=win32  --icon=app/assets/images/app/ico/appIcon.ico  --electron-version=2.0.0 --arch=ia32 --ignore=mode_modules --prune --out=releases"
// const packager = require('electron-packager')
const config = require('config')
const path = require('path')
const APP = config.get('APP')
const {
    VERSION,
    NAME,
    ICON_WIN,
    COMPANY_NAME,
    PRODUCT_NAME,
    INTERNAL_NAME
} = APP

const pathResolve = _path => path.join(process.cwd(), _path)

const options = {
    dir: pathResolve('app'),
    buildPath: pathResolve('app'),
    electronVersion: `2.0.0`,
    platform: `win32`,
    arch: `ia32`,
    appVersion: VERSION,
    asar: true,
    buildVersion: VERSION,
    executableName: NAME,
    icon: pathResolve(ICON_WIN),
    ignore: ['node_modules'],
    name: NAME,
    out: pathResolve(`dist/builds/win32`),
    overwrite: true,
    win32metadata: {
        CompanyName: COMPANY_NAME,
        OriginalFilename: `${NAME}.exe`,
        ProductName: PRODUCT_NAME,
        InternalName: INTERNAL_NAME
    }
}
const packager = require('electron-packager')
packager(options)
  .then(appPaths => console.log(appPaths))