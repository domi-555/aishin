import React from 'react'

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PageInfo from '../components/PageInfo';
import PageTop from '../components/PageTop';
import Layout from '../components/Layout';

const pagemeta = {
    subTitle:`会社概要`,
    slug:`company-profile`
}

export default function companyProfile() {
  return (
    <>
        <Seo
        title={pagemeta.subTitle}
        description="会社概要。愛心ペットセレモニーのホームページをご覧頂きありがとうございます。これもお客様と亡くなられたご家族（ペット）にとって大切なご縁となれば嬉しい限りです。私は、愛犬と過ごした日々を合わせ、動物に携わる生活を20年以上続けております。"
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
    <h3>ごあいさつ</h3>
  </div>{/*.strapline-*/}
  <div className="texts clearfix">
    <div className="text text__company">
      <p>愛心ペットセレモニーのホームページをご覧頂きありがとうございます。<br />
      これもお客様と亡くなられたご家族（ペット）にとって大切なご縁となれば嬉しい限りです。<br />
      私は、愛犬と過ごした日々を合わせ、動物に携わる生活を20年以上続けております。<br />
      仔犬や子猫の愛おしさ‥<br />
      無邪気に遊ぶ可愛らしさ‥<br />
      病気で辛そうにしている顔‥<br />
      この20年間、私生活と仕事を通じて沢山の動物たちとふれ合い接してきました。<br />
      しかし、どんなに大切に日々を過ごしても必ずお別れの日が訪れます。<br />
      これほど辛い日はないでしょう‥<br />
      しかし、大切なわが仔をしっかりと天国へ送り届けてあげなければなりません。</p>
      <p>「心と心をつなぎ、再会を信じ、そして最後の“お別れ”‥」<br />
      「旅立つ仔も、見送る人も、互いに笑顔で手を振り合ってもらいたい‥」</p>
      <p>いつもこのような考えの下、お手伝いさせていただいております。そして、飼い主さまの悲しみを共有し、少しでも心の支になってあげる。これが私の役割、又は役目だと考えております。</p>
    </div>
  </div>
  <div className="strapline">
    <h3>会社概要</h3>
  </div>{/*.strapline-*/}
  <div className="table clearfix">
    <div className="table-list">
      <dl className="label">
        <dt>社名</dt>
        <dd>（株）パルテノンスタジオ</dd>
      </dl>
      <dl className="label">
        <dt>事業名</dt>
        <dd>愛心ペットセレモニー埼玉（ふじみ野ペット斎場）</dd>
      </dl>
      <dl className="label">
        <dt>本部斎場（ペット専用火葬場）</dt>
        <dd>〒356-0053　埼玉県ふじみ野市大井837－23</dd>
      </dl>
      <dl className="label">
        <dt>さいたま市営業所</dt>
        <dd>〒338-0002　埼玉県さいたま市中央区大字下落合1010</dd>
      </dl>
      <dl className="label">
        <dt>ご予約・お問合せ先</dt>
        <dd>フリーダイヤル 0120-36-2484<br />
        TEL : 049-292-0047　　FAX : 049-292-0034<br />
        (営業の電話は一切お断りしています。)
        </dd>
      </dl>
      <dl className="label">
        <dt>E-Mail</dt>
        <dd>mail@aishin2484.jp</dd>
      </dl>
      <dl className="label">
        <dt>URL</dt>
        <dd>http://www.aishin2484.jp</dd>
      </dl>
      <dl className="label">
        <dt>代表者</dt>
        <dd>斉藤　実成</dd>
      </dl>
      <dl className="label">
        <dt>事業内容</dt>
        <dd>ペット葬祭事業　・　メモリアル商品販売　・　ペット墓石販売</dd>
      </dl>
      <dl className="label">
        <dt>設立年月日</dt>
        <dd>平成18年12月</dd>
      </dl>
    </div>
  </div>
</div>

        </Layout>
    </>
  )
}
