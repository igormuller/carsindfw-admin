<template>
  <div>
    <DealerForm
      @changeType="type = $event"
      v-if="type === 'dealer'"
    ></DealerForm>
    <PersonForm @changeType="type = $event" v-else></PersonForm>
  </div>
</template>

<script>
import DealerForm from "./Components/DealerForm";
import PersonForm from "./Components/PersonForm";
export default {
  components: { DealerForm, PersonForm },
  data() {
    return {
      type: "dealer"
    };
  }
};
</script>
