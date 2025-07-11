import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';


//　略歴（未実装）
export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate"style={{background:"#243a75"}}>
      <h1>略歴</h1>
      {/* 入学 */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          2023年4月
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 , color:"white"}}>
          <Typography variant="h6" component="span">
            東京工科大学入学
          </Typography>
          <Typography>ChatGPTが発表された影響でAIに関心を持つ</Typography>
        </TimelineContent>
      </TimelineItem>
      
      {/* 夏 */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          2023年7月
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 , color:"white"}}>
          <Typography variant="h6" component="span">
            初のハッカソン
          </Typography>
          <Typography>友人に誘われたハッカソンで、
            Pythonを用いてゲームを作成
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* 冬（インターンシップ関連） */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          2024年2-3月
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 , color:"white"}}>
          <Typography variant="h6" component="span">
            ベトナムのインターンシップに参加
          </Typography>
          <Typography>現地の企業で3週間のインターンシップに参加
            スクラム開発を学ぶ
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* ２年夏 */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          2024年8月
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 , color:"white"}}>
          <Typography variant="h6" component="span">
            HackUに参加
          </Typography>
          <Typography>物体検出を活用して
            子供の見守りアプリを開
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* ロボット道場 */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          2024年9月 - 2025-4月
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 , color:"white"}}>
          <Typography variant="h6" component="span">
            Robot Cupに向けた開発がスタート
          </Typography>
          <Typography>
            ロボットにおける認識機構のコーディングを担当
          </Typography>
        </TimelineContent>
      </TimelineItem>


    </Timeline>
  );
}