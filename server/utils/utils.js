const axios = require("axios");

const tokyoCinemaIds = [ '63599',
'63604',
'63610',
'63620',
'63618',
'63668',
'63671',
'63673',
'63690',
'63701',
'63702',
'63704',
'63723',
'63726',
'63747',
'63756',
'63794',
'63806',
'63837',
'63842',
'63844',
'63848',
'63849',
'63853',
'63873',
'63931',
'63962',
'63966',
'63963',
'63969',
'63967',
'63970',
'63973',
'63974',
'63977',
'63982',
'63983',
'63986',
'63987',
'63990',
'63988',
'63991',
'63992',
'63994',
'63996',
'63999',
'64000',
'64001',
'64002',
'64003',
'64006',
'64010',
'64013',
'64018',
'64056',
'64060',
'64076',
'64097',
'64100',
'64101' ];

// let newTokyoCinemaIds = [];
// axios.get('https://api.internationalshowtimes.com/v4/cinemas?apikey=GAkMyJIurI77ruqXZ6ex0EehzqxLk1N6')
// .then(response => response.data.cinemas.forEach(cinema => {
//   if (cinema.location.address.state === "Tokyo") {
//     newTokyoCinemaIds.push(cinema.id);
//   }
// }))
// .then(() => console.log(newTokyoCinemaIds));

// let newCinemaInfos = [];

// axios.get('https://api.internationalshowtimes.com/v4/cinemas?apikey=GAkMyJIurI77ruqXZ6ex0EehzqxLk1N6')
// .then(response => response.data.cinemas.forEach(cinema => {
//   if (tokyoCinemaIds.includes(cinema.id)) {
//     newCinemaInfos.push({
//       id: cinema.id,
//       name: cinema.name,
//       latitude: cinema.location.lat,
//       longitude: cinema.location.lon,
//       address: cinema.location.address.display_text
//     });
//   }
// }))
// .then(() => console.log(newCinemaInfos));


