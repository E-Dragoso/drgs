//#region  宣言部

// テーブルと列の定義
let table;
const index_target = 0;
const index_object = 1;
const index_type = 2;
const index_exp = 3;
const index_cookie = 4;
const index_nodmg = 5;
const index_other = 6;
const index_getexp = 7;
const index_sumexp = 8;
const index_level = 9;
const index_lucre = 10;
const index_sumlucre = 11;

// テーブルに格納するためのデータ、別途excelマクロで出力
const list_object = ['アストリア<br>（10ルク-宿代6ルク）', '30ルク', 'バットム<br>ラビ × 2', '40ルク', '8ルク', 'バットム × 4', '10ルク', '20ルク', '80ルク', 'ウェンデル', '17ルク', 'フルメタルハガー', 'バウンドウルフ × 2', 'バウンドウルフ × 3', 'バウンドウルフ × 5', 'バウンドウルフ × 5', 'マイア', 'ゴブリン<br>ラビ', 'ポロン × 3<br>ラビ × 2', 'ポロン × 2', 'アサシンバグ<br>ラビ<br>ポロン', '17ルク', 'アサシンバグ<br>ラビ × 2<br>ポロン', '20ルク', 'ゴブリン<br>ラビ × 2', '30ルク', 'マシンゴーレムR', 'ゴブリン<br>ラビ', 'ポロン × 3<br>ラビ × 2', 'ポロン × 2', 'バットム<br>ラビ<br>ポロン', 'ゾンビ × 3', 'ゾンビ × 2<br>バットム<br>ポロン', 'ゴブリン<br>ラビ × 2', 'ドワーフの村', 'バットム × 3', 'モールベア × 2<br>バットム', 'スライム × 2', 'スライム × 2<br>バットム', 'モールベア × 2', 'スライム × 2', '40ルク', 'ゴブリン × 2<br>モールベア', '40ルク', 'ホブゴブリン × 2<br>バットム × 3', 'ジュエルイーター', 'ゴブリン<br>ラビ × 2', 'ゾンビ × 2<br>バットム<br>ポロン', 'ゾンビ × 3', 'バットム<br>ラビ<br>ポロン', 'ポロン × 2', 'ポロン × 3<br>ラビ × 2', 'ゴブリン<br>ラビ', 'モールベア × 3', '30ルク', 'モールベア × 2<br>バットム × 2', 'モールベア × 3', 'モールベア × 2<br>バットム × 2', 'モールベア × 3<br>バットム', 'モールベアプリズン<br>ｽｷﾅﾀﾞｹﾚﾍﾞﾙｱｹﾞｼﾃ', 'モールベア × 2', 'モールベア × 2', '40ルク', 'ホブゴブリン × 2<br>モールベア', 'モールベア × 2<br>バットム', 'モールベア × 2', 'モールベア × 2<br>バットム', 'モールベア × 3', 'モールベア × 2', 'モールベア × 3<br>バットム', 'ラビ × 2<br>バットム', 'ラビ × 3<br>バットム', 'マシンゴーレム × 2', 'マジシャン × 2', 'マジシャン × 2', 'マシンゴーレム × 4<br>マジシャン', 'ユニコーンヘッド × 2<br>マジシャン × 2', '400ルク', 'ユニコーンヘッド × 2', 'ユニコーンヘッド<br>マジシャン', '170ルク', 'マシンゴーレム × 4<br>マジシャン', 'ゴブリン<br>ラビ', 'ポロン × 3<br>ラビ × 2', 'ポロン × 2', 'アサシンバグ<br>ラビ<br>ポロン', 'バットム<br>ラビ<br>ポロン', 'ゾンビ × 3', 'アサシンバグ<br>ラビ × 2<br>ポロン', 'ゾンビ × 2<br>バットム<br>ポロン', '400ルク', 'アサシンバグ × 2<br>ポロン × 2<br>ゴブリン', 'バットム × 2<br>ポロン × 2<br>ゴブリン', 'ゾンビ × 4', 'アサシンバグ × 2<br>ポロン × 2', 'バットム × 2<br>ポロン × 2', '30ルク', '60ルク', '60ルク', 'バイゼル→パロ', 'パロ', '20ルク', 'ニードルバード × 2', 'ニードルバード × 2<br>ハーピー', 'ニードルバード × 2<br>アーマーナイト', '60ルク', 'ニードルバード × 4', 'ハーピー × 2<br>アーマーナイト<br>チビデビル', '60ルク', '440ルク', '500ルク', 'バイゼル', 'バイゼル→ジャド', 'ラビ × 2<br>ラビリオン', 'ラビ × 2<br>ラビリオン', 'アサシンバグ × 2<br>ラビリオン', 'アサシンバグ<br>ラビリオン<br>ラビ', 'ラビリオン × 3<br>マイコニド', 'アサシンバグ × 2<br>ラビリオン × 2', 'アサシンバグ<br>ラビリオン × 3', 'アサシンバグ<br>ラビリオン × 3', 'アサシンバグ × 2<br>ラビリオン × 2', 'ラビリオン × 3<br>マイコニド', 'アサシンバグ<br>ラビリオン<br>ラビ', 'アサシンバグ × 2<br>ラビリオン', 'ラビ × 2<br>ラビリオン', 'ラビ × 2<br>ラビリオン', 'ジャド→パロ', 'ニードルバード × 2', 'ニードルバード × 2<br>ハーピー', 'ニードルバード × 2<br>アーマーナイト', 'ニードルバード × 4', 'ニードルバード × 2<br>ハーピー', 'チビデビル × 2<br>アーマーナイト', 'ゾンビ × 4<br>ハーピー', '80ルク', 'ゾンビ × 3<br>チビデビル', 'ニードルバード<br>チビデビル<br>ハーピー', 'アーマーナイト', 'ゾンビ × 2', 'ニードルバード × 2<br>ゾンビ', 'ニードルバード × 2<br>アーマーナイト × 2', 'チビデビル × 2', 'ツェンカー', 'チビデビル × 2<br>アーマーナイト', 'ニードルバード × 2<br>ハーピー', 'ハーピー × 2<br>アーマーナイト<br>チビデビル', 'ニンジャ × 2', 'チビデビル × 2<br>イビルソード', 'ニンジャ', 'イビルソード × 2<br>アーマーナイト', 'アーマーナイト × 2<br>チビデビル', 'イビルソード × 2<br>ニンジャ', 'ニンジャ × 2<br>チビデビル', 'ニンジャ × 3', 'ジェノア', 'ビルとベン', 'ゾンビ × 4', 'アーマーナイト × 2', 'チビデビル × 2<br>アーマーナイト', 'ゾンビ × 4<br>ハーピー', 'ニードルバード<br>チビデビル<br>ハーピー', 'アーマーナイト', 'ニードルバード × 3', 'ニードルバード × 2<br>アーマーナイト × 2', 'チビデビル × 2', 'グール<br>ゾンビ × 2', 'ゴーヴァ', '160ルク', '800ルク', '1200ルク', 'サルタン', '200ルク', '170ルク', '200ルク', 'ビルとベンとボブ', '180ルク', '300ルク', '270ルク', '1100ルク', '1500ルク', '180ルク', 'マシンゴーレムS', '240ルク', '150ルク', '970ルク', 'ミントス', '獣人ルガー', 'ポロビンフッド × 2<br>レディビー × 2', 'ディオール', 'ギルダーバイン', '6000ルク', '2200ルク', '800ルク', '500ルク', 'ザン・ビエ', 'チキチータ1', '2500ルク', '4000ルク', 'ライトゲイザー', '3400ルク', '1200ルク', 'ミスポルム', '3200ルク', '2700ルク', 'ランドアンバー', 'チキチータ2', 'ツクヨミルク', 'ドラン', '1500ルク', 'フィーグムンド', 'ダンガード', 'ペダン', 'ゼーブル・ファー', '邪眼の伯爵', 'フルメタルハガー2', 'ジェノア2', 'ツェンカー2', '美獣'];
const list_type = ['初期', 'ｷﾗｷﾗ', '雑魚', 'ｷﾗｷﾗ', 'ｷﾗｷﾗ', '雑魚', 'ｷﾗｷﾗ', 'ｷﾗｷﾗ', '宝箱', '買物', 'ｷﾗｷﾗ', 'ボス', '雑魚', '雑魚', '雑魚', '雑魚', '買物', '雑魚', '雑魚', '雑魚', '雑魚', 'ｷﾗｷﾗ', '雑魚', 'ｷﾗｷﾗ', '雑魚', 'ｷﾗｷﾗ', 'ボス', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '買物', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ツボ', '雑魚', 'ｷﾗｷﾗ', '雑魚', 'ボス', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ｷﾗｷﾗ', '雑魚', '雑魚', '雑魚', '雑魚', '監獄', '雑魚', '雑魚', 'ｷﾗｷﾗ', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '宝箱', '雑魚', '雑魚', 'ｷﾗｷﾗ', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '宝箱', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ｷﾗｷﾗ', 'ｷﾗｷﾗ', 'ｷﾗｷﾗ', '船賃', '買物', 'ｷﾗｷﾗ', '雑魚', '雑魚', '雑魚', 'ｷﾗｷﾗ', '雑魚', '雑魚', 'ｷﾗｷﾗ', '宝箱', '宝箱', '買物', '船賃', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '船賃', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ｷﾗｷﾗ', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ボス', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ボス', 'ボス', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '強制', 'ボス', 'ｷﾗｷﾗ', '宝箱', '宝箱', '買物', 'ｷﾗｷﾗ', 'ｷﾗｷﾗ', 'ｷﾗｷﾗ', 'ボス', 'ｷﾗｷﾗ', 'ｷﾗｷﾗ', 'ｷﾗｷﾗ', '宝箱', '宝箱', 'ｷﾗｷﾗ', 'ボス', 'ｷﾗｷﾗ', 'ｷﾗｷﾗ', '宝箱', '買物', 'ボス', '強制', '買物', 'ボス', '宝箱', '宝箱', '宝箱', 'ｷﾗｷﾗ', 'ボス', '買物', '宝箱', '宝箱', 'ボス', '宝箱', '宝箱', 'ボス', '宝箱', '宝箱', 'ボス', '買物', '宝箱', 'ボス', '宝箱', 'ボス', 'ボス', '買物', 'ボス', 'ボス', 'ボス', 'ボス', 'ボス', 'ボス'];
const list_exp = ['0', '-', '29', '-', '-', '44', '-', '-', '-', '-', '-', '1200', '40', '60', '100', '100', '-', '70', '179', '82', '103', '-', '131', '-', '98', '-', '3000', '70', '179', '82', '105', '123', '159', '98', '-', '123', '129', '90', '131', '88', '90', '-', '144', '-', '227', '3200', '98', '159', '123', '105', '82', '179', '70', '141', '-', '182', '141', '182', '185', '-', '94', '96', '-', '156', '141', '96', '144', '147', '98', '193', '122', '160', '119', '108', '108', '293', '226', '-', '116', '115', '-', '297', '70', '179', '82', '103', '105', '123', '131', '159', '-', '192', '196', '164', '150', '154', '-', '-', '-', '-', '-', '-', '116', '174', '176', '-', '232', '233', '-', '-', '-', '-', '-', '127', '127', '137', '132', '186', '184', '139', '139', '184', '186', '132', '137', '127', '127', '-', '116', '174', '176', '232', '177', '177', '309', '-', '246', '182', '64', '124', '184', '250', '120', '7000', '177', '177', '233', '150', '225', '77', '230', '324', '231', '224', '231', '4000', '5000', '236', '126', '177', '309', '182', '64', '192', '250', '120', '287', '5400', '-', '-', '-', '-', '-', '-', '-', '7800', '-', '-', '-', '-', '-', '-', '6900', '-', '-', '-', '-', '10000', '662', '-', '12000', '-', '-', '-', '-', '21000', '-', '-', '-', '25000', '-', '-', '20000', '-', '-', '13000', '-', '-', '20000', '-', '18000', '19000', '-', '25000', '29000', '33000', '38500', '36000', '42000'];
const list_lucre = ['4', '30', '19', '40', '8', '28', '10', '20', '80', '', '17', '210', '16', '24', '40', '40', '', '22', '57', '26', '33', '17', '42', '20', '31', '30', '220', '22', '57', '26', '33', '39', '50', '31', '', '45', '47', '32', '47', '36', '32', '40', '50', '40', '79', '480', '31', '50', '39', '33', '26', '57', '22', '66', '30', '84', '66', '84', '86', '', '44', '44', '40', '70', '65', '44', '65', '66', '44', '86', '57', '75', '50', '46', '46', '124', '94', '400', '48', '48', '170', '124', '22', '57', '26', '33', '33', '39', '42', '50', '400', '61', '61', '52', '48', '48', '30', '60', '60', '150', '', '20', '50', '75', '75', '60', '100', '101', '60', '440', '500', '', '270', '68', '68', '78', '73', '110', '106', '81', '81', '106', '110', '73', '78', '68', '68', '210', '50', '75', '75', '100', '75', '81', '173', '80', '137', '98', '34', '70', '101', '134', '64', '990', '81', '75', '101', '80', '118', '41', '125', '176', '125', '118', '123', '1200', '2800', '108', '56', '81', '173', '98', '34', '99', '134', '64', '140', '3290', '160', '800', '1200', '', '200', '170', '200', '2160', '180', '300', '270', '1100', '1500', '180', '6300', '240', '150', '970', '', '5570', '370', '', '2730', '6000', '2200', '800', '500', '4200', '', '2500', '4000', '3200', '3400', '1200', '3800', '3200', '2700', '9300', '', '2943', '3900', '1500', '5500', '5000', '', '6480', '8640', '6930', '9240', '8100', '10400'];
const list_level = [0, 30, 123, 359, 822, 1924, 3220, 4712, 6406, 8307, 10421, 12755, 15315, 18111, 21149, 24440, 27992, 31816, 35923, 40324, 45031, 50057, 55480, 61183, 67247, 73685, 80515, 87751, 95411, 103512, 112072, 121110, 130644, 140696, 151284, 162431, 174157, 186485, 199438, 213039, 227312, 242282, 257974, 274413, 291627, 309641, 328485, 348185, 368771, 390272, 412718, 436140, 460568, 486036, 512574, 540217, 568997, 598949, 630108, 662509, 707537, 754448, 803296, 854138, 907033, 962038, 1019214, 1078620, 1140317, 1204368, 1270836, 1339784, 1411277, 1485382, 1562164, 1641692, 1724033, 1809256, 1897433, 1988634, 2082931, 2180398, 2281107, 2385133, 2492553, 2603442, 2717879, 2835941, 2957707, 3083258, 3212675, 3346039, 3483433, 3624942, 3770649, 3920641, 4075003, 4233822, 4397188];

