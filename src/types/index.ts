export interface ProductRow {
  id: number | string
  description: string
  qty: string
}

export interface ProductSpecs {
  totalContents: string
  dimensions: string
  weight: string
  price: string
  gstExtra: string
}

export interface ProductData {
  id: string
  name: string
  title: string
  image: string
  rows: ProductRow[]
  specs: ProductSpecs
}
