//#region  宣言部

// テーブルと列の定義
let table;
let pierrerow; // フルメタルハガーが存在する行
let captainrow; // ゴーヴァが存在する行
const index_map = 0; // 場所
const index_target = 1; // 対象
const index_type = 2; // 種別
const index_object = 3; // 内容
const index_bonus = 4; // ボーナス
const index_getexp = 5; // 取得exp
const index_principal = 6; // 主人公
const index_fellow1 = 7; // 仲間1
const index_fellow2 = 8; // 仲間2
const index_lucre = 9; // ルク
const index_sumlucre = 10; // ルク総額
const index_exp = 11; // exp
const index_sumexppri = 12; // exp計主人公
const index_sumexpfel1 = 13; // exp計仲間１
const index_sumexpfel2 = 14; // exp計仲間２

// 別途excelマクロで出力した列データ
const list_map = ['仲間1加入後', '滝の洞窟1', '', '', '', '', '', '', '', '', 'ｳｪﾝﾃﾞﾙ', '', '', '滝の洞窟2', '', '', '', '', 'ｼﾞｬﾄﾞ1', '', '', '', '', '', '', 'ﾏｲｱ', '', '', '黄金の街道1', '', '', '', '', '', '大地の裂け目1', '', '', '', '黄金の街道2', '', '', '', '', '', '大地の裂け目2', 'ﾄﾞﾜｰﾌの村', '', 'ﾄﾞﾜｰﾌのﾄﾝﾈﾙ', '', '', '', '', '', '', '', '', '', '', '大地の裂け目3', '黄金の街道3', '', '', '', '', '', 'ﾓｰﾙﾍﾞｱの高原', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'ﾌｫﾙｾﾅ', '', '', '', '', '', '', '', '', '', '黄金の街道4', '', '', '', '', '', '', '', '', '', '', 'ﾊﾞｲｾﾞﾙ', '', '', 'ﾊﾟﾛ1', '', '', '天かける道1', '', '', '', '', '', '', 'ｱﾏｿﾞﾈｽｱｼﾞﾄ', '', 'ﾌﾞﾗｯｸﾏｰｹｯﾄ', '', '', 'ﾗﾋﾞの森1', '', '', '', '', '', '', 'ﾗﾋﾞの森2', '', '', '', '', '', '', 'ｼﾞｬﾄﾞ2', 'ﾊﾟﾛ2', '天かける道2', '', '', '', '', '', '風の回廊1', '', '', '', '', '', '', '', '', '', '', '', '', '', '天かける道3', '', '', 'ﾛｰﾗﾝﾄ', '', '', '', '', '', '', '', '', '', '', '', '天かける道4', '', '', '風の回廊2', '', '', '', '', '', '天かける道5', '', '', '', '幽霊船', '', '', '', '火山島ﾌﾞｯｶ', 'ﾀﾞｰｸﾌﾟﾘｰｽﾄの村', '', '岸辺の洞窟', '', 'ｻﾙﾀﾝ', '灼熱の砂漠1', '', '', '', '火炎の谷1', '灼熱の砂漠2', '', '', '零下の雪原', '', '', 'ﾐﾝﾄｽ', '', '', '', '月夜の森', '月読の塔1', 'ﾗﾝﾌﾟ花の森1', 'ﾃﾞｨｵｰﾙ', 'ﾗﾝﾌﾟ花の森2', 'ﾅﾊﾞｰﾙ', '', '火炎の谷2', '', '', '', 'ﾁｷｼﾞｮｾ1', '光の古代遺跡', '', '', 'ﾜﾝﾀﾞｰの樹海', '', '', '宝石の谷ﾄﾞﾘｱﾝ', '', '', 'ﾁｷｼﾞｮｾ2', '月読の塔2', '', '氷壁の迷宮', '', '風の回廊3', 'ﾍﾟﾀﾞﾝ', '暗闇の洞窟', '', 'ﾀﾞｰｸｷｬｯｽﾙ', '', '', ''];
const list_object = ['', '40ﾙｸ', 'ﾊﾞｯﾄﾑ<br>ﾗﾋﾞ*2', '30ﾙｸ', 'ﾏｲｺﾆﾄﾞ*2', '8ﾙｸ', 'ﾏｲｺﾆﾄﾞ*2', 'ﾊﾞｯﾄﾑ*4', '10ﾙｸ', 'ﾊﾞｯﾄﾑ<br>ﾏｲｺﾆﾄﾞ<br>ｺﾞﾌﾞﾘﾝ', '20ﾙｸ', '80ﾙｸ', '買い物', 'ﾊﾞｯﾄﾑ<br>ﾏｲｺﾆﾄﾞ<br>ｺﾞﾌﾞﾘﾝ', 'ﾏｲｺﾆﾄﾞ*2', 'ﾏｲｺﾆﾄﾞ*2', '14ﾙｸ', 'ﾌﾙﾒﾀﾙﾊｶﾞｰ', 'ﾊﾞｳﾝﾄﾞｳﾙﾌ*2', 'ﾊﾞｳﾝﾄﾞｳﾙﾌ*3', 'ﾊﾞｳﾝﾄﾞｳﾙﾌ*4', '500ﾙｸ', 'ﾊﾞｳﾝﾄﾞｳﾙﾌ*5', '14ﾙｸ', 'ﾊﾞｳﾝﾄﾞｳﾙﾌ*5', '20ﾙｸ', '買い物', '30ﾙｸ', 'ｺﾞﾌﾞﾘﾝ<br>ﾗﾋﾞ', 'ﾎﾟﾛﾝ*3<br>ﾗﾋﾞ*2', 'ﾎﾟﾛﾝ*2', 'ｱｻｼﾝﾊﾞｸﾞ<br>ﾗﾋﾞ<br>ﾎﾟﾛﾝ', '17ﾙｸ', 'ｱｻｼﾝﾊﾞｸﾞ<br>ﾗﾋﾞ*2<br>ﾎﾟﾛﾝ', '20ﾙｸ', 'ｺﾞﾌﾞﾘﾝ<br>ﾗﾋﾞ*2', '30ﾙｸ', 'ﾏｼﾝｺﾞｰﾚﾑR', 'ｺﾞﾌﾞﾘﾝ<br>ﾗﾋﾞ', 'ﾎﾟﾛﾝ*3<br>ﾗﾋﾞ*2', 'ﾎﾟﾛﾝ*2', 'ﾊﾞｯﾄﾑ<br>ﾗﾋﾞ<br>ﾎﾟﾛﾝ', 'ｿﾞﾝﾋﾞ*3', 'ｿﾞﾝﾋﾞ*2<br>ﾊﾞｯﾄﾑ<br>ﾎﾟﾛﾝ', 'ｺﾞﾌﾞﾘﾝ<br>ﾗﾋﾞ*2', '20ﾙｸ', '買い物', 'ﾊﾞｯﾄﾑ*3', 'ﾓｰﾙﾍﾞｱ*2<br>ﾊﾞｯﾄﾑ', 'ｽﾗｲﾑ*2', 'ｽﾗｲﾑ*2<br>ﾊﾞｯﾄﾑ', 'ﾓｰﾙﾍﾞｱ*2', 'ｽﾗｲﾑ*2', '40ﾙｸ', 'ｺﾞﾌﾞﾘﾝ*2<br>ﾓｰﾙﾍﾞｱ', '40ﾙｸ', 'ｺﾞﾌﾞﾘﾝﾛｰﾄﾞ*2<br>ﾊﾞｯﾄﾑ*3', 'ｼﾞｭｴﾙｲｰﾀｰ', 'ｺﾞﾌﾞﾘﾝ<br>ﾗﾋﾞ*2', 'ｿﾞﾝﾋﾞ*2<br>ﾊﾞｯﾄﾑ<br>ﾎﾟﾛﾝ', 'ｿﾞﾝﾋﾞ*3', 'ﾊﾞｯﾄﾑ<br>ﾗﾋﾞ<br>ﾎﾟﾛﾝ', 'ﾎﾟﾛﾝ*2', 'ﾎﾟﾛﾝ*3<br>ﾗﾋﾞ*2', 'ｺﾞﾌﾞﾘﾝ<br>ﾗﾋﾞ', 'ﾓｰﾙﾍﾞｱ*3', '30ﾙｸ', 'ﾓｰﾙﾍﾞｱ*2<br>ﾊﾞｯﾄﾑ*2', 'ﾓｰﾙﾍﾞｱ*3', 'ﾓｰﾙﾍﾞｱ*2<br>ﾊﾞｯﾄﾑ*2', 'ﾓｰﾙﾍﾞｱ*3<br>ﾊﾞｯﾄﾑ', 'ﾓｰﾙﾍﾞｱﾌﾟﾘｽﾞﾝ', 'ﾓｰﾙﾍﾞｱ*2', 'ﾓｰﾙﾍﾞｱ*2', '40ﾙｸ', 'ｺﾞﾌﾞﾘﾝﾛｰﾄﾞ*2<br>ﾓｰﾙﾍﾞｱ', 'ﾓｰﾙﾍﾞｱ*2<br>ﾊﾞｯﾄﾑ', 'ﾓｰﾙﾍﾞｱ*2', 'ｺﾞﾌﾞﾘﾝﾛｰﾄﾞ*3<br>ﾊﾞｯﾄﾑ', '800ﾙｸ', 'ﾓｰﾙﾍﾞｱ*2<br>ﾊﾞｯﾄﾑ', 'ﾓｰﾙﾍﾞｱ*3', 'ﾓｰﾙﾍﾞｱ*2', 'ﾓｰﾙﾍﾞｱ*3<br>ﾊﾞｯﾄﾑ', 'ﾗﾋﾞ*2<br>ﾊﾞｯﾄﾑ', 'ﾗﾋﾞ*3<br>ﾊﾞｯﾄﾑ', 'ﾏｼﾝｺﾞｰﾚﾑ*2', 'ﾏｼﾞｼｬﾝ*2', 'ﾏｼﾞｼｬﾝ*2', 'ﾏｼﾝｺﾞｰﾚﾑ*4<br>ﾏｼﾞｼｬﾝ', 'ﾕﾆｺｰﾝﾍｯﾄﾞ*2<br>ﾏｼﾞｼｬﾝ*2', '400ﾙｸ', 'ﾕﾆｺｰﾝﾍｯﾄﾞ*2', 'ﾕﾆｺｰﾝﾍｯﾄﾞ<br>ﾏｼﾞｼｬﾝ', '170ﾙｸ', 'ﾏｼﾝｺﾞｰﾚﾑ*4<br>ﾏｼﾞｼｬﾝ', 'ｺﾞﾌﾞﾘﾝ<br>ﾗﾋﾞ', 'ﾎﾟﾛﾝ*3<br>ﾗﾋﾞ*2', 'ﾎﾟﾛﾝ*2', 'ﾊﾞｯﾄﾑ<br>ﾗﾋﾞ<br>ﾎﾟﾛﾝ', 'ｿﾞﾝﾋﾞ*3', 'ｿﾞﾝﾋﾞ*2<br>ﾊﾞｯﾄﾑ<br>ﾎﾟﾛﾝ', '400ﾙｸ', 'ﾊﾞｯﾄﾑ*2<br>ﾎﾟﾛﾝ*2<br>ｺﾞﾌﾞﾘﾝ', 'ｿﾞﾝﾋﾞ*4', 'ｱｻｼﾝﾊﾞｸﾞ*2<br>ﾎﾟﾛﾝ*2', '30ﾙｸ', '60ﾙｸ', '60ﾙｸ', 'ﾊﾞｲｾﾞﾙ→ﾊﾟﾛ', '買い物', '60ﾙｸ', '60ﾙｸ', '20ﾙｸ', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ*2', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ*2<br>ﾊｰﾋﾟｰ', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ*2<br>ｱｰﾏｰﾅｲﾄ', '60ﾙｸ', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ*4', 'ﾊｰﾋﾟｰ*2<br>ｱｰﾏｰﾅｲﾄ<br>ﾁﾋﾞﾃﾞﾋﾞﾙ', '60ﾙｸ', '440ﾙｸ', '買い物', '500ﾙｸ', 'ﾊﾞｲｾﾞﾙ→ｼﾞｬﾄﾞ', 'ﾗﾋﾞ*2<br>ﾗﾋﾞﾘｵﾝ', 'ﾗﾋﾞ*2<br>ﾗﾋﾞﾘｵﾝ', 'ｱｻｼﾝﾊﾞｸﾞ*2<br>ﾗﾋﾞﾘｵﾝ', 'ｱｻｼﾝﾊﾞｸﾞ<br>ﾗﾋﾞﾘｵﾝ<br>ﾗﾋﾞ', 'ﾗﾋﾞﾘｵﾝ*3<br>ﾏｲｺﾆﾄﾞ', 'ｱｻｼﾝﾊﾞｸﾞ*2<br>ﾗﾋﾞﾘｵﾝ*2', 'ｱｻｼﾝﾊﾞｸﾞ<br>ﾗﾋﾞﾘｵﾝ*2', 'ｱｻｼﾝﾊﾞｸﾞ<br>ﾗﾋﾞﾘｵﾝ*2', 'ｱｻｼﾝﾊﾞｸﾞ*2<br>ﾗﾋﾞﾘｵﾝ*2', 'ﾗﾋﾞﾘｵﾝ*3<br>ﾏｲｺﾆﾄﾞ', 'ｱｻｼﾝﾊﾞｸﾞ<br>ﾗﾋﾞﾘｵﾝ<br>ﾗﾋﾞ', 'ｱｻｼﾝﾊﾞｸﾞ*2<br>ﾗﾋﾞﾘｵﾝ', 'ﾗﾋﾞ*2<br>ﾗﾋﾞﾘｵﾝ', 'ﾗﾋﾞ*2<br>ﾗﾋﾞﾘｵﾝ', 'ｼﾞｬﾄﾞ→ﾊﾟﾛ', '買い物', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ*2', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ*2<br>ﾊｰﾋﾟｰ', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ*2<br>ｱｰﾏｰﾅｲﾄ', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ*4', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ*2<br>ﾊｰﾋﾟｰ', 'ﾁﾋﾞﾃﾞﾋﾞﾙ*2<br>ｱｰﾏｰﾅｲﾄ', 'ｿﾞﾝﾋﾞ*4<br>ﾊｰﾋﾟｰ', '40ﾙｸ', 'ｿﾞﾝﾋﾞ*3<br>ﾁﾋﾞﾃﾞﾋﾞﾙ', '80ﾙｸ', '80ﾙｸ', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ<br>ﾁﾋﾞﾃﾞﾋﾞﾙ<br>ﾊｰﾋﾟｰ', 'ｱｰﾏｰﾅｲﾄ', 'ｿﾞﾝﾋﾞ*2', '80ﾙｸ', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ*2<br>ｿﾞﾝﾋﾞ', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ*2<br>ｱｰﾏｰﾅｲﾄ*2', 'ﾁﾋﾞﾃﾞﾋﾞﾙ*2', 'ｸﾗｽ2ﾚﾍﾞﾘﾝｸﾞ', 'ﾂｪﾝｶｰ', 'ﾁﾋﾞﾃﾞﾋﾞﾙ*2<br>ｱｰﾏｰﾅｲﾄ', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ*2<br>ﾊｰﾋﾟｰ', 'ﾊｰﾋﾟｰ*2<br>ｱｰﾏｰﾅｲﾄ<br>ﾁﾋﾞﾃﾞﾋﾞﾙ', 'ﾆﾝｼﾞｬ*2', 'ﾁﾋﾞﾃﾞﾋﾞﾙ*2<br>ｲﾋﾞﾙｿｰﾄﾞ', 'ﾆﾝｼﾞｬ', 'ｲﾋﾞﾙｿｰﾄﾞ*2<br>ｱｰﾏｰﾅｲﾄ', '180ﾙｸ', 'ｱｰﾏｰﾅｲﾄ*2<br>ﾁﾋﾞﾃﾞﾋﾞﾙ*2', '480ﾙｸ', 'ｲﾋﾞﾙｿｰﾄﾞ*2<br>ﾆﾝｼﾞｬ', 'ﾆﾝｼﾞｬ*2<br>ﾁﾋﾞﾃﾞﾋﾞﾙ', 'ﾆﾝｼﾞｬ*3', 'ｼﾞｪﾉｱ', 'ﾋﾞﾙとﾍﾞﾝ', 'ｿﾞﾝﾋﾞ*4', 'ｱｰﾏｰﾅｲﾄ*2', 'ﾁﾋﾞﾃﾞﾋﾞﾙ*2<br>ｱｰﾏｰﾅｲﾄ', 'ｿﾞﾝﾋﾞ*4<br>ﾊｰﾋﾟｰ', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ<br>ﾁﾋﾞﾃﾞﾋﾞﾙ<br>ﾊｰﾋﾟｰ', 'ｱｰﾏｰﾅｲﾄ', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ*3', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ*2<br>ｱｰﾏｰﾅｲﾄ*2', 'ﾁﾋﾞﾃﾞﾋﾞﾙ*2', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ*2<br>ﾊｰﾋﾟｰ', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ*4', '360ﾙｸ', 'ﾆｰﾄﾞﾙﾊﾞｰﾄﾞ*2', 'ｸﾞｰﾙ<br>ｿﾞﾝﾋﾞ*2', '666ﾙｸ', '444ﾙｸ', 'ｺﾞｰｳﾞｧ', '160ﾙｸ', '800ﾙｸ', '170ﾙｸ', '104ﾙｸ', '1200ﾙｸ', '買い物', '200ﾙｸ', '170ﾙｸ', '200ﾙｸ', 'ﾋﾞﾙとﾍﾞﾝとﾎﾞﾌﾞ', '180ﾙｸ', '300ﾙｸ', '270ﾙｸ', '1100ﾙｸ', '1500ﾙｸ', '180ﾙｸ', 'ﾏｼﾝｺﾞｰﾚﾑS', '240ﾙｸ', '150ﾙｸ', '970ﾙｸ', '買い物', '240ﾙｸ', '獣人ﾙｶﾞｰ', 'ﾎﾟﾛﾋﾞﾝﾌｯﾄﾞ*2<br>ﾚﾃﾞｨﾋﾞｰ*2', '買い物', 'ｷﾞﾙﾀﾞｰﾊﾞｲﾝ', '6000ﾙｸ', 'ｸﾗｽ3ﾚﾍﾞﾘﾝｸﾞ', '2200ﾙｸ', '800ﾙｸ', '500ﾙｸ', 'ｻﾞﾝ･ﾋﾞｴ', '買い物', '2500ﾙｸ', '4000ﾙｸ', 'ﾗｲﾄｹﾞｲｻﾞｰ', '3400ﾙｸ', '1200ﾙｸ', 'ﾐｽﾎﾟﾙﾑ', '3200ﾙｸ', '2700ﾙｸ', 'ﾗﾝﾄﾞｱﾝﾊﾞｰ', '買い物', 'ﾂｸﾖﾐﾙｸ', 'ﾄﾞﾗﾝ', '1500ﾙｸ', 'ﾌｨｰｸﾞﾑﾝﾄﾞ', 'ﾀﾞﾝｶﾞｰﾄﾞ', '買い物', 'ｾﾞｰﾌﾞﾙ･ﾌｧｰ', '邪眼の伯爵', 'ﾌﾙﾒﾀﾙﾊｶﾞｰⅡ', 'ｼﾞｪﾉｱⅡ', 'ﾂｪﾝｶｰⅡ', '美獣'];
const list_type = ['', 'ルク', '雑魚', 'ルク', '雑魚', 'ルク', '雑魚', '雑魚', 'ルク', '雑魚', 'ルク', 'ルク', '支出', '雑魚', '雑魚', '雑魚', 'ルク', 'ボス', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', 'ルク', '雑魚', 'ルク', '支出', 'ルク', '雑魚', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', 'ルク', '雑魚', 'ルク', 'ボス', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ルク', '支出', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', 'ルク', '雑魚', 'ボス', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', '雑魚', '雑魚', '雑魚', '育成', '雑魚', '雑魚', 'ルク', '雑魚', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', '雑魚', 'ルク', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', '雑魚', '雑魚', 'ルク', 'ルク', 'ルク', '支出', '支出', 'ルク', 'ルク', 'ルク', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', '雑魚', 'ルク', 'ルク', '支出', 'ルク', '支出', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '支出', '支出', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', 'ルク', 'ルク', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', '雑魚', '雑魚', '育成', 'ボス', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', 'ルク', '雑魚', '雑魚', '雑魚', 'ボス', 'ボス', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', '強制', 'ルク', 'ルク', 'ボス', 'ルク', 'ルク', 'ルク', 'ルク', 'ルク', '支出', 'ルク', 'ルク', 'ルク', 'ボス', 'ルク', 'ルク', 'ルク', 'ルク', 'ルク', 'ルク', 'ボス', 'ルク', 'ルク', 'ルク', '支出', 'ルク', 'ボス', '強制', '支出', 'ボス', 'ルク', '育成', 'ルク', 'ルク', 'ルク', 'ボス', '支出', 'ルク', 'ルク', 'ボス', 'ルク', 'ルク', 'ボス', 'ルク', 'ルク', 'ボス', '支出', 'ルク', 'ボス', 'ルク', 'ボス', 'ボス', '支出', 'ボス', 'ボス', 'ボス', 'ボス', 'ボス', 'ボス'];
const list_exp = ['0', '0', '29', '0', '24', '0', '24', '44', '0', '37', '0', '0', '0', '37', '24', '24', '0', '1200', '40', '60', '80', '0', '100', '0', '100', '0', '0', '0', '70', '179', '82', '103', '0', '131', '0', '98', '0', '3000', '70', '179', '82', '105', '123', '159', '98', '0', '0', '123', '129', '90', '131', '88', '90', '0', '144', '0', '227', '3200', '98', '159', '123', '105', '82', '179', '70', '141', '0', '182', '141', '182', '185', '0', '94', '96', '0', '156', '141', '96', '207', '0', '144', '147', '98', '193', '122', '160', '119', '108', '108', '293', '226', '0', '116', '115', '0', '297', '70', '179', '82', '105', '123', '159', '0', '196', '164', '150', '0', '0', '0', '0', '0', '0', '0', '0', '116', '174', '176', '0', '232', '233', '0', '0', '0', '0', '0', '127', '127', '137', '132', '186', '184', '139', '139', '184', '186', '132', '137', '127', '127', '0', '0', '116', '174', '176', '232', '177', '177', '309', '0', '246', '0', '0', '182', '64', '124', '0', '184', '250', '120', '0', '7000', '177', '177', '233', '150', '225', '77', '230', '0', '324', '0', '231', '224', '231', '4000', '5000', '236', '126', '177', '309', '182', '64', '192', '250', '120', '177', '232', '0', '116', '287', '0', '0', '5400', '0', '0', '0', '0', '0', '0', '0', '0', '0', '7800', '0', '0', '0', '0', '0', '0', '6900', '0', '0', '0', '0', '0', '10000', '662', '0', '12000', '0', '0', '0', '0', '0', '21000', '0', '0', '0', '25000', '0', '0', '20000', '0', '0', '13000', '0', '0', '20000', '0', '18000', '19000', '0', '25000', '29000', '33000', '38500', '36000', '42000'];
const list_lucre = ['4', '40', '19', '30', '14', '8', '14', '28', '10', '22', '20', '80', '0', '22', '14', '14', '14', '210', '16', '24', '32', '500', '40', '14', '40', '20', '0', '30', '22', '57', '26', '33', '17', '42', '20', '31', '30', '220', '22', '57', '26', '33', '39', '50', '31', '20', '0', '45', '47', '32', '47', '36', '32', '40', '50', '40', '79', '480', '31', '50', '39', '33', '26', '57', '22', '66', '30', '84', '66', '84', '86', '0', '44', '44', '40', '70', '65', '44', '93', '800', '65', '66', '44', '86', '57', '75', '50', '46', '46', '124', '94', '400', '48', '48', '170', '124', '22', '57', '26', '33', '39', '50', '400', '61', '52', '48', '30', '60', '60', '150', '0', '60', '60', '20', '50', '75', '75', '60', '100', '101', '60', '440', '0', '500', '270', '68', '68', '78', '73', '110', '106', '81', '81', '106', '110', '73', '78', '68', '68', '210', '0', '50', '75', '75', '100', '75', '81', '173', '40', '137', '80', '80', '98', '34', '70', '80', '101', '134', '64', '0', '990', '81', '75', '101', '80', '118', '41', '125', '180', '176', '480', '125', '118', '123', '1200', '2800', '108', '56', '81', '173', '98', '34', '99', '134', '64', '75', '100', '360', '50', '140', '666', '444', '3290', '160', '800', '170', '104', '1200', '0', '200', '170', '200', '2160', '180', '300', '270', '1100', '1500', '180', '6300', '240', '150', '970', '0', '240', '5570', '370', '0', '2730', '6000', '0', '2200', '800', '500', '4200', '0', '2500', '4000', '3200', '3400', '1200', '3800', '3200', '2700', '9300', '0', '2943', '3900', '1500', '5500', '5000', '0', '6480', '8640', '6930', '9240', '8100', '10400'];