const cinemaInfos = [ { id: '63599',
name: 'MOVIX昭島',
latitude: 35.7151,
longitude: 139.363,
address: '東京都昭島市田中町573-1-1 モリタウン内' },
{ id: '63604',
name: 'MOVIX亀有',
latitude: 35.7645,
longitude: 139.853,
address: '東京都葛飾区亀有3-49-3 アリオ亀有 アリオモール3F' },
{ id: '63610',
name: 'MOVIX丸の内ピカデリー',
latitude: 35.6736,
longitude: 139.763,
address:
 '【丸の内ピカデリー１・2】東京都千代田区有楽町2-5-1 有楽町マリオン9F【丸の内ピカデリー3】東京都千代田区有楽町2-5-1 有楽町マリオン新館5F' },
{ id: '63620',
name: 'MOVIX東劇',
latitude: 35.6678,
longitude: 139.769,
address: '東京都中央区築地4-1-1 東劇ビル3F' },
{ id: '63618',
name: 'MOVIX新宿ピカデリー',
latitude: 35.6927,
longitude: 139.704,
address: '東京都新宿区新宿3丁目15番15号' },
{ id: '63668',
name: 'ＴＯＨＯシネマズ南大沢',
latitude: 35.6146,
longitude: 139.38,
address: ', 192-0364, Hachioji' },
{ id: '63671',
name: 'ＴＯＨＯシネマズ六本木ヒルズ',
latitude: 35.6597,
longitude: 139.73,
address: 'Unnamed Road, 106-0032, Minato' },
{ id: '63673',
name: 'ＴＯＨＯシネマズ府中',
latitude: 35.6714,
longitude: 139.481,
address: ', 183-0023, Fuchu' },
{ id: '63690',
name: 'ＴＯＨＯシネマズ錦糸町',
latitude: 35.701,
longitude: 139.816,
address: ', 130-0012, Sumida' },
{ id: '63701',
name: 'ＴＯＨＯシネマズ西新井',
latitude: 35.7746,
longitude: 139.786,
address: ', 123-0843, Adachi' },
{ id: '63702',
name: 'ＴＯＨＯシネマズシャンテ',
latitude: 35.6734,
longitude: 139.761,
address: 'Harumi Dori, 100-0006, Chiyoda' },
{ id: '63704',
name: 'ＴＯＨＯシネマズ渋谷',
latitude: 35.6591,
longitude: 139.699,
address: ', 150-0043, Shibuya' },
{ id: '63723',
name: 'ＴＯＨＯシネマズ日本橋',
latitude: 35.6869,
longitude: 139.775,
address: ', 103-0022, Chūō' },
{ id: '63726',
name: 'ＴＯＨＯシネマズ新宿',
latitude: 35.6954,
longitude: 139.702,
address: ', 160-0021, Shinjuku' },
{ id: '63747',
name: 'AEON Cinema - 日の出',
latitude: 35.734707,
longitude: 139.273903,
address: '東京都西多摩郡日の出町大字平井237番地3　イオンモール日の出3F' },
{ id: '63756',
name: 'AEON Cinema - 板橋',
latitude: 35.769979,
longitude: 139.660658,
address: '東京都板橋区徳丸2-6-1 イオン板橋ショッピングセンター5F' },
{ id: '63794',
name: 'AEON Cinema - 多摩センター',
latitude: 35.6229664,
longitude: 139.4261292,
address: '東京都多摩市落合1-45-2 丘の上パティオ2F' },
{ id: '63806',
name: 'AEON Cinema - むさし村山',
latitude: 35.7467457,
longitude: 139.3849914,
address: '東京都武蔵村山市榎1－1－3　イオンモールむさし村山3Ｆ' },
{ id: '63837',
name: 'アクアシティお台場 Coming soon',
latitude: 35.6278192,
longitude: 139.7735683,
address: '〒135-0091, 東京都港区台場1-7-1 アクアシティお台場 内' },
{ id: '63842',
name: 'としまえん',
latitude: 35.7423642,
longitude: 139.648541,
address: '〒176-0001, 東京都練馬区練馬4-15-20' },
{ id: '63844',
name: '豊洲',
latitude: 35.6558598,
longitude: 139.7925668,
address: '〒135-8614, 東京都江東区豊洲2-4-9, 三井ショッピングパーク アーバンドック ららぽーと豊洲 内' },
{ id: '63848',
name: 'YEBISU GARDEN CINEMA with UNITED CINEMAS',
latitude: 35.642145,
longitude: 139.713487,
address: '〒150-0013, 東京都渋谷区恵比寿4-20-2 恵比寿ガーデンプレイス 内' },
{ id: '63849',
name: '109 二子玉川',
latitude: 35.6111759,
longitude: 139.6299998,
address: '東京都世田谷区玉川1-14-1, 「二子玉川ライズ・ショッピングセンター・テラスマーケット」内' },
{ id: '63853',
name: '109 木場',
latitude: 35.666149,
longitude: 139.8042,
address: '東京都江東区木場1-5-30 イトーヨーカドー木場店 3階' },
{ id: '63873',
name: 'AEON Cinema - シアタス調布',
latitude: 35.6524623,
longitude: 139.5419677,
address: '東京都調布市小島町2-61-1 ﾄﾘｴ京王調布C館' },
{ id: '63931',
name: 'シネマート新宿',
latitude: 35.6918655,
longitude: 139.7057766,
address: '新宿区新宿3丁目13番3号 新宿文化ビル6Ｆ・7Ｆ' },
{ id: '63962',
name: '岩波ホール',
latitude: 35.6956,
longitude: 139.758,
address: '〒101-0051東京都千代田区神田神保町2-1 岩波神保町ビル10F' },
{ id: '63966',
name: '吉祥寺オデヲン',
latitude: 35.7065,
longitude: 139.58,
address: '〒180-0003東京都武蔵野市吉祥寺南町2-3-16' },
{ id: '63963',
name: '吉祥寺プラザ',
latitude: 35.7029,
longitude: 139.581,
address: '〒180-0004東京都武蔵野市吉祥寺本町1-11-19' },
{ id: '63969',
name: '飯田橋ギンレイホール',
latitude: 35.7013,
longitude: 139.743,
address: '〒162-0825東京都新宿区神楽坂2-19' },
{ id: '63967',
name: '楽天地シネマズ錦糸町',
latitude: 35.701,
longitude: 139.816,
address: '〒130-0022東京都墨田区江東橋4-27-14 楽天地ビル' },
{ id: '63970',
name: 'シネスイッチ銀座',
latitude: 35.6677,
longitude: 139.768,
address: '〒104-0061東京都中央区銀座4-4-5' },
{ id: '63973',
name: '下高井戸シネマ',
latitude: 35.6658,
longitude: 139.643,
address: '〒156-0043東京都世田谷区松原3-27-26' },
{ id: '63974',
name: 'シネマ・ワン',
latitude: 35.7005,
longitude: 139.414,
address: '〒190-0012東京都立川市曙町2-8-5' },
{ id: '63977',
name: '新宿武蔵野館',
latitude: 35.6953,
longitude: 139.702,
address: '〒160-0022東京都新宿区新宿3-27-10 武蔵野ビル3F' },
{ id: '63982',
name: 'ポレポレ東中野',
latitude: 35.7066,
longitude: 139.695,
address: '〒164-0003東京都中野区東中野4-4-1 ポレポレ坐ビルB1F' },
{ id: '63983',
name: 'ユーロスペース',
latitude: 35.6603,
longitude: 139.707,
address: '〒150-0044東京都渋谷区円山町1-5 KINOHAUS3F' },
{ id: '63986',
name: '目黒シネマ',
latitude: 35.6352,
longitude: 139.715,
address: '〒141-0021東京都品川区上大崎2-24-15' },
{ id: '63987',
name: 'ル・シネマ',
latitude: 35.6603,
longitude: 139.707,
address: '〒150-8507東京都渋谷区道玄坂2-24-1 Bunkamura6F' },
{ id: '63990',
name: 'ラピュタ阿佐ヶ谷',
latitude: 35.7059,
longitude: 139.635,
address: '〒166-0001東京都杉並区阿佐谷北2-12-21' },
{ id: '63988',
name: '早稲田松竹',
latitude: 35.7116,
longitude: 139.708,
address: '〒169-0075東京都新宿区高田馬場1-5-16' },
{ id: '63991',
name: '船堀シネパル',
latitude: 35.6844,
longitude: 139.864,
address: '〒134-0091東京都江戸川区船堀4-1-1 タワーホール船堀B1F' },
{ id: '63992',
name: 'K\'s cinema',
latitude: 35.6911,
longitude: 139.702,
address: '〒160-0022東京都新宿区新宿3-35-13 3F' },
{ id: '63994',
name: '新文芸坐',
latitude: 35.729,
longitude: 139.71,
address: '〒170-0013東京都豊島区東池袋1-43-5 マルハン池袋ビル3F' },
{ id: '63996',
name: 'アップリンク渋谷',
latitude: 35.6603,
longitude: 139.707,
address: '〒150-0042東京都渋谷区宇田川町37-18 トツネビル1・2F' },
{ id: '63999',
name: 'シネマヴェーラ渋谷',
latitude: 35.6603,
longitude: 139.707,
address: '〒150-0044東京都渋谷区円山町1-5 KINOHAUS4F' },
{ id: '64000',
name: 'シネマート新宿',
latitude: 35.6927,
longitude: 139.704,
address: '〒160-0022東京都新宿区新宿3-13-3 新宿文化ビル6・7F' },
{ id: '64001',
name: '新宿バルト9',
latitude: 35.6927,
longitude: 139.704,
address: '〒160-0022東京都新宿区新宿3-1-26 新宿三丁目イーストビル9F' },
{ id: '64002',
name: 'シネマ・ツー',
latitude: 35.7005,
longitude: 139.414,
address: '〒190-0012東京都立川市曙町2-42-26' },
{ id: '64003',
name: 'ユジク阿佐ヶ谷',
latitude: 35.7055,
longitude: 139.635,
address: '〒166-0001東京都杉並区阿佐ヶ谷北2-12-19 B1F' },
{ id: '64006',
name: '神保町シアター',
latitude: 35.6956,
longitude: 139.758,
address: '〒101-0051東京都千代田区神田神保町1-23 神保町シアタービルB1F' },
{ id: '64010',
name: 'CINEMA Chupki TABATA',
latitude: 35.7411,
longitude: 139.762,
address: '〒114-0013東京都北区東田端2-8-4 マウントサイドTABATA 1F' },
{ id: '64013',
name: '下北沢トリウッド',
latitude: 35.6589,
longitude: 139.668,
address: '〒155-0032東京都世田谷区代沢5-32-5-2F' },
{ id: '64018',
name: 'シネマブルースタジオ',
latitude: 35.7469,
longitude: 139.801,
address: '〒120-0034東京都足立区千住1-4-1 東京芸術センター2F' },
{ id: '64056',
name: '角川シネマ有楽町',
latitude: 35.6919,
longitude: 139.706,
address: '〒100-0006, 東京都千代田区有楽町1-11-1, 読売会館８階' },
{ id: '64060',
name: '角川シネマ新宿',
latitude: 35.6755,
longitude: 139.763,
address: '〒160-0022, 東京都新宿区新宿3-13-3, 新宿文化ビル4・5階' },
{ id: '64076',
name: 'Kinezo Ｔ・ジョイ PRINCE 品川',
latitude: 35.6276392,
longitude: 139.73652,
address: '東京都港区高輪4-10-30, 品川プリンスホテル, アネックスタワー3F' },
{ id: '64097',
name: 'ＴＯＨＯシネマズ上野',
latitude: 35.7068,
longitude: 139.773,
address: 'Chuo Dori, 110-0005, Taitō' },
{ id: '64100',
name: 'ＴＯＨＯシネマズ日比谷',
latitude: 35.6733,
longitude: 139.759,
address: ', 100-0006, Chiyoda' },
{ id: '64101',
name: 'Cinema Rosa',
latitude: 35.7325279,
longitude: 139.7093304,
address: '〒171-0021 東京都豊島区西池袋1-37-12' } ];

