export function isInDom(obj) {
  return Boolean(obj.closest('body'));
}

export function hasParent(element, root) {
  return root && root.contains(element) && isInDom(element);
}
