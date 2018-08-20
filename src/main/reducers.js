import { combineReducers } from 'redux';
import DashboardReducer from '../dashboard/dashboardReducer';

const rootReducer = combineReducers({
    // dashboard: () => ({ summary: { credit: 100, debt: 12 } })
    dashboard: DashboardReducer //Quem será o responsável pela atribuição do valor agora será essa função DashboardReducer.
});

export default rootReducer;