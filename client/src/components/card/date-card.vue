<template>
  <div class="date-card">
    <div class="card-header"></div>
    <div class="card-body">
      <FullCalendar :options="calendarOptions" />
    </div>
  </div>
</template>

<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
export default {
  name: 'date-card',
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data () {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.date-card {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 2px 2px rgb(204 197 185 / 50%);
  background-color: #ffffff;
  color: #252422;
  margin-bottom: 20px;
  // position: relative;
  z-index: 1;
  border: none;
  .card-header {
    padding: 20px 20px 0;
    border-bottom: 0;
    background-color: #fff;
  }
  .card-body {
    width: 100%;
    height: 425px;
    padding: 15px 15px 10px 15px;
  }
}
</style>