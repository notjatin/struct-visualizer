export function capsFirst(st) {
  return st.slice(0, 1).toUpperCase().concat(st.slice(1, st.length));
}

export function areStringsEqual(first, second) {
  return first.toUpperCase() === second.toUpperCase();
}
