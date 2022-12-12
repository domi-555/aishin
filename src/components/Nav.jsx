import React from 'react'
import { Link } from "gatsby"

const Nav = () => {
  return (
    <>
      
      <section id="navi">
        <nav>
          <p id="sp-menu" className="sp"><Link className="hover" href="#"><img src="/images/nav/menu.png" alt="メニュー開閉ボタン" /></Link></p>
          <ul className="float-box">
            <li><Link className="hover" href="/price-guide">
                <span><img src="/images/nav/1.png" alt="埼玉のペット葬儀・火葬「愛心ペットセレモニー」の料金のご案内" /></span>料金のご案内</Link>
            </li>
            <li><Link className="hover" href="/flow-funeral">
                <span><img src="/images/nav/22.png" alt="埼玉のペット葬儀・火葬「愛心ペットセレモニー」の葬儀の流れ" /></span>葬儀の流れ</Link>
            </li>
            <li><Link className="hover" href="/guidance-business">
                <span><img src="/images/nav/3.png" alt="埼玉のペット葬儀・火葬「愛心ペットセレモニー」の業務のご案内" /></span>業務のご案内</Link>
            </li>
            <li><Link className="hover" href="/service-area">
                <span><img src="/images/nav/4.png" alt="埼玉のペット葬儀・火葬「愛心ペットセレモニー」のサービスエリア" /></span>サービスエリア</Link>
            </li>
            <li><Link className="hover" href="/goods">
                <span><img src="/images/nav/7.png" alt="埼玉のペット葬儀・火葬「愛心ペットセレモニー」の商品のご案内" /></span>商品のご案内</Link>
            </li>
            <li><Link className="hover" href="/faq">
                <span><img src="/images/nav/6.png" alt="よくあるご質問" /></span>よくあるご質問</Link>
            </li>
            <li><Link className="hover" href="/access">
                <span><img src="/images/nav/55.png" alt="埼玉のペット葬儀・火葬「愛心ペットセレモニー」のアクセス情報" /></span>アクセス</Link>
            </li>
            <li className="sp" id="close"><Link href="#">
                <span><img src="/images/nav/0.png" alt="メニュー開閉ボタン" /></span>閉じる</Link>
            </li>
            <li className="sp" id="kara" />
          </ul>
        </nav>
      </section>

    </>
  )
}

export default Nav
