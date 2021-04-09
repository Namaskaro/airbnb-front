<template>
  <div>
    <StepsNavbar />

    <div class="xl:container mx-auto pt-30">
      <div class="flex flex-1">
        <div class="w-7/12 landing__left-col">
          <div class="landing__left-col-content">
            <div class="mb-8">
              <h2 class="landing__title-title">
                Здравствуйте, username! Мы поможем вам в создании объявления.
              </h2>
            </div>
            <div class="landing__step-content landing__wmpw-controls">
              <strong
                class="landing__step-number space-1 text-base text-branding text-gray"
                >Шаг 1</strong
              >
              <div class="h3 landing__step-content-title mb-5">
                Где находится ваше жилье?
              </div>
              <form action="/become-a-host/room">
                <div>
                  <div>
                    <div class="row row-condensed space-1">
                      <div class="col-sm-12">
                        <div class="_xro39v">
                          <label class="_d1user" for="wmpw_full_address"
                            ><div dir="ltr">
                              <div class="_fywymp7">
                                <input
                                  name="wmpw_full_address"
                                  placeholder="Адрес жилья"
                                  class="_161db8h6 pac-target-input"
                                  id="wmpw_full_address"
                                  autocomplete="off"
                                  type="text"
                                  aria-describedby=""
                                />
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="flex-row row-condensed mb-2">
                      <div class="w-full">
                        <div class="_xro39v">
                          <label class="_d1user" for="wmpw_address_2"
                            ><div dir="ltr">
                              <div class="_fywymp7">
                                <input
                                  name="wmpw_address_2"
                                  placeholder="Квартира (необязательно)"
                                  class="_161db8h6"
                                  id="wmpw_address_2"
                                  autocomplete="off"
                                  type="text"
                                  aria-describedby=""
                                />
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="margin-top: 12px; margin-bottom: 28px;">
                  <button type="submit" class="_1aqfyz3" aria-busy="false">
                    <span class="_1jrfuygv">Продолжить</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="w-5/12">
          <div data-showat="mediumAndAbove">
            <div
              class="_1h6n1zu"
              role="img"
              aria-busy="false"
              aria-label="Начать"
              style="display: inline-block; vertical-align: bottom; height: auto; width: auto; min-height: 1px;"
            >
              <img
                class="_792k0r1"
                aria-hidden="true"
                alt="Начать"
                decoding="async"
                src="https://a0.muscache.com/airbnb/static/packages/start.b12a70f6.png"
                data-original-uri="https://a0.muscache.com/airbnb/static/packages/start.b12a70f6.png"
                style="vertical-align: bottom;"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StepsNavbar from '../StepsNavbar'
export default {
  components: {
    StepsNavbar
  }
}
</script>

<style lang="css" scoped>
.landing__left-col {
  min-height: calc(100vh - 65px);
}
.landing__left-col-content {
  margin: 58px 93.5px 100px 100px;
  max-width: 470px;
}

.landing__title-title {
  color: #484848;
  margin-bottom: 15px;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.1;
  text-rendering: optimizelegibility;
}

.landing__step-content {
  -webkit-transition: opacity 0.25s ease;
  -o-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.landing__wmpw-controls {
  max-width: 385px;
}

.landing__left-col .landing__step-number {
  display: block;
}

.text-base {
  font-size: 14px;
}

.text-base {
  font-size: 14px;
}

.space-1 {
  margin-bottom: 6px;
}

.text-gray,
.icon-gray {
  color: #767676;
}

.text-branding {
  text-transform: uppercase;
}

.landing__step-content-title {
  font-size: 24px;
  line-height: 1.1;
  text-rendering: optimizelegibility;
  color: #484848;
}

._xro39v {
  position: relative !important;
  cursor: -webkit-text !important;
  cursor: text !important;
  display: -webkit-box !important;
  display: -moz-box !important;
  display: -ms-flexbox !important;
  display: -webkit-flex !important;
  display: flex !important;
  height: 56px !important;
  width: 100% !important;
  margin: 0px !important;
  border: none !important;
  color: #222222 !important;
  background-color: #ffffff !important;
  border-radius: 8px !important;
  box-shadow: inset 0 0 0 1px #b0b0b0 !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 400 !important;
}

.row-condensed {
  margin-left: -6px;
  margin-right: -6px;
}

._d1user {
  position: relative !important;
  -webkit-flex: 1 !important;
  -ms-flex: 1 1 0% !important;
  flex: 1 !important;
  padding: 0px !important;
}

._fywymp7 {
  display: flex !important;
  opacity: 1 !important;
}

._161db8h6 {
  width: 100% !important;
  border: none !important;
  outline: none !important;
  padding: 0px 12px !important;
  margin: 18px 0px 10px !important;
  min-height: 1px !important;
  color: inherit !important;
  background-color: transparent !important;
  font-family: inherit !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
  appearance: none !important;
  box-sizing: border-box !important;
}

._1aqfyz3 {
  display: inline-block !important;
  margin: 0px !important;
  position: relative !important;
  text-align: center !important;
  text-decoration: none !important;
  -webkit-transition-property: background, border-color, color !important;
  -moz-transition-property: background, border-color, color !important;
  transition-property: background, border-color, color !important;
  -webkit-transition-duration: 0.2s !important;
  transition-duration: 0.2s !important;
  -webkit-transition-timing-function: ease-out !important;
  transition-timing-function: ease-out !important;
  width: auto !important;
  cursor: pointer !important;
  border-radius: 4px !important;
  font-size: 14px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif !important;
  text-transform: undefined !important;
  padding-top: 6px !important;
  padding-bottom: 6px !important;
  font-weight: 600 !important;
  border-width: 1px !important;
  border-style: solid !important;
  padding-left: 15px !important;
  padding-right: 15px !important;
  min-width: 48.54101966249685px !important;
  box-shadow: none !important;
  background: #008489 !important;
  border-color: transparent !important;
  color: #ffffff !important;
}

._1jrfuygv {
  font-size: 14px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif !important;
  text-transform: undefined !important;
  color: inherit !important;
  padding-top: undefined !important;
  padding-bottom: undefined !important;
}

._1h6n1zu {
  background-position: 50% 50% !important;
  background-repeat: no-repeat !important;
}

._792k0r1 {
  height: 100% !important;
  width: 100% !important;
  position: static !important;
}
</style>
