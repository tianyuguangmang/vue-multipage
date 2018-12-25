//是否是生产模式，生产模式是true ,开发模式false
export const IS_PRO = false;
export const getComponent = () => {
    return import ( /* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return element;
    }).catch(error => 'An error occurred while loading the component');
}
