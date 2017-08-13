(function () {
  'use strict';

  angular
    .module('app.strings', [])
    .run(['$rootScope', function ($rootScope) {
      $rootScope.str = {
        globals: {
          personalPhoneNumber: '+44 7598-461-151',
          desktopNumber: '+44 7598-461-151',
          phoneNumber: '+44 7598-461-151',
          // This is not the address on which the contact form sends its emails.
          // That email address is defined in php/email-sender.php
          //
          // This one is used on mobile devices by the mail app when a user wants
          // to send us an email.
          contactEmail: 'contact@hyperion.co'
        },
        footer: {
          text: '<p>More projects on our <strong>Social Networks</strong></p>',
          twitterHref: '//twitter.com/WeAreHyperion',
          dribbbleHref: '//dribbble.com/hyperion',
          behanceHref: '//www.behance.net/hyperioncreative'
        },

        contact: {
          navigationHamburgerAnchorText: 'Hire Us',
          header: {
            title: '<h1>Tell Us More<h1>',
            description: '<h2>We are always interested in new and exciting projects to work on. Whether you need help with a project or would like to start a conversation, we’d love to hear from you.</h2>'
          }
        },

        // DEPRECATED
        // expertise: {
        //   navigationHamburgerAnchorText: 'Services',
        //   header: {
        //     title: '<h3>Our Services</h3>',
        //     description: '<h2>As a product design team, with only a small team for now, our job is to help bring your ideas to life. We organise, we create and we solve problems.</h2>'
        //   },
        //   design: {
        //     tabName: 'Design',
        //     title: 'UI / Web',
        //     description: '<p>We believe good design should make sense to the people using it, that it should be adequate, beautiful, logical and empathetic towards the user. We see technology as a catalyst for change, improving people\'s lives in increasingly natural and almost invisible ways. To design products that meet these standards, we try to look at the whole picture, make sense of the problem we are trying to solve and plan accordingly - when every detail has its place and purpose, creativity and function come together naturally.</p>'
        //   },
        //   development: {
        //     tabName: 'Development',
        //     title: 'Development',
        //     description: '<p>For every application, UI and UX are just the tip of the iceberg; it\'s the code that breathes life into an app and makes everything tick. Because of this, writing <strong>good code</strong> is of paramount importance and we believe it comes down to this:</p><p>Great code takes careful planning and requires an extensive knowledge of the tools at our disposal; it must be well documented and modular, so that the product\'s structure is always clear, and components can be developed in a timely and cost efficient manner. It must perform well across a wide range of devices and be well-crafted. What\'s more, we do not limit ourselves by using templates or ready-made frameworks - we build sites and apps from the ground up, which affords us the freedom to not only create the great experience your users expect, but also ensure the project is flexible enough to not fall apart when new features are needed.</p>'
        //   },
        //   consulting: {
        //     tabName: 'Consulting',
        //     title: 'Consulting',
        //     description: '<p>When you work with a creative team, you will get more than their technical abilities, you will get their ideas and expertise. From picking the best-suited technologies, to helping structure your product correctly, and deciding what the most elegant and user-friendly way of designing a UI is, having a team of experts bring their insight to the table can make all the difference between a successful project and a failure.</p>'
        //   }
        // },

        justification: {
          navigationHamburgerAnchorText: 'Why Us',
          header: {
            title: '<h1>Why chose Hyperion</h1>',
            description: '<h3>Here are some of the reasons our clients have chosen us in the past, and why we think you should do the same.</h3>'
          },
          // TODO add the new layout here
          // firstColumn: '<h2 class="process__title">We are objective focused. </h2><p>Our goal is to create work that helps solve your problems and achieve your goals not win awards or simply be beautiful but ultimately useless. This means that we\'ll have a lot of questions and will need to understand your company before we can get to work, but the results will be worth it.</p>',
          // secondColumn: '<h2 class="process__title">The Expertise. </h2><p>The primary focuses of our team are UI/UX, web design and development; We try to design and develop products that people can make sense of and will actually enjoy using. We want to get your message across in an elegant and efficient manner.</p>',
          // thirdColumn: '<h2 class="process__title">Fresh, Bold Ideas. </h2><p>While there is beauty in standardisation and similarity, and the product’s functionality should always be a core concern, we place equal value on experimentation and fresh, daring ideas.</p>'
        },

        // Be careful when editing coverDescription as it may break the ellipsis. Make sure to check the portfolio page to make sure
        // the ellipsis is still there.
        portfolio: {
          navigationHamburgerAnchorText: 'Projects',
          header: {
            title: '<h2>Selected Projects</h2>',
            description: '<h1 style="display: inline-block;">Here are some of the most recent projects we can talk about.</h1> Click on each preview to learn more about the work we did and our approaches.'
          },

          pleo: {
            projectName: 'pleo',
            field: 'Mobile App Design',
            sliderDescription: 'pleo is a fintech startup that we worked with in early 2016 to design the interface and user experience of their iOS app.',

            header: '<h2><strong>pleo</strong> is a fintech startup that we worked with in early 2016 to design the interface and user experience of their iOS app.</h2>',
            tabletHeader: '<h2><strong>pleo</strong> is a fintech startup that we worked with in early 2016 to design the interface and user experience of their iOS app.</h2>',

            generic: {
              title: 'Dead Simple UX',
              description: '<p><span id="pleo">pleo</span> is a Danish fin-tech company that uses a card + app system to automate expense management for all of a company\'s employees. Instead of spending money out of their own pockets or sharing a card, pleo\'s solution proposes that every employee is given their own card, which automatically logs all transactions and links with the mobile app, which enables them to snap pictures of receipts and keep an eye on their expenses.</p><p>The goal of this project was to design an iOS app whose main function would be to prompt users after they made a transaction with their pleo card to photograph the receipt. It also had to provide a list of transactions, card and profile management options as well as security features like cancelling a card.</p><p>The product, on one hand, had to be so accessible so that any employee inside a company could use it, while on the other hand providing a fast and reliable experience that users would actually want to scan all their receipts and the product would have value to their employer.</p>'
            }
          },
          companyMood: {
            projectName: 'Company Mood',
            field: 'Website Design',

            header: '<h2>We worked with <strong>Company Mood</strong> in late 2016 and gave their website a fresh new look that better explains the advantages of their product to their audience.</h2>',
            tabletHeader: '<h2>We worked with <strong>Company Mood</strong> in late 2016 and gave their website a fresh new look that better explains the advantages of their product to their audience.</h2>',

            // generic: {
            //   title: 'Company Mood',
            //   description: '<p>Grow with a CFO - a financial consulting firm, needed a website to showcase their services, explain who they are and how they work. Our objective was to create a site that is adequate and would help them achieve their goals and expand their firm. After several weeks on the project, we believe we achieved that.</p><p>Our client reported the site has been performing well since it launched earlier this year and that they are quite happy with the results.</p><p>Unfortunately, Grow with a CFO only used the website we created for about half a year before creating a new Wordpress site themselves.</p>'
            // }
          },
          kartist: {
            projectName: 'Kartist',
            field: 'Web App Interface',
            sliderDescription: 'The shots above are from one of our most recent projects, Kartist - a platform that help shoppers everywhere manage their lists, find inspiration and connect with like-minded people.',

            header: '<h2>We worked with <strong>Kartist</strong> in early 2015 - a platform that help shoppers everywhere manage their lists, find inspiration and connect with like-minded people.</h2>',
            tabletHeader: '<h2>We worked with <strong>Kartist</strong> in early 2015 - their platform aims to help shoppers manage their lists, find inspiration and connect with like-minded people.</h2>',

            // design
            uiAndCode: {
              title: 'Easy to use UI + <br> Performant Code',
              description: '<p>For this project, we handled Kartist\'s UI and UX, coded the front-end and created their browser extensions. We wanted, as with most projects, to create a product that will make sense to their target audience - an interface that is logically organised and effortless to use, but also beautiful. Since we also handled the front-end development, we could make sure the whole interface runs like a well-oiled machine and we are confident Kartist\'s experience will be an enjoyable one.</p><p><italic>The screen to the left demonstrates how users are prompted to register. Since registration is not mandatory, we decided to use a less intrusive solution and gently nudge the logo every 5 seconds until the user hovers over it to learn where the registration panel is. We believe this way, users are will not feel forced to sign-up.</italic></p>'
            },
            mobileVersion: {
              title: 'The Mobile Version',
              description: '<p>Kartist will not initially be developing native apps, so we had to make sure the mobile site was perfect.</p><p>We tried to do more than create a diluted version of the desktop site, and instead strived to build a standalone experience that will make sense on mobile devices and be a pleasure to use, while affording users the same functions of the desktop site. We also aimed to stay true to the look and feel of the main site.</p>'
            },
            logo: {
              title: 'The Logo',
              description: '<p>For their logo, we worked with Alicja Murphy - a very talented Australian designer. Although we initially explored more abstract concepts, we decided a simple, yet expressive lettermark will be the most memorable choice, and will best represent what Kartist is about.</p>',
              url: 'Logo by <a href="http://www.alicjamurphy.com" target="_blank">Alicja Murphy</a>'
            },

            // development
            theStart: {
              title: 'Starting on the Right Foot',
              description: 'For this project, we have been tasked with building the front end of Kartist, and have worked closely with their internal back-end team to ensure we are always on the same page, and the final product works as expected. We worked with their team to put together a plan that would allow us to develop the project modularly and ensure each component could be developed independently. This afforded us a great degree of flexibility, while maintaining compatibility with the back-end team\'s work/components.'
            },
            performance: {
              title: 'Performance',
              description: '<p>One of our key objectives was to create an experience that is fluid and consistent across devices; because of this, performance and stability were crucial.</p><p>We used user interaction prediction to cache the resources we anticipated were going to be the most requested and thus reduced load times between pages.  We also used AngularJS\'s one time binding to deal with large collections of items and ended up reducing the no. of watchers, which considerably reduced the CPU load.</p>'
            },
            browserExtensions: {
              title: 'Browser Extensions',
              description: '<p>We also developed the browser extensions Kartist\'s users use to add items to a Kart, manage lists or edit their accounts. The extensions rely on custom scrapers we developed for each supported site.<p>'
            },
            theEnd: {
              title: 'Testing & Delivery',
              description: '<p>With the code and API being well documented, we tested each AngularJS component and the whole interface to make sure everything works as expected and our work is compatible with the back-end of the app, then handed over the deliverables and control to the GitHub repository.</p>'
            }
          },
          grow: {
            projectName: 'Grow with a CFO',
            field: 'Website Design',

            header: '<h2>We worked with <strong>Grow with a CFO</strong> in 2015 to help them design their website and more easily showcase their services and processes.</h2>',
            tabletHeader: '<h2>We worked with <strong>Grow with a CFO</strong> in 2015 to help them design their website and more easily showcase their services and processes.</h2>',

            generic: {
              title: 'Grow with a CFO',
              description: '<p>Grow with a CFO - a financial consulting firm, needed a website to showcase their services, explain who they are and how they work. Our objective was to create a site that is adequate and would help them achieve their goals and expand their firm. After several weeks on the project, we believe we achieved that.</p><p>Our client reported the site has been performing well since it launched earlier this year and that they are quite happy with the results.</p><p>Unfortunately, Grow with a CFO only used the website we created for about half a year before creating a new Wordpress site themselves.</p>'
            }
          },
          quizkick: {
            projectName: 'QuizKick',
            field: 'Mobile App Design',
            sliderDescription: 'QuizKick tried to create a game that would give football fans around the world a chance to prove their knowledge. We worked on the design and the back end of the system.',

            header: '<h2><strong>QuizKick</strong> tried to create a game that would give football fans around the world a chance to prove their knowledge. We handled the design and the back end system.</h2>',
            tabletHeader: '<h2><strong>QuizKick</strong> wanted to create a game for football fans around the world could prove their knowledge & skills. We worked on the UI and the back end.</h2>',

            aim: {
              title: 'QuizKick',
              description: 'Aiming to become a means for football fans around the world to prove their knowledge and challenge the very best players, QuizKick makes use of a well-crafted experience and quality aesthetics to become more than just another quiz game.'
            },
            next: {
              title: 'Next Up',
              description: 'QuizKick will be available for download soon. In the meantime, you can see more of it, including awesome animations and concepts, by visiting our showcase.'
            }
          },
          webfaction: {
            projectName: 'Webfaction',
            field: 'Interface Redesign',

            header: '<h2><strong>Webfaction</strong> is our hosting provider and we worked with them in late 2015 to create a simpler, more intuitive control panel for their platform.</h2>',
            tabletHeader: '<h2><strong>Webfaction</strong> is our hosting provider and we worked with them in late 2015 to create a simpler, more intuitive control panel for their platform.</h2>',

            freshNewLook: {
              title: 'A Fresh new Look',
              description: '<p>Webfaction has been our hosting provider ever since we started in 2012 and while we couldn’t be happier with their services and support, the interface of their control panel was a complicated mess that confused most of their users.</p><p>They agreed to work with us and refresh their CP and have since reported, from early tests, that their users considered it a lot easier to find their way around and achieve even the more complicated tasks. We simplified and logically organised everything from how you create a new website, add an email address, manage your plan or get support.<p>'
            },

            technicalYetAesthetic: {
              title: 'Technical yet Aesthetic',
              description: '<p>The main objectives of this redesign was to simplify the most confusing aspects of Webfaction’s interface, organise everything logically and bring  the style up to speed.</p><p>Since the main audience is developers and people with a reasonable technical expertise, we wanted to create an interface that is simple and technical enough to make them feel at home, but beautiful enough to provide an enjoyable experience. We recreated processes from the ground up, re-arranged most sections and introduced a bright new colour scheme.</p><p>The result is a vibrant interface that welcomes new and existing users alike and streamlines all the tasks a user might do.</p>'
            },

            gettingStarted: {
              title: 'Getting Started',
              description: '<p>We started the project by getting to know the client, their business and the problems they are looking to solve. We spoke to people on their team, discussed the most common concerns users have and analysed the data they stored.</p><p>We started the project by getting to know the client, their business and the problems they are looking to solve. We spoke to people on their team, discussed the most common concerns users have and analysed the data they stored.</p><p><italic>For example, to create a website with the old interface users had to go to Domains/Websites, click on Domains, link a new domain, click on Apps, create a new app, then go to websites and create a new website with the domain and app you just added. To make matters worse, users had to figure out this process on their own.</italic></p>',
              descriptionTwo: 'We summarised our ideas for how the new interface should work through a series of wireframes and ran this by the client to make sure we are on the same page before moving forward.'
            },
            theDesign: {
              title: 'The Design',
              description: '<p>After agreeing on the latest details of the UI’s structure, we moved on to the design stage. We created screens for every page and every state of the interface, every nook and cranny for both desktop and mobile devices.</p><p>Continuing the example of the process for creating websites, we unified it into a single page withsequential steps, and clear explinations for how each step works and how it all comes together.</p>'
            },
            theCode: {
              title: 'The Code',
              description: '<p>In order to maintain the agility we needed throughout the project and keep everything thoroughly organised, we decided to use a modular approach. Throughout the coding stage, Webfaction’s team was going to work on creating a new API to link their back-end to the interface.</p><p>We kicked this stage off by defining the architecture and making a plan. Once we had the interface’s structure defined, we started creating the modules - starting with the core ones.</p><p>We finished the interface before Webfaction completed the new API, and will link it when they are done.</p>'
            }
          }
        },

        mobile: {
          introduction: '<p>We believe good design should make sense to the people using it, that it should be adequate, beautiful, logical and empathetic towards the user. We see technology as a catalyst for change, improving people\'s lives in increasingly natural and almost invisible ways. To design products that meet these standards, we try to look at the whole picture, make sense of the problem we are trying to solve and plan accordingly - when every detail has its place and purpose, creativity and function come together naturally.</p><p>We also believe UI and UX, are just the tip of the iceberg, and it’s the code that breathes life into an app and makes everything tick. It is because of this that writing good code and making the most of available technologies is of paramount importance.</p>',
          kartist: '<p>We worked with <strong>Kartist</strong> in early 2015 - their platform aims to help shoppers everywhere manage their lists, find inspiration and connect with like-minded people.</p><p>For this project, we handled Kartist\'s UI, coded the front end and created their browser extensions. We wanted, as with most projects, to create something that will make sense to their target audience - an interface that is logically organised and effortless to use, but also beautiful. When coupled with good code, we are confident Kartist\'s experience will be an enjoyable one.</p><p>Kartist will not initially be developing native apps, so we had to make sure the mobile site was perfect.</p>',
          quizkick: '<p><strong>QuizKick</strong> tried to create a game that would give football fans around the world a chance to prove their knowledge. We worked on the design and the back end of the system.</p><p>Aiming to become a means for football fans around the world to prove their knowledge and challenge the very best players, QuizKick makes use of a well-crafted experience and quality aesthetics to become more than just another quiz game.</p><p>QuizKick will be available for download soon. In the meantime, you can see more of it, including awesome animations and concepts, by visiting our showcase.</p>',
          pleo: '<p>We worked with <strong>pleo</strong> in early 2014 to help them design their then upcoming iOS app. We handled the UI and UX and worked with their team to help them make it a reality.</p><p>pleo\'s organisational approach to providing on-demand cargo transport services is, in our opinion, deserving of all the awards it received and definitely a step in the right direction towards a cleaner, more efficient industry. By offering transport companies the opportunity to profit from the unused space in their trucks, they are not only reducing the number of unnecessary trips, but also benefiting customers who need a more affordable means of moving items across great distances.</p><p>They decided to make their services more accessible by launching a mobile app, for which we produced the interface, defined the experienced and worked closely with their development team to help implement it and shape the application. The resulting product was a friendly, easy to use app that would make pleo\'s services even easier to benefit from.</p>',
          grow: '<p>We worked with Grow with a CFO in 2015 to help them design their website and more easily showcase their services and processes.</p><p>Grow with a CFO - a financial consulting firm, needed a website to showcase their services, explain who they are and how they work. Our objective was to create a site that is adequate and would help them achieve their goals and expand their firm. After several weeks on the project, we believe we achieved that.</p><p>Unfortunately, Grow with a CFO only used the website we created for about half a year before creating a new Wordpress site themselves.</p>',
          webfaction: '<p>Webfaction has been our hosting provider ever since we started in 2012 and while we couldn’t be happier with their services and support, the interface of their control panel was a complicated mess that confused most of their users.</p><p>They agreed to work with us and refresh their CP and website and have since reported their users find it a lot easier to find their way around and achieve even the more complicated tasks. We simplified and logically organised everything from how you create a new website, add an email address, manage your plan or get support.</p>'
        }
      };
    }]);
})();
