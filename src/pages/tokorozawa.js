import React from 'react'

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PageInfo from '../components/PageInfo';
import PageTop from '../components/PageTop';
import Layout from '../components/Layout';

const pagemeta = {
    subTitle:`所沢市`,
    slug:`tokorozawa`
}

export default function tokorozawa() {
  return (
    <>
        <Seo
        title={pagemeta.subTitle}
        description="所沢市にお住まいの方へ、ペット火葬について愛心ペットセレモニーからのご提案です。"
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
            <div className="headline">
            <h2>所沢市にお住まいの方へ愛心ペットセレモニー埼玉からのご提案です</h2>
            </div>{/*.headline-*/}
            <div className="texts clearfix">
            <div className="text text__city">
            <p>当施設は、ふじみ野市の西側に位置し、<strong>所沢市</strong>からのアクセスはとても良い場所です。中富からは約１０分、航空公園からも約２０分でアクセスのできるくらいの距離です。</p>
            <p>所沢市内にもペット霊園が数箇所ございますが、お住まいの地域によっては愛心ペットセレモニーが最寄りの施設になるかと思います。愛心ペットセレモニー埼玉は、小規模な施設なのですが、リーズナブルな価格にて立会い火葬をご利用いただいております。</p>
            <p>遺骨のお持ち帰りを希望されない方にはペット専用共同墓地へのご納骨もできますし、一度ご自宅に連れて帰り、後日ご納骨することも可能ですので、お客様のご要望に合わせたプランでご火葬をお選びいただけます。</p>
            <p>また、お車の手配が困難な方や、ご高齢で施設までお越しいただけない方にはペットさんのご送迎サービス（一任火葬のみ）も行っていますのでお気軽にお申し付け下さい。<span className="yellowLine">所沢市内にお住まいであれば、交通費も無料（一任火葬の場合）</span>となっていますので、ご利用いただきやすいかと思います。</p>
            <p>火葬できるペットさんは、小さな小鳥さんから大型犬（３０ｋｇ）までご火葬が可能です。</p>
            <p>また、ワンちゃん・猫ちゃん以外のペットさんの火葬も可能ですので、ご不明な点はご相談下さい。</p>
            </div>
            </div>
            <div className="headline">
            <h2>ペット火葬は大きく分けて３つのプラン</h2>
            </div>{/*.headline-*/}
            <div className="table clearfix">
            <div className="table-list">
            <dl className="label">
            <dt>立会い個別火葬</dt>
            <dd>ご家族様で火葬の立会いを行っていただけます。<br />火葬後にご返骨いたします。</dd>
            </dl>
            <dl className="label">
            <dt>個別一任火葬</dt>
            <dd>お迎えからご返骨までをスタッフに一任していただきます。<br />お迎えにあがり、火葬を行った後、再度ご返骨におうかがいします。<br />24時間以内のご返骨と48時間以内のご返骨のプランがございます。</dd>
            </dl>
            <dl className="label">
            <dt>お引き取り個別火葬</dt>
            <dd>お迎えにあがり火葬いたします。<br />火葬後は共同墓地へご納骨いたします。</dd>
            </dl>
            <dl className="label">
            <dt>お引き取り合同火葬</dt>
            <dd>お迎えにあがり、仲間のペットさん達と一緒に火葬いたします。<br />火葬後、共同墓地へご納骨いたします。</dd>
            </dl>
            </div>
            </div>
            <h3>料金表</h3>
            <table>
            <caption>斎場火葬料金</caption>
            <tbody><tr>
            <td colSpan={2} />
            <th className="red">立会い火葬<br />（お持込の場合）</th>
            <th className="red">個別一任火葬<br />「24ｈ返骨」</th>
            <th className="red">個別一任火葬<br />「48ｈ返骨」</th>
            </tr>
            <tr>
            <th>ハムスター・小鳥・フェレットなど </th>
            <td className="green">～500g</td>
            <td>18,000 円<br />税込19,800 円</td>
            <td>18,000 円<br />税込19,800 円</td>
            <td>17,000 円<br />税込18,700 円</td>
            </tr>
            <tr>
            <th rowSpan={2}>猫・小型犬・うさぎ　など</th>
            <td className="green">～3kg</td>
            <td>23,000 円<br />税込25,300 円</td>
            <td>23,000 円<br />税込25,300 円</td>
            <td>20,000 円<br />税込22,000 円</td>
            </tr>
            <tr>
            <td className="green">～5kg</td>
            <td>25,000 円<br />税込27,500 円</td>
            <td>25,000 円<br />税込27,500 円</td>
            <td>22,000 円<br />税込24,200 円</td>
            </tr>
            <tr>
            <th rowSpan={2}>シュナウザー・パグ・中型犬など</th>
            <td className="green">～7kg</td>
            <td>27,000 円<br />税込29,700 円</td>
            <td>27,000 円<br />税込29,700 円</td>
            <td>24,000 円<br />税込26,400 円</td>
            </tr>
            <tr>
            <td className="green">～10kg</td>
            <td>29,000 円<br />税込31,900 円</td>
            <td>29,000 円<br />税込31,900 円</td>
            <td>26,000 円<br />税込28,600 円</td>
            </tr>
            <tr>
            <th rowSpan={2}>柴犬・ビーグル・コーギーなど</th>
            <td className="green">～12kg</td>
            <td>31,000 円<br />税込34,100 円</td>
            <td>31,000 円<br />税込34,100 円</td>
            <td>28,000 円<br />税込30,800 円</td>
            </tr>
            <tr>
            <td className="green">～15kg</td>
            <td>33,000 円<br />税込36,300 円</td>
            <td>33,000 円<br />税込36,300 円</td>
            <td>30,000 円<br />税込33,000 円</td>
            </tr>
            <tr>
            <th rowSpan={6}>ボーダーコリー・ゴールデンレトリバーなど</th>
            <td className="green">～17kg</td>
            <td>35,000 円<br />税込38,500 円</td>
            <td>35,000 円<br />税込38,500 円</td>
            <td>32,000 円<br />税込35,200 円</td>
            </tr>
            <tr>
            <td className="green">～20kg</td>
            <td>37,000 円<br />税込40,700 円</td>
            <td>37,000 円<br />税込40,700 円</td>
            <td>34,000 円<br />税込37,400 円</td>
            </tr>
            <tr>
            <td className="green">～22kg</td>
            <td>39,000 円<br />税込42,900 円</td>
            <td>39,000 円<br />税込42,900 円</td>
            <td>36,000 円<br />税込39,600 円</td>
            </tr>
            <tr>
            <td className="green">～25kg</td>
            <td>41,000 円<br />税込45,100 円</td>
            <td>41,000 円<br />税込45,100 円</td>
            <td>38,000 円<br />税込41,800 円</td>
            </tr>
            <tr>
            <td className="green">～27kg</td>
            <td>43,000 円<br />税込47,300 円</td>
            <td>43,000 円<br />税込47,300 円</td>
            <td>40,000 円<br />税込44,000 円</td>
            </tr>
            <tr>
            <td className="green">～30kg</td>
            <td>45,000 円<br />税込49,500 円</td>
            <td>45,000 円<br />税込49,500 円</td>
            <td>42,000 円<br />税込46,200 円</td>
            </tr>
            <tr>
            <th className="text1">※料金はペットの種類ではなく、ペットの体重で決まります。</th>
            <th className="text1" colSpan={2}>ペットさんのお迎え（10ｋｍ圏内まで）の場合、火葬料金に3,000円が加算されます。</th>
            <th className="text1" colSpan={2}>※一任火葬でお持込の方、2千円お引きします 。</th>
            </tr>
            </tbody></table>
            <table>
            <caption>お引取り火葬料金</caption>
            <tbody><tr>
            <td />
            <th colSpan={2} className="red">個別火葬（納骨含）</th>
            <th colSpan={2} className="red">合同火葬（納骨含）</th>
            </tr>
            <tr>
            <th rowSpan={3}>猫・小型犬・うさぎ など</th>
            <td className="green">～500g</td>
            <td>16,000 円<br />税込17,600 円</td>
            <td className="green">～1kg</td>
            <td>12,000 円<br />税込13,200 円</td>
            </tr>
            <tr>
            <td className="green">～3kg</td>
            <td>19,000 円<br />税込20,900 円</td>
            <td className="green">～3kg</td>
            <td>15,000 円<br />税込16,500 円</td>
            </tr>
            <tr>
            <td className="green">～5kg</td>
            <td>21,000 円<br />税込23,100 円</td>
            <td className="green">～5kg</td>
            <td>17,000 円<br />税込18,700 円</td>
            </tr>
            <tr>
            <th rowSpan={2}>シュナウザー・パグ・中型犬など</th>
            <td className="green">～7kg</td>
            <td>23,000 円<br />税込25,300 円</td>
            <td colSpan={2} />
            </tr>
            <tr>
            <td className="green">～10kg</td>
            <td>25,000 円<br />税込27,500 円</td>
            <td colSpan={2} />
            </tr>
            <tr>
            <th rowSpan={2}>柴犬・ビーグル・コーギーなど</th>
            <td className="green">～12kg</td>
            <td>27,000 円<br />税込29,700 円</td>
            <td colSpan={2} />
            </tr>
            <tr>
            <td className="green">～15kg</td>
            <td>29,000 円<br />税込31,900 円</td>
            <td colSpan={2} />
            </tr>
            <tr>
            <th rowSpan={6}>ボーダーコリー・ゴールデンレトリバーなど</th>
            <td className="green">～17kg</td>
            <td>31,000 円<br />税込34,100 円</td>
            <td colSpan={2} />
            </tr>
            <tr>
            <td className="green">～20kg</td>
            <td>33,000 円<br />税込36,300 円</td>
            <td colSpan={2} />
            </tr>
            <tr>
            <td className="green">～22kg</td>
            <td>35,000 円<br />税込38,500 円</td>
            <td colSpan={2} />
            </tr>
            <tr>
            <td className="green">～25kg</td>
            <td>37,000 円<br />税込40,700 円</td>
            <td colSpan={2} />
            </tr>
            <tr>
            <td className="green">～27kg</td>
            <td>39,000 円<br />税込42,900 円</td>
            <td colSpan={2} />
            </tr>
            <tr>
            <td className="green">～30kg</td>
            <td>41,000 円<br />税込45,100 円</td>
            <td colSpan={2} />
            </tr>
            <tr>
            <th className="text1">※料金は、ペットの 種類ではなく、ペットの体重で決まります。</th>
            <th className="text1" colSpan={4} />
            </tr>
            </tbody>
            </table>
            </div>

        </Layout>
      
    </>
  )
}
