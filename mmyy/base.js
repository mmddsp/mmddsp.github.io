function createFieldElem(option) {
    var title = option.title;
    var items = option.items;
    var plainText = option.plainText;
    var classStr = option.classStr;
    var text = option.text;
    var fieldElem = document.createElement('div');
    var fieldClass = ['field', classStr].join(' ');
    fieldElem.setAttribute('class', fieldClass);
    var titleElem = document.createElement('h4');
    titleElem.setAttribute('class', 'title');
    titleElem.innerHTML = title;
    fieldElem.appendChild(titleElem);
    var ulElem = document.createElement('ul');
    var htmlStr = ''
    for (var i = 0; i < items.length; i++) {
        if (plainText) {
            htmlStr = htmlStr + '<li>' + items[i] + '</li>';
        } else {
            htmlStr = htmlStr + '<li><a href="' + items[i] + '" target="_blank">' + items[i] + '</a><span speed="' + items[i] + '">测速中</span></li>';
        }
    }
    if (text) {
        htmlStr = htmlStr + '<li class="text">' + text + '</li>';
    }
    ulElem.innerHTML = htmlStr;
    fieldElem.appendChild(ulElem);
    return fieldElem;
}

const emails = ['@gmail.com',];
const newestUrls = ['https://鈑娩睸.miaomiao.sbs/關於喵','https://鈑娩睸.miaomiao.sbs/關於喵'];
const otherUrls = ['https://鈑娩睸.miaomiao.sbs/關於喵'];
const foreverUrls = ['mmyy.sbs'];
const notices = [ '* 我们推荐PC和Andriod手机用户使用Chrome(谷歌)浏览器访问，iPhone用户我们建立您使用手机自带Safria浏览器访问。 ','* 如果点击进入后打不开本站，请换（电信或联通）网络在访问本站，移动网络频繁屏蔽本站～。',];

var mainElem = document.getElementById('main');
var logoElem = document.createElement('div');
logoElem.setAttribute('class', 'brand');
logoElem.setAttribute('id', 'logo');
logoElem.innerHTML = '喵喵<span class="flag">影院</span>'
mainElem.appendChild(logoElem);
//
var foreverFieldElem = createFieldElem({
    title: '请牢记永久网址',
    items: foreverUrls
});
mainElem.appendChild(foreverFieldElem);
var newestFieldElem = createFieldElem({
    title: '以下为最新地址(定期更新，牢记上面发布页)',
    items: newestUrls,
    text: ''
});
mainElem.appendChild(newestFieldElem);
//


var mailFieldElem = createFieldElem({
    title: '發送郵件獲得',
    items: emails,
    plainText: true
});
//mainElem.appendChild(mailFieldElem);

var noticeFieldElem = createFieldElem({
    title: '注意事項',
    items: notices,
    plainText: true,
    classStr: 'desc'
});
mainElem.appendChild(noticeFieldElem);

var ping = 1;
    setInterval("ping++", 1);

document.querySelectorAll('span[speed]').forEach(function(ele,i){
    var sortid = ele.getAttribute('speed');
    var img = new Image();
        var start = new Date().getTime();
        img.onerror = function() {
            var str = "较慢";
                if (ping < 300) {
                    ele.setAttribute('style', 'color: green')
                    str = "极快";
                }
                if (ping > 300 && ping < 500) {
                    ele.setAttribute('style', 'color: #a72eff')
                    str = "较快";
                }
                if (ping > 500) {
                    ele.setAttribute('style', 'color: #666666')
                }
                ele.innerHTML = "" + str + "" + "(" + ping * 1 + "ms)";
        };
        img.src = sortid + '?' +  start;

    ele.appendChild(img)
})
