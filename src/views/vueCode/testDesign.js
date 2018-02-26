// js设计模式---模板设计模式
import _ from 'lodash';

// const IEat = new Interface('IEat', ['eatDinner', 'buy', 'cook', 'eat']);

// 抽象类
const Eatdinner = () => {};
Eatdinner.prototype.buy = () => {
    throw new Error();
};
Eatdinner.prototype.cook = () => {
    throw new Error();
};
Eatdinner.prototype.eat = () => {
    console.log('吃');
};
Eatdinner.prototype.eatDinner = () => {
    this.buy();
    this.cook();
    this.eat();
};

// 对象类
const EatA = () => {
    Eatdinner.call(this);
};
_.extend(EatA, Eatdinner);
EatA.prototype.buy = () => {
    console.log('萝卜');
};
EatA.prototype.cook = () => {
    console.log('炒');
};

const EatB = () => {
    Eatdinner.call(this);
};
_.extend(EatB, Eatdinner);
EatB.prototype.buy = () => {
    console.log('萝卜');
};
EatB.prototype.cook = () => {
    console.log('炸');
};

const EatC = () => {
    Eatdinner.call(this);
};
_.extend(EatC, Eatdinner);
EatC.prototype.buy = () => {
    console.log('青菜');
};
EatC.prototype.cook = () => {
    console.log('烤');
};

export { Eatdinner, EatA, EatB, EatC };
