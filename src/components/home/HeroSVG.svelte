<script>



</script>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 800">
    <style>
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes sway {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(3deg); }
      }
      @keyframes swayReverse {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(-4deg); }
      }
      @keyframes grow {
        0% { transform: scale(0.9); }
        50% { transform: scale(1.1); }
        100% { transform: scale(0.9); }
      }
      @keyframes float {
        0% { transform: translate(0, 0); }
        25% { transform: translate(15px, -15px); }
        50% { transform: translate(0, -30px); }
        75% { transform: translate(-15px, -15px); }
        100% { transform: translate(0, 0); }
      }
      @keyframes floatAlt {
        0% { transform: translate(0, 0); }
        33% { transform: translate(-20px, -10px); }
        66% { transform: translate(20px, -25px); }
        100% { transform: translate(0, 0); }
      }
      @keyframes drift {
        0% { transform: translateX(0); }
        50% { transform: translateX(20px); }
        100% { transform: translateX(0); }
      }
      @keyframes driftVertical {
        0% { transform: translateY(0); }
        50% { transform: translateY(15px); }
        100% { transform: translateY(0); }
      }
      @keyframes pulse {
        0% { opacity: 0.08; }
        50% { opacity: 0.18; }
        100% { opacity: 0.08; }
      }
      @keyframes breathe {
        0%, 100% { opacity: 0.12; }
        50% { opacity: 0.2; }
      }
      @keyframes circle {
        0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
        100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
      }
      @keyframes circleReverse {
        0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
        100% { transform: rotate(-360deg) translateX(20px) rotate(360deg); }
      }
      svg{pointer-events:none;}
      .leaf {
        fill: green;
        opacity: 0.15;
        transform-origin: bottom;
        animation: breathe 8s ease-in-out infinite;
      }
      .leaf-alt {
        fill: #66BB6A;
        opacity: 0.12;
        transform-origin: bottom;
        animation: breathe 9s ease-in-out infinite reverse;
      }
      .stem {
        stroke: #388E3C;
        stroke-width: 2;
        stroke-linecap: round;
        opacity: 0.15;
        fill: none;
      }
      .seed {
        fill: #8D6E63;
        opacity: 0.15;
        animation: pulse 10s ease-in-out infinite;
      }
      .flower {
        fill: #AED581;
        opacity: 0.18;
        animation: grow 7s ease-in-out infinite;
        transform-origin: center;
      }
      .dot {
        fill: #81C784;
        opacity: 0.12;
        animation: pulse 15s ease-in-out infinite;
      }
      .dot-alt {
        fill: #A5D6A7;
        opacity: 0.1;
        animation: pulse 12s ease-in-out infinite reverse;
      }
      .dot-float {
        fill: #C8E6C9;
        opacity: 0.08;
        animation: float 30s ease-in-out infinite;
      }
      .dot-circle {
        fill: #66BB6A;
        opacity: 0.1;
        animation: circle 45s linear infinite;
      }
      .dot-circle-reverse {
        fill: #81C784;
        opacity: 0.08;
        animation: circleReverse 40s linear infinite;
      }
      .plant1 {
        animation: sway 8s ease-in-out infinite;
        transform-origin: bottom;
        opacity: 0;
        animation-delay: 0.3s;
        animation-fill-mode: forwards;
      }
      .plant2 {
        animation: swayReverse 9s ease-in-out infinite;
        transform-origin: bottom;
        opacity: 0;
        animation-delay: 0.6s;
        animation-fill-mode: forwards;
      }
      .plant3 {
        animation: sway 10s ease-in-out infinite;
        transform-origin: bottom;
        opacity: 0;
        animation-delay: 0.9s;
        animation-fill-mode: forwards;
      }
      .plant-group {
        animation: fadeIn 1.8s ease-in forwards;
      }
      .float-element {
        animation: float 18s ease-in-out infinite;
      }
      .float-element-alt {
        animation: floatAlt 25s ease-in-out infinite;
      }
      .drift-element {
        animation: drift 15s ease-in-out infinite;
      }
      .drift-vertical {
        animation: driftVertical 12s ease-in-out infinite;
      }
      .pollen {
        fill: #FFF59D;
        opacity: 0.1;
        r: 1.5;
      }
      .pollen-path {
        animation: float 40s linear infinite;
      }
    </style>
    
    <!-- Continuously moving dot clusters -->
    <g class="drift-element" style="animation-delay: -5s;">
      <circle class="dot" cx="150" cy="100" r="3"></circle>
      <circle class="dot" cx="170" cy="120" r="2"></circle>
      <circle class="dot" cx="130" cy="130" r="2.5"></circle>
    </g>
    
    <g class="drift-element" style="animation-delay: -10s;">
      <circle class="dot-alt" cx="550" cy="150" r="3"></circle>
      <circle class="dot-alt" cx="570" cy="170" r="2"></circle>
      <circle class="dot-alt" cx="530" cy="180" r="2.5"></circle>
    </g>
    
    <g class="drift-vertical" style="animation-delay: -3s;">
      <circle class="dot" cx="800" cy="200" r="3"></circle>
      <circle class="dot" cx="820" cy="220" r="2"></circle>
      <circle class="dot" cx="780" cy="230" r="2.5"></circle>
    </g>
    
    <!-- Floating larger elements -->
    <g class="float-element" style="animation-delay: -7s;">
      <circle class="dot-float" cx="200" cy="250" r="40"></circle>
    </g>
    
    <g class="float-element-alt" style="animation-delay: -12s;">
      <circle class="dot-float" cx="700" cy="350" r="35"></circle>
    </g>
    
    <g class="float-element" style="animation-delay: -18s;">
      <circle class="dot-float" cx="400" cy="200" r="45"></circle>
    </g>
    
    <!-- Orbiting dots -->
    <g class="plant-group">
      <circle class="dot-circle" cx="300" cy="300" r="3"></circle>
      <circle class="dot-circle" cx="600" cy="250" r="2.5"></circle>
      <circle class="dot-circle" cx="450" cy="400" r="3.5"></circle>
      <circle class="dot-circle-reverse" cx="250" cy="450" r="3"></circle>
      <circle class="dot-circle-reverse" cx="750" cy="350" r="2.5"></circle>
      <circle class="dot-circle-reverse" cx="500" cy="150" r="3.5"></circle>
    </g>
    
    <!-- Scattered dots with pulse animation -->
    <g>
      <circle class="dot" cx="50" cy="50" r="3"></circle>
      <circle class="dot-alt" cx="150" cy="80" r="2"></circle>
      <circle class="dot" cx="250" cy="40" r="2.5"></circle>
      <circle class="dot-alt" cx="350" cy="120" r="2"></circle>
      <circle class="dot" cx="450" cy="70" r="3"></circle>
      <circle class="dot-alt" cx="550" cy="30" r="2"></circle>
      <circle class="dot" cx="650" cy="90" r="2.5"></circle>
      <circle class="dot-alt" cx="750" cy="60" r="2"></circle>
      <circle class="dot" cx="850" cy="110" r="3"></circle>
      <circle class="dot-alt" cx="950" cy="50" r="2"></circle>
      
      <circle class="dot-alt" cx="100" cy="150" r="2.5"></circle>
      <circle class="dot" cx="200" cy="180" r="2"></circle>
      <circle class="dot-alt" cx="300" cy="140" r="3"></circle>
      <circle class="dot" cx="400" cy="190" r="2"></circle>
      <circle class="dot-alt" cx="500" cy="160" r="2.5"></circle>
      <circle class="dot" cx="600" cy="200" r="2"></circle>
      <circle class="dot-alt" cx="700" cy="150" r="3"></circle>
      <circle class="dot" cx="800" cy="190" r="2"></circle>
      <circle class="dot-alt" cx="900" cy="170" r="2.5"></circle>
    </g>
    
    <!-- Pollen particles floating around -->
    <g class="pollen-path" style="animation-delay: -5s">
      <circle class="pollen" cx="200" cy="100" r="1.5"></circle>
      <circle class="pollen" cx="220" cy="150" r="1"></circle>
      <circle class="pollen" cx="180" cy="200" r="1.2"></circle>
    </g>
    
    <g class="pollen-path" style="animation-delay: -10s">
      <circle class="pollen" cx="600" cy="150" r="1.5"></circle>
      <circle class="pollen" cx="620" cy="200" r="1"></circle>
      <circle class="pollen" cx="580" cy="250" r="1.2"></circle>
    </g>
    
    <g class="pollen-path" style="animation-delay: -15s">
      <circle class="pollen" cx="400" cy="300" r="1.5"></circle>
      <circle class="pollen" cx="420" cy="350" r="1"></circle>
      <circle class="pollen" cx="380" cy="400" r="1.2"></circle>
    </g>
    
    <g class="pollen-path" style="animation-delay: -20s">
      <circle class="pollen" cx="800" cy="250" r="1.5"></circle>
      <circle class="pollen" cx="820" cy="300" r="1"></circle>
      <circle class="pollen" cx="780" cy="350" r="1.2"></circle>
    </g>
    
    <!-- Floating seed elements -->
    <g class="float-element" style="animation-delay: -3s">
      <path class="seed" d="M200 200 Q215 195 225 185 Q235 175 225 165 Q215 155 200 150 Q185 155 175 165 Q165 175 175 185 Q185 195 200 200"></path>
    </g>
    
    <g class="float-element-alt" style="animation-delay: -8s">
      <path class="seed" d="M750 250 Q765 245 775 235 Q785 225 775 215 Q765 205 750 200 Q735 205 725 215 Q715 225 725 235 Q735 245 750 250"></path>
    </g>
    
    <g class="float-element" style="animation-delay: -15s">
      <path class="seed" d="M350 400 Q365 395 375 385 Q385 375 375 365 Q365 355 350 350 Q335 355 325 365 Q315 375 325 385 Q335 395 350 400"></path>
    </g>
    
    <!-- First main plant group - bottom left -->
    <g class="plant-group">
      <g class="plant1">
        <path class="stem" d="M100 700 Q110 650 120 620 Q130 590 125 560 Q120 530 130 500"></path>
        <path class="leaf" d="M130 500 Q160 490 170 470 Q180 450 170 430 Q160 410 130 400 Q100 410 90 430 Q80 450 90 470 Q100 490 130 500"></path>
        <path class="leaf-alt" d="M125 560 Q155 550 165 530 Q175 510 165 490 Q155 470 125 460 Q95 470 85 490 Q75 510 85 530 Q95 550 125 560"></path>
        <path class="seed" d="M120 620 Q135 615 145 605 Q155 595 145 585 Q135 575 120 570 Q105 575 95 585 Q85 595 95 605 Q105 615 120 620"></path>
        <circle class="flower" cx="130" cy="500" r="12"></circle>
      </g>
    </g>
    
    <!-- Second plant group - bottom right -->
    <g class="plant-group">
      <g class="plant2">
        <path class="stem" d="M800 720 Q810 670 820 640 Q830 610 825 580 Q820 550 830 520"></path>
        <path class="leaf-alt" d="M830 520 Q860 510 870 490 Q880 470 870 450 Q860 430 830 420 Q800 430 790 450 Q780 470 790 490 Q800 510 830 520"></path>
        <path class="leaf" d="M825 580 Q855 570 865 550 Q875 530 865 510 Q855 490 825 480 Q795 490 785 510 Q775 530 785 550 Q795 570 825 580"></path>
        <path class="seed" d="M820 640 Q835 635 845 625 Q855 615 845 605 Q835 595 820 590 Q805 595 795 605 Q785 615 795 625 Q805 635 820 640"></path>
        <circle class="flower" cx="830" cy="520" r="12"></circle>
      </g>
    </g>
    
    <!-- Third plant group - bottom middle -->
    <g class="plant-group">
      <g class="plant3">
        <path class="stem" d="M500 750 Q510 700 520 670 Q530 640 525 610 Q520 580 530 550"></path>
        <path class="leaf" d="M530 550 Q560 540 570 520 Q580 500 570 480 Q560 460 530 450 Q500 460 490 480 Q480 500 490 520 Q500 540 530 550"></path>
        <path class="leaf-alt" d="M525 610 Q555 600 565 580 Q575 560 565 540 Q555 520 525 510 Q495 520 485 540 Q475 560 485 580 Q495 600 525 610"></path>
        <path class="seed" d="M520 670 Q535 665 545 655 Q555 645 545 635 Q535 625 520 620 Q505 625 495 635 Q485 645 495 655 Q505 665 520 670"></path>
        <circle class="flower" cx="530" cy="550" r="12"></circle>
      </g>
    </g>
    
    <!-- Small decorative plants scattered throughout -->
    <g class="plant-group">
      <g class="plant1" transform="translate(-50, 100) scale(0.6)">
        <path class="stem" d="M200 750 Q210 700 220 670 Q230 640 225 610"></path>
        <path class="leaf" d="M225 610 Q255 600 265 580 Q275 560 265 540 Q255 520 225 510 Q195 520 185 540 Q175 560 185 580 Q195 600 225 610"></path>
        <circle class="flower" cx="225" cy="610" r="8"></circle>
      </g>
    </g>
    
    <g class="plant-group">
      <g class="plant2" transform="translate(250, 50) scale(0.5)">
        <path class="stem" d="M700 750 Q710 700 720 670 Q730 640 725 610"></path>
        <path class="leaf-alt" d="M725 610 Q755 600 765 580 Q775 560 765 540 Q755 520 725 510 Q695 520 685 540 Q675 560 685 580 Q695 600 725 610"></path>
        <circle class="flower" cx="725" cy="610" r="8"></circle>
      </g>
    </g>
    
    <!-- Additional small plant groups -->
    <g class="plant-group">
      <g class="plant3" transform="translate(-150, -50) scale(0.45)">
        <path class="stem" d="M350 750 Q360 700 370 670 Q380 640 375 610"></path>
        <path class="leaf" d="M375 610 Q405 600 415 580 Q425 560 415 540 Q405 520 375 510 Q345 520 335 540 Q325 560 335 580 Q345 600 375 610"></path>
        <circle class="flower" cx="375" cy="610" r="8"></circle>
      </g>
    </g>
    
    <g class="plant-group">
      <g class="plant1" transform="translate(450, -100) scale(0.4)">
        <path class="stem" d="M850 750 Q860 700 870 670 Q880 640 875 610"></path>
        <path class="leaf-alt" d="M875 610 Q905 600 915 580 Q925 560 915 540 Q905 520 875 510 Q845 520 835 540 Q825 560 835 580 Q845 600 875 610"></path>
        <circle class="flower" cx="875" cy="610" r="8"></circle>
      </g>
    </g>
  </svg>