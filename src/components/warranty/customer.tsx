import { UserAccount } from '@/types'
import classNames from 'classnames'
import { CustomImage } from '../customImage'

interface ICustomer {
  customer: UserAccount
  onClick?: Function
  className?: string
}

export const Customer = ({ customer, onClick: onExtrnalClick, className }: ICustomer) => {
  return (
    <div
      onClick={() => {
        onExtrnalClick?.()
      }}
      className={classNames(
        `flex gap-12 items-center bg-white rounded-md p-16 cursor-pointer 
        hover:bg-gray-200 active:bg-white duration-200 border border-gray-200 mb-12`,
        className
      )}
    >
      <div className="relative">
        <CustomImage
          src={customer?.avatar_url?.image_url || ''}
          className="w-[60px] min-w-[60px]"
          imageClassName="rounded-full w-[60px] h-[60px] min-w-[60px] object-cover"
        />
      </div>
      <div>
        <p className="text-md">{customer?.partner_name}</p>

        {customer?.phone ? (
          <p className="text-12 leading-20 line-clamp-1">
            <span className="text-md">{`Số điện thoại: `}</span>
            <span className="">{customer?.phone}</span>
          </p>
        ) : null}
      </div>
    </div>
  )
}
