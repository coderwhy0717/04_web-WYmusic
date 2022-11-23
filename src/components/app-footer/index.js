import React, { Fragment, memo } from 'react'
import { footerLinks,footerImages } from '@/common/local.data'
import { AppFooterWrapper,FooterLeft,FooterRight } from './style'

export default memo(function WYAppFooter() {
  return (
    <AppFooterWrapper>
      <div className='wrap-v2 content'>
        <FooterLeft>
           <div className='link'>
           {
              footerLinks.map(item => {
                return (
                  <Fragment key={item.title}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    <span className='line'>|</span>
                  </Fragment>
                )
              })
            }
           </div>
           <div className='centertext'>
             <span>网易公司版权所有©1997-2022 &nbsp; 杭州乐读科技有限公司运营：</span>
             <a href='https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png' rel="noopener noreferrer" target="_blank">浙网文[2021] 1186-054号</a>
           </div>
           <div className='footerbtm'>
             <a href='https://beian.miit.gov.cn/' rel="noopener noreferrer" target="_blank">粤B2-20090191-18 工业和信息化部备案管理系统网站&nbsp;&nbsp;</a>
             <img src='https://www.beian.gov.cn/img/ico.ico' alt=""></img>
             <a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564' rel="noopener noreferrer" target="_blank"> 浙公网安备 33010902002564号</a>
           </div>
        </FooterLeft>
        <FooterRight>
              {
                footerImages.map(item => {
                  return (
                    <li className="item" key={item.link}>
                    <a className="link" href={item.link} rel="noopener noreferrer"target ="_blank"> </a>
                    <span className="title">{item.title}</span>
                  </li>
                  )
                })
              }
        </FooterRight>
      </div>
    </AppFooterWrapper>
  )
})
