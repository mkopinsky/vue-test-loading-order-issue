<template>
  <div>
    <div class="alert alert-danger" v-if="Object.keys(errors).length > 0">
      <p v-for="error in errors" class="errors">{{error}}</p>
    </div>
    <div :class="{'has-error':errors.event}">
      <select name="event" :value="event" @change="handleChange" class="form-control">
        <option value="" selected="selected">Select Event(s)</option>
        <option v-for="(name, id) in config.events" :value="id">{{name}}</option>
      </select>
    </div>
    <div>
      Of the last 
      <span :class="{'has-error':errors.amount || errors.lessthan}">
        <input name="amount" :value="amount" @input="handleChange" class="form-control input-numeric" />
      </span>
      <select name="ongoing" :value="ongoing" @change="handleChange" class="form-control">
        <option value="true">Events (including open events)</option>
        <option value="false">Events (excluding events still open)</option>
      </select>
      at least
      <span :class="{'has-error':errors.completed || errors.lessthan}">
        <input class="form-control input-numeric" name="completed" :value="completed" @input="handleChange" />
      </span>
      were completed.
    </div>
  </div>
</template>
<script type="text/javascript">
  import BaseComponent from '../BaseComponent.vue';

  export default {
    extends: BaseComponent,

    props: {
      completed: {},
      event: {},
      ongoing: {
        default: false
      },
      amount: {}
    },
    methods: {
      validate: function() {
        this.errors = {};
        
        if (!this.isInteger(this.event)) {
          this.errors.event = 'Please select an event.';
        }

        if (!this.isInteger(this.amount) || this.amount < 1) {
          this.errors.amount = 'The number of events to look at must be a whole number (ex. 3) greater than 0.'
        }

        if (!this.isInteger(this.completed) || this.completed < 0) {
          this.errors.completed = 'The number of completed events must be a whole number (ex. 3).';
        }

        if (this.errors.amount === undefined && this.errors.completed === undefined) {
          if (this.amount < this.completed) {
            this.errors.lessthan = "The number of events to look at must be greater than or equal to the number of events which must be completed.";
          }
        }
        return Object.keys(this.errors).length === 0;
      }
    }
  };
</script>
