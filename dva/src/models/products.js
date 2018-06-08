import {postMessage, getMessage} from '../services/messageBoard'

export default {
    namespace: 'users',
    state: {
        data: [],
    },
    reducers: {
        save(state, { payload: { data } }) { 
            console.log('data: ', data)         
            return { ...state, data };
        }
    },
    effects: {
        *submitMess({payload={}}, {call, put}) {
            yield call(postMessage, payload.values)
            yield put({
                type: 'getMess',
            })
        },
        *getMess({payload={}}, {call, put}) {
            const { data } = yield call(getMessage)
            yield put({ 
                type: 'save',
                payload: { data },
            });
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/products') {
                    dispatch({ type: 'getMess', payload: query })
                }
            })
        }
    }
}