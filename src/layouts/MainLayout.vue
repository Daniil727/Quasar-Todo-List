<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h2">
        Quasar todo list
      </div>
      <div class="text-subtitle">
        {{formattedString}}
      </div>
      </div>
      <q-img
      class="heder-img absolute-top" 
      src="../assets\1670010021_5-pibig-info-p-oboi-na-rabochii-stol-abstraktsiya-minimal-5.png"></q-img>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 195px); margin-top: 195px; border-right: 1px solid #ddd">
          <q-list padding>
            
            <q-item to="/" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                home
              </q-item-section>
            </q-item>

            <q-item to="/help" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>

              <q-item-section>
                Help
              </q-item-section>
            </q-item>

            <q-item to="/about" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                About us
              </q-item-section>
            </q-item>

            <q-item to="/contacts" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Contacts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="../assets\1659680744_43-kartinkin-net-p-abstraktnaya-skhema-krasivo-52.jpg" style="height: 195px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="../assets\kandinsky-download-1713960636961.png">
            </q-avatar>
            <div class="text-weight-bold">Daniil Serebrov</div>
            <div>serebrov@mail.ru</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>

      <router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
      
      
         
     
       
    
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'
import { date } from 'quasar'


const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'DD  MMMM  YYYY  HH:mm  dddd')



defineOptions({
  name: 'MainLayout'
})

// const linksList = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style lang="scss">
.heder-img{
height: 100%;
z-index: -1;
filter: gray;
opacity: 0.7;
}
</style>