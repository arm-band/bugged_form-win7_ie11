# [テストフォーム（Win7 IE11バグ確認用）](https://arm-band.github.io/bugged_form-win7_ie11/)

## 概要

[このフォーム](https://arm-band.github.io/bugged_form-win7_ie11/)は

- Windows7
- Internet Explorer 11 (11.0.9600.18617)

において、

- dl,dt,ddの子要素にフォームの部品があるフォーム

で、上から順番にTabでフォーカスを移動させると、ラジオボタンの直後のテキストボックスの表示がおかしくなる現象の検証用のフォームです。

なお、当現象はWin10のIE11や、他のブラウザでは発生しませんでした。

## 現象

通常、フォーカスが当たった場合、focustest.jsによりfocusクラスが付与され、styletest.cssのinput[type="text"].focusまたはinput[type="email"].focusによる、青いエフェクトが付与される（下図1）のが正常な動作ですが、上記の条件（Win7のIE11で、ラジオボタンの直後のテキストボックスにTabで移動する）では白抜けしてしまいます（下図2）。しかも、この状態でテキストを入力すると文字も白（透明？）になってしまい、何が入力されたか分からなくなるという少し困った現象になります。なお、この状態は他のテキストボックスなどにフォーカスを移動させると直ります。

<figure>
    <img src="./img/ss1.jpg" alt="フォーカスの当たったテキストボックス（正常な場合）">
    <figcaption>フォーカスの当たったテキストボックス（正常な場合）</figcaption>
</figure>
<figure>
    <img src="./img/ss2.jpg" alt="フォーカスの当たったテキストボックス（問題の現象発生時）">
    <figcaption>フォーカスの当たったテキストボックス（問題の現象発生時）</figcaption>
</figure>

## 対処

下記対処により現象が回避できることが確認できました。

- dl,dt,ddタグを使用しない（ラジオボタン直後のテキストボックスの親要素のddだけdivタグに変更するなど）
- フォーム全体を囲っているdivタグに指定されたwidth:960px;を960px以外の数値に変更する
- ddに適用されるmargin-left, border-top, paddingのいずれか1つをやめる

ただし、何故これで現象が回避できるのか理由が分かりませんでした。