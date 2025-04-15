<template>
  <ul class="contact-container">
    <li>
      <a href="https://github.com/wangruichuan">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>github.com/wangruichuan</span>
        <div class="pop">
        <img src="https://s21.ax1x.com/2025/04/15/pEfQBqg.png" alt="">
      </div>
      </a>
    </li>
    <li>
      <a href="mailto:1668970665@qq.com">
        <div class="icon">
          <Icon type="email" />
        </div>
        <span>1668970665@qq.com</span>
      </a>
    </li>
    <li>
      <a href="tencent://message/?uin=1668970665&Site=400301.com&Menu=yes">
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>1668970665</span>
      </a>
    </li>
    <li>
      <a>
        <div class="icon">
          <Icon type="weixin" />
        </div>
        <span>wangruichuan666</span>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon/index.vue'

</script>

<style scoped>
.contact-container {
  padding: 20px;
  color: var(--neutral-color-dark);
  --item-height: 30px;
  font-size: 14px;
}

li {
  height: var(--item-height);
  line-height: var(--item-height);
  margin: 14px 0;

  position: relative;
}

li:hover .pop {
  transform: scaleY(1);
}

li a {
  display: flex;
  cursor: pointer;
  align-items: center;

}

.icon {
  font-size: 26px;
  width: 36px;
}

.pop {
  position: absolute;
  left: 0;
  bottom: calc(var(--item-height) + 5px);
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 5px;
  transform: scaleY(0);
  transform-origin: center bottom;
  transition: .3s;
}

img {
  width: 150px;
  height: 150px;
}

.pop::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background-color: white;
  bottom: -4px;
}
</style>
