import React from 'react';
import './section.css';
import TitlebarImageList from '../TitlebarImageList';
import CustomizedTimeline from "../CustomizedTimeline"



export default function ScrollSection() {
  return (
    <>
      {/* このサイトについて */}
      <section className="scroll-section" id="about-site">
        <h1 className="title">~ About This Page ~</h1>
        <p id="about-this-site">
          ここは、私のポートフォリオサイトです。<br/>
          大学生活の中で、得た経験や実績に関してまとめました。<br/>
          私のことを少しでも知っていただけたら幸いです。
        </p>
      </section>

      {/* 自己紹介 */}
      <section className="scroll-section offset" id="about-me">
        <h1 className="title" style={{ color: '#000000' }}>~ About Me ~</h1>
        
        <div className="profile">
          <img src="/icon.png" alt="プロフィール写真" className="profile-photo" />
          <p style={{ fontSize: '1.4rem' }}>
            氏名：稲川 聖七（Seina Inagawa）<br/>
            趣味：御朱印集め、観劇、プログラミング<br/>
            関心：Webアプリケーション・ロボット
          </p>
        </div>
        <hr/>
        <h2>自己紹介</h2>
          茨城県出身で、昔からロボットやSF映画が大好きでした。<br/>
          コロナの影響で留学の計画が無くなって、たどり着いたのがプログラミング。<br/>
          生活や社会全体をより良くするようなサービス・製品を開発したくて、積極的にハッカソンやサークル活動に励んでいます。<br/>



      </section>
      
      {/* これまでにやってきたこと */}
      <section className="scroll-section" id="work">
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TitlebarImageList />
        </div>
      </section>
      {/* <CustomizedTimeline/> */}
      
    </>
  );
}
