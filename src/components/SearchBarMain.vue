<template>
  <div class="_1isvo38d">
    <div data-nosnippet="true">
      <div class="_1lveqk8">
        <div>
          <form class="_1keztfl" role="search">
            <div class="_1rrb221v" data-panel-bounds="true">
              <div class="_1c7nvmy">
                <div class="_1jkbosm7">
                  <div>
                    <div class="_4w946cw">
                      <label
                        class="_n3o7pji"
                        for="bigsearch-query-detached-query"
                        ><div class="_gor68n">
                          <div class="_fmav2so">Местоположение</div>
                          <input
                            class="_1xq16jy"
                            aria-autocomplete="list"
                            aria-expanded="false"
                            autocomplete="off"
                            autocorrect="off"
                            spellcheck="false"
                            id="bigsearch-query-detached-query"
                            role="combobox"
                            name="query"
                            placeholder="Куда едете?"
                            required=""
                            data-testid="structured-search-input-field-query"
                            value=""
                          /></div
                      ></label>
                    </div>
                  </div>
                </div>
                <div class="_43mycv"></div>
                <div class="_1l6jpwo">
                  <div class="_j8gg2a">
                    <div
                      role="button"
                      tabindex="0"
                      class="_1akb2mdw"
                      aria-expanded="false"
                      data-testid="structured-search-input-field-split-dates-0"
                    >
                      <div class="_seuyf">
                        <div class="_wtz1co">Прибытие</div>
                        <div class="_uh2dzp">Когда?</div>
                      </div>
                    </div>
                  </div>
                  <div class="_43mycv"></div>
                  <div class="_j8gg2a">
                    <!-- <DatePicker/> -->
                    <div
                      role="button"
                      tabindex="0"
                      class="_1akb2mdw"
                      aria-expanded="false"
                      data-testid="structured-search-input-field-split-dates-1"
                    >
                      <div class="_seuyf">
                        <div class="_wtz1co">Выезд</div>
                        <div class="_uh2dzp">Когда?</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="_43mycv"></div>
                <div class="_1yulsurh">
                  <div
                    role="button"
                    tabindex="0"
                    class="_37ivfdq"
                    aria-expanded="false"
                    data-testid="structured-search-input-field-guests-button"
                  >
                    <div class="_seuyf">
                      <div class="_wtz1co">Количество гостей</div>
                      <div class="_uh2dzp">Кто едет?</div>
                    </div>
                  </div>
                  <!-- Start Guests counter -->
                  <!-- <SearchCounter /> -->
                  <!-- End Guests counter -->
                  <div class="_w64aej">
                    <button
                      class="_1mzhry13"
                      aria-expanded="true"
                      type="button"
                      data-testid="structured-search-input-search-button"
                    >
                      <span class="_163rr5i"
                        ><span
                          class="_m9v25n"
                          style="background-position: calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%); --mouse-x:54.0859; --mouse-y:37.5;"
                        ></span></span
                      ><span class="_tcp689"
                        ><div class="_1hb5o3s">
                          <div class="_14lk9e14">
                            <svg
                              viewBox="0 0 32 32"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="presentation"
                              focusable="false"
                              style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"
                            >
                              <g fill="none">
                                <path
                                  d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div class="_1eh6notg">Искать</div>
                        </div></span
                      >
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <DatePicker />
  </div>
</template>

<script>
import SearchCounter from './SearchCounter'
import DatePicker from './DatePicker'
export default {
  components: {
    SearchCounter,
    DatePicker
  }
}
</script>

<style lang="css" scoped>
._1eh6notg {
  opacity: 0 !important;
  padding-left: 8px !important;
  padding-right: 4px !important;
  transition: opacity 0.1s cubic-bezier(0.35, 0, 0.65, 1) 0s !important;
}

