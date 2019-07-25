import { setAttr, Element } from './element'

function diff(oldTree, newTree) {
  let patches = {}
  let index = 0 // 第几个节点的改变
  // 递归遍历树
  walk(oldTree, newTree, index, patches)
  return patches
}

function walk(oldNode, newNode, index, patches) {
  let current = [] // 补丁的数组
  if (!newNode) {
    current.push({ type: 'REMOVE', index })
  } else if (isString(oldNode) && isString(newNode)) {
    // 文本结点
    if (oldNode !== newNode) {
      current.push({ type: 'TEXT', text: 'newNode' })
    }
  } else if (oldNode.type === newNode.type) {
    // 判断属性是否修改
    let attr = diffAttr(oldNode.props, newNode.props)
    if (Object.keys(attr).length > 0) {
      current.push({ type: 'ATTR', attr })
    }
    // walk 递归
    diffChildren(oldNode.children, newNode.children)
  } else {
    current.push({ type: 'REPLACE', newNode })
  }
  if (current.length) {
    patches[index] = current
  }
}

function isString(obj) {
  return typeof obj === 'string'
}

function diffAttr(oldAttrs, newAttrs) {
  let patch = {}
  for (let key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      patch[key] = newAttrs[key]
    }
  }
  for (let key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      patch[key] = newAttrs[key]
    }
  }
  return patch
}
let num = 0
function diffChildren(oldChildren, newChildren, patches) {
  oldChildren.forEach((child, index) => {
    walk(child, newChildren[index], ++num, patches)
  })
}

function doPatch(node, patches) {
  switch (patch.type) {
    case 'ATTR':
      for (let key in patch.attr) {
        let value = patch.attr(key)
        if (value) {
          setAttr((node, key, value))
        }
      }
      break;
    case 'TEXT':
      node.textContent = patch.text
      break;
    case 'REPLACE':
      let newNode = patch.newNode
      newNode = (newNode instanceof Element) ? render(newNode) : document.createTextNode
      node.parentNode.replaceChild(newNode, node)
      break;
    case 'REMOVE':
      node.parentNode.removeChild(node)
      break;

  }
}

export default diff