const navigation = `
    <nav>
        <ul>
            <li><a href="/beatbox/index.html">ホーム</a></li>
            <li><a href="/beatbox/doc/beatbox.html">ビートボックス</a></li>
            <li><a href="/beatbox/doc/perfectpitch.html">音程チェック</a></li>
            <li><a href="/beatbox/doc/sound2vibe.html">Sound To Vibe</a></li>
            <li><a href="/beatbox/doc/voicememo.html">音声メモ</a></li>
        </ul>
    </nav>
`;

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    if (header) {
        header.innerHTML = navigation;
    }
});