._1sx4f1vv {
  border: 1px solid rgb(221, 221, 221) !important;
  border-radius: 32px !important;
  color: rgb(34, 34, 34) !important;
  display: flex !important;
  height: 66px !important;
  position: relative !important;
  width: 100% !important;
  box-shadow: rgb(0 0 0 / 15%) 0px 16px 32px, rgb(0 0 0 / 10%) 0px 3px 8px !important;
  /* background-color: rgb(255, 255, 255) !important; */
  background-color: #5b5238 !important;
}

._1mzhry13 {
  appearance: none !important;
  background: rgb(255, 56, 92) !important;
  border: 0px !important;
  color: rgb(255, 255, 255) !important;
  cursor: pointer !important;
  display: inline-block !important;
  font-family: inherit !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  line-height: 16px !important;
  margin: 0px !important;
  outline: none !important;
  overflow: hidden !important;
  padding: 0px !important;
  text-align: inherit !important;
  text-decoration: none !important;
  user-select: auto !important;
  border-radius: 24px !important;
  height: 48px !important;
  max-width: 48px !important;
  position: relative !important;
  transition: max-width 0.2s cubic-bezier(0.35, 0, 0.65, 1) 0s !important;
  vertical-align: middle !important;
  z-index: 0 !important;
}
._1keztfl {
  margin: 0px auto !important;
  max-width: 850px !important;
}

._d206yy {
  border: 0px !important;
  margin: 0px !important;
  padding: 0px !important;
}

._17fy1ix {
  -webkit-box-pack: center !important;
  -webkit-box-align: center !important;
  align-items: center !important;
  display: flex !important;
  height: 80px !important;
  justify-content: center !important;
}

._1rrb221v {
  border: 1px solid rgb(221, 221, 221) !important;
  border-radius: 32px !important;
  color: rgb(34, 34, 34) !important;
  display: flex !important;
  height: 66px !important;
  position: relative !important;
  width: 100% !important;
  box-shadow: rgb(0 0 0 / 15%) 0px 16px 32px, rgb(0 0 0 / 10%) 0px 3px 8px !important;
  --big-search-form-background: #f7f7f7 !important;
  background-color: rgb(247, 247, 247) !important;
}

._1isvo38d {
  padding-left: 24px !important;
  padding-right: 24px !important;
  left: 0px !important;
  position: absolute !important;
  text-align: left !important;
  top: 64px !important;
  transform-origin: 60px 0% !important;
  width: 100% !important;
  z-index: 2 !important;
  pointer-events: none !important;
  transition: -ms-transform 150ms ease 0s, -webkit-transform 150ms ease 0s,
    transform 150ms ease 0s, opacity 50ms ease 20ms, visibility 0ms ease 150ms !important;
}

._1lveqk8 {
  padding-bottom: 16px !important;
  position: relative !important;
  z-index: 1 !important;
}

._1c7nvmy {
  display: flex !important;
  flex: 1 1 0% !important;
  height: 100% !important;
  min-width: 0px !important;
  pointer-events: auto !important;
}

._1jkbosm7 {
  flex: 1.5 0 0% !important;
}

._4w946cw {
  -webkit-box-align: center !important;
  position: relative !important;
  align-items: center !important;
  display: flex !important;
  flex: 1 0 0% !important;
  margin: -1px !important;
  min-width: 0px !important;
}

._n3o7pji {
  cursor: pointer !important;
  display: block !important;
  background-clip: padding-box !important;
  border: 1px solid transparent !important;
  border-radius: 32px !important;
  flex: 1 0 0% !important;
  min-width: 0px !important;
  padding: 14px 32px !important;
}

._gor68n {
  position: relative !important;
  z-index: 1 !important;
}

._fmav2so {
  font-weight: 800 !important;
  letter-spacing: 0.04em !important;
  font-size: 12px !important;
  line-height: 16px !important;
  padding-bottom: 2px !important;
}

._1xq16jy {
  display: block !important;
  border: 0px !important;
  margin: 0px !important;
  padding: 0px !important;
  width: 100% !important;
  background: none !important;
  font-size: 14px !important;
  line-height: 18px !important;
  font-weight: 600 !important;
  color: rgb(34, 34, 34) !important;
  text-overflow: ellipsis !important;
}

