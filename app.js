// 1から100の間のランダムな数字を生成
let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// DOM要素を取得
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const attemptsDisplay = document.getElementById('attempts');
const messageDisplay = document.getElementById('message');
const restartButton = document.getElementById('restart');

// 数字の予想をチェックする関数
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    // 入力が数字でない場合、メッセージを表示
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageDisplay.textContent = "1から100の間の数字を入力してください。";
        return;
    }

    // 予想回数をカウント
    attempts++;
    attemptsDisplay.textContent = `試行回数: ${attempts}`;

    // 予想とターゲットを比較
    if (userGuess === targetNumber) {
        messageDisplay.textContent = `おめでとうございます！ ${targetNumber} が正解です！`;
        submitButton.disabled = true;
        restartButton.style.display = "inline-block";
    } else if (userGuess < targetNumber) {
        messageDisplay.textContent = "もっと大きい数字です。";
    } else {
        messageDisplay.textContent = "もっと小さい数字です。";
    }

    guessInput.value = '';
}

// リスタートボタンの処理
function restartGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsDisplay.textContent = `試行回数: 0`;
    messageDisplay.textContent = '';
    guessInput.value = '';
    submitButton.disabled = false;
    restartButton.style.display = "none";
}

// イベントリスナーを設定
submitButton.addEventListener('click', checkGuess);
restartButton.addEventListener('click', restartGame);

// 初期設定
restartButton.style.display = "none";
