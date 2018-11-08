import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from "react-redux";
import store from "./redux/store";
import APP from "./router/index";
const renderWithHotReload=(App)=>{
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
              <App/>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}
renderWithHotReload(APP)

if(module.hot){
    module.hot.accept('./router/index',()=>{
        const NextApp = require('./router/index').default;
        renderWithHotReload(NextApp);
    })
}

