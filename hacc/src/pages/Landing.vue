<template>
    <div class="Landing-Page Page">
      <div class="Section valign-wrapper" id="Section-One">
        <div class="container Inner-Content-Container">
          <div class="row">
              <div class="col s12 m4 l6">
                <h1>Dashloha</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus neque, accumsan in placerat quis, sagittis nec enim. Nam at mi sit amet ex porttitor convallis ac eget diam.</p>
              </div>
          </div>

          <div class="row">
            <div class="col s12 m6">
              <a class="waves-effect waves-light btn Intro-Button">Sign Up</a>
              <a class="waves-effect waves-light btn Intro-Button">Continue to Site</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2 -->
      <div class="Section container" id="Section-Two">

        <div class="row Beginning-Headers">
          <h3>How We help the community</h3>
          <h5>Takes alot of people</h5>
        </div>

        <div class="Card-Container row">
          <template v-for="items in cards">
            <div class="col s3 m4 l4" :key="items.title">
            <div class="card Info-Card">
              <div class="card-image">
                <img class="Card-Image" :src="require('@/Images/Temp.png')" alt="">
              </div>
              <div class="card-content">
                <h3 class="flow-text">{{items.title}}</h3>
                <p>{{items.text}}</p>
              </div>
            </div>
          </div>
          </template>
        </div>
      </div>
    </div>
</template>

<script>
// import header from '../components/Header'
export default {
    components: {
        // 'Page-Header': header
    },
    data() {
      return {
        cards: [
          {title:'Community Connect',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis vestibulum justo eget aliquam.'},
          {title:'Local Projections', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis vestibulum justo eget aliquam.'},
          {title: 'Visual Cues',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis vestibulum justo eget aliquam.'}
        ]
      }
    }
}
</script>

<style scoped>
  .Section {
    height: 100%;
  }

  .Intro-Button {
    margin-right: 2rem;
    background: linear-gradient(130deg, rgba(215,54,40,1) 26%, rgba(147,255,150,1) 100%);
  }

  h1 {
    font-size: 6rem;
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
</style>