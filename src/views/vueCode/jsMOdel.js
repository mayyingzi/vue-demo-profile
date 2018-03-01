/**
 * @author zxy
 * @fileOverview javascript常用设计模式
 */

class Car {
    constructor(options) {
        // some defaults
        options = options || '';
        this.doors = options.doors || 4;
        this.state = options.state || 'brand new';
        this.color = options.color || 'silver';
    }
}

class Truck {
    constructor(options) {
        this.state = options.state || 'used';
        this.wheelSize = options.wheelSize || 'large';
        this.color = options.color || 'blue';
    }
}
//  Factory Pattern 工厂模式
class VehicleFactory {
    constructor() {
        this.VehicleClass = Car;
    }
    createVehicle(options) {
        if (options.vehicleType === 'car') {
            this.VehicleClass = Car;
        } else {
            this.VehicleClass = Truck;
        }
        return new this.VehicleClass(options);
    }
}

// usage
const carFactory = new VehicleFactory();
const car = carFactory.createVehicle({
    vehicleType: 'car',
    color: 'yellow',
    doors: 6
});
// Module Pattern 模块化模式
const privateName = Symbol('privateName');
// 使用class类
class MyModule {
    set constainer(value) {
        this.value = value;
    }
    get constainer() {
        return this.value;
    }
    init() {
        this.value = 'ES6 module';
    }
    [privateName]() {
        this.privateName = 'hi';
    }
}

// 单例模式
let instance = null;
// 一般单例模式
class mySingleton {
    constructor() {
        if (!instance) {
            instance = this;
            return instance;
        }
    }
    publicMethod() {
        this.logInfo = 'The public can see me!';
    }
}
/**
 * 静态方法和单例模式
 * 1）静态方法不会被继承
 * 2）静态方法不用实例化（不能用new）能够直接调用（[类名/对像名].[静态方法名]）
 *
 * @class mySingletonS
 */
class MySingletonS {
    static getInstance() {
        if (!MySingletonS.instance) {
            MySingletonS.instance = new MySingletonS();
        }
        return MySingletonS.instance;
    }
    publicMethod() {
        this.puInfo = 'the public can see me!';
    }
}

// Observer Pattern 观察者模式
/**
 * 目标对象
 * 类似接口， 不具体实现，只有方法名称
 *
 * @class Subject
 */
class Subject {
    addObserver() {
        this.error = 'this method must be overwritten!';
        throw new Error(this.error);
    }
    removeObserver() {
        this.error = 'this method must be overwritten!';
        throw new Error(this.error);
    }
    notify() {
        this.error = 'this method must be overwritten!';
        throw new Error(this.error);
    }
}
class Observer {
    update() {
        this.error = 'this method must be overwritten!';
        throw new Error(this.error);
    }
}
/**
 * 具体的对象
 *
 * @class ControlCheckbox
 * @extends {Subject}
 */
class ControlCheckbox extends Subject {
    constructor() {
        super();
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    notify(context) {
        const observerCount = this.observers.length;
        for (let i = 0; i < observerCount; i++) {
            this.observers[i].update(context);
        }
    }
}
/**
 * 具体的观察者
 *
 * @class AddedCheckboxs
 * @extends {Observer}
 */
class AddedCheckboxs extends Observer {
    constructor(subject) {
        super();
        console.log(subject);
        this.subject = subject;
    }
    update(context) {
        this.checked = context;
    }
}

// 观察者模式-变体-发布-订阅模式
class Pubsub {
    constructor() {
        this.subUid = 0; // 订阅的id
        this.topics = {}; // 存放所有的订阅者
    }
    publish(topic, args) {
        if (!this.topics[topic]) {
            return false;
        }
        const subscribers = this.topics[topic];
        let len = subscribers ? subscribers.length : 0;
        while (len--) {
            subscribers[len].func(topic, args);
        }
        return this;
    }
    subscribe(topic, func) {
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }
        const token = (++this.subUid).toString();
        this.topics[topic].push({
            token,
            func
        });
        return token;
    }
    unsubscribe(token) {
        Object.entries(this.topics).forEach(([key, value]) => {
            if (key && value) {
                for (let i = 0, j = value.length; i < j; i++) {
                    if (value[i].token === token) {
                        value.splice(i, 1);
                        // return token;
                    }
                }
            }
        });
        // for (const m in this.topics) {
        //     if (this.topics[m]) {
        //         for (let i = 0, j = this.topics[m].length; i < j; i++) {
        //             if (this.topics[m][i].token === token) {
        //                 this.topics[m].splice(i, 1);
        //                 return token;
        //             }
        //         }
        //     }
        // }
        return this;
    }
}
// usage
const messageLogger = (topics, data) => {
    console.log(`Logging:${topics}:${data}`);
};
const pubsub = new Pubsub();
const subscription = pubsub.subscribe('inbox/newMessage', messageLogger);
pubsub.publish('inbox/newMessage', 'hello world');
console.log(pubsub);
console.log(subscription);

