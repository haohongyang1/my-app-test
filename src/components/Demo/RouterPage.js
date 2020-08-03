import React, { Component } from "react";
/**
 * Router page
 * 1 使用种类以及优先级：children(不匹配也会渲染，function)=>component(必须匹配才会渲染componet)=>render(必须匹配才能渲染function)
 * 2 组件中的值变化时，会重新渲染组件；
 * 3 需要注意的是：
 * component 如果是内联函数格式:
 * <Route component={()=><Child count={count}/>}></Route>
 * 那么如果count变化的时候，Child会被不停的卸载和新建，不能实现组件复用；
 * 所以：component要避免这种方法，用render替换：
 * <Route render=>{() => <Child count={count}>}>
 * 4
 */
export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
      </div>
    );
  }
}
