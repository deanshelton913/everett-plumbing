export const PHONE_NUMBERS = {
  'everett-plumbers': '4254722069'
}

export const BUSINESS = 'everett-plumbers';

export const BUSINESS_SPECIFIC_DATA = {
  'everett-plumbers': {
    url: "https://www.everett-plumbers.com",
    name: 'Everett Plumbers',
    slogan: 'Plumbing Excellence, Guaranteed Satisfaction!',
    phone: '4254722069',
    businessType: 'HomeAndConstructionBusiness',
    description: 'Plumbers servicing the greater Everett area. Flawless Flow, Exceptional Service. Everett Plumbers',
    keywords: ['emergency plumbing repair', 'Everett plumber', 'plumbing companies in everett wa', 'best plumbing everett', 'plumbing service everett wa', 'plumber in everett wa', 'emergency plumber near me', '24 hour plumber', 'northeast plumbing'],
    streetAddress: '123 Main Street',
    addressLocality: 'Everett',
    addressRegion: 'WA',
    postalCode: '98201',
    addressCountry: 'US',
    hero: {
      title: 'Your Trusted Plumbing Partner in Everett',
      backgroundImage: `${BUSINESS}/tools.webp`,
      paragraphs: [
        `We pride ourselves on being the premier choice for plumbing services in the Everett area. With our unwavering commitment to reliability and excellence, backed by our certification and expertise, we are dedicated to providing top-notch plumbing solutions to meet all your needs.`,
        `Whether it's a routine maintenance task or an emergency repair, our team of skilled professionals is here to ensure that your plumbing systems operate smoothly and efficiently. Trust us to deliver unparalleled service and peace of mind for your home or business in Everett.`
      ]
    },
    testimonials:{
      backgroundImage: `${BUSINESS}/the-team.webp`,
      quotes:[
        {
          quote: `Everett Plumbers came to our rescue when we had a major leak in our kitchen. Their response was quick, and their team was incredibly professional. They fixed the issue efficiently and even provided helpful tips to prevent future problems. I highly recommend their services!`,
          author: 'Sarah Wheeler',
          location: 'Snohomish, WA'
        },
        {
          quote: `I couldn't be happier with the plumbing work done by Everett Plumbers. From the initial call to the completion of the job, they were courteous, knowledgeable, and thorough. They exceeded my expectations and left my home in pristine condition. Thank you for your outstanding service!`,
          author: 'Kyle Kim',
          location: 'Everett, WA'
        },
        {
          quote: `Everett Plumbers is the only plumbing service I trust for all my plumbing needs. They've helped me with everything from minor repairs to full bathroom remodels, and each time, they've delivered exceptional results. I'm grateful to have found such a reliable and trustworthy plumbing company.`,
          author: 'Samantha Wallington',
          location: 'Everett, WA'
        },
    ]
    },
    servicesDescription: `If you're dealing with a leak or struggling to locate its source, rest assured, we've got your back. Our seasoned team of Everett plumbers is well-versed in plumbing matters and can promptly pinpoint the issue. You'll receive an honest assessment along with a transparent cost estimate.`,
    services: [
      {
        slug: 'water-lines',
        title:'',
        description:'',
        header:'',
        subHeader:'',
        text:[],
        photo:'',
        teaser: {
          title: 'Water Lines',
          imageKey: '/water-lines.webp',
          text: "Our expert plumbers ensure your water lines are flawlessly installed and efficiently maintained.",
        }
      },
      {
        slug: 'drain-cleaning',
        teaser: {
          title: 'Drains',
          imageKey: '/drain-cleaning.webp',
          text: "Say goodbye to clogged drains with our professional plumbing services. We tackle tough clogs swiftly and effectively, restoring your drains to optimal performance.",
        }
      },
      {
        slug: 'sewer-repair',
        teaser: {
          title: 'Sewer Repair',
          imageKey: '/sewer-repair.webp',
          text: "Don't let sewer issues disrupt your daily routine. Our skilled team specializes in sewer repair, addressing problems promptly to prevent further damage.",
        }
      },
      {
        slug: 'water-leaks',
        teaser: {
          title: 'Leaks',
          imageKey: '/water-leaks.webp',
          text: "Leaks can lead to costly damage if left unchecked. Our experienced plumbers quickly detect and repair leaks.",
        }
      }
    ]
  }
}