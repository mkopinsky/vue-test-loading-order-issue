export const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
export const isInteger = function(n) {
  return !isNaN(n) && 
   parseInt(Number(n)) == n && 
   !isNaN(parseInt(n, 10));
};
export const handleChange = function(event) {

  let val = event.target.value;

  if (event.target.tagName === 'SELECT' && event.target.multiple) {
    val = [].slice.call(event.target.selectedOptions).map(x => x.value);
  } else if (event.target.type === 'checkbox') {
    if (event.target.checked) {
      val = event.target.getAttribute('true-value') || true;
    } else {
      val = event.target.getAttribute('false-value') || false;
    }
  }

  this.$emit('update:' + event.target.name, val);
  
};
