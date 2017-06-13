<template>
  <mobile-tear-sheet>
    <vui-list>
      <vui-list-item disabled title="通知与信息设置" describeText="总是中断"/>
    </vui-list>
    <vui-divider />
    <vui-list>
      <vui-sub-header>声音开启设置</vui-sub-header>
      <vui-list-item disableRipple @click="handleToggle('events')" title="事件和提醒">
        <vui-switch v-model="events"  slot="right"/>
      </vui-list-item>
      <vui-list-item disableRipple @click="handleToggle('calls')" title="电话">
        <vui-switch v-model="calls" slot="right"/>
      </vui-list-item>
      <vui-list-item disableRipple @click="handleToggle('messages')" title="信息">
        <vui-switch v-model="messages" slot="right"/>
      </vui-list-item>
    </vui-list>
    <vui-list>
      <vui-sub-header>通知设置</vui-sub-header>
      <vui-list-item disableRipple @click="handleToggle('notifications')"  title="通知">
        <vui-checkbox v-model="notifications" slot="left"/>
      </vui-list-item>
      <vui-list-item disableRipple @click="handleToggle('sounds')"  title="声音">
        <vui-checkbox v-model="sounds" slot="left"/>
      </vui-list-item>
      <vui-list-item disableRipple @click="handleToggle('videoSounds')" title="视频的声音">
        <vui-checkbox v-model="videoSounds" slot="left"/>
      </vui-list-item>
    </vui-list>
  </mobile-tear-sheet>
</template>

<script>
import mobileTearSheet from '../../../components/mobileTearSheet'
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
    'mobile-tear-sheet': mobileTearSheet
  }
}
</script>
