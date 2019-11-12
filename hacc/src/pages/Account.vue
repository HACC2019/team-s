<template>
    <div id="accountmain">
        <div id="desktop">
            <div class="row smallOffset">
                <!--    <div class="col s7 push-s5"><span class="flow-text">This div is 7-columns wide on pushed to the right by 5</span></div>
                    <div class="col s5 pull-s7"><span class="flow-text">Dashloha</span></div>
                -->
                    <div class="col s3">Dashloha</div>
                    <div class="col s6 bigText">Gerald's Dash Board</div>
                    <div class="col push-s1"><img class="row s1 smallImage" :src="profilePicture"></div>
                    <div class="col">
                        <p class="row s1">Hello, Gerald</p>
                    </div>
            </div>


            <div class="row">

                    <div class="col s9 push-s2 blocky" id="mainBlock">
                        <div id="backBlock"></div>
                    <div class="row blockyRow offset">
                            <div class="col s1"></div>

                            <div class="col s12 profileBlock">
                                <div class="col s11 center offset">
                                    <div class="row">
                                        <img class="image" :src="profilePicture">
                                    </div>
                                    <div class="row">
                                        <p class="col">My Profile</p>
                                    </div>
                                    <input class="smallInput" type="text" placeholder="Gerald">
                                    <input class="smallInput" type="text" placeholder="notgerald@hotmail.com">
                                </div>
                            </div>

                            <div class="col s1"></div> 

                            <div class="col s12">
                                <div class="row profileBlockSmall">
                                    <div class="col s4">Activty Overview</div>
                                </div>
                                <div class="row profileBlockSmall">wef</div>
                            </div>

                            <div class="col s1"></div>
                    </div>
                    </div>

                    <!--This is the side bar-->
                    <div class="col s1 pull-s9 sideBar">
                        <div class="col s10"></div>
                        <div class="col s10">
                            <p class="row">Overview</p>
                            <hr class="line">
                            <p class="row">Account</p>
                            <hr class="line">
                            <p class="row">Rewards</p>
                            <hr class="line">
                            <p class="row">Settings</p>
                        </div>
                    </div>
            </div>
        </div>   

        <div id="mobile">
            <div id="mobileMain">

                <div class="row">
                    <p class="col 4 bigFont" @click="display">☰</p>
                    <p class="col s7 bigFont">Gerlad's Dashboard</p>
                    <img class="smallMobileImage" :src="profilePicture">
                </div>  

                <div class="row">
                    <img class="col  mobileImage oof" :src="profilePicture">
                </div>
  

                <div class="row mobileSmallBlock" v-bind:style="{position: 'absolute', marginTop: '18rem'}">
                    <p class="col s12 push-s4" v-bind:style="{marginTop: '3rem'}">My Profile</p>
                </div>
                <div class="row mobileSmallBlock" v-bind:style="{position: 'absolute', marginTop: '28rem'}">
                    <p class="col s12 push-s4" v-bind:style="{marginTop: '3rem'}">My Activity</p>
                </div>
                <div class="row mobileSmallBlock" v-bind:style="{position: 'absolute', marginTop: '38rem'}">
                    <p class="col s12 push-s4" v-bind:style="{marginTop: '3rem'}">My Community</p>
                </div>
               
                     
               <ul id="mobileSideNav" class="row" ref="mobileSideNav">
                    <li class="bigFont">Overview</li>
                    <li class="bigFont">Account</li>
                    <li class="bigFont">Rewards</li>
                    <li class="bigFont">Settings</li>
                </ul>
            </div>

        </div>
    </div>

</template>



<style scoped>
.mobileSmallBlock {
    
    height: 8rem;
    background-color: white;    
    border-radius: 24px;
    width: 20rem;
    margin-left: 3rem;
    overflow: hidden;
}

.oof {
    position: absolute;
}

.biggerFont {
    font-size: 36px;
}
.bigFont {
    color: 	whitesmoke;
    font-size: 22px;
    margin-top: 2rem;
}

.mobileImage {
    border-radius: 25px;
    height: 15rem;
    margin-left: 5rem;
}

.smallMobileImage {
    height: 5rem;
    margin-top: 1rem;
    margin-left: 1rem;
    border-radius: 50px; 
}

#mobileSideNav {
    background-color: rgba(34, 34, 34, 0.3);
    border-radius: 15px;
    display: none;
    height: 50rem;
    position: relative;
    margin-left: 0px;
    margin-top: -28px;
    width: 50%;
    z-index: 10;
}
</style>

<script>  
export default {
    components: {

    },
    data: function() {
        return {
            profilePicture: require('../assets/Account/profilepic.jpg')
        }
    },
    methods: {
        display: function() {
            if (this.$refs.mobileSideNav.style.display == 'block') {
                this.$refs.mobileSideNav.style.display = 'none';
            } else {
                this.$refs.mobileSideNav.style.display = 'block';
            }
        }
    }
}
</script>

<style scoped>
#account-main {
    overflow: hidden;
    display: block;
}

.bigText {
    font-size: 30px;
}

.blocky {
    background-color: rgba(166, 236, 224, 1);
    border: solid 1px black;
    border-radius: 25px;
    height:  40rem;   
    position: relative;
    z-index: -2;
}



.blockyRow {
    display: flex;
    justify-content: center;
}

.image {
    height: 15rem;
}

.smallImage {
    border-radius: 10px;
    height: 3rem;
}

.line {
    margin-left: 1px;
    width: 10rem;
}

.profileBlock {
    background-color:white;    
    border: solid 1px black;
    border-radius:  25px;
    height: 34rem;         
}


.offset {
    margin-bottom: 3rem;
    margin-top: 3rem;  
}
.profileBlockSmall  {
    background-color: white;
    border: solid 1px black;
    border-radius:  25px;
    height: 16.3rem;
}

.smallInput {
    width: 10px;
}

.smallOffset {
    margin-top: 2rem;
}


#mobile {
    display: none;
}

#mobile {
    background-color: rgba(166, 236, 224, 1);
    height: 58rem;
    overflow: hidden;
}

@media only screen and (max-width: 600px) {
#desktop {
    display: none;
}

#mobile {
    display: block;
}
}
</style>


