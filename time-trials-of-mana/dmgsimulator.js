//#region  宣言部

let character = document.getElementById("character");
let base_atk;
const list_classatk = [
  ['166', '178', '197', '222', '235', '241', '260', '279', '305'],
  ['128', '139', '139', '171', '164', '171', '177', '196', '202'],
  ['184', '207', '226', '274', '261', '280', '293', '328', '354'],
  ['134', '139', '146', '164', '171', '241', '177', '196', '253'],
  ['158', '188', '168', '229', '242', '223', '255', '290', '290'],
  ['158', '181', '194', '223', '223', '268', '248', '271', '315']
];
let base_mag;
const list_classmag = [
  ['121', '133', '139', '164', '171', '183', '171', '202', '208'],
  ['184', '220', '207', '287', '280', '268', '293', '348', '348'],
  ['133', '156', '149', '197', '197', '210', '191', '238', '245'],
  ['153', '171', '171', '216', '209', '196', '222', '253', '253'],
  ['147', '158', '178', '209', '183', '222', '203', '234', '253'],
  ['141', '152', '152', '177', '196', '190', '216', '221', '241']
];
const list_weaponatk = [
  [4, 8, 15, 22, 28, 33, 37, 42, 44, 47, 49, 51, 53, 55, 57, 59, 61, 63, 66, 68, 70, 74, 76, 78, 82, 91, 102, 108, 112, 122, 143, 215, 160, 240],
  [3, 6, 11, 16, 21, 25, 28, 32, 33, 34, 35, 36, 37, 40, 41, 42, 43, 45, 46, 48, 50, 51, 54, 56, 57, 66, 70, 72, 74, 77, 88, 132, 92, 138],
  [4, 8, 16, 23, 31, 36, 40, 45, 49, 53, 54, 56, 58, 60, 62, 65, 67, 69, 71, 73, 75, 77, 79, 82, 91, 101, 114, 118, 130, 126, 155, 233, 172, 258],
  [4, 6, 12, 17, 22, 26, 29, 33, 34, 35, 36, 37, 38, 42, 43, 44, 46, 47, 48, 51, 52, 53, 57, 58, 60, 68, 70, 74, 94, 98, 88, 132, 126, 189],
  [4, 7, 14, 20, 26, 30, 34, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 81, 94, 98, 100, 103, 129, 194, 133, 200],
  [4, 7, 14, 20, 26, 30, 34, 38, 42, 45, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 77, 86, 91, 93, 108, 110, 118, 177, 147, 221]
];
const list_weaponmag = [
  [0, 5, 10, 15, 20, 24, 26, 40, 32, 33, 33, 34, 36, 37, 40, 42, 42, 43, 46, 46, 48, 51, 51, 54, 57, 64, 70, 74, 76, 78, 92, 138, 97, 146],
  [3, 8, 16, 23, 31, 36, 40, 45, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 75, 77, 80, 83, 86, 99, 124, 126, 128, 130, 168, 252, 168, 252],
  [0, 6, 11, 16, 21, 25, 28, 32, 34, 35, 36, 37, 38, 40, 42, 43, 43, 46, 47, 48, 51, 52, 54, 58, 59, 68, 76, 77, 80, 78, 97, 146, 101, 152],
  [2, 7, 14, 20, 26, 30, 34, 38, 42, 43, 44, 46, 47, 48, 52, 53, 55, 57, 58, 59, 64, 65, 66, 71, 72, 82, 94, 98, 99, 100, 126, 188, 126, 189],
  [0, 6, 13, 19, 25, 29, 32, 37, 38, 44, 45, 46, 48, 49, 50, 52, 53, 55, 60, 61, 63, 66, 68, 69, 74, 81, 94, 94, 98, 99, 114, 171, 126, 189],
  [0, 6, 12, 18, 24, 28, 31, 35, 37, 37, 38, 40, 40, 44, 46, 46, 48, 50, 50, 53, 56, 56, 60, 62, 62, 73, 77, 88, 90, 95, 105, 158, 118, 177]
];

