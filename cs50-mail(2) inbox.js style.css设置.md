# cs50-mail(2) inbox.js style.css设置

padding的设置

padding:25px 50px;

当涉及到网页开发中的字体选择时，有许多优美的字体可供选择。以下是一些好看的字体以及如何在网页中使用它们的方法：

### 正文字体推荐

1. [**思源黑体**：这是一款规整、易读且免费的字体，适用于商务风格的网页或正文](https://www.zhihu.com/question/20727176)[1](https://www.zhihu.com/question/20727176)。
2. [**思源柔黑**：这款字体的笔画较为圆润，适合女性化或儿童化的网页场景](https://www.zhihu.com/question/20727176)[1](https://www.zhihu.com/question/20727176)。
3. [**思源宋体**：作为一种正式、庄重的字体，适合正经的场景，也可用作标题](https://www.zhihu.com/question/20727176)[1](https://www.zhihu.com/question/20727176)。
4. [**方正书宋**：这是一款偏向书面风格的字体，适合古典或文艺感强的网页](https://www.zhihu.com/question/20727176)[1](https://www.zhihu.com/question/20727176)。
5. [**方正楷体**：楷体的笔画秀美，适合房地产或文学相关的网页](https://www.zhihu.com/question/20727176)[1](https://www.zhihu.com/question/20727176)。
6. [**庞门正道标题体**：适用于科技感、力量感或运动感强的网页](https://www.zhihu.com/question/20727176)[1](https://www.zhihu.com/question/20727176)。
7. [**站酷高端黑**：用于封面或标题，适合展现力量感和男性气息的页面](https://www.zhihu.com/question/20727176)[1](https://www.zhihu.com/question/20727176)。

### 毛笔书法字体推荐

毛笔字体具有豪放气质，适合表现胜利、喜悦或骄傲等情感。以下是一些常用的毛笔字体：

1. [**金梅宇含毛楷**：笔画较粗，适合在网页中使用](https://www.zhihu.com/question/20727176)[1](https://www.zhihu.com/question/20727176)。
2. [**大髭**：笔画粗细适中](https://www.zhihu.com/question/20727176)[1](https://www.zhihu.com/question/20727176)。
3. [**白舟魂心**：超粗笔画字体，适合内容较少的排版](https://www.zhihu.com/question/20727176)[1](https://www.zhihu.com/question/20727176)。
4. [**日文毛笔**：具有明显的笔刷效果](https://www.zhihu.com/question/20727176)[1](https://www.zhihu.com/question/20727176)。
5. [**李旭科毛笔行书**：适合在综艺节目等场景中使用](https://www.zhihu.com/question/20727176)[1](https://www.zhihu.com/question/20727176)。

### 英文字体推荐

1. [**Didot**：时尚杂志如 VOGUE 和 BAZAAR 常用的字体，适合时尚相关的网页](https://www.zhihu.com/question/20727176)[2](https://bing.com/search?q=%E5%A5%BD%E7%9C%8B%E7%9A%84%E5%AD%97%E4%BD%93)。
2. [**Rockwell**：品质感强的打印字体，适用于工程师、程序代码编辑器等场景](https://www.zhihu.com/question/20727176)[2](https://bing.com/search?q=%E5%A5%BD%E7%9C%8B%E7%9A%84%E5%AD%97%E4%BD%93)。
3. [**Centaur**：用于历史感的电影海报等，具有复古风格](https://www.zhihu.com/question/20727176)[2](https://bing.com/search?q=%E5%A5%BD%E7%9C%8B%E7%9A%84%E5%AD%97%E4%BD%93)。
4. [**Franklin Gothic**：硬朗、精练，适合表现男性或力量感的页面](https://www.zhihu.com/question/20727176)[2](https://bing.com/search?q=%E5%A5%BD%E7%9C%8B%E7%9A%84%E5%AD%97%E4%BD%93)。
5. [**Myriad**：现代感强，适用于屏幕阅读体验](https://www.zhihu.com/question/20727176)[2](https://bing.com/search?q=%E5%A5%BD%E7%9C%8B%E7%9A%84%E5%AD%97%E4%BD%93)。

[你可以根据网页主题和风格选择适合的字体，并使用 `@font-face` 规则将其引入到网页中。记得在 CSS 中定义字体族名称，然后通过 `font-family` 属性引用字体名称。](https://www.zhihu.com/question/20727176)[1](https://www.zhihu.com/question/20727176)[2](https://bing.com/search?q=%E5%A5%BD%E7%9C%8B%E7%9A%84%E5%AD%97%E4%BD%93)

当你在网页中使用自定义字体时，你可以通过以下 CSS 代码来引入这些字体。请确保你已经下载了这些字体文件并将它们放在你的项目目录中。

```css
/* 引入思源黑体 */
@font-face {
    font-family: 'Source Sans Pro';
    src: url('path/to/SourceSansPro-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

/* 引入思源柔黑 */
@font-face {
    font-family: 'Source Han Sans SC';
    src: url('path/to/SourceHanSansSC-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
}

/* 引入思源宋体 */
@font-face {
    font-family: 'Source Han Serif SC';
    src: url('path/to/SourceHanSerifSC-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
}

/* 引入方正书宋 */
@font-face {
    font-family: 'FangSong';
    src: url('path/to/FangSong.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

/* 引入方正楷体 */
@font-face {
    font-family: 'FangZhengKaiTi';
    src: url('path/to/FangZhengKaiTi.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

/* 引入庞门正道标题体 */
@font-face {
    font-family: 'PMingLiU';
    src: url('path/to/PMingLiU.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

/* 引入站酷高端黑 */
@font-face {
    font-family: 'ZCOOL Kuhei';
    src: url('path/to/ZCOOLKuhei-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
```

在上面的代码中，你需要将 `path/to/` 替换为你实际存放字体文件的路径。然后，你就可以在你的 CSS 文件中使用这些字体了：

```css
h1 {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 2rem;
    font-weight: bold;
}

p {
    font-family: 'Source Han Sans SC', sans-serif;
    font-size: 1rem;
}

/* 其他样式... */
```

记得在 HTML 文件中链接你的 CSS 文件，以便字体生效。
