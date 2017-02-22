<template>
  <section class="hero is-bold app-navbar animated" :class="{ slideInDown: show, slideOutDown: !show }">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item is-hidden-tablet" @click="toggleSidebar(!sidebar.opened)">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
        </div>
        <div class="nav-center">
          <a class="nav-item hero-brand" href="/">
            <img src="~assets/logo.svg" :alt="pkginfo.description">
            <tooltip :label="'v' + pkginfo.version" placement="right" type="success" size="small" :no-animate="true" :always="true" :rounded="true">
              <div class="is-hidden-mobile">
                <span class="vue">Vue</span><strong class="admin">Admin</strong>
              </div>
            </tooltip>
          </a>
        </div>
        <div class="nav-right is-flex">
          <div @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
          <a class="nav-item is-tab">航空公司<i class="fa fa-caret-down"></i></a>
          <transition name="nav-meue-fade">
            <div class="box" v-show="isOpen">
              <div class="menu">
                <ul class="menu-list">
                  <li><a>香港航空</a></li>
                  <li><a>海南航空</a></li>
                  <li><a>四川航空</a></li>
                  <li><a>奥凯航空</a></li>
                </ul>
              </div>
            </div>
          </transition>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
  import Tooltip from 'vue-bulma-tooltip'
  import { mapGetters, mapActions } from 'vuex'

  export default {

    data () {
      return {
        isOpen: false
      }
    },

    mounted () {
      this.initsEvent()
    },

    components: {
      Tooltip
    },

    props: {
      show: Boolean
    },

    computed: mapGetters({
      pkginfo: 'pkg',
      sidebar: 'sidebar'
    }),

    methods: {
      ...mapActions([
        'toggleSidebar'
      ]),
      handleMouseenter () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.isOpen = true
        }, 300)
      },
      handleMouseleave () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.isOpen = false
        }, 300)
      },
      initsEvent () {
//        let {
//          handleMouseenter,
//          handleMouseleave
//        } = this
//        let triggerElm = this.$el
//         triggerElm.addEventListener('mouseenter', handleMouseenter)
//         triggerElm.addEventListener('mouseleave', handleMouseleave)
      }
    }
  }
</script>

<style lang="scss">
  @import '~bulma/sass/utilities/variables';

  .app-navbar {
    position: fixed;
    min-width: 100%;
    z-index: 1024;
    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);

  .container {
    margin: auto 10px;
  }

  .nav-right {
    align-items: stretch;
    align-items: stretch;
    flex: 1;
    justify-content: flex-end;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
    margin-right: 20px;
  .box {
    position: absolute;
    top: 55px;
    right: 10px;
  }
  .nav-meue-fade-enter-active {
    transition: all .3s ease;
  }
  .nav-meue-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .nav-meue-fade-enter, .nav-meue-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }
  }
  }

  .hero-brand {
  .vue {
    margin-left: 10px;
    color: #36AC70;
  }
  .admin {
    color: #28374B;
  }
  }

</style>