//#endregion

document.addEventListener('DOMContentLoaded', () => {
  characheck();
});

// 選択キャラ変更
function characheck() {
  // 各項目の可視状態変更
  let selectedchara = document.getElementById('character').value;
  let Duran = document.getElementsByClassName('Duran');
  for (i = 0; i < Duran.length; i++) {
    Duran[i].hidden = true;
  }
  let Angela = document.getElementsByClassName('Angela');
  for (i = 0; i < Angela.length; i++) {
    Angela[i].hidden = true;
  }
  let Kevin = document.getElementsByClassName('Kevin');
  for (i = 0; i < Kevin.length; i++) {
    Kevin[i].hidden = true;
  }
  let Charlotte = document.getElementsByClassName('Charlotte');
  for (i = 0; i < Charlotte.length; i++) {
    Charlotte[i].hidden = true;
  }
  let Hawkeye = document.getElementsByClassName('Hawkeye');
  for (i = 0; i < Hawkeye.length; i++) {
    Hawkeye[i].hidden = true;
  }
  let Riesz = document.getElementsByClassName('Riesz');
  for (i = 0; i < Riesz.length; i++) {
    Riesz[i].hidden = true;
  }
  document.getElementById("DuranClass").hidden = true;
  document.getElementById("DuranWeapon").hidden = true;
  document.getElementById("AngelaClass").hidden = true;
  document.getElementById("AngelaWeapon").hidden = true;
  document.getElementById("KevinClass").hidden = true;
  document.getElementById("KevinWeapon").hidden = true;
  document.getElementById("CharlotteClass").hidden = true;
  document.getElementById("CharlotteWeapon").hidden = true;
  document.getElementById("HawkeyeClass").hidden = true;
  document.getElementById("HawkeyeWeapon").hidden = true;
  document.getElementById("RieszClass").hidden = true;
  document.getElementById("RieszWeapon").hidden = true;
  switch (selectedchara) {
    case "Duran":
      document.getElementById("DuranClass").hidden = false;
      document.getElementById("DuranWeapon").hidden = false;
      for (i = 0; i < Duran.length; i++) {
        Duran[i].hidden = false;
      }
      break;
    case "Angela":
      document.getElementById("AngelaClass").hidden = false;
      document.getElementById("AngelaWeapon").hidden = false;
      for (i = 0; i < Angela.length; i++) {
        Angela[i].hidden = false;
      }
      break;
    case "Kevin":
      document.getElementById("KevinClass").hidden = false;
      document.getElementById("KevinWeapon").hidden = false;
      for (i = 0; i < Kevin.length; i++) {
        Kevin[i].hidden = false;
      }
      break;
    case "Charlotte":
      document.getElementById("CharlotteClass").hidden = false;
      document.getElementById("CharlotteWeapon").hidden = false;
      for (i = 0; i < Charlotte.length; i++) {
        Charlotte[i].hidden = false;
      }
      break;
    case "Hawkeye":
      document.getElementById("HawkeyeClass").hidden = false;
      document.getElementById("HawkeyeWeapon").hidden = false;
      for (i = 0; i < Hawkeye.length; i++) {
        Hawkeye[i].hidden = false;
      }
      break;
    case "Riesz":
      document.getElementById("RieszClass").hidden = false;
      document.getElementById("RieszWeapon").hidden = false;
      for (i = 0; i < Riesz.length; i++) {
        Riesz[i].hidden = false;
      }
      break;
    default:
  }
  classcheck();
}

