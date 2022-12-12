import React from 'react'

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PageInfo from '../components/PageInfo';
import PageTop from '../components/PageTop';
import Layout from '../components/Layout';

const pagemeta = {
    subTitle:`お問い合わせ`,
    slug:`contactus`
}

export default function contactus() {
  return (
    <>
      <Seo
        title={pagemeta.subTitle}
        description="お問い合わせページです。ご不明な点がありましたら、ご遠慮なくご相談ください。"
        />
        <Header />
        <Nav />
        <PageTop slug={pagemeta.slug} />
        <PageInfo
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        />
        <Layout>
            <div className="blog">
                <div className="strapline">
                    <h3>お問い合せフォーム</h3>
                </div>
                <div className="texts clearfix">
                    <div className="text">                
                        <span className="red">現在フォームを停止しております。<br />
                        お急ぎの方は、お電話にてお問い合せ下さい。<br /><br />
                        フリーダイヤル <a href="tel:0120-36-2484">0120-36-2484</a>（受付 6:00～23:00）<br />
                        携帯の場合は TEL <a href="tel:049-292-0047">049-292-0047</a></span>
                    </div>
                </div>
            </div>
        </Layout>
    </>
  )
}
