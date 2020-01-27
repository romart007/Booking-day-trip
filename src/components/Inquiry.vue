<template>
  <div class="inqury-tab">
    <div class="date-picker-container">
      <label for="date">Dates</label>
      <datepicker
        v-model="dateValue"
        id="date"
        placeholder="Select Dates"
        :disabled-dates="disabledDates"
        :format="customFormatter"
      ></datepicker>
    </div>
    <div class="multi-select">
      <label for>Guests</label>
      <div class="select-container">
        <ul class="input-container">
          <li class="list-input" v-for="val in value" :key="val.id">{{val.count}} {{val.type}}</li>
        </ul>
        <i v-on:click="toggleSelect" class="fa fa-caret-down"></i>
        <ul class="select-option" v-show="isOpen">
          <li v-for="(option, id) in options" :key="id">
            <span class="option__type">{{option.type}}</span>
            <span class="subtract" @click="decrementCount">&minus;</span>
            <span class="option__count">{{option.count}}</span>
            <span class="add" @click="incrementCount(option)">&plus;</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="inquire">
      <button @click="retrievInfo">Enquire</button>
    </div>
    <div class="form-container mx-auto" ref="myForm">
      <FormStepOne :options="options" :dateinfo="customFormatter(dateValue)"  v-on:goToStep="goToStepMain" v-if="currentStep == 1" />
      <!-- <FormStepTwo v-on:goToStep="goToStepMain" v-if="currentStep == 2" />
      <FormStepThree v-on:goToStep="goToStepMain" v-if="currentStep == 3" />-->
    </div>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
import Multiselect from "vue-multiselect";
import VueMoment from "vue-moment";
import moment from "moment-timezone";
import FormStepOne from "./forms/FormStepOne";
import FormStepTwo from "./forms/FormStepTwo";
import FormStepThree from "./forms/FormStepThree";

export default {
  data() {
    return {
      currentStep: 1,
      dateValue: "",
      disabledDates: {
        to: new Date(Date.now())
      },
      isOpen: false,
      value: [],
      options: [
        {
          type: "divers",
          count: 0,
          id: 1
        },
        {
          type: "non-divers",
          count: 0,
          id: 2
        }
      ]
    };
  },
  computed: {
    isDisabled() {
      if (this.dateValue.length > 0 && this.value.length > 0) {
        return false;
      } else {
        return true;
      }
    }
  },

  components: {
    Datepicker,
    Multiselect,
    FormStepOne,
    FormStepTwo,
    FormStepThree
  },
  methods: {
    toggleSelect(e){
      this.isOpen = !this.isOpen;
      
    },
    goToStepMain(value) {
      this.currentStep = value;
    },
    customFormatter(date) {
      return moment(date).format("MMMM Do");
    },
    incrementCount(e) {
      var item = {
        type: e.type,
        count: 1,
        id: e.id
      };

      var record = this.value.find(element => element.id == item.id);
      if (record) {
        var id = parseInt(record.id - 1);
        this.value[id].count++;
      } else {
        this.value.push(item);
      }
    },
    decrementCount(e) {
      var item = {
        type: e.type,
        count: e.count,
        id: e.id
      };

      var record = this.value.find(element => element.id == item.id);
      if (record) {
        var id = parseInt(record.id - 1);
        this.value[id].count--;
      } else {
        this.value.splice(0, item);
      }
    },
    showElement() {
      this.isActive = !this.isActive;
    },
    retrievInfo() {
      this.$refs.myForm.classList.toggle("show-form");
    }
  }
};
</script>
<style lang="scss">
.date-picker-container {
  display: inline-flex;
  align-items: center;

  label {
    margin-right: 10px;
  }
}

.select-container {
  margin-left: 10px;
  width: 250px;
}

.multi-select {
  position: relative;
  margin-bottom: -6px;
  display: inline-flex;
  align-items: center;

  .input-container {
    height: 29px;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    padding-right: 22px;
    box-shadow: 0px 0px 1px black;
    width: 100%;
  }

  i {
    position: absolute;
    top: 8px;
    right: 7px;
  }

  i,
  .add,
  .subtract {
    cursor: pointer;
  }

  .add,
  .subtract {
    border: 1px solid black;
    display: inline-block;
    width: 20px;
  }

  ul:not(.input-container) {
    border: 1px solid black;
    padding: 0;
    margin: 0;
    width: calc(100% - 60px);
    border-top: none;
    position: absolute;
  }
  li:not(.list-input) {
    display: flex;
    justify-content: space-around;
    padding: 10px 5px;
  }
}

.inquire {
  display: inline-flex;
  margin-left: 100px;
}

.form-container {
  display: none;
  &.show-form {
    display: block;
  }
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
