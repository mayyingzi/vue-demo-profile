// vue 观察者模式

const obj = {
    pub(dep) {
        dep.notify();
    }
};

function Dep() {
    this.subs = [];
}

Dep.prototype.notify = function () {
    this.subs.forEach((item)=>{
        item.update();
    }
};

// 订阅者
function Watcher(msg) {
    this.msg = msg;
};
Watcher.prototype.update = function() {
    console.log(`dom${this.msg}更新`);
};

// 创建三个订阅者
const a = new Watcher(1)
const b = new Watcher(2)
const c = new Watcher(3)

const dep = new Dep();

// 将三个订阅者push到Dep.subs中去
dep.subs.push(a)
dep.subs.push(b)
dep.subs.push(c)

obj.pub(dep)