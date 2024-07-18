export type BreadcrumbItemObectType = {
  title?: string
  disabled?: boolean
  href?: string
}

export type HeaderPanelProps = {
  breadcrumbs?: Array<string> | Array<BreadcrumbItemObectType>
  title?: string
  description?: string
  dropShadow?: boolean
}