//change to API call, instead of static data
const currentlyShowingMovies = [
  "Frozen",
  "Terminator: Dark Fate",
  "Angel Has Fallen",
  "Weathering with You",
  "Maleficent: Mistress of Evil",
  "Listen to the Universe",
  "One Night",
  "Her Blue Sky",
  "He Won't Kill, She Won't Die",
  "Way To Find The Best Life",
  "Joker",
  "Hit Me Anyone One More Time",
  "Star☆Twinkle Precure: Hoshi no Uta ni Omoi wo Komete",
  "Matinee",
  "The First Supper",
  "Immortal Hero",
  "Hell Girl",
  "Saekano: How to Raise a Boring Girlfriend Movie",
  "Re:Zero kara Hajimeru Isekai Seikatsu: Hyouketsu no Kizuna",
  "The Journalist",
  "Zombieland: Double Tap",
  "Reon",
  "Brightburn",
  "It Chapter Two",
  "Yesterday",
  "Gemini Man",
  "At Eternity's Gate",
  "Ossan's Love: Love or Dead",
  "Re-Elected",
  "Kusama : Infinity",
  "Promare",
  "Bel Canto",
  "Hotel Mumbai",
  "Greta",
  "Once Upon a Time... in Hollywood",
  "Thelma & Louise: The Last Journey",
  "Bang Dream! Film Live",
  "The Promised Land",
  "Bring Me Home",
  "Hello World",
  "Kaguya-sama: Love Is War",
  "Little Miss Period",
  "The Truth",
  "Closed Ward",
  "T-Guardians",
  "Born Bone Born",
  "A Long Goodbye",
  "No Smoking",
  "El Angel",
  "Melancholic",
  "Little Nights, Little Love",
  "From Miyamoto To You",
  "Happy Death Day",
  "Mad Max: Fury Road",
  "Become the King",
  "Dilili in Paris",
  "My Father, the Bride",
  "The Kid with a Bike",
  "The Greatest Showman",
  "Bohemian Rhapsody",
  "3 Faces",
  "Height of the Wave",
  "Verdict",
  "Wet Season"
 ];

 //change to the following API call, instead of static data
 //  axios.get("https://api.internationalshowtimes.com/v4/movies?apikey=GAkMyJIurI77ruqXZ6ex0EehzqxLk1N6")
