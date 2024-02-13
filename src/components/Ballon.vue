<template>
    <div class="balloon-container">
      <div :class="['balloon', { active: isBalloonActive }]" @click="toggleBalloon">
        <span class="arrow"></span>
      </div>
    </div>
  </template>

  <script>
    export default {
        data() {
            return {
            isBalloonActive: false,
            };
        },
        methods: {
            toggleBalloon() {
            this.isBalloonActive = !this.isBalloonActive;
            },
        },
    };

  </script>


<style>
.balloon-container {
    position: relative;
    width: 100px;
    height: 100px;
  }
  
  .balloon {
    position: absolute;
    bottom: 110%;
    left: 50%;
    transform: translateX(-50%) scale(0);
    width: 100px;
    height: 80px;
    background: #f9d2d2;
    border-radius: 50% 50% 50% 50% / 50% 50% 30% 30%;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .balloon.active {
    visibility: visible;
    transform: translateX(-50%) scale(1);
  }
  
  .arrow {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 15px;
    height: 15px;
    background: #f9d2d2;
  }


</style>