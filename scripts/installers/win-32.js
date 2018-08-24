const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const config = require('config')
const path = require('path')
const APP = config.get('APP')
const {
    VERSION,
    NAME,
    ICON_WIN,
    COMPANY_NAME,
    PRODUCT_NAME,
    INTERNAL_NAME,
    AUTHOR,
    OWNERS
} = APP

const pathResolve = _path => path.join(process.cwd(), _path)


getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'dist/installs')
  const entryPath = path.join(rootPath, 'dist/builds/win32')
  

  return Promise.resolve({
    appDirectory: path.join(entryPath, `${NAME}-win32-ia32/`),
    authors: `${AUTHOR}`,
    owners:  `${OWNERS}`,
    version: `${VERSION}`,
    title: `${NAME}`,
    name: `${NAME}`,
    noMsi: false,
    outputDirectory: path.join(outPath, 'win32'),
    exe: `${NAME}.exe`,
    setupExe: `${NAME}-setup.exe`,
    // iconUrl: path.join(rootPath,  'icons', 'icon.ico'),    
    setupIcon: pathResolve(ICON_WIN)
  })
}