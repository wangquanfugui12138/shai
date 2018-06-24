# 数据生成、模拟、验证工具库 SHAI library

安装：

```npm
npm install shai
```

简介：

> 前后台通用，但不支持IE9及以下浏览器； <br>
> 针对国人国情定制、使用简单、易扩展，改进了部分通用验证正则； <br>
> 内置数据生成方法60多项，验证方法70多项； <br>
> 区划数据采用最新来源，2018.4 [民政部公示](http://www.mca.gov.cn/article/sj/xzqh/2018/)

------

## 数据生成与模拟

<span style="color:green;">模拟数据的特色：让数据看起来更真实</span>

* 以设定的区划，生成关联的电话号码、经纬度坐标、车牌号、身份证等；
* 以行业统计热门、频次高的词汇，生成姓、名、公司名、国名、地址等；


```javascript
import Shai from 'shai';

var m = new Shai().maker;

// 如果需要设定全局选项，则可如下：
var m = new Shai().mock({
    divisionCode: '610000',
    beginTime: new Date('1980/06/01'),
    endTime: new Date('2018/06/01')
});

```
配置选项(config)：

> ***divisionCode***  设定全局的行政区划范围（行政区划代码），默认全国（不含港澳台） <br>
> ***beginTime***  全局时间范围的开始时间，默认1970-01-01<br>
> ***endTime***  全局时间范围的结束时间，默认当前时间 <br>

**m.get(method, ...args)** 生成数据，包括md5、uuid, 及模拟数据等。

###### get 参数说明：

> 参数1 ***method*** 为方法名； <br>
> 参数2 ***args*** 为可选，方法中的更多参数。

**m.make(content, num1, num2)** JSON模板，变量输出为#method, ...arguments#

###### make 参数说明：

> 参数1 ***content*** 为简单对象文本； <br>
> 参数2 ***num1*** 可选，为输出数组长度，无参数2为单对象输出，有参数3时则为下限值； <br>
> 参数3 ***num2*** 可选，为数组长度的随机的参考上限值。 <br>
> 注：模版内使用正则需转义且不含限定符#，也可先设定为扩展再来使用。

**m.addRule(key|rules, value)**  扩展生成数据的方法，正则或函数；如果参数1为对象集合，则扩展该对象，参数2无效。

**m.increment = 0**   重置自增长基数

**m.region**  取当前地区对象（数组）


##### 用法例子：

```javascript
    import Shai from 'shai'; 
    // ES5使用 const Shai = require('shai').default;

    var m = new Shai().maker;

    // 扩展数据生成方法
    m.addRule({
        'newrule': /abc/, 
        'mydata': test => test += 123
    });

    m.get('cnName') // 返回 张伟
    m.get('bodycard') // 返回 120101199901011693  
    m.get('enum','是','否') // 返回 是
    m.get('province') //返回 北京市

  // 使用模板生成JSON数据
  var user = m.make(`{
      "realname": "#cnName#",
      "address": "#address#",
      "log": ${m.make(`{
          "id_#increment#": #int,0,200#,
          "date": #date#,
          "condition": "#enum,开始,启用,停止#"
        }`,10)}
      }`);

    console.log(user);

  // 不使用模板生成JSON数据
  var user = {
        realname: m.get('cnName'),
        address: m.get('address'),
        log: []
    };
    for (let i = 0; i < 20; i++) {
        user.log.push({
            "id_" +  m.get('increment'): m.get('int', 0, 200)
            date: m.get('date'),
            condition: m.get('enum','开始','启用','停止')
        });
    }
    console.log(JSON.stringify(user));

```

#### 数据生成方法类型：

常用数据生成

* **uuid**          UUID，以时间为因子。可选1个参数，为指定分隔符号，默认为-符号
* **md5**           MD5，可选2个参数，参数1为指定生成密码内容，参数2为是否为16位，默认32位
* **now**           当前时间，可选1个参数，为指定格式，如now('yyyy-MM-dd hh:mm:ss')
* **increment**     递增整数，可选2个参数，参数1为步长，参数2为左补位0的个数
* **exp**           自定义正则，可选参数为字符串表达式（特殊字符需转义）

模拟数据生成

* **int**           整数，可选2个参数，参数1为下限值，参数2位上限值
* **number**        数字，可选3个参数，参数1为下限值(整数)，参数2位上限值(整数)，参数3为小数位数(整数)
* **enum**          自定义范围随机取值，参数为枚举，如enum('a','b','c'), 参数N个
* **validcode**     验证随机数，可选1个参数，位数
* **bool**          布尔，true或false
* **date**          日期，如 2017-11-11 （全局时间段内） 
* **time**          时间，如 11:11:08（全局时间段内） 
* **year**          年 （全局时间段内） 
* **month**         月 
* **day**           日
* **hour**          时
* **minute**        分
* **second**        秒
* **datetime**      时间，可选1个参数，为指定格式，如datetime('yyyy-MM-dd hh:mm:ss')，（全局时间段内）
* **zipcode**       邮编（依据全局区划）
* **bizcode**       统一信用编码
* **english**       英文，可选2个参数，参数1为备选随机英文字串，参数2为长度
* **chinese**       中文，可选2个参数，参数1为备选随机中文字串，参数2为长度
* **text**          文本填充，可选3个参数，参数1为文本，参数2为显示次数或为随机下限值，参数3为随机上限值。
* **bankcard**      银行卡号
* **price**         价格，可选参数1为下限数，可选参数2为上限数，可选参数3为是否带分号, true或false
* **mid**           商品、产品型号或编号
* **company**       企业名称（依据全局区划）
* **account**       账号名
* **password**      密码
* **color**         颜色，如 #000FFF
* **url**           网址
* **mail**          邮箱
* **mobile**        手机
* **telphone**      固定电话（依据全局区划，自动识别8位或7位）
* **enName**        英文姓名
* **enMaleName**    英文姓名 男
* **enFemaleName**  英文姓名 女
* **cnName**        中文姓名
* **cnMaleName**    中文姓名 男
* **cnFemaleName**  中文姓名 女
* **enState**       英文国名
* **cnState**       中文国名
* **citycode**      行政代码（依据全局区划）
* **province**      省（依据全局区划）
* **prefecture**    市州盟（依据全局区划），division为省级，可循环所属市名称
* **county**        县区（限定地区），division为省或市级，可循环所属县区名称
* **lon**           地理位置，经度，（依据全局区划）
* **lat**           地理位置，纬度，（依据全局区划）
* **address**       住址，当前县/区+路+号+...等 （依据全局区划）
* **sex**           性别
* **nation**        民族
* **affiliate**     政治面貌
* **edu**           学历
* **mary**          婚姻状况
* **health**        健康状况
* **bodycard**      身份证（依据全局区划、全局时间段）
* **autocard**      车牌号码（依据全局区划）

#### 补充说明

* 本库仅生成单纯的基本类型数据（字符串、数字、布尔），对象需自主去封装；
* 地址请求拦截、API模拟、二进制数据，可结合其它库来使用：

* [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter) <br>
[json-server](https://github.com/typicode/json-server) <br>
[holder](https://github.com/imsky/holder) <br>
[JsBarcode](https://github.com/lindell/JsBarcode) <br>
[qrcode](https://github.com/PaulKinlan/qrcode) <br>
[randomColor](https://github.com/davidmerfield/randomColor)


------

## 数据验证

```javascript
import Shai from 'shai';

var v = new Shai().valitator;
// ……
```

**v.check(value, rule, ...args)** 单项数据，单规则验证，返回值为是否通过(boolean)

###### check 参数说明：

> 参数1为验证目标数据，参数2为规则，可选，默认为最少一个任意字符 

**v.checkItem(option)**  单项数据，组合规则验证，返回值为是否通过(boolean)

###### checkItem 参数选项(option)说明：

> 属性 ***value***，**必须**。 <br>
> 属性 ***rule***，链式检查，可选。 <br>
> 属性 ***callback***，验证回调函数，可选，参数为未通过的项的数组。 <br>
> 属性 ***rquire***，可选，值为false时，值为空或null,验证结果为true。 <br>
> 动态属性，可选，键为任意规则名，值：规则为正则或函数形参长度1的，为true或false, 函数2形参，等于值，多于2形参，值为数组。 <br>
> 例：{ value:'password1', password:true, eq:'password2', minl:6, maxl:20 ... }

**v.checkItems(itemsArray)**  多项数据，组合规则验证，返回值为是否通过(boolean)

**v.checkJSON(json, struct, callback)**  JSON数据验证，返回值为是否通过(boolean)

###### checkJSOn 参数选项(option)说明：

> 参数1为数据类型结构，参考代码示例，**必须** <br>
> 参数2为数据，**必须** <br>
> 参数3为回调方法，含2参数，未通过项的组、数据层级路径组。

**v.type**  链式验证对象

**v.addRule(key|rules, value)**  扩展验证数据的方法，正则或函数；如果参数1为对象集合，则扩展该对象，参数2无效。


##### 用法例子：

```javascript
    import Shai from 'shai';
    // ES5使用 const Shai = require('shai').default;

    var v = new Shai().validator;
    
    // 扩展验证规则，函数要求有返回值，最少一个引用数据的参数
    v.addRule({
        'newrule': /abc/,
        'myfnc': 'test':(val, n1, n2)=> val.length > n1 && val.length < n2
    });

    // 单项单规则验证
    v.check('password1','==','password2'); // 返回false
    v.check('120101199901011693','bodycard'); // 返回true

    // 单项组合规则验证，动态属性方式
    v.checkItem({
        value:'afdsD12$',
        password:true,
        test:[6, 10]
    });

    // 单项组合规则验证，链式
    v.checkItem({
        value: 'yr qw2{O',
        rule: v.type.eq('yr qw2{O').myfnc(6, 10),
        callback: faults => {
          if (faults.indexOf('eq') === -1) console.log('密码二次验证OK！');
          faults.forEach(f => {
            if (f === 'eq') console.log('二次密码错误');
            if (f === 'myfnc') console.log('不在值6与10之间');
          });
        }
      });

    // 多项组合规则验证
    v.checkItems([
        {value:'123456', int:true, max:200000},
        {value:'password1', password:true, eq:'password2'}
    ]);

    // JSON数据类型验证，链式，可任意层级。
    var json = `{
      "name": "张航",
      "address": "深圳市南山区后海大道110号",
      "age":30,      
      "hobby":["tour","sing"],
      "looks":{
        "size": {
          "foot": 41
        },
        "weight":60
      },
      "notes":[
        {
          "content": "testdsafsdf",
          "log": [{
            "local.time": "2012-12-02"
          }]
        },
        {
          "content": "fdafsd22",
          "log": [{
            "local.time": "2016-15-06"
          }]
        }
      ]
    }`;

    var struct = { // 定义类型结构
      name: v.type.chinese.address,
      address: v.type.string,
      age: v.type.int.eq(30),
      looks: {
        size: {
          foot: v.type.int
        }
      },
      hobby: v.type.array,
      notes: [
        { content: v.type.number,
          log: [
            {
              'local.time': v.type.date
            }
          ]
        }
      ]
    };

    var result = v.checkJSON(json, struct);
    console.log(result);

```

#### 独立使用

可独立使用数据验证模块（不含JSON验证），单独引用。

```javascript
    import Validator from 'shai/validator';
    // ES5使用 const Validator = require('shai/validator').default;

    var v = new Validator();

    v.addRules({'newrule': /abc/});
    v.check('password1','==','password2');
```

#### 数据验证规则类型

基本类型验证（建议配合checkJSON使用，仅测试文本数据）

* **object** 
* **array** 
* **number** 
* **string**
* **boolean**  
* **null**      

格式验证

* **require**     任意字符，必填项
* **english**     英文字母
* **qq**          QQ号 5-11位
* **age**         年龄 0-129岁
* **zipcode**     邮编
* **ip**          IP地址
* **ipv6**        IPV6地址
* **port**        端口
* **bizcode**     统一信用代码
* **invoice**     增值税发票代码
* **bankcard**    银行卡号（仅限国内卡）
* **currency**    货币，2小数，带分号
* **float**       数字
* **int**         整数
* **decimal**     小数点1位及以上
* **percent**     百分数，可两位小数点
* **even**        偶数
* **odd**         奇数
* **chinese**     中文
* **mail**        邮箱地址
* **url**         网址
* **account**     账号名
* **password**    密码
* **safe**        安全敏感字符
* **dbc**         全角
* **hex**         HEX码
* **color**       颜色码，16进制
* **ascii**       ASCII码
* **base64**      BASE64码
* **md5**         md5码
* **uuid**        UUID码
* **mobile**      手机13700000000，融合2017新号规则, +86、86可选
* **telphone**    电话手机混合
* **phone**       固话，可带分机,  +86、86可选
* **date**        日期 2017-7-7或2017/7/7，0补位非必须，含大小月、闰月检测
* **time**        时间 12:12:12，分秒个位须0补位
* **datetime**    日期 + 时间 如2017-07-07 12:02:02, 0补位非必须
* **year**        年份 1900-2099
* **month**       月份 1-12，不带补位，下同
* **day**         日 1-31
* **hour**        小时 0-23
* **minute**      分钟 0-59
* **second**      秒钟 0-59
* **file**        合法文件名
* **image**       合法图像文件名
* **word**        合法文档文件名
* **lon**         地理位置——经度，小数点1位及以上
* **lat**         地理位置——纬度，小数点1位及以上
* **approval**    审批文号 政字〔2004〕18号 或 政字[2004]18号
* **citycode**    地区代码
* **isbn**        书号（仅限13位）
* **bodycard**    身份证，含地区、生日、验证数等规则
* **autocard**    车牌号码，支持新能源车牌号及港澳等
* **upper**       有大写
* **lower**       有小写

比较

* **not**         不等于，可使用!=替代
* **eq**          等于，可使用==替代
* **gt**          大于，可使用>替代
* **gte**         大于或等于，可使用>=替代
* **lt**          小于，可使用<替代
* **lte**         小于或等于，可使用<=替代
* **bet**         之间，大于并小于
* **min**         最小
* **max**         最大
* **minlength**   最小长度
* **maxlength**   最大长度
* **length**      等于长度
* **in**          是否包含，字符

------

## TypeScript 使用

使用TypeScript的项目, 可考虑直接引用ts原文件：

```typescript
import Shai from 'shai/src';

var v: = new Shai().valitator;
// ……
```
