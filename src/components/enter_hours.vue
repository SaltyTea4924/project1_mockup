<template>
    <div>
      <button @click="$router.push('/')"><-</button>
      <h1>Hours spent on:</h1>
      <h3>Work</h3>
      <input v-model="hours" type="number" placeholder="Enter hours" />
      <h1>Hours spent on:</h1>
      <h3>Entertainment</h3>
      <input v-model="hours" type="number" placeholder="Enter hours" />
      <h3>Continue button takes you back to the home page for the mockup</h3>
    <button @click="$router.push('/')">Continue</button>

    </div>
  </template>