import React from 'react'

import { Link } from "gatsby"

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import BreadCrumb from '../components/BreadCrumb';
import PageTitle from '../components/PageTitle';
import PageTop from '../components/PageTop';
import Layout from '../components/Layout';

const pagemeta = {
    subTitle:`ページが見つかりません`,
    slug:`notfound`
}

export default function NotFound() {
  return (
    <>
      <Seo
        title={pagemeta.subTitle}
        description="お探しのページは、移動または削除された可能性があります。"
        />
        <Header />
        <Nav />
        <PageTop slug={pagemeta.slug} />
        <section id="page-info" className="notfound">
        <BreadCrumb
        title={pagemeta.subTitle}
        slug="404"
        />
        <PageTitle
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        />
      </section>
        <Layout>

        <h2 className="page_title01 mt0">お探しの記事は見つかりませんでした。</h2>
          <p className="center">愛心ペットセレモニーのWEBサイトをご覧頂きありがとうございます。<br />
          大変申し訳ないのですが、あなたがアクセスしようとしたページは削除されたかURLが変更されています。<br />
          お手数をおかけしますが、以下の方法からもう一度目的のページをお探し下さい。</p>
          <p className="center"><Link to="/" className='bt01'>トップページへ戻る</Link></p>


        </Layout>
    </>
  )
}
