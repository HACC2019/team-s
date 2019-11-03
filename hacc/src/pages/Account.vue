<template>
    <div id="account-main">
       <div class="row">
            <div class="col s7 push-s5"><span class="flow-text">This div is 7-columns wide on pushed to the right by 5-columns.</span></div>
            <div class="col s5 pull-s7"><span class="flow-text">5-columns wide pulled to the left by 7-columns.</span></div>
       </div>


       <div class="row">

            <div class="col s9 push-s2 blocky">
               <div class="row blockyRow">
                    <div class="col s1"></div>
                    <div class="col s12 profileBlock"></div>
                    <div class="col s1"></div> 
                    <div class="col s12 profileBlock">ssdssdd</div>
                    <div class="col s1"></div>
               </div>
            </div>

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

<style scoped>
.blocky {
    background-color: white;
    border: solid 1px black;
    border-radius: 25px;
    height:  50rem;
    opacity: 0.1;
}

.blockyRow {
    display: flex;
    justify-content: center;
}

.profileBlock {
    background-color: white;    
    border: solid 1px black;
    border-radius:  25px;
    height: 44rem;
    margin-bottom: 3rem;
    margin-top: 3rem;    
}
</style>