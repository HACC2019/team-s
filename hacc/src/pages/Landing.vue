<template>
    <div class="Landing-Page Page">
      <Page-Header />
      <div class="valign-wrapper" id="Section-One">
        <div class="container Inner-Content-Container">
          
          <div class="row">
              <div class="col s12" style="text-align:center;">
                <h1 style="width:60%; margin:auto;"> Changing Aloha for good</h1>
              </div>
              
              <div class="col s12">
                <div class="Button-Container" style="margin:auto; width:auto; display:table; margin-top:2rem;">
                  <a class="waves-effect waves-light btn-large Intro-Button">Sign Up</a>
                </div>
              </div>
          </div>

        </div>
      </div>

      <!-- Section 2 -->
      <div class="Section" id="Section-Two">
        <div class="container Inner-Content-Container">
          
          <div class="row" style="color:#fcfcfc;">
            <div class="col s12">
              <h3>Our features</h3>
              <h5>For the betterment of the community</h5>
            </div>
          </div>

          <div class="row">
            <template v-for="items in cards">
              <div class="col s4" :key="items.title">
                <div class="card Begin-Cards" style="padding-top:1rem;">
                  <div class="card-image">
                    <img :src="items.img" style="height:150px" alt="">
                  </div>

                  <div class="card-content">
                    <p>{{items.text}}</p>
                  </div>

                </div>
            </div>
            </template>
          </div>

        </div>
      </div>

      <!-- Section Three-->
      <div class="Section" id="Section-Three" style="color:#fcfcfc;">
        <div class="container Inner-Content-Container">
          <div class="row valign-wrapper" style="margin-bottom:0px;">
            <div class="col s12 m7">
              
              <div class="row">

                <div class="col s12">
                  <h3>Change your community</h3>
                </div>

                <div class="col s11">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio libero, tempus ac rhoncus eu, pellentesque ut risus. Sed suscipit imperdiet lobortis. Nullam pretium feugiat nibh, eget dignissim ipsum convallis nec. Etiam vulputate, nunc id posuere ultrices, ipsum risus sodales mauris, vitae vulputate nisl ex ut urna. Mauris aliquet elit nec enim porttitor lacinia. Duis vitae aliquam nisl, et tincidunt magna. Suspendisse lacinia malesuada risus ac lacinia.

Mauris eget sagittis nunc. Vivamus nec rhoncus lacus, sed malesuada velit. Phasellus porta turpis enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis purus felis, venenatis vitae ante et, vulputate pellentesque est. Cras ac dolor arcu. Cras eget lobortis augue. Nullam congue ornare euismod. Praesent interdum sem at turpis convallis gravida. Phasellus vitae ipsum eu felis finibus accumsan. Nullam vulputate faucibus urna at euismod. Cras tristique, mauris a efficitur vestibulum, nulla odio consectetur nibh, dapibus fermentum enim justo vestibulum dolor.</p>
                </div>

              </div>

            </div>

            <div class="col s12 m5">
              <img :src="require('@/Images/group.svg')" alt="">
            </div>
          </div>
        </div>
      </div>

      <!-- Section Four -->
      <div class="Section" id="Section-Four" style="color:#fcfcfc;">
        <div class="container Inner-Content-Container">
          <div class="row valign-wrapper" style="margin-bottom:0px;">
            <div class="col s12 m5">
              <img :src="require('@/Images/hawaii.svg')" alt="">
            </div>
            <div class="col s12 m7">
              
              <div class="row">

                <div class="col s12 right">
                  <h3>Aloha+ Challenge</h3>
                </div>

                <div class="col s11 right">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio libero, tempus ac rhoncus eu, pellentesque ut risus. Sed suscipit imperdiet lobortis. Nullam pretium feugiat nibh, eget dignissim ipsum convallis nec. Etiam vulputate, nunc id posuere ultrices, ipsum risus sodales mauris, vitae vulputate nisl ex ut urna. Mauris aliquet elit nec enim porttitor lacinia. Duis vitae aliquam nisl, et tincidunt magna. Suspendisse lacinia malesuada risus ac lacinia.

Mauris eget sagittis nunc. Vivamus nec rhoncus lacus, sed malesuada velit. Phasellus porta turpis enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis purus felis, venenatis vitae ante et, vulputate pellentesque est. Cras ac dolor arcu. Cras eget lobortis augue. Nullam congue ornare euismod. Praesent interdum sem at turpis convallis gravida. Phasellus vitae ipsum eu felis finibus accumsan. Nullam vulputate faucibus urna at euismod. Cras tristique, mauris a efficitur vestibulum, nulla odio consectetur nibh, dapibus fermentum enim justo vestibulum dolor.</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="Section" id="Section-Five">
        <div class="container Inner-Content-Container valign-wrapper" style="height:100%;">
          <div class="row">
            <div class="col s12" style="text-align:center;">
              <h2>Contrubute to the Community</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio libero, <br/>tempus ac rhoncus eu, pellentesque ut risus.</p>
            </div>

            <div class="col s12" style="text-align: center; margin-top: 2rem;">
              <a class="waves-effect waves-light btn Intro-Button">Sign Up</a>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import header from '../components/Header'
export default {
    components: {
        'Page-Header': header
    },
    data() {
      return {
        cards: [
          {title:'Community Connect',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis vestibulum justo eget aliquam.', img: require('@/Images/tree.svg')},
          {title:'Local Projections', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis vestibulum justo eget aliquam.', img: require('@/Images/graph.svg')},
          {title: 'Visual Cues',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis vestibulum justo eget aliquam.', img: require('@/Images/newspaper.svg')}
        ],
      }
    }
}
</script>

<style scoped>

  .Landing-Page {
    perspective: 1px;
    transform-style: preserve-3d;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  #Section-One {
    height: 100%;
    position: relative;
    transform: translateZ(-1px) scale(2.1);
    z-index: -1;
  }



  .Section {
    position: relative;
    display: block;
    z-index: 1;
    height: 80%;
  }

  .Intro-Button {
    margin-right: 2rem;
    background: linear-gradient(130deg, rgba(215,54,40,1) 26%,  100%);
  }

  h1 {
    font-size: 6rem;
    color: #f6f6f6;
  }


  .Info-Card {
    width: 20rem;
    box-shadow: 1px 10px 35px rgba(5,5,5,0.25);
    overflow: hidden;
    border-radius: 5px;
    text-align: center;
  }

  .Card-Container {
    margin: 3rem auto;
  }

  .Beginning-Headers {
    text-align: right;
  }

  #Section-One, #Section-Four {
    background-color: #d7263b;
  }

  #Section-Two {
    background-color: #9ae3d7;
  }

  #Section-Three {
    background-color: #93ff96;
  }

  #Section-Four {
    text-align: right;
  }

  .Begin-Cards {
    overflow: hidden;
    border-radius: 0.75rem;
  }
</style>