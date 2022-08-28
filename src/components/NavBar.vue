<template>
    <header :class="{ 'onScroll': view.topOfPage && this.transparent}">
        <nav v-show="!mobile">
            <div>
                <router-link class="logo" :to="{ name: 'Home'}"> <img class="logopic" src="../assets/logonew.png">&nbsp;&nbsp;&nbsp;Oriox Customs Broker Inc.</router-link>
            </div>
            <ul  class="navigation">
                <li><router-link class="link" :to="{ name: 'Home'}">Home</router-link></li>
                <li><router-link class="link" :to="{ name: 'Clearance'}">Clearance</router-link></li>
                <li><router-link class="link" :to="{ name: 'Resources'}">Resources</router-link></li>
                <li><router-link class="link" :to="{ name: 'Contacts'}">Contacts</router-link></li>
            </ul>
        </nav>
        <nav  v-show="mobile">
            <div>
                <router-link class="mobile-logo" :to="{ name: 'Home'}"> <img class="mobile-logopic" src="../assets/logonew.png">&nbsp;&nbsp;&nbsp;Oriox Customs Broker Inc.</router-link>
            </div>

            <div class="icon">
                <button style="background-color:red" class="menubutton" v-show="mobile" v-on:click="this.mobileNav = !this.mobileNav;">Menu</button>
                <!--<i v-show="mobile" v-on:click="toggleMobileNav"  class="fas fa-cloud" ></i>-->
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
    props: ['transparent'],
    data() {
        return {
            mobile: false,
            mobileNav: false,
            windowWidth: 1500,
            view: {
                topOfPage: true
            }
        };
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll)
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },

    methods: {
        checkScreen() {
    
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 1100) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.movileNav = false;
            return;
        },
        handleScroll(){
            if(window.pageYOffset>0){
                if(this.view.topOfPage) this.view.topOfPage = false
            } else {
            if(!this.view.topOfPage) this.view.topOfPage = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    header{
        background-color: rgba(50, 102, 152, 1);
        z-index: 99;
        width: 100%;
        position: fixed;
        transition: 0.5s ease all;
        color: #ffff;

        &.onScroll {
            box-shadow: 0 0 10px #aaa;
            background-color: rgba(50, 102, 152, 0);
            
        }

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
            
            padding: 16px;
            margin-left: 16px;
            
        }

        .link {
            
            font-family: Arial,  Helvetica, sans-serif;
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
        .logopic {
            height:100px;
            width:175px;
        }

        .mobile-logopic {
            height:87px;
            width: 150px;
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

        .mobile-logo {
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
            font-size: 15px;
            text-decoration: none;
            
        }

        .navigation {
            
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
        }

        .menubutton {
            font-weight: bold;
            display: inline-block;
            background: #000;
            color: #fff;
            border: none;
            padding: 10px 20px;
            margin: 5px 30px;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            font-size: 10px;
            font-family: Helvetica, Arial,  sans-serif;
            height:30px;
            width:200px;
}
        

        .icon {
            display: flex;
            position: relative;
            justify-content: right;
           
            align-items: center;
            left: 95%;
            height: 100%;
            padding: 16px;
            width: 100px;
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