._n3o7pji {
  cursor: pointer !important;
  display: block !important;
  background-clip: padding-box !important;
  border: 1px solid transparent !important;
  border-radius: 32px !important;
  flex: 1 0 0% !important;
  min-width: 0px !important;
  padding: 14px 32px !important;
}

._n3o7pji:hover {
  background-color: rgba(229, 231, 235, 1) !important;
}

._n3o7pji::after {
  background-clip: padding-box !important;
  border: 1px solid transparent !important;
  border-radius: 32px !important;
  inset: 0px !important;
  content: '' !important;
  position: absolute !important;
  z-index: 0 !important;
}

._43mycv {
  align-self: center !important;
  border-right: 1px solid rgb(221, 221, 221) !important;
  flex: 0 0 0px !important;
  height: 32px !important;
}

._1l6jpwo {
  display: flex !important;
  flex: 2 0 0% !important;
  min-width: 0px !important;
}

._j8gg2a {
  -webkit-box-align: center !important;
  align-items: center !important;
  display: flex !important;
  flex: 1 0 0% !important;
  margin: -1px !important;
  min-width: 0px !important;
  position: relative !important;
}

._1akb2mdw {
  appearance: none !important;
  background: transparent !important;
  border: 0px !important;
  color: inherit !important;
  cursor: pointer !important;
  display: block !important;
  font-family: inherit !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
  margin: 0px !important;
  outline: none !important;
  overflow: visible !important;
  padding: 1px !important;
  text-align: left !important;
  text-decoration: none !important;
  user-select: auto !important;
  flex: 1 0 0% !important;
  width: 0px !important;
  z-index: 1 !important;
}

._seuyf {
  padding: 14px 24px !important;
  overflow: hidden !important;
  position: relative !important;
  white-space: nowrap !important;
  width: 100% !important;
  z-index: 1 !important;
}

._1akb2mdw::after {
  background-clip: padding-box !important;
  border: 1px solid transparent !important;
  border-radius: 32px !important;
  inset: 0px !important;
  content: '' !important;
  position: absolute !important;
  z-index: 0 !important;
}

._wtz1co {
  font-size: 12px !important;
  line-height: 16px !important;
  font-weight: 800 !important;
  letter-spacing: 0.04em !important;
  padding-bottom: 2px !important;
}

._uh2dzp {
  font-size: 14px !important;
  line-height: 18px !important;
  color: rgb(113, 113, 113) !important;
  font-weight: 400 !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  width: 100% !important;
}

._j8gg2a {
  -webkit-box-align: center !important;
  align-items: center !important;
  display: flex !important;
  flex: 1 0 0% !important;
  margin: -1px !important;
  min-width: 0px !important;
  position: relative !important;
}

._1akb2mdw {
  appearance: none !important;
  background: transparent !important;
  border: 0px !important;
  color: inherit !important;
  cursor: pointer !important;
  display: block !important;
  font-family: inherit !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
  margin: 0px !important;
  outline: none !important;
  overflow: visible !important;
  padding: 1px !important;
  text-align: left !important;
  text-decoration: none !important;
  user-select: auto !important;
  flex: 1 0 0% !important;
  width: 0px !important;
  z-index: 1 !important;
}

._1yulsurh {
  -webkit-box-align: center !important;
  align-items: center !important;
  display: flex !important;
  margin: -1px !important;
  min-width: 0px !important;
  position: relative !important;
  flex: 0.95 0 auto !important;
}

._37ivfdq {
  appearance: none !important;
  background: transparent !important;
  border: 0px !important;
  color: inherit !important;
  cursor: pointer !important;
  display: block !important;
  font-family: inherit !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
  margin: 0px !important;
  outline: none !important;
  overflow: visible !important;
  padding: 1px !important;
  text-align: left !important;
  text-decoration: none !important;
  user-select: auto !important;
  flex: 1 0 0% !important;
  width: 0px !important;
  z-index: 1 !important;
}

