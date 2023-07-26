<template>
  <div class="issues-list">
    <div v-for="year in years" :key="year.year" class="year">
      <h2>{{ year.year }}</h2>
      <transition
        name="scale"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <div v-if="year.showIssues" class="issues">
          <div v-for="issue in year.issues" :key="issue" class="issues-item">
            {{ issue }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      years: [
        {
          year: '2023',
          showIssues: true,
          issues: ['№2, 2023', '№1, 2023'],
        },
        {
          year: '2022',
          showIssues: true,
          issues: ['№1, 2022'],
        },
        {
          year: '2021',
          showIssues: true,
          issues: ['№2, 2021', '№1, 2021'],
        },
      ],
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.transform = 'scaleY(0)'
    },
    enter(el, done) {
      el.style.transition = 'transform 0.5s ease-in-out'
      el.style.transform = 'scaleY(1)'
      done()
    },
    beforeLeave(el) {
      el.style.transform = 'scaleY(1)'
    },
    leave(el, done) {
      el.style.transition = 'transform 0.5s ease-in-out'
      el.style.transform = 'scaleY(0)'
      done()
    },
  },
}
</script>
