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
      <div class="Section container" id="Section-Two">
        <div class="container Inner-Content-Container">
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
          {title:'Community Connect',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis vestibulum justo eget aliquam.'},
          {title:'Local Projections', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis vestibulum justo eget aliquam.'},
          {title: 'Visual Cues',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis vestibulum justo eget aliquam.'}
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
    height: 80%;
    z-index: 1;
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

  #Section-One {
    background-color: #d7263b;
  }

  #Section-Two {
    background-color: #9ae3d7;
  }
</style>