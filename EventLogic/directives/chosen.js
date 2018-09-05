export default {
  inserted: function (el, binding) {
    var emitter = binding.value.onChange;
    var chosenOptions = binding.value.chosenOptions || {};
    $(el)
      .chosen(chosenOptions)
      .change(function (event) {
        emitter(event);
      });
  },
  componentUpdated: function (el) {
    $(el).trigger('chosen:updated');
  }
};