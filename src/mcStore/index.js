//自定义状态管理store
class MCStore {

    //state保存状态
    state = {
        role: 'user',
        passage: ''
    }

    //handle保存回调函数
    handle = {}

    constructor() {
        this.set = function (stateName, payload) {
            this.state[stateName] = payload;
            if (this.handle[stateName]) {
                this.handle[stateName].forEach(element => {
                    element.process(payload);
                });
            }
        }
        this.get = function (stateName) {
            return this.state[stateName];
        }
        this.subscribe = function (stateName, callback) {
            if (!this.handle[stateName]) {
                this.handle[stateName] = []
            }
            const subscriberId = this.guid();
            this.handle[stateName].push({
                uid: subscriberId,
                process: callback
            });
            return subscriberId;
        }
        this.unSubscribe = function (stateName, subscriberId) {
            if (this.handle[stateName]) {
                this.handle[stateName] = this.handle[stateName].filter(element => element.uid !== subscriberId);
            }
        }
    }
    //生成唯一ID
    guid() {
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0)
                .toString(16)
                .substring(1);
        }

        return (
            S4() +
            S4() +
            "-" +
            S4() +
            "-" +
            S4() +
            "-" +
            S4() +
            "-" +
            S4() +
            S4() +
            S4()
        );
    }

}
const mcStore = new MCStore();
export { mcStore }