import { combineReducers } from 'redux';
import DashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tab/tabReducer'; //Registrando mais um reducer

const rootReducer = combineReducers({
    //dashboard: () => ({ summary: { credit: 100, debt: 12 } })
    dashboard: DashboardReducer, //Quem será o responsável pela atribuição do valor agora será essa função DashboardReducer.
    tab: TabReducer
});

export default rootReducer;