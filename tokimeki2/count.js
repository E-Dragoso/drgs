//時間がないのでヒロインごとに関数用意するクソ実装でｲｸｿﾞｰ

document.oncontextmenu = function () {return false;}

//#region 光
//カウンタ
var hikariCount = 0;

//画像切り替え
var hikariArr = ["picture/default.jpg", "picture/hikari1.jpg", "picture/hikari2.jpg"];
var hikariArrIndex = 0;

//クリック検知
let hikariButton = document.querySelector('#hikari');
hikariButton.addEventListener('mouseup', (e) => {
    //左クリックか右クリックか判定
    switch (e.button) {
        case 0:
            //カウントアップ
            hikariCount++;
            document.getElementById("hikaricount").innerHTML = hikariCount;
            break;
        case 1:
            hikariArrIndex++;
            if (hikariArrIndex > 2){
                hikariArrIndex = 0
            }
            document.getElementById('hikaripic').src = hikariArr[hikariArrIndex];
            break;
        case 2:
            //カウントダウン
            hikariCount--;
            document.getElementById("hikaricount").innerHTML = hikariCount;
            break;
        default:
    }
}
)
//#endregion

//#region 琴子
//カウンタ
var kotokoCount = 0;

//画像切り替え
var kotokoArr = ["picture/default.jpg", "picture/kotoko1.jpg", "picture/kotoko2.jpg"];
var kotokoArrIndex = 0;

//クリック検知
let kotokoButton = document.querySelector('#kotoko');
kotokoButton.addEventListener('mouseup', (e) => {
    //左クリックか右クリックか判定
    switch (e.button) {
        case 0:
            //カウントアップ
            kotokoCount++;
            document.getElementById("kotokocount").innerHTML = kotokoCount;
            break;
        case 1:
            kotokoArrIndex++;
            if (kotokoArrIndex > 2){
                kotokoArrIndex = 0
            }
            document.getElementById('kotokopic').src = kotokoArr[kotokoArrIndex];
            break;
        case 2:
            //カウントダウン
            kotokoCount--;
            document.getElementById("kotokocount").innerHTML = kotokoCount;
            break;
        default:
    }
}
)
//#endregion

//#region 舞佳
//カウンタ
var maekaCount = 0;

//画像切り替え
var maekaArr = ["picture/default.jpg", "picture/maeka1.jpg", "picture/maeka2.jpg"];
var maekaArrIndex = 0;

//クリック検知
let maekaButton = document.querySelector('#maeka');
maekaButton.addEventListener('mouseup', (e) => {
    //左クリックか右クリックか判定
    switch (e.button) {
        case 0:
            //カウントアップ
            maekaCount++;
            document.getElementById("maekacount").innerHTML = maekaCount;
            break;
        case 1:
            maekaArrIndex++;
            if (maekaArrIndex > 2){
                maekaArrIndex = 0
            }
            document.getElementById('maekapic').src = maekaArr[maekaArrIndex];
            break;
        case 2:
            //カウントダウン
            maekaCount--;
            document.getElementById("maekacount").innerHTML = maekaCount;
            break;
        default:
    }
}
)
//#endregion

//#region 楓子
//カウンタ
var kaedekoCount = 0;

//画像切り替え
var kaedekoArr = ["picture/default.jpg", "picture/kaedeko1.jpg", "picture/kaedeko2.jpg"];
var kaedekoArrIndex = 0;

//クリック検知
let kaedekoButton = document.querySelector('#kaedeko');
kaedekoButton.addEventListener('mouseup', (e) => {
    //左クリックか右クリックか判定
    switch (e.button) {
        case 0:
            //カウントアップ
            kaedekoCount++;
            document.getElementById("kaedekocount").innerHTML = kaedekoCount;
            break;
        case 1:
            kaedekoArrIndex++;
            if (kaedekoArrIndex > 2){
                kaedekoArrIndex = 0
            }
            document.getElementById('kaedekopic').src = kaedekoArr[kaedekoArrIndex];
            break;
        case 2:
            //カウントダウン
            kaedekoCount--;
            document.getElementById("kaedekocount").innerHTML = kaedekoCount;
            break;
        default:
    }
}
)
//#endregion

//#region 八重さん
//カウンタ
var kaoriCount = 0;

