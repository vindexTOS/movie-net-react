import React, { FC } from 'react'
import { ReviewsPostType } from '../../../../redux/features/Thunks/ReviewsCrud'
import soap from '../../../../assets/icons/soap.png'
const ReviewCommentCard: FC<ReviewsPostType> = (data): JSX.Element => {
  const style = {
    mainDiv: `w-[100%] rounded-[12px] relative  max_smm:w-[100%] backdrop-blur-sm bg-[#7bdef4]/10 boxshaddow flex items-start px-10 jusify-center gap-5 py-10 flex-col`,
    section: `w-[90%] flex items-center justify-between  bg-[#7bdef4]/20 px-10 rounded-[20px]  gap-2`,
    rateDiv: `flex items-center text-white  `,
    comment: `w-[100%] bg-[#f47bde]/50  p-10 rounded-[20px] text-white shadow-md`,
  }

  const { comment, rate, userName } = data

  return (
    <div className={style.mainDiv}>
      <section className={style.section}>
        <h1 className="text-white">
          Critic: <span className="text-blue-600">{userName}</span>
        </h1>
        <div className={style.rateDiv}>
          {new Array(rate).fill(soap).map((val: string, i: number) => (
            <img key={i} className="w-[60px]" src={val} />
          ))}
        </div>
      </section>
      <p className={style.comment}>{comment}</p>
    </div>
  )
}

export default ReviewCommentCard
