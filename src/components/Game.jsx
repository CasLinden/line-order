import PickedStations from "/src/components/PickedStations";
import AvailableStations from "/src/components/AvailableStations";

function Game() {
  const yamanoteStationsJP =['東京', '神田', '秋葉原', '御徒町', '上野', '鶯谷', '日暮里', '西日暮里', '田端', '駒込', '巣鴨', '大塚', '池袋', '目白', '高田馬場', '新大久保', '新宿', '代々木', '原宿', '渋谷', '恵比寿', '目黒', '五反田', '大崎', '品川', '高輪ゲートウェイ', '田町', '浜松町', '新橋', '有楽町']
  const yamanoteStations = ['Tokyo', 'Kanda', 'Akihabara', 'Okachimachi', 'Ueno', 'Uguisudani', 'Nippori', 'Nishi-Nippori', 'Tabata', 'Komagome', 'Sugamo', 'Ōtsuka', 'Ikebukuro', 'Mejiro', 'Takadanobaba', 'Shin-Ōkubo', 'Shinjuku', 'Yoyogi', 'Harajuku', 'Shibuya', 'Ebisu', 'Meguro', 'Gotanda', 'Ōsaki', 'Shinagawa', 'Takanawa Gateway', 'Tamachi', 'Hamamatsuchō', 'Shimbashi', 'Yūrakuchō']
  const yamanoteStationsCN = ['东京', '神田', '秋叶原', '御徒町', '上野', '鸟谷', '日暮里', '西日暮里', '田端', '駒込', '巣鸭', '大冢', '池袋', '目白', '高田马场', '新大久保', '新宿', '代代木', '原宿', '涩谷', '惠比寿', '目黑', '五反田', '大崎', '品川', '高轮Gateway', '田町', '滨松町', '新桥', '有乐町']
  const yamanoteStationsKR = ['도쿄', '칸다', '아키하바라', '오카치마치', '우에노', '우기스다니', '니포리', '니시니포리', '타바타', '코마고메', '스가모', '오쓰카', '이케부쿠로', '메지로', '타카다노바바', '신오쿠보', '신주쿠', '요요기', '하라주쿠', '시부야', '에비스', '메구로', '고탄다', '오사키', '시나가와', '타카나와 게이트웨이', '타마치', '하마마츠쵸', '신바시', '유라쵸']
  const yamanoteStationsHiragana = ['とうきょう', 'かんだ', 'あきはばら', 'おかちまち', 'うえの', 'うぎすだに', 'にっぽり', 'にしないぽり', 'たばた', 'こまごめ', 'すがも', 'おつか', 'いけぶくろ', 'めじろ', 'たかだのばば', 'しんおおくぼ', 'しんじゅく', 'よよぎ', 'はらじゅく', 'しぶや', 'えびす', 'めぐろ', 'ごたんだ', 'おさき', 'しながわ', 'たかなわゲートウェイ', 'たまち', 'はままつちょ', 'しんばし', 'ゆうらちょ']

  return (
    <>
      <PickedStations />
      <AvailableStations />
    </>
)
}

export default Game;
