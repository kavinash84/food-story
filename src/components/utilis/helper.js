
let debounce_timeout;
export const debounceUtil = (func, wait) => {
  if (debounce_timeout) {
    clearTimeout(debounce_timeout);
  }
  function later() {
    func();
    clearTimeout(debounce_timeout);
  }

  debounce_timeout = setTimeout(later, wait);
};