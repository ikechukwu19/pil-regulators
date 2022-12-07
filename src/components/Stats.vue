<template>
  <div class="stat">
    <div class="stats total">
      <p class="label">TOTAL VERIFICATIONS</p>
      <p class="value">23,164,987</p>
    </div>
    <div class="stats success">
      <p class="label">SUCCESSFUL</p>
      <p class="value">23,153,468</p>
    </div>
    <div class="stats pending">
      <p class="label">PENDING</p>
      <p class="value">30,021</p>
    </div>
    <div class="stats failed">
      <p class="label">FAILED</p>
      <p class="value">8,238</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .stat{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 15px;
  }
  .stats{
    height: 96px;
    max-width: 220px;
    border-radius: 4px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #111111a6;
  }
  .total{
    background-color: #0024F6;
    color: #FFFFFF;
  }
  .label{
    font-size: 9px;
    letter-spacing: 2px;
    margin-bottom: 5px;
  }
  .value{
    font-size: 12px;
    font-weight: 600;
  }
  .success{
    background-color: #E7F7F1;
  }
  .pending{
    background: #f0ca011f;
  }
  .failed{
    background: #FFE5EA;
  }
</style>
