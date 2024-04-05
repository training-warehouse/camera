import { BrowserWindow, ipcMain, IpcMainEvent } from 'electron'

const getWin = (event: IpcMainEvent) => {
  return BrowserWindow.fromWebContents(event.sender)!
}

ipcMain.on(
  'setWindowSize',
  (event: IpcMainEvent, opt: { aspectRatio: number; width?: number; height?: number }) => {
    const win = getWin(event)
    win.setAspectRatio(opt.aspectRatio)
    win.setBounds({ width: opt.width, height: opt.height })
  }
)