// Mediator Pattern 终结者模式，和发布订阅模式非常相似
/**
 * Command Pattern 命令行模式
 * 只使用一个方法，第一个参数，便是我们实际调用的方法名称， 后面的参数作为该调用方法的参数
 * @class CarManager
 */
class CarManager {
    requestInfo(model, id) {
        this.requestInfoR = `the information for ${model} with ID  ${id} is foobar`;
        return this.requestInfoR;
    }
    buyVehicle(model, id) {
        this.buyVehicleR = `you have successful purchased item ${id} , a ${model}`;
        return this.buyVehicleR;
    }
    arrangeViewing(model, id) {
        this.arrangeViewingR = `you have successful booked a viewing of ${model} ${id}`;
        return this.arrangeViewingR;
    }
    execute(name, ...args) {
        const carManager = new CarManager();
        this.executeR = carManager[name] && carManager[name](...args);
        return this.executeR;
    }
}
const carManager = new CarManager();
console.log(carManager.execute('arrangeViewing', 'Ferrari', '12345'));

// 装饰者模式
/**
 * Facade Pattern 外观模式
 * 只暴露一个简单的方法,然后该该方法在内部执行,调用内部的其他方法,jquery使用很多这种模式，eg: ().css、.ajax()
 * @class Facade
 */
class Facade {
    _get() {
        console.log(`current value: ${this.i}`);
    }
    _set(val) {
        this.i = val;
    }
    _run() {
        this.runVal = 'running';
        console.log(this.runVal);
    }
    _jump() {
        this.jumpVal = 'jumping';
        console.log(this.jumpVal);
    }
    facade(args) {
        this._set(args.val);
        this._get();
        if (args.run) {
            this._run();
        }
    }
}
const fa = new Facade();
fa.facade({
    run: true,
    val: 10
});

// Mixin Pattern 混入模式
// 将一个对象的方法复制给另一个对象

// Decorator Pattern 装饰着模式
// 装饰器，只是针对一个基本的对象， 添加一些修饰
class MacBook {
    cost() {
        this.costVal = 997;
        return this.costVal;
    }
    screenSize() {
        this.screenSizeVal = 11.6;
        return this.screenSizeVal;
    }
}
const meDecorate = {
    Engraving(macbook) {
        const v = macbook.cost();
        macbook.cost = () => v + 200;
    },
    Memory(macbook) {
        const v = macbook.cost();
        macbook.cost = () => v + 75;
    },
    Insurance(macbook) {
        const v = macbook.cost();
        macbook.cost = () => v + 250;
    }
};
const mb = new MacBook();
meDecorate.Memory(mb);
meDecorate.Engraving(mb);
meDecorate.Insurance(mb);
console.log('-------DECRATE');
console.log(mb.cost());

// Flyweight Pattern 享元模式
// 享元迷失：共享一些数据或者方法, 有一个工厂可以管理

export {
    VehicleFactory,
    car,
    MyModule,
    mySingleton,
    MySingletonS,
    AddedCheckboxs,
    ControlCheckbox
};
