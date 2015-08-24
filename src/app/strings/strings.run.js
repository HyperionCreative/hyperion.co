(function () {
  'use strict';

  angular
    .module('app.strings', [])
    .run(['$rootScope', function ($rootScope) {
      $rootScope.str = {
        globals: {
          phoneNumber: '+44 (0)1214-052-101'
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
            title: 'UI/UX Design',
            description: '<p>While there are many factors at work behind the interfaces people love, we would sum it up as follows: a good interface is one that makes sense to the people using it. One that is adequate, beautiful, logical and empathetic towards the user. We also believe technology should be simple and improve our lives in natural, almost invisible ways.</p><p>To achieve this, we look at the whole picture and try to plan ahead as clearly as possible - when every detail has its place and purpose, creativity and function come naturally.</p>'
          },
          consulting: {
            tabName: 'Consulting',
            title: 'Consulting',
            description: '<p>This is perhaps the most valuable aspect of working with any creative agency - having a team of experts in the creative fields to look at things from a different angle and bring insightful ideas to the table. From picking the best suited technologies, to helping structure your product correctly, we\'re here to lend our expertise and bring your idea a little closer to success.</p>'
          }
        },
        ourProcesses: {
          navigationHamburgerAnchorText: ' Our Processes',
          header: {
            title: 'Our Processes',
            description: 'While each project is unique, we do have established processes for tackling and organising various types of projects.'
          },
          firstColumn: '<p><strong>Product Design. </strong>Building a successful app or site requires more than a great, well timed idea - it requires careful planning and execution. We\'re here to help with the latter.</p><p>We understand each project is unique so instead of rushing to the nearest template store, we are going to spend some time understanding who you are, what it is you are trying to do and who is the target market for your product. We will then ink out a basic structure for the product start planning its execution. From a front-end perspective, this usually involves defining the structure for each section or page, creating the designs and coding the interface up. As far as the back end is concerned, we will establish the logic early on, and develop the platform modularly.</p>',
          secondColumn: '<p><strong>Redesign Projects. </strong>In order to create something that actually works, we need to understand not only the issues your company is trying to eliminate, but also the vision it was built on and your objectives. Once we understand that, we will be well positioned to start planning: how to overcome your company\'s pain points and create a site (or app) that will serve your goals. </p><p>After a plan is agreed on, we will get to the actual work, starting with the design stage - where we explore solutions and visual styles and define what the final product will look and feel like. We conclude the project with development, testing and finally, integration or deployment as is the case.</p>',
          thirdColumn: '<p><strong>Consultation. </strong>For consulting projects we\'re lending our ideas and expertise to companies in need of either fresh, objective ideas or a professional\'s opinion. Like product design or redesign projects, we will start by understanding the whole picture and what it is you are trying to achieve. We will then put our minds to work and issue a report with our assessment of the situation and our recommendations. We do not charge for this service.</p>'
        }
      };
    }]);
})();