//  .then(response => currentlyShowingMovies.forEach(title => {
//    const currentMovie = response.data.movies.filter(movie => movie.title === title);
//    const id = currentMovie[0].id;
//    currentlyShowingMoviesAndIds.push({ id, title })
//  }))
//  .then(() => console.log(currentlyShowingMoviesAndIds));

 const currentlyShowingMoviesAndIds = [ { id: '3808', title: 'Frozen' },
 { id: '20966', title: 'Terminator: Dark Fate' },
 { id: '52975', title: 'Angel Has Fallen' },
 { id: '53434', title: 'Weathering with You' },
 { id: '56369', title: 'Maleficent: Mistress of Evil' },
 { id: '56869', title: 'Listen to the Universe' },
 { id: '57992', title: 'One Night' },
 { id: '61226', title: 'Her Blue Sky' },
 { id: '61360', title: 'He Won\'t Kill, She Won\'t Die' },
 { id: '61854', title: 'Way To Find The Best Life' },
 { id: '62772', title: 'Joker' },
 { id: '63994', title: 'Hit Me Anyone One More Time' },
 { id: '64391',
   title: 'Star☆Twinkle Precure: Hoshi no Uta ni Omoi wo Komete' },
 { id: '64529', title: 'Matinee' },
 { id: '64530', title: 'The First Supper' },
 { id: '65198', title: 'Immortal Hero' },
 { id: '51802', title: 'Hell Girl' },
 { id: '62527',
   title: 'Saekano: How to Raise a Boring Girlfriend Movie' },
 { id: '64991',
   title: 'Re:Zero kara Hajimeru Isekai Seikatsu: Hyouketsu no Kizuna' },
 { id: '60468', title: 'The Journalist' },
 { id: '21059', title: 'Zombieland: Double Tap' },
 { id: '44121', title: 'Reon' },
 { id: '47156', title: 'Brightburn' },
 { id: '49593', title: 'It Chapter Two' },
 { id: '50069', title: 'Yesterday' },
 { id: '62003', title: 'Gemini Man' },
 { id: '46016', title: 'At Eternity\'s Gate' },
 { id: '61500', title: 'Ossan\'s Love: Love or Dead' },
 { id: '60809', title: 'Re-Elected' },
 { id: '39621', title: 'Kusama : Infinity' },
 { id: '54177', title: 'Promare' },
 { id: '48694', title: 'Bel Canto' },
 { id: '34912', title: 'Hotel Mumbai' },
 { id: '40278', title: 'Greta' },
 { id: '58406', title: 'Once Upon a Time... in Hollywood' },
 { id: '3258', title: 'Thelma & Louise: The Last Journey' },
 { id: '60804', title: 'Bang Dream! Film Live' },
 { id: '61832', title: 'The Promised Land' },
 { id: '42749', title: 'Bring Me Home' },
 { id: '59412', title: 'Hello World' },
 { id: '61570', title: 'Kaguya-sama: Love Is War' },
 { id: '63784', title: 'Little Miss Period' },
 { id: '57802', title: 'The Truth' },
 { id: '55917', title: 'Closed Ward' },
 { id: '61270', title: 'T-Guardians' },
 { id: '46905', title: 'Born Bone Born' },
 { id: '55071', title: 'A Long Goodbye' },
 { id: '8862', title: 'No Smoking' },
 { id: '42694', title: 'El Angel' },
 { id: '62103', title: 'Melancholic' },
 { id: '60657', title: 'Little Nights, Little Love' },
 { id: '63421', title: 'From Miyamoto To You' },
 { id: '31628', title: 'Happy Death Day' },
 { id: '12084', title: 'Mad Max: Fury Road' },
 { id: '62050', title: 'Become the King' },
 { id: '36648', title: 'Dilili in Paris' },
 { id: '57772', title: 'My Father, the Bride' },
 { id: '18118', title: 'The Kid with a Bike' },
 { id: '12252', title: 'The Greatest Showman' },
 { id: '40013', title: 'Bohemian Rhapsody' },
 { id: '44573', title: '3 Faces' },
 { id: '58797', title: 'Height of the Wave' },
 { id: '61754', title: 'Verdict' },
 { id: '62819', title: 'Wet Season' } ];

