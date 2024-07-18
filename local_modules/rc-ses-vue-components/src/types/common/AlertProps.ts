export type AlertProps = {
  id?: string
  text?: string
  title?: string
  type?: 'warning' | 'info' | 'error' | 'success'
  variant?: 'light' | 'dark'
  closeable?: boolean
}
