<template>
    <div id="account-main">
       <div class="row">
            <div class="col s7 push-s5"><span class="flow-text">This div is 7-columns wide on pushed to the right by 5</span></div>
            <div class="col s5 pull-s7"><span class="flow-text">Dashloha</span></div>
       </div>


       <div class="row">

            <div class="col s9 push-s2 blocky">
                <div id="backBlock"></div>
               <div class="row blockyRow offset">
                    <div class="col s1"></div>

                    <div class="col s12 profileBlock">
                        <div class="col s11 center offset">
                            <div class="row">Profile</div>
                            <div class="row"></div>
                            <div class="row"></div>
                        </div>
                    </div>

                    <div class="col s1"></div> 

                    <div class="col s12">
                        <div class="row profileBlockSmall">qwe</div>
                        <div class="row profileBlockSmall">wef</div>
                    </div>

                    <div class="col s1"></div>
               </div>
            </div>

            <div id="hello"></div>

            <!--This is the side bar-->
            <div class="col s2 pull-s10 sideBar">
                <div class="row">Overview</div>
                <div class="row">Account</div>
                <div class="row">Rewards</div>
                <div class="row">Settings</div>
            </div>
       </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    data: function() {

    },
    methods: {

    }
}
</script>

<style scoped>
#account-main {
}

.blocky {
    background-color: rgba(34, 34, 34, 0.4);
    border: solid 1px black;
    border-radius: 25px;
    height:  50rem;   
    position: relative;
    z-index: -2;
}



.blockyRow {
    display: flex;
    justify-content: center;
}

.profileBlock {
    background-color:white;    
    border: solid 1px black;
    border-radius:  25px;
    height: 44rem;         
}


.offset {
    margin-bottom: 3rem;
    margin-top: 3rem;  
}
.profileBlockSmall  {
    background-color: white;
    border: solid 1px black;
    border-radius:  25px;
    height: 21.4rem;
}


</style>