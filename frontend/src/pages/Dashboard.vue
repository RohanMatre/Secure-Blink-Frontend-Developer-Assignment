<template>
  <div 
    class="relative"
    style="width: 1920px; height: 1080px; background: #FCFCFC; opacity: 1;"
  >
    <!-- Left Sidebar -->
    <div 
      class="absolute"
      style="top: 0px; left: 0px; width: 203px; height: 1080px; background: #FFFFFF;"
    >
      <!-- Sidebar Icons Box -->
      <div 
        class="absolute bg-white"
        style="top: 31px; left: 18px; width: 167px; height: 137px; background: #FFFFFF; box-shadow: 0px 3px 26px #0000001C; border-radius: 5px; opacity: 1;"
      >
        <!-- Dashboard Icon -->
        <img 
          src="@/assets/Dashboard/metrics.png" 
          alt="Dashboard"
          class="absolute"
          style="top: 29px; left: 68px; width: 43px; height: 43px; opacity: 1;"
        />
        
        <!-- Dashboard Text -->
        <div 
          class="absolute text-left"
          style="top: 98px; left: 33px; width: 98px; height: 20px; font: normal normal normal 20px/24px Inter; letter-spacing: 0px; color: #495172; opacity: 1;"
        >
          Dashboard
        </div>
      </div>

      <!-- Analytics -->
      <img 
        src="@/assets/Dashboard/analytics.png" 
        alt="Analytics"
        class="absolute"
        style="top: 212px; left: 86px; width: 36px; height: 36px; opacity: 1;"
      />
      
      <div 
        class="absolute text-left"
        style="top: 274px; left: 60px; width: 80px; height: 20px; font: normal normal normal 20px/24px Inter; letter-spacing: 0px; color: #8990AD; opacity: 1;"
      >
        Analytics
      </div>

      <!-- Trading -->
      <img 
        src="@/assets/Dashboard/currency-exchange-2.png" 
        alt="Trading"
        class="absolute"
        style="top: 337px; left: 81px; width: 43px; height: 43px; opacity: 1;"
      />
      
      <div 
        class="absolute text-left"
        style="top: 402px; left: 67px; width: 67px; height: 20px; font: normal normal normal 20px/24px Inter; letter-spacing: 0px; color: #8990AD; opacity: 1;"
      >
        Trading
      </div>

      <!-- Notifications -->
      <img 
        src="@/assets/Dashboard/sound-wave.png" 
        alt="Notifications"
        class="absolute"
        style="top: 462px; left: 81px; width: 43px; height: 43px; opacity: 1;"
      />
      
      <div 
        class="absolute text-left"
        style="top: 519px; left: 44px; width: 109px; height: 20px; font: normal normal normal 20px/24px Inter; letter-spacing: 0px; color: #8990AD; opacity: 1;"
      >
        Notifications
      </div>

      <!-- Logout -->
      <div 
        @click="handleLogout"
        class="absolute cursor-pointer"
        style="top: 927px; left: 69px; width: 61px; height: 86px;"
      >
        <img 
          src="@/assets/Dashboard/logout.png" 
          alt="Logout"
          class="absolute"
          style="top: 0px; left: 17px; width: 37px; height: 37px; opacity: 1;"
        />
        
        <div 
          class="absolute text-left"
          style="top: 66px; left: 0px; width: 61px; height: 20px; font: normal normal normal 20px/24px Inter; letter-spacing: 0px; color: #8990AD; opacity: 1;"
        >
          Logout
        </div>
      </div>
    </div>

    <!-- Header Section -->
    <!-- Dashboard Title -->
    <div 
      class="absolute text-left"
      style="top: 89px; left: 292px; width: 249px; height: 51px; font: normal normal bold 51px/61px Inter; letter-spacing: 0px; color: #11193C; opacity: 1;"
    >
      Dashboard
    </div>

    <!-- Welcome back, Andrew -->
    <div 
      class="absolute text-left"
      style="top: 163px; left: 292px; width: 209px; height: 20px; font: normal normal normal 20px/24px Inter; letter-spacing: 0px; color: #8990AD; opacity: 1; white-space: nowrap;"
    >
      Welcome back, Andrew
    </div>

    <!-- Blue Button -->
    <div 
      class="absolute"
      style="top: 93px; left: 1367px; width: 161px; height: 58px; background: #0F77FA; box-shadow: 0px 3px 26px #0000001C; border-radius: 5px; opacity: 1;"
    >
      <!-- + icon -->
      <img 
        src="@/assets/Dashboard/e-add.png" 
        alt="Add"
        class="absolute"
        style="top: 17px; left: 15px; width: 24px; height: 24px; opacity: 0.7;"
      />
      
      <!-- Add Unit text -->
      <div 
        class="absolute text-left"
        style="top: 20px; left: 50px; width: 77px; height: 20px; font: normal normal bold 20px/24px Inter; letter-spacing: 0px; color: #FFFFFF; opacity: 1; white-space: nowrap;"
      >
        Add Unit
      </div>
    </div>

    <!-- Avatar -->
    <div 
      class="absolute"
      style="top: 88px; left: 1578px; width: 68px; height: 68px; background: #E5E7EB; box-shadow: 0px 3px 26px #00000029; opacity: 1; border-radius: 50%; display: flex; align-items: center; justify-content: center;"
    >
      <svg width="32" height="32" fill="#8990AD" viewBox="0 0 24 24">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
    </div>

    <!-- Andrew Johnstons -->
    <div 
      class="absolute text-left"
      style="top: 112px; left: 1679px; width: 165px; height: 20px; font: normal normal normal 20px/24px Inter; letter-spacing: 0px; color: #8990AD; opacity: 1; white-space: nowrap;"
    >
      Andrew Johnstons
    </div>

    <!-- Analytics View Layout -->
    <div 
      class="absolute"
      style="top: 243px; left: 292px; width: 1527px; height: 91px; opacity: 1;"
    >
      <!-- BALANCE Section -->
      <div 
        class="absolute text-left"
        style="top: 2px; left: 0px; width: 106px; height: 19px; font-family: Inter; font-size: 19px; font-weight: bold; line-height: 23px; letter-spacing: 2.91px; color: #8990AD; opacity: 1;"
      >
        BALANCE
      </div>
      
      <div 
        class="absolute text-left"
        style="top: 53px; left: 0px; width: 154px; height: 37px; font-family: Inter; font-size: 37px; font-weight: 500; line-height: 44px; letter-spacing: 0px; color: #11193C; opacity: 1;"
      >
        $5900.00
      </div>

      <!-- First separator line -->
      <div 
        class="absolute"
        style="top: 0px; left: 286px; width: 0px; height: 91px; border: 1px solid #C5C9D7; opacity: 1;"
      ></div>

      <!-- PROFITS Section -->
      <div 
        class="absolute text-left"
        style="top: 2px; left: 397px; width: 100px; height: 19px; font-family: Inter; font-size: 19px; font-weight: bold; line-height: 23px; letter-spacing: 2.91px; color: #8990AD; opacity: 1;"
      >
        PROFITS
      </div>
      
      <div 
        class="absolute text-left"
        style="top: 53px; left: 397px; width: 134px; height: 37px; font-family: Inter; font-size: 37px; font-weight: 500; line-height: 44px; letter-spacing: 0px; color: #11193C; opacity: 1;"
      >
        $950.00
      </div>

      <!-- Blue arrow up icon -->
      <div 
        class="absolute"
        style="top: 62px; left: 568px; width: 17px; height: 9px; background: #0F77FA; opacity: 1; clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"
      ></div>

      <!-- +56% -->
      <div 
        class="absolute text-left"
        style="top: 58px; left: 595px; width: 49px; height: 19px; font-family: Inter; font-size: 19px; font-weight: bold; line-height: 23px; letter-spacing: 0px; color: #0F77FA; opacity: 1;"
      >
        +56%
      </div>

      <!-- Second separator line -->
      <div 
        class="absolute"
        style="top: 0px; left: 777px; width: 0px; height: 91px; border: 1px solid #C5C9D7; opacity: 1;"
      ></div>

      <!-- LOSSES Section -->
      <div 
        class="absolute text-left"
        style="top: 2px; left: 871px; width: 91px; height: 19px; font-family: Inter; font-size: 19px; font-weight: bold; line-height: 23px; letter-spacing: 2.91px; color: #8990AD; text-transform: uppercase; opacity: 1;"
      >
        LOSSES
      </div>
      
      <div 
        class="absolute text-left"
        style="top: 53px; left: 871px; width: 134px; height: 37px; font-family: Inter; font-size: 37px; font-weight: 500; line-height: 44px; letter-spacing: 0px; color: #11193C; opacity: 1;"
      >
        $450.00
      </div>

      <!-- Red arrow down icon -->
      <div 
        class="absolute"
        style="top: 62px; left: 1042px; width: 17px; height: 9px; background: #FF4B75; opacity: 1; clip-path: polygon(50% 100%, 0% 0%, 100% 0%);"
      ></div>

      <!-- -56% -->
      <div 
        class="absolute text-left"
        style="top: 58px; left: 1069px; width: 49px; height: 19px; font-family: Inter; font-size: 19px; font-weight: bold; line-height: 23px; letter-spacing: 0px; color: #FF4B75; opacity: 1;"
      >
        -56%
      </div>

      <!-- Third separator line -->
      <div 
        class="absolute"
        style="top: 0px; left: 1250px; width: 0px; height: 91px; border: 1px solid #C5C9D7; opacity: 1;"
      ></div>

      <!-- CURRENCIES Section -->
      <div 
        class="absolute text-left"
        style="top: 2px; left: 1345px; width: 152px; height: 19px; font-family: Inter; font-size: 19px; font-weight: bold; line-height: 23px; letter-spacing: 2.91px; color: #8990AD; text-transform: uppercase; opacity: 1;"
      >
        CURRENCIES
      </div>

      <!-- Bitcoin -->
      <div 
        class="absolute"
        style="top: 46px; left: 1345px; width: 33px; height: 33px; background: #2464FC; opacity: 0.1; border-radius: 50%;"
      ></div>
      <img 
        src="@/assets/Dashboard/bitcoin-2.png" 
        alt="Bitcoin"
        class="absolute"
        style="top: 52px; left: 1356px; width: 14px; height: 21px; opacity: 1;"
      />

      <!-- Dollar -->
      <div 
        class="absolute"
        style="top: 46px; left: 1394px; width: 33px; height: 33px; background: #2464FC; opacity: 0.1; border-radius: 50%;"
      ></div>
      <img 
        src="@/assets/Dashboard/currency-dollar.png" 
        alt="Dollar"
        class="absolute"
        style="top: 52px; left: 1406px; width: 11px; height: 21px; opacity: 1;"
      />

      <!-- Euro -->
      <div 
        class="absolute"
        style="top: 46px; left: 1444px; width: 33px; height: 33px; background: #2464FC; opacity: 0.1; border-radius: 50%;"
      ></div>
      <img 
        src="@/assets/Dashboard/currency-euro.png" 
        alt="Euro"
        class="absolute"
        style="top: 52px; left: 1450px; width: 19px; height: 21px; opacity: 1;"
      />

      <!-- Yen -->
      <div 
        class="absolute"
        style="top: 46px; left: 1493px; width: 34px; height: 33px; background: #2464FC; opacity: 0.1; border-radius: 50%;"
      ></div>
      <img 
        src="@/assets/Dashboard/currency-yen.png" 
        alt="Yen"
        class="absolute"
        style="top: 54px; left: 1504px; width: 12px; height: 18px; opacity: 1;"
      />
    </div>

    <!-- Country Dashboard -->
    <div 
      class="absolute"
      style="top: 404px; left: 289px; width: 1527px; height: 226px; background: #FFFFFF; box-shadow: 0px 3px 26px #00000017; opacity: 1;"
    >
      <!-- Italy -->
      <div 
        class="absolute text-left"
        style="top: 49px; left: 109px; width: 35px; height: 19px; font-family: Inter; font-size: 19px; font-weight: 500; line-height: 23px; letter-spacing: 0px; color: #495172; text-shadow: 0px 3px 26px #0000001C; opacity: 1;"
      >
        Italy
      </div>
      
      <div 
        class="absolute text-center"
        style="top: 84px; left: 89px; width: 62px; height: 42px; font-family: Inter; font-size: 32px; font-weight: 700; line-height: 38px; letter-spacing: 0.24px; color: #002257; opacity: 1;"
      >
        475
      </div>

      <!-- Italy Green up arrow -->
      <div 
        class="absolute"
        style="top: 101px; left: 159px; width: 17px; height: 9px; background: #00E38C; opacity: 1; clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"
      ></div>

      <!-- Italy line chart -->
      <svg 
        class="absolute"
        style="top: 154px; left: 55px; width: 161px; height: 19px; opacity: 1;"
        viewBox="0 0 161 19"
      >
        <path 
          d="M0 15 L20 8 L40 16 L60 6 L80 14 L100 9 L120 17 L140 7 L161 12" 
          stroke="#0F77FA" 
          stroke-width="2" 
          fill="none"
        />
      </svg>

      <!-- United States -->
      <div 
        class="absolute text-left"
        style="top: 49px; left: 322px; width: 114px; height: 19px; font-family: Inter; font-size: 19px; font-weight: 500; line-height: 23px; letter-spacing: 0px; color: #495172; text-shadow: 0px 3px 26px #0000001C; opacity: 1; white-space: nowrap;"
      >
        United States
      </div>
      
      <div 
        class="absolute text-center"
        style="top: 84px; left: 340px; width: 64px; height: 44px; font-family: Inter; font-size: 32px; font-weight: 700; line-height: 38px; letter-spacing: 0.25px; color: #002257; opacity: 1;"
      >
        431
      </div>

      <!-- United States Green up arrow -->
      <div 
        class="absolute"
        style="top: 101px; left: 412px; width: 17px; height: 9px; background: #00E38C; opacity: 1; clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"
      ></div>

      <!-- United States line chart -->
      <svg 
        class="absolute"
        style="top: 152px; left: 308px; width: 161px; height: 24px; opacity: 1;"
        viewBox="0 0 161 24"
      >
        <path 
          d="M0 18 L25 10 L50 20 L75 8 L100 16 L125 12 L161 6" 
          stroke="#0F77FA" 
          stroke-width="2" 
          fill="none"
        />
      </svg>

      <!-- Canada -->
      <div 
        class="absolute text-left"
        style="top: 49px; left: 604px; width: 67px; height: 19px; font-family: Inter; font-size: 19px; font-weight: 500; line-height: 23px; letter-spacing: 0px; color: #495172; text-shadow: 0px 3px 26px #0000001C; opacity: 1;"
      >
        Canada
      </div>
      
      <div 
        class="absolute text-center"
        style="top: 84px; left: 597px; width: 64px; height: 44px; font-family: Inter; font-size: 32px; font-weight: 700; line-height: 38px; letter-spacing: 0.25px; color: #002257; opacity: 1;"
      >
        174
      </div>

      <!-- Canada Red down arrow -->
      <div 
        class="absolute"
        style="top: 101px; left: 669px; width: 17px; height: 9px; background: #FF4B75; opacity: 1; clip-path: polygon(50% 100%, 0% 0%, 100% 0%);"
      ></div>

      <!-- Canada line chart -->
      <svg 
        class="absolute"
        style="top: 152px; left: 561px; width: 161px; height: 24px; opacity: 1;"
        viewBox="0 0 161 24"
      >
        <path 
          d="M0 8 L30 16 L60 10 L90 18 L120 14 L161 20" 
          stroke="#FF4B75" 
          stroke-width="2" 
          fill="none"
        />
      </svg>

      <!-- Spain -->
      <div 
        class="absolute text-left"
        style="top: 49px; left: 864px; width: 49px; height: 19px; font-family: Inter; font-size: 19px; font-weight: 500; line-height: 23px; letter-spacing: 0px; color: #495172; text-shadow: 0px 3px 26px #0000001C; opacity: 1;"
      >
        Spain
      </div>
      
      <div 
        class="absolute text-center"
        style="top: 84px; left: 849px; width: 62px; height: 42px; font-family: Inter; font-size: 32px; font-weight: 700; line-height: 38px; letter-spacing: 0.24px; color: #002257; opacity: 1;"
      >
        475
      </div>

      <!-- Spain Green up arrow -->
      <div 
        class="absolute"
        style="top: 101px; left: 919px; width: 17px; height: 9px; background: #00E38C; opacity: 1; clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"
      ></div>

      <!-- Spain line chart -->
      <svg 
        class="absolute"
        style="top: 154px; left: 815px; width: 161px; height: 19px; opacity: 1;"
        viewBox="0 0 161 19"
      >
        <path 
          d="M0 10 L22 16 L44 5 L66 13 L88 8 L110 15 L132 7 L161 11" 
          stroke="#0F77FA" 
          stroke-width="2" 
          fill="none"
        />
      </svg>

      <!-- Japan -->
      <div 
        class="absolute text-left"
        style="top: 49px; left: 1114px; width: 52px; height: 19px; font-family: Inter; font-size: 19px; font-weight: 500; line-height: 23px; letter-spacing: 0px; color: #495172; text-shadow: 0px 3px 26px #0000001C; opacity: 1;"
      >
        Japan
      </div>
      
      <div 
        class="absolute text-center"
        style="top: 84px; left: 1100px; width: 64px; height: 44px; font-family: Inter; font-size: 32px; font-weight: 700; line-height: 38px; letter-spacing: 0.25px; color: #002257; opacity: 1;"
      >
        134
      </div>

      <!-- Japan Green up arrow -->
      <div 
        class="absolute"
        style="top: 101px; left: 1172px; width: 17px; height: 9px; background: #00E38C; opacity: 1; clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"
      ></div>

      <!-- Japan line chart -->
      <svg 
        class="absolute"
        style="top: 152px; left: 1068px; width: 161px; height: 24px; opacity: 1;"
        viewBox="0 0 161 24"
      >
        <path 
          d="M0 20 L27 12 L54 18 L81 9 L108 15 L135 11 L161 7" 
          stroke="#00E38C" 
          stroke-width="2" 
          fill="none"
        />
      </svg>

      <!-- South Africa -->
      <div 
        class="absolute text-left"
        style="top: 49px; left: 1345px; width: 102px; height: 19px; font-family: Inter; font-size: 19px; font-weight: 500; line-height: 23px; letter-spacing: 0px; color: #495172; text-shadow: 0px 3px 26px #0000001C; opacity: 1; white-space: nowrap;"
      >
        South Africa
      </div>
      
      <div 
        class="absolute text-center"
        style="top: 84px; left: 1357px; width: 64px; height: 44px; font-family: Inter; font-size: 32px; font-weight: 700; line-height: 38px; letter-spacing: 0.25px; color: #002257; opacity: 1;"
      >
        471
      </div>

      <!-- South Africa Red down arrow -->
      <div 
        class="absolute"
        style="top: 101px; left: 1429px; width: 17px; height: 9px; background: #FF4B75; opacity: 1; clip-path: polygon(50% 100%, 0% 0%, 100% 0%);"
      ></div>

      <!-- South Africa line chart -->
      <svg 
        class="absolute"
        style="top: 152px; left: 1311px; width: 161px; height: 24px; opacity: 1;"
        viewBox="0 0 161 24"
      >
        <path 
          d="M0 14 L32 8 L64 17 L96 11 L128 19 L161 13" 
          stroke="#FF4B75" 
          stroke-width="2" 
          fill="none"
        />
      </svg>
    </div>

    <!-- Team Members Section -->
    <!-- Team Members Title -->
    <div 
      class="absolute text-left"
      style="top: 678px; left: 292px; width: 207px; height: 30px; font-family: Inter; font-size: 30px; font-weight: 500; line-height: 36px; letter-spacing: 0px; color: #11193C; opacity: 1; white-space: nowrap;"
    >
      Team Members
    </div>

    <!-- View All Link -->
    <div 
      class="absolute text-left"
      style="top: 684px; left: 947px; width: 52px; height: 15px; font-family: Inter; font-size: 15px; font-weight: 700; line-height: 18px; letter-spacing: 0px; color: #2464FC; opacity: 1; white-space: nowrap;"
    >
      View All
    </div>

    <!-- Andrew Johnston Team Member Card -->
    <div 
      class="absolute"
      style="top: 745px; left: 289px; width: 718px; height: 75px; background: #FFFFFF; box-shadow: 0px 3px 26px #00000017; border-radius: 4px; opacity: 1;"
    >
      <!-- Avatar -->
      <div 
        class="absolute"
        style="top: 13px; left: 19px; width: 48px; height: 48px; background: #E0E0E0; box-shadow: 0px 3px 26px #00000029; border-radius: 50%; opacity: 1;"
      ></div>
      
      <!-- Name -->
      <div 
        class="absolute text-left"
        style="top: 28px; left: 88px; width: 155px; height: 20px; font-family: Inter; font-size: 20px; font-weight: 400; line-height: 24px; letter-spacing: 0px; color: #0B2257; opacity: 1; white-space: nowrap;"
      >
        Andrew Johnston
      </div>

      <!-- Top Trader Badge Background -->
      <div 
        class="absolute"
        style="top: 18px; left: 594px; width: 109px; height: 38px; background: #0F77FA; box-shadow: 0px 3px 26px #00000017; border-radius: 100px; opacity: 0.1;"
      ></div>
      
      <!-- Top Trader Text -->
      <div 
        class="absolute text-left"
        style="top: 30px; left: 608px; width: 72px; height: 15px; font-family: Inter; font-size: 15px; font-weight: 700; line-height: 18px; letter-spacing: 0px; color: #0F77FA; opacity: 1; white-space: nowrap;"
      >
        Top Trader
      </div>
    </div>

    <!-- Anna Atkinsons Team Member Card -->
    <div 
      class="absolute"
      style="top: 833px; left: 289px; width: 718px; height: 75px; background: #FFFFFF; box-shadow: 0px 3px 26px #00000017; border-radius: 4px; opacity: 1;"
    >
      <!-- Avatar -->
      <div 
        class="absolute"
        style="top: 13px; left: 19px; width: 48px; height: 48px; background: #E0E0E0; box-shadow: 0px 3px 26px #00000029; border-radius: 50%; opacity: 1;"
      ></div>
      
      <!-- Name -->
      <div 
        class="absolute text-left"
        style="top: 28px; left: 88px; width: 138px; height: 20px; font-family: Inter; font-size: 20px; font-weight: 400; line-height: 24px; letter-spacing: 0px; color: #0B2257; opacity: 1; white-space: nowrap;"
      >
        Anna Atkinsons
      </div>

      <!-- Manager Badge Background -->
      <div 
        class="absolute"
        style="top: 18px; left: 600px; width: 103px; height: 38px; background: #4881FA; box-shadow: 0px 3px 26px #00000017; border-radius: 100px; opacity: 0.1;"
      ></div>
      
      <!-- Manager Text -->
      <div 
        class="absolute text-left"
        style="top: 30px; left: 621px; width: 59px; height: 15px; font-family: Inter; font-size: 15px; font-weight: 700; line-height: 18px; letter-spacing: 0px; color: #2464FC; opacity: 1; white-space: nowrap;"
      >
        Manager
      </div>
    </div>

    <!-- Mark Atkinsons Team Member Card -->
    <div 
      class="absolute"
      style="top: 921px; left: 289px; width: 718px; height: 75px; background: #FFFFFF; box-shadow: 0px 3px 26px #00000017; border-radius: 4px; opacity: 1;"
    >
      <!-- Avatar -->
      <div 
        class="absolute"
        style="top: 13px; left: 19px; width: 48px; height: 48px; background: #E0E0E0; box-shadow: 0px 3px 26px #00000029; border-radius: 50%; opacity: 1;"
      ></div>
      
      <!-- Name -->
      <div 
        class="absolute text-left"
        style="top: 28px; left: 88px; width: 136px; height: 20px; font-family: Inter; font-size: 20px; font-weight: 400; line-height: 24px; letter-spacing: 0px; color: #0B2257; opacity: 1; white-space: nowrap;"
      >
        Mark Atkinsons
      </div>

      <!-- Top Trader Badge Background -->
      <div 
        class="absolute"
        style="top: 18px; left: 594px; width: 109px; height: 38px; background: #0F77FA; box-shadow: 0px 3px 26px #00000017; border-radius: 100px; opacity: 0.1;"
      ></div>
      
      <!-- Top Trader Text -->
      <div 
        class="absolute text-left"
        style="top: 30px; left: 608px; width: 72px; height: 15px; font-family: Inter; font-size: 15px; font-weight: 700; line-height: 18px; letter-spacing: 0px; color: #0F77FA; opacity: 1; white-space: nowrap;"
      >
        Top Trader
      </div>
    </div>

    <!-- Johanna Tairons Team Member Card -->
    <div 
      class="absolute"
      style="top: 1009px; left: 289px; width: 718px; height: 75px; background: #FFFFFF; box-shadow: 0px 3px 26px #00000017; border-radius: 4px; opacity: 1;"
    >
      <!-- Avatar -->
      <div 
        class="absolute"
        style="top: 13px; left: 19px; width: 48px; height: 48px; background: #E0E0E0; box-shadow: 0px 3px 26px #00000029; border-radius: 50%; opacity: 1;"
      ></div>
      
      <!-- Name -->
      <div 
        class="absolute text-left"
        style="top: 28px; left: 88px; width: 146px; height: 20px; font-family: Inter; font-size: 20px; font-weight: 400; line-height: 24px; letter-spacing: 0px; color: #0B2257; opacity: 1; white-space: nowrap;"
      >
        Johanna Tairons
      </div>

      <!-- Manager Badge Background -->
      <div 
        class="absolute"
        style="top: 18px; left: 600px; width: 103px; height: 38px; background: #4881FA; box-shadow: 0px 3px 26px #00000017; border-radius: 100px; opacity: 0.1;"
      ></div>
      
      <!-- Manager Text -->
      <div 
        class="absolute text-left"
        style="top: 30px; left: 621px; width: 59px; height: 15px; font-family: Inter; font-size: 15px; font-weight: 700; line-height: 18px; letter-spacing: 0px; color: #2464FC; opacity: 1; white-space: nowrap;"
      >
        Manager
      </div>
    </div>

    <!-- Comparison Section -->
    <!-- Comparison Title -->
    <div 
      class="absolute text-left"
      style="top: 678px; left: 1060px; width: 162px; height: 30px; font-family: Inter; font-size: 30px; font-weight: 500; line-height: 36px; letter-spacing: 0px; color: #11193C; opacity: 1; white-space: nowrap;"
    >
      Comparison
    </div>

    <!-- View All Link -->
    <div 
      class="absolute text-left"
      style="top: 684px; left: 1756px; width: 52px; height: 15px; font-family: Inter; font-size: 15px; font-weight: 700; line-height: 18px; letter-spacing: 0px; color: #2464FC; opacity: 1; white-space: nowrap;"
    >
      View All
    </div>

    <!-- Comparison Box -->
    <div 
      class="absolute"
      style="top: 744px; left: 1060px; width: 756px; height: 355px; background: #FFFFFF; box-shadow: 0px 3px 26px #00000017; border-radius: 4px; opacity: 1;"
    >
      <!-- USA Entry -->
      <!-- USA Flag -->
      <img 
        src="@/assets/Dashboard/usa.png" 
        alt="USA"
        class="absolute"
        style="top: 35px; left: 40px; width: 29px; height: 21px; opacity: 1;"
      />

      <!-- United States Text -->
      <div 
        class="absolute text-left"
        style="top: 41px; left: 87px; width: 96px; height: 16px; font-family: Inter; font-size: 16px; font-weight: 500; line-height: 19px; letter-spacing: 0px; color: #495172; text-shadow: 0px 3px 26px #0000001C; opacity: 1; white-space: nowrap;"
      >
        United States
      </div>

      <!-- USA Progress Bar -->
      <div 
        class="absolute"
        style="top: 75px; left: 40px; width: 634px; height: 7px; background: #0F77FA; border-radius: 6px; opacity: 1;"
      ></div>

      <!-- USA Percentage -->
      <div 
        class="absolute text-left"
        style="top: 71px; left: 688px; width: 32px; height: 16px; font-family: Inter; font-size: 16px; font-weight: 500; line-height: 19px; letter-spacing: 0px; color: #495172; text-shadow: 0px 3px 26px #0000001C; opacity: 1; white-space: nowrap;"
      >
        93%
      </div>

      <!-- Italy Entry -->
      <!-- Italy Flag -->
      <img 
        src="@/assets/Dashboard/italy.png" 
        alt="Italy"
        class="absolute"
        style="top: 136px; left: 40px; width: 29px; height: 22px; opacity: 1;"
      />

      <!-- Italy Text -->
      <div 
        class="absolute text-left"
        style="top: 140px; left: 87px; width: 29px; height: 16px; font-family: Inter; font-size: 16px; font-weight: 500; line-height: 19px; letter-spacing: 0px; color: #495172; text-shadow: 0px 3px 26px #0000001C; opacity: 1; white-space: nowrap;"
      >
        Italy
      </div>

      <!-- Italy Progress Bar -->
      <div 
        class="absolute"
        style="top: 174px; left: 40px; width: 594px; height: 7px; background: #0F77FA; border-radius: 6px; opacity: 1;"
      ></div>

      <!-- Italy Percentage -->
      <div 
        class="absolute text-left"
        style="top: 170px; left: 649px; width: 32px; height: 16px; font-family: Inter; font-size: 16px; font-weight: 500; line-height: 19px; letter-spacing: 0px; color: #495172; text-shadow: 0px 3px 26px #0000001C; opacity: 1; white-space: nowrap;"
      >
        73%
      </div>

      <!-- Spain Entry -->
      <!-- Spain Flag -->
      <img 
        src="@/assets/Dashboard/spain.png" 
        alt="Spain"
        class="absolute"
        style="top: 245px; left: 40px; width: 29px; height: 22px; opacity: 1;"
      />

      <!-- Spain Text -->
      <div 
        class="absolute text-left"
        style="top: 249px; left: 87px; width: 41px; height: 16px; font-family: Inter; font-size: 16px; font-weight: 500; line-height: 19px; letter-spacing: 0px; color: #495172; text-shadow: 0px 3px 26px #0000001C; opacity: 1; white-space: nowrap;"
      >
        Spain
      </div>

      <!-- Spain Progress Bar -->
      <div 
        class="absolute"
        style="top: 283px; left: 40px; width: 162px; height: 7px; background: #0F77FA; border-radius: 6px; opacity: 1;"
      ></div>

      <!-- Spain Percentage -->
      <div 
        class="absolute text-left"
        style="top: 279px; left: 233px; width: 32px; height: 16px; font-family: Inter; font-size: 16px; font-weight: 500; line-height: 19px; letter-spacing: 0px; color: #495172; text-shadow: 0px 3px 26px #0000001C; opacity: 1; white-space: nowrap;"
      >
        13%
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = () => {
  localStorage.removeItem('authToken')
  sessionStorage.removeItem('authToken')
  
  router.push('/login')
}
</script>