const getMovieIdByTitle = (title) => {
  const searchedMovie = currentlyShowingMoviesAndIds.find(movie => movie.title.toLowerCase() === title.toLowerCase());
  return searchedMovie.id;
}


const getShowtimeDataByTitle = (title) => {
  const movieId = getMovieIdByTitle(title);
  let showtimeInfo = [];
  const showtimes = axios.get(`https://api.internationalshowtimes.com/v4/showtimes?movie_id=${movieId}&location=35.6762,139.6503&distance=30&apikey=GAkMyJIurI77ruqXZ6ex0EehzqxLk1N6`)
  .then(response => response.data.showtimes.filter(showtime => tokyoCinemaIds.includes(showtime.cinema_id)))
  .then(showtimesArr => showtimesArr.forEach(showtimeObj => {
    const currentCinema = cinemaInfos.find(cinema => cinema.id === showtimeObj.cinema_id);
    //if there is no cinema info for this cinema yet
    if (!showtimeInfo.find(showtime => showtime[0] === currentCinema.name)) {
      showtimeInfo.push([
        currentCinema.name,
        {
          movie: title,
          name: currentCinema.name,
          latitude: currentCinema.latitude,
          longitude: currentCinema.longitude,
          address: currentCinema.address,
          showtimes: [showtimeObj.start_at]
        }
      ]);
    } else {
      //if there is already this cinema obj, just add the showtime
      let showtimeToAddTime = showtimeInfo.find(showtime => showtime[0] === currentCinema.name);
      const index = showtimeInfo.indexOf(showtimeToAddTime);
      showtimeToAddTime[1].showtimes.push(showtimeObj.start_at);
      showtimeInfo[index] = showtimeToAddTime;
    }
  }))
  .then(() => showtimeInfo);
  return showtimes;
}

module.exports = { getShowtimeDataByTitle };



