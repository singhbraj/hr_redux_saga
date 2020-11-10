import { take, call, all, fork } from 'redux-saga/effects';

import { watchFetchEmployeesSaga,
         watchLoginUserSaga,
         watchAddEmployeeSaga,
         watchDeleteEmployeeSaga,
         watchSignupUserSaga
     }
    from './fetchEmployeeSaga';

 function* RootSaga(){
    yield all([

        fork(watchFetchEmployeesSaga),
        fork(watchLoginUserSaga),
        fork(watchAddEmployeeSaga),
        fork(watchDeleteEmployeeSaga),
        fork(watchSignupUserSaga)

    ])
}

export default RootSaga;