// レベル表、固定値
const list_level = [0, 30, 123, 359, 822, 1924, 3220, 4712, 6406, 8307, 10421, 12755, 15315, 18111, 21149, 24440, 27992, 31816, 35923, 40324, 45031, 50057, 55480, 61183, 67247, 73685, 80515, 87751, 95411, 103512, 112072, 121110, 130644, 140696, 151284, 162431, 174157, 186485, 199438, 213039, 227312, 242282, 257974, 274413, 291627, 309641, 328485, 348185, 368771, 390272, 412718, 436140, 460568, 486036, 512574, 540217, 568997, 598949, 630108, 662509, 707537, 754448, 803296, 854138, 907033, 962038, 1019214, 1078620, 1140317, 1204368, 1270836, 1339784, 1411277, 1485382, 1562164, 1641692, 1724033, 1809256, 1897433, 1988634, 2082931, 2180398, 2281107, 2385133, 2492553, 2603442, 2717879, 2835941, 2957707, 3083258, 3212675, 3346039, 3483433, 3624942, 3770649, 3920641, 4075003, 4233822, 4397188];

//#endregion

document.addEventListener('DOMContentLoaded', () => {
  // テーブル項目の動的生成
  table = document.getElementById("sumexptbl");
  for (let i = 0; i < list_exp.length; i++) {
    // 行の追加
    let tr = table.insertRow();
    tr.id = "tr_" + i;
    tr.style.backgroundColor = "#ffffff";

    // 行内の項目追加
    // 場所
    let map = tr.insertCell();
    map.innerHTML = list_map[i];
    map.id = "map_" + i;
    // 対象
    let target = tr.insertCell();
    target.innerHTML = '<input type="checkbox" id="target_' + i + '" onChange="calc(this.id)" checked="true">';
    // 種別
    let type = tr.insertCell();
    type.innerHTML = list_type[i];
    type.id = "type_" + i;
    // 内容
    let object = tr.insertCell();
    object.innerHTML = list_object[i];
    object.id = "object_" + i;
    // ボーナス
    let bonus = tr.insertCell();
    bonus.innerHTML = '<input type="number" class="num" id="bonus_' + i + '" value=0 min=0 max=40 step=5 onChange="calc(this.id)">';
    bonus.firstChild.hidden = true;
    // 取得exp
    let getexp = tr.insertCell();
    getexp.innerHTML = '<input type="number" class="num" id="getexp_' + i + '" value=' + list_exp[i] + ' min=0 max=99999 step=100 onChange="calc(this.id)" disabled>';
    getexp.firstChild.hidden = true;
    // 主人公
    let principal = tr.insertCell();
    principal.id = "principal_" + i;
    // 仲間１
    let fellow1 = tr.insertCell();
    fellow1.id = "fellow1_" + i;
    // 仲間２
    let fellow2 = tr.insertCell();
    fellow2.id = "fellow2_" + i;
    // 取得ルク
    let getlucre = tr.insertCell();
    getlucre.innerHTML = '<input type="number" class="num" id="getlucre_' + i + '" value=' + list_lucre[i] + ' min=0 max=99999 step=10 onChange="calc(this.id)" disabled>';
    // ルク計
    let sumlucre = tr.insertCell();
    // 経験値
    let exp = tr.insertCell();
    exp.innerHTML = list_exp[i];
    exp.hidden = true;
    // exp計主人公
    let sumexppri = tr.insertCell();
    sumexppri.hidden = true;
    // exp計仲間１
    let sumexpfel1 = tr.insertCell();
    sumexpfel1.hidden = true;
    // exp計仲間２
    let sumexpfel2 = tr.insertCell();
    sumexpfel2.hidden = true;

    // 種別に応じた制御
    let objexp = document.getElementById("getexp_" + i);
    let objlucre = document.getElementById("getlucre_" + i);

    switch (list_type[i]) {
      // 雑魚
      case "雑魚":
        type.innerHTML = '<img src="rabi.png">';
        bonus.firstChild.hidden = false;
        getexp.firstChild.hidden = false;
        tr.name = "zako";
        break;
      // ルク行表示
      case "ルク":
        type.innerHTML = '<img src="lucre.png">';
        tr.name = "lucre";
        break;
      // 買物行表示
      case "支出":
        type.innerHTML = '<img src="nikita.png">';
        getlucre.firstChild.style.color = "#dc143c";
        objlucre.disabled = false;
        target.firstChild.hidden = true;
        break;
      // ボス行表示
      case "ボス":
        type.innerHTML = '<img src="gova.png">';
        bonus.firstChild.hidden = false;
        getexp.firstChild.hidden = false;
        break;
      case "強制":
        type.innerHTML = '<img src="rabi.png">';
        type.style.backgroundColor = "#ffae00";
        bonus.firstChild.hidden = false;
        getexp.firstChild.hidden = false;
        break;
      // モールベアプリズン行表示
      case "育成":
        type.style.backgroundColor = "#ffff00";
        objexp.disabled = false;
        objlucre.disabled = false;
        getexp.firstChild.hidden = false;
        break;
      default:
        target.firstChild.hidden = true;
    }
    // 1行目だけ手動で設定
    if (i == 0) {
      principal.innerHTML = "Lv :1<br>tNL:30";
      fellow1.innerHTML = "Lv :4<br>tNL:463";
      fellow2.innerHTML = "<div style='background-color : #a9a9a9;'>Lv :6<br>tNL:1296";
      sumlucre.innerHTML = 4;
      sumexpfel1.innerHTML = 359;
      sumexpfel2.innerHTML = 1924;
    }
    // フルメタルハガーとゴーヴァは行番号を保持
    if (object.textContent == "ﾌﾙﾒﾀﾙﾊｶﾞｰ") {
      pierrerow = i + 1;
    } else if (object.textContent == "ｺﾞｰｳﾞｧ") {
      captainrow = i + 1;
    }
  }
  // デフォルトで一括チェックを外す処理
  // ついでにメイン計算も呼び出されてる
  zakocheck();
  lucrecheck();
});