//#endregion

//#region タブ表示用の設定
document.addEventListener('DOMContentLoaded', () => {
  // タブメニュークラス'.js-tab-trigger'を持つ要素を取得
  const tabTriggers = document.querySelectorAll('.js-tab-trigger');
  // タブコンテンツクラス'.js-tab-target'を持つ要素を取得
  const tabTargets = document.querySelectorAll('.js-tab-target');

  // 要素の数の分だけループ処理をして値を取り出す
  for (let i = 0; i < tabTriggers.length; i++) {
    // タブメニュークリック時
    tabTriggers[i].addEventListener('click', (e) => {
      // クリックされた要素（メニュー要素[トリガー要素]）を取得
      let currentMenu = e.currentTarget;
      // ターゲットとなる要素（タブメニューdata属性値と等しいid値を持つコンテンツ要素[ターゲット要素]）を取得
      let currentContent = document.getElementById(currentMenu.dataset.id);

      // すべてのタブメニューの'is-active'クラスを削除
      for (let i = 0; i < tabTriggers.length; i++) {
        tabTriggers[i].classList.remove('is-active');
      }
      // クリックしたタブメニューに'is-active'クラスを追加
      currentMenu.classList.add('is-active');

      // タブコンテンツを非アクティブにする
      for (let i = 0; i < tabTargets.length; i++) {
        tabTargets[i].classList.remove('is-active');
      }
      // 対象コンテンツ(指定したIDの要素があったら)を表示させる
      if (currentContent !== null) {
        currentContent.classList.add('is-active');
      }
    });
  }
  //#endregion

  //#region チャート皮算用
  // テーブル項目の動的生成
  table = document.getElementById("sumexptbl");
  for (let i = 0; i < list_exp.length; i++) {
    // 行の追加
    let tr = table.insertRow();
    tr.id = "tr_" + i;

    // 行内の項目追加
    // 撃破
    let target = tr.insertCell();
    target.innerHTML = '<input type="checkbox" id="target_' + i + '" onChange="calc(this.id)" checked="true">';
    // 対象
    let object = tr.insertCell();
    object.innerHTML = list_object[i];
    object.id = "object_" + i;
    // 種別
    let type = tr.insertCell();
    type.innerHTML = list_type[i];
    type.id = "type_" + i;
    // exp
    let baseexp = tr.insertCell();
    baseexp.innerHTML = '<input type="number" class="num" name="exp" value=' + list_exp[i] + ' readonly>';
    // クッキー
    let cookie = tr.insertCell();
    cookie.innerHTML = '<input type="checkbox" id="cookie_' + i + '" onChange="calc(this.id)">';
    // 無傷
    let nodmg = tr.insertCell();
    nodmg.innerHTML = '<input type="checkbox" id="nodmg_' + i + '" onChange="calc(this.id)">';
    // ほか
    let other = tr.insertCell();
    other.innerHTML = '<input type="checkbox" id="other_' + i + '" onChange="calc(this.id)">';
    // 取得exp
    let getexp = tr.insertCell();
    getexp.innerHTML = '<input type="number" step="1" class="num" id="getexp_' + i + '" value=' + list_exp[i] + ' readonly>';
    // exp計
    let sumexp = tr.insertCell();
    sumexp.innerHTML = '<input type="number" class="num" name="sumexp" readonly>';
    // Lv
    let lv = tr.insertCell();
    lv.innerHTML = '<input type="number" class="other" readonly>';
    // ルク
    let getlucre = tr.insertCell();
    getlucre.innerHTML = '<input type="number" class="num" name="lucre" id="getlucre_' + i + '" value=' + list_lucre[i] + ' readonly>';
    // ルク計
    let sumlucre = tr.insertCell();
    sumlucre.innerHTML = '<input type="number" class="num" name="sumlucre" readonly>';

    // 種別に応じた制御
    switch (list_type[i]) {
      // 買物行表示
      case "買物":
        object.style.backgroundColor = "#00FF00";
        cookie.innerHTML = null;
        nodmg.innerHTML = null;
        other.innerHTML = null;
        getlucre.innerHTML = '<input type="number" class="num" name="lucre" id="getlucre_' + i + '" value=0 onblur="calc(this.id)">';
        getlucre.firstChild.style.color = "red";
        break;
      // ｷﾗｷﾗおよび宝箱行表示
      case "ｷﾗｷﾗ":
      case "宝箱":
        object.style.backgroundColor = "yellow";
        cookie.innerHTML = null;
        nodmg.innerHTML = null;
        other.innerHTML = null;
        break;
      // ボス行表示
      case "ボス":
        tr.style.backgroundColor = "#ff9e3d";
        break;
      // 船賃行表示
      case "船賃":
        getlucre.firstChild.style.color = "red";
        break;
      // モールベアプリズン行表示
      case "監獄":
        tr.style.backgroundColor = "#333333";
        object.style.color = "red";
        type.style.color = "red";
        cookie.innerHTML = null;
        nodmg.innerHTML = null;
        other.innerHTML = null;
        getexp.innerHTML = '<input type="number" step="1" class="num" id="getexp_' + i + '" value=0 onblur="calc(this.id)">';
        getlucre.innerHTML = '<input type="number" class="num" name="lucre" id="getlucre_' + i + '" value=0 onblur="calc(this.id)">';
        break;
      // それ以外は特になし
      default:
    }
  }
  calc('sumexptbl');
});