// クラス変更
function classcheck() {
  let chara = document.getElementById('character');
  let selectedclass = 0;
  switch (chara.value) {
    case "Duran":
      selectedclass = document.getElementById("DuranClass").value;
      break;
    case "Angela":
      selectedclass = document.getElementById("AngelaClass").value;
      break;
    case "Kevin":
      selectedclass = document.getElementById("KevinClass").value;
      break;
    case "Charlotte":
      selectedclass = document.getElementById("CharlotteClass").value;
      break;
    case "Hawkeye":
      selectedclass = document.getElementById("HawkeyeClass").value;
      break;
    case "Riesz":
      selectedclass = document.getElementById("RieszClass").value;
      break;
    default:
  }
  // クラスのステータスを基礎値に格納
  let base_atkrow = list_classatk[chara.selectedIndex];
  base_atk = base_atkrow[selectedclass];
  let base_magrow = list_classmag[chara.selectedIndex];
  base_mag = base_magrow[selectedclass];

  // 装備の数値を加算
  weapon();

  // 基礎値を基に攻撃力計算
  atkcalc();
}

// 武器変更
function weapon() {
  let chara = document.getElementById('character');
  let weaponatk = document.getElementById("weaponatk");
  let weaponmag = document.getElementById("weaponmag");
  let selectedweapon = 0;

  // キャラに応じて加算元を変更
  switch (chara.value) {
    case "Duran":
      selectedweapon = document.getElementById("DuranWeapon").value;
      break;
    case "Angela":
      selectedweapon = document.getElementById("AngelaWeapon").value;
      break;
    case "Kevin":
      selectedweapon = document.getElementById("KevinWeapon").value;
      break;
    case "Charlotte":
      selectedweapon = document.getElementById("CharlotteWeapon").value;
      break;
    case "Hawkeye":
      selectedweapon = document.getElementById("HawkeyeWeapon").value;
      break;
    case "Riesz":
      selectedweapon = document.getElementById("RieszWeapon").value;
      break;
    default:
  }

  // 武器攻撃力を表示
  let weaponatkrow = list_weaponatk[chara.selectedIndex];
  weaponatk.value = weaponatkrow[selectedweapon];
  let weaponmagrow = list_weaponmag[chara.selectedIndex];
  weaponmag.value = weaponmagrow[selectedweapon];

  atkcalc();
}