// メイン計算部分
function calc(elementid) {
  // 入力されたコントロールを取得
  element = document.getElementById(elementid);
  // コントロールを保持しているデータ行を取得
  tr = element.parentNode.parentNode;
  // テーブルから上記のデータ行を取得
  for (let i = 2; i < table.rows.length; i++) {
    // 編集行の経験値計算し直し
    if (table.rows[i].id == tr.id) {
      // モールベアプリズンの場合再計算をキャンセル
      if (table.rows[i].cells[index_type].textContent != "育成") {
        table.rows[i].cells[index_getexp].firstChild.value
          = Math.floor(Number(table.rows[i].cells[index_exp].textContent)
            * Number(1 + (table.rows[i].cells[index_bonus].firstChild.value) / 100));
      }
    }
    // 経験値とルクの集計
    // 直上の値をコピー
    let sumlucre = table.rows[i - 1].cells[index_sumlucre].textContent;
    let exppri = Number(table.rows[i - 1].cells[index_sumexppri].textContent);
    let expfel1 = Number(table.rows[i - 1].cells[index_sumexpfel1].textContent);
    let expfel2 = Number(table.rows[i - 1].cells[index_sumexpfel2].textContent);

    // 先頭行がチェック状態なら加算
    if (table.rows[i].cells[index_target].firstChild.checked) {
      // ルク計算
      // 支出タイプの時はルクを減算
      if (list_type[i - 1] == "支出") {
        sumlucre = Number(sumlucre) - Number(table.rows[i].cells[index_lucre].firstChild.value);
      } else {
        sumlucre = Number(sumlucre) + Number(table.rows[i].cells[index_lucre].firstChild.value);
      }
      // 経験値再計算
      exppri = exppri + Number(table.rows[i].cells[index_getexp].firstChild.value);
      expfel1 = expfel1 + Number(table.rows[i].cells[index_getexp].firstChild.value);
      // 仲間2はジャド以降から計算
      if (i > pierrerow) {
        expfel2 = expfel2 + Number(table.rows[i].cells[index_getexp].firstChild.value);
      }

      // ゴーヴァの生贄分を減算
      if (i == captainrow) {
        if (document.getElementById("sacrifice_part_1").checked) {
          exppri = exppri - Number(table.rows[captainrow].cells[index_getexp].firstChild.value);
        } else if (document.getElementById("sacrifice_part_2").checked) {
          expfel1 = expfel1 - Number(table.rows[captainrow].cells[index_getexp].firstChild.value);
        } else if (document.getElementById("sacrifice_part_3").checked) {
          expfel2 = expfel2 - Number(table.rows[captainrow].cells[index_getexp].firstChild.value);
        }
      }
    }
    // 集計結果を反映
    table.rows[i].cells[index_sumlucre].textContent = sumlucre;
    table.rows[i].cells[index_sumexppri].textContent = exppri;
    table.rows[i].cells[index_sumexpfel1].textContent = expfel1;
    table.rows[i].cells[index_sumexpfel2].textContent = expfel2;
  }
  // 集計値を基にレベルとtNLを計算
  levelcalc();
}

