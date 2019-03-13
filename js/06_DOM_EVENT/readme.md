# DOM EVENT
    dom event(事件)
- dom   
onclick 只能注册一个事件，后面的会把前面的覆盖    dom-0时代         
addEventListener('click') 可以注册多个 dom-2时代     
addEventListener('keyup') 可以注册多个 dom-3时代
- event 
    event.stopPropagation() 组织事件冒泡
     event.stopImmediatePropagation() 组织后面注册的事件
- dom 事件流    
    - 捕获（capture）     
    window => document (选中方式：document.documentElement) => body => 父级 => 目标元素     
    - 冒泡（bubble）  
    目标元素 => 父级 => body => document => window      
- 事件按照DOM流的顺序执行事件回调   
    处于目标阶段的时候，事件调用顺序取决于事件注册顺序

- 事件代理（事件委托）  
event-question.html     原理：冒泡  
