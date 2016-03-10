(function () {
  'use strict';

  angular
    .module('app.strings', [])
    .run(['$rootScope', function ($rootScope) {
      $rootScope.str = {
        globals: {
          personalPhoneNumber: '+44 7598-461-151',
          desktopNumber: '+44 (0)1214-052-101',
          phoneNumber: '+44 1214-052-101',
          // This is not the address on which the contact form sends its emails.
          // That email address is defined in php/email-sender.php
          //
          // This one is used on mobile devices by the mail app when a user wants
          // to send us an email.
          contactEmail: 'contact@hyperion.co'
        },
        footer: {
          text: '<p>More projects on our <strong>Social Networks</strong></p><small>&copy; Copyright Hyperion 2015</small>',
          twitterHref: '//twitter.com/WeAreHyperion',
          dribbbleHref: '//dribbble.com/hyperion',
          behanceHref: '//www.behance.net/hyperioncreative'
        },

        contact: {
          navigationHamburgerAnchorText: 'Contact',
          header: {
            title: 'Get in Touch',
            description: 'If you have any questions or would like to talk to us about a project, please either call or use the form below - we will get back to you within 24h.'
          }
        },

        expertise: {
          navigationHamburgerAnchorText: 'About',
          header: {
            title: 'About Us',
            description: 'As a creative studio, with only a small team - for now, our job is to help bring your ideas to life. We organise, we create and we solve problems.'
          },
          design: {
            tabName: 'Design',
            title: 'UI/UX',
            description: '<p>While there are many factors at work behind the interfaces people love, we would sum it up as follows: a good interface is one that makes sense to the people using it. One that is adequate, beautiful, logical and empathetic towards the user. We also believe technology should be simple and improve people\'s lives in natural, almost invisible ways.</p><p>To achieve this, we look at the whole picture and try to plan ahead as clearly as possible - when every detail has its place and purpose, creativity and function come together naturally.</p>'
          },
          development: {
            tabName: 'Development',
            title: 'Development',
            description: '<p>For every application, UI and UX are just the tip of the iceberg; it\'s the code that breathes life into an app and makes everything tick. Because of this, writing <strong>good code</strong> is of paramount importance and we believe it comes down to this:</p><p>Great code takes careful planning and requires an extensive knowledge of the tools at our disposal; it must be well documented and modular, so that the product\'s structure is always clear, and components can be developed in a timely and cost efficient manner. It must perform well across a wide range of devices and be well crafted. What\'s more, we do not limit ourselves by using templates or ready-made frameworks - we build sites and apps from the ground up, which affords us the freedom to not only create the great experience your users expect, but also ensure the project is flexible enough to not fall apart when new features are needed.</p>'
          },
          consulting: {
            tabName: 'Consulting',
            title: 'Consulting',
            description: '<p>This is perhaps the most valuable aspect of working with any creative studio - having a team of creative experts to look at things from a different angle and bring insightful ideas to the table. From picking the best suited technologies, to helping structure your product correctly, and deciding what the most elegant and user friendly way of designing an UI is, we\'re here to lend our expertise and bring your idea closer to success.</p>'
          }
        },

        justification: {
          navigationHamburgerAnchorText: 'Why Us',
          header: {
            title: 'Why Hyperion',
            description: 'Here are some of the reasons our clients have chosen us in the past, and why we believe you should do the same.'
          },
          firstColumn: '<p><strong>(Plain) Honesty. </strong>We care about the projects we get involved in and we are not going to be afraid to tell you when we think you’re wrong and there’s a better way. We are also not going to shy away from admitting if one of us is in the wrong; what ultimately matters is that a great and useful product results from our collaboration.</p>',
          secondColumn: '<strong>The Expertise. </strong>The primary focuses of our team are UI/UX, web design and development; We try to design and develop products that people can make sense of and will actually enjoy using. We want to get your message across in an elegant and efficient manner.',
          thirdColumn: '<p><strong>Fresh, Bold Ideas. </strong>While there is beauty in standardisation and similarity, and the product’s functionality should always be a core concern, we place equal value on experimentation and fresh, daring ideas.</p>'
        },

        // Be careful when editing coverDescription as it may break the ellipsis. Make sure to check the portfolio page to make sure
        // the ellipsis is still there.
        portfolio: {
          navigationHamburgerAnchorText: 'Portfolio',
          header: {
            title: 'Selected Projects',
            description: 'These are some of our most recent projects, that we can talk about. Click on each preview to learn more about the work we did.'
          },

          anyvan: {
            projectName: 'AnyVan',
            field: 'Mobile UI',
            sliderDescription: 'We worked with AnyVan in early 2014 to help them design their then upcoming iOS app. We handled the UI and UX and worked with their team to help them make it a reality.',

            header: 'We worked with <strong>AnyVan</strong> in early 2014 to help them design their then upcoming iOS app. We handled the UI and UX and worked with their team to help them make it a reality.',
            tabletHeader: 'We worked with <strong>AnyVan</strong> in early 2014 to help them design their then upcoming iOS app. We handled the UI/UX and helped them implement it.',

            generic: {
              title: 'AnyVan',
              description: '<p>Anyvan\'s organisational approach to providing on-demand cargo transport services is, in our opinion, deserving of all the awards it received and definitely a step in the right direction towards a cleaner, more efficient industry. By offering transport companies the opportunity to profit from the unused space in their trucks, they are not only reducing the number of unnecessary trips, but also benefiting customers who need a more affordable means of moving items across great distances.</p><p>They decided to make their services more accessible by launching a mobile app, for which we produced the interface, defined the experienced and worked closely with their development team to help implement it and shape the application. The resulting product was a friendly, easy to use app that would make AnyVan\'s services even easier to benefit from.</p>'
            }
          },
          kartist: {
            projectName: 'Kartist',
            field: 'UI/UX + Front-end Coding',
            sliderDescription: 'The shots above are from one of our most recent projects, Kartist. Their app is intended to help shoppers everywhere manage their lists, find inspiration and connect with likeminded people.',

            header: 'We worked with <strong>Kartist</strong> in early 2015 - their platform aims to help shoppers everywhere manage their lists, find inspiration and connect with likeminded people.',
            tabletHeader: 'We worked with <strong>Kartist</strong> in early 2015 - their platform aims to help shoppers manage their lists, find inspiration and connect with likeminded people.',

            // design
            uiAndCode: {
              title: 'Useful UI + Good Code',
              description: '<p>For this project we handled Kartist\'s UI, coded the front end and created their browser extensions. We wanted, as with most projects, to create something that will make sense to their target audience - an interface that is logically organised and effortless to use, but also beautiful. When coupled with good code, we are confident Kartist\'s experience will be an enjoyable one.</p><p>The screen to the left demonstrates how users are prompted to sign up or login. Instead of using a more intrusive solution, we decided to gently nudge the logo every 5 seconds until the user hovers over it to learn where the sign up panel is. We believe this way, users are will not feel forced to sign up.</p>'
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

            header: 'We worked with <strong>Grow with a CFO</strong> in 2015 to help them design their website and more easily showcase their services and processes.',
            tabletHeader: 'We worked with <strong>Grow with a CFO</strong> in 2015 to help them design their website and more easily showcase their services and processes.',

            generic: {
              title: 'Grow with a CFO',
              description: '<p>Grow with a CFO - a financial consulting firm, needed a website to showcase their services, explain who they are and how they work. Our objective was to create a site that is adequate and would help them achieve their goals and expand their firm. After several weeks on the project, we believe we achieved that.</p><p>Our client reported the site has been performing well since it launched earlier this year and that they are quite happy with the results.</p>'
            }
          },
          quizkick: {
            projectName: 'QuizKick',
            field: 'UI/UX + Back End',
            sliderDescription: 'QuizKick tried to create a game that would give football fans around the world a chance to prove their knowledge. We worked on the design and the back end of the system.',

            header: '<strong>QuizKick</strong> tried to create a game that would give football fans around the world a chance to prove their knowledge. We worked on the design and the back end of the system.',
            tabletHeader: '<strong>QuizKick</strong> wanted to create a game for football fans around the world could prove their knowledge & skills. We worked on the UI and the back end.',

            aim: {
              title: 'QuizKick',
              description: 'Aiming to become a means for football fans around the world to prove their knowledge and challenge the very best players, QuizKick makes use of a well crafted experience and quality aesthetics to become more than just another quiz game.'
            },
            next: {
              title: 'Next Up',
              description: 'QuizKick will be available for download soon. In the meantime you can see more of it, including awesome animations and concepts, by visiting our showcase.'
            }
          },
          webfaction: {
            projectName: 'Webfaction',
            field: 'UI/UX + Front-end Coding',

            header: '<strong>Webfaction</strong> is our hosting provider and we worked with them in late 2015 to create a simpler, more intuitive control panel for their platform and a new website to reflect this.',
            // TODO Change this if needed
            tabletHeader: '<strong>Webfaction</strong> is our hosting provider and we worked with them in late 2015 to create a simpler, more intuitive control panel for their platform and a new website to reflect this.',

            freshNewLook: {
              title: 'A Fresh new Look',
              description: '<p>Webfaction has been our hosting provider ever since we started in 2012 and while we couldn’t be happier with their services and support, the interface of their control panel was a complicated mess that confused most of their users.</p><p>They agreed to work with us and refresh their CP and website and have since reported their users find it a lot easier to find their way around and achieve even the more complicated tasks. We simplified and logically organised everything from how you create a new website, add an email address, manage your plan or get support.<p>'
            },

            technicalYetAesthetic: {
              title: 'Technical yet Aesthetic',
              description: '<p>The main objectives of this redesign was to simplify the most confusing aspects of Webfaction’s interface, organise everything logically and bring  the style up to speed.</p><p>Since the main audience is developers and people with a reasonable technical expertise, we wanted to create an interface that is simple and technical enough to make them feel at home, but beautiful enough to provide an enjoyable experience. We recreated processes from the ground up, re-arranged most sections and introduced a bright new colour scheme.</p><p>The result is a vibrant interface that welcomes new and existing users alike and streamlines all the tasks a user might do.</p>'
            },

            gettingStarted: {
              title: 'I. Getting started',
              description: '<p>We started this redesign project like most of our other projects, by getting to know the client, their business and the problems they are looking to solve. This was handled via a conference between us and their founder.</p><p>With a clear picture of what we’re working with in mind, we looked at ways to restructure the control panel, better explain how to use each section, and make sure users have a simple yet enjoyable experience.</p><p>For example, to create a website with the old interface users had to go to Domains/Websites, click on Domains, link a new domain, click on Apps, create a new app, then go to websites and create a new website with the domain and app you just added. Users also had to figure out this process on their own.</p>',
              descriptionTwo: 'We summarised our ideas for how the new interface should work through a series of wireframes and ran this by the client to make sure we are on the same page before moving forward.'
            },
            theDesign: {
              title: 'II. The Design',
              description: '<p>After agreeing on the latest details of the UI’s structure, we moved on to the design stage. We created screens for every page and every state of the interface, every nook and cranny for both desktop and mobile devices.</p><p>Continuing the example of the process for creating websites, we unified it into a single page withsequential steps, and clear explinations for how each step works and how it all comes together.</p>'
            },
            theCode: {
              title: 'III. The Code',
              description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>'
            }
          }
        },

        mobile: {
          expertise: '<p>Thank you for stopping by our site. We are a creative studio specialising in UI/UX and Development.</p><p>We believe good <strong>UI</strong> is one that makes sense to the people using it: one that is adequate, beautiful, logical and empathetic towards the user. We also believe technology should be simple and improve people\'s lives in natural, almost invisible ways. To achieve this, we look at the whole picture and try to plan ahead as clearly as possible - when every detail has its place and purpose, creativity and function come together naturally.</p><p>UI and UX however, are just the tip of the iceberg, with the <strong>code</strong> being the one that breathes life into an app and making everything tick. Because of this, writing good code is of paramount importance. Every project requires careful planning and a solid understanding of the tools available at our disposal.</p>',
          kartist: '<p>We worked with <strong>Kartist</strong> in early 2015 - their platform aims to to help shoppers everywhere manage their lists, find inspiration and connect with likeminded people.</p><p>For this project we handled Kartist\'s UI, coded the front end and created their browser extensions. We wanted, as with most projects, to create something that will make sense to their target audience - an interface that is logically organised and effortless to use, but also beautiful. When coupled with good code, we are confident Kartist\'s experience will be an enjoyable one.</p><p>Kartist will not initially be developing native apps, so we had to make sure the mobile site was perfect.</p>',
          quizkick: '<p><strong>QuizKick</strong> tried to create a game that would give football fans around the world a chance to prove their knowledge. We worked on the design and the back end of the system.</p><p>Aiming to become a means for football fans around the world to prove their knowledge and challenge the very best players, QuizKick makes use of a well crafted experience and quality aesthetics to become more than just another quiz game.</p><p>QuizKick will be available for download soon. In the meantime you can see more of it, including awesome animations and concepts, by visiting our showcase.</p>',
          anyvan: '<p>We worked with <strong>AnyVan</strong> in early 2014 to help them design their then upcoming iOS app. We handled the UI and UX and worked with their team to help them make it a reality.</p><p>Anyvan\'s organisational approach to providing on-demand cargo transport services is, in our opinion, deserving of all the awards it received and definitely a step in the right direction towards a cleaner, more efficient industry. By offering transport companies the opportunity to profit from the unused space in their trucks, they are not only reducing the number of unnecessary trips, but also benefiting customers who need a more affordable means of moving items across great distances.</p><p>They decided to make their services more accessible by launching a mobile app, for which we produced the interface, defined the experienced and worked closely with their development team to help implement it and shape the application. The resulting product was a friendly, easy to use app that would make AnyVan\'s services even easier to benefit from.</p>',
          grow: '<p>We worked with Grow with a CFO in 2015 to help them design their website and more easily showcase their services and processes.</p><p>Grow with a CFO - a financial consulting firm, needed a website to showcase their services, explain who they are and how they work. Our objective was to create a site that is adequate and would help them achieve their goals and expand their firm. After several weeks on the project, we believe we achieved that.</p><p>Our client reported the site has been performing well since it launched earlier this year and that they are quite happy with the results.</p>'
        }
      };
    }]);
})();
