import { config, collection, singleton, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: { owner: 'feldelux-lgtm', name: 'falden-haynes-coaching-' },
  },
  ui: {
    brand: { name: 'Feldon Haynes — CMS' },
  },

  singletons: {

    site_settings: singleton({
      label: 'Site settings',
      path: 'src/data/site-settings',
      schema: {
        email: fields.text({ label: 'Email address', defaultValue: 'Feldonhaynes@gmail.com' }),
        phone: fields.text({ label: 'Phone number', defaultValue: '07562 614867' }),
        whatsapp_url: fields.text({ label: 'WhatsApp URL', defaultValue: 'https://wa.me/447562614867' }),
        location: fields.text({ label: 'Location', defaultValue: 'Halesowen, West Midlands' }),
        linkedin_url: fields.text({ label: 'LinkedIn URL', defaultValue: 'https://www.linkedin.com/in/feldon-haynes/' }),
        linktree_url: fields.text({ label: 'Linktree URL', defaultValue: 'https://linktr.ee/Feldeluxe' }),
        trustpilot_url: fields.text({ label: 'Trustpilot URL', defaultValue: 'https://uk.trustpilot.com/review/feldonhaynes.com' }),
        google_reviews_url: fields.text({ label: 'Google Reviews URL', defaultValue: 'https://www.google.com/search?q=feldon+haynes+coaching' }),
        calendly_discovery: fields.text({ label: 'Calendly — Discovery call', defaultValue: 'https://calendly.com/feldon-haynes/discovery-call' }),
        calendly_bundle_starter: fields.text({ label: 'Calendly — Project Bundle', defaultValue: 'https://calendly.com/feldon-haynes/packages/da7fbbe4-840c-4ea8-8147-2128f99cfd6b' }),
        calendly_bundle_foundation: fields.text({ label: 'Calendly — Action Sprint', defaultValue: 'https://calendly.com/feldon-haynes/packages/549dd535-e12c-4506-822a-9a839af25318' }),
        calendly_bundle_action: fields.text({ label: 'Calendly — Business Plan', defaultValue: 'https://calendly.com/feldon-haynes/packages/8af8f4b4-b4fc-4b38-a4d7-4c8863f57ce5' }),
        calendly_bundle_full: fields.text({ label: 'Calendly — Direction Bundle', defaultValue: 'https://calendly.com/feldon-haynes/packages/bcd3e931-3e20-4faa-9d96-2a82cc4e121a' }),
      },
    }),

    homepage: singleton({
      label: 'Homepage',
      path: 'src/data/homepage',
      schema: {
        // ── Hero ──────────────────────────────────────────────────────────
        hero_chip: fields.text({ label: 'Hero — chip tag', defaultValue: '1-to-1 Entrepreneurial Coaching' }),
        hero_headline: fields.text({ label: 'Hero — headline (H1)', multiline: true, defaultValue: "The business coach who's actually built businesses." }),
        hero_subheading: fields.text({ label: 'Hero — subheading', multiline: true, defaultValue: '1-to-1 business and project planning coaching for small business owners and ambitious founders. From someone who has actually built businesses, not just read about them.' }),
        hero_cta_primary: fields.text({ label: 'Hero — primary CTA button', defaultValue: 'Book your free discovery call' }),
        hero_cta_secondary: fields.text({ label: 'Hero — secondary CTA button', defaultValue: 'See how it works' }),
        hero_trust_1: fields.text({ label: 'Hero — trust item 1', defaultValue: '35+ businesses started from scratch' }),
        hero_trust_2: fields.text({ label: 'Hero — trust item 2', defaultValue: '40+ founders supported' }),
        hero_trust_3: fields.text({ label: 'Hero — trust item 3', defaultValue: '3 industry awards including EPIC Spirit Award' }),
        hero_float_number: fields.text({ label: 'Hero — floating stat number', defaultValue: '40+' }),
        hero_float_label: fields.text({ label: 'Hero — floating stat label', defaultValue: 'Founders supported' }),
        hero_award_chip: fields.text({ label: 'Hero — award chip', defaultValue: 'EPIC Spirit Award' }),

        // ── Problem Grid ──────────────────────────────────────────────────
        prob_chip: fields.text({ label: 'Problems — chip tag', defaultValue: "Who it's for" }),
        prob_h2: fields.text({ label: 'Problems — heading', defaultValue: 'Is this you?' }),
        prob_intro: fields.text({ label: 'Problems — intro text', multiline: true, defaultValue: 'Four types of founders come through my door. One of them is you.' }),
        prob_card1_chip: fields.text({ label: 'Card 1 — label', defaultValue: 'Aspiring Founder' }),
        prob_card1_title: fields.text({ label: 'Card 1 — title', defaultValue: "You've got the idea. Now what?" }),
        prob_card1_body: fields.text({ label: 'Card 1 — body', multiline: true, defaultValue: "You know you want to build something, but you don't know where to start. I'll help you turn it into a plan you can follow." }),
        prob_card2_chip: fields.text({ label: 'Card 2 — label', defaultValue: 'Early-Stage Founder' }),
        prob_card2_title: fields.text({ label: 'Card 2 — title', defaultValue: "You've started. Now it gets real." }),
        prob_card2_body: fields.text({ label: 'Card 2 — body', multiline: true, defaultValue: "The first steps are done. Now you're in the messy middle: money, systems, customers, all at once. Let's cut through it." }),
        prob_card3_chip: fields.text({ label: 'Card 3 — label', defaultValue: 'Stuck Founder' }),
        prob_card3_title: fields.text({ label: 'Card 3 — title', defaultValue: "You're running. But something's off." }),
        prob_card3_body: fields.text({ label: 'Card 3 — body', multiline: true, defaultValue: "Growth has stalled or the business feels harder than it should. I'll help you find out why, and fix it." }),
        prob_card4_chip: fields.text({ label: 'Card 4 — label', defaultValue: 'Business Owner' }),
        prob_card4_title: fields.text({ label: 'Card 4 — title', defaultValue: "Established. Now let's build on it." }),
        prob_card4_body: fields.text({ label: 'Card 4 — body', multiline: true, defaultValue: "Your business is running. But there's more: scaling, systemising, or just getting your time back. I can help with all of it." }),
        prob_cta: fields.text({ label: 'Problems — CTA button text', defaultValue: 'Book a free 30-minute call' }),

        // ── Steps / Services ──────────────────────────────────────────────
        steps_chip: fields.text({ label: 'Steps — chip tag', defaultValue: 'How it works' }),
        steps_h2: fields.text({ label: 'Steps — heading', defaultValue: '3 easy steps' }),
        step1_title: fields.text({ label: 'Step 1 — title', defaultValue: 'Got your idea?' }),
        step1_body: fields.text({ label: 'Step 1 — body', multiline: true, defaultValue: 'You have something in mind — a business, a project, a change you want to make. That is the starting point. Bring it as it is. Half-formed is fine.' }),
        step2_title: fields.text({ label: 'Step 2 — title', defaultValue: 'Choose the pack that suits your idea' }),
        step2_body: fields.text({ label: 'Step 2 — body', multiline: true, defaultValue: 'Not sure which package fits? Take the quick quiz and I will point you in the right direction.' }),
        step2_link: fields.text({ label: 'Step 2 — link text', defaultValue: 'Take the quiz' }),
        step3_title: fields.text({ label: 'Step 3 — title', defaultValue: 'Get a plan to bring your idea to life' }),
        step3_body: fields.text({ label: 'Step 3 — body', multiline: true, defaultValue: 'Real, structured, actionable. A plan built around your idea, your resources, and what you want to achieve.' }),
        step3_link: fields.text({ label: 'Step 3 — link text', defaultValue: 'Book a free call' }),

        // ── Session Includes ──────────────────────────────────────────────
        session_chip: fields.text({ label: 'Session — chip tag', defaultValue: 'Every session' }),
        session_h2: fields.text({ label: 'Session — heading', defaultValue: 'This is what you get. Every time.' }),
        session_sub: fields.text({ label: 'Session — sub text', defaultValue: 'Every bundle. Every session. No exceptions.' }),
        session_f1_title: fields.text({ label: 'Feature 1 — title', defaultValue: 'Recorded every time' }),
        session_f1_body: fields.text({ label: 'Feature 1 — body', multiline: true, defaultValue: 'Full replay in your inbox. Revisit any moment, any time.' }),
        session_f2_title: fields.text({ label: 'Feature 2 — title', defaultValue: 'Action plan the same day' }),
        session_f2_body: fields.text({ label: 'Feature 2 — body', multiline: true, defaultValue: 'Not next week. Written and in your inbox before you sleep.' }),
        session_f3_title: fields.text({ label: 'Feature 3 — title', defaultValue: "I'm reachable between sessions" }),
        session_f3_body: fields.text({ label: 'Feature 3 — body', multiline: true, defaultValue: 'Drop me a message when something comes up. I respond within 48 hours.' }),

        // ── About Teaser ──────────────────────────────────────────────────
        about_chip: fields.text({ label: 'About — chip tag', defaultValue: 'About Feldon' }),
        about_h2: fields.text({ label: 'About — heading', multiline: true, defaultValue: "I've started 35 businesses. Now I help you build yours." }),
        about_body1: fields.text({ label: 'About — paragraph 1', multiline: true, defaultValue: "I know what it's like to have an idea you believe in and not know where to take it next. I've also built businesses from scratch. Made the mistakes, figured out what works, and come out the other side with something real." }),
        about_body2: fields.text({ label: 'About — paragraph 2', multiline: true, defaultValue: "That's what I bring to every session. Not theory. Not frameworks from a book. Real experience from someone who's been in the same position and found a way through." }),
        about_stat1_num: fields.text({ label: 'About — stat 1 number', defaultValue: '35+' }),
        about_stat1_label: fields.text({ label: 'About — stat 1 label', defaultValue: 'Businesses started' }),
        about_stat2_num: fields.text({ label: 'About — stat 2 number', defaultValue: '40+' }),
        about_stat2_label: fields.text({ label: 'About — stat 2 label', defaultValue: 'Founders supported' }),
        about_stat3_num: fields.text({ label: 'About — stat 3 number', defaultValue: '3×' }),
        about_stat3_label: fields.text({ label: 'About — stat 3 label', defaultValue: 'Industry awards' }),
        about_award_chip: fields.text({ label: 'About — award overlay chip', defaultValue: '3× Award winner' }),
        about_btn1: fields.text({ label: 'About — primary button', defaultValue: 'Read my full story' }),
        about_btn2: fields.text({ label: 'About — secondary button', defaultValue: 'Book a free call' }),

        // ── Bundles section header ────────────────────────────────────────
        bundles_chip: fields.text({ label: 'Bundles — chip tag', defaultValue: 'Investment bundles' }),
        bundles_h2: fields.text({ label: 'Bundles — heading', defaultValue: 'Choose your starting point' }),
        bundles_intro: fields.text({ label: 'Bundles — intro text', multiline: true, defaultValue: 'Launch pricing. All sessions online, Wednesdays and Thursdays, 8am to 6pm.' }),

        // ── Testimonials header ───────────────────────────────────────────
        test_h2: fields.text({ label: 'Testimonials — heading', multiline: true, defaultValue: "Honest words from people I've worked with." }),
        test_sub: fields.text({ label: 'Testimonials — sub text', multiline: true, defaultValue: 'Real feedback from founders and business owners. Verified on Trustpilot.' }),

        // ── Final CTA ─────────────────────────────────────────────────────
        cta_chip: fields.text({ label: 'CTA — chip tag', defaultValue: 'Ready to start?' }),
        cta_h2: fields.text({ label: 'CTA — heading', defaultValue: "Let's build something real together." }),
        cta_body: fields.text({ label: 'CTA — body text', multiline: true, defaultValue: "Your free 30-minute discovery call costs nothing. I'll listen to where you are, tell you honestly whether I think I can help, and if we're a good fit, we'll talk next steps. No pitch. No pressure." }),
        cta_social_text: fields.text({ label: 'CTA — social proof text', defaultValue: '40+ founders already working with Feldon' }),
        cta_btn: fields.text({ label: 'CTA — button text', defaultValue: 'Book your free discovery call' }),
        cta_note: fields.text({ label: 'CTA — note below button', defaultValue: 'Free · 30 minutes · No obligation' }),
      },
    }),

    about_page: singleton({
      label: 'About page',
      path: 'src/data/about-page',
      schema: {
        story_p1: fields.text({ label: 'Story — paragraph 1', multiline: true }),
        story_p2: fields.text({ label: 'Story — paragraph 2', multiline: true }),
        story_p3: fields.text({ label: 'Story — paragraph 3', multiline: true }),
        story_p4: fields.text({ label: 'Story — paragraph 4', multiline: true }),
        mission_heading: fields.text({ label: 'Mission heading', defaultValue: 'My mission' }),
        mission_body: fields.text({ label: 'Mission body', multiline: true }),
        years_coaching: fields.text({ label: 'Years coaching stat', defaultValue: '10+' }),
        businesses_started: fields.text({ label: 'Businesses started stat', defaultValue: '35+' }),
        founders_supported: fields.text({ label: 'Founders supported stat', defaultValue: '40+' }),
      },
    }),

    nav: singleton({
      label: 'Navigation',
      path: 'src/data/nav',
      schema: {
        cta_text: fields.text({ label: 'CTA button text', defaultValue: 'Book a call' }),
        cta_text_mobile: fields.text({ label: 'CTA button text (mobile menu)', defaultValue: 'Book a free call' }),
      },
    }),

    footer: singleton({
      label: 'Footer',
      path: 'src/data/footer',
      schema: {
        tagline: fields.text({ label: 'Tagline', multiline: true, defaultValue: "1-to-1 business coaching for ambitious founders.\nFrom someone who's actually done it." }),
        copyright: fields.text({ label: 'Copyright text', defaultValue: '© 2026 Feldon Haynes Coaching · All rights reserved.' }),
        cta_text: fields.text({ label: 'Footer CTA button text', defaultValue: 'Book a free call' }),
      },
    }),

    contact_page: singleton({
      label: 'Contact page',
      path: 'src/data/contact-page',
      schema: {
        hero_heading: fields.text({ label: 'Page heading', defaultValue: 'Get in touch' }),
        hero_sub: fields.text({ label: 'Page subheading', multiline: true, defaultValue: "Not sure where to start? Take the quick quiz below and I'll point you in the right direction." }),
        quiz_heading: fields.text({ label: 'Quiz section heading', defaultValue: 'Not sure where to start?' }),
        quiz_body: fields.text({ label: 'Quiz section body', multiline: true, defaultValue: "Eight quick questions. I'll tell you which package fits where you are right now, or whether a free call makes more sense first." }),
        options_heading: fields.text({ label: 'Contact options heading', defaultValue: "I'm easy to reach." }),
        email_card_body: fields.text({ label: 'Email card body', defaultValue: "Send me a message and I'll reply within 48 hours." }),
        whatsapp_card_body: fields.text({ label: 'WhatsApp card body', defaultValue: "Drop me a message and I'll get back to you." }),
        call_card_body: fields.text({ label: 'Book a call card body', defaultValue: '30 minutes, no pitch, no pressure. Just a conversation.' }),
      },
    }),

    privacy_page: singleton({
      label: 'Privacy policy',
      path: 'src/data/privacy-page',
      schema: {
        last_updated: fields.text({ label: 'Last updated date', defaultValue: '27 June 2025' }),
        content: fields.document({
          label: 'Privacy policy content',
          formatting: true,
          links: true,
        }),
      },
    }),

    terms_page: singleton({
      label: 'Terms & conditions',
      path: 'src/data/terms-page',
      schema: {
        last_updated: fields.text({ label: 'Last updated date', defaultValue: '27 June 2025' }),
        content: fields.document({
          label: 'Terms & conditions content',
          formatting: true,
          links: true,
        }),
      },
    }),

  },

  collections: {

    blog: collection({
      label: 'Blog posts',
      path: 'src/data/blog/*',
      slugField: 'title',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true, description: 'Short summary shown on blog index.' }),
        date: fields.date({ label: 'Published date' }),
        featured_image: fields.image({
          label: 'Featured image',
          directory: 'public/Images/blog',
          publicPath: '/Images/blog/',
        }),
        author: fields.text({ label: 'Author', defaultValue: 'Feldon Haynes' }),
        seo_title: fields.text({ label: 'SEO title (leave blank to use post title)' }),
        seo_description: fields.text({ label: 'Meta description', multiline: true }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: { directory: 'public/Images/blog', publicPath: '/Images/blog/' },
        }),
      },
    }),

    testimonials: collection({
      label: 'Testimonials',
      path: 'src/data/testimonials/*',
      slugField: 'reviewer_name',
      schema: {
        reviewer_name: fields.slug({ name: { label: 'Reviewer name', description: 'First name only, or first name + last initial.' } }),
        reviewer_role: fields.text({ label: 'Role or context', description: 'E.g. "Founder, London"' }),
        quote: fields.text({ label: 'Testimonial quote', multiline: true }),
        source: fields.select({
          label: 'Source',
          options: [
            { label: 'Trustpilot', value: 'trustpilot' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Google', value: 'google' },
            { label: 'Direct', value: 'direct' },
          ],
          defaultValue: 'trustpilot',
        }),
        avatar_initial: fields.text({ label: 'Avatar initial (single letter)', defaultValue: 'F' }),
        avatar_colour: fields.select({
          label: 'Avatar colour',
          options: [
            { label: 'Purple', value: 'purple' },
            { label: 'Navy', value: 'navy' },
            { label: 'Gold', value: 'gold' },
          ],
          defaultValue: 'purple',
        }),
        published: fields.checkbox({ label: 'Show on website', defaultValue: true }),
      },
    }),

    bundles: collection({
      label: 'Coaching bundles',
      path: 'src/data/bundles/*',
      slugField: 'name',
      schema: {
        name: fields.slug({ name: { label: 'Bundle name' } }),
        tagline: fields.text({ label: 'Tagline (shown under name)', defaultValue: 'Specific project' }),
        sessions: fields.number({ label: 'Number of sessions', validation: { isRequired: true, min: 1 } }),
        price: fields.number({ label: 'Current price (£)', validation: { isRequired: true, min: 0 } }),
        price_was: fields.number({ label: 'Was price (£)', validation: { isRequired: true, min: 0 } }),
        description: fields.text({ label: 'Short description', multiline: true }),
        calendly_url: fields.text({ label: 'Calendly booking URL' }),
        sort_order: fields.number({ label: 'Sort order (1–4)', validation: { isRequired: true, min: 1, max: 4 } }),
        most_popular: fields.checkbox({ label: 'Show "Most Popular" badge', defaultValue: false }),
      },
    }),

  },
});
