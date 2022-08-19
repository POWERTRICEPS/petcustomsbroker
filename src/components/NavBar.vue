<template>
    <header>
        <nav>
            <router-link class="logo" :to="{ name: 'Home'}"> <img src="../assets/logo.jpg">&nbsp;&nbsp;&nbsp;Oriox Customs Broker Inc.</router-link>
            
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link" :to="{ name: 'Home'}">Home</router-link></li>
                <li><router-link class="link" :to="{ name: 'Clearance'}">Clearance</router-link></li>
                <li><router-link class="link" :to="{ name: 'Resources'}">Resources</router-link></li>
                <li><router-link class="link" :to="{ name: 'Contacts'}">Contacts</router-link></li>
            </ul>

            <div class="icon">
                <i v-show="mobile" @click="toggleMobileNav"  class="fas fa-cloud" :class="{ 'icon-active': mobileNav}"></i>
            </div>

            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><router-link class="link" :to="{ name: 'Home'}">Home</router-link></li>
                    <li><router-link class="link" :to="{ name: 'Clearance'}">Clearance</router-link></li>
                    <li><router-link class="link" :to="{ name: 'Resources'}">Resources</router-link></li>
                    <li><router-link class="link" :to="{ name: 'Contacts'}">Contacts</router-link></li>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        };
    },

    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },

    methods: {
        toggleMobileNav() {

            this.mobileNav = !this.mobileNav;
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.movileNav = false;
            return;
        }
    }
}
</script>

<style lang="scss" scoped>
    header{
        background-color: #326698; //rgba(0, 0, 0, 0.8);
        z-index: 99;
        width: 100%;
        position: relative;
        transition: 0.5s ease all;
        color: #ffff;

    nav {
        display: flex;
        flex-direction: row;
        padding: 25px 0;
        transition: .5s ease all;
        width: 90%;
        margin: 0 auto;
        @media (min-width: 1140px) {
            max-width: 1140px;
        }

        ul,
        .link {
            font-weight: 500;
            color: #ffff;
            list-style: none;
            text-decoration: none;
        }

        li {
            text-transform: uppercase;
            padding: 16px;
            margin-left: 16px;
            
        }

        .link {
            font-weight: bold;
            font-family: Helvetica, Arial,  sans-serif;
            font-size: 14px;
            transition: .5s ease all;
            padding-bottom: 4px;
            border-bottom: 1px solid transparent;
            text-decoration: none;
            &:hover {
                color: red;
                border-color: red;
                
            }
        }

        .branding {
            display: flex;
            align-items: center;

            img {
                width: 50px;
                transition: .5s ease all; 
            }
        }

        .logo {
            position: absolute;
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
            left: 8%;
            top: 0%;
            color: white;
            font-weight: bold;
            font-family: Helvetica, Arial,  sans-serif;
            font-size: 25px;
            text-decoration: none;
            
        }

        .navigation {
            
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
        }

        .icon {
            display: flex;
            position: absolute;
            align-items: center;
            top: 0;
            right: 24px;
            height: 100%;

            i {
                cursor: pointer;
                font-size: 24px;
                transition: 0.8s ease all;
            }
        }

        .icon-active {
            transform: rotate(180)
        }

        .dropdown-nav {
            display:flex;
            flex-direction:column;
            position: fixed;
            width: 100%;
            max-width:250px;
            height: 100%;
            background-color: #ffff;
            top: 0;
            left: 0;

            li {
                margin-left: 0;
                .link {
                    color: #000;
                }
            }
        }
    }


}
</style>