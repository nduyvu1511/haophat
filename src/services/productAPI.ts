import { DEFAULT_LIMIT, DEFAULT_LIMIT_PRODUCT } from '@/constants'
import {
  Category,
  CategoryBrand,
  CheckProductAuthenParams,
  FilterProductParams,
  GetCategoryParams,
  GetListAttributeMinorParams,
  GetProductByAttributeMinorParams,
  GetProductByCategoryParams,
  GetProductDetailParams,
  HTTPListRes,
  HTTPProductFilterResponse,
  HTTPResponseV2,
  Product,
  ProductParams,
  QueryList,
} from '@/types'
import { AxiosPromise } from 'axios'
import axiosClient from '.'

const productAPI = {
  filterProduct: (params?: FilterProductParams): Promise<HTTPProductFilterResponse<Product[]>> => {
    return axiosClient.post('https://hpgroup.satavan.vn/product_controller/list_product_by_filter', {
      params: {
        ...params,
      },
    })
  },

  getProductDetail: (params: GetProductDetailParams) => {
    return axiosClient.get(`/product_controller/detail_product`, { params })
  },

  checkProductAuthen: (params: CheckProductAuthenParams) => {
    return axiosClient.get(`/product_authenticity_controller/authenticity`, { params })
  },

  getProductDescription: (product_id: number) => {
    return axiosClient.get(
      `/description_content_controller/description_content?product_id=${product_id}`
    )
  },

  getCategoryList: ({
    limit = DEFAULT_LIMIT,
    offset = 0,
    ...params
  }: GetCategoryParams): AxiosPromise<HTTPListRes<Category[]>> => {
    return axiosClient.get(`/category_controller/list_category_major`, { params })
  },

  getCategoryMinorList: ({
    limit = DEFAULT_LIMIT,
    offset = 0,
    ...params
  }: GetCategoryParams): AxiosPromise<HTTPListRes<Category[]>> => {
    return axiosClient.get('/category_controller/list_category_minor', { params })
  },

  getListAtributeMinor: (params: GetListAttributeMinorParams) => {
    return axiosClient.get(`/category_controller/list_attribute_minor`, { params })
  },

  getListVisceraAttribute: () => {
    return axiosClient.get('/category_controller/list_viscera_attribute_value')
  },

  getProductsByAttributeMinor: ({
    limit = DEFAULT_LIMIT_PRODUCT,
    offset = 0,
    ...params
  }: GetProductByAttributeMinorParams) => {
    return axiosClient.get(
      `/category_controller/list_product_by_attribute_minor?limit=${limit}&offset=${offset}${
        params?.attribute_id ? `&attribute_id=${params.attribute_id}` : ''
      }${
        (params?.attribute_value_ids?.length || 0) > 0
          ? `&attribute_value_ids=[${params?.attribute_value_ids}]`
          : ``
      }`
    )

    // return axiosClient.get(`/category_controller/list_product_by_attribute_minor`, {
    //   params: {
    //     limit,
    //     offset,
    //     attribute_value_ids: params?.attribute_value_ids
    //       ? `[${params?.attribute_value_ids?.join(', ')}]`
    //       : undefined,
    //     ...params,
    //   },
    // })
  },

  getProductsByCategoryMinor: (params: GetProductByCategoryParams) => {
    return axiosClient.get(`/product_controller/list_product_by_category_minor`, {
      params: {
        ...params,
        product_type: `["product_product"]`,
      },
    })
  },

  getProductsByCategoryMajor: (
    params: GetProductByCategoryParams
  ): Promise<HTTPResponseV2<Product[]>> => {
    return axiosClient.get(`/product_controller/list_product_by_category_major`, {
      params: {
        ...params,
        product_type: `["product_product"]`,
      },
    })
  },

  getAccessoryProduct: (params: ProductParams): Promise<HTTPResponseV2<Product[]>> => {
    return axiosClient.get(`/product_controller/list_accessory_product`, {
      params,
    })
  },

  getBrandNews: (params: QueryList): Promise<HTTPResponseV2<CategoryBrand[]>> => {
    return axiosClient.get(`/brand_news_controller/list_news`, { params })
  },
}

export { productAPI }
