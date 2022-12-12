import React from 'react'

import { Link, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight,faChevronUp,faCircleChevronRight } from "@fortawesome/free-solid-svg-icons"

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Mainimege from '../components/Mainimege';
import TopCalender from '../components/TopCalender'
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>

    <Seo title="埼玉県ふじみ野市のペット火葬" />

    <Header />

    <p id="page-top"><AnchorLink offset="0" to="#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

    <Mainimege />

    <Nav />

    <div className="index" id="main">

      <section className="container">
        <div className="wrap center">
          <h2 className="serif">大切な家族（ペット）とのお別れの日が訪れたら・・</h2>
          <p>別れを経験した者だからこそ深い悲しみを理解し、心のこもった供養で愛するペットを天国へと送り届けてあげれる。それが私たちにできるお手伝いだと考えています。</p>
          <p>愛心ペットセレモニー埼玉ではペット火葬・葬儀・納骨・仏具・お墓・動物霊園・・まで、全てのサービスをご提供させて頂いております。</p>
          <h3 className="color3 h2">お客様満足度100%を目標に！</h3>
          <p>お客様から信頼をいただき安心してご供養をお任せいただけるよう心を込めたペット葬儀サービスを心がけご奉仕させていただいております。</p>
          <p>当施設は、お客様から新たなお客様を自信を持ってご紹介していただく事ができるようなペット葬儀サービスを原点としています。</p>
          <p>100年先も200年先も変わらぬよう、愛するペットさんのご供養とお客様の心のケアに努め、先祖のペットさんを大切に守って行けるよう精進していきます。</p>
        </div>
      </section>

      <section className="container gray">
        <div className="wrap center">
          <div id="cremation-menu" className="float-box">
            <dl>
              <dt>お立会ペット火葬<span>お持込</span></dt>
              <dd>18,000<span>円～</span></dd>
            </dl>
            <dl>
              <dt>個別一任ペット火葬<span>48h返骨</span></dt>
              <dd>17,000<span>円～</span></dd>
            </dl>
            <dl className="sp-both">
              <dt>お引取個別ペット火葬<span>納骨含</span></dt>
              <dd>16,000<span>円～</span></dd>
            </dl>
            <dl>
              <dt>お引取合同ペット火葬<span>納骨含</span></dt>
              <dd>12,000<span>円～</span></dd>
            </dl>
          </div>
          <p>愛心ペットセレモニー埼玉では、愛する家族（ペット）のために、ご家族皆様でしっかりとしたご供養をしていただけるよう、過剰な設備投資を抑え低価格に設定させていただいております。
            <br />ペット火葬は、犬さん・猫さん・うさぎさんはもちろん、小さな小鳥さんも対応可能です。※大型犬は２５ｋｇまで。</p>
          <section id="service-area">
            <h3>ペット火葬・葬儀サービス提供エリア</h3>
            <p>埼玉県（<a href="/kawagoe">川越市</a>・富士見市・三芳町・<a href="/niiza">新座市</a>・<a href="/shiki">志木市</a>・<a href="/asaka">朝霞市</a>・<a href="/tokorozawa">所沢市</a>・<a href="/sayama">狭山市</a>・<a href="/saitama">さいたま市</a>・入間市・ふじみ野市） ・ 東京都（清瀬市）
              <br />※立会いペット火葬のご送迎には対応しておりません。</p>
            <div className="detail-btn fee"><a className="hover" href="/price-guide">料金の詳細はこちら</a></div>
            <div className="detail-btn area"><a className="hover" href="/service-area">対応エリア詳細はこちら</a></div>
          </section>
        </div>
      </section>

      <section className="container">
        <div className="wrap">
          <h5 className="midasi"><span><img src="/images/icon/1.png" alt="営業お知らせアイコン" /></span>営業のお知らせ</h5>
          <div id="business-day">
            <section id="eigyo-cal">
              <TopCalender />
              <p className='teikyu_txt'>定休日</p>
            </section>
            <section id="business-info">
              <article>
              <p>営業案内・ご予約状況</p>
              
              <p>１２月９日（金）通常営業</p>
              
              <p>※今週の夜間ご対応日　12月6日・9日（火・金）となります。　19：30～　「個別火葬」１組様<br />
              ペットさんの大きさや当日の進行状況により、ご予約時間が30分程度前後する場合がございます。<br />
              また、当日、15時以降のご予約の場合、夜間の受付はできない場合がございます。<br />
              予めご了承下さいませ。<br />
              予定は、毎週日曜日の夜更新いたします。</p>
              
              <p>お問い合せ及び、ご予約につきまして、接客中や外出中など、一時的に電話に出れない場合がございます。<br />
              ご迷惑をおかけしますが、少し時間を空けてからおかけ直しくださいませ。</p>
              
              <p>※朝一番、７：００時は電話が重なり繋がりにくい事が多々ございます。</p>
              
              <p>※消費税の増税に伴い、令和元年10月1日より、増税分の料金改正をいたしました。</p>
              
              <p>※現在、お問い合わせメールを一時閉鎖しております。<br />
                再開までしばらくお待ちくださいませ。<br />
                ご迷惑をおかけしますが、何卒ご了承くださいませ。</p>
                
              </article>
              <section id="contact-information">
                <div id="contact-information-box">
                  <dl id="free-dial">
                    <div>
                      <dd className="ruby">みおくろう　にじのはし</dd>
                      <dt>0120-36-2484</dt>
                    </div>
                  </dl>
                  <dl id="mobile-php">
                    <dt>携帯・ＰＨＰの方は</dt>
                    <dd>049-292-0047</dd>
                  </dl>
                </div>
                <dl id="reception-time">
                  <dd>不定休・電話受付7:00～23:00&nbsp;&nbsp;※接客中、一時的に電話に出れない場合がございます。</dd>
                </dl>
                <div id="free-consultation">
                  <a className="hover" href="/contactus">お問い合わせは<br />こちら<img src="/images/arrow1.png" alt="お問い合わせ矢印" /></a>
                </div>
              </section>
              <section id="bikke">
                <div id="idp"><img src="/images/top/bikke.png" alt="猫のビッケの写真" /></div>
                <div id="introduction">
                  <h6><img src="/images/top/hbikke.png" alt="ペット火葬・葬儀「愛心ペットセレモニー埼玉」店長のご紹介" /></h6>
                  <p>施設店長猫の（ビッケ）です。癒しを担当しています。　がっ… たまにサボって遊びにイっちゃいます！</p>
                </div>
              </section>
            </section>
            <div className="both" />
          </div>
        </div>
      </section>

      <section className="container green">
          <div className="wrap">
            <h5 className="midasi"><span><img src="/images/icon/2.png" alt="ペット火葬・葬儀サービス案内犬のアイコン" /></span>ペット火葬・葬儀サービスのご案内</h5>
            <div className="flex-box">
              <section className="service-pake">
                <div><img src="/images/top/1.jpg" alt="ペット斎場火葬" /></div>
                <section>
                  <h2>ペット火葬・葬儀</h2>
                  <p>当施設（ペット火葬場）は、固定炉でのペット火葬を執り行っております。猫ちゃん及び、小型犬～大型犬までお立ち会いができます。</p>
                  <p><a className="hover" href="/guidance-business/">詳細はこちら</a></p>
                </section>
              </section>
              <section className="service-pake">
                <div><img src="/images/top/2.jpg" alt="ペット葬儀・ホームセレモニー" /></div>
                <section>
                  <h2>ホームセレモニー</h2>
                  <p>火葬後のご遺骨はどうなさっ ていますか？自宅向けのペット墓石を造りご供養されてはいかがでしょう。<br /><br /></p>
                  <p><a className="hover" href="/guidance-business/#mark2">詳細はこちら</a></p>
                </section>
              </section>
              <section className="service-pake">
                <div><img src="/images/top/3.jpg" alt="ペット納骨場" /></div>
                <section>
                  <h2>納骨サービス</h2>
                  <p>斎場に併設されたペット霊園の慰霊塔に納骨致します。合同納骨となりますが、毎日丁寧な供養を行います。<br /><br /></p>
                  <p><a className="hover" href="/price-guide/#mark2">詳細はこちら</a></p>
                </section>
              </section>
              <section className="service-pake">
                <div><img src="/images/top/4.jpg" alt="ペットの粉骨サービス" /></div>
                <section>
                  <h2>粉骨サービス</h2>
                  <p>愛するわが子を海や山・・または自宅の庭へ散骨してあげたい。温もりを感じさせる形に遺したいという方々へのサービスです。</p>
                  <p><a className="hover" href="/guidance-business/#mark4">詳細はこちら</a></p>
                </section>
              </section>
              <section className="service-pake">
                <div><img src="/images/top/5.jpg" alt="メモリアルジュエリー" /></div>
                <section>
                  <h2>メモリアルジュエリー</h2>
                  <p>メモリアルジュエリーは、大切なパートナーのお遺骨を樹脂で特殊加工し永遠の形見としてお持ちいただくオンリーワンジュエリー。<br /><span style={{color: '#f07020', fontSize: '85%'}}>制作をしばらく間お休みいたします。</span></p>
                  <p><a className="hover" href="http://ptns.jp/jewelry/index.html" target="_blank">詳細はこちら</a></p>
                </section>
              </section>
              <section className="service-pake">
                <div><img src="/images/top/6.jpg" alt="虹の橋ゆうびん館" /></div>
                <section>
                  <h2>虹の橋ゆうびん館（お手紙）</h2>
                  <p>「虹の橋のたもと」にいる大好きな子にお手紙を書いてみませんか？　2～3週間後、あの子から「写真入りオリジナルメッセージ」が届きます。<br /><span style={{color: '#f07020', fontSize: '92%', fontWeight: 'bold'}}>当施設にてご購入いただけます。</span></p>
                  <p><a className="hover" href="https://www.nijinohashi-yuubinkan.com/" target="_blank">詳細はこちら</a></p>
                </section>
              </section>
            </div>
          </div>
        </section>
        
        <section className="container">
          <div className="wrap dryice">
            <div className="dryice-inner">
              <div className="img">
                <img src="/images/top/dryice.jpg" alt="ドライアイスの写真" />
              </div>
              <div className="txt">
                <h2 className="midasi3"><span><img src="/images/icon/5.png" alt="ドライアイス店の紹介／雪のアイコン" /></span>ドライアイス店のご紹介</h2>
                <p>大事なペットさんをきれいな状態で送り出してあげるために必要なドライアイス。こちらではドライアイスを購入できるお店をいくつかご紹介したいと思います。</p>
                <div className="detail-btn area"><a className="hover" href="/dryice">詳細はこちら</a></div>
              </div>
            </div>
          </div>		
        </section>

        <section className="container t-box">
        <div className="wrap">
          <article id="topics">
            <div className="float-box">
              <section id="topics-header">
                <h2>トピックス</h2>
                <p><a href="https://www.aishin2484.jp/topics">&gt;&nbsp;一覧を見る</a></p><div className="both" />
              </section>
              <dl className="news">
                <dt>2022年7月6日</dt>
                <dd className="news-title"><a href="https://www.aishin2484.jp/tencommandments/">「犬の十戒」のお話</a></dd>
                <dd>
                  このお話はわんちゃんと暮らしている方であれば、知っている人も多いかもしれません。
                  「犬...</dd>
              </dl>
              <dl className="news">
                <dt>2022年7月6日</dt>
                <dd className="news-title"><a href="https://www.aishin2484.jp/rainbowbridge/">「虹の橋」のお話</a></dd>
                <dd>
                  「虹の橋」は大切なペットとのお別れを書いたもので、動物・ペットを愛する多くの人々の共感を呼び...</dd>
              </dl>
              <dl className="news">
                <dt>2022年6月15日</dt>
                <dd className="news-title"><a href="https://www.aishin2484.jp/%e3%83%9a%e3%83%83%e3%83%88%e3%81%a8%e3%81%8a%e5%88%a5%e3%82%8c%e3%81%ae%e9%9a%9b%e3%81%ab%e7%9f%a5%e3%81%a3%e3%81%a6%e3%81%8a%e3%81%8d%e3%81%9f%e3%81%84%e6%b3%95%e5%be%8b%e3%81%a8%e7%9f%a5%e8%ad%98/">ペットと心穏やかなお別れをするために知っ...</a></dd>
                <dd>
                  &nbsp;
                  わが仔が亡くなった時、どのような形でお見送りしようと思いますか？「うちの...</dd>
              </dl>
              <dl className="news">
                <dt>2021年12月29日</dt>
                <dd className="news-title"><a href="https://www.aishin2484.jp/%e7%b5%82%e6%b4%bb%e3%81%af%e3%80%81%e3%82%8f%e3%81%8c%e4%bb%94%ef%bc%88%e3%83%9a%e3%83%83%e3%83%88%ef%bc%89%e3%81%ab%e3%82%82%e5%a4%a7%e5%88%87%e3%81%a7%e3%81%99/">“終活”は、わが仔（ペット）にも大切です</a></dd>
                <dd>
                  &nbsp;
                  ペット葬儀に携わっていると、飼い主さんたちの悲しむ声をよく耳にします。
                  ...</dd>
              </dl>
              <dl className="news">
                <dt>2021年11月1日</dt>
                <dd className="news-title"><a href="https://www.aishin2484.jp/%e3%83%8d%e3%82%b3%e3%81%a1%e3%82%83%e3%82%93%e3%81%ae%e9%a1%94%e3%81%ae%e6%af%9b%e3%81%8c%e7%aa%81%e7%84%b6%e6%8a%9c%e3%81%91%e3%81%9f%e3%82%89/">ネコちゃんの顔の毛が突然抜けたら</a></dd>
                <dd>ネコちゃんの顔の毛が突然抜けたら
                  &nbsp;
                  ネコちゃんの顔周りの被毛に突然脱毛が見ら...</dd>
              </dl>
            </div>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="wrap">
          <article className="poem">
            <div className="poem-rb">
              <a href="/rainbowbridge">
                <img src="/images/top/RainbowBridge.jpg" alt="虹の橋のお話" />
              </a>
            </div>
            <div className="poem-tc">
              <a href="/tencommandments">
                <img src="/images/top/TenCommandments.jpg" alt="犬の十戒のお話" />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="container pink">
          <div className="wrap investigation">
            <h2 className="midasi2"><span><img src="/images/icon/4.png" alt="ばい煙測定調査アイコン" /></span>火葬炉の「ばい煙測定調査」実施</h2>
            <div><img src="/images/cremator.jpg" alt="ペットの火葬炉" /></div>
            <p>愛心ペットセレモニーでは、埼玉県の条例を遵守し、ペット火葬炉の「ばい煙測定調査」を年2回実施しています。<br />
              移動火葬車には環境測定の義務がないものの、固定火葬炉には義務付けられています。<br />
              ばい塵濃度は、埼玉県の規制基準の約34分の1、塩化水素濃度は50分の1と、もはや測定の意義すら考えさせられるほど埼玉県の環境基準を大幅にクリアしています。<br />
              測定費用は高額にかかるのですが、定期的な点検や安全に火葬炉を稼動させるための維持管理の一環でもありますし、何よりもご利用いただくお客様から安心してお任せいただけるようしっかりと条例を遵守し測定しておりますので、どうぞ安心してご利用下さい。
            </p>
            <a href="/images/investigation2022-11.pdf" target="_blank" rel="noopener noreferrer">最新測定調査証 （PDF）</a>
          </div>
        </section>
        <aside id="links">
          <ul className="wrap">            
            <li><a className="hover" href="https://www.petsatooyakai.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/footer/bunner_satooyakai.jpg" alt="NPO法人ペット里親会" /></a></li>
            <li><a className="hover" href="http://www.petsougi.net/" target="_blank" rel="noopener noreferrer">
                <img src="/images/footer/bunner_anshin.jpg" alt="ペット葬儀・霊園ネットの安心マーク" /></a></li>
            <li><a className="hover" href="http://www.pet-farewell.net/"target="_blank" rel="noopener noreferrer">
                <img src="/images/footer/bunner_sougimap.jpg" alt="ペット葬儀マップ"  /></a></li>
          </ul>
        </aside>

    </div>
    <Footer />
    </>
  )
}