//画像切り替え
var kaoriArr = ["picture/default.jpg", "picture/kaori1.jpg", "picture/kaori2.jpg"];
var kaoriArrIndex = 0;

//クリック検知
let kaoriButton = document.querySelector('#kaori');
kaoriButton.addEventListener('mouseup', (e) => {
    //左クリックか右クリックか判定
    switch (e.button) {
        case 0:
            //カウントアップ
            kaoriCount++;
            document.getElementById("kaoricount").innerHTML = kaoriCount;
            break;
        case 1:
            kaoriArrIndex++;
            if (kaoriArrIndex > 2){
                kaoriArrIndex = 0
            }
            document.getElementById('kaoripic').src = kaoriArr[kaoriArrIndex];
            break;
        case 2:
            //カウントダウン
            kaoriCount--;
            document.getElementById("kaoricount").innerHTML = kaoriCount;
            break;
        default:
    }
}
)
//#endregion

//#region 真帆
//カウンタ
var mahoCount = 0;

//画像切り替え
var mahoArr = ["picture/default.jpg", "picture/maho1.jpg", "picture/maho2.jpg"];
var mahoArrIndex = 0;

//クリック検知
let mahoButton = document.querySelector('#maho');
mahoButton.addEventListener('mouseup', (e) => {
    //左クリックか右クリックか判定
    switch (e.button) {
        case 0:
            //カウントアップ
            mahoCount++;
            document.getElementById("mahocount").innerHTML = mahoCount;
            break;
        case 1:
            mahoArrIndex++;
            if (mahoArrIndex > 2){
                mahoArrIndex = 0
            }
            document.getElementById('mahopic').src = mahoArr[mahoArrIndex];
            break;
        case 2:
            //カウントダウン
            mahoCount--;
            document.getElementById("mahocount").innerHTML = mahoCount;
            break;
        default:
    }
}
)
//#endregion

//#region すみれ
//カウンタ
var sumireCount = 0;

//画像切り替え
var sumireArr = ["picture/default.jpg", "picture/sumire1.jpg", "picture/sumire2.jpg"];
var sumireArrIndex = 0;

//クリック検知
let sumireButton = document.querySelector('#sumire');
sumireButton.addEventListener('mouseup', (e) => {
    //左クリックか右クリックか判定
    switch (e.button) {
        case 0:
            //カウントアップ
            sumireCount++;
            document.getElementById("sumirecount").innerHTML = sumireCount;
            break;
        case 1:
            sumireArrIndex++;
            if (sumireArrIndex > 2){
                sumireArrIndex = 0
            }
            document.getElementById('sumirepic').src = sumireArr[sumireArrIndex];
            break;
        case 2:
            //カウントダウン
            sumireCount--;
            document.getElementById("sumirecount").innerHTML = sumireCount;
            break;
        default:
    }
}
)
//#endregion

//#region 美帆
//カウンタ
var mihoCount = 0;

//画像切り替え
var mihoArr = ["picture/default.jpg", "picture/miho1.jpg", "picture/miho2.jpg"];
var mihoArrIndex = 0;

//クリック検知
let mihoButton = document.querySelector('#miho');
mihoButton.addEventListener('mouseup', (e) => {
    //左クリックか右クリックか判定
    switch (e.button) {
        case 0:
            //カウントアップ
            mihoCount++;
            document.getElementById("mihocount").innerHTML = mihoCount;
            break;
        case 1:
            mihoArrIndex++;
            if (mihoArrIndex > 2){
                mihoArrIndex = 0
            }
            document.getElementById('mihopic').src = mihoArr[mihoArrIndex];
            break;
        case 2:
            //カウントダウン
            mihoCount--;
            document.getElementById("mihocount").innerHTML = mihoCount;
            break;
        default:
    }
}
)
//#endregion

//#region メイ様
//カウンタ
var meiCount = 0;

//画像切り替え
var meiArr = ["picture/default.jpg", "picture/mei1.jpg", "picture/mei2.jpg"];
var meiArrIndex = 0;

