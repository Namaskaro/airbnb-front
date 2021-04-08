<template>
  <div
    id="flexible_trip_dates-september"
    data-testid="flexible_trip_dates-september"
    class="_7yfwnp"
    v-if="month in monthes"
    :key="month"
  >
    <button
      class="_100b7maj"
      type="button"
      aria-invalid="false"
      aria-pressed="true"
    >
      <div class="_szq06b">
        <div class="_883jdp">
          <img
            class="_9phhti"
            src="https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg"
            alt=""
          />
          <div class="_1ukywtn"></div>
          <div class="_146q3mx">{{ month }}</div>
        </div>
      </div>
      <span aria-hidden="true" class="_brywt2w" v-if="selectedMonth">
        <div class="_szq06b">
          <div class="_883jdp">
            <img
              class="_9phhti"
              src="https://a0.muscache.com/pictures/33e22c88-92bf-47be-847a-98a7e374d78b.jpg"
              alt=""
            />
            <div class="_1ukywtn"></div>
            <div class="_146q3mx">Сентябрь</div>
          </div>
        </div></span
      >
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped></style>
