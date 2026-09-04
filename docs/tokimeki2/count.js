// 右クリックメニューの禁止
document.oncontextmenu = function () { return false; }

// キャラクターデータの一元管理
const characters = {
    hikari: { name: "光", pics: ["picture/default.webp", "picture/hikari1.webp", "picture/hikari2.webp"] },
    kotoko: { name: "琴子", pics: ["picture/default.webp", "picture/kotoko1.webp", "picture/kotoko2.webp"] },
    maeka: { name: "舞佳", pics: ["picture/default.webp", "picture/maeka1.webp", "picture/maeka2.webp"] },
    kaedeko: { name: "楓子", pics: ["picture/default.webp", "picture/kaedeko1.webp", "picture/kaedeko2.webp"] },
    kaori: { name: "八重さん", pics: ["picture/default.webp", "picture/kaori1.webp", "picture/kaori2.webp"] },
    maho: { name: "真帆", pics: ["picture/default.webp", "picture/maho1.webp", "picture/maho2.webp"] },
    sumire: { name: "すみれ", pics: ["picture/default.webp", "picture/sumire1.webp", "picture/sumire2.webp"] },
    miho: { name: "美帆", pics: ["picture/default.webp", "picture/miho1.webp", "picture/miho2.webp"] },
    mei: { name: "メイ様", pics: ["picture/default.webp", "picture/mei1.webp", "picture/mei2.webp"] },
    homura: { name: "ほむら", pics: ["picture/default.webp", "picture/homura1.webp", "picture/homura2.webp"] },
    akane: { name: "茜", pics: ["picture/default.webp", "picture/akane1.webp", "picture/akane2.webp"] },
    kasumi: { name: "先生", pics: ["picture/default.webp", "picture/kasumi1.webp", "picture/kasumi2.webp"] },
    miyuki: { name: "ゆっきー", pics: ["picture/default.webp", "picture/miyuki1.webp", "picture/miyuki2.webp"] }
};

// 各キャラクターの状態（カウントと画像インデックス）を保持するオブジェクト
const charStates = {};

// すべてのキャラクターに対してイベントリスナーを自動登録
Object.keys(characters).forEach(id => {
    // 状態の初期化
    charStates[id] = {
        count: 0,
        imgIndex: 0
    };

    const config = characters[id];
    const button = document.querySelector(`#${id}`);

    // HTML上に該当する要素（ボタン）が存在する場合のみ処理
    if (button) {
        button.addEventListener('mouseup', (e) => {
            const state = charStates[id];
            const countElement = document.getElementById(`${id}count`);
            const picElement = document.getElementById(`${id}pic`);

            switch (e.button) {
                case 0: // 左クリック: カウントアップ
                    state.count++;
                    // ★ 0のときは非表示（空文字）、それ以外は数字を表示
                    if (countElement) countElement.innerHTML = (state.count === 0) ? "" : state.count;
                    break;

                case 1: // ホイールクリック: 画像切り替え
                    state.imgIndex++;
                    if (state.imgIndex >= config.pics.length) {
                        state.imgIndex = 0;
                    }
                    if (picElement) picElement.src = config.pics[state.imgIndex];
                    break;

                case 2: // 右クリック: カウントダウン
                    state.count--;
                    // ★ 0のときは非表示（空文字）、それ以外は数字を表示
                    if (countElement) countElement.innerHTML = (state.count === 0) ? "" : state.count;
                    break;

                default:
                    break;
            }
        });
    }
});
