<!-- eslint-disable -->
<template>
  <v-card>
    <v-card-text>
      <div class="text-center mb-5">
        <h1 class="display-2 font-weight-bold">2021 Lexus IS 300 AWD</h1>
        <div class="display-1">Luxury Sedan</div>
      </div>
      <div class="ma-5">
        <v-img
          src="https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FourthPost/Lexus-IS-gallery-02.jpg"
          contain
          max-height="400"
          class="mb-5"
        ></v-img>
        <h2>KEY FEATURES</h2>
        <p>
          <ul>
            <li>260-HORSEPOWER V6 ENGINE*</li>
            <li>SIX-SPEED TRANSMISSION WITH PADDLE SHIFTERS</li>
            <li>ALL-WHEEL DRIVE</li>
          </ul>
        </p>
        <h2>DESIGN</h2>
        <div class="ml-7 mt-2">
          <h4>SLEEK NEW DESIGN</h4>
          <p>A low, imposing stance that’s a full 30 millimeters wider than its predecessor.
          A new, singular taillamp that tapers to mere millimeters in the center. More
          dramatic character lines. The result? A pure sport sedan that looks as
          aggressive as it feels.</p>

          <h4>REIMAGINED INTERIOR</h4>
          <p>A new touchscreen display. A shift knob and steering wheel trimmed in hand-
          selected leather. Daring details like accent stitching along the dash and larger,
          circular air vents reminiscent of jet turbines. Every interior element is centered
          around you.</p>

          <h4>BOLD F SPORT STYLE</h4>
          <p>Unmistakable style meets unrivaled performance with the 2021 IS 350 F
          SPORT. It boasts larger, staggered-width 19-inch wheels,*as well as Gloss
          Black accents around the grille, lower rocker and rear lip spoiler.</p>
        </div>

        <v-row justify="center" class="mb-5">
          <v-col
            lg="8"
            offset-lg="0"
          >
            <v-carousel height="400" hide-delimiters>
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
              >
                <v-img :src="item.src" contain height="400"></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>

        <h2 class="mb-1">PERFORMANCE</h2>
        <h4>ALL-WEATHER PERFORMANCE</h4>
        <p>With all-wheel drive, the IS 300 AWD and IS 350 F SPORT AWD automatically
        allocate engine power between the front and rear axles from 30/70 to as much as
        50/50. The system can help provide enhanced traction on a wide range of road
        surfaces and conditions.</p>

        <h2 class="mb-1">TECNOLOGY</h2>
        <h4>THE MOST ADVANCED IS EVER</h4>
        <p>One of the most sophisticated 3D audio technologies available in an automobile. A new
        touchscreen multimedia display that’s placed six inches closer for your convenience.
        New Android Auto™ integration,* and much more. This is the most connected IS ever.</p>

        <h2 class="mb-1">SAFETY</h2>
        <h4>LEXUS SAFETY SYSTEM+ 2.5</h4>
        <p>Introducing Lexus Safety System+ 2.5,* a class-leading integrated suite* of the most
        advanced standard active safety equipment ever offered on a Lexus.</p>
        <br />
        <p>
          For buy cars, <v-btn text x-small to="/search">click here</v-btn>
          <br />
          For sell cars, <v-btn text x-small to="/register">click here</v-btn>
        </p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      items: [
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FourthPost/Lexus-IS-gallery-01.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FourthPost/Lexus-IS-gallery-03.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FourthPost/Lexus-IS-gallery-04.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FourthPost/Lexus-IS-gallery-05.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FourthPost/Lexus-IS-gallery-06.jpg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FourthPost/Lexus-IS-gallery-07.jpg" },
      ]
    };
  }
};
</script>
