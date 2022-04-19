export default{
    namespaced: true,
    state: {
        // 메세지 및 타입 목록
        toasts:[],
        showToast: false,
        // toastBox 관련
    },
    mutations: {
        // 메세지가 추가될때
        ADD_TOAST(state,payload){
            state.toasts.push(payload)
        },
        // 메세지가 제거될때
        REMOVE_TOAST(state){
            state.toasts.shift();
        },
        UPDATE_TOAST_STATUS (state, payload) {
            state.showToast = payload;
        }
        
    },
    actions: {
        triggerToast({commit}, {message, type}) { 
            commit('UPDATE_TOAST_STATUS', true);
            // commit('UPDATE_TOAST_MESSAGE', message);
            // commit('UPDATE_TOAST_ALERT_TYPE', type);
            console.log(message);
            console.log(type);
            commit('ADD_TOAST',{
                id:Date.now(),
                message,
                type
            });

            setTimeout( () => {
                commit('UPDATE_TOAST_STATUS', false);
                // commit('UPDATE_TOAST_MESSAGE', '');
                // commit('UPDATE_TOAST_ALERT_TYPE', '');
                commit('REMOVE_TOAST');
            }, 5000);
            
        }
    },
    getters: {
        toastSmileMessage(state){
            return state.toastMessage + "^^";
        }
    }
}