//クリック検知
let meiButton = document.querySelector('#mei');
meiButton.addEventListener('mouseup', (e) => {
    //左クリックか右クリックか判定
    switch (e.button) {
        case 0:
            //カウントアップ
            meiCount++;
            document.getElementById("meicount").innerHTML = meiCount;
            break;
        case 1:
            meiArrIndex++;
            if (meiArrIndex > 2){
                meiArrIndex = 0
            }
            document.getElementById('meipic').src = meiArr[meiArrIndex];
            break;
        case 2:
            //カウントダウン
            meiCount--;
            document.getElementById("meicount").innerHTML = meiCount;
            break;
        default:
    }
}
)
//#endregion

//#region ほむら
//カウンタ
var homuraCount = 0;

//画像切り替え
var homuraArr = ["picture/default.jpg", "picture/homura1.jpg", "picture/homura2.jpg"];
var homuraArrIndex = 0;

//クリック検知
let homuraButton = document.querySelector('#homura');
homuraButton.addEventListener('mouseup', (e) => {
    //左クリックか右クリックか判定
    switch (e.button) {
        case 0:
            //カウントアップ
            homuraCount++;
            document.getElementById("homuracount").innerHTML = homuraCount;
            break;
        case 1:
            homuraArrIndex++;
            if (homuraArrIndex > 2){
                homuraArrIndex = 0
            }
            document.getElementById('homurapic').src = homuraArr[homuraArrIndex];
            break;
        case 2:
            //カウントダウン
            homuraCount--;
            document.getElementById("homuracount").innerHTML = homuraCount;
            break;
        default:
    }
}
)
//#endregion

//#region 茜
//カウンタ
var akaneCount = 0;

//画像切り替え
var akaneArr = ["picture/default.jpg", "picture/akane1.jpg", "picture/akane2.jpg"];
var akaneArrIndex = 0;

//クリック検知
let akaneButton = document.querySelector('#akane');
akaneButton.addEventListener('mouseup', (e) => {
    //左クリックか右クリックか判定
    switch (e.button) {
        case 0:
            //カウントアップ
            akaneCount++;
            document.getElementById("akanecount").innerHTML = akaneCount;
            break;
        case 1:
            akaneArrIndex++;
            if (akaneArrIndex > 2){
                akaneArrIndex = 0
            }
            document.getElementById('akanepic').src = akaneArr[akaneArrIndex];
            break;
        case 2:
            //カウントダウン
            akaneCount--;
            document.getElementById("akanecount").innerHTML = akaneCount;
            break;
        default:
    }
}
)
//#endregion

//#region 先生
//カウンタ
var kasumiCount = 0;

//画像切り替え
var kasumiArr = ["picture/default.jpg", "picture/kasumi1.jpg", "picture/kasumi2.jpg"];
var kasumiArrIndex = 0;

//クリック検知
let kasumiButton = document.querySelector('#kasumi');
kasumiButton.addEventListener('mouseup', (e) => {
    //左クリックか右クリックか判定
    switch (e.button) {
        case 0:
            //カウントアップ
            kasumiCount++;
            document.getElementById("kasumicount").innerHTML = kasumiCount;
            break;
        case 1:
            kasumiArrIndex++;
            if (kasumiArrIndex > 2){
                kasumiArrIndex = 0
            }
            document.getElementById('kasumipic').src = kasumiArr[kasumiArrIndex];
            break;
        case 2:
            //カウントダウン
            kasumiCount--;
            document.getElementById("kasumicount").innerHTML = kasumiCount;
            break;
        default:
    }
}
)
//#endregion

//#region ゆっきー
//カウンタ
var miyukiCount = 0;

//画像切り替え
var miyukiArr = ["picture/default.jpg", "picture/miyuki1.jpg", "picture/miyuki2.jpg"];
var miyukiArrIndex = 0;

//クリック検知
let miyukiButton = document.querySelector('#miyuki');
miyukiButton.addEventListener('mouseup', (e) => {
    //左クリックか右クリックか判定
    switch (e.button) {
        case 0:
            //カウントアップ
            miyukiCount++;
            document.getElementById("miyukicount").innerHTML = miyukiCount;
            break;
        case 1:
            miyukiArrIndex++;
            if (miyukiArrIndex > 2){
                miyukiArrIndex = 0
            }
            document.getElementById('miyukipic').src = miyukiArr[miyukiArrIndex];
            break;
        case 2:
            //カウントダウン
            miyukiCount--;
            document.getElementById("miyukicount").innerHTML = miyukiCount;
            break;
        default:
    }
}
)
//#endregion

