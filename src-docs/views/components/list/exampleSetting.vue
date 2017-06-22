<template>
  <div>
    <vui-list>
      <vui-list-item disabled title="通知与信息设置" describeText="总是中断"/>
      <vui-divider top="10px" bottom="20px" />
      <vui-sub-header>声音开启设置</vui-sub-header>
      <vui-list-item disableRipple @click="handleToggle('events')" title="事件和提醒">
        <vui-switch v-model="events"  slot="right"/>
      </vui-list-item>
      <vui-list-item disableRipple @click="handleToggle('calls')" title="电话">
        <vui-switch v-model="calls" slot="right"/>
      </vui-list-item>
    </vui-list>
    <vui-list>
      <vui-sub-header>通知设置</vui-sub-header>
      <vui-list-item disableRipple @click="handleToggle('notifications')">
        <vui-checkbox label="通知" v-model="notifications" slot="left"/>
      </vui-list-item>
      <vui-list-item disableRipple @click="handleToggle('sounds')" >
        <vui-checkbox label="声音" v-model="sounds" slot="left"/>
      </vui-list-item>
    </vui-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      events: false,
      calls: false,
      messages: false,
      notifications: false,
      sounds: false,
      videoSounds: false
    }
  },
  methods: {
    handleToggle (key) {
      this[key] = !this[key]
    }
  },
  components: {
  }
}
</script>
