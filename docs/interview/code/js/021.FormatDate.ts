/* 
*题目：实现一个type类型，用于约束特殊时间格式的字符串 * 例子：
* FormatDate<“DD-MM-YY“> *。 允许的字符串为：
const date： FormatDate<“DD-MM-YY“> “12 12 2024“|“12-02-2024“；
* 不允许的字符串为：
const date： FormatDate<“DD-MM-YY“> = “112-12-2024“| “12-112-2024“|“12-12-12024“|…。。
* 时间格式支持多种分隔符： "-" | "/" | "." |
*/

// 解法一：使用正则表达式
type Seperator = "-" | "/" | ".";
type num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type num2 = 0 | num;
type DD = `0${num}` | `1${num}` | `2${num}` | `30` | `31`;
type MM = `0${num}` | `10` | `11` | `12`;
type YY = `19${num2}${num2}` | `20${num2}${num2}`;
type GetStrType<P> = P extends "DD" ? DD : P extends "MM" ? MM : YY;
type FormatDate<T extends string> =
  T extends `${infer Aaa}${Seperator}${infer Bbb}${Seperator}${infer Ccc}`
    ? T extends `${Aaa}${infer Sep}${Bbb}${infer _}${Ccc}`
      ? `${GetStrType<Aaa>}${Sep}${GetStrType<Bbb>}${Sep}${GetStrType<Ccc>}`
      : never
    : never;

// 测试用例

type res = FormatDate<"DD-MM-YY">; // '20210101'