// メイン計算部分
function calc(elementid) {
  // 入力されたコントロールを取得
  element = document.getElementById(elementid);
  // コントロールを保持しているデータ行を取得
  tr = element.parentNode.parentNode;
  trcontent = document.getElementById(tr.id);
  // テーブルから上記のデータ行を取得
  for (let i = 0; i < table.rows.length; i++) {
    if (table.rows[i].id == tr.id) {
      // 先頭セル（撃破）のチェック状態を確認し取得exp欄を設定
      if (table.rows[i].cells[index_target].firstChild.checked) {
        if (table.rows[i].cells[index_type].firstChild.textContent != "買物"
          && table.rows[i].cells[index_type].firstChild.textContent != "監獄") {
          let calcexp = Number(table.rows[i].cells[index_exp].firstChild.value);
          let cookieuse = Number(0);
          let nodmgachieve = Number(0);
          let othersachieve = Number(0);
          // クッキー有無判定
          if (table.rows[i].cells[index_cookie].firstChild.checked) {
            cookieuse = Math.floor(calcexp * 0.1);
          }
          // ノーダメージ有無判定
          if (table.rows[i].cells[index_nodmg].firstChild.checked) {
            nodmgachieve = Math.floor(calcexp * 0.1);
          }
          // その他有無判定
          if (table.rows[i].cells[index_other].firstChild.checked) {
            if (list_type[i - 1] == "ボス") {
              othersachieve = Math.floor(calcexp * 0.01);
            } else {
              othersachieve = Math.floor(calcexp * 0.05);
            }
          }
          calcexp = calcexp + cookieuse + nodmgachieve + othersachieve;
          table.rows[i].cells[index_getexp].firstChild.value = calcexp;
        }
      } else {
        table.rows[i].cells[index_getexp].firstChild.value = 0;
        table.rows[i].cells[index_lucre].firstChild.value = 0;
      }
    }
    // 経験値とルクの集計
    switch (i) {
      // ヘッダ行は何もしない
      case 0:
        break;
      // 1行目は値のコピー
      case 1:
        table.rows[i].cells[index_sumexp].firstChild.value = table.rows[i].cells[index_getexp].firstChild.value;
        if (table.rows[i].cells[index_target].firstChild.checked) {
          table.rows[i].cells[index_sumlucre].firstChild.value = table.rows[i].cells[index_lucre].firstChild.value;
        } else {
          table.rows[i].cells[index_sumlucre].firstChild.value = Number(0);
        }
        break;
      // それ以外は各行ごとの集計値
      default:
        table.rows[i].cells[index_sumexp].firstChild.value
          = Number(table.rows[i].cells[index_getexp].firstChild.value) + Number(table.rows[i - 1].cells[index_sumexp].firstChild.value);
        if (table.rows[i].cells[index_target].firstChild.checked) {
          if (table.rows[i].cells[index_lucre].firstChild.style.color == "red") {
            table.rows[i].cells[index_sumlucre].firstChild.value
              = Number(table.rows[i - 1].cells[index_sumlucre].firstChild.value) - Number(table.rows[i].cells[index_lucre].firstChild.value);
          } else {
            table.rows[i].cells[index_sumlucre].firstChild.value
              = Number(table.rows[i].cells[index_lucre].firstChild.value) + Number(table.rows[i - 1].cells[index_sumlucre].firstChild.value);
          }
        } else {
          table.rows[i].cells[index_sumlucre].firstChild.value = Number(table.rows[i - 1].cells[index_sumlucre].firstChild.value);
        }
    }
    // 集計値を基にレベルを計算
    for (let j = 0; j < list_level.length; j++) {
      if (table.rows[i].cells[index_sumexp].firstChild.value >= list_level[j]) {
        table.rows[i].cells[index_level].firstChild.value = j + 1;
      }
      // レベルアップしていたら文字色変更
      if (i > 0 && Number(table.rows[i].cells[index_level].firstChild.value) > Number(table.rows[i - 1].cells[index_level].firstChild.value)) {
        table.rows[i].cells[index_level].firstChild.style.backgroundColor = "#ee82ee";
      }
    }
  }
}
//#endregion