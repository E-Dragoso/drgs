//#region  宣言部

// テーブルと列の定義
let table;
let perrerow; // フルメタルハガーが存在する行
let captainrow; // ゴーヴァが存在する行
const index_target = 0; // 対象
const index_type = 1; // 種別
const index_object = 2; // 内容
const index_bonus = 3; // ボーナス
const index_getexp = 4; // 取得exp
const index_principal = 5; // 主人公
const index_fellow1 = 6; // 仲間1
const index_fellow2 = 7; // 仲間2
const index_lucre = 8; // ルク
const index_sumlucre = 9; // ルク総額
const index_exp = 10; // exp
const index_sumexppri = 11; // exp計主人公
const index_sumexpfel1 = 12; // exp計仲間１
const index_sumexpfel2 = 13; // exp計仲間２

// テーブルに格納するためのデータ、別途excelマクロで出力
const list_object = ['初期状態', '30ルク', 'バットム<br>ラビ × 2', '40ルク', '8ルク', 'バットム × 4', '10ルク', '20ルク', '80ルク', 'ウェンデル', '17ルク', 'フルメタルハガー', 'バウンドウルフ × 2', 'バウンドウルフ × 3', 'バウンドウルフ × 5', 'バウンドウルフ × 5', 'マイア', 'ゴブリン<br>ラビ', 'ポロン × 3<br>ラビ × 2', 'ポロン × 2', 'アサシンバグ<br>ラビ<br>ポロン', '17ルク', 'アサシンバグ<br>ラビ × 2<br>ポロン', '20ルク', 'ゴブリン<br>ラビ × 2', '30ルク', 'マシンゴーレムR', 'ゴブリン<br>ラビ', 'ポロン × 3<br>ラビ × 2', 'ポロン × 2', 'バットム<br>ラビ<br>ポロン', 'ゾンビ × 3', 'ゾンビ × 2<br>バットム<br>ポロン', 'ゴブリン<br>ラビ × 2', 'ドワーフの村', 'バットム × 3', 'モールベア × 2<br>バットム', 'スライム × 2', 'スライム × 2<br>バットム', 'モールベア × 2', 'スライム × 2', '40ルク', 'ゴブリン × 2<br>モールベア', '40ルク', 'ホブゴブリン × 2<br>バットム × 3', 'ジュエルイーター', 'ゴブリン<br>ラビ × 2', 'ゾンビ × 2<br>バットム<br>ポロン', 'ゾンビ × 3', 'バットム<br>ラビ<br>ポロン', 'ポロン × 2', 'ポロン × 3<br>ラビ × 2', 'ゴブリン<br>ラビ', 'モールベア × 3', '30ルク', 'モールベア × 2<br>バットム × 2', 'モールベア × 3', 'モールベア × 2<br>バットム × 2', 'モールベア × 3<br>バットム', 'モールベアプリズン<br>ｽｷﾅﾀﾞｹﾚﾍﾞﾙｱｹﾞｼﾃ', 'モールベア × 2', 'モールベア × 2', '40ルク', 'ホブゴブリン × 2<br>モールベア', 'モールベア × 2<br>バットム', 'モールベア × 2', 'モールベア × 2<br>バットム', 'モールベア × 3', 'モールベア × 2', 'モールベア × 3<br>バットム', 'ラビ × 2<br>バットム', 'ラビ × 3<br>バットム', 'マシンゴーレム × 2', 'マジシャン × 2', 'マジシャン × 2', 'マシンゴーレム × 4<br>マジシャン', 'ユニコーンヘッド × 2<br>マジシャン × 2', '400ルク', 'ユニコーンヘッド × 2', 'ユニコーンヘッド<br>マジシャン', '170ルク', 'マシンゴーレム × 4<br>マジシャン', 'ゴブリン<br>ラビ', 'ポロン × 3<br>ラビ × 2', 'ポロン × 2', 'アサシンバグ<br>ラビ<br>ポロン', 'バットム<br>ラビ<br>ポロン', 'ゾンビ × 3', 'アサシンバグ<br>ラビ × 2<br>ポロン', 'ゾンビ × 2<br>バットム<br>ポロン', '400ルク', 'アサシンバグ × 2<br>ポロン × 2<br>ゴブリン', 'バットム × 2<br>ポロン × 2<br>ゴブリン', 'ゾンビ × 4', 'アサシンバグ × 2<br>ポロン × 2', 'バットム × 2<br>ポロン × 2', '30ルク', '60ルク', '60ルク', 'バイゼル→パロ', 'パロ', '20ルク', 'ニードルバード × 2', 'ニードルバード × 2<br>ハーピー', 'ニードルバード × 2<br>アーマーナイト', '60ルク', 'ニードルバード × 4', 'ハーピー × 2<br>アーマーナイト<br>チビデビル', '60ルク', '440ルク', '500ルク', 'バイゼル', 'バイゼル→ジャド', 'ラビ × 2<br>ラビリオン', 'ラビ × 2<br>ラビリオン', 'アサシンバグ × 2<br>ラビリオン', 'アサシンバグ<br>ラビリオン<br>ラビ', 'ラビリオン × 3<br>マイコニド', 'アサシンバグ × 2<br>ラビリオン × 2', 'アサシンバグ<br>ラビリオン × 3', 'アサシンバグ<br>ラビリオン × 3', 'アサシンバグ × 2<br>ラビリオン × 2', 'ラビリオン × 3<br>マイコニド', 'アサシンバグ<br>ラビリオン<br>ラビ', 'アサシンバグ × 2<br>ラビリオン', 'ラビ × 2<br>ラビリオン', 'ラビ × 2<br>ラビリオン', 'ジャド→パロ', 'ニードルバード × 2', 'ニードルバード × 2<br>ハーピー', 'ニードルバード × 2<br>アーマーナイト', 'ニードルバード × 4', 'ニードルバード × 2<br>ハーピー', 'チビデビル × 2<br>アーマーナイト', 'ゾンビ × 4<br>ハーピー', '80ルク', 'ゾンビ × 3<br>チビデビル', 'ニードルバード<br>チビデビル<br>ハーピー', 'アーマーナイト', 'ゾンビ × 2', 'ニードルバード × 2<br>ゾンビ', 'ニードルバード × 2<br>アーマーナイト × 2', 'チビデビル × 2', 'ツェンカー', 'チビデビル × 2<br>アーマーナイト', 'ニードルバード × 2<br>ハーピー', 'ハーピー × 2<br>アーマーナイト<br>チビデビル', 'ニンジャ × 2', 'チビデビル × 2<br>イビルソード', 'ニンジャ', 'イビルソード × 2<br>アーマーナイト', 'アーマーナイト × 2<br>チビデビル', 'イビルソード × 2<br>ニンジャ', 'ニンジャ × 2<br>チビデビル', 'ニンジャ × 3', 'ジェノア', 'ビルとベン', 'ゾンビ × 4', 'アーマーナイト × 2', 'チビデビル × 2<br>アーマーナイト', 'ゾンビ × 4<br>ハーピー', 'ニードルバード<br>チビデビル<br>ハーピー', 'アーマーナイト', 'ニードルバード × 3', 'ニードルバード × 2<br>アーマーナイト × 2', 'チビデビル × 2', 'グール<br>ゾンビ × 2', 'ゴーヴァ', '160ルク', '800ルク', '1200ルク', 'サルタン', '200ルク', '170ルク', '200ルク', 'ビルとベンとボブ', '180ルク', '300ルク', '270ルク', '1100ルク', '1500ルク', '180ルク', 'マシンゴーレムS', '240ルク', '150ルク', '970ルク', 'ミントス', '獣人ルガー', 'ポロビンフッド × 2<br>レディビー × 2', 'ディオール', 'ギルダーバイン', '6000ルク', '2200ルク', '800ルク', '500ルク', 'ザン・ビエ', 'チキチータ1', '2500ルク', '4000ルク', 'ライトゲイザー', '3400ルク', '1200ルク', 'ミスポルム', '3200ルク', '2700ルク', 'ランドアンバー', 'チキチータ2', 'ツクヨミルク', 'ドラン', '1500ルク', 'フィーグムンド', 'ダンガード', 'ペダン', 'ゼーブル・ファー', '邪眼の伯爵', 'フルメタルハガー2', 'ジェノア2', 'ツェンカー2', '美獣'];
const list_type = ['初期', 'ルク', '雑魚', 'ルク', 'ルク', '雑魚', 'ルク', 'ルク', 'ルク', '支出', 'ルク', 'ボス', '雑魚', '雑魚', '雑魚', '雑魚', '支出', '雑魚', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', 'ルク', '雑魚', 'ルク', 'ボス', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '支出', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', 'ルク', '雑魚', 'ボス', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', '雑魚', '雑魚', '雑魚', '監獄', '雑魚', '雑魚', 'ルク', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', '雑魚', 'ルク', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ルク', 'ルク', 'ルク', '支出', '支出', 'ルク', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', '雑魚', 'ルク', 'ルク', 'ルク', '支出', '支出', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '支出', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ルク', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ボス', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', 'ボス', 'ボス', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '雑魚', '強制', 'ボス', 'ルク', 'ルク', 'ルク', '支出', 'ルク', 'ルク', 'ルク', 'ボス', 'ルク', 'ルク', 'ルク', 'ルク', 'ルク', 'ルク', 'ボス', 'ルク', 'ルク', 'ルク', '支出', 'ボス', '強制', '支出', 'ボス', 'ルク', 'ルク', 'ルク', 'ルク', 'ボス', '支出', 'ルク', 'ルク', 'ボス', 'ルク', 'ルク', 'ボス', 'ルク', 'ルク', 'ボス', '支出', 'ルク', 'ボス', 'ルク', 'ボス', 'ボス', '支出', 'ボス', 'ボス', 'ボス', 'ボス', 'ボス', 'ボス'];
const list_exp = ['0', '0', '29', '0', '0', '44', '0', '0', '0', '0', '0', '1200', '40', '60', '100', '100', '0', '70', '179', '82', '103', '0', '131', '0', '98', '0', '3000', '70', '179', '82', '105', '123', '159', '98', '0', '123', '129', '90', '131', '88', '90', '0', '144', '0', '227', '3200', '98', '159', '123', '105', '82', '179', '70', '141', '0', '182', '141', '182', '185', '0', '94', '96', '0', '156', '141', '96', '144', '147', '98', '193', '122', '160', '119', '108', '108', '293', '226', '0', '116', '115', '0', '297', '70', '179', '82', '103', '105', '123', '131', '159', '0', '192', '196', '164', '150', '154', '0', '0', '0', '0', '0', '0', '116', '174', '176', '0', '232', '233', '0', '0', '0', '0', '0', '127', '127', '137', '132', '186', '184', '139', '139', '184', '186', '132', '137', '127', '127', '0', '116', '174', '176', '232', '177', '177', '309', '0', '246', '182', '64', '124', '184', '250', '120', '7000', '177', '177', '233', '150', '225', '77', '230', '324', '231', '224', '231', '4000', '5000', '236', '126', '177', '309', '182', '64', '192', '250', '120', '287', '5400', '0', '0', '0', '0', '0', '0', '0', '7800', '0', '0', '0', '0', '0', '0', '6900', '0', '0', '0', '0', '10000', '662', '0', '12000', '0', '0', '0', '0', '21000', '0', '0', '0', '25000', '0', '0', '20000', '0', '0', '13000', '0', '0', '20000', '0', '18000', '19000', '0', '25000', '29000', '33000', '38500', '36000', '42000'];
const list_lucre = ['4', '30', '19', '40', '8', '28', '10', '20', '80', '0', '17', '210', '16', '24', '40', '40', '0', '22', '57', '26', '33', '17', '42', '20', '31', '30', '220', '22', '57', '26', '33', '39', '50', '31', '0', '45', '47', '32', '47', '36', '32', '40', '50', '40', '79', '480', '31', '50', '39', '33', '26', '57', '22', '66', '30', '84', '66', '84', '86', '0', '44', '44', '40', '70', '65', '44', '65', '66', '44', '86', '57', '75', '50', '46', '46', '124', '94', '400', '48', '48', '170', '124', '22', '57', '26', '33', '33', '39', '42', '50', '400', '61', '61', '52', '48', '48', '30', '60', '60', '150', '0', '20', '50', '75', '75', '60', '100', '101', '60', '440', '500', '0', '270', '68', '68', '78', '73', '110', '106', '81', '81', '106', '110', '73', '78', '68', '68', '210', '50', '75', '75', '100', '75', '81', '173', '80', '137', '98', '34', '70', '101', '134', '64', '990', '81', '75', '101', '80', '118', '41', '125', '176', '125', '118', '123', '1200', '2800', '108', '56', '81', '173', '98', '34', '99', '134', '64', '140', '3290', '160', '800', '1200', '0', '200', '170', '200', '2160', '180', '300', '270', '1100', '1500', '180', '6300', '240', '150', '970', '0', '5570', '370', '0', '2730', '6000', '2200', '800', '500', '4200', '0', '2500', '4000', '3200', '3400', '1200', '3800', '3200', '2700', '9300', '0', '2943', '3900', '1500', '5500', '5000', '0', '6480', '8640', '6930', '9240', '8100', '10400'];
const list_level = [0, 30, 123, 359, 822, 1924, 3220, 4712, 6406, 8307, 10421, 12755, 15315, 18111, 21149, 24440, 27992, 31816, 35923, 40324, 45031, 50057, 55480, 61183, 67247, 73685, 80515, 87751, 95411, 103512, 112072, 121110, 130644, 140696, 151284, 162431, 174157, 186485, 199438, 213039, 227312, 242282, 257974, 274413, 291627, 309641, 328485, 348185, 368771, 390272, 412718, 436140, 460568, 486036, 512574, 540217, 568997, 598949, 630108, 662509, 707537, 754448, 803296, 854138, 907033, 962038, 1019214, 1078620, 1140317, 1204368, 1270836, 1339784, 1411277, 1485382, 1562164, 1641692, 1724033, 1809256, 1897433, 1988634, 2082931, 2180398, 2281107, 2385133, 2492553, 2603442, 2717879, 2835941, 2957707, 3083258, 3212675, 3346039, 3483433, 3624942, 3770649, 3920641, 4075003, 4233822, 4397188];

//#endregion

document.addEventListener('DOMContentLoaded', () => {
  //#region タブ表示用の設定
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
    getexp.innerHTML = '<input type="number" class="num" id="getexp_' + i + '" value=' + list_exp[i] + ' min=0 max=99999 onChange="calc(this.id)" disabled>';
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
    getlucre.innerHTML = '<input type="number" class="num" id="getlucre_' + i + '" value=' + list_lucre[i] + ' min=0 max=99999 onChange="calc(this.id)" disabled>';
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
        type.innerHTML = '<img src="sfc_seikenndennsetu3_rabi.gif">';
        bonus.firstChild.hidden = false;
        getexp.firstChild.hidden = false;
        tr.name = "zako";
        break;
      // ルク行表示
      case "ルク":
        type.style.backgroundColor = "#ffd700";
        tr.name = "lucre";
        break;
      // 買物行表示
      case "支出":
        type.innerHTML = '<img src="sfc_seikenndennsetu3_nikita_mae_motion.gif">';
        getlucre.firstChild.style.color = "#dc143c";
        objlucre.disabled = false;
        target.firstChild.hidden = true;
        break;
      // ボス行表示
      case "ボス":
        type.innerHTML = '<img src="sfc_seikenndennsetu3_gova.gif">';
        bonus.firstChild.hidden = false;
        getexp.firstChild.hidden = false;
        break;
      case "強制":
        type.innerHTML = '<img src="sfc_seikenndennsetu3_rabi.gif">';
        type.style.backgroundColor = "#ffae00";
        bonus.firstChild.hidden = false;
        getexp.firstChild.hidden = false;
        break;
      // モールベアプリズン行表示
      case "監獄":
        type.style.backgroundColor = "#333333";
        object.style.color = "#dc143c";
        type.style.color = "#dc143c";
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
      fellow2.innerHTML = "-";
      sumlucre.innerHTML = 4;
    }
    // フルメタルハガーとゴーヴァは行番号を保持
    if (object.textContent == "フルメタルハガー") {
      pierrerow = i + 1;
    } else if (object.textContent == "ゴーヴァ") {
      captainrow = i + 1;
    }
  }
  // デフォルトで雑魚のチェックを外す処理
  // ついでにメイン計算も呼び出されてる
  zakocheck();
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
      if (table.rows[i].cells[index_type].textContent != "監獄") {
        table.rows[i].cells[index_getexp].firstChild.value
          = Math.floor(Number(table.rows[i].cells[index_exp].textContent)
            * Number(1 + (table.rows[i].cells[index_bonus].firstChild.value) / 100));
      }
    }
    // 経験値とルクの集計
    // 直上の値をコピー
    let sumlucre = table.rows[i - 1].cells[index_sumlucre].textContent;
    let exppri = Number(table.rows[i - 1].cells[index_sumexppri].textContent);
    // 仲間の経験値を計算
    // 仲間１は加入時点でレベル4なので経験値補正
    let expfel1 = exppri + Number(359);
    // 仲間２は加入時点でレベル6＆ジャド以前の戦闘をしていないため経験値補正
    let expfel2 = exppri + Number(1924) - Number(table.rows[pierrerow].cells[index_sumexppri].textContent);

    // 先頭行がチェック状態なら加算
    if (table.rows[i].cells[index_target].firstChild.checked) {
      // ルク計算
      // 支出タイプの時はルクを減算
      if (list_type[i] == "支出") {
        sumlucre = Number(sumlucre) - Number(table.rows[i].cells[index_lucre].firstChild.value);
      } else {
        sumlucre = Number(sumlucre) + Number(table.rows[i].cells[index_lucre].firstChild.value);
      }
      // 経験値再計算
      exppri = exppri + Number(table.rows[i].cells[index_getexp].firstChild.value);
      expfel1 = exppri + Number(359);
      expfel2 = exppri + Number(1924) - Number(table.rows[pierrerow].cells[index_sumexppri].textContent);

      // ゴーヴァの生贄分を減算
      if (i >= captainrow) {
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
        table.rows[i].cells[index_bonus].firstChild.disabled = false;
      } else {
        table.rows[i].cells[index_target].firstChild.checked = false;
        table.rows[i].cells[index_bonus].firstChild.disabled = true;
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
      // 仲間２はジャドまで集計しない
      if (i <= pierrerow && j == 2) {
        table.rows[i].cells[index_principal + j].innerHTML = "-";
      } else {
        let exp = table.rows[i].cells[index_sumexppri + j].textContent;
        let k = 0;
        while (exp >= Number(list_level[k])) {
          let lv = "Lv :" + Number(k + 1);
          let tnl = Number(list_level[k + 1]) - exp;
          table.rows[i].cells[index_principal + j].innerHTML = lv + "<br>tNL:" + tnl;
          k++;
        }
      }
      if (table.rows[i].cells[index_principal + j].textContent.substring(0, 6)
        != table.rows[i - 1].cells[index_principal + j].textContent.substring(0, 6)) {
        table.rows[i].cells[index_principal + j].style.backgroundColor = "#ff99ff";
      } else {
        table.rows[i].cells[index_principal + j].style.backgroundColor = "#ffffff";
      }
    }
  }
}

//#endregion