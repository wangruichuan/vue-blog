<template>
  <!-- From Uiverse.io by VD232004 -->
  <!-- From Uiverse.io by alexmaracinaru -->
  <div class="card">
    <a
      :href="link"
      target="_blank"
    >
      <div class="card-name">{{ title }}</div>
      <div class="quote">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 330 307"
          height="80"
          width="80"
        >
          <path
            fill="currentColor"
            d="M302.258 176.221C320.678 176.221 329.889 185.432 329.889 203.853V278.764C329.889 297.185 320.678 306.395 302.258 306.395H231.031C212.61 306.395 203.399 297.185 203.399 278.764V203.853C203.399 160.871 207.902 123.415 216.908 91.4858C226.323 59.1472 244.539 30.902 271.556 6.75027C280.562 -1.02739 288.135 -2.05076 294.275 3.68014L321.906 29.4692C328.047 35.2001 326.614 42.1591 317.608 50.3461C303.69 62.6266 292.228 80.4334 283.223 103.766C274.626 126.69 270.328 150.842 270.328 176.221H302.258ZM99.629 176.221C118.05 176.221 127.26 185.432 127.26 203.853V278.764C127.26 297.185 118.05 306.395 99.629 306.395H28.402C9.98126 306.395 0.770874 297.185 0.770874 278.764V203.853C0.770874 160.871 5.27373 123.415 14.2794 91.4858C23.6945 59.1472 41.9106 30.902 68.9277 6.75027C77.9335 -1.02739 85.5064 -2.05076 91.6467 3.68014L119.278 29.4692C125.418 35.2001 123.985 42.1591 114.98 50.3461C101.062 62.6266 89.6 80.4334 80.5942 103.766C71.9979 126.69 67.6997 150.842 67.6997 176.221H99.629Z"
          ></path>
        </svg>
      </div>
      <div class="body-text">{{ desciption }}</div>
    </a>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  desciption: string
  link: string
}

const {} = defineProps<Props>()
</script>

<style scoped>
/* From Uiverse.io by VD232004 */
/* From Uiverse.io by alexmaracinaru */
.card {
  height: 264px;
  background: rgb(183, 226, 25);
  font-family: inherit;
  position: relative;
  border-radius: 8px;
}

.quote {
  color: rgb(223, 248, 134);
  padding-left: 30px;
  position: relative;
}

.card-name {
  text-transform: uppercase;
  font-weight: 700;
  color: rgb(127, 155, 29);
  padding: 35px;
  line-height: 23px;
}

.body-text {
  font-size: 20px;
  font-weight: 900;
  padding: 60px 40px 0;
  color: #465512;
  position: absolute;
  top: 40px;
  left: 1px;
  line-height: 23px;
}

.author {
  margin-top: 5px;
  opacity: 0;
  transition: 0.5s;
}

.card:hover .author {
  opacity: 1;
}

.pic {
  width: 50px;
  height: 50px;
  background-color: rgb(158, 196, 21);
  border-radius: 50%;
}

.author-container {
  display: flex;
  align-items: center;
}

.author {
  font-weight: 700;
  color: rgb(127, 155, 29);
  padding-left: 30px;
}

.card .author svg {
  display: inline;
  font-size: 12px;
  color: rgba(128, 155, 29, 0.452);
}
</style>
