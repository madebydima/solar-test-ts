<template>
    <div id="app">
        <div class="container">
            <div class="navigation">
                <ul class="navigation__wrap">
                    <li class="navigation__item">
                        <router-link :to="{ name: 'Home' }">Описание</router-link>
                    </li>
                    <li class="navigation__item">
                        <router-link :to="{ name: 'Form' }">Форма</router-link>
                    </li>
                </ul>
            </div>
            <div class="content">
                <transition name="slide-fade" mode="out-in">
                    <router-view />
                </transition>
            </div>
        </div>
    </div>
</template>
<style lang="scss" src="./assets/scss/style.scss"></style>