// 攻撃力計算
function atkcalc() {
  // 各コントロールを取得
  let weaponatk = document.getElementById("weaponatk");
  let weaponmag = document.getElementById("weaponmag");
  let atk = document.getElementById("atk");
  let mag = document.getElementById("mag");
  let crit_prob = document.getElementById("crit_prob");
  let crit_magn = document.getElementById("crit_magn");
  let atkexpected = document.getElementById("atkexpected");
  let magexpected = document.getElementById("magexpected");
  let csexpected = document.getElementById("csexpected");

  // 物理攻撃加算タイプを計算
  let atk_add = weaponatk.value;
  let chk_atk_add = document.getElementsByClassName('atk_add');
  for (i = 0; i < chk_atk_add.length; i++) {
    if (chk_atk_add[i].checked == true) {
      atk_add = Number(atk_add) + Number(chk_atk_add[i].value);
    }
  }

  // 物理攻撃乗算タイプを計算
  let atk_multi = 100;
  let chk_atk_multi = document.getElementsByClassName('atk_multi');
  for (i = 0; i < chk_atk_multi.length; i++) {
    if (chk_atk_multi[i].checked == true) {
      atk_multi += Number(chk_atk_multi[i].value);
    }
  }

  // 物理ダメージアップタイプを計算
  let dmg_atk = 100;
  let chk_dmg_atk = document.getElementsByClassName('dmg_atk');
  for (i = 0; i < chk_dmg_atk.length; i++) {
    if (chk_dmg_atk[i].checked == true) {
      dmg_atk += Number(chk_dmg_atk[i].value);
    }
  }

  // 魔法攻撃加算タイプを計算
  let mag_add = weaponmag.value;
  let chk_mag_add = document.getElementsByClassName('mag_add');
  for (i = 0; i < chk_mag_add.length; i++) {
    if (chk_mag_add[i].checked == true) {
      mag_add = Number(mag_add) + Number(chk_mag_add[i].value);
    }
  }

  // 魔法攻撃乗算タイプを計算
  let mag_multi = 100;
  let chk_mag_multi = document.getElementsByClassName('mag_multi');
  for (i = 0; i < chk_mag_multi.length; i++) {
    if (chk_mag_multi[i].checked == true) {
      mag_multi += Number(chk_mag_multi[i].value);
    }
  }

  // 魔法ダメージアップタイプを計算
  let dmg_mag = 100;
  let chk_dmg_mag = document.getElementsByClassName('dmg_mag');
  for (i = 0; i < chk_dmg_mag.length; i++) {
    if (chk_dmg_mag[i].checked == true) {
      dmg_mag += Number(chk_dmg_mag[i].value);
    }
  }

  // 必殺ダメージアップタイプを計算
  let dmg_cs = 100;
  let chk_dmg_cs = document.getElementsByClassName('dmg_cs');
  for (i = 0; i < chk_dmg_cs.length; i++) {
    if (chk_dmg_cs[i].checked == true) {
      dmg_cs += Number(chk_dmg_cs[i].value);
    }
  }

  // クリティカル確率タイプを計算
  let crit_add = 5;
  let chk_crit_add = document.getElementsByClassName('crit_add');
  for (i = 0; i < chk_crit_add.length; i++) {
    if (chk_crit_add[i].checked == true) {
      crit_add += Number(chk_crit_add[i].value);
    }
  }
  // クリティカル上限オーバーの場合は80に設定
  if (crit_add > 80) {
    crit_add = 80;
  }

  // クリティカル倍率タイプを計算
  let crit_multi = 100;
  let chk_crit_multi = document.getElementsByClassName('crit_multi');
  for (i = 0; i < chk_crit_multi.length; i++) {
    if (chk_crit_multi[i].checked == true) {
      crit_multi += Number(chk_crit_multi[i].value);
    }
  }

  // 計算結果を各コントロールに反映
  atk.value = Math.floor((Number(base_atk) + Number(atk_add)) * Number(atk_multi / 100));
  mag.value = Math.floor((Number(base_mag) + Number(mag_add)) * Number(mag_multi / 100));
  crit_prob.value = crit_add;
  crit_magn.value = Number(1.2 * crit_multi / 100);

  // 最終期待値の計算
  // ダメージ倍率を乗算値に変換
  let dmg_atk_calc = dmg_atk / 100;
  let dmg_mag_calc = dmg_mag / 100;
  let dmg_cs_calc = dmg_cs / 100;

  // 物理攻撃、魔法攻撃にダメージ倍率を乗算
  let atk_result = atk.value * dmg_atk_calc;
  let mag_result = mag.value * dmg_mag_calc;
  let cs_result = (Number(atk.value) + Number(mag.value)) / 2 * dmg_atk_calc * dmg_cs_calc;

  // クリティカル部分の計算
  // クリティカル確率から非クリティカル確率を計算
  let not_crit_prob = 100 - Number(crit_add);
  // 求めたクリ/非クリ率からクリティカル込みの期待値を計算
  let atk_calc = atk_result * not_crit_prob + atk_result * crit_magn.value * crit_add;
  let mag_calc = mag_result * not_crit_prob + mag_result * crit_magn.value * crit_add;
  let cs_calc = cs_result * not_crit_prob + cs_result * crit_magn.value * crit_add;

  // 防御倍率の計算
  let pro_down = 0;
  let chk_pro_down = document.getElementsByClassName('pro_down');
  for (i = 0; i < chk_pro_down.length; i++) {
    if (chk_pro_down[i].checked == true) {
      pro_down += Number(chk_pro_down[i].value);
    }
  }
  let min_down = 0;
  let chk_min_down = document.getElementsByClassName('min_down');
  for (i = 0; i < chk_min_down.length; i++) {
    if (chk_min_down[i].checked == true) {
      min_down += Number(chk_min_down[i].value);
    }
  }

  // 画面上は小数点第二まで表示
  atkexpected.value = Math.floor(atk_calc / (100 - Number(pro_down)));
  magexpected.value = Math.floor(mag_calc / (100 - Number(min_down)));
  csexpected.value = Math.floor(cs_calc / (100 - Number(pro_down)));
}