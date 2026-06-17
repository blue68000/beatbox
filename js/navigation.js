const navigation = `
    <nav>
        <ul>
            <li><a href="/index.html">ホーム</a></li>
            <li><a href="/doc/beatbox.html">ビートボックス</a></li>
            <li><a href="/doc/perfectpitch.html">音程チェック</a></li>
        </ul>
    </nav>
`;

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    if (header) {
        header.innerHTML = navigation;
    }
});
