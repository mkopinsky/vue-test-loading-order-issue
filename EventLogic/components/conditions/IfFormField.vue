<template>
  <div>
    <div class="alert alert-danger" v-if="Object.keys(errors).length > 0">
      <p v-for="error in errors" class="errors">{{error}}</p>
    </div>
    <div :class="{'has-error':errors.fieldset}">
      <select name="fieldset" :value="fieldset" @change="handleChange" class="form-control">
        <option value="" selected="selected">Select Field</option>
        <option v-for="(field, value) in config.sourceFieldsets" :value="value">{{field.label}}</option>
      </select>
    </div>
    <div v-if="fieldset">
      <div v-if="config.sourceFieldsets[fieldset].numeric">
        <span :class="{'has-error':errors.operator}">
          <select name="operator" :value="operator" @input="handleChange" class="form-control selectpicker">
            <option value="" selected="selected">Select Operator</option>
            <optgroup label="Numeric">
              <option value="lt"><</option>
              <option value="lte">≤</option>
              <option value="gt">></option>
              <option value="gte">≥</option>
              <option value="eq">=</option>
              <option value="neq">≠</option>
            </optgroup>
            <optgroup label="Text">
              <option value="contains">Contains</option>
              <option value="doesNotContain">Does Not Contain</option>
              <option value="startsWith">Starts With</option>
              <option value="endsWith">Ends With</option>
              <option value="textEquals">Equals</option>
              <option value="textDoesNotEqual">Does Not Equal</option>
            </optgroup>
          </select>
        </span>
        <span v-if="operator">
          <select v-if="operatorIsNumeric" name="amountortarget" :value="amountortarget" @input="handleChange" class="form-control">
            <option value="amount" selected="selected">Exact Amount</option>
            <option value="target">Exact Target</option>
          </select>
          <span v-if="operatorIsNumeric && amountortarget == 'amount'" :class="{'has-error':errors.amount}">
            <input name="amount" :value="amount" @input="handleChange" class="form-control input-numeric" />
          </span>
          
          <span v-if="!operatorIsNumeric" :class="{'has-error':errors.text}">
            <input name="text" :value="text" @input="handleChange" class="form-control" placeholder="Text Input" />
          </span>
        </span>
      </div>

      <div v-else :class="{'has-error':errors.compliantChoices}">
        is one of
        <div v-for="(label, value) in config.sourceFieldsets[fieldset].choices">
          <input :id="value" v-model="selectedCompliantChoices" type="checkbox" name="compliantChoices" :value="value">
          <label :for="value">{{label}}</label>
        </div>
      </div>
    </div>
  </div>

</template>
<script type="text/javascript">
  import BaseComponent from '../BaseComponent.vue';

  export default {
    extends: BaseComponent,

    props: {
      fieldset: {},
      amountortarget: {
        default: 'amount'
      },
      amount: {},
      text: {},
      operator: {},
      compliantChoices: {
        default: () => []
      }
    },
    computed: {
      operatorIsNumeric: function() {
        return ['contains', 'doesNotContain', 'startsWith', 'endsWith', 'textEquals', 'textDoesNotEqual'].indexOf(this.operator) < 0;
      }
    },
    data: function () {
      return {
        selectedCompliantChoices: this.compliantChoices,
      }
    },
    watch: {
      selectedCompliantChoices: function() {
        this.$emit('update:compliantChoices', this.selectedCompliantChoices);
      },
      compliantChoices: function(value) {
        this.selectedCompliantChoices = value;
      }
    },
    methods: {
      validate: function() {
        this.errors = {};
        if (!this.fieldset) {
          this.errors.fieldset = 'Please select a field.';
        } else {
          if (this.config.sourceFieldsets[this.fieldset]) {
            if (this.config.sourceFieldsets[this.fieldset].numeric) {
              if (!this.operator) {
                this.errors.operator = "Please select a comparison operator.";
              }
              if (this.amountortarget === "amount" 
                && !this.isNumber(this.amount) 
                && this.operatorIsNumeric
              ) {
                  this.errors.amount = "Must provide a numeric value for this operator.";
              }
              // if it is a text operator AND is an empty string
              if (!this.operatorIsNumeric && !this.text) {
                this.errors.text = "Must insert a text value for this operator.";
              }
            } else {
              if (this.compliantChoices.length < 1) {
                this.errors.compliantChoices = "Please select at least one valid choice.";
              }
            }
          }
        }
        return Object.keys(this.errors).length === 0;
      }
    }
  };
</script>
