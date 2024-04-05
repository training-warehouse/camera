class Drag {
  private pageX = 0
  private pageY = 0
  private body?: HTMLBodyElement

  constructor() {}
  public run() {
    window.addEventListener('DOMContentLoaded', () => {
      this.body = document.querySelector('body')!
      this.body.addEventListener('mousedown', this.mouseDown.bind(this))
    })
  }
  private mouseDown(event: MouseEvent) {
    this.pageX = event.pageX
    this.pageY = event.pageY
    const mouseMoveCallback = this.mouseMove.bind(this)
    this.body?.addEventListener('mousemove', mouseMoveCallback)
    this.body?.addEventListener('mouseout', () => {
      this.body?.removeEventListener('mousemove', mouseMoveCallback)
    })
    this.body?.addEventListener('mouseup', () => {
      this.body?.removeEventListener('mousemove', mouseMoveCallback)
    })
  }

  private mouseMove(event: MouseEvent) {
    const x = event.pageX - this.pageX
    const y = event.pageY - this.pageY
    window.api.drag({ x, y })
  }
}

export default () => {
  const drag = new Drag()
  return { drag }
}
