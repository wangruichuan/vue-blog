<template>
  <ul class="contact-container">
    <li>
      <a href="https://github.com/wangruichuan">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>github.com/wangruichuan</span>
        <div class="pop">
          <img
            src="https://wangruichuan-1321190606.cos.ap-beijing.myqcloud.com/blog/qrcode_github.com%20%282%29.png?q-sign-algorithm=sha1&q-ak=AKIDbTe1GvY5zbdbMMVvl8NLEnflnSmikIkbp-Vhtplca-pdUQ2dPTW7k7zovmdbvay3&q-sign-time=1744973101;1744976701&q-key-time=1744973101;1744976701&q-header-list=host&q-url-param-list=ci-process&q-signature=d0a5b34e8407ccfdcb350f79de8c064ccfc3c19e&x-cos-security-token=Ua5N87Dx6WM7c3nzaul9Uc1IszTMKd7a73e0a5ac762bce7e20f9339125710cb0YZfeA6s86vo1i7aVTX7B3qIveey12zywwy-39ZpiOdc6CHYbQBNzLlAj1OTt0-j_-jjzhl32qd9f5Oc6N4DeToKO4BKs7UNcUHIKFSn3r9JZM8-40EU1Biv-Tz3IHrSzMBIbR-Yjw2Iar5tEaMeKyeMuVzgqWE3f5nbAExVBtt5crXP48--xitkXFnHj9ZZ7r9_4OQlYiIfC_bKc7utQe1xRNc4T68G_Nch3OZRISbzIImpjtPx0PdiZJYZwlMYggVGDjP8QPgTlAdXTLkmAQw&ci-process=originImage"
            alt="">
        </div>
      </a>
    </li>
    <li>
      <a href="mailto:1668970665@qq.com">
        <div class="icon">
          <Icon type="email" />
        </div>
        <span>wangruichuan666@qq.com</span>
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
