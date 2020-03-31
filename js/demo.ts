// 1. 类型
let isDone: boolean = false;

let list: number[] = [1, 2, 3];
// 数组泛型
let list2: Array<number> = [1, 2, 3];

// 元组 Tuple,元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let x: [string, number] = ["12", 22];

/* 枚举, 常数不可变
enum类型是对JavaScript标准数据类型的一个补充。 */
enum Color {
  Red = 10,
  Green,
  Blue
}

let super2: Color = Color.Red;
// super2 = 888
console.log(super2); // 10

// 无返回
function warnUser(): void {
  alert("This is my warning message");
}

//never类型表示的是那些永不存在的值的类型。
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 类型断言，指的是你知道此变量类型，并给它断言，两种写法
// 1
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// 2
let someValue1 = "this is a string";
let strLength1: number = (someValue1 as string).length;

// 2 . 接口
// 接口, 问号为可选属性
// 只读属性 readonly

interface LabelledValue {
  label?: string;
  size: number;
  readonly x: number;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object", x: 11 };
printLabel(myObj);

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a; // 只读数组ReadonlyArray<number>
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用const，若做为属性则使用readonly。

// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

// 类类型
interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) {}
}

// 3.类
// private 当成员被标记成private时，它就不能在声明它的类的外部访问。
// public 默认是 public
// protected 成员在派生类中仍然可以访问
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
    console.log(this.name);
  }
}

// new Animal("Cat").name; // 错误: 'name' 是私有的.

// 存取器 set get
let passcode = "secret passcode";

class Employee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);
}

// 静态属性 static

// 抽象类  abstract class Animal
// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。

abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在

// 完整函数类型
let myAdd: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};

// 箭头函数能保存函数创建时的this值，而不是调用时的值

// 当你将一个函数传递到某个库函数里在稍后被调用时，你可能也见到过回调函数里的this会报错。
// 因为当回调函数被调用时，它会被当成一个普通函数调用，this将为undefined。
// 稍做改动，你就可以通过this参数来避免错误。 首先，库函数的作者要指定this的类型：
// 因为onClick 指定了this类型为void，因此传递addClickListener是合法的。 当然了，这也意味着不能使用this.info. 如果你两者都想要，你不得不使用箭头函数了

interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

//
// 泛型，使返回值的类型与传入参数的类型是相同的
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString"); // type of output will be 'string'
// <string>可以省略，编译器会自动识别
let output2 = identity("myString");
// 泛型类型
let myIdentity: <T>(arg: T) => T = identity;