._37ivfdq::after {
  background-clip: padding-box !important;
  border: 1px solid transparent !important;
  border-radius: 32px !important;
  inset: 0px !important;
  content: '' !important;
  position: absolute !important;
  z-index: 0 !important;
}

._103v2x0p {
  appearance: none !important;
  background: transparent !important;
  border: 0px !important;
  color: inherit !important;
  cursor: pointer !important;
  display: block !important;
  font-family: inherit !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
  margin: 0px !important;
  outline: none !important;
  overflow: visible !important;
  padding: 1px !important;
  text-align: left !important;
  text-decoration: none !important;
  user-select: auto !important;
  flex: 1 0 0% !important;
  width: 0px !important;
  z-index: 1 !important;
}

._103v2x0p:hover {
  background-color: #a4adaa;
}

._103v2x0p::before {
  content: '' !important;
  display: none !important;
  height: 32px !important;
  left: 0px !important;
  margin-top: -16px !important;
  position: absolute !important;
  right: 0px !important;
  top: 50% !important;
  z-index: 0 !important;
  border-width: 0px 1px 0px 0px !important;
  border-style: solid solid solid !important;
  border-left: 0px !important;
}

._103v2x0p::after {
  background-clip: padding-box !important;
  border: 1px solid transparent !important;
  border-radius: 32px !important;
  inset: 0px !important;
  content: '' !important;
  position: absolute !important;
  z-index: 0 !important;
}

._w64aej {
  flex: 0 0 auto !important;
  margin-left: -6px !important;
  padding-right: 9px !important;
  position: relative !important;
  z-index: 5 !important;
}

._1mzhry13 {
  appearance: none !important;
  background: rgb(255, 56, 92) !important;
  border: 0px !important;
  color: rgb(255, 255, 255) !important;
  cursor: pointer !important;
  display: inline-block !important;
  font-family: inherit !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  line-height: 16px !important;
  margin: 0px !important;
  outline: none !important;
  overflow: hidden !important;
  padding: 0px !important;
  text-align: inherit !important;
  text-decoration: none !important;
  user-select: auto !important;
  border-radius: 24px !important;
  height: 48px !important;
  max-width: 48px !important;
  position: relative !important;
  transition: max-width 0.2s cubic-bezier(0.35, 0, 0.65, 1) 0s !important;
  vertical-align: middle !important;
  z-index: 0 !important;
}

._1mzhry13::before {
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  ) !important;
  inset: 0px !important;
  content: '' !important;
  position: absolute !important;
  transition: opacity 0.2s cubic-bezier(0.35, 0, 0.65, 1) 0s !important;
  will-change: opacity !important;
  z-index: 0 !important;
}

._163rr5i {
  position: absolute !important;
  top: 0px !important;
  left: 0px !important;
  right: 0px !important;
  bottom: 0px !important;
  width: 100% !important;
  height: 100% !important;
  -webkit-mask-image: -webkit-radial-gradient(center, white, black) !important;
  overflow: hidden !important;
  border-radius: 8px !important;
}

._m9v25n {
  display: block !important;
  width: 100% !important;
  height: 100% !important;
  min-width: 200px !important;
  background-size: 200% 200% !important;
  opacity: 0 !important;
  transition: opacity 1.25s ease 0s !important;
  background-image: radial-gradient(
    circle at center center,
    rgb(255, 56, 92) 0%,
    rgb(230, 30, 77) 27.5%,
    rgb(227, 28, 95) 40%,
    rgb(215, 4, 102) 57.5%,
    rgb(189, 30, 89) 75%,
    rgb(189, 30, 89) 100%
  ) !important;
}

._tcp689 {
  display: block !important;
  position: relative !important;
  pointer-events: none !important;
}

._1hb5o3s {
  display: inline-flex !important;
  padding: 16px !important;
  position: relative !important;
  z-index: 1 !important;
}

._1eh6notg {
  opacity: 0 !important;
  padding-left: 8px !important;
  padding-right: 4px !important;
  transition: opacity 0.1s cubic-bezier(0.35, 0, 0.65, 1) 0s !important;
}

/* Search counter style */
</style>
