import { Menu, Tray } from 'electron'
import path from 'path'

const createTray = () => {
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform !== 'darwin' ? '../../resources/tray.png' : '../../resources/icon.png'
    )
  )
  const contextMenu = Menu.buildFromTemplate([{ label: '退出', role: 'quit' }])
  tray.setContextMenu(contextMenu)
  tray.setToolTip('摄像头')
}

export default createTray
