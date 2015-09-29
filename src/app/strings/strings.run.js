(function () {
  'use strict';

  angular
    .module('app.strings', [])
    .run(['$rootScope', function ($rootScope) {
      $rootScope.str = {
        globals: {
          simplePhoneNumber: '0121 405 2101',
          phoneNumber: '+44 (0)1214-052-101',
          // This is not the address on which the contact form sends its emails.
          // That email address is defined in php/email-sender.php
          //
          // This one is used on mobile devices by the mail app when a user wants
          // to send us an email.
          contactEmail: 'contact@hyperion.co'
        },
        footer: {
          text: '<p>See more projects on our <strong>Social Networks</strong></p><small>&copy; Copyright Hyperion 2015</small>',
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
          navigationHamburgerAnchorText: 'Expertise',
          header: {
            title: 'Expertise',
            description: 'As a creative agency, with only a small team - for now, our job is to help bring your ideas to life. We organise, we create and we solve problems.'
          },
          design: {
            tabName: 'Design',
            title: 'UI/UX',
            description: '<p>While there are many factors at work behind the interfaces people love, we would sum it up as follows: a good interface is one that makes sense to the people using it. One that is adequate, beautiful, logical and empathetic towards the user. We also believe technology should be simple and improve our lives in natural, almost invisible ways.</p><p>To achieve this, we look at the whole picture and try to plan ahead as clearly as possible - when every detail has its place and purpose, creativity and function come naturally.</p>'
          },
          development: {
            tabName: 'Development',
            title: 'Development',
            description: '<p>For every application, UI and UX are just the tip of the iceberg; it\'s the code that breathes life into the app and makes everything tick. Because of this, writing good code is of paramount importance and we believe it comes down to this:</p><p>Great code takes careful planning and requires an extensive knowledge of the tools at our disposal; it must be well documented and modular, so that the product\'s structure is always clear, and components can be developed in a timely and cost efficient manner. It must perform well across a wide range of devices and be well crafted. What\'s more, we do limit ourselves by using templates or ready-made frameworks - we build sites and apps from the ground up, which affords us the freedom to not only create the great experience your users expect, but also ensure the project is flexible enough to not fall apart when new features are needed.</p>'
          },
          consulting: {
            tabName: 'Consulting',
            title: 'Consulting',
            description: '<p>This is perhaps the most valuable aspect of working with any creative agency - having a team of creative experts to look at things from a different angle and bring insightful ideas to the table. From picking the best suited technologies, to helping structure your product correctly, and deciding what the most elegant and user friendly way of designing an UI is, we’re here to lend our expertise and bring your idea closer to success.</p>'
          }
        },

        ourProcesses: {
          navigationHamburgerAnchorText: ' Our Processes',
          header: {
            title: 'Our Processes',
            description: 'While each project is unique, we do have established processes for to ensure a clear direction is always established and understood.'
          },
          firstColumn: '<p><strong>Product Design. </strong>Building a successful app or site requires more than a great, well timed idea - it requires careful planning and execution. We\'re here to help with the latter.</p><p>We understand each project is unique so instead of rushing to the easiest solution, we are going to spend some time understanding who you are, what it is you are trying to do and who is the target market for your product. We will then ink out a basic structure for the product and start planning its execution. From a front-end perspective, this usually involves defining the structure for each section or page, creating the designs and coding the interface up. As far as the back end is concerned, we will establish the logic early on, and develop the platform modularly.</p>',
          secondColumn: '<p><strong>Redesign. </strong>In order to create something that actually works, we need to understand not only the issues your company is trying to overcome, but also your objectives and the vision the company was built on. Once we understand that, we will be well positioned to start planning: how to overcome your company\'s pain points and create a site or app that will efficiently serve your goals.</p><p>After a plan is agreed on, we will get to the actual work, starting with the design stage - where we explore solutions and visual styles and define what the final product will look and feel like. We conclude the project with development, testing and finally, integration or deployment, as is the case.</p>',
          thirdColumn: '<p><strong>Consultation. </strong>For consulting projects we\'re lending our ideas and expertise to companies in need of either fresh, objective ideas or a professional\'s opinion. Like product design or redesign projects, we will start by understanding the whole picture and what it is you are trying to achieve. We will then put our minds to work and issue a report with our assessment of the situation and our recommendations. We do not charge for this service.</p>'
        },

        portfolio: {
          navigationHamburgerAnchorText: 'Our Work',
          header: {
            title: 'Our Work',
            description: 'These are some of our most recent projects, that we can talk about. Click on each preview to learn more about the work we did.'
          },

          anyvan: {
            projectName: 'AnyVan',
            sliderDescription: 'We worked with AnyVan in early 2014 to help them design their then upcoming iOS app. We handled the UI and UX and work with their team to help them make it a reality.',

            header: 'We worked with <strong>AnyVan</strong> in early 2014 to help them design their then upcoming iOS app. We handled the UI and UX and work with their team to help them make it a reality.',
            coverDescription: 'We worked with AnyVan in early 2014 to help them design their then upcoming iOS app. We handled the UI and UX and work with their team to help them make it a reality.',

            generic: {
              title: 'AnyVan',
              description: '<p>Anyvan’s organisational approach to providing on-demand cargo transport services is, in our opinion, deserving of all the awards it received and definitely a step in the right direction towards a cleaner, more efficient industry. By offering transport companies the opportunity to profit from the unused space in their trucks, they are not only reducing the number of unnecessary trips, but also benefiting customers who need a more affordable means of moving items across great distances.</p><p>They decided to make their services more accessible by launching a mobile app, for which we produced the interface, defined the experienced and worked closely with their development team to help implement it and shape the application. The resulting product was a friendly, easy to use app that would make AnyVan’s services even easier to benefit from.</p>'
            }
          },
          kartist: {
            projectName: 'Kartist',
            sliderDescription: 'The shots above are from one of our most recent projects, Kartist. Their app was intended to help shoppers everywhere manage their lists, find inspiration and connect with likeminded people.',

            header: 'We worked with <strong>Kartist</strong> in early 2015 - their platform aims to to help shoppers everywhere manage their lists, find inspiration and connect with likeminded people.',
            coverDescription: 'We worked with Kartist in early 2015 - their platform aims to to help shoppers everywhere manage their lists, find inspiration and connect with likeminded people.',

            // design
            uiAndCode: {
              title: 'Useful UI + Good Code',
              description: '<p>For this project we handled Kartist’s UI, coded the front end and created their browser extensions. We wanted, as with most projects, to create something that will make sense to their target audience - an interface that is logically organised and effortless to use, but also beautiful. When coupled with good code, we are confident Kartist’s experience will be an enjoyable one.</p><p>The screen to the left demonstrates how users are prompted to sign up or login. Instead of using a more intrusive solution, we decided to gently nudge the logo every 5 seconds until the user hovers over it to learn where the sign up panel is. We believe this way, users are will not feel forced to sign up.</p>'
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

            header: 'We worked with <strong>Grow with a CFO</strong> in 2015 to help them design their website and more easily showcase their services and processes.',
            coverDescription: 'We worked with Grow with a CFO in 2015 to help them design their website and more easily showcase their services and processes.',

            generic: {
              title: 'Grow with a CFO',
              description: '<p>Grow with a CFO - a financial consulting firm, needed a website to showcase their services, explain who they are and how they work. Our objective was to create a site that is adequate and would help them achieve their goals and expand their firm. After several weeks on the project, we believe we achieved that.</p><p>Our client reported the site has been performing well since it launched earlier this year and that they are quite happy with the results.</p>'
            }
          },
          quizkick: {
            projectName: 'QuizKick',
            sliderDescription: 'QuizKick tried to create a game that would give football fans around the world a chance to prove their knowledge. We worked on the design and the back end of the system.',

            header: '<strong>QuizKick</strong> tried to create a game that would give football fans around the world a chance to prove their knowledge. We worked on the design and the back end of the system.',
            coverDescription: 'QuizKick tried to create a game that would give football fans around the world a chance to prove their knowledge. We worked on the design and the back end of the system.',

            aim: {
              title: 'QuizKick',
              description: 'Aiming to become a means for football fans around the world to prove their knowledge and challenge the very best players, QuizKick makes use of a well crafted experience and quality aesthetics to become more than just another quiz game.'
            },
            next: {
              title: 'Next Up',
              description: 'QuizKick will be available for download soon. In the meantime you can see more of it, including awesome animations and concepts, by visiting our showcase.'
            }
          }
        }
      };
    }]);
})();