// 雑魚敵一括チェック用
function zakocheck() {
  for (i = 1; i < table.rows.length; i++) {
    if (table.rows[i].name == "zako") {
      if (document.getElementById("zakocheckbox").checked) {
        table.rows[i].cells[index_target].firstChild.checked = true;
      } else {
        table.rows[i].cells[index_target].firstChild.checked = false;
      }
    }
  }
  calc("sumexptbl");
}

// ルク一括チェック用
function lucrecheck() {
  for (i = 1; i < table.rows.length; i++) {
    if (table.rows[i].name == "lucre") {
      if (document.getElementById("lucrecheckbox").checked) {
        table.rows[i].cells[index_target].firstChild.checked = true;
      } else {
        table.rows[i].cells[index_target].firstChild.checked = false;
      }
    }
  }
  calc("sumexptbl");
}

// レベル計算
function levelcalc() {
  // 2行目から計算
  for (i = 2; i < table.rows.length; i++) {
    for (j = 0; j < 3; j++) {
      let exp = table.rows[i].cells[index_sumexppri + j].textContent;
      let k = 0;
      while (exp >= Number(list_level[k])) {
        let lv = "Lv :" + Number(k + 1);
        let tnl = Number(list_level[k + 1]) - exp;
        table.rows[i].cells[index_principal + j].innerHTML = lv + "<br>tNL:" + tnl;
        k++;
      }
      // レベルアップ時はセルの色を変更
      if (table.rows[i].cells[index_principal + j].textContent.substring(0, 6)
        != table.rows[i - 1].cells[index_principal + j].textContent.substring(0, 6)) {
        table.rows[i].cells[index_principal + j].style.backgroundColor = "#ffff00";
      } else {
        table.rows[i].cells[index_principal + j].style.backgroundColor = "#ffffff";
      }
      // ジャドまでは仲間2はグレー表示
      if (i <= pierrerow) {
        table.rows[i].cells[index_fellow2].style.backgroundColor = "#a9a9a9";
      }
    }
  }
}