import Emitter from "es6-event-emitter";

let state = {
    users : []
};

let user = {
    id: 0,
    username: "",
    vote: "",
};

let initialState = {
    users: [user],
}

class Store extends Emitter {
    GetInitialState() {
        return initialState;
    }

    GetState() {
        return state;
    }

    UpdateState(changes) {
        let existingUser = state.users.find(u => u.id === changes.id);
        if (existingUser){
            state.users[changes.id] = changes;
        } else {
            changes.id = state.users.length + 1
            state.users.push(changes);
        }
    }
}

const instance = new Store(initialState);
export default instance;