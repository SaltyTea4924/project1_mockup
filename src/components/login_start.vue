<template>
  <div>
    <button @click="$router.push('/')"><-</button>
    <h1>How many hours do you spend in front of a screen?</h1>
    <button 
      v-for="(option, index) in hoursOptions" 
      :key="index" 
      @click="highlightedHours = index" 
      :class="{ 'highlighted': highlightedHours === index }"
    >
      {{ option }}
    </button>

    <h1>What takes up most of your time?</h1>
    <button 
      v-for="(option, index) in timeOptions" 
      :key="index" 
      @click="highlightedTime = index" 
      :class="{ 'highlighted': highlightedTime === index }"
    >
      {{ option }}
    </button>

    <h3>Continue button takes you back to the home page for the mockup</h3>
    <button @click="$router.push('/')">Continue</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      highlightedHours: null, // Tracks which hours button is highlighted
      highlightedTime: null, // Tracks which time button is highlighted
      hoursOptions: ['1-2 hrs', '3-4 hrs', '5-6 hrs', '6+'],
      timeOptions: ['Work', 'Homework', 'Entertainment', 'Mix'],
    };
  }
};
</script>

<style scoped>
.highlighted {
  background-color: yellow;
  color: black;
}
</style>