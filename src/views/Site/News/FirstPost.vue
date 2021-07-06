<!-- eslint-disable -->
<template>  
  <v-card>
    <v-card-text>
      <div class="text-center">
        <h1 class="display-2 font-weight-bold">THE X3 – TAKEN FURTHER</h1>
        <h3>The 2021 BMW X3 was optimized to give you the freedom to explore the world however you please.</h3>
      </div>
      <v-img
        src="https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FirstPost/2021_bmw_x3_angularfront.jpeg"
        contain
        max-height="500"
      >
      </v-img>
      <div class="ma-5">
        <h5>DESIGN</h5>
        <h2>CREATED TO TAKE ON CHALLENGES</h2>
        <p>With dynamic looks, a spacious interior, and a body built to face the toughest challenges, the
        sporty and agile BMW X3 was designed for impulsive adventures.</p>
        <h3>Powerful.</h3>
        <p>The BMW X3 combines rugged looks and impressive presence with design elements like the
        sculpted kidney grille and optional Icon Adaptive LED Headlights.</p>
        <h3>Aerodynamic.</h3>
        <p>The BMW X3 reduces drag with the Active Kidney Grille, air curtains, and side air breathers.</p>
        <h3>Driven.</h3>
        <p>The BMW X3’s impressive stance and available xDrive, BMW’s intelligent all-wheel drive prove
        that this activity vehicle was bult to conquer.</p>
        <h3>Convenient.</h3>
        <p>The X3 boasts up to 62.7 cubic feet of cargo space, configured to carry whatever you desire
        with the 40/20/40 split folding rear seats.</p>

        <h5>PERFORMANCE</h5>
        <h2>A NATURAL ATHLETE</h2>
        <p>With powerful engines and exceptional engineering, the BMW X3 delivers spirited performance
        and lively dynamics on every drive.</p>
        <h3>Powerful, efficient engines.</h3>
        <p>The BMW X3 offers versatile performance for all – from the combination combustion engine and
        electric motor of the X3 xDrive30e, to the muscular M TwinPower Turbo inline 6-cylinder of the
        X3 M40i.</p>
        <h3>Quick shifts.</h3>
        <p>Experience the full driving potential of the BMW X3 with ultra-smooth shifts from the 8-speed
        STEPTRONIC Sport Automatic transmission, included as standard.</p>
        <h3>Built for balance.</h3>
        <p>This sporty SAV moves with sedan-like agility thanks to the X3’s near-perfect weight distribution
        – a BMW engineering signature.</p>

        <h5>TECHNOLOGY</h5>
        <h2>INTUITIVE INNOVATION</h2>
        <p>In the BMW X3, you’ve got the latest BMW driving technology right at your fingertips – keeping
        you connected, entertained, and safe.</p>
        
        <h3>Connect your way.</h3>
        <p>BMW Live Cockpit Professional seamlessly integrates the fully digital 12.3&quot; Digital
        Instrument Cluster and a high-resolution 10.25&quot; Central Information Display touchscreen
        for more control, connectivity, and customization than ever before.</p>
        
        <h3>At your service.</h3>
        <p>The BMW Intelligent Personal Assistant gives you complete, convenient control over
        vehicle settings, navigation, and entertainment systems. Simply bring it to life with “Hey,
        BMW...” or your own personal activation word.</p>
        
        <h3>Peace of mind for your driving time.</h3>
        <p>Experience a total sense of confidence and calm behind the wheel with the optional
        Driving Assistance Package, including Active Driving Assistant, Active Blind Spot
        Detection, Lane Departure Warning, and much more.</p>
        
        <h3>Driving data in your line of sight.</h3>
        <p>The available full-color Head-up Display projects vital driving data directly onto the
        windshield. Travel speed, speed limit information, navigation, and more are right there
        when you need them.</p>
        
        <h3>Every angle, anywhere.</h3>
        <p>Monitor your BMW remotely from your phone with available Surround View with Remote
        3D View. Keep an eye on the surrounding area and capture every moment using the
        BMW Connected app.</p>

        <v-row justify="center">
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

        <div class="text-center mt-10"><h1 class="display-2 font-weight-bold">THE X3 AT A GLANCE</h1></div>

        <h3>Does the BMW X3 come in all-wheel drive?</h3>
        <p>The BMW X3 xDrive30i, X3 M40i, and X3 xDrive30e all come standard with xDrive. This
        intelligent all-wheel drive system allows you to navigate through rough, off-road terrain or road
        trips through snow.</p>
        
        <h3>How many seats are available in the BMW X3?</h3>
        <p>The BMW X3 is a compact SAV that can seat up to 5 people.</p>
        
        <h3>What is the towing capacity of the BMW X3?</h3>
        <p>When properly equipped, the BMW X3 can tow up to 4,400 pounds.</p>
        
        <h3>What is BMW Ultimate Care?</h3>
        <p>BMW Ultimate Care is a comprehensive maintenance plan that covers all factory-recommended
        maintenance services for eligible models. The maintenance coverage period is for the first 3
        years or 36,000 miles, whichever comes first. All work covered by this maintenance plan is
        performed at authorized BMW Centers and by BMW Trained Technicians. These professionals
        use only Original BMW Parts to ensure the quality and performance of your BMW.</p>
        
        <h3>Statistic Summary</h3>
        <p>
          MSRP: From $43,000<br />
          Dimensions:From 185.9" L x 74.4" W x 66.0" H<br />
          Horsepower: Up to 382 hp<br />
        </p>
        
        <h3>EPA Classification</h3>
        <p>Small sport utility vehicle</p>
        
        <h3>Engine &amp; Drivetrain Variants</h3>
        <div class="mb-3">
          <ul>
            <li>2.0-liter inline 4-cylinder BMW TwinPower Turbo gasoline engine (X3 30i models)</li>
            <li>3.0-liter inline 6-cylinder BMW M TwinPower Turbo gasoline engine (X3 M40i)</li>
            <li>Combination 2.0 liter inline 4-cylinder BMW TwinPower Turbo gasoline engine &amp; electric motor (X3 xDrive30e)</li>
          </ul>
        </div>

        <h3>Fuel Economy</h3>
        <p>
          X3 xDrive30e: TBA combined mpge<br />
          X3 sDrive30i: 25 / 29 mpg (city / highway)<br />
          X3 xDrive30i: 23 / 29 mpg (city / highway)<br />
          X3 M40i: 21 / 27 mpg (city / highway)<br />
        </p>
        <br />
        <p class="font-italic font-weight-bold">Font: bmwusa.com</p>

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
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FirstPost/2021_bmw_x3_angularfront.jpeg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FirstPost/2021_bmw_x3_angularrear.jpeg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FirstPost/2021_bmw_x3_dashboard.jpeg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FirstPost/2021_bmw_x3_engine.jpeg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FirstPost/2021_bmw_x3_frontview.jpeg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FirstPost/2021_bmw_x3_sideview.jpeg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FirstPost/2021_bmw_x3_steeringwheel.jpeg" },
        { src: "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FirstPost/2021_bmw_x3_trunk.jpeg" }
      ]
    };
  }
};
</